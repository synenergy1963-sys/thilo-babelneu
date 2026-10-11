// ============ ThiLo! — Dokument-Veredelung v2 (Silber → Gold) ============
// **Kernsatz: Eine Dokumentseite (Anleitung, Manifest, …) lässt sich vom Nutzer selbst in jede Sprache bringen —
// ohne Server, ohne dass je jemand außer ihm selbst übersetzt hat — und die Übersetzung bleibt auch dann richtig
// zugeordnet, wenn der deutsche Text später geändert wird.**
//
// Ablauf (gleiches Prinzip wie bei Vokabeln/Phrasen, nur auf ein ganzes Dokument angewendet):
//   1) Silber-Export: die deutschen Absätze + ein fertiger Prompt, als JSON-Datei zum Download.
//   2) Der Nutzer gibt die Datei seiner eigenen KI, die sie in seine Sprache überträgt.
//   3) Gold-Import: die übersetzte Datei wird im Browser gespeichert UND sofort angezeigt.
//   Danach zeigt die Seite auf diesem Gerät automatisch diese Sprache (die Ankersprache von Babel, sonst die zuletzt gewählte).
//
// Was gegenüber Version 1 neu ist (jeweils Wunsch → Wirkung):
//   • Zuordnung per Kurzzeichen (Hash) des deutschen Absatzes statt per Position → ändert sich der deutsche Text,
//     verrutscht keine Übersetzung; der geänderte Absatz bleibt deutsch und wird als "neu/geändert" gemeldet.
//   • "Nur Neues exportieren" → nach einer Textänderung muss nicht das ganze Dokument neu übersetzt werden.
//   • pageId in Silber und Gold, Import prüft sie → die Manifest-Datei lässt sich nicht in die Anleitung laden.
//   • Formatierung bleibt erhalten (fett, kursiv, Code, Links, Farbe) über kleine Platzhalter wie [b]…[/b];
//     Schloss-Marken und Knopfnamen (data-keep / data-ui) übersetzt die KI nie, die Seite setzt sie selbst ein.
//   • Hebräisch & Co. → beim Anwenden werden lang= und dir="rtl" der Seite gesetzt.
//   • Speicher in IndexedDB (wie Babel), alte Gold-Dateien/Speicherstände von Version 1 funktionieren weiter.
//   • Der Anker wird aus Babels IndexedDB gelesen (dort liegt er seit 7.10.2026), nicht mehr aus localStorage.
//
// Einbindung pro Seite (z. B. am Ende von anleitung.html):
//   const v = initDocVeredelung("anleitung", "h1, h2, h3, p, li, .box, th, td", { builtin: { en: THILO_DOC_EN } });
//   await v.ready; await v.autoApplyOnLoad(); v.mountBar(document.getElementById("docbar"), { pro: true });
// pageId muss je Dokument eindeutig sein (manifest, anleitung, …).

(function (global) {
  "use strict";

  // Dieselbe Liste wie die Ankersprachen in Babel (ui-strings.js). Latein hat dort keine Menüübersetzung, bleibt weg.
  const LANG_NAMES = {
    de: "Deutsch", hu: "Ungarisch", en: "Englisch", fr: "Französisch", it: "Italienisch",
    es: "Spanisch", pl: "Polnisch", cs: "Tschechisch", ru: "Russisch", tr: "Türkisch",
    hr: "Kroatisch", sk: "Slowakisch", sl: "Slowenisch", ro: "Rumänisch", uk: "Ukrainisch",
    sr: "Serbisch", el: "Griechisch", bs: "Bosnisch", sq: "Albanisch", he: "Hebräisch"
  };
  const RTL = { he: 1, ar: 1, fa: 1, ur: 1 };

  // ---------- kleine Helfer ----------
  function norm(s) { return String(s).replace(/\s+/g, " ").trim(); }
  // FNV-1a 32 Bit + Länge: kurz, schnell, ohne Bibliothek. Reicht als Kurzzeichen für einige hundert Absätze.
  function hashOf(s) {
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    return h.toString(16).padStart(8, "0") + "-" + s.length;
  }
  function shortLang(code) { return code ? String(code).split("-")[0].toLowerCase() : null; }

  // ---------- Speicher: IndexedDB (eigene DB), Rückfall localStorage ----------
  // **Kernsatz: Übersetzungen eines ganzen Dokuments können groß werden — sie gehören wie bei Babel in IndexedDB.**
  function defaultKV() {
    const DB = "thilo-doc-db", STORE = "kv";
    let db = null;
    function open() {
      return new Promise(res => {
        try {
          const r = indexedDB.open(DB, 1);
          r.onupgradeneeded = () => r.result.createObjectStore(STORE);
          r.onsuccess = () => res(r.result);
          r.onerror = () => res(null);
        } catch (e) { res(null); }
      });
    }
    return {
      async load() {
        const out = {};
        db = await open();
        if (db) {
          await new Promise(resolve => {
            try {
              const req = db.transaction(STORE, "readonly").objectStore(STORE).openCursor();
              req.onsuccess = ev => { const c = ev.target.result; if (c) { out[c.key] = c.value; c.continue(); } else resolve(); };
              req.onerror = () => resolve();
            } catch (e) { resolve(); }
          });
        } else {
          try {
            for (let i = 0; i < localStorage.length; i++) {
              const k = localStorage.key(i);
              if (k.indexOf("thilo-doc2:") === 0) out[k.slice(11)] = JSON.parse(localStorage.getItem(k));
            }
          } catch (e) {}
        }
        return out;
      },
      save(key, value) {
        if (db) { try { db.transaction(STORE, "readwrite").objectStore(STORE).put(value, key); return; } catch (e) {} }
        try { localStorage.setItem("thilo-doc2:" + key, JSON.stringify(value)); } catch (e) {}
      }
    };
  }

  // ---------- Anker aus Babels Datenbank ----------
  // **Kernsatz: Babel speichert den Anker seit der IndexedDB-Umstellung in "thilo-babel-db"/"kv", nicht mehr in localStorage.**
  // Öffnet die DB ohne Versionsnummer und bricht ab, falls sie nicht existiert (sonst würde ein leere DB angelegt).
  function readBabelAnchor() {
    return new Promise(resolve => {
      let done = false;
      const fin = v => {
        if (done) return; done = true;
        if (!v) { try { v = localStorage.getItem("thilo-babel-anchor"); } catch (e) { v = null; } }
        resolve(v || null);
      };
      try {
        const r = indexedDB.open("thilo-babel-db");
        r.onupgradeneeded = () => { try { r.transaction.abort(); } catch (e) {} fin(null); };
        r.onsuccess = () => {
          try {
            const d = r.result;
            if (!d.objectStoreNames.contains("kv")) { d.close(); fin(null); return; }
            const g = d.transaction("kv", "readonly").objectStore("kv").get("thilo-babel-anchor");
            g.onsuccess = () => { d.close(); fin(g.result || null); };
            g.onerror = () => { d.close(); fin(null); };
          } catch (e) { fin(null); }
        };
        r.onerror = () => fin(null);
      } catch (e) { fin(null); }
    });
  }

  // ====================== Hauptfunktion ======================
  function initDocVeredelung(pageId, selector, opts) {
    opts = opts || {};
    const doc = opts.document || global.document;
    const kv = opts.kv || defaultKV();
    // acceptLegacy: true erlaubt Gold-Dateien aus Version 1 (Position statt Kurzzeichen, keine pageId) — standardmäßig aus.
    const builtin = opts.builtin || {};
    const anchorReader = opts.readAnchor || readBabelAnchor;
    const SKIP = "[data-no-translate]";

    let cache = {};
    let items = null;        // v2-Absätze (Blätter), Reihenfolge wie im Dokument
    let legacyEls = null;    // Elemente in der Zählweise von Version 1 (für alte Gold-Dateien)
    const snap = new Map();  // Element -> Original-Knoten (deutsch), zum Zurücksetzen
    let currentLang = "de";
    const api = { LANG_NAMES, pageId, report: null };

    // ---------- Absätze einsammeln ----------
    function insideSkip(el) { return el.closest ? !!el.closest(SKIP) : false; }
    function collect() {
      if (items) return items;
      const all = Array.from(doc.querySelectorAll(selector)).filter(el => !insideSkip(el));
      // Blatt-Regel: ein Element zählt nur, wenn kein weiteres Treffer-Element in ihm steckt (sonst doppelte Absätze).
      const leaves = all.filter(el => !el.querySelector(selector));
      items = [];
      leaves.forEach(el => {
        const ctx = { keeps: [], uis: {} };
        const raw = norm(ser(el, ctx));
        if (raw.length < 2) return;
        items.push({ el, de: raw, h: hashOf(raw), keeps: ctx.keeps, uis: ctx.uis });
      });
      return items;
    }
    function legacyElements() {
      if (legacyEls) return legacyEls;
      legacyEls = Array.from(doc.querySelectorAll(selector)).filter(el => el.textContent && el.textContent.trim().length > 1);
      return legacyEls;
    }
    function ensureSnap(el) {
      if (!snap.has(el)) snap.set(el, Array.from(el.childNodes).map(n => n.cloneNode(true)));
    }
    function restoreAll() {
      snap.forEach((nodes, el) => el.replaceChildren.apply(el, nodes.map(n => n.cloneNode(true))));
    }

    // ---------- Serialisieren: Element -> Text mit Platzhaltern ----------
    function ser(node, ctx) {
      let out = "";
      for (let i = 0; i < node.childNodes.length; i++) {
        const n = node.childNodes[i];
        if (n.nodeType === 3) { out += n.textContent; continue; }
        if (n.nodeType !== 1) continue;
        const tag = n.nodeName.toLowerCase();
        if (n.hasAttribute("data-keep")) { ctx.keeps.push(n); out += "[[keep:" + (ctx.keeps.length - 1) + "]]"; continue; }
        if (n.hasAttribute("data-ui")) { const k = n.getAttribute("data-ui"); ctx.uis[k] = n.textContent; out += "[[ui:" + k + "]]"; continue; }
        const inner = ser(n, ctx);
        if (tag === "b" || tag === "strong") out += "[b]" + inner + "[/b]";
        else if (tag === "i" || tag === "em") out += "[i]" + inner + "[/i]";
        else if (tag === "code") out += "[c]" + inner + "[/c]";
        else if (tag === "br") out += "[br]";
        else if (tag === "a") {
          const href = n.getAttribute("href") || "";
          out += /^(mailto:|https?:|#)/.test(href) && !/[\]\s]/.test(href) ? "[a:" + href + "]" + inner + "[/a]" : inner;
        } else if (tag === "span" && n.classList.contains("gold")) out += "[s:gold]" + inner + "[/s]";
        else if (tag === "span" && n.classList.contains("blue")) out += "[s:blue]" + inner + "[/s]";
        else out += inner;
      }
      return out;
    }

    // ---------- Deserialisieren: Text mit Platzhaltern -> sichere DOM-Knoten (nie innerHTML!) ----------
    // **Kernsatz: Die KI liefert nur Text; die Seite baut daraus selbst Elemente, und zwar nur aus einer festen Erlaubnisliste.**
    const TOKEN = /\[\[(keep|ui):([^\]]+)\]\]|\[(b|i|c|br|s:gold|s:blue|a:[^\]\s]+)\]|\[\/(b|i|c|s|a)\]/g;
    function uiText(lang, key, fallback) {
      // **Kernsatz: Knopfnamen in der Anleitung kommen aus ui-strings.js, damit sie genauso heißen wie in der App.**
      // Wichtig: UI_STRINGS ist dort mit "const" deklariert und hängt deshalb NICHT an window — es muss über den
      // Namen angesprochen werden (typeof schützt, falls ui-strings.js auf der Seite nicht eingebunden ist).
      try {
        const table = (typeof UI_STRINGS !== "undefined") ? UI_STRINGS : null;
        const k = (typeof uiLangKey === "function") ? uiLangKey(lang) : lang;
        const v = table && table[k] && table[k][key];
        if (typeof v === "string") return v;
      } catch (e) {}
      return fallback;
    }
    function deser(str, item, lang) {
      const frag = doc.createDocumentFragment();
      const stack = [{ el: frag, t: "root" }];
      const cur = () => stack[stack.length - 1].el;
      let last = 0, m;
      TOKEN.lastIndex = 0;
      while ((m = TOKEN.exec(str)) !== null) {
        if (m.index > last) cur().appendChild(doc.createTextNode(str.slice(last, m.index)));
        last = TOKEN.lastIndex;
        if (m[1] === "keep") {
          const src = item.keeps[parseInt(m[2], 10)];
          if (src) cur().appendChild(src.cloneNode(true));
        } else if (m[1] === "ui") {
          const s = doc.createElement("span");
          s.setAttribute("data-ui", m[2]); s.setAttribute("class", "uibtn");
          s.textContent = uiText(lang, m[2], item.uis[m[2]] || "");
          cur().appendChild(s);
        } else if (m[3]) {
          const t = m[3];
          if (t === "br") { cur().appendChild(doc.createElement("br")); continue; }
          let el, kind;
          if (t === "b") { el = doc.createElement("strong"); kind = "b"; }
          else if (t === "i") { el = doc.createElement("em"); kind = "i"; }
          else if (t === "c") { el = doc.createElement("code"); kind = "c"; }
          else if (t.indexOf("s:") === 0) { el = doc.createElement("span"); el.setAttribute("class", t.slice(2)); kind = "s"; }
          else {
            // **Kernsatz: Aus einer importierten Datei darf nie ein Skript-Link entstehen.** Nur mailto:, http(s): und #Anker.
            const href = t.slice(2);
            if (/^(mailto:|https?:|#)/i.test(href)) { el = doc.createElement("a"); el.setAttribute("href", href); }
            else el = doc.createElement("span");
            kind = "a";
          }
          cur().appendChild(el); stack.push({ el, t: kind });
        } else if (m[4]) {
          if (stack.length > 1 && stack[stack.length - 1].t === m[4]) stack.pop(); // unpassende Schließmarke wird ignoriert
        }
      }
      if (last < str.length) cur().appendChild(doc.createTextNode(str.slice(last)));
      return frag;
    }

    // ---------- gespeicherte / eingebaute Übersetzung ----------
    function goldFor(lang) {
      const st = cache["gold:" + pageId + ":" + lang];
      const b = builtin[lang] ? toStored(builtin[lang]) : null;
      if (!st) return b;
      if (!b) return st;
      // Eigene Übersetzung hat Vorrang, eingebaute füllt nur Lücken.
      return { lang, map: Object.assign({}, b.map, st.map), legacy: st.legacy, stand: st.stand, saved: st.saved };
    }
    function toStored(data) {
      const map = {}; let legacy = null;
      (data.items || []).forEach(it => {
        if (typeof it.uebersetzt !== "string" || !it.uebersetzt.trim()) return;
        if (it.h) map[it.h] = it.uebersetzt;
        else if (typeof it.i === "number") { legacy = legacy || []; legacy.push({ i: it.i, uebersetzt: it.uebersetzt }); }
      });
      return { lang: data.lang, map, legacy, stand: data.stand || null };
    }
    api.hasGold = function (lang) { return lang === "de" || !!goldFor(lang); };
    api.availableLangs = function () {
      const out = ["de"];
      Object.keys(LANG_NAMES).forEach(l => { if (l !== "de" && goldFor(l)) out.push(l); });
      return out;
    };

    // ---------- Anwenden ----------
    api.applyGold = function (lang) {
      const r = applyGoldCore(lang);
      try { if (opts && typeof opts.onApply === "function") opts.onApply(currentLang, api.report); } catch (e) { console.warn("onApply:", e); }
      return r;
    };
    function applyGoldCore(lang) {
      lang = shortLang(lang) || "de";
      collect();
      restoreAll();
      const root = doc.documentElement;
      if (root) { root.setAttribute("lang", lang); root.setAttribute("dir", RTL[lang] ? "rtl" : "ltr"); }
      currentLang = lang;
      if (lang === "de") { api.report = { lang, gesamt: items.length, angewendet: 0, fehlend: 0 }; return 0; }
      const g = goldFor(lang);
      if (!g) { api.report = { lang, gesamt: items.length, angewendet: 0, fehlend: items.length }; return false; }
      let n = 0, fehlt = 0;
      items.forEach(it => {
        const t = g.map[it.h];
        if (typeof t === "string" && t) { ensureSnap(it.el); it.el.replaceChildren(deser(t, it, lang)); n++; }
        else fehlt++;
      });
      // Alte Gold-Dateien (Position statt Kurzzeichen): nur auf Elemente anwenden, die noch unverändert sind.
      if (g.legacy && !n) {
        const els = legacyElements();
        g.legacy.forEach(l => { const el = els[l.i]; if (el) { ensureSnap(el); el.textContent = l.uebersetzt; n++; } });
        fehlt = Math.max(0, items.length - n);
      }
      api.report = { lang, gesamt: items.length, angewendet: n, fehlend: fehlt };
      return n;
    }
    api.setLang = async function (lang) {
      lang = shortLang(lang) || "de";
      const n = api.applyGold(lang);
      cache["last:" + pageId] = lang; kv.save("last:" + pageId, lang);
      return n;
    };
    api.currentLang = () => currentLang;

    // ---------- Silber ----------
    // **Kernsatz: Das Silber enthält jeden verschiedenen deutschen Absatz genau einmal, samt Kurzzeichen "h".**
    api.buildSilver = function (lang, nurNeues) {
      lang = shortLang(lang);
      const name = LANG_NAMES[lang] || lang;
      const g = nurNeues ? goldFor(lang) : null;
      const seen = {}, list = [];
      collect().forEach((it, i) => {
        if (seen[it.h]) return; seen[it.h] = 1;
        if (g && g.map[it.h]) return;
        list.push({ h: it.h, i, de: it.de });
      });
      return {
        format: "thilo-doc-silver-2", pageId, lang,
        stand: new Date().toISOString().slice(0, 10),
        prompt:
          "Übersetze jeden Text im Feld \"de\" ins " + name + " (Sprachcode " + lang + "). " +
          "Gib AUSSCHLIESSLICH JSON zurück, exakt dieselbe Struktur wie unten (auch die Felder format, pageId, lang, stand), " +
          "aber ersetze in jedem Eintrag das Feld \"de\" durch ein Feld \"uebersetzt\" mit der Übersetzung. " +
          "Die Felder \"h\" und \"i\" und die Reihenfolge der Einträge bleiben unverändert. " +
          "Platzhalter in eckigen Klammern wie [b]…[/b], [i]…[/i], [c]…[/c], [s:gold]…[/s], [a:…]…[/a], [br], " +
          "[[keep:0]] und [[ui:…]] werden NICHT übersetzt und exakt so übernommen; der Text dazwischen wird übersetzt " +
          "und die Platzhalter stehen an der sinngemäß passenden Stelle. " +
          "Ton beibehalten: persönlich und warm (im Deutschen \"Du\"), Fachwörter und Produktnamen " +
          "(ThiLo!, Babel, Pro, Souverän, localize!, Bronze, Silber, Gold, Platin) bleiben unübersetzt. " +
          "Kürze nichts. Kein Vorspann, kein Nachwort, nur das JSON.",
        items: list
      };
    };
    api.silverExport = function (lang, nurNeues) {
      const payload = api.buildSilver(lang, nurNeues);
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const a = doc.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "Silber-" + pageId + "-" + payload.lang + (nurNeues ? "-neu" : "") + "-" + payload.stand + ".json";
      doc.body.appendChild(a); a.click(); a.remove();
      return payload.items.length;
    };

    // ---------- Gold ----------
    // **Kernsatz: Der Import prüft zuerst, ob die Datei überhaupt zu DIESER Seite gehört, und fügt Neues zum Bestand hinzu,
    // statt ihn zu ersetzen — so lassen sich Teil-Übersetzungen ("nur Neues") ergänzen.**
    api.goldImportText = async function (text) {
      let data;
      try { data = JSON.parse(text); } catch (e) { throw new Error("Das ist keine gültige Gold-Datei (kein lesbares JSON)."); }
      if (!data || !Array.isArray(data.items) || !data.lang) throw new Error("Das ist keine gültige Gold-Datei (Format passt nicht).");
      if (data.pageId && data.pageId !== pageId)
        throw new Error("Diese Datei gehört zur Seite \"" + data.pageId + "\", nicht zu \"" + pageId + "\". Import abgebrochen.");
      const lang = shortLang(data.lang);
      const neu = toStored(data);
      // **Kernsatz: Eine Datei ohne pageId UND ohne Kurzzeichen (Version 1) lässt sich keiner Seite sicher zuordnen.**
      // Wirkung: Sie wird nur angenommen, wenn die Seite das mit { acceptLegacy: true } ausdrücklich erlaubt (z. B. nur das Manifest).
      if (!data.pageId && !Object.keys(neu.map).length && neu.legacy && !opts.acceptLegacy)
        throw new Error("Diese Datei ist ein altes Format ohne Seitenangabe und kann dieser Seite nicht sicher zugeordnet werden. Bitte frisches Silber holen.");
      const key = "gold:" + pageId + ":" + lang;
      const old = cache[key] || { lang, map: {}, legacy: null };
      const merged = {
        lang, pageId,
        map: Object.assign({}, old.map, neu.map),
        legacy: neu.legacy || old.legacy || null,
        stand: data.stand || null, saved: new Date().toISOString()
      };
      if (!Object.keys(neu.map).length && !neu.legacy) throw new Error("Die Datei enthält keine Übersetzungen (Feld \"uebersetzt\" fehlt).");
      cache[key] = merged; kv.save(key, merged);
      cache["last:" + pageId] = lang; kv.save("last:" + pageId, lang);
      const n = api.applyGold(lang);
      return { lang, langName: LANG_NAMES[lang] || lang, neu: Object.keys(neu.map).length, count: n, legacy: !!neu.legacy && !Object.keys(neu.map).length };
    };
    api.goldImport = async function (file) { return api.goldImportText(await file.text()); };

    // ---------- Start ----------
    // Version-1-Speicherstände (localStorage "thilo-doc-gold-<pageId>-<lang>") werden einmalig übernommen.
    api.ready = (async function () {
      cache = await kv.load();
      try {
        Object.keys(LANG_NAMES).forEach(l => {
          const k = "thilo-doc-gold-" + pageId + "-" + l;
          const raw = localStorage.getItem(k);
          if (raw && !cache["gold:" + pageId + ":" + l]) {
            const d = JSON.parse(raw);
            if (d && Array.isArray(d.items)) {
              const st = toStored(Object.assign({}, d, { lang: l }));
              st.pageId = pageId; st.saved = new Date().toISOString();
              cache["gold:" + pageId + ":" + l] = st; kv.save("gold:" + pageId + ":" + l, st);
            }
          }
        });
        const old = localStorage.getItem("thilo-doc-lastlang-" + pageId);
        if (old && !cache["last:" + pageId]) cache["last:" + pageId] = old;
      } catch (e) {}
    })();

    // **Kernsatz: Beim Öffnen die passende Sprache zeigen — zuerst Babels Anker, dann die zuletzt hier gewählte.**
    api.autoApplyOnLoad = async function () {
      await api.ready;
      const anchor = shortLang(await anchorReader());
      const cands = [anchor, cache["last:" + pageId]].filter(Boolean);
      for (const l of cands) {
        if (l === "de") { api.applyGold("de"); return 0; }
        if (goldFor(l)) return api.applyGold(l);
      }
      api.applyGold("de");
      return false;
    };

    // ---------- Bedienleiste ----------
    // Pro: Sprachwahl + Silber + Gold. Free (pro:false): nur die eingebauten Sprachen als Umschalter (z. B. DE | EN).
    const T = {
      de: { lang: "Sprache", silver: "Silber holen", only: "nur Neues", gold: "Gold laden", ok: "übersetzt", stale: "neu oder geändert (bleiben Deutsch)", none: "Noch keine Übersetzung — zuerst Silber holen und der KI geben.", done: "Gold geladen" },
      en: { lang: "Language", silver: "Get silver file", only: "new only", gold: "Load gold file", ok: "translated", stale: "new or changed (stay German)", none: "No translation yet — get the silver file and give it to your AI.", done: "Gold loaded" }
    };
    api.mountBar = function (box, o) {
      o = o || {};
      if (!box) return;
      injectCss();
      const tt = () => (currentLang === "de" || !T[currentLang]) && currentLang === "de" ? T.de : T.en;
      box.className = "docbar";
      box.innerHTML = "";
      const status = doc.createElement("div"); status.className = "docbar-status";
      function paint() {
        const r = api.report; const t = tt();
        if (!r || r.lang === "de") { status.textContent = ""; return; }
        if (!api.hasGold(r.lang)) { status.textContent = t.none; return; }
        status.textContent = r.angewendet + " / " + r.gesamt + " " + t.ok + (r.fehlend ? " · " + r.fehlend + " " + t.stale : "");
      }
      if (!o.pro) {
        const langs = Object.keys(builtin);
        if (!langs.length) return;
        ["de"].concat(langs).forEach(l => {
          const b = doc.createElement("button"); b.type = "button"; b.textContent = l.toUpperCase(); b.setAttribute("data-lang", l);
          b.addEventListener("click", async () => { await api.setLang(l); mark(); paint(); });
          box.appendChild(b);
        });
        const mark = () => Array.from(box.querySelectorAll("button")).forEach(b => b.classList.toggle("on", b.getAttribute("data-lang") === currentLang));
        mark(); box.appendChild(status); return;
      }
      const sel = doc.createElement("select");
      function fillSel() {
        sel.innerHTML = "";
        Object.keys(LANG_NAMES).forEach(l => {
          const op = doc.createElement("option"); op.value = l;
          op.textContent = LANG_NAMES[l] + (l !== "de" && api.hasGold(l) ? " ✓" : "");
          if (l === currentLang) op.selected = true;
          sel.appendChild(op);
        });
      }
      fillSel();
      sel.addEventListener("change", async () => { await api.setLang(sel.value); fillSel(); paint(); });
      const only = doc.createElement("input"); only.type = "checkbox"; only.id = "docbar-only-" + pageId;
      const onlyL = doc.createElement("label"); onlyL.setAttribute("for", only.id); onlyL.textContent = " " + T.de.only;
      const bs = doc.createElement("button"); bs.type = "button"; bs.textContent = "⬇ " + T.de.silver;
      bs.addEventListener("click", () => { if (sel.value === "de") { status.textContent = "Bitte zuerst eine Zielsprache wählen."; return; } api.silverExport(sel.value, only.checked); });
      const file = doc.createElement("input"); file.type = "file"; file.accept = ".json,application/json"; file.style.display = "none";
      const bg = doc.createElement("button"); bg.type = "button"; bg.textContent = "⬆ " + T.de.gold;
      bg.addEventListener("click", () => file.click());
      file.addEventListener("change", async () => {
        if (!file.files[0]) return;
        try { const r = await api.goldImport(file.files[0]); fillSel(); sel.value = r.lang; paint(); status.textContent = T.de.done + ": " + r.langName + " · " + status.textContent; }
        catch (e) { status.textContent = "⚠ " + e.message; }
        file.value = "";
      });
      [sel, bs, onlyL, bg, file, status].forEach(x => box.appendChild(x));
      box.insertBefore(only, onlyL);
      paint();
    };
    function injectCss() {
      if (!doc.head || doc.getElementById("docbar-style")) return;
      const st = doc.createElement("style"); st.id = "docbar-style";
      st.textContent =
        ".docbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:14px 0;font-size:13px;color:var(--muted,#999)}" +
        ".docbar button,.docbar select{background:var(--surf,#1a1a1a);color:var(--text,#f0f0f0);border:1px solid var(--bord,#2a2a2a);border-radius:8px;padding:7px 12px;font:inherit;cursor:pointer}" +
        ".docbar button.on{border-color:var(--gold,#e8c547);color:var(--gold,#e8c547)}" +
        ".docbar-status{flex-basis:100%;font-size:12px;color:var(--muted,#999)}";
      doc.head.appendChild(st);
    }

    return api;
  }

  global.initDocVeredelung = initDocVeredelung;
  if (typeof module !== "undefined" && module.exports) module.exports = { initDocVeredelung, hashOf, norm };
})(typeof window !== "undefined" ? window : globalThis);

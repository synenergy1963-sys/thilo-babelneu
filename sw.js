// ThiLo! Babel Basic — Service Worker.
// Kernsatz: index.html, ui-strings.js und status-strings.js sind fürs erste Laden lebensnotwendig
// (ohne sie läuft die App nur noch mit dem Fallback aus index.html, siehe dort) — sie kommen fest
// in die Startliste. anleitung.html/thilo-manifest.html bewusst NICHT (eigenständige Seiten,
// siehe README, Abschnitt "Wunsch → Wirkung"). Fremde Adressen (Google, MyMemory) werden nie
// abgefangen oder zwischengespeichert.

// Bei jedem Deploy, der garantiert sofort greifen soll, diese Nummer erhöhen.
const CACHE_VERSION = "v12";
const CACHE = "babel-pro-shell-" + CACHE_VERSION;
const SHELL = [
  "/", "/index.html", "/manifest.json",
  "/ui-strings.js", "/status-strings.js"
];

self.addEventListener("install", (e) => {
  self.skipWaiting();
  // { cache: "reload" } erzwingt einen echten Netzwerk-Roundtrip auch beim ersten Befüllen,
  // statt versehentlich eine alte, browsereigene HTTP-Cache-Antwort zu übernehmen.
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      Promise.all(SHELL.map((url) =>
        fetch(url, { cache: "reload" })
          .then((r) => { if (r.ok) return c.put(url, r); })
          .catch(() => {})
      ))
    )
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// clone() MUSS vor der Rückgabe passieren, sonst "Response body is already used".
function cachePut(req, response) {
  if (!response || !response.ok) return;
  const copy = response.clone();
  caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== self.location.origin) return;

  // Navigation (HTML-Seiten, auch anleitung.html/thilo-manifest.html): immer zuerst frisch vom
  // Netz, dabei den browsereigenen HTTP-Cache umgehen; nur bei Netzfehler auf den Cache zurück.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req, { cache: "no-store" })
        .then((response) => { cachePut(req, response); return response; })
        .catch(() => caches.match(req).then((cached) => cached || caches.match("/index.html")))
    );
    return;
  }

  // Alle anderen eigenen Dateien (JS, Icons, ...): stale-while-revalidate — sofort aus dem
  // Cache antworten (schnell, funktioniert offline), im Hintergrund aktualisieren.
  e.respondWith(
    caches.match(req).then((cached) => {
      const networkFetch = fetch(req)
        .then((response) => { cachePut(req, response); return response; })
        .catch(() => cached);
      return cached || networkFetch;
    })
  );
});

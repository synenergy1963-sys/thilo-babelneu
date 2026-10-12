# ThiLo! Babel – Kontext-Export und KI-Aufruf (Baustein 3)

Stand: 12.10.2026, 09:35

## Überblick

An diesem Tag sind zwei Dinge dazugekommen:

1. **Kontext-Export** im Gesprächsprotokoll (Basic, Pro, Spark; dazu in Basic und Pro der EN/DE-Schalter): Ein Babel-Gespräch lässt sich als JSON exportieren, damit es in ThiLo! Note als Kontext (Splitter) landen kann.
2. **Baustein 3 – KI-Aufruf** in der Spark-Linie: Der Knopf „Senden“ im KI-Feld schickt Funke, Verlauf und Splitter an Google Gemini und zeigt die Antwort an.

Beides lebt in getrennten Linien (siehe nächster Abschnitt). Nichts davon ist mit echten Schlüsseln live getestet, nur mit simuliertem Google-Server.

## Die Linien (nicht vermischen)

| Linie | Datei (Lieferung) | `IST_PRO` | Zweck | Stand |
|---|---|---|---|---|
| **Basic** | `babel-basic-index.html` | `false` | Marktversion, immer kostenlos, Name „ThiLo! Babel“ | 12.10.2026, 09:00 |
| **Pro** | `babel-pro-index.html` | `true` | Linie vom 07.10.: mehrsprachiges Menü (Ankersprache), KI nur als Schalter 🧠, Name „ThiLo! Babel Pro“ | 12.10.2026, 09:00 |
| **Spark** | `babel-spark-index.html` | `true` | Experimentallinie: wie Pro plus KI-Kontext (Baustein 1–3, Funke, Gemini) | 12.10.2026, 09:15 |
| ~~Babelint~~ | – | – | Überholt; am 12.10.2026 zu **babelspark** umbenannt und mit der Spark-Linie deployt | – |

Basic und Pro stammen aus derselben Quelle (07.10.) und unterscheiden sich nur durch Name, `IST_PRO`, die Beschriftung „(Pro)“ bei Google Translate und den Menü-Umschalter (siehe unten). Spark enthält zusätzlich Baustein 1–3 und ist **nicht** Pro.

**Festlegung (11.10.2026):** Babel Basic bleibt immer kostenlos. Es ist eine Vollversion **ohne** Lernmodale, ohne Sprachschatzveredelung, ohne Localize! und ohne KI (auch ohne das Mehrsprachenmenü über die Ankersprache). **Mit** Symbolknopf-Modus, mit einem **EN/DE-Wahlschalter** im Menü und mit einem **voll kontextfähigen Gesprächsprotokoll** für ThiLo! Note. Der Name „Pro“ darf in Basic nirgends erscheinen (Menü, Versionszeile, Meta-Tags).

**Wunsch:** Wer Basic benutzt, kann sein Note professionell aufbauen und das Kontextfeld auch außerhalb von Babel nutzen, später auch mit Babel Pro, falls er es kauft. **Wirkung:** Der Kontext-Export ist deshalb ausdrücklich Teil von Basic (kein `data-pro-only`); alles andere aus Pro und Spark kommt nur nach ausdrücklicher Entscheidung nach Basic.

Folgen daraus:
- Der Knopf **Kontext** ist in allen Linien sichtbar, auch in Basic.
- Das **Mehrsprachenmenü über das Ankern** gibt es nur in Pro (und Spark); ebenso die **Veredelung** von Anleitung und Manifest.
- Basic hat keine KI: Aus dem Export macht eine Cloud-KI außerhalb den Splitter („notiere!“).
- Die Linien bleiben getrennt bearbeitet; nichts wird automatisch von Spark nach Basic übernommen.

## EN/DE-Schalter (geklärt 11.10., 19:00)

**Wunsch:** Basic soll Englisch und Deutsch anbieten, ohne das Ankern. **Wirkung:** Ein Schalter im Menü („Sprache für Status- und Hilfetexte“, Knopf EN/DE) stellt die Texte um.

- **Pro und Spark:** Der Schalter stellt nur die Status- und Hilfetexte um (`status-strings.js`). Das Menü folgt der Ankersprache (`ui-strings.js`). Sichtbar ist er in beiden Linien.
- **Basic:** Dieselbe Datei `status-strings.js`, aber der Schalter stellt **Menü und Status gemeinsam** um. Dafür hängt sich ein kleiner Block (nur wenn `IST_PRO` falsch ist) hinter `toggleUIModeB`: Er liest `uiModeB`, ruft `applyUILanguage("en"|"de")` auf und setzt den Untertitel des Schalters neu („Betrifft Menü und Meldungen im Hauptbildschirm“), weil der Pro-Text („folgt der Ankersprache“) in Basic nicht stimmt. Gespeichert wird in `thilo-babel-ui-mode-b` (localStorage, wie bisher).
- **Anleitung und Manifest:** Die Basic-Seiten haben schon einen DE|EN-Umschalter (`mountBar` mit `pro:false`, eingebaute englische Texte aus `doc-en-anleitung.js` und `doc-en-manifest.js`). Die Pro-Seiten haben die volle Sprachauswahl samt Silber/Gold. Am Index war dafür nichts zu ändern.
- **Statustexte:** `status-strings.js` aus Pro gilt unverändert auch für Basic. Mehr Funktionen heißt mehr Statuszeilen; in Basic erscheinen die Zeilen zu Anker, Localize! und Learn nie, weil die Knöpfe fehlen.
- **Geprüft** (Chromium mit den echten Dateien): Start deutsch, Klick wechselt Menü und Untertitel auf Englisch, zweiter Klick zurück; keine Skriptfehler.

## Weitergeben und Pro-Hinweis (nur Basic, 11.10., 19:40)

**Wunsch:** Wer mit Basic zufrieden ist, gibt es weiter (g&g – get & give, siehe Manifest) und findet den Weg zu Pro. **Wirkung:** Im Menü unter „Unterstützen“ stehen zwei neue Einträge, markiert mit `data-basic-only` (in Pro ausgeblendet):

- **Weitergeben / Pass it on:** öffnet das Teilen-Menü des Handys (`navigator.share`) mit kurzem Satz und der eigenen Adresse der App (`location.origin`, also die Netlify-Adresse). Ohne Teilen-Menü wird Satz und Link in die Zwischenablage kopiert.
- **Persönliche Babel – Pro:** verweist auf `/anleitung.html#pro-teaser`, nennt keinen Preis.
- Texte DE/EN folgen dem EN/DE-Schalter (kleine Tabelle `WEITERGABE` im Index). Im Browser mit den echten Strings-Dateien geprüft (Umschalten, Teilen mit Attrappe); das echte Teilen-Menü am Handy ist nicht geprüft.

## Status-Strings und Knopfbeschriftungen verdrahtet (12.10.2026, Basic und Pro)

**Wunsch:** Wer EN/DE umschaltet, soll keine deutschen Reste mehr sehen. **Wirkung:** Die Index-Dateien (Stand 07.10.) kannten viele Schlüssel aus `status-strings.js` und `ui-strings.js` noch nicht; sie sind jetzt angeschlossen.

- **Status (Gruppe B, `tb()`):** Übersetzungsfehler, Google-Key-Fach, Platzhalter, Notizen, Löschen-Hinweise, Lernmodus, Anker- und KI-Hinweis. Nach dem Umschalten zeichnet ein Block am Ende des Skripts die dynamischen Stellen neu.
- **Knöpfe (Gruppe A, `data-i18n`):** Sprechen, Übersetzen, Alles löschen, Protokoll-Kopf und -Knöpfe, Hinzufügen/Laden/Importieren in Vokabel- und Phrasenfenster, Hilfetext unter Auto-Translate. Hilfsfunktion `uiT(key)` für Texte, die im Code gesetzt werden: Basic folgt dem EN/DE-Schalter, Pro der Ankersprache.
- **Basic:** Der Localize!-Zusatz im Auto-Translate-Hilfetext wird entfernt.
- **Nachtrag 02:10:** Hinweise an den Wiederhol-Knöpfen (kleine Tabelle `REPEAT_T`, folgt dem Schalter), Platzhalter im Übersetzungsfeld, „X spricht“ über den Feldern (`speaksLabel` aus `ui-strings.js`) und die **Sprachnamen** in Listen und Labels (`langName` über `Intl.DisplayNames`: Basic folgt dem EN/DE-Schalter, Pro der Ankersprache).
- **Offen:** `noEntries` (CSS-Text im Protokoll), Kontext-Knopf samt Hinweistext und die Wörter Vokabel/Phrase in Titeln und Meldungen. Spark ist noch nicht umgestellt.

## Stand 12.10.2026, 09:00–09:15: Reste und Spark

- Basic und Pro: Überschrift „App“, Fenstertitel („Phrases (Hungarian)“), Standardkategorie „My phrases“ (Wert bleibt „Eigene Phrasen“) und Lernmodus-Starttext sind angeschlossen.
- **Spark** hat dieselbe Verdrahtung wie Pro (Status-Strings, Knopfbeschriftungen, Wiederhol-Hinweise, Sprachnamen). Die Meldungen von Baustein 3 (KI-Feld, Senden, Verlauf) sind weiter fest deutsch.
- Stand 09:30 (alle drei Linien): Der Kontext-Knopf folgt dem EN/DE-Schalter („Kontext“/„Context“ samt Hinweistext, Tabelle `KONTEXT_T`). In der `sw.js` ist der tote Eintrag `/icon.svg` entfernt (Cache-Version unverändert, zählt Rudolf selbst hoch).

## 1. Kontext-Export (Gesprächsprotokoll → Note)

### Ausgangslage

Das bisherige Protokoll ist eine reine Textdatei (`thilo-babel-protokoll-JJJJ-MM-TT.txt`) ohne Kopf, ohne Datum in den Zeilen und ohne Splitterbefehl. Dafür taugt sie nicht als Kontext.

### Bedienung

Im Gesprächsprotokoll gibt es neben „Exportieren“ und „Löschen“ den Knopf **Kontext** (in allen Linien, auch Basic). Er erzeugt `babel-<JJJJ-MM-TT>-<HHMM>.json`. Der TXT-Export bleibt unverändert.

### JSON-Aufbau

```json
{
  "id": "babel-2026-10-11-1259",
  "typ": "babel-protokoll",
  "titel": "Gespräch Deutsch–Englisch – 11.10.2026",
  "datum": "2026-10-11 12:59",
  "ende": "2026-10-11 13:01",
  "sprachen": { "links": "Deutsch", "rechts": "Englisch" },
  "ort": "",
  "uebersetzer": "mymemory",
  "turns": [
    { "zeit": "12:59", "sprache": "Deutsch", "original": "…", "zielsprache": "Englisch", "uebersetzung": "…" }
  ],
  "splitterbefehl": "…"
}
```

Regeln:
- `datum` ist Datum plus Uhrzeit des ersten Eintrags, `ende` die des letzten (lokale Zeit, nicht UTC). Läuft ein Gespräch über Mitternacht, hat `ende` das tatsächliche Datum.
- `links` ist Sprecher A (gold), `rechts` Sprecher B (blau).
- `uebersetzer` nennt nur Dienste, die wirklich genutzt wurden (`mymemory`, `google`).
- Texte werden unverändert übernommen, auch Erkennungsfehler („done left“, „Major Inn“). Das Protokoll ist ein Zeugnis, keine Korrektur.
- `ort` bleibt leer.
- Die Statusmeldung nach dem Export enthält nur den Dateinamen und die Anzahl der Einträge (keine Wörter, damit sie in jeder Sprache stimmt).

### Der Splitterbefehl im Export

Die Konstante `KONTEXT_SPLITTERBEFEHL` wird unverändert als Feld `splitterbefehl` mitgegeben. Sie nennt den Trigger „notiere!“ und das Schema (id, titel, typ, datum, kurztext, quelle, datei, eltern_id, anker, tags, kategorie, inhalt, freigabe). Wichtigste Regeln darin:

1. Ein Splitter pro Sinneinheit, nicht pro Satz; ein kurzes Gespräch ergibt einen Splitter.
2. `inhalt`: Original und Übersetzung bleiben zusammen, Reihenfolge erhalten, ungekürzt.
3. `kurztext`: ein bis zwei Sätze, nichts erfinden.
4. `typ`: „wissen“; `datei`: null; `eltern_id`: null; `freigabe`: false.
5. `kategorie`: eine der neun festen; passt keine, erst nachfragen.

**Nicht der Wortlaut des Mic-Befehls.** Der Befehl wurde nach dem Schema der Splitter und den bekannten Regeln nachgebaut, weil der Mic-Wortlaut nicht vorlag. Bei Gelegenheit an den Mic-Befehl angleichen.

### Zwei offene Annahmen

- `typ` ist „wissen“ (wie bei Mic), weil nicht geprüft ist, ob Note einen eigenen Typ für Gespräche kennt.
- `eltern_id` bleibt immer `null`, weil nicht geprüft ist, ob Note sie zum Gruppieren nutzt.

### Ablauf bis in Note

**Wichtig:** „notiere!“ funktioniert nur mit einer Cloud-KI. Note selbst hat keine KI und braucht auch keine.

- **Heute (Basic und Pro):** JSON aus Babel in einen Chat mit einer Cloud-KI laden, „notiere!“ schreiben, die erzeugte Splitterdatei in Note importieren.
- **Ziel:** Babel Pro erzeugt den Splitter mit der eingebauten KI selbst und liefert die Datei im Note-Format. Dieser Rückweg ist noch nicht gebaut (siehe „Noch offen“).

## 2. Baustein 3 – KI-Aufruf (nur Spark-Linie)

**Wunsch:** Ich schreibe meinen Funken, tippe „Senden“, und die KI antwortet aus meinen eigenen Wissenssplittern, ohne dass ich irgendwo anders hin kopieren muss.

### Bedienung

1. KI-Knopf 🧠 so oft tippen, bis er pulsiert („an mit Kontext“). Das KI-Feld erscheint.
2. Im Menü unter **🧠 KI (Pro)** den Google-Schlüssel (Gemini) einfügen und **Speichern** tippen. Babel prüft ihn kurz bei Google; bei „nicht akzeptiert“ wird nicht gespeichert, ist Google nur nicht erreichbar, wird trotzdem gespeichert und das gesagt.
3. Splitter-JSON ins KI-Feld einfügen und **Übernehmen** tippen (wie bisher).
4. Funken ins Feld schreiben, **Senden** tippen. Die Antwort erscheint als Chat über dem Feld.
5. **Neuer Verlauf** beginnt das Gespräch mit der KI neu. **Kontext leeren** löscht die Splitter (nach Rückfrage).

### Wirkung im Einzelnen

- Geschickt wird: Systemanweisung inklusive aller Splitter, bisheriger Verlauf (letzte 20 Nachrichten), neuer Funke. Es geht nichts raus, bevor „Senden“ getippt wird.
- Schlägt etwas fehl, bleibt der Funke im Feld stehen. Erst bei Erfolg wandern Frage und Antwort in den Verlauf.
- Der Verlauf lebt nur in der Sitzung und wird nicht gespeichert (Neuladen = neuer Verlauf).
- Einmal pro Sitzung fragt Babel nach, wenn Splitter E-Mail, Telefonnummer (mit + oder 00) oder Link enthalten. Der Text wird nie verändert.
- Obergrenze für den Kontext: 800 KB pro Anfrage (grob 200.000 Token). Darüber bricht Babel mit Meldung ab.
- Die KI-Antwort wird nur per `textContent` angezeigt (nie als HTML), und die Systemanweisung markiert den Splitterinhalt ausdrücklich als Daten, nicht als Anweisung.

### Technik

- Direktaufruf der Gemini-API aus dem Browser: `POST https://generativelanguage.googleapis.com/v1beta/models/<Modell>:generateContent`, Header `x-goog-api-key`, Body mit `systemInstruction`, `contents` (Verlauf plus Funke), `generationConfig.temperature = 0.4`.
- Schlüsselprüfung: `GET …/v1beta/models?pageSize=1` (verbraucht kein Anfrage-Kontingent).
- **Modell:** Standard `gemini-3.6-flash` (wie beim Chronisten). Im Menü änderbar; ein eigener Wert hat Vorrang, ein leeres Feld stellt den Standard wieder her. Gespeichert unter `thilo-babel-ki-modell`.
- Speicherschlüssel: Kontext `thilo-babel-ki-kontext`, Schlüssel `thilo-babel-ki-key`, Zustand des Knopfs `thilo-babel-ki-modus` (alle über `idbGet/idbSet/idbRemove`).
- Wiederholung: Bei Netzfehler oder 5xx bis zu drei Versuche mit 3 s und 8 s Pause; 4xx werden sofort gemeldet.
- Fehlermeldungen: 429 (Gratis-Tageslimit), 404 (Modell nicht gefunden, anderen Namen eintragen), 400/403 (abgelehnt), 5xx (überlastet), kein Netz.

### Wichtige Funktionen (alle in `index.html`, Spark)

`kiSenden`, `kiGeminiAufruf`, `kiAntwortText`, `kiFehlerText`, `kiSystemText`, `kiKeyPruefen`, `kiVerlaufZeichnen`, `kiVerlaufLeeren`, `ladeKiModell`; bestehend aus Baustein 1–2: `parseSplitterText`, `kiKontextUebernehmen`, `kiKontextLeeren`, `aktualisiereKiPanel`.

## Getestet und nicht getestet

Mit einem simulierten Google-Server geprüft (Skriptsyntax, Funktionen mit Attrappen): kein Schlüssel, Splitter-JSON im Feld, Erfolg mit Kontext, Folgefrage mit Verlauf, Fehler 429/404, Wiederholung bei 503, dauerhafter Netzfehler, blockierte Antwort, Warnung bei E-Mail/Link (abgelehnt und bestätigt), Neuer Verlauf, Modellname.

**Nicht geprüft:** der echte Aufruf von Google aus dem Browser (kann an Netz oder Sperren scheitern), das Aussehen auf dem Handy, der Modellname `gemini-3.6-flash`.

Basic und Pro: nur Syntax und (für den Schalter in Basic) Chromium mit den echten Dateien geprüft; der Kontext-Export selbst ist am Telefon noch nicht ausprobiert.

**Erster Test am Handy:** Schlüssel speichern (die Prüfung zeigt es sofort), eine Splitterdatei einfügen, eine Frage senden.

## Noch offen

- **Splitter aus dem Protokoll erzeugen:** Knopf, der Protokoll und `KONTEXT_SPLITTERBEFEHL` an Gemini schickt, die Antwort prüft und die Splitterdatei zum Download anbietet. Die Prüfung entspricht dem Import in den KI-Kontext (gültiges JSON, `id`, `titel`, `inhalt`) und zusätzlich: Kategorie aus den neun festen, `freigabe` auf `false`.
- **Vorauswahl der Splitter:** Statt alle bei jeder Frage mitzusenden, nur Splitter mit passenden Tags und ihre `eltern_id`-Familie.
- **Diktieren im KI-Feld:** Das vorhandene Mikro ist an die Felder A und B gebunden.
- **Kostenanzeige:** nach dem Muster der Google-Zeichenzählung (`getProChars`).
- **Statustexte:** Die neuen Meldungen von Baustein 3 (Spark) sind fest auf Deutsch eingebaut. `status-strings.js` liegt inzwischen vor, die Meldungen lassen sich in das DE/EN-System übernehmen. Dasselbe gilt für die Meldung des Kontext-Exports, falls sie Wörter bekommt.
- **KI-Zustand „an“** (KI-Übersetzung ohne Kontext) ist weiter nur ein Schalter.

## Pflichtschritte nach jeder Lieferung

- Den **Stand** im Menü auf Datum und Uhrzeit der Lieferung setzen. (In diesen Dateien steht er fest in der Menüzeile `menuStand`, nicht in einer Konstante `APP_STAND`.)
- In der **`sw.js` die CACHE-Version hochzählen**, einheitlich bei allen PWAs. Die `sw.js` wurde an diesem Tag nicht verändert.
- Code-Kommentare im Muster: fetter Wunsch-Wirkung-Kernsatz, darunter „Funktion: …“.
- Vor jedem Deploy prüfen, in welcher Linie man gerade arbeitet (`IST_PRO` und Name im Menü), damit nicht noch einmal eine Pro-Vorstufe als Basic deployt wird.

## Deploy-Hinweise (Basic und Pro)

- Deploy-Pakete (`deploy-basic.zip`, `deploy-pro.zip`, `deploy-spark.zip`) enthalten Index, Strings, Anleitung, Manifest-Seite und doc-Dateien. `manifest.json`, Icons, `_headers` und `sw.js` bleiben vom früheren Deploy; die Cache-Version zählt Rudolf selbst hoch.
- Spark läuft als eigene Seite **babelspark** (früher Babelint).

- Die Dateien aus dem Babelint-Paket heißen `anleitung_basic.html`, `anleitung_pro.html`, `manifest_basic.html`, `manifest_pro.html`. Das Menü verlinkt `/anleitung.html` und `/thilo-manifest.html`: beim Hochladen entsprechend umbenennen (je Linie die passende Datei).
- `doc-veredeln.js` und `doc-veredeln-1.js` sind byte-identisch; eine der beiden genügt.
- `manifest.json` und die Meta-Tags: In Basic darf „Pro“ nirgends stehen, in Pro „ThiLo! Babel Pro“.
- Die Basic-Anleitung und das Basic-Manifest erwähnen Pro weiterhin (bewusst, gehört zur Werbung).

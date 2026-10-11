// ============ ThiLo! Babel — Gruppe B: Status-/Fehler-/Hilfstexte (DE/EN) ============
// Stand 8.10.2026: um 37 Schlüssel erweitert (33 + 4 technische Fehlermeldungen aus doTranslateCore + 8 Tooltip-/Hinweistexte)
// Knöpfe und große Überschriften (Sprechen, Übersetzen, Alles löschen, Transkript, Modal-Knöpfe) liegen NICHT hier,
// sondern in ui-strings.js (Gruppe A, folgen der Ankersprache). Hier bleiben Status-, Fehler-, Hilfe- und Platzhaltertexte. (Panel, Transkript, Modal-Knöpfe, Key-Fach, Anker-Tooltips, Lernmodus).
// Anders als das Menü (ui-strings.js, an die Ankersprache gebunden, 19 Sprachen) gilt hier:
// nur Deutsch und Englisch, umschaltbar über einen eigenen Schalter, unabhängig vom Anker
// (der Anker kann z. B. Ungarisch sein, Gruppe B bleibt trotzdem DE oder EN).
//
// tb(key, ...args) liefert den Text in der aktuell gewählten Sprache. Für dynamische Texte
// ist der Eintrag eine Funktion, die die Variablen einbaut — das entspricht 1:1 der
// ursprünglichen String-Verkettung an der jeweiligen Stelle im Code, nur zweisprachig.

const STRINGS_B = {

  de: {
    noTextToSpeak: "Kein Text zum Vorlesen vorhanden.",
    ttsUnsupported: "Sprachausgabe wird von diesem Browser nicht unterstützt.",
    noVoiceInstalled: (lang) => `⚠️ Keine ${lang}-Stimme installiert — Aussprache evtl. falsch (Windows-Sprachpaket ergänzen oder Chrome verwenden).`,
    speaking: (lang) => `Spreche ${lang} …`,
    ttsError: (err) => `Sprachausgabe-Fehler: ${err || "unbekannt"}`,
    dailyLimitReached: "⛔ Tageslimit von MyMemory erreicht – bis morgen warten.",
    limitWarning: (usedK, totalK) => `⚠️ Achtung, das gratis verfügbare Tageslimit geht zur Neige! (${usedK}k/${totalK}k Zeichen)`,
    translationPaused: "⛔ Übersetzung pausiert: zu viele Fehler in Folge (Tageslimit?). Bitte in einer Minute erneut versuchen.",
    translating: "Übersetze…",
    translationError: (msg) => "Übersetzungsfehler: " + msg,
    speechRecUnavailableChrome: "Spracherkennung nicht verfügbar – bitte Chrome verwenden.",
    listening: "Hören…",
    networkError: "⚠️ Spracherkennung in diesem Browser nicht verfügbar (network-Fehler) — bitte Chrome verwenden.",
    genericError: (err) => "Fehler: " + err,
    noTranscript: "Kein Protokoll vorhanden.",
    loadingProgress: (plural, i, total) => `Lade ${plural}… ${i}/${total}`,
    translatingVocab: "Übersetze Vokabel…",
    vocabSaved: (lang) => `✓ Vokabel gespeichert (${lang})`,
    localizeCancelled: "localize! abgebrochen (nicht bestätigt).",
    localizingProgress: (n) => `Lokalisiere … ${n} Übersetzungen`,
    localizeAborted: "⚠️ Localize! abgebrochen: Übersetzungsdienst pausiert (Limit oder Fehler). Bereits Übersetztes ist gespeichert.",
    localizedDone: (plural, langA, langB) => `✓ ${plural} lokalisiert (${langA} + ${langB}).`,
    vocabImportResult: (added) => added > 0 ? `${added} Vokabeln importiert.` : "Kein gültiges Format (Fremdwort ; Kategorie).",
    baseVocabLoaded: (added) => `${added} Grundvokabeln geladen (main).`,
    phraseImportResult: (added) => added > 0 ? `${added} Phrasen importiert.` : "Kein gültiges Format (Deutsch ; Übersetzung ; Kategorie).",
    basePhrasesLoaded: (added) => `${added} Grundphrasen geladen (main).`,
    phraseImportViewHint: (added) => `${added} Phrasen importiert – Phrasenbuch öffnen zum Ansehen.`,
    noneAvailable: (plural) => `Keine ${plural} vorhanden.`,
    missingTranslations: (langB) => `Für ${langB} fehlen Übersetzungen, bitte localize! drücken.`,
    missingTranslationsSkipped: (langB, n) => `Für ${langB} fehlen Übersetzungen, bitte localize! drücken — ${n} Einträge übersprungen.`,
    speechRecUnavailable: "Spracherkennung nicht verfügbar.",
    anchorAlreadySet: (lang) => `⚓ Ankersprache ist bereits gesetzt: ${lang}`,
    anchorSet: (lang) => `⚓ Ankersprache gesetzt: ${lang}`,
    initPhrases: "Initialisierung: Phrasen…",
    initVocab: "Initialisierung: Vokabeln… (das dauert einen Moment)",
    initDone: "✓ Initialisierung abgeschlossen.",
    initPartialFail: (msg) => "Initialisierung teilweise fehlgeschlagen: " + msg,
    exporting: (plural) => `Exportiere ${plural}...`,
    exportedDone: (n, plural, name) => `Exportiert: ${n} ${plural} (${name})`,
    silverNotImported: "⛔ Silber wird nicht importiert. Nur Gold.",
    emptyFile: "⛔ Datei enthält weder Vokabeln noch Phrasen.",
    goldAlreadyExists: (plural) => `⛔ ${plural}: main ist bereits Gold. Bitte zuerst löschen, dann neu importieren.`,
    importedSummary: (level, treasure, plural, n) => `✓ ${level} importiert (${treasure}, ${plural}). ${n} ${plural}.`,

    keyDeleteConfirm: "Google-Key aus diesem Browser löschen?",
    localizeConfirm: (n) => `localize! würde ${n} Übersetzungen beim Dienst anfragen (alles andere kommt direkt aus Eintrag oder Zwischenspeicher, ohne Anfrage). Fortfahren?`,
    deleteEntryConfirm: (plural, term) => `${plural} von '${term}' löschen?`,
    anchorConfirm: (lang) => `Ankersprache auf ${lang} setzen?\n\nDas ist einmalig. Änderung nur durch Neuinstallation möglich.\n\n(Initialisierung läuft: erst Phrasen, dann Vokabeln.)`,

    mainPlaceholder: "Sprich, tippe oder füge Text ein…",
    ownPhraseDe: "Deutsch (z.B. Wo ist der Schlüssel)",
    translationPlaceholder: "Übersetzung",
    newCategoryPlaceholder: "Neue Kategorie…",
    phraseBulkPlaceholder: "Format: Deutsch ; Übersetzung ; Kategorie\nBeispiel: Wo ist der Bahnhof? ; Hol van az állomás? ; Reise\n(Kategorie optional — Standard: Eigene Phrasen)",
    filterPlaceholder: "🔍 Filtern…",
    vocabTermPlaceholder: "Fremdwort eingeben (z.B. ragazza)",
    vocabBulkPlaceholder: "Format: Fremdwort ; Kategorie\nBeispiel: ragazza ; Menschen\n(Kategorie optional — Standard: Allgemein)",
    uiModeBTitle: "Sprache für Status- und Hilfetexte",
    uiModeBSub: "Betrifft Meldungen im Hauptbildschirm — nicht das Menü (das folgt der Ankersprache)",
    symbolModeTitle: "Nur Symbole (ohne Wörter)",
    symbolModeSub: "Knöpfe zeigen nur die Icons — sprachunabhängig, unabhängig von den beiden Einstellungen oben",
    // --- Ergänzt 8.10.2026 (Sprachmischmasch-Anweisung, Teil 1) ---
    // Kernsatz: Jeder sichtbare Status-/Hilfetext läuft über tb(), nie hart im Code.
    // Wirkung: Statussprache DE/EN schaltet auch Panel, Transkript, Modal-Knöpfe, Key-Fach und Lernmodus um.
    translationPlaceholderPanel: "Übersetzung erscheint hier",
    noEntries: "Noch keine Einträge",
    addNote: "Notiz hinzufügen…",
    notePlaceholder: "Notiz…",
    chooseCategory: "— Kategorie wählen —",
    noImport: "kein Import",
    manualLabel: "manuell",
    noKeyStatus: "Kein Key hinterlegt · Übersetzung läuft über MyMemory (Tageslimit)",
    keySavedStatus: (masked, err) => `✓ Key gespeichert (${masked}) · Google zuerst, MyMemory als Reserve` + (err ? ` · letzter Google-Fehler: ${err}` : ""),
    googleCharsThisMonth: (n) => `Über Google übersetzte Zeichen diesen Monat: ${n}`,
    keyInputEmpty: "Bitte zuerst einen Key einfügen.",
    keyLooksWrong: "✗ Das sieht nicht wie ein Google-API-Key aus.",
    keyChecking: "Prüfe Key…",
    keySaveFailed: "✗ Key konnte nicht im Browser gespeichert werden.",
    keyCheckedSaved: (test, masked) => `✓ Key geprüft (Test: Hallo → ${test}) und gespeichert (${masked})`,
    keyRejected: (msg) => `✗ Key nicht akzeptiert: ${msg}`,
    anchorBtnLocked: (lang) => `Die Ankersprache ist nun bis zu einer Neuinstallation auf ${lang} gesetzt.`,
    anchorBtnSet: "Ankersprache setzen (einmalig)",
    learnChooseDirection: "Wähle eine Richtung: 🤔→ oder ←🤔 (manuell) / 🚖 oder 🚘 (Automatik)",
    learnAnswerIn: (lang) => "Hör zu und antworte in " + lang + ".",
    learnListDone: "Liste fertig. Du kannst jetzt die Zahl-Taste drücken, um Fehler zu wiederholen.",
    learnReady: "Bereit",
    learnFinished: "Fertig",
    errDailyLimit: (hasKey) => "MyMemory-Tageslimit erreicht" + (hasKey ? "" : " — Google-Key im Menü hinterlegen"),
    errServer: (status) => "Server-Fehler: " + status,
    errNoTranslation: "Keine Übersetzung erhalten.",
    errPaused: "Übersetzung pausiert (zu viele Fehler)",
    // --- Ergänzt 8.10.2026 (Umstellung index.html): Tooltips/Hinweise, die vorher hart im Code standen ---
    errGoogleEmpty: "Leere Antwort von Google",
    errNoGoogleKey: "Kein Google-Key hinterlegt",
    itemDeleteTitle: (singular) => `${singular} löschen`,
    treasureDeleteTitle: (plural, treasure) => `${plural} aus '${treasure}' löschen`,
    noneSavedYet: (plural) => `Noch keine ${plural} gespeichert`,
    learnProgress: (singular, i, total) => `${singular} ${i} von ${total}`,
    clickToEdit: "Klicken zum Bearbeiten",
    loadingShort: "Lade…",
    // --- Ergänzt 9.10.2026: in der neuen index.html (Lernmodus-Fehlversuch) verwendet; Wortlaut bitte prüfen ---
    youSaid: (spoken) => `Verstanden: ${spoken}`,
    nothingRecognized: "Nichts erkannt",
    kiTitleAus: "KI-Übersetzung: aus",
    kiTitleAn: "KI-Übersetzung: an",
    kiTitleKontext: "KI-Übersetzung: an mit Kontext",
  },

  en: {
    noTextToSpeak: "No text to read aloud.",
    ttsUnsupported: "Text-to-speech is not supported by this browser.",
    noVoiceInstalled: (lang) => `⚠️ No ${lang} voice installed — pronunciation may be wrong (add a Windows language pack or use Chrome).`,
    speaking: (lang) => `Speaking ${lang} …`,
    ttsError: (err) => `Speech error: ${err || "unknown"}`,
    dailyLimitReached: "⛔ MyMemory daily limit reached – please wait until tomorrow.",
    limitWarning: (usedK, totalK) => `⚠️ Careful, the free daily limit is running low! (${usedK}k/${totalK}k characters)`,
    translationPaused: "⛔ Translation paused: too many errors in a row (daily limit?). Please try again in a minute.",
    translating: "Translating…",
    translationError: (msg) => "Translation error: " + msg,
    speechRecUnavailableChrome: "Speech recognition not available – please use Chrome.",
    listening: "Listening…",
    networkError: "⚠️ Speech recognition not available in this browser (network error) — please use Chrome.",
    genericError: (err) => "Error: " + err,
    noTranscript: "No transcript available.",
    loadingProgress: (plural, i, total) => `Loading ${plural}… ${i}/${total}`,
    translatingVocab: "Translating vocabulary…",
    vocabSaved: (lang) => `✓ Vocabulary saved (${lang})`,
    localizeCancelled: "localize! cancelled (not confirmed).",
    localizingProgress: (n) => `Localizing … ${n} translations`,
    localizeAborted: "⚠️ Localize! stopped: translation service paused (limit or error). Anything already translated is saved.",
    localizedDone: (plural, langA, langB) => `✓ ${plural} localized (${langA} + ${langB}).`,
    vocabImportResult: (added) => added > 0 ? `${added} vocabulary entries imported.` : "Invalid format (foreign word ; category).",
    baseVocabLoaded: (added) => `${added} base vocabulary entries loaded (main).`,
    phraseImportResult: (added) => added > 0 ? `${added} phrases imported.` : "Invalid format (German ; translation ; category).",
    basePhrasesLoaded: (added) => `${added} base phrases loaded (main).`,
    phraseImportViewHint: (added) => `${added} phrases imported – open the phrasebook to view them.`,
    noneAvailable: (plural) => `No ${plural} available.`,
    missingTranslations: (langB) => `Translations for ${langB} are missing, please press localize!.`,
    missingTranslationsSkipped: (langB, n) => `Translations for ${langB} are missing, please press localize! — ${n} entries skipped.`,
    speechRecUnavailable: "Speech recognition not available.",
    anchorAlreadySet: (lang) => `⚓ Anchor language is already set: ${lang}`,
    anchorSet: (lang) => `⚓ Anchor language set: ${lang}`,
    initPhrases: "Initializing: phrases…",
    initVocab: "Initializing: vocabulary… (this takes a moment)",
    initDone: "✓ Initialization complete.",
    initPartialFail: (msg) => "Initialization partially failed: " + msg,
    exporting: (plural) => `Exporting ${plural}...`,
    exportedDone: (n, plural, name) => `Exported: ${n} ${plural} (${name})`,
    silverNotImported: "⛔ Silver is not imported. Gold only.",
    emptyFile: "⛔ File contains neither vocabulary nor phrases.",
    goldAlreadyExists: (plural) => `⛔ ${plural}: main is already Gold. Please delete first, then import again.`,
    importedSummary: (level, treasure, plural, n) => `✓ ${level} imported (${treasure}, ${plural}). ${n} ${plural}.`,

    keyDeleteConfirm: "Delete the Google key from this browser?",
    localizeConfirm: (n) => `localize! would request ${n} translations from the service (everything else comes directly from the entry or cache, with no request). Continue?`,
    deleteEntryConfirm: (plural, term) => `Delete ${plural} '${term}'?`,
    anchorConfirm: (lang) => `Set anchor language to ${lang}?\n\nThis is one-time. Changing it later requires reinstalling the app.\n\n(Initialization will run: phrases first, then vocabulary.)`,

    mainPlaceholder: "Speak, type, or paste text…",
    ownPhraseDe: "German (e.g. Where is the key)",
    translationPlaceholder: "Translation",
    newCategoryPlaceholder: "New category…",
    phraseBulkPlaceholder: "Format: German ; translation ; category\nExample: Where is the station? ; Hol van az állomás? ; Travel\n(Category optional — default: My phrases)",
    filterPlaceholder: "🔍 Filter…",
    vocabTermPlaceholder: "Enter foreign word (e.g. ragazza)",
    vocabBulkPlaceholder: "Format: foreign word ; category\nExample: ragazza ; People\n(Category optional — default: General)",
    uiModeBTitle: "Language for status and help messages",
    uiModeBSub: "Affects messages on the main screen — not the menu (that follows the anchor language)",
    symbolModeTitle: "Symbols only (no words)",
    symbolModeSub: "Buttons show only icons — language-independent, separate from the two settings above",
    // --- Added 8 Oct 2026 (language-mix instruction, part 1) — must stay 1:1 with the DE block ---
    translationPlaceholderPanel: "Translation appears here",
    noEntries: "No entries yet",
    addNote: "Add note…",
    notePlaceholder: "Note…",
    chooseCategory: "— Choose category —",
    noImport: "no import",
    manualLabel: "manual",
    noKeyStatus: "No key stored · Translation runs via MyMemory (daily limit)",
    keySavedStatus: (masked, err) => `✓ Key stored (${masked}) · Google first, MyMemory as fallback` + (err ? ` · last Google error: ${err}` : ""),
    googleCharsThisMonth: (n) => `Characters translated via Google this month: ${n}`,
    keyInputEmpty: "Please paste a key first.",
    keyLooksWrong: "✗ That does not look like a Google API key.",
    keyChecking: "Checking key…",
    keySaveFailed: "✗ Key could not be saved in this browser.",
    keyCheckedSaved: (test, masked) => `✓ Key checked (test: Hallo → ${test}) and saved (${masked})`,
    keyRejected: (msg) => `✗ Key not accepted: ${msg}`,
    anchorBtnLocked: (lang) => `The anchor language is now set to ${lang} until a reinstall.`,
    anchorBtnSet: "Set anchor language (one-time)",
    learnChooseDirection: "Choose a direction: 🤔→ or ←🤔 (manual) / 🚖 or 🚘 (auto)",
    learnAnswerIn: (lang) => "Listen and answer in " + lang + ".",
    learnListDone: "List finished. Press the number button to repeat mistakes.",
    learnReady: "Ready",
    learnFinished: "Finished",
    errDailyLimit: (hasKey) => "MyMemory daily limit reached" + (hasKey ? "" : " — add a Google key in the menu"),
    errServer: (status) => "Server error: " + status,
    errNoTranslation: "No translation received.",
    errPaused: "Translation paused (too many errors)",
    // --- Added 8 Oct 2026 (index.html migration): tooltips/hints that were hard-coded before ---
    errGoogleEmpty: "Empty response from Google",
    errNoGoogleKey: "No Google key stored",
    itemDeleteTitle: (singular) => `Delete ${singular.toLowerCase()}`,
    treasureDeleteTitle: (plural, treasure) => `Delete ${plural} from '${treasure}'`,
    noneSavedYet: (plural) => `No ${plural} saved yet`,
    learnProgress: (singular, i, total) => `${singular} ${i} of ${total}`,
    clickToEdit: "Click to edit",
    loadingShort: "Loading…",
    // --- Added 9 Oct 2026: used by the new index.html (learn mode, wrong attempt); please check wording ---
    youSaid: (spoken) => `Heard: ${spoken}`,
    nothingRecognized: "Nothing recognised",
    kiTitleAus: "AI translation: off",
    kiTitleAn: "AI translation: on",
    kiTitleKontext: "AI translation: on with context",
  },

};

// LABELS (Vokabeln/Phrasen) auf Englisch, für dieselben Stellen im Code
const LABELS_EN = {
  vokabel: { singular: "Vocabulary item", plural: "vocabulary", neu: "New vocabulary item", kuerzel: "Voc" },
  phrase:  { singular: "Phrase",          plural: "phrases",    neu: "New phrase",          kuerzel: "Phr" }
};

const UI_MODE_KEY = "thilo-babel-ui-mode-b";
function loadUIModeB() {
  try { return localStorage.getItem(UI_MODE_KEY) === "en" ? "en" : "de"; } catch { return "de"; }
}
function saveUIModeB(mode) {
  try { localStorage.setItem(UI_MODE_KEY, mode); } catch {}
}
let uiModeB = loadUIModeB();

// tb("key", arg1, arg2, ...) — liefert den Text (oder ruft die Funktion mit den Argumenten auf)
function tb(key, ...args) {
  const table = STRINGS_B[uiModeB] || STRINGS_B.de;
  const entry = table[key];
  if (entry === undefined) return "";
  return typeof entry === "function" ? entry(...args) : entry;
}

// Aktuelle Wortform (Vokabeln/vocabulary bzw. Phrasen/phrases) für die Plural-Stellen im Code
// Kernsatz: LABELS in index.html folgt jetzt der Ankersprache (Gruppe A) und taugt nicht mehr für Statustexte.
// Wirkung: Statusmeldungen und Tooltips nehmen die Wortformen immer aus LABELS_DE bzw. LABELS_EN (Gruppe B, Schalter).
const LABELS_DE = {
  vokabel: { singular: "Vokabel", plural: "Vokabeln" },
  phrase:  { singular: "Phrase",  plural: "Phrasen" }
};
function labelPlural(art) {
  return (uiModeB === "en" ? LABELS_EN : LABELS_DE)[art].plural;
}
function labelSingular(art) {
  return (uiModeB === "en" ? LABELS_EN : LABELS_DE)[art].singular;
}

// Setzt alle statischen [data-i18n-b]-Texte und [data-i18n-ph-b]-Platzhalter (Gruppe B, DE/EN)
function applyUILanguageB() {
  document.querySelectorAll("[data-i18n-b]").forEach(el => {
    const k = el.getAttribute("data-i18n-b");
    const v = tb(k);
    if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-ph-b]").forEach(el => {
    const k = el.getAttribute("data-i18n-ph-b");
    const v = tb(k);
    if (v) el.setAttribute("placeholder", v);
  });
  const btn = document.getElementById("uiModeBBtn");
  if (btn) btn.textContent = uiModeB === "en" ? "DE" : "EN"; // zeigt die Sprache, zu der man wechseln WÜRDE
}

function toggleUIModeB() {
  uiModeB = uiModeB === "en" ? "de" : "en";
  saveUIModeB(uiModeB);
  applyUILanguageB();
}

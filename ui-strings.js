// ============ ThiLo! Babel Basic — Menütexte (DE/EN) ============
// **Basic-Ausgabe:** Diese Datei enthält nur die zwei Sprachen, die Babel Basic am Markt zeigt.
// Der EN/DE-Schalter im Menü (siehe index.html, Block `menueNachSchalter` für IST_PRO=false)
// schaltet Menü UND Status-/Hilfetexte gemeinsam um. Die Status-/Fehler-/Hilfetexte selbst
// liegen weiterhin in status-strings.js (ebenfalls nur DE/EN).
//
// **Pro-Linie:** Dort ist ui-strings.js die 20-sprachige Anker-Menüdatei. Diese hier ist
// bewusst die schlanke Schwestern-Datei — nicht zusammenführen, sonst zieht Basic wieder
// Pro-Gepäck mit sich (KI-übersetzte Sprachen, die Basic nie anzeigt, mit denen es aber
// bei versehentlicher Aktivierung Fehler zeigen würde).
//
// Regel: Bedienelemente (Knöpfe) und große Überschriften -> hier (Gruppe A).
//        Status-/Fehler-/Hilfetexte -> status-strings.js (Gruppe B, DE/EN).
//
// Wird von index.html, anleitung.html und thilo-manifest.html geladen.

const UI_STRINGS = {

  de: {
    updateTitle: "App aktualisieren", updateSub: "Neueste Version im Browser öffnen",
    familyHeader: "ThiLo! Familie",
    brainflowSub: "Ideen & Gedankenströme", noteSub: "In Entwicklung", micSub: "Feldaufnahmen für Babel",
    packagesHeader: "Pakete & Importe",
    copingTitle: "Coping-Phrasen herunterladen", copingSub: "47 Fragen für lokales Wissen",
    settingsHeader: "Einstellungen",
    autoTranslateTitle: "Beim Anzeigen automatisch übersetzen",
    autoTranslateSub: "Aus (Standard): keine automatischen Anfragen beim Öffnen/Filtern/Lernen — nur localize! übersetzt",
    keyPlaceholder: "Google-API-Key einfügen", keySave: "Speichern & prüfen", keyDelete: "Löschen",
    exportImportHeader: "Export & Import", exportLabel: "EXPORT", importLabel: "IMPORT",
    phrasenBtn: "Phrasen", vokabelnBtn: "Vokabeln",
    supportHeader: "Unterstützen", coffeeTitle: "Einen Kaffee spendieren", coffeeSub: "PayPal – freiwilliger Beitrag",
    manualTitle: "Bedienungsanleitung", manualSub: "Anwendung & Besonderheiten",
    manifestSub: "Philosophie & Seele von ThiLo!",
    appHeader: "App", speaksLabel: (l) => `${l} spricht`,
    labelVokabel: { singular: "Vokabel", plural: "Vokabeln", neu: "Neue Vokabel" },
    labelPhrase: { singular: "Phrase", plural: "Phrasen", neu: "Neue Phrase" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Sprechen", translateLabel: "Übersetzen",
    clearAllBtn: "Alles löschen", transcriptTitle: "Gesprächsprotokoll", transcriptExportBtn: "Exportieren", transcriptClearBtn: "Löschen",
    addVocabBtn: "Vokabel hinzufügen (Auto-Übersetzung)", loadBaseVocabBtn: "Grundvokabular laden", importListBtn: "Liste importieren",
    addOwnPhraseBtn: "Eigene Phrase hinzufügen", loadBasePhrasesBtn: "Grundphrasen laden", importPhraseListBtn: "Phrasen-Liste importieren",
    stopRecordingLabel: "Aufnahme stoppen",
  },

  en: {
    updateTitle: "Update app", updateSub: "Open the latest version in your browser",
    familyHeader: "ThiLo! family",
    brainflowSub: "Ideas & trains of thought", noteSub: "In development", micSub: "Field recordings for Babel",
    packagesHeader: "Packages & imports",
    copingTitle: "Download coping phrases", copingSub: "47 questions for local knowledge",
    settingsHeader: "Settings",
    autoTranslateTitle: "Auto-translate on display",
    autoTranslateSub: "Off (default): no automatic requests on open/filter/learn — only localize! translates",
    keyPlaceholder: "Paste Google API key", keySave: "Save & check", keyDelete: "Delete",
    exportImportHeader: "Export & import", exportLabel: "EXPORT", importLabel: "IMPORT",
    phrasenBtn: "Phrases", vokabelnBtn: "Vocabulary",
    supportHeader: "Support", coffeeTitle: "Buy me a coffee", coffeeSub: "PayPal – voluntary contribution",
    manualTitle: "User guide", manualSub: "Usage & special features",
    manifestSub: "The philosophy and soul of ThiLo!",
    appHeader: "App", speaksLabel: (l) => `${l} speaks`,
    labelVokabel: { singular: "Vocabulary item", plural: "vocabulary", neu: "New vocabulary item" },
    labelPhrase: { singular: "Phrase", plural: "phrases", neu: "New phrase" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Speak", translateLabel: "Translate",
    clearAllBtn: "Clear all", transcriptTitle: "Transcript", transcriptExportBtn: "Export", transcriptClearBtn: "Clear",
    addVocabBtn: "Add vocabulary (auto-translation)", loadBaseVocabBtn: "Load base vocabulary", importListBtn: "Import list",
    addOwnPhraseBtn: "Add own phrase", loadBasePhrasesBtn: "Load base phrases", importPhraseListBtn: "Import phrase list",
    stopRecordingLabel: "Stop recording",
  },

};

// Ableitung: "de-DE" -> "de". Unbekannte Sprachen (z. B. "hu", "he") fallen auf Deutsch zurück,
// weil Basic nur DE/EN führt — das ist ausdrücklich so gewollt und kein Fehlerfall.
function uiLangKey(anchorCode) {
  if (!anchorCode) return "de";
  const short = String(anchorCode).split("-")[0].toLowerCase();
  return UI_STRINGS[short] ? short : "de";
}

// Setzt alle [data-i18n]-Texte und [data-i18n-ph]-Platzhalter auf die Sprache von langKey.
// Wird beim EN/DE-Wechsel und beim Start aufgerufen (siehe index.html, Block `menueNachSchalter`).
function applyUILanguage(anchorCode) {
  const key = uiLangKey(anchorCode);
  const strings = UI_STRINGS[key];
  if (!strings) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (strings[k] !== undefined) el.textContent = strings[k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const k = el.getAttribute("data-i18n-ph");
    if (strings[k] !== undefined) el.setAttribute("placeholder", strings[k]);
  });

  try { localStorage.setItem("thilo-babel-ui-lang", key); } catch {}
}

// ---- Hilfsfunktionen für die ergänzten Schlüssel (8.10.2026) ----
// Kernsatz: Panel-Beschriftung und Vokabel-/Phrasen-Wörter kommen aus derselben Sprache wie das Menü.
// Wirkung: index.html ruft nur diese zwei Funktionen auf, statt Texte selbst zusammenzusetzen.

// "{Sprache} spricht" in der Menüsprache, z. B. uiSpeaksLabel("de", "Ungarisch") -> "Ungarisch spricht"
function uiSpeaksLabel(anchorCode, langName) {
  return UI_STRINGS[uiLangKey(anchorCode)].speaksLabel(langName);
}

// Wortformen für LABELS: art = "vokabel" oder "phrase" -> { singular, plural, neu }
function uiLabelFor(anchorCode, art) {
  const s = UI_STRINGS[uiLangKey(anchorCode)];
  return art === "phrase" ? s.labelPhrase : s.labelVokabel;
}
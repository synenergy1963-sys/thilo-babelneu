// ============ ThiLo! Babel — Mehrsprachiges Menü ============
// Wird beim Setzen des Ankers einmalig angewendet und bleibt dann so (wie die Ankersprache selbst).
// Stand 8.10.2026: je Sprache 8 Schlüssel ergänzt — appHeader, speaksLabel (Funktion), labelVokabel.*, labelPhrase.*
// (Panel-Beschriftungen und Modal-Titel folgen damit ebenfalls der Ankersprache).
// Regel: Bedienelemente (Knöpfe) und große Überschriften -> hier (Anker). Status-/Fehler-/Hilfetexte -> status-strings.js (DE/EN-Schalter).
// Ebenfalls hier, je 12 Schlüssel: speakLabel, translateLabel, clearAllBtn, transcriptTitle, transcriptExportBtn, transcriptClearBtn,
// addVocabBtn, loadBaseVocabBtn, importListBtn, addOwnPhraseBtn, loadBasePhrasesBtn, importPhraseListBtn.
// Dazu stopRecordingLabel (Knopftext während der Aufnahme).
// Deckt NUR die Menütexte ab (Gruppe A) — Statusmeldungen, Platzhalter im Hauptbildschirm,
// Lernmodus-Anleitungstext usw. (Gruppe B) sind bewusst noch nicht Teil davon.
//
// WICHTIG: Diese Übersetzungen sind KI-generiert (wie die Silber-Stufe bei Vokabeln/Phrasen)
// und noch nicht von Muttersprachlern gegengelesen. Am unsichersten: Albanisch (sq), Bosnisch (bs),
// Serbisch (sr, hier in lateinischer Schrift). Vor der Veröffentlichung idealerweise prüfen lassen.

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

  hu: {
    updateTitle: "Alkalmazás frissítése", updateSub: "Legújabb verzió megnyitása a böngészőben",
    familyHeader: "ThiLo! család",
    brainflowSub: "Ötletek & gondolatáramok", noteSub: "Fejlesztés alatt", micSub: "Terepfelvételek a Babelhez",
    packagesHeader: "Csomagok & importok",
    copingTitle: "Coping-kifejezések letöltése", copingSub: "47 kérdés a helyi tudáshoz",
    settingsHeader: "Beállítások",
    autoTranslateTitle: "Automatikus fordítás megjelenítéskor",
    autoTranslateSub: "Ki (alapértelmezett): nincs automatikus lekérdezés megnyitáskor/szűréskor/tanuláskor — csak a localize! fordít",
    keyPlaceholder: "Google API-kulcs beillesztése", keySave: "Mentés és ellenőrzés", keyDelete: "Törlés",
    exportImportHeader: "Exportálás & importálás", exportLabel: "EXPORT", importLabel: "IMPORT",
    phrasenBtn: "Kifejezések", vokabelnBtn: "Szavak",
    supportHeader: "Támogatás", coffeeTitle: "Egy kávét meghívok", coffeeSub: "PayPal – önkéntes hozzájárulás",
    manualTitle: "Használati útmutató", manualSub: "Alkalmazás & jellegzetességek",
    manifestSub: "A ThiLo! filozófiája és lelke",
    appHeader: "Alkalmazás", speaksLabel: (l) => `${l} beszél`,
    labelVokabel: { singular: "Szó", plural: "szavak", neu: "Új szó" },
    labelPhrase: { singular: "Kifejezés", plural: "kifejezések", neu: "Új kifejezés" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Beszélés", translateLabel: "Fordítás",
    clearAllBtn: "Összes törlése", transcriptTitle: "Beszélgetési napló", transcriptExportBtn: "Exportálás", transcriptClearBtn: "Törlés",
    addVocabBtn: "Szó hozzáadása (automatikus fordítás)", loadBaseVocabBtn: "Alapszókincs betöltése", importListBtn: "Lista importálása",
    addOwnPhraseBtn: "Saját kifejezés hozzáadása", loadBasePhrasesBtn: "Alapkifejezések betöltése", importPhraseListBtn: "Kifejezéslista importálása",
    stopRecordingLabel: "Felvétel leállítása",
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

  fr: {
    updateTitle: "Mettre à jour l'appli", updateSub: "Ouvrir la dernière version dans le navigateur",
    familyHeader: "Famille ThiLo!",
    brainflowSub: "Idées & flux de pensée", noteSub: "En développement", micSub: "Enregistrements de terrain pour Babel",
    packagesHeader: "Paquets & imports",
    copingTitle: "Télécharger les phrases utiles", copingSub: "47 questions pour le savoir local",
    settingsHeader: "Réglages",
    autoTranslateTitle: "Traduire automatiquement à l'affichage",
    autoTranslateSub: "Désactivé (par défaut) : aucune requête automatique à l'ouverture/au filtrage/à l'apprentissage — seul localize! traduit",
    keyPlaceholder: "Coller la clé API Google", keySave: "Enregistrer et vérifier", keyDelete: "Supprimer",
    exportImportHeader: "Export & import", exportLabel: "EXPORT", importLabel: "IMPORT",
    phrasenBtn: "Phrases", vokabelnBtn: "Vocabulaire",
    supportHeader: "Soutenir", coffeeTitle: "M'offrir un café", coffeeSub: "PayPal – contribution volontaire",
    manualTitle: "Mode d'emploi", manualSub: "Usage & particularités",
    manifestSub: "La philosophie et l'âme de ThiLo!",
    appHeader: "Appli", speaksLabel: (l) => `${l} parle`,
    labelVokabel: { singular: "Mot", plural: "mots", neu: "Nouveau mot" },
    labelPhrase: { singular: "Phrase", plural: "phrases", neu: "Nouvelle phrase" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Parler", translateLabel: "Traduire",
    clearAllBtn: "Tout effacer", transcriptTitle: "Journal de conversation", transcriptExportBtn: "Exporter", transcriptClearBtn: "Effacer",
    addVocabBtn: "Ajouter un mot (traduction auto)", loadBaseVocabBtn: "Charger le vocabulaire de base", importListBtn: "Importer une liste",
    addOwnPhraseBtn: "Ajouter une phrase perso", loadBasePhrasesBtn: "Charger les phrases de base", importPhraseListBtn: "Importer une liste de phrases",
    stopRecordingLabel: "Arrêter l'enregistrement",
  },

  it: {
    updateTitle: "Aggiorna l'app", updateSub: "Apri l'ultima versione nel browser",
    familyHeader: "Famiglia ThiLo!",
    brainflowSub: "Idee & flussi di pensiero", noteSub: "In sviluppo", micSub: "Registrazioni sul campo per Babel",
    packagesHeader: "Pacchetti & importazioni",
    copingTitle: "Scarica le frasi utili", copingSub: "47 domande per il sapere locale",
    settingsHeader: "Impostazioni",
    autoTranslateTitle: "Traduci automaticamente alla visualizzazione",
    autoTranslateSub: "Disattivato (predefinito): nessuna richiesta automatica all'apertura/filtro/apprendimento — traduce solo localize!",
    keyPlaceholder: "Incolla la chiave API Google", keySave: "Salva e verifica", keyDelete: "Elimina",
    exportImportHeader: "Esporta & importa", exportLabel: "ESPORTA", importLabel: "IMPORTA",
    phrasenBtn: "Frasi", vokabelnBtn: "Vocabolario",
    supportHeader: "Sostieni", coffeeTitle: "Offrimi un caffè", coffeeSub: "PayPal – contributo volontario",
    manualTitle: "Guida all'uso", manualSub: "Utilizzo & particolarità",
    manifestSub: "La filosofia e l'anima di ThiLo!",
    appHeader: "App", speaksLabel: (l) => `${l} parla`,
    labelVokabel: { singular: "Vocabolo", plural: "vocaboli", neu: "Nuovo vocabolo" },
    labelPhrase: { singular: "Frase", plural: "frasi", neu: "Nuova frase" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Parla", translateLabel: "Traduci",
    clearAllBtn: "Cancella tutto", transcriptTitle: "Registro della conversazione", transcriptExportBtn: "Esporta", transcriptClearBtn: "Cancella",
    addVocabBtn: "Aggiungi vocabolo (traduzione automatica)", loadBaseVocabBtn: "Carica vocabolario di base", importListBtn: "Importa elenco",
    addOwnPhraseBtn: "Aggiungi frase personale", loadBasePhrasesBtn: "Carica frasi di base", importPhraseListBtn: "Importa elenco di frasi",
    stopRecordingLabel: "Ferma registrazione",
  },

  es: {
    updateTitle: "Actualizar app", updateSub: "Abrir la última versión en el navegador",
    familyHeader: "Familia ThiLo!",
    brainflowSub: "Ideas & flujos de pensamiento", noteSub: "En desarrollo", micSub: "Grabaciones de campo para Babel",
    packagesHeader: "Paquetes & importaciones",
    copingTitle: "Descargar frases útiles", copingSub: "47 preguntas para el saber local",
    settingsHeader: "Ajustes",
    autoTranslateTitle: "Traducir automáticamente al mostrar",
    autoTranslateSub: "Desactivado (predeterminado): sin solicitudes automáticas al abrir/filtrar/aprender — solo localize! traduce",
    keyPlaceholder: "Pegar clave de API de Google", keySave: "Guardar y comprobar", keyDelete: "Eliminar",
    exportImportHeader: "Exportar & importar", exportLabel: "EXPORTAR", importLabel: "IMPORTAR",
    phrasenBtn: "Frases", vokabelnBtn: "Vocabulario",
    supportHeader: "Apoyar", coffeeTitle: "Invítame a un café", coffeeSub: "PayPal – contribución voluntaria",
    manualTitle: "Guía de uso", manualSub: "Uso & particularidades",
    manifestSub: "La filosofía y el alma de ThiLo!",
    appHeader: "App", speaksLabel: (l) => `${l} habla`,
    labelVokabel: { singular: "Palabra", plural: "palabras", neu: "Nueva palabra" },
    labelPhrase: { singular: "Frase", plural: "frases", neu: "Nueva frase" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Hablar", translateLabel: "Traducir",
    clearAllBtn: "Borrar todo", transcriptTitle: "Registro de conversación", transcriptExportBtn: "Exportar", transcriptClearBtn: "Borrar",
    addVocabBtn: "Añadir palabra (traducción automática)", loadBaseVocabBtn: "Cargar vocabulario básico", importListBtn: "Importar lista",
    addOwnPhraseBtn: "Añadir frase propia", loadBasePhrasesBtn: "Cargar frases básicas", importPhraseListBtn: "Importar lista de frases",
    stopRecordingLabel: "Detener grabación",
  },

  pl: {
    updateTitle: "Zaktualizuj aplikację", updateSub: "Otwórz najnowszą wersję w przeglądarce",
    familyHeader: "Rodzina ThiLo!",
    brainflowSub: "Pomysły i strumienie myśli", noteSub: "W trakcie tworzenia", micSub: "Nagrania terenowe dla Babel",
    packagesHeader: "Pakiety i importy",
    copingTitle: "Pobierz przydatne zwroty", copingSub: "47 pytań o lokalną wiedzę",
    settingsHeader: "Ustawienia",
    autoTranslateTitle: "Tłumacz automatycznie przy wyświetlaniu",
    autoTranslateSub: "Wyłączone (domyślnie): brak automatycznych zapytań przy otwieraniu/filtrowaniu/nauce — tłumaczy tylko localize!",
    keyPlaceholder: "Wklej klucz API Google", keySave: "Zapisz i sprawdź", keyDelete: "Usuń",
    exportImportHeader: "Eksport i import", exportLabel: "EKSPORT", importLabel: "IMPORT",
    phrasenBtn: "Zwroty", vokabelnBtn: "Słownictwo",
    supportHeader: "Wsparcie", coffeeTitle: "Postaw mi kawę", coffeeSub: "PayPal – dobrowolny wkład",
    manualTitle: "Instrukcja obsługi", manualSub: "Zastosowanie i cechy szczególne",
    manifestSub: "Filozofia i dusza ThiLo!",
    appHeader: "Aplikacja", speaksLabel: (l) => `${l} mówi`,
    labelVokabel: { singular: "Słówko", plural: "słówka", neu: "Nowe słówko" },
    labelPhrase: { singular: "Zwrot", plural: "zwroty", neu: "Nowy zwrot" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Mów", translateLabel: "Tłumacz",
    clearAllBtn: "Usuń wszystko", transcriptTitle: "Protokół rozmowy", transcriptExportBtn: "Eksportuj", transcriptClearBtn: "Usuń",
    addVocabBtn: "Dodaj słówko (automatyczne tłumaczenie)", loadBaseVocabBtn: "Wczytaj słownictwo podstawowe", importListBtn: "Importuj listę",
    addOwnPhraseBtn: "Dodaj własny zwrot", loadBasePhrasesBtn: "Wczytaj zwroty podstawowe", importPhraseListBtn: "Importuj listę zwrotów",
    stopRecordingLabel: "Zatrzymaj nagrywanie",
  },

  cs: {
    updateTitle: "Aktualizovat aplikaci", updateSub: "Otevřít nejnovější verzi v prohlížeči",
    familyHeader: "Rodina ThiLo!",
    brainflowSub: "Nápady a proudy myšlenek", noteSub: "Ve vývoji", micSub: "Terénní nahrávky pro Babel",
    packagesHeader: "Balíčky a importy",
    copingTitle: "Stáhnout užitečné fráze", copingSub: "47 otázek pro místní znalosti",
    settingsHeader: "Nastavení",
    autoTranslateTitle: "Automaticky překládat při zobrazení",
    autoTranslateSub: "Vypnuto (výchozí): žádné automatické dotazy při otevírání/filtrování/učení — překládá pouze localize!",
    keyPlaceholder: "Vložit klíč Google API", keySave: "Uložit a ověřit", keyDelete: "Smazat",
    exportImportHeader: "Export a import", exportLabel: "EXPORT", importLabel: "IMPORT",
    phrasenBtn: "Fráze", vokabelnBtn: "Slovní zásoba",
    supportHeader: "Podpořit", coffeeTitle: "Kup mi kávu", coffeeSub: "PayPal – dobrovolný příspěvek",
    manualTitle: "Návod k použití", manualSub: "Použití a zvláštnosti",
    manifestSub: "Filozofie a duše ThiLo!",
    appHeader: "Aplikace", speaksLabel: (l) => `${l} mluví`,
    labelVokabel: { singular: "Slovíčko", plural: "slovíčka", neu: "Nové slovíčko" },
    labelPhrase: { singular: "Fráze", plural: "fráze", neu: "Nová fráze" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Mluvit", translateLabel: "Přeložit",
    clearAllBtn: "Smazat vše", transcriptTitle: "Záznam rozhovoru", transcriptExportBtn: "Exportovat", transcriptClearBtn: "Smazat",
    addVocabBtn: "Přidat slovíčko (automatický překlad)", loadBaseVocabBtn: "Načíst základní slovní zásobu", importListBtn: "Importovat seznam",
    addOwnPhraseBtn: "Přidat vlastní frázi", loadBasePhrasesBtn: "Načíst základní fráze", importPhraseListBtn: "Importovat seznam frází",
    stopRecordingLabel: "Zastavit nahrávání",
  },

  ru: {
    updateTitle: "Обновить приложение", updateSub: "Открыть последнюю версию в браузере",
    familyHeader: "Семья ThiLo!",
    brainflowSub: "Идеи и потоки мыслей", noteSub: "В разработке", micSub: "Полевые записи для Babel",
    packagesHeader: "Пакеты и импорт",
    copingTitle: "Скачать полезные фразы", copingSub: "47 вопросов о местных знаниях",
    settingsHeader: "Настройки",
    autoTranslateTitle: "Автоматический перевод при отображении",
    autoTranslateSub: "Выкл. (по умолчанию): нет автозапросов при открытии/фильтрации/обучении — переводит только localize!",
    keyPlaceholder: "Вставить ключ Google API", keySave: "Сохранить и проверить", keyDelete: "Удалить",
    exportImportHeader: "Экспорт и импорт", exportLabel: "ЭКСПОРТ", importLabel: "ИМПОРТ",
    phrasenBtn: "Фразы", vokabelnBtn: "Словарь",
    supportHeader: "Поддержать", coffeeTitle: "Угостить кофе", coffeeSub: "PayPal – добровольный взнос",
    manualTitle: "Руководство пользователя", manualSub: "Использование и особенности",
    manifestSub: "Философия и душа ThiLo!",
    appHeader: "Приложение", speaksLabel: (l) => `Говорит: ${l}`,
    labelVokabel: { singular: "Слово", plural: "слова", neu: "Новое слово" },
    labelPhrase: { singular: "Фраза", plural: "фразы", neu: "Новая фраза" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Говорить", translateLabel: "Перевести",
    clearAllBtn: "Удалить всё", transcriptTitle: "Протокол разговора", transcriptExportBtn: "Экспортировать", transcriptClearBtn: "Удалить",
    addVocabBtn: "Добавить слово (автоперевод)", loadBaseVocabBtn: "Загрузить базовый словарь", importListBtn: "Импортировать список",
    addOwnPhraseBtn: "Добавить свою фразу", loadBasePhrasesBtn: "Загрузить базовые фразы", importPhraseListBtn: "Импортировать список фраз",
    stopRecordingLabel: "Остановить запись",
  },

  tr: {
    updateTitle: "Uygulamayı güncelle", updateSub: "En son sürümü tarayıcıda aç",
    familyHeader: "ThiLo! ailesi",
    brainflowSub: "Fikirler & düşünce akışları", noteSub: "Geliştirme aşamasında", micSub: "Babel için saha kayıtları",
    packagesHeader: "Paketler & içe aktarımlar",
    copingTitle: "Yardımcı ifadeleri indir", copingSub: "Yerel bilgi için 47 soru",
    settingsHeader: "Ayarlar",
    autoTranslateTitle: "Görüntülerken otomatik çevir",
    autoTranslateSub: "Kapalı (varsayılan): açma/filtreleme/öğrenmede otomatik istek yok — yalnızca localize! çevirir",
    keyPlaceholder: "Google API anahtarını yapıştır", keySave: "Kaydet & doğrula", keyDelete: "Sil",
    exportImportHeader: "Dışa & içe aktarma", exportLabel: "DIŞA AKTAR", importLabel: "İÇE AKTAR",
    phrasenBtn: "İfadeler", vokabelnBtn: "Kelime hazinesi",
    supportHeader: "Destek ol", coffeeTitle: "Bana bir kahve ısmarla", coffeeSub: "PayPal – gönüllü katkı",
    manualTitle: "Kullanım kılavuzu", manualSub: "Kullanım & özellikler",
    manifestSub: "ThiLo!'nun felsefesi ve ruhu",
    appHeader: "Uygulama", speaksLabel: (l) => `${l} konuşuyor`,
    labelVokabel: { singular: "Kelime", plural: "kelimeler", neu: "Yeni kelime" },
    labelPhrase: { singular: "İfade", plural: "ifadeler", neu: "Yeni ifade" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Konuş", translateLabel: "Çevir",
    clearAllBtn: "Tümünü sil", transcriptTitle: "Konuşma kaydı", transcriptExportBtn: "Dışa aktar", transcriptClearBtn: "Sil",
    addVocabBtn: "Kelime ekle (otomatik çeviri)", loadBaseVocabBtn: "Temel kelime hazinesini yükle", importListBtn: "Listeyi içe aktar",
    addOwnPhraseBtn: "Kendi ifadeni ekle", loadBasePhrasesBtn: "Temel ifadeleri yükle", importPhraseListBtn: "İfade listesini içe aktar",
    stopRecordingLabel: "Kaydı durdur",
  },

  hr: {
    updateTitle: "Ažuriraj aplikaciju", updateSub: "Otvori najnoviju verziju u pregledniku",
    familyHeader: "ThiLo! obitelj",
    brainflowSub: "Ideje i tokovi misli", noteSub: "U razvoju", micSub: "Terenski snimci za Babel",
    packagesHeader: "Paketi i uvozi",
    copingTitle: "Preuzmi korisne fraze", copingSub: "47 pitanja za lokalno znanje",
    settingsHeader: "Postavke",
    autoTranslateTitle: "Automatski prevodi pri prikazu",
    autoTranslateSub: "Isključeno (zadano): bez automatskih zahtjeva pri otvaranju/filtriranju/učenju — prevodi samo localize!",
    keyPlaceholder: "Zalijepi Google API ključ", keySave: "Spremi i provjeri", keyDelete: "Izbriši",
    exportImportHeader: "Izvoz i uvoz", exportLabel: "IZVOZ", importLabel: "UVOZ",
    phrasenBtn: "Fraze", vokabelnBtn: "Rječnik",
    supportHeader: "Podrži", coffeeTitle: "Časti me kavom", coffeeSub: "PayPal – dobrovoljni prilog",
    manualTitle: "Upute za uporabu", manualSub: "Uporaba i posebnosti",
    manifestSub: "Filozofija i duša ThiLo!",
    appHeader: "Aplikacija", speaksLabel: (l) => `${l} govori`,
    labelVokabel: { singular: "Riječ", plural: "riječi", neu: "Nova riječ" },
    labelPhrase: { singular: "Fraza", plural: "fraze", neu: "Nova fraza" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Govori", translateLabel: "Prevedi",
    clearAllBtn: "Izbriši sve", transcriptTitle: "Zapisnik razgovora", transcriptExportBtn: "Izvezi", transcriptClearBtn: "Izbriši",
    addVocabBtn: "Dodaj riječ (automatski prijevod)", loadBaseVocabBtn: "Učitaj osnovni rječnik", importListBtn: "Uvezi popis",
    addOwnPhraseBtn: "Dodaj vlastitu frazu", loadBasePhrasesBtn: "Učitaj osnovne fraze", importPhraseListBtn: "Uvezi popis fraza",
    stopRecordingLabel: "Zaustavi snimanje",
  },

  sk: {
    updateTitle: "Aktualizovať aplikáciu", updateSub: "Otvoriť najnovšiu verziu v prehliadači",
    familyHeader: "Rodina ThiLo!",
    brainflowSub: "Nápady a prúdy myšlienok", noteSub: "Vo vývoji", micSub: "Terénne nahrávky pre Babel",
    packagesHeader: "Balíčky a importy",
    copingTitle: "Stiahnuť užitočné frázy", copingSub: "47 otázok pre miestne znalosti",
    settingsHeader: "Nastavenia",
    autoTranslateTitle: "Automaticky prekladať pri zobrazení",
    autoTranslateSub: "Vypnuté (predvolené): žiadne automatické požiadavky pri otváraní/filtrovaní/učení — prekladá iba localize!",
    keyPlaceholder: "Vložiť kľúč Google API", keySave: "Uložiť a overiť", keyDelete: "Vymazať",
    exportImportHeader: "Export a import", exportLabel: "EXPORT", importLabel: "IMPORT",
    phrasenBtn: "Frázy", vokabelnBtn: "Slovná zásoba",
    supportHeader: "Podporiť", coffeeTitle: "Kúp mi kávu", coffeeSub: "PayPal – dobrovoľný príspevok",
    manualTitle: "Návod na použitie", manualSub: "Použitie a osobitosti",
    manifestSub: "Filozofia a duša ThiLo!",
    appHeader: "Aplikácia", speaksLabel: (l) => `${l} hovorí`,
    labelVokabel: { singular: "Slovíčko", plural: "slovíčka", neu: "Nové slovíčko" },
    labelPhrase: { singular: "Fráza", plural: "frázy", neu: "Nová fráza" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Hovoriť", translateLabel: "Preložiť",
    clearAllBtn: "Vymazať všetko", transcriptTitle: "Záznam rozhovoru", transcriptExportBtn: "Exportovať", transcriptClearBtn: "Vymazať",
    addVocabBtn: "Pridať slovíčko (automatický preklad)", loadBaseVocabBtn: "Načítať základnú slovnú zásobu", importListBtn: "Importovať zoznam",
    addOwnPhraseBtn: "Pridať vlastnú frázu", loadBasePhrasesBtn: "Načítať základné frázy", importPhraseListBtn: "Importovať zoznam fráz",
    stopRecordingLabel: "Zastaviť nahrávanie",
  },

  sl: {
    updateTitle: "Posodobi aplikacijo", updateSub: "Odpri najnovejšo različico v brskalniku",
    familyHeader: "Družina ThiLo!",
    brainflowSub: "Ideje in tokovi misli", noteSub: "V razvoju", micSub: "Terenski posnetki za Babel",
    packagesHeader: "Paketi in uvozi",
    copingTitle: "Prenesi koristne fraze", copingSub: "47 vprašanj za lokalno znanje",
    settingsHeader: "Nastavitve",
    autoTranslateTitle: "Samodejno prevajaj ob prikazu",
    autoTranslateSub: "Izklopljeno (privzeto): brez samodejnih zahtev pri odpiranju/filtriranju/učenju — prevaja samo localize!",
    keyPlaceholder: "Prilepi ključ Google API", keySave: "Shrani in preveri", keyDelete: "Izbriši",
    exportImportHeader: "Izvoz in uvoz", exportLabel: "IZVOZ", importLabel: "UVOZ",
    phrasenBtn: "Fraze", vokabelnBtn: "Besedišče",
    supportHeader: "Podpri", coffeeTitle: "Plačaj mi kavo", coffeeSub: "PayPal – prostovoljni prispevek",
    manualTitle: "Navodila za uporabo", manualSub: "Uporaba in posebnosti",
    manifestSub: "Filozofija in duša ThiLo!",
    appHeader: "Aplikacija", speaksLabel: (l) => `${l} govori`,
    labelVokabel: { singular: "Beseda", plural: "besede", neu: "Nova beseda" },
    labelPhrase: { singular: "Fraza", plural: "fraze", neu: "Nova fraza" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Govori", translateLabel: "Prevedi",
    clearAllBtn: "Izbriši vse", transcriptTitle: "Zapisnik pogovora", transcriptExportBtn: "Izvozi", transcriptClearBtn: "Izbriši",
    addVocabBtn: "Dodaj besedo (samodejni prevod)", loadBaseVocabBtn: "Naloži osnovno besedišče", importListBtn: "Uvozi seznam",
    addOwnPhraseBtn: "Dodaj lastno frazo", loadBasePhrasesBtn: "Naloži osnovne fraze", importPhraseListBtn: "Uvozi seznam fraz",
    stopRecordingLabel: "Ustavi snemanje",
  },

  ro: {
    updateTitle: "Actualizează aplicația", updateSub: "Deschide cea mai nouă versiune în browser",
    familyHeader: "Familia ThiLo!",
    brainflowSub: "Idei & fluxuri de gânduri", noteSub: "În dezvoltare", micSub: "Înregistrări de teren pentru Babel",
    packagesHeader: "Pachete & importuri",
    copingTitle: "Descarcă expresii utile", copingSub: "47 de întrebări pentru cunoștințe locale",
    settingsHeader: "Setări",
    autoTranslateTitle: "Traducere automată la afișare",
    autoTranslateSub: "Dezactivat (implicit): fără cereri automate la deschidere/filtrare/învățare — traduce doar localize!",
    keyPlaceholder: "Lipește cheia API Google", keySave: "Salvează și verifică", keyDelete: "Șterge",
    exportImportHeader: "Export & import", exportLabel: "EXPORT", importLabel: "IMPORT",
    phrasenBtn: "Expresii", vokabelnBtn: "Vocabular",
    supportHeader: "Susține", coffeeTitle: "Oferă-mi o cafea", coffeeSub: "PayPal – contribuție voluntară",
    manualTitle: "Ghid de utilizare", manualSub: "Utilizare & particularități",
    manifestSub: "Filozofia și sufletul ThiLo!",
    appHeader: "Aplicație", speaksLabel: (l) => `${l} vorbește`,
    labelVokabel: { singular: "Cuvânt", plural: "cuvinte", neu: "Cuvânt nou" },
    labelPhrase: { singular: "Expresie", plural: "expresii", neu: "Expresie nouă" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Vorbește", translateLabel: "Tradu",
    clearAllBtn: "Șterge tot", transcriptTitle: "Jurnal de conversație", transcriptExportBtn: "Exportă", transcriptClearBtn: "Șterge",
    addVocabBtn: "Adaugă cuvânt (traducere automată)", loadBaseVocabBtn: "Încarcă vocabularul de bază", importListBtn: "Importă lista",
    addOwnPhraseBtn: "Adaugă expresie proprie", loadBasePhrasesBtn: "Încarcă expresiile de bază", importPhraseListBtn: "Importă lista de expresii",
    stopRecordingLabel: "Oprește înregistrarea",
  },

  uk: {
    updateTitle: "Оновити застосунок", updateSub: "Відкрити найновішу версію в браузері",
    familyHeader: "Родина ThiLo!",
    brainflowSub: "Ідеї та потоки думок", noteSub: "У розробці", micSub: "Польові записи для Babel",
    packagesHeader: "Пакети та імпорт",
    copingTitle: "Завантажити корисні фрази", copingSub: "47 запитань для місцевих знань",
    settingsHeader: "Налаштування",
    autoTranslateTitle: "Автоматичний переклад під час показу",
    autoTranslateSub: "Вимкнено (за замовчуванням): без автоматичних запитів при відкритті/фільтрації/навчанні — перекладає лише localize!",
    keyPlaceholder: "Вставити ключ Google API", keySave: "Зберегти й перевірити", keyDelete: "Видалити",
    exportImportHeader: "Експорт та імпорт", exportLabel: "ЕКСПОРТ", importLabel: "ІМПОРТ",
    phrasenBtn: "Фрази", vokabelnBtn: "Словник",
    supportHeader: "Підтримати", coffeeTitle: "Пригостити кавою", coffeeSub: "PayPal – добровільний внесок",
    manualTitle: "Посібник користувача", manualSub: "Використання та особливості",
    manifestSub: "Філософія і душа ThiLo!",
    appHeader: "Застосунок", speaksLabel: (l) => `Говорить: ${l}`,
    labelVokabel: { singular: "Слово", plural: "слова", neu: "Нове слово" },
    labelPhrase: { singular: "Фраза", plural: "фрази", neu: "Нова фраза" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Говорити", translateLabel: "Перекласти",
    clearAllBtn: "Видалити все", transcriptTitle: "Протокол розмови", transcriptExportBtn: "Експортувати", transcriptClearBtn: "Видалити",
    addVocabBtn: "Додати слово (автопереклад)", loadBaseVocabBtn: "Завантажити базовий словник", importListBtn: "Імпортувати список",
    addOwnPhraseBtn: "Додати власну фразу", loadBasePhrasesBtn: "Завантажити базові фрази", importPhraseListBtn: "Імпортувати список фраз",
    stopRecordingLabel: "Зупинити запис",
  },

  sr: {
    updateTitle: "Ažuriraj aplikaciju", updateSub: "Otvori najnoviju verziju u pregledaču",
    familyHeader: "ThiLo! porodica",
    brainflowSub: "Ideje i tokovi misli", noteSub: "U razvoju", micSub: "Terenski snimci za Babel",
    packagesHeader: "Paketi i uvozi",
    copingTitle: "Preuzmi korisne fraze", copingSub: "47 pitanja za lokalno znanje",
    settingsHeader: "Podešavanja",
    autoTranslateTitle: "Automatski prevodi pri prikazu",
    autoTranslateSub: "Isključeno (podrazumevano): bez automatskih zahteva pri otvaranju/filtriranju/učenju — prevodi samo localize!",
    keyPlaceholder: "Nalepi Google API ključ", keySave: "Sačuvaj i proveri", keyDelete: "Obriši",
    exportImportHeader: "Izvoz i uvoz", exportLabel: "IZVOZ", importLabel: "UVOZ",
    phrasenBtn: "Fraze", vokabelnBtn: "Rečnik",
    supportHeader: "Podrži", coffeeTitle: "Časti me kafom", coffeeSub: "PayPal – dobrovoljni prilog",
    manualTitle: "Uputstvo za upotrebu", manualSub: "Upotreba i posebnosti",
    manifestSub: "Filozofija i duša ThiLo!",
    appHeader: "Aplikacija", speaksLabel: (l) => `${l} govori`,
    labelVokabel: { singular: "Reč", plural: "reči", neu: "Nova reč" },
    labelPhrase: { singular: "Fraza", plural: "fraze", neu: "Nova fraza" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Govori", translateLabel: "Prevedi",
    clearAllBtn: "Obriši sve", transcriptTitle: "Zapisnik razgovora", transcriptExportBtn: "Izvezi", transcriptClearBtn: "Obriši",
    addVocabBtn: "Dodaj reč (automatski prevod)", loadBaseVocabBtn: "Učitaj osnovni rečnik", importListBtn: "Uvezi spisak",
    addOwnPhraseBtn: "Dodaj sopstvenu frazu", loadBasePhrasesBtn: "Učitaj osnovne fraze", importPhraseListBtn: "Uvezi spisak fraza",
    stopRecordingLabel: "Zaustavi snimanje",
  },

  el: {
    updateTitle: "Ενημέρωση εφαρμογής", updateSub: "Άνοιγμα της νεότερης έκδοσης στο πρόγραμμα περιήγησης",
    familyHeader: "Οικογένεια ThiLo!",
    brainflowSub: "Ιδέες & ροές σκέψης", noteSub: "Σε ανάπτυξη", micSub: "Ηχογραφήσεις πεδίου για το Babel",
    packagesHeader: "Πακέτα & εισαγωγές",
    copingTitle: "Λήψη χρήσιμων φράσεων", copingSub: "47 ερωτήσεις για τοπική γνώση",
    settingsHeader: "Ρυθμίσεις",
    autoTranslateTitle: "Αυτόματη μετάφραση κατά την εμφάνιση",
    autoTranslateSub: "Ανενεργό (προεπιλογή): καμία αυτόματη αίτηση κατά το άνοιγμα/φιλτράρισμα/εκμάθηση — μεταφράζει μόνο το localize!",
    keyPlaceholder: "Επικόλληση κλειδιού Google API", keySave: "Αποθήκευση & έλεγχος", keyDelete: "Διαγραφή",
    exportImportHeader: "Εξαγωγή & εισαγωγή", exportLabel: "ΕΞΑΓΩΓΗ", importLabel: "ΕΙΣΑΓΩΓΗ",
    phrasenBtn: "Φράσεις", vokabelnBtn: "Λεξιλόγιο",
    supportHeader: "Υποστήριξη", coffeeTitle: "Κέρασέ με έναν καφέ", coffeeSub: "PayPal – εθελοντική συνεισφορά",
    manualTitle: "Οδηγός χρήσης", manualSub: "Χρήση & ιδιαιτερότητες",
    manifestSub: "Η φιλοσοφία και η ψυχή του ThiLo!",
    appHeader: "Εφαρμογή", speaksLabel: (l) => `Μιλά ${l}`,
    labelVokabel: { singular: "Λέξη", plural: "λέξεις", neu: "Νέα λέξη" },
    labelPhrase: { singular: "Φράση", plural: "φράσεις", neu: "Νέα φράση" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Ομιλία", translateLabel: "Μετάφραση",
    clearAllBtn: "Διαγραφή όλων", transcriptTitle: "Αρχείο συνομιλίας", transcriptExportBtn: "Εξαγωγή", transcriptClearBtn: "Διαγραφή",
    addVocabBtn: "Προσθήκη λέξης (αυτόματη μετάφραση)", loadBaseVocabBtn: "Φόρτωση βασικού λεξιλογίου", importListBtn: "Εισαγωγή λίστας",
    addOwnPhraseBtn: "Προσθήκη δικής μου φράσης", loadBasePhrasesBtn: "Φόρτωση βασικών φράσεων", importPhraseListBtn: "Εισαγωγή λίστας φράσεων",
    stopRecordingLabel: "Διακοπή εγγραφής",
  },

  bs: {
    updateTitle: "Ažuriraj aplikaciju", updateSub: "Otvori najnoviju verziju u pregledniku",
    familyHeader: "ThiLo! porodica",
    brainflowSub: "Ideje i tokovi misli", noteSub: "U razvoju", micSub: "Terenski snimci za Babel",
    packagesHeader: "Paketi i uvozi",
    copingTitle: "Preuzmi korisne fraze", copingSub: "47 pitanja za lokalno znanje",
    settingsHeader: "Postavke",
    autoTranslateTitle: "Automatski prevodi pri prikazu",
    autoTranslateSub: "Isključeno (podrazumijevano): bez automatskih zahtjeva pri otvaranju/filtriranju/učenju — prevodi samo localize!",
    keyPlaceholder: "Zalijepi Google API ključ", keySave: "Sačuvaj i provjeri", keyDelete: "Izbriši",
    exportImportHeader: "Izvoz i uvoz", exportLabel: "IZVOZ", importLabel: "UVOZ",
    phrasenBtn: "Fraze", vokabelnBtn: "Rječnik",
    supportHeader: "Podrži", coffeeTitle: "Časti me kafom", coffeeSub: "PayPal – dobrovoljni prilog",
    manualTitle: "Uputstvo za upotrebu", manualSub: "Upotreba i posebnosti",
    manifestSub: "Filozofija i duša ThiLo!",
    appHeader: "Aplikacija", speaksLabel: (l) => `${l} govori`,
    labelVokabel: { singular: "Riječ", plural: "riječi", neu: "Nova riječ" },
    labelPhrase: { singular: "Fraza", plural: "fraze", neu: "Nova fraza" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Govori", translateLabel: "Prevedi",
    clearAllBtn: "Izbriši sve", transcriptTitle: "Zapisnik razgovora", transcriptExportBtn: "Izvezi", transcriptClearBtn: "Izbriši",
    addVocabBtn: "Dodaj riječ (automatski prijevod)", loadBaseVocabBtn: "Učitaj osnovni rječnik", importListBtn: "Uvezi popis",
    addOwnPhraseBtn: "Dodaj vlastitu frazu", loadBasePhrasesBtn: "Učitaj osnovne fraze", importPhraseListBtn: "Uvezi popis fraza",
    stopRecordingLabel: "Zaustavi snimanje",
  },

  sq: {
    updateTitle: "Përditëso aplikacionin", updateSub: "Hap versionin më të fundit në shfletues",
    familyHeader: "Familja ThiLo!",
    brainflowSub: "Ide & rrjedha mendimesh", noteSub: "Në zhvillim", micSub: "Regjistrime në terren për Babel",
    packagesHeader: "Paketa & importe",
    copingTitle: "Shkarko frazat e dobishme", copingSub: "47 pyetje për njohuri lokale",
    settingsHeader: "Cilësimet",
    autoTranslateTitle: "Përkthe automatikisht gjatë shfaqjes",
    autoTranslateSub: "Çaktivizuar (parazgjedhje): asnjë kërkesë automatike gjatë hapjes/filtrimit/mësimit — vetëm localize! përkthen",
    keyPlaceholder: "Ngjit çelësin e Google API", keySave: "Ruaj & kontrollo", keyDelete: "Fshi",
    exportImportHeader: "Eksport & import", exportLabel: "EKSPORT", importLabel: "IMPORT",
    phrasenBtn: "Fraza", vokabelnBtn: "Fjalor",
    supportHeader: "Mbështet", coffeeTitle: "Më qerato me një kafe", coffeeSub: "PayPal – kontribut vullnetar",
    manualTitle: "Udhëzues përdorimi", manualSub: "Përdorimi & veçoritë",
    manifestSub: "Filozofia dhe shpirti i ThiLo!",
    appHeader: "Aplikacioni", speaksLabel: (l) => `${l} flet`,
    labelVokabel: { singular: "Fjalë", plural: "fjalë", neu: "Fjalë e re" },
    labelPhrase: { singular: "Frazë", plural: "fraza", neu: "Frazë e re" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "Fol", translateLabel: "Përkthe",
    clearAllBtn: "Fshi të gjitha", transcriptTitle: "Regjistri i bisedës", transcriptExportBtn: "Eksporto", transcriptClearBtn: "Fshi",
    addVocabBtn: "Shto fjalë (përkthim automatik)", loadBaseVocabBtn: "Ngarko fjalorin bazë", importListBtn: "Importo listën",
    addOwnPhraseBtn: "Shto frazë të vetën", loadBasePhrasesBtn: "Ngarko frazat bazë", importPhraseListBtn: "Importo listën e frazave",
    stopRecordingLabel: "Ndalo regjistrimin",
  },

  // Hebräisch (he) — ergänzt 9.10.2026, KI-generiert, bitte gegenlesen. Schreibrichtung RTL wird von der Oberfläche
  // bewusst nicht umgestellt (wie bei den anderen Sprachen, siehe Hinweis bei LANGS in index.html).
  he: {
    updateTitle: "עדכון האפליקציה", updateSub: "פתיחת הגרסה האחרונה בדפדפן",
    familyHeader: "משפחת ThiLo!",
    brainflowSub: "רעיונות וזרמי מחשבה", noteSub: "בפיתוח", micSub: "הקלטות שטח עבור Babel",
    packagesHeader: "חבילות וייבוא",
    copingTitle: "הורדת ביטויי התמודדות", copingSub: "47 שאלות לידע מקומי",
    settingsHeader: "הגדרות",
    autoTranslateTitle: "תרגום אוטומטי בעת הצגה",
    autoTranslateSub: "כבוי (ברירת מחדל): אין בקשות אוטומטיות בעת פתיחה/סינון/לימוד — רק localize! מתרגם",
    keyPlaceholder: "הדבק מפתח Google API", keySave: "שמירה ובדיקה", keyDelete: "מחיקה",
    exportImportHeader: "ייצוא וייבוא", exportLabel: "ייצוא", importLabel: "ייבוא",
    phrasenBtn: "ביטויים", vokabelnBtn: "אוצר מילים",
    supportHeader: "תמיכה", coffeeTitle: "לקנות לי קפה", coffeeSub: "PayPal – תרומה מרצון",
    manualTitle: "מדריך למשתמש", manualSub: "שימוש ופרטים מיוחדים",
    manifestSub: "הפילוסופיה והנשמה של ThiLo!",
    appHeader: "אפליקציה", speaksLabel: (l) => `${l} – דיבור`,
    labelVokabel: { singular: "מילה", plural: "מילים", neu: "מילה חדשה" },
    labelPhrase: { singular: "ביטוי", plural: "ביטויים", neu: "ביטוי חדש" },
    // Bedienelemente & große Überschriften (Gruppe A)
    speakLabel: "דיבור", translateLabel: "תרגום",
    clearAllBtn: "מחק הכול", transcriptTitle: "יומן שיחה", transcriptExportBtn: "ייצוא", transcriptClearBtn: "מחיקה",
    addVocabBtn: "הוספת מילה (תרגום אוטומטי)", loadBaseVocabBtn: "טעינת אוצר מילים בסיסי", importListBtn: "ייבוא רשימה",
    addOwnPhraseBtn: "הוספת ביטוי משלי", loadBasePhrasesBtn: "טעינת ביטויים בסיסיים", importPhraseListBtn: "ייבוא רשימת ביטויים",
    stopRecordingLabel: "עצור הקלטה",
  },

};

// Ableitung: "de-DE" -> "de", "la" (Latein) -> Rückfall auf Deutsch, weil Babel dafür keine UI-Übersetzung führt
function uiLangKey(anchorCode) {
  if (!anchorCode) return "de";
  const short = String(anchorCode).split("-")[0].toLowerCase();
  return UI_STRINGS[short] ? short : "de";
}

// Setzt alle [data-i18n]-Texte, [data-i18n-sub]-Untertitel und [data-i18n-ph]-Platzhalter
// auf die Sprache von langKey. Wird beim Setzen des Ankers einmal aufgerufen und beim
// nächsten Laden erneut, wenn schon ein Anker existiert.
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
// Kernsatz: Panel-Beschriftung und Vokabel-/Phrasen-Wörter kommen immer aus der Ankersprache.
// Wirkung: index.html muss nur noch diese zwei Funktionen aufrufen, statt Texte selbst zusammenzusetzen.

// "{Sprache} spricht" in der Ankersprache, z. B. uiSpeaksLabel("hu", "Deutsch") -> "Deutsch beszél"
function uiSpeaksLabel(anchorCode, langName) {
  return UI_STRINGS[uiLangKey(anchorCode)].speaksLabel(langName);
}

// Wortformen für LABELS: art = "vokabel" oder "phrase" -> { singular, plural, neu }
function uiLabelFor(anchorCode, art) {
  const s = UI_STRINGS[uiLangKey(anchorCode)];
  return art === "phrase" ? s.labelPhrase : s.labelVokabel;
}

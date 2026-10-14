# ThiLo! Babel Basic – Grundvokabular Deutsch–Ungarisch

Stand der Lieferung: 14.10.2026, 17:20 (steht auch im Menü der App).

## Zweck

Babel Basic wird mit einem echten Grundvokabular ausgeliefert: **1745 Wörter und Wendungen Deutsch → Ungarisch**.
Sie ersetzen die bisherigen 14 Testvokabeln (Abend … Adler).

## Bedienung

1. App öffnen → **Vokabeln** → grüner Knopf **Grundvokabular laden**.
2. Alle Wörter landen im Schatz „main“, Kategorie „Grundvokabular“, Güte „Bronze“.
3. Der Knopf kann mehrfach gedrückt werden: Schon vorhandene Wörter werden nicht doppelt angelegt.

## Funktionsweise

- Die Liste steckt in `index.html` im Feld `GRUNDVOKABULAR` (eine Zeile pro Wort: `de`, `hu`, `category`, `origin`).
- **Klammern werden nie gesprochen.** Deutsche Artikel stehen in Klammern: `Abend (der)`. Ungarische Endungshilfen ebenfalls: `este (-t, -k, -je)`. Die Funktion `cleanTerm()` entfernt alles in Klammern, bevor gesprochen oder übersetzt wird.
- Beim Laden wird das Wort **ohne** Klammern abgelegt (also `Abend`, `este`). Die Artikel erscheinen deshalb nicht in der Vokabelliste. (Falls sie dort sichtbar sein sollen: kleine Änderung, siehe Erweiterungsstellen.)
- Ein Wort gilt als „schon vorhanden“, wenn **ungarisch und deutsch** zusammen gleich sind. Damit bleiben Paare wie *Brief* / *Blatt* (beide „levél“) erhalten.

## Dateien dieser Lieferung

| Datei | Inhalt |
|---|---|
| `index.html` | Babel Basic mit neuem Grundvokabular |
| `Vokabeln_Deutsch_Ungarisch_HU_Artikel-in-Klammern.txt` | Die Liste im Originalformat (`Deutsch \| Ungarisch (HU)`), Artikel in Klammern – als neue Quelle zum Weiterpflegen |
| `README.md` | Diese Anleitung |

## Erweiterungsstellen

- **Wörter ergänzen oder ändern:** die TXT-Datei bearbeiten und an Claude geben – daraus wird das Feld `GRUNDVOKABULAR` neu erzeugt. Format pro Zeile: `Deutsch | Ungarisch (HU)`, Artikel in Klammern hinter dem Wort.
- **Artikel in der Liste anzeigen:** in `loadGrundvokabularBtn` (Klick-Handler) `de: cleanTerm(entry.de)` durch `de: entry.de` ersetzen. Dann muss zusätzlich `localizeEintraege` das Deutsch (`quelle`) vorher mit `cleanTerm()` bereinigen, sonst gehen die Klammern an den Übersetzer.
- **Weitere Sprachpaare:** weitere Listen nach gleichem Muster anlegen (eigenes Feld, eigener Ladeknopf).

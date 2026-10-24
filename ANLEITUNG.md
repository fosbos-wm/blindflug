# Blindflug – Das Nebelgewölbe (eigene App)

Zwei Teams spielen gleichzeitig auf einem (oder zwei gespiegelten) Monitor(en). Die Pilotin steuert mit dem **Handy** (Steuerkreuz und Zauberknopf), die Navigation hat die Karte auf dem zweiten Handy. Tastatur und Gamepads funktionieren weiterhin.

## Dateien
| Datei | Zweck |
|---|---|
| `index.html` | Spiel, Handy-Steuerung und Navigator-Karte in einer Datei |
| `config.js` | **Hier trägst du die Adresse deiner Firebase-Datenbank ein** |
| `database.rules.json` | Sicherheitsregeln für Firebase (einfügen, siehe Schritt 3) |
| `js/qr.js`, `js/qr-local.js` | QR-Codes, lokal erzeugt (es wird nichts nachgeladen) |

## Einrichtung (einmalig, ca. 10 Minuten)

1. **Firebase-Projekt anlegen:** <https://console.firebase.google.com> → „Projekt hinzufügen“ → Name z. B. `blindflug` → Google Analytics **ausschalten**. Am besten ein *eigenes* Projekt, nicht das der F11Sb-App.
2. **Realtime Database erstellen:** links „Erstellen“ → „Realtime Database“ → „Datenbank erstellen“ → Standort **Belgien (europe-west1)** → Start im **gesperrten Modus**.
3. **Regeln einfügen:** Reiter „Regeln“ → kompletten Inhalt durch `database.rules.json` ersetzen → „Veröffentlichen“. (Mit dem „Regel-Simulator“ kann man prüfen, dass ein Schreibzugriff auf `/blindflug/ABCDE/t0` erlaubt ist, auf `/` aber nicht.)
4. **Adresse eintragen:** Reiter „Daten“ → oben steht die Adresse, z. B. `https://blindflug-12345-default-rtdb.europe-west1.firebasedatabase.app`. In `config.js` zwischen die Anführungszeichen setzen (ohne `/` am Ende).
5. **Veröffentlichen:** neues GitHub-Repository `Blindflug`, alle Dateien dieses Ordners hochladen → Settings → Pages → Branch `main`, Ordner `/ (root)`. Die App liegt dann unter `https://<dein-name>.github.io/Blindflug/`.

## Ablauf am Spieltag
1. Aula-Rechner: die Adresse öffnen, **F** für Vollbild.
2. Pro Team scannt die Pilotin den **QR-Code ihres Teams** – auf dem Handy erscheinen Steuerkreuz und Zauberknopf (Handy quer halten ist am bequemsten). Auf dem Monitor steht dann „Handy verbunden ✓“.
3. Die Navigatorinnen scannen den **mittleren QR-Code** (Karte) und decken sie erst bei „LOS!“ auf.
4. „Los!“ drücken. Pause: Esc.

Reißt die Verbindung ab, stoppt die Figur nach wenigen Sekunden von selbst und der Monitor zeigt „Handy getrennt“. QR-Code neu scannen genügt, oder die Tastatur übernimmt.

## Datenschutz in Kürze
- Es gibt keine Konten, Namen oder Geräte-Kennungen. Die Teamnamen bleiben im Browser des Aula-Rechners.
- Über die Datenbank laufen nur: Richtung („links“, „rechts“ …), ein Zeitstempel für „Zauber“ und „Handy lebt“, der Spielstand („Start/Läuft/Pause/Ende“), das aktuelle Zauber-Symbol und der Sieger (0 oder 1).
- Jede Runde bekommt einen zufälligen Raumcode (5 Zeichen). Er wird beim Schließen der Seite gelöscht. Falls einmal etwas übrig bleibt: in der Firebase-Konsole unter „Daten“ den Eintrag `blindflug` löschen.
- Die Daten liegen bei Google (Firebase, Standort EU). Das sollte die Schule kurz mit der/dem Datenschutzbeauftragten abstimmen.
- Das Spielfeld (Labyrinth) wird aus der Kartennummer berechnet und nicht übertragen.

## Fehlersuche
- **„Handy-Steuerung nicht eingerichtet“** → `config.js` ist noch leer.
- **Handy bleibt auf „Warte auf den Monitor“** → die Seite am Rechner neu laden (neuer Code) und den QR-Code neu scannen; prüfen, ob die Regeln veröffentlicht sind.
- **Handy verbindet, aber nichts bewegt sich** → Datenbank-Regeln prüfen (Schritt 3), Tippfehler in der Adresse (kein `/` am Ende, `https://`).
- **Schulnetz blockt** → `*.firebasedatabase.app` muss erreichbar sein. Handys im Mobilfunknetz funktionieren auch, sie brauchen keine Verbindung zum Aula-Rechner.

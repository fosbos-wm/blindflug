# Blindflug – Das Nebelgewölbe (eigene App)

Zwei Teams spielen gleichzeitig. Die Pilotin steuert mit dem **Handy** (Steuerkreuz und Zauberknopf), die Navigation hat die Karte auf dem zweiten Handy. Tastatur und Gamepads gehen weiterhin.

## Einrichtung (einmalig)

**A) Firebase (ca. 5 Minuten)**
1. <https://console.firebase.google.com> → „Projekt hinzufügen“ → Name `blindflug` → Google Analytics ausschalten.
2. Links „Erstellen“ → **Realtime Database** (nicht Firestore) → „Datenbank erstellen“ → Standort **Belgien (europe-west1)** → **gesperrter Modus**.
3. Reiter **Regeln**: den ganzen Text ersetzen durch den Inhalt von `database.rules.json` → **Veröffentlichen**.
4. Reiter **Daten**: die Adresse oben kopieren, z. B. `https://blindflug-12345-default-rtdb.europe-west1.firebasedatabase.app`.

**B) GitHub (ca. 3 Minuten)**
1. Neues Repository `Blindflug` anlegen und **alle Dateien dieses Ordners** hochladen (`index.html`, `config.js`, `database.rules.json`, `ANLEITUNG.md`, Ordner `js`).
2. Settings → Pages → Branch `main`, Ordner `/ (root)` → Speichern. Nach ein bis zwei Minuten läuft die App unter `https://<dein-name>.github.io/Blindflug/`.

**C) Adresse eintragen: direkt im Spiel, keine Datei bearbeiten**
Beim ersten Öffnen zeigt der Startbildschirm ein Feld „Adresse der Firebase-Datenbank eintragen“. Adresse aus A4 einfügen → Speichern. Sie bleibt in diesem Browser gespeichert und wird über die QR-Codes an die Handys weitergegeben. (Alternativ kann sie in `config.js` stehen.)

## Am Spieltag
1. Aula-Rechner: Adresse öffnen, **F** = Vollbild.
2. Pilot:innen scannen den QR-Code **ihres Teams** (Handy quer halten). Am Monitor erscheint „Handy verbunden ✓“.
3. Navigator:innen scannen den **mittleren QR-Code** (Karte), aufdecken erst bei „LOS!“.
4. „Los!“. Pause: Esc.

Reißt die Verbindung ab, bleibt die Figur nach wenigen Sekunden stehen und der Monitor meldet „Handy getrennt“. QR-Code neu scannen genügt. Nach Neuladen der Seite am Rechner ändert sich der Code, dann neu scannen.

## Datenschutz in Kürze
- Keine Konten, Namen oder Gerätekennungen. Teamnamen bleiben im Browser des Aula-Rechners.
- Übertragen werden nur: Richtung, Zeitstempel („Zauber“, „Handy lebt“), Spielstand, Zauber-Symbol, Sieger (0/1).
- Zufälliger Raumcode (5 Zeichen) pro Sitzung, wird beim Schließen der Seite gelöscht. Reste: in Firebase unter „Daten“ den Eintrag `blindflug` löschen.
- Daten liegen bei Google (Firebase, EU). Mit der/dem Datenschutzbeauftragten abstimmen.

## Fehlersuche
- **Feld „Adresse eintragen“ bleibt sichtbar** → Adresse wurde nicht gespeichert (privater Modus?) oder ist falsch.
- **Handy: „Warte auf den Monitor“** → Seite am Rechner neu laden, QR neu scannen; Regeln veröffentlicht?
- **Verbunden, aber keine Bewegung** → Regeln (A3) prüfen; Adresse ohne `/` am Ende.
- **Schulnetz** → `*.firebasedatabase.app` muss erreichbar sein; Handys im Mobilfunknetz gehen auch.

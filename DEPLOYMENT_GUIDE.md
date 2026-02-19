# 🚀 DEPLOYMENT GUIDE
## BAFA FAQ Landing Page auf Netlify deployen

---

## ⚡ QUICK START (5 Minuten)

### 1️⃣ Repository auf GitHub erstellen

```bash
cd bafa-faq-landing

# Git initialisieren
git init
git add .
git commit -m "Initial commit: BAFA FAQ Landing Page"

# GitHub Repository erstellen (via GitHub Website oder gh CLI)
# Dann remote hinzufügen:
git remote add origin https://github.com/DEIN-USERNAME/bafa-faq-landing.git
git branch -M main
git push -u origin main
```

---

### 2️⃣ Netlify Deployment

#### Option A: Via Netlify Dashboard (Einfachste Methode)

1. Gehe zu [app.netlify.com](https://app.netlify.com)
2. Klicke "Add new site" → "Import an existing project"
3. Wähle "GitHub" als Source
4. Autorisiere Netlify für dein GitHub Account
5. Wähle Repository: `bafa-faq-landing`
6. Build Settings werden automatisch erkannt (aus `netlify.toml`):
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
7. Klicke "Deploy site"
8. ✅ **Fertig!** Site ist live in 2-3 Minuten

#### Option B: Via Netlify CLI

```bash
# Netlify CLI installieren
npm install -g netlify-cli

# Einloggen
netlify login

# Site erstellen und deployen
netlify init

# Bei Fragen:
# - Create new site? Yes
# - Team: Wähle dein Team
# - Site name: bafa-faq-landing (oder beliebig)
# - Build command: npm run build
# - Publish directory: dist

# Deployed automatisch!
```

---

### 3️⃣ Custom Domain einrichten

1. **In Netlify Dashboard:**
   - Gehe zu Site → Domain Settings
   - Klicke "Add custom domain"
   - Eingeben: `bafa-faq.qm-guru.de`
   - Klicke "Verify"

2. **Bei deinem Domain-Provider (z.B. Strato, 1&1, Netcup):**
   - Gehe zu DNS-Einstellungen für `qm-guru.de`
   - Füge CNAME Record hinzu:
     ```
     Name:   bafa-faq
     Type:   CNAME
     Value:  [deine-netlify-subdomain].netlify.app
     TTL:    3600 (oder Auto)
     ```
   - Beispiel:
     ```
     bafa-faq.qm-guru.de → bafa-faq-landing.netlify.app
     ```

3. **Warte auf DNS-Propagation:**
   - Kann 5 Minuten bis 24 Stunden dauern
   - Check mit: [dnschecker.org](https://dnschecker.org)

4. **SSL Zertifikat:**
   - Netlify erstellt automatisch Let's Encrypt SSL
   - Nach DNS-Propagation: "Verify DNS configuration" in Netlify
   - SSL aktiviert sich automatisch
   - ✅ HTTPS ready!

---

## 🔧 LOKALES TESTEN (vor Deployment)

```bash
# 1. Dependencies installieren
npm install

# 2. Dev Server starten
npm run dev
# Öffne: http://localhost:5173

# 3. Production Build testen
npm run build
npm run preview
# Öffne: http://localhost:4173

# 4. Lighthouse Score checken
# Chrome DevTools → Lighthouse → Generate Report
# Target: 95+ in allen Kategorien
```

---

## ✅ DEPLOYMENT CHECKLIST

### Vor dem Deployment:

- [ ] `npm install` läuft ohne Fehler
- [ ] `npm run build` erstellt `/dist` Ordner
- [ ] `npm run preview` zeigt Seite korrekt an
- [ ] Alle Links funktionieren (CTAs, Telefon, E-Mail)
- [ ] Mobile Ansicht getestet (Chrome DevTools)
- [ ] Lighthouse Score 95+ (Performance, SEO, Accessibility)

### Nach dem Deployment:

- [ ] Site ist live unter `[name].netlify.app`
- [ ] Alle 30 FAQs öffnen/schließen
- [ ] Search funktioniert
- [ ] Deep Links funktionieren (`#faq-XX`)
- [ ] CTAs leiten korrekt weiter
- [ ] Alle Bilder/Icons laden
- [ ] Custom Domain funktioniert (bafa-faq.qm-guru.de)
- [ ] HTTPS ist aktiv (grünes Schloss)
- [ ] Google Search Console URL submitten

---

## 🎯 POST-DEPLOYMENT TASKS

### 1. Google Search Console

1. Gehe zu [search.google.com/search-console](https://search.google.com/search-console)
2. "Property hinzufügen" → Domain: `bafa-faq.qm-guru.de`
3. Verifizieren (DNS TXT Record)
4. URL-Prüfung: `https://bafa-faq.qm-guru.de`
5. "Indexierung beantragen"

### 2. Schema Markup validieren

1. Gehe zu [validator.schema.org](https://validator.schema.org)
2. "Fetch URL" → `https://bafa-faq.qm-guru.de`
3. Check: FAQPage Schema erkannt? ✅
4. Keine Errors? ✅

### 3. Rich Results Test

1. Gehe zu [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
2. URL eingeben: `https://bafa-faq.qm-guru.de`
3. Test run
4. Erwartung: "FAQ Schema detected" ✅

### 4. PageSpeed Insights

1. Gehe zu [pagespeed.web.dev](https://pagespeed.web.dev)
2. URL eingeben: `https://bafa-faq.qm-guru.de`
3. Analyze
4. Target Scores:
   - Mobile: 90+
   - Desktop: 95+

### 5. Analytics aktivieren

**Google Analytics 4:**

1. GA4 Property erstellen für `bafa-faq.qm-guru.de`
2. Tracking ID kopieren: `G-XXXXXXXXXX`
3. In `index.html` einfügen (siehe README)
4. Git commit & push
5. Netlify deployed automatisch
6. Teste: GA4 Real-Time Report zeigt Traffic

### 6. Social Media teilen

- [ ] LinkedIn Post mit Link
- [ ] Auf qm-guru.de Hauptseite verlinken
- [ ] E-Mail Signatur aktualisieren
- [ ] Google My Business Post

---

## 🔄 CONTINUOUS DEPLOYMENT

**Automatisches Deployment bei jedem Push:**

```bash
# Content ändern in /src/data/faqData.js
# Speichern

git add .
git commit -m "Update: FAQ Antwort präzisiert"
git push

# Netlify detected push → Build startet automatisch
# 2-3 Minuten später: Changes sind live! ✅
```

**Preview Branches:**
- Jeder Pull Request bekommt automatisch Preview URL
- Perfekt für Testing vor Merge

---

## 🐛 TROUBLESHOOTING

### Build Failed auf Netlify

**Error: "vite: not found"**
```bash
# Fix: netlify.toml prüfen
[build]
  command = "npm install && npm run build"  # npm install muss VOR build!
```

**Error: "terser not found"**
```bash
# Fix: vite.config.js prüfen
build: {
  minify: 'esbuild'  // NICHT 'terser'!
}
```

### Site lädt nicht

1. Check Netlify Deploy Log (letzter Build erfolgreich?)
2. Check DNS Settings (CNAME korrekt?)
3. Check SSL Status (aktiviert?)
4. Clear Browser Cache
5. Check in Incognito Mode

### Schema Markup nicht erkannt

1. Warte 24-48h nach Launch
2. Google Search Console: "URL-Prüfung" → "Indexierung beantragen"
3. Rich Results Test nochmal durchführen
4. View Page Source → `<script type="application/ld+json">` vorhanden?

---

## 📞 SUPPORT

**Netlify Support:**
- Docs: [docs.netlify.com](https://docs.netlify.com)
- Community: [answers.netlify.com](https://answers.netlify.com)

**Developer Support:**
- E-Mail: holger.grosser@qm-guru.de
- Tel: 0911-49522541

---

## 🎉 SUCCESS!

Deine BAFA FAQ Landing Page ist jetzt live! 🚀

**Nächste Schritte:**
1. Social Media Kampagne starten
2. Backlinks aufbauen
3. Weekly Analytics checken
4. Kontinuierlich FAQs erweitern based on User Feedback

**Happy Deploying! 💙**

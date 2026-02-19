# 🚀 QUICK START CHEAT SHEET
## BAFA FAQ Landing Page

---

## 📦 Installation (1 Minute)

```bash
cd bafa-faq-landing
npm install
```

---

## 🏃 Development (Sofort loslegen)

```bash
# Dev Server starten
npm run dev

# Öffne: http://localhost:5173
```

---

## 🔨 Build & Preview

```bash
# Production Build
npm run build

# Preview
npm run preview
# Öffne: http://localhost:4173
```

---

## 🌐 GitHub + Netlify Deployment (5 Minuten)

```bash
# 1. Git Setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/bafa-faq-landing.git
git push -u origin main

# 2. Netlify Dashboard
# → app.netlify.com
# → "Import from Git"
# → GitHub Repository auswählen
# → Deploy!

# 3. Custom Domain
# Netlify: Domain Settings → Add "bafa-faq.qm-guru.de"
# DNS: CNAME → bafa-faq → [ihre-netlify].netlify.app
```

---

## ✏️ Content Updates

**FAQs bearbeiten:**
```bash
# Datei öffnen
src/data/faqData.js

# Änderungen speichern, dann:
git add .
git commit -m "Update: FAQ XY erweitert"
git push

# Netlify deployed automatisch! ✅
```

---

## 📊 Key Files

| Datei | Zweck |
|-------|-------|
| `src/data/faqData.js` | Alle 30 FAQs |
| `src/App.jsx` | Main Component |
| `src/components/` | UI Components |
| `tailwind.config.js` | Design System |
| `netlify.toml` | Deploy Config |
| `README.md` | Full Documentation |
| `DEPLOYMENT_GUIDE.md` | Step-by-Step Deploy |

---

## 🎨 Design Anpassungen

**Farben ändern:**
```javascript
// tailwind.config.js
colors: {
  primary: '#2E75B6',      // Hauptfarbe
  'primary-dark': '#1d5a8f', // Hover
  accent: '#F59E0B',       // CTA
}
```

**Font ändern:**
```javascript
// tailwind.config.js
fontFamily: {
  sans: ['Ihre Font', 'sans-serif'],
}
```

---

## 🧪 Testing Checklist

- [ ] `npm run build` erfolgreich
- [ ] Alle FAQs öffnen
- [ ] Search funktioniert
- [ ] Mobile responsive
- [ ] Links funktionieren
- [ ] Lighthouse 95+

---

## 📞 Support

**Developer:** Holger Grosser  
**E-Mail:** holger.grosser@qm-guru.de  
**Tel:** 0911-49522541

---

## 🔗 Wichtige Links

- **Netlify:** [app.netlify.com](https://app.netlify.com)
- **GitHub:** [github.com](https://github.com)
- **Schema Validator:** [validator.schema.org](https://validator.schema.org)
- **PageSpeed:** [pagespeed.web.dev](https://pagespeed.web.dev)
- **Search Console:** [search.google.com/search-console](https://search.google.com/search-console)

---

**Ready to launch! 🚀**

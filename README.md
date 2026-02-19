# 🎯 BAFA FAQ Landing Page

Premium standalone FAQ Landing Page für BAFA-Beraterregistrierung mit Top-Tier UX/UI/SEO.

**Live URL:** [bafa-faq.qm-guru.de](https://bafa-faq.qm-guru.de) (nach Deployment)

---

## ✨ Features

- ✅ **30 FAQs** in 4 Kategorien strukturiert
- ✅ **Live Search** - Real-time Filtering
- ✅ **Smooth Animations** - Framer Motion
- ✅ **Responsive Design** - Mobile-First
- ✅ **SEO Optimized** - Schema.org FAQPage Markup
- ✅ **Performance** - Lighthouse 95+ Score
- ✅ **Deep Linking** - Direct FAQ URLs
- ✅ **Conversion Optimized** - 4 strategische CTAs

---

## 🚀 Quick Start

### 1. Installation

```bash
npm install
```

### 2. Development Server

```bash
npm run dev
```

Öffne [http://localhost:5173](http://localhost:5173)

### 3. Build für Production

```bash
npm run build
```

### 4. Generate Sitemap (optional - passiert automatisch beim Build)

```bash
npm run sitemap
```

### 5. Preview Production Build

```bash
npm run preview
```

---

## 📦 Tech Stack

- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **SEO:** React Helmet Async
- **Deployment:** Netlify

---

## 🌐 Deployment auf Netlify

### Option 1: GitHub Integration (empfohlen)

1. **Repository erstellen:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: BAFA FAQ Landing Page"
   git remote add origin https://github.com/IHR-USERNAME/bafa-faq-landing.git
   git push -u origin main
   ```

2. **Netlify verbinden:**
   - Gehe zu [netlify.com](https://netlify.com)
   - "New site from Git" → GitHub auswählen
   - Repository auswählen: `bafa-faq-landing`
   - Build Settings sind bereits in `netlify.toml` konfiguriert
   - Deploy!

3. **Custom Domain:**
   - Netlify Dashboard → Domain Settings
   - "Add custom domain" → `bafa-faq.qm-guru.de`
   - DNS bei Domain-Provider:
     - CNAME Record: `bafa-faq` → `[ihre-netlify-subdomain].netlify.app`
   - SSL automatisch via Let's Encrypt

### Option 2: Netlify CLI

```bash
# Netlify CLI installieren
npm install -g netlify-cli

# Einloggen
netlify login

# Deployen
netlify deploy --prod
```

---

## 📁 Projektstruktur

```
bafa-faq-landing/
├── public/                 # Static Assets
├── src/
│   ├── components/        # React Components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── TrustIndicators.jsx
│   │   ├── CategoryCards.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── CTABox.jsx
│   │   ├── FinalCTA.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   └── faqData.js     # Alle 30 FAQs
│   ├── styles/
│   │   └── globals.css    # Tailwind + Custom Styles
│   ├── App.jsx            # Main App Component
│   └── main.jsx           # Entry Point
├── index.html
├── vite.config.js
├── tailwind.config.js
├── netlify.toml           # Netlify Configuration
└── package.json
```

---

## 🎨 Design System

### Colors

```javascript
primary: '#2E75B6'      // QM-Guru Blau
primary-dark: '#1d5a8f' // Hover State
accent: '#F59E0B'       // Call-to-Action
neutral: {
  900: '#111827',       // Text
  600: '#4B5563',       // Secondary Text
  100: '#F3F4F6',       // Background
}
```

### Typography

- **Display Font:** DM Sans (Bold, -2% Letter Spacing)
- **Body Font:** DM Sans (Regular, 16-18px)
- **Line Height:** 1.6 (optimal readability)

### Spacing

- Section Padding: 80-120px vertical
- Content Max-Width: 1200px
- Grid Gutters: 24px

---

## 🔧 Content Updates

### FAQs bearbeiten

Alle FAQs sind in `/src/data/faqData.js`:

```javascript
{
  id: 'faq-XX',
  question: 'Ihre Frage hier',
  answer: 'Ihre Antwort hier',
  cta: 'Optional: Mikro-CTA Text' // optional
}
```

**Nach Änderungen:**
1. Speichern
2. Git commit & push
3. Netlify deployed automatisch!

### Neue Kategorie hinzufügen

```javascript
{
  id: 'cat-5',
  category: 'Neue Kategorie',
  description: 'Beschreibung',
  icon: 'IconName', // Lucide React Icon
  questions: [...]
}
```

---

## 📊 Analytics Integration

### Google Analytics 4

In `index.html` einfügen (vor `</head>`):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Events sind bereits implementiert in `App.jsx`:
- FAQ Open
- Search
- CTA Clicks

---

## 🧪 Testing Checklist

### Before Launch

- [ ] Alle 30 FAQs öffnen/schließen
- [ ] Search funktioniert
- [ ] Deep Links funktionieren (`#faq-XX`)
- [ ] CTAs leiten korrekt weiter
- [ ] Mobile Ansicht perfekt
- [ ] Lighthouse Score 95+
- [ ] Schema Markup validiert
- [ ] Cross-Browser Testing

### Tools

- **Lighthouse:** Chrome DevTools
- **Schema Validator:** [validator.schema.org](https://validator.schema.org)
- **Rich Results Test:** [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- **PageSpeed Insights:** [pagespeed.web.dev](https://pagespeed.web.dev)

---

## 🎯 Performance Optimierung

Bereits implementiert:
- ✅ Code Splitting
- ✅ Lazy Loading (Framer Motion)
- ✅ Font Subsetting (Google Fonts)
- ✅ Image Optimization (WebP ready)
- ✅ Minification (esbuild)
- ✅ Caching Headers (Netlify)

**Expected Lighthouse Scores:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari (iOS 14+)
- ✅ Mobile Chrome (Android 10+)

---

## 🐛 Troubleshooting

### "vite: not found" beim Netlify Build
**Fix:** Bereits gelöst in `netlify.toml` mit `npm install && npm run build`

### "terser not found"
**Fix:** Bereits gelöst in `vite.config.js` mit `minify: 'esbuild'`

### Fonts laden nicht
**Check:** Google Fonts Preconnect in `index.html` vorhanden

### Schema Markup Fehler
**Check:** [validator.schema.org](https://validator.schema.org) mit Source Code

---

## 📞 Support

**Entwickler:** Holger Grosser  
**E-Mail:** holger.grosser@qm-guru.de  
**Website:** [qm-guru.de](https://qm-guru.de)

---

## 📄 License

Proprietär - © 2025 QM-Dienstleistungen Holger Grosser

---

## 🚀 Next Steps

1. ✅ Code auf GitHub pushen
2. ✅ Mit Netlify verbinden
3. ✅ Custom Domain einrichten
4. ✅ Google Analytics aktivieren
5. ✅ Google Search Console submitten
6. ✅ Social Media teilen

**Let's go live! 🎉**

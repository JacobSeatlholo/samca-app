# SAMCA Annual Summit 2026

Landing page for the South African Mining Committees Association Annual Summit 2026.

Built with **Vite + React**. No backend required — deploys as a static site.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Deploy to Vercel

### Option A — GitHub (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects **Vite** — no config needed
5. Click **Deploy**

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Done.

---

## Project Structure

```
samca-summit/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── FadeIn.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── MohalePillar.jsx
        ├── TripleTheme.jsx
        ├── ESGHub.jsx
        ├── Speakers.jsx
        ├── Registration.jsx
        └── Footer.jsx
```

---

## Tech Stack

- [Vite](https://vitejs.dev/) — build tool
- [React 18](https://react.dev/) — UI
- [Lucide React](https://lucide.dev/) — icons
- Google Fonts — Libre Baskerville + Lato

## Vercel Settings (auto-detected)

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `vite build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

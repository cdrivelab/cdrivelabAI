# C-DriveLab Website

Bhubaneswar, Odisha-based AI consultancy website — "Real Intelligence for
Real Business."

**Static site only.** No backend, no server-side dependency — React +
Vite builds this down to plain HTML/CSS/JS that can be hosted anywhere
(Netlify, Vercel, GitHub Pages, S3, cPanel static hosting, etc.).

## Structure

```
Cdrivelab/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/                 Images, fonts
│   ├── components/
│   │   ├── layout/              Header, Footer
│   │   ├── common/               Reusable UI (RadialMark, and future primitives)
│   │   └── sections/home/        Home-page sections (Hero, Services, Philosophy, Process, CtaBand)
│   ├── pages/
│   │   └── Home.jsx               Composes the Home page from its sections
│   ├── styles/
│   │   ├── base/                  Reset, design tokens, typography, global rules
│   │   └── pages/                  Header/Footer/Home stylesheets
│   ├── data/
│   │   └── siteConfig.js           Nav links, footer links, contact info
│   ├── App.jsx                     Route table
│   └── main.jsx                     Entry point
├── index.html
├── vite.config.js
└── package.json
```

## Design

- **Palette** — warm charcoal-basalt background (`#14120F`), stone-white
  text, a laterite/brick accent (`#C1552E`) — grounded in Bhubaneswar's
  temple architecture rather than a generic tech gradient.
- **Signature mark** — a line-art radial instrument dial in the hero,
  blending a precision gauge with the carved stone wheel motif associated
  with the Konark Sun Temple.
- **Type** — Space Grotesk (display), Inter (body), IBM Plex Mono (data,
  eyebrows, numbers).

## Getting started

```
npm install
npm run dev       # local dev server
npm run build     # outputs static files to /dist
npm run preview   # preview the production build locally
```

## Status

Home Page is built. Structure is ready for additional pages later —
follow the same pattern as `src/pages/Home.jsx`: a page composed of
section components under `src/components/sections/<page-name>/`.

# C-DriveLab Website

Bhubaneswar, Odisha-based AI consultancy website — "Real Intelligence for
Real Business."

**Static site only.** No backend, no server-side dependency — React +
Vite builds this down to plain HTML/CSS/JS that can be hosted anywhere
(Netlify, Vercel, GitHub Pages, S3, cPanel static hosting, etc.).

## Getting started

```
npm install
npm run dev       # local dev server on :5173
npm run build     # static output in /dist
npm run preview   # serve the production build locally
npm run lint
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero + bento, services, process, stats, testimonials, blog, FAQ |
| `/about` | About — intro, approach, core features, analysis, team, FAQ |
| `/services` | All ten services, filterable by journey stage |
| `/services/:slug` | Service detail (driven by `src/data/services.js`) |
| `/products` | Products — ScrumPilot, Available24, other products |
| `/products/scrumpilot` | ScrumPilot detail |
| `/products/available24` | Available24 detail |
| `/contact` | Contact form |
| `/privacy-policy` | Privacy policy |

## Structure

```
public/              favicons, og-image, site.webmanifest, _redirects
src/
  components/
    layout/          Header, Footer
    common/          Shared UI (ActionLink, CtaBand, IconCard, PageHero, …)
    products/        Products page sections + product visuals
    services/        Services grid, filters, mega menu
    sections/home/   Home page sections
    sections/about/  About page sections
  data/              siteConfig.js, services.js, products.js — all copy
  hooks/             useReveal, useCounter, useTilt
  pages/             One file per route (+ its stylesheet)
  styles/base/       reset, tokens, typography, global
```

**All copy lives in `src/data/`.** Components read from it; edit text there
rather than in JSX.

## Conventions worth knowing

- **`useReveal(delay, className)`** — scroll-reveal. Pass the element's own
  classes as the second argument and spread the result; do **not** write a
  separate `className` prop, because the spread would overwrite it:

  ```jsx
  const head = useReveal(0, "section-head");
  <div {...head}>…</div>
  ```

  The reveal animates `translate`, not `transform`, so an element can still
  carry its own `:hover` transform without the two rules colliding.

- **Vite bundles every stylesheet into one global sheet.** Page-level CSS is
  not scoped — prefix new class names (the Products page uses
  `products-` / `product-` / `sp-` / `a24-`) to avoid collisions.

- **Internal links** go through `<Link>` or `ActionLink`, never a plain
  `<a href="/…">` — that would full-reload the SPA.

## Contact form

**This needs one piece of setup before it collects anything.** A static site
has no server, so it cannot send email on its own — the form has to POST to a
form service.

Until `siteConfig.contactEndpoint` is set, the form validates, then falls back
to opening the visitor's mail client and showing the composed message with a
copy button. That is a stopgap so nobody hits a dead button — **enquiries are
not recorded anywhere.**

To switch it on, edit `src/data/siteConfig.js`:

```js
// Web3Forms — no account needed, they email you an access key
contactEndpoint: "https://api.web3forms.com/submit",
contactEndpointFields: { access_key: "YOUR-ACCESS-KEY" },

// or Formspree — free tier 50/month
contactEndpoint: "https://formspree.io/f/YOUR-FORM-ID",
contactEndpointFields: {},
```

Either accepts a JSON POST of `{ name, email, company, topic, message }` and
forwards it to the address you register. No other code changes are needed —
the form switches to real send / success / error states automatically.

## Deployment

`npm run build` outputs `/dist`. `public/_redirects` rewrites all paths to
`index.html` so client-side routes survive a refresh or a direct link —
that file is Netlify's format; other hosts need their own SPA-fallback rule.

## Known gaps

- Testimonials, team members, partner logos and headline stats are still
  placeholder content and should be replaced with real material before launch.
- The footer newsletter input is not wired to anything.
- Blog posts are static cards with no article pages behind them.

# tinkerbox-labs.co.uk

Static marketing site for **Tinkerbox Labs Ltd** (Company No. 17180233, registered in England and Wales). Hosted on GitHub Pages at `tinkerbox-labs.co.uk`.

## Stack

- React 19 + Vite 8 + TypeScript 6
- Tailwind v4 (CSS-first config — design tokens live in `@theme {}` inside `src/index.css`)
- Plain CSS for the gradient blob, viewport frame, and hover animations (Tailwind doesn't express multi-stop radial gradients or mask-composite cleanly)

## Local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output → dist/
npm run preview  # preview the production build
```

## Deploy

`.github/workflows/deploy.yml` builds on every push to `main` and deploys `dist/` to GitHub Pages via `actions/deploy-pages@v4`.

In the repo's **Settings → Pages**, set **Source: GitHub Actions** (one-time switch from the previous "Deploy from a branch" setting).

DNS at the registrar (Squarespace) is unchanged:

- Apex `A` → `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`
- `CNAME www` → `jess-b-tkbl.github.io`
- The committed `public/CNAME` keeps `tinkerbox-labs.co.uk` as the custom domain.

## Layout

```
src/
├── main.tsx
├── App.tsx                     ← composition root
├── index.css                   ← @theme tokens + custom CSS (blob, frame, animations)
└── components/
    ├── Header.tsx              ← sticky + sliding nav indicator
    ├── Hero.tsx                ← serif h1, lead, pill, animated blob
    ├── About.tsx               ← services list as data
    ├── Contact.tsx
    └── Footer.tsx
public/
├── CNAME, .nojekyll, robots.txt, sitemap.xml
└── legal.html, privacy.html, 404.html   ← compliance pages, served as-is
```

## Compliance notes

UK trading-disclosure rules satisfied as per the previous static build:

- **Companies Act 2006 (s.82)** + **Companies (Trading Disclosures) Regulations 2008** — registered name, company number, place of registration in the footer of every page; full registered office on `legal.html`.
- **UK GDPR / Data Protection Act 2018** — `privacy.html` covers controller, scope (no analytics, no cookies, only inbound email + GH Pages server logs), lawful basis, retention, processors, transfers, ICO route.
- **PECR (cookies)** — site sets no cookies and uses no analytics, so no cookie banner.

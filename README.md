# Teel Family Foundation – React Draft

A Vite + React implementation of the approved homepage mockup.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build output is `dist/`, which is deployed to Cloudflare as a Worker with
static assets, configured in `wrangler.jsonc`.

### Cloudflare build settings

- Build command: `npm run build`
- Build output directory: `dist`

## Main places to edit

- `src/App.jsx` — routes and shared page chrome
- `src/pages/*` — `Home` (the one-page composition) and `MissionPage` (`/mission`)
- `src/components/*` — homepage sections and shared pieces
- `src/styles.css` — all layout and visual styling
- `src/data/grants.js` — grant data and totals
- `public/assets/` — logo, hero image, hands graphic, and grantee logos

## Routing

Routes are client-side (`react-router-dom`), so the host has to serve
`index.html` for unknown paths or a direct visit to `/mission` will 404.
`wrangler.jsonc` does this via `not_found_handling: "single-page-application"`.

Do not add a `public/_redirects` file with `/* /index.html 200`. Cloudflare
strips `.html` from asset URLs, so that rule rewrites `/mission` to
`/index.html`, which becomes `/index`, which matches `/*` again — the deploy
fails with `Infinite loop detected [code: 100324]`.

Links to homepage sections go through `src/components/HashLink.jsx`, which points
them at `/#section` so they work from any route; `ScrollToTop` performs the
scroll after the route lands.

## Notes

- The current email, phone, and legal links are placeholders.
- The 2026 grants are populated from the information supplied for the mockup.
- Per-grantee grant amounts are intentionally not stored in this repo; only the published all-time total is.

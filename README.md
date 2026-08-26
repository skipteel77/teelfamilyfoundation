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

The build output is `dist/`, which can be deployed to Cloudflare Pages.

### Cloudflare Pages settings

- Framework preset: **Vite**
- Build command: `npm run build`
- Build output directory: `dist`

## Main places to edit

- `src/App.jsx` — page composition
- `src/components/*` — homepage sections
- `src/styles.css` — all layout and visual styling
- `src/data/grants.js` — grant data and totals
- `public/assets/` — logo, hero image, hands graphic, and grantee logos

## Notes

- The current email, phone, social links, and legal links are placeholders.
- The 2026 grants are populated from the information supplied for the mockup.
- Per-grantee grant amounts are intentionally not stored in this repo; only the published fiscal-year total is.

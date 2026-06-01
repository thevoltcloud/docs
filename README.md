# Volt Docs

Source for [docs.volt.cloud](https://docs.volt.cloud), built with
[Fumadocs](https://fumadocs.dev) (Next.js + MDX) and TailArk Pro blocks on the landing page.

## Structure

| Path | What |
|---|---|
| [content/docs/](content/docs/) | All documentation pages (MDX) + `meta.json` navigation |
| [content/docs/getting-started/](content/docs/getting-started/) | Quickstart, authentication, first request |
| [content/docs/concepts/](content/docs/concepts/) | Sovereignty, tiers & catalogs, zero egress |
| [content/docs/cookbook/](content/docs/cookbook/) | Recipes per language (Python today; TS/Go as SDKs ship) |
| [content/docs/operations/](content/docs/operations/) | Customer-facing incident guidance |
| [content/docs/api-reference/](content/docs/api-reference/) | API reference overview |
| [public/openapi.yaml](public/openapi.yaml) | OpenAPI spec — synced from `thevoltcloud/volt` |
| [app/(home)/](app/) | Marketing landing (TailArk Pro blocks) |
| [lib/layout.shared.tsx](lib/layout.shared.tsx) | Nav, branding, links |
| [app/global.css](app/global.css) | Fumadocs theme + Volt brand + TailArk Pro tokens |

## Develop

```bash
npm install
npm run dev          # Fumadocs dev — live preview at localhost:3000
npm run build        # production build
npm run types:check  # fumadocs-mdx + tsc
```

TailArk Pro blocks are vendored under `components/` (no key needed to build). To add or
update Pro blocks, set `TAILARK_API_KEY` in `.env.local` and run
`npx shadcn@latest add @tailark-pro/<name>`.

## Content sources

- **API reference** is generated from the OpenAPI spec; the canonical copy lives in
  `thevoltcloud/volt` and is synced to `public/openapi.yaml`.
- **Cookbook** recipes mirror the SDK example folders (e.g. `thevoltcloud/sdk-python/examples`).

Keep prices, tiers, and catalog facts in sync with the product. Contributing +
conventions: [thevoltcloud/handbook](https://github.com/thevoltcloud/handbook).

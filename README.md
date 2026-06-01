# Volt Docs

Source for [docs.volt.cloud](https://docs.volt.cloud), built with
[Mintlify](https://mintlify.com). Public, Apache-2.0.

## Structure

| Path | What |
|---|---|
| [docs.json](docs.json) | Site config + navigation |
| [index.mdx](index.mdx) | Home |
| [getting-started/](getting-started/) | Quickstart, authentication, first request |
| [concepts/](concepts/) | Sovereignty, tiers & catalogs, zero egress |
| [cookbook/](cookbook/) | Recipes per language (Python today; TS/Go as SDKs ship) |
| [runbooks/](runbooks/) | Customer-facing incident guidance |
| [api-reference/openapi.yaml](api-reference/openapi.yaml) | OpenAPI spec — synced from `thevoltcloud/volt`; the reference is generated from it |

## Develop

```bash
npm install
npm run dev          # mintlify dev — live preview at localhost:3000
npm run check-links  # mintlify broken-links
```

## Content sources

- **API reference** is generated from the OpenAPI spec; the canonical copy lives in
  `thevoltcloud/volt/api/openapi/volt-api.yaml` and is synced here.
- **Cookbook** recipes mirror the SDK example folders (e.g. `thevoltcloud/sdk-python/examples`).

Keep prices, tiers, and catalog facts in sync with the product. Contributing +
conventions: [thevoltcloud/handbook](https://github.com/thevoltcloud/handbook).

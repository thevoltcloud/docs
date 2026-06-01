# Changelog

Source for [docs.voltcloud.ai](https://docs.voltcloud.ai). Auto-generated from
[Conventional Commits](https://www.conventionalcommits.org/).

## [Unreleased]

### Changed
- Migrated the docs site from Mintlify to **Fumadocs** (Next.js + MDX). All pages moved
  under `content/docs/`; navigation is now `meta.json`-driven. Mintlify components
  (`CardGroup`, `Note`, `Warning`, `CodeGroup`) converted to Fumadocs equivalents
  (`Cards`, `Callout`, `Tabs`).
- Landing page (`app/(home)`) rebuilt with **TailArk Pro** blocks; theme matches the
  Volt marketing site (Volt-yellow accent, dark default).
- CI now typechecks + builds the Next.js app; OpenAPI spec lives at `public/openapi.yaml`.

### Added
- Mintlify site scaffold (`docs.json`): Guides + API reference tabs.
- Getting started: quickstart, authentication, first request.
- Concepts: sovereignty, tiers & catalogs, zero egress.
- Cookbook: Python (streaming, batch embeddings, sovereign isolation), TypeScript + Go quickstarts.
- Customer-facing incident runbook.
- API reference auto-generated from the OpenAPI spec (`api-reference/openapi.yaml`,
  synced from `thevoltcloud/volt`).
- CI: broken-link check + org reusable secret-scan.

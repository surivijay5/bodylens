# BodyLens

BodyLens is an open-source, local-first PWA for understanding personal body measurements over time. It helps people explore historical measurements they imported themselves. It is not a medical, fitness, or nutrition product.

## Design reference

The app follows the provided Stitch reference direction: dark graphite surfaces, restrained cyan accents, compact analytic cards, a fixed desktop sidebar, and mobile bottom navigation. The Stitch visual artifact was not present in the attached files available to this workspace, so this first pass follows the supplied visual specification. Replace this note with verified screenshots when the reference artifact is available.

## Architecture

`src/features` contains route-level UI; `src/application` owns use cases and pure calculations; `src/domain/cult` contains report detection, extraction contracts, source types and validation; `src/data/indexeddb` owns persistence. UI code does not access IndexedDB directly. The browser database is versioned and uses native IndexedDB, with `members`, `measurements`, `importHistory`, and `preferences` stores.

## Stack

Vite, React, strict TypeScript, Tailwind CSS, React Router, Recharts, PDF.js, Zod, native IndexedDB, Vitest, React Testing Library, Playwright, ESLint, Prettier, and vite-plugin-pwa.

## Privacy model

Measurement data is stored locally on this device. There is no backend, account, telemetry, analytics, or cloud sync. Browser storage behavior and device access remain under browser control; this is not an encrypted vault. PDF text extraction runs in the browser and the original file is not persisted.

## Supported source

The intended V1 source is Cult Smart Scale Pro PDF. The importer validates/extracts PDF text and detects Cult-branded reports. Parsing currently fails closed: verified Cult field mappings and import persistence are TODO pending a sanitized report fixture. No sample measurements are inserted automatically. The canonical sample described in the project brief must only be used through a clearly separated fixture/seed utility.

## Development

Requires a current Node.js LTS release and npm.

```sh
npm install
npm run dev
```

## Validation and production

```sh
npm run typecheck
npm run lint
npm test
npm run e2e
npm run build
npm run preview
```

Deploy the generated `dist/` directory to any static host with SPA fallback to `index.html`. No server-side API is required.

## V1 scope and limitations

Routes exist for Dashboard, History, Trends, Compare, Import, Settings and measurement detail. The local data path, report ingestion, editing/deletion, member switching, deterministic backup/restore, JSON export, dashboard preferences and complete comparison controls remain in progress. Current screens show empty states when no stored measurements exist; they never mix mock values into production UI.

V2 candidates, subject to project direction, include additional report formats and richer exports. OCR, AI, medical interpretation, cloud sync, accounts, goals, and health recommendations are explicitly out of scope.

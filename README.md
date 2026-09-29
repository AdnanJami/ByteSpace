# ByteSpace

Frontend for ByteSpace, an online course marketplace where learners browse and search courses and creators publish them.

Built with Next.js (App Router), React, TypeScript and Tailwind CSS.

## Getting started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

The app ships with mock API route handlers under `src/app/api/`. To point it at a real backend, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_URL`.

## Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript check |
| `pnpm test` | Unit and component tests (Vitest + Testing Library) |

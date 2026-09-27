# Harrison Dempsey Portfolio

A personal portfolio built with Next.js and exported as a static site for GitHub Pages.

## Local preview

From this directory:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. Run `pnpm build` to verify the GitHub Pages export in `out/`.

## Publishing

The workflow in `../.github/workflows/static_action_for_v2.yml` builds `blog/` and publishes `blog/out` when changes reach `main`. The GitHub Pages URL is https://hddempsey.github.io.

Portfolio entries are intentionally marked “Coming soon” until real case studies are ready. Update `app/page.tsx` when they are available.

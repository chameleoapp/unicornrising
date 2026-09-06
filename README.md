# train_your_unicorn

Personal site built with [Astro](https://astro.build).

## Edit content locally

Content is edited with [Keystatic](https://keystatic.com) in **local mode**. The admin UI is available only while the dev server is running — it is **not** included in production builds.

1. Start the site: `npm run dev`
2. Open [http://127.0.0.1:4321/keystatic](http://127.0.0.1:4321/keystatic) (or use **Edit site** in the footer)
3. Change text, blog posts, or events and save — files update under `src/content/`
4. Commit and deploy as usual

| What | Where |
| --- | --- |
| Homepage sections | `src/content/site/*.json` |
| Blog posts | `src/content/blog/*.mdoc` |
| Events | `src/content/events/*.json` |

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Local site + Keystatic editor |
| `npm run build` | Static production build (no editor) |
| `npm run preview` | Preview the production build |

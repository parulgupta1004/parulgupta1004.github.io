# Parul Gupta’s portfolio

Use Node.js 24 (`nvm use` if you use nvm), then install dependencies with `npm ci`.

Run `npm start` for local development. Run `npm run build` to create the production site in `build/`; Vite bundles the app and the postbuild script renders the complete page into HTML so its content and structured data are available before JavaScript runs.

Project download counts are dated snapshots from the PyPI Stats API. Run `npm run refresh:stats`, then `npm run build`, to update them. The refresh command uses the native Node.js fetch API and keeps the previous snapshot if a request fails. Visitors do not make live statistics requests.

Run `npm test` to check the archive, navigation, video playback, and statistics behavior.

The page composition lives in `src/containers/Main.jsx`. Projects, media, navigation, and event history live in `src/data/`; the existing profile settings remain in `src/portfolio.js`. Event descriptions are plain text and link segments, rendered without raw HTML.

Shared components in `src/components/` handle external links, section headings, disclosures, project cards, videos, and social post previews. `ExternalLink` owns new-tab behavior and arrow markers; use `showArrow={false}` for the greeting roles, event links, and footer profiles. Use `wrapLabel={false}` for rich previews. Navigation tracking and menu dismissal live in `src/hooks/`.

The `Refresh PyPI stats and deploy` GitHub Actions workflow runs daily at **08:17 UTC**, on source changes pushed to `master`, and on manual requests. It validates the counts, retains dated values for failed requests, tests and builds the site, commits only the updated stats snapshot, and publishes the generated `build/` artifact through GitHub Pages Actions.

To publish manually, push your source changes to `master`, or run `npm run deploy` with an authenticated GitHub CLI. The same workflow can be started from the repository’s Actions page. The legacy command that published generated files into `master` has been replaced with this workflow trigger.

Run `npm run test:stats` to check successful refreshes, zero counts, partial outages, malformed responses, and rate limits. Packages listed in `src/data/pypi-stats.json` are refreshed automatically by the script.

The build uses Vite, React 19, and Vitest. Use `npm run test:watch` while developing and `npm run preview` to inspect the production build. HTML metadata lives in the root `index.html`; static images and other public files live in `public/`. Production JavaScript includes source maps.

Run `npm run check:dependencies` to check the lockfile for deprecated packages. The deployment workflow runs this check before testing and building.

The build also generates `build/sitemap.xml` and `build/llms.txt` from current source data. Sitemap modification dates follow relevant Git history and uncommitted content edits; builds without Git history omit the date. The agent overview links to the full pre-rendered HTML archives. Its format is experimental and does not guarantee crawler adoption. Run `npm run test:seo` to verify these generators.

Structured data connects your profile, projects and recordings using stable IDs. Project repository URLs are verified against PyPI metadata; video upload dates are from the public YouTube pages. Keep titles, descriptions and video metadata in `src/data/media.js`, and repositories in `src/data/projects.js`. New videos need a verified ISO upload timestamp and a local thumbnail before publishing.

After deploying, use the verified Google Search Console property for `https://parulgupta1004.github.io/`: submit `sitemap.xml` under Sitemaps, then inspect the homepage using URL Inspection and Test Live URL. Google account access is required; the build cannot perform that account action.

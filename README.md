# Parul Gupta’s portfolio

Run `npm start` for local development. Run `npm run build` to create the production site in `build/`; the postbuild script renders the complete page into HTML so its content and structured data are available before JavaScript runs.

Project download counts are dated snapshots from the PyPI Stats API. Run `npm run refresh:stats`, then `npm run build`, to update them. The refresh command requires Node.js 18 or later and keeps the previous snapshot if a request fails. Visitors do not make live statistics requests.

Run `CI=true npm test -- --watch=false --runInBand` to check the archive, navigation, video playback, and statistics behavior.

The page composition lives in `src/containers/Main.js`. Projects, media, navigation, and event history live in `src/data/`; the existing profile settings remain in `src/portfolio.js`. Event descriptions are plain text and link segments, rendered without raw HTML.

Shared components in `src/components/` handle external links, section headings, disclosures, project cards, videos, and social post previews. `ExternalLink` owns new-tab behavior and arrow markers; use `showArrow={false}` for the greeting roles, event links, and footer profiles. Use `wrapLabel={false}` for rich previews. Navigation tracking and menu dismissal live in `src/hooks/`.

The `Refresh PyPI stats and deploy` GitHub Actions workflow runs daily at **08:17 UTC**, on source changes pushed to `master`, and on manual requests. It validates the counts, retains dated values for failed requests, tests and builds the site, commits only the updated stats snapshot, and publishes the generated `build/` artifact through GitHub Pages Actions.

To publish manually, push your source changes to `master`, or run `npm run deploy` with an authenticated GitHub CLI. The same workflow can be started from the repository’s Actions page. The legacy command that published generated files into `master` has been replaced with this workflow trigger.

Run `npm run test:stats` to check successful refreshes, zero counts, partial outages, malformed responses, and rate limits. Packages listed in `src/data/pypi-stats.json` are refreshed automatically by the script.

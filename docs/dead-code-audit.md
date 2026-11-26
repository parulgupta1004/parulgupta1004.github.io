# Dead-code audit

Audited the current portfolio from its application entry point, relative imports, stylesheets, rendered HTML, package scripts and deployment workflow. Files below are unreachable from the current site; they have been retained for review. Tests and build scripts are intentionally separate entry points, not dead application code.

## Dependency cleanup completed

Create React App and its deprecated transitive dependencies have been replaced with Vite and Vitest. React uses the current client root and hydration APIs. The site only needs React and React DOM at runtime. Unused Apollo, GraphQL, Axios, animation, emoji, router, social-embed, analytics-wrapper and legacy publishing packages were removed. Vite preview replaces the separate HTTP server package. The old service-worker registration path and separate Babel pre-rendering pipeline were removed.

The regenerated lockfile has no packages marked deprecated and `npm audit` reports no vulnerabilities. `npm run check:dependencies` checks deprecation metadata in the lockfile and also runs in the deployment workflow. It reflects the registry metadata captured when the lockfile was generated; later registry changes are picked up when dependencies are refreshed.

## Unused source files

The following 43 tracked files are not reached by the production application. `Profile.js` also imports components and a configuration export that no longer exist. These retired components are not built or served.

- `src/.Rhistory`
- `src/App.css`
- `src/assests/files/covid.pdf`
- `src/assests/fonts/Agustina.woff`
- `src/assests/fonts/Montserrat-Regular.ttf`
- `src/assests/images/arcesium.png`
- `src/assests/images/books.svg`
- `src/assests/images/brainpan.png`
- `src/assests/images/contactMail.png`
- `src/assests/images/covid.png`
- `src/assests/images/facebook.png`
- `src/assests/images/fairlearn.png`
- `src/assests/images/genes.png`
- `src/assests/images/girl.svg`
- `src/assests/images/meta_logo.png`
- `src/assests/images/neural.png`
- `src/assests/images/optum.png`
- `src/assests/images/senti.png`
- `src/assests/images/skills.svg`
- `src/assests/images/speaker2.png`
- `src/assests/images/woman.png`
- `src/assests/images/workex.svg`
- `src/assests/images/worldquant.png`
- `src/assests/parul_gupta_website.jpg`
- `src/components/blogCard/BlogCard.css`
- `src/components/blogCard/BlogCard.js`
- `src/components/button/Button.css`
- `src/components/button/Button.js`
- `src/components/socialMedia/SocialMedia.css`
- `src/components/socialMedia/SocialMedia.js`
- `src/components/softwareSkills/.Rhistory`
- `src/components/softwareSkills/SoftwareSkill.css`
- `src/components/softwareSkills/SoftwareSkill.js`
- `src/components/softwareSkills/SoftwareSkill1.js`
- `src/containers/.Rhistory`
- `src/containers/community/community.css`
- `src/containers/profile/Profile.js`
- `src/containers/projects/Projects.css`
- `src/containers/projects/Projects.js`
- `src/containers/talks/talks.css`
- `src/containers/topbutton/Top.css`
- `src/containers/topbutton/Top.js`
- `src/logo.svg`

## Unused configuration

In `src/portfolio.js`, the active page does not read the `greeting` fields `subTitle2`, `summary`, `paragraph_emp`, `paragraph`, `paragraph2_emp`, `paragraph2`, `paragraph3_emp` or `paragraph3`.

`acadSection`, `projectSection` and `blogSection` are referenced only by retired components. `Workex` has no consumer. The named `schema` export in `src/jsonld.jsx` has no external consumer; the object itself is actively rendered as structured data and should be retained.

## Static files and archive

`public/android-chrome.png` has no reference in the current HTML, manifest or application. `public/browserconfig.xml` is a legacy Windows tile configuration with a reference to the missing `/mstile-150x150.png`. It may be requested implicitly by older browsers; it is not a normal application dependency.

`old_website/` is an archived standalone site, separate from the current build. Its jQuery 1.10.2, Bootstrap 3.0.0 and Font Awesome 4.0.3 CDN links are obsolete. That HTML and those libraries are not shipped by the current website build. Preserve the archive if its history is useful, or remove it as a separate cleanup.

The sitemap, robots file, 404 page, favicon, touch icon, mask icon, portrait social-sharing image, and images under `public/images/` are used. Do not remove them merely because they have no JavaScript import.

## Scope of the audit

Reachability identifies whole unused files and unused configuration, not every unreachable branch inside a live function. Responsive and interaction styles were checked against the page and its navigation, video and disclosure behavior; selectors that appear only after an interaction are not treated as dead. Existing archives, content and assets have not been deleted as part of the dependency migration.

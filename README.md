# Himanshu Nainwal — Backend Developer Portfolio

A single-page portfolio site, styled as a backend engineer's API console — a live "request/response" hero terminal,
a dependency-style tech stack, a changelog-style experience timeline, and project cards with mini data-flow diagrams.

Plain **HTML + CSS + vanilla JS** — no build step, no framework, no `npm install`. That means it deploys to
GitHub Pages by just pushing the files.

## Project structure

```
portfolio/
├── index.html          # all page content/markup
├── css/
│   └── style.css       # design system + layout + responsive rules
├── js/
│   └── script.js        # content data, terminal typing effect, rendering, interactions
├── assets/
│   └── (put Himanshu_Nainwal_Resume.pdf here)
├── .gitignore
└── README.md
```

## 1. Before you deploy — quick edits

- **Resume file**: drop your PDF into `assets/` named exactly `Himanshu_Nainwal_Resume.pdf` (or change the
  `href` in the "Download résumé" button in `index.html`).
- **LinkedIn / GitHub links**: in `index.html`, search for `REPLACE-ME` (two occurrences, in the `#contact`
  section) and swap in your real profile URLs.
- **Content**: everything in Skills, Experience, and Projects is generated from the `DATA` object at the top
  of `js/script.js` — edit that object rather than the HTML if you want to change wording later.

## 2. Run it locally (optional, to preview before pushing)

You don't need a server, but browsers restrict some JS features on `file://`. Easiest fix — use any static
server, for example:

```bash
cd portfolio
python3 -m http.server 8080
# then open http://localhost:8080
```

## 3. Push to GitHub and deploy with GitHub Pages

```bash
cd portfolio

# 1. Initialize the repo
git init
git add .
git commit -m "Initial portfolio site"

# 2. Create a new repo on GitHub first (via github.com → New repository),
#    then connect it — replace YOUR-USERNAME and YOUR-REPO:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

Then turn on Pages:

1. On GitHub, open your repo → **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. Wait ~30–60 seconds, refresh the page — GitHub shows your live URL, typically:

```
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

If you want it at the shorter `https://YOUR-USERNAME.github.io/` root, name the GitHub repo exactly
`YOUR-USERNAME.github.io` and push the same files to its `main` branch.

## 4. Updating the site later

Any future edit just needs:

```bash
git add .
git commit -m "Update projects section"
git push
```

GitHub Pages redeploys automatically within about a minute.

## Notes on the design

- Tech icons are pulled from the open-source [devicon](https://devicon.dev) icon set via CDN — no local
  image files to manage. Entries without a matching devicon icon (JWT, xAPI, QuickBooks SDK, Selenium,
  Make.com) fall back to a small monogram chip automatically.
- Fonts (JetBrains Mono + IBM Plex Sans) load from Google Fonts via CDN link tags in `index.html`.
- Everything is responsive down to small mobile widths, keyboard-focus styles are visible, and animations
  respect `prefers-reduced-motion`.

# Ritika Soni — Portfolio

A single-page personal portfolio (Data Scientist & ML / LLM Engineer). Pure static site — HTML, CSS, vanilla JS. No build step.

## Files
- `index.html` — all content/sections
- `style.css` — theme, layout, light/dark
- `script.js` — theme toggle, tabs, scroll-spy, counters, reveal animations
- `assets/Ritika_Soni_Resume.pdf` — CV served by the "Download CV" button

## Run locally
```bash
python3 -m http.server 8000
# open http://localhost:8000
```
(Open over http, not the `file://` path — the reveal animations rely on JS.)

## Deploy to GitHub Pages (personal site)
1. Create a public repo named **`inosritika.github.io`**.
2. Push the contents of this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/inosritika/inosritika.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / root**.
4. Live at **https://inosritika.github.io** within a minute or two.

## Editing
- Update text directly in `index.html`. Sections are clearly commented.
- Replace `assets/Ritika_Soni_Resume.pdf` with a newer CV (keep the filename, or update the link in the About section).
- Colors live in the `:root` / `:root[data-theme="dark"]` blocks at the top of `style.css`.

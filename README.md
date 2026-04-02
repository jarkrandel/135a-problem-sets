# MAT 127A Problem Sets

This repository is intended to host the published PreTeXt HTML pages for MAT 127A problem sets and solutions.

## Structure

- `psetX` folders contain the problem set HTML outputs.
- `psetX-solutions` folders contain the solutions HTML outputs.
- `index.html` is a small landing page suitable for GitHub Pages.
- `.nojekyll` disables Jekyll processing so PreTeXt asset folders are served correctly.

## Updating From Local Builds

From this folder, run:

```powershell
powershell -ExecutionPolicy Bypass -File .\sync-from-local.ps1
```

That copies the latest built files from the local `127A\pset*\output` folders into this publishing repository.

## Publishing

After syncing:

```powershell
git add .
git commit -m "Update 127A problem sets"
git push
```

Then enable GitHub Pages from the `main` branch root in the repository settings.

# Engineering Notebook Portfolio v5

A mechanical-engineering portfolio designed as a graph-paper notebook.

## V5 visual updates

- Square engineering graph paper replaces horizontal ruled paper
- Decorative calculations and diagrams are confined to blank page margins
- Central titles and content no longer have drawings behind them
- Paper-hole circles were removed from the left binding
- The metal binding loops remain as a subtle notebook detail
- Handwritten annotations use a looser Windows handwriting font stack
- Tabs and all separate portfolio pages remain intact

## Pages

```text
/
work/
work/nasa/
work/blue-origin/
work/john-deere/
leadership/
coursework/
interests/
resume/
```

## Preview locally

```powershell
npm.cmd install
npm.cmd run dev
```

Then open:

```text
http://localhost:5173/
```

## Edit portfolio content

Most wording, dates, metrics, links, and lists are stored in:

```text
src/content/siteContent.js
```

## Edit visual styling

The notebook, graph paper, tabs, sticky notes, and typography are controlled in:

```text
src/styles/global.css
```

## GitHub Pages

This version includes:

```text
.github/workflows/deploy.yml
```

See `GITHUB_SETUP.md` for the upload, deployment, and browser-editing steps.

## Add a résumé

Place the PDF at:

```text
public/resume.pdf
```

Then set `resumeReady` to `true` in `src/content/siteContent.js`.

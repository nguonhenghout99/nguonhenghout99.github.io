# Nguonheng Hout · Personal Website

Personal academic portfolio of **Nguonheng Hout**, M.S. student in Computer Engineering at Ajou University (NiSE Lab), working on AI Software Engineering, AI Requirements Engineering and Knowledge Engineering.

🌐 **Live site:** https://nguonhenghout99.github.io

---

## Pages

| Page | What's on it |
|---|---|
| **About** | Short bio, research interests (Requirements Engineering, NLP, Neurosymbolic Reasoning, AI Software Systems) and news |
| **Publications** | Publications (coming soon) and projects & presentations |
| **CV** | Education, work experience, volunteer work, skills, honors & awards |
| **Contact** | Email, phone, office address and online profiles |

## Features

- **No build step:** plain HTML, CSS and JavaScript in separate files. No frameworks or dependencies.
- **Dark / light mode:** follows the visitor's device setting by default; the toggle in the top bar switches it and the choice is remembered.
- **Responsive:** works on desktop, tablet and phone.
- **Email menu:** clicking "Email" lets visitors open Gmail, open their own mail app, or copy the address.
- **Page navigation:** About, Publications, CV and Contact are separate views (`#about`, `#publications`, `#cv`, `#contact`), so each one can be linked directly.

## Tech

Plain HTML, CSS and JavaScript. Fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) and [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts. Layout inspired by the [AcademicPages](https://github.com/academicpages/academicpages.github.io) Jekyll theme.

## Repository structure

```
nguonhenghout99.github.io/
├── index.html          # page structure and all text content
├── css/
│   └── style.css       # colours, layout, dark mode, responsive rules
├── js/
│   └── script.js       # page navigation, dark/light toggle, email menu
├── assets/
│   ├── profile.jpg     # profile photo
│   └── favicon.svg     # browser tab icon
└── README.md           # this file
```

## Updating the site

All text content is in `index.html`; styling is in `css/style.css` and behaviour in `js/script.js`. Search `index.html` for these markers to find each part:

| To change | Search for |
|---|---|
| Name, title, location and links under the photo | `<aside class="side">` |
| About page (bio, research interests, news) | `data-view="about"` |
| Publications and projects | `data-view="publications"` |
| CV (education, experience, skills, awards) | `data-view="cv"` |
| Contact details | `data-view="contact"` |
| Colours (light and dark) | `--acc` and `--bg` at the top of `css/style.css` |

To add a **news item**, copy one `<li>` inside `<ul class="news">` and put the newest at the top.
To add a **publication**, replace the "No publications yet" paragraph with a list of your papers.
To change the **photo**, replace `assets/profile.jpg` with a new square image of the same name.

## Deploying with GitHub Pages

1. The repository must be named exactly **`nguonhenghout99.github.io`** and be public.
2. Commit and push all files and folders to the `main` branch:
   ```bash
   git add .
   git commit -m "Update personal website"
   git push origin main
   ```
3. In **Settings → Pages**, set the source to **Deploy from a branch → `main` / root** (only needed the first time).
4. The site is live at https://nguonhenghout99.github.io within a minute or two.

## Contact

- Email: houtnguonheng2300@gmail.com
- GitHub: [github.com/nguonhenghout99](https://github.com/nguonhenghout99)
- LinkedIn: [linkedin.com/in/hout-n-9b0b42105](https://www.linkedin.com/in/hout-n-9b0b42105/)

© 2026 Nguonheng Hout

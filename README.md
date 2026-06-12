# Samsec Studio — Portfolio

Personal portfolio website for **Samsec Studio** — Fullstack Website Developer & Python Developer, Lagos, Nigeria.

A fast, dependency-free static site (plain HTML, CSS and vanilla JavaScript). No build step required.

## Run it

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Add your profile photo

The About section automatically picks up your photo from `assets/img/profile.jpg`
(`.jpeg`, `.png` and `.webp` also work). Until the file exists, a monogram
placeholder is shown.

Easiest way: on GitHub, open the `assets/img` folder of this branch →
**Add file → Upload files** → upload your photo named `profile.jpg`.
A square image of at least 300×300px works best.

## Customise

| What | Where |
|------|-------|
| Typing words in the hero | `phrases` array at the top of `assets/js/main.js` |
| Name / email / location | About + Contact sections in `index.html` |
| Skills & percentages | `.skill` blocks in `index.html` |
| Portfolio projects | `.portfolio-item` articles in `index.html` — swap the placeholder `picsum.photos` images for screenshots of your real projects |
| Blog posts | `.blog-card` articles in `index.html` |
| Social links | Footer of `index.html` (currently `#` placeholders) |
| Hero background | `.hero` rule in `assets/css/style.css` |

## Sections

Home (typing hero) · About Me (profile + skills) · Portfolio (filterable grid) ·
What I Do (services) · Latest News (blog) · Contact (mailto form) · Footer

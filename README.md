# Be Positive HK

A static informational website for **Be Positive HK**, a student-led youth mental health initiative based in Hong Kong, founded in 2023 by Charlotte Yuen.

## Pages

| Page | Description |
|---|---|
| **Home** (`index.html`) | Hero section, about us, 2026–2027 highlights, awards & media coverage, latest video, Instagram link |
| **Meet Our Team** (`team.html`) | Full team roster with clickable cards (photo, name, role, affiliation) across 6 groups in a 2‑column grid; each member links to a dedicated profile page at `team/NAME.html` with a full bio |
| **Events & Interviews** (`events.html`) | Upcoming events, interview schedule, and YouTube video gallery |
| **General Posts** (`posts.html`) | Instagram Psychology Research Series schedule (15 weekly posts) |
| **Special Projects** (`projects.html`) | Annual programme breakdown: booths, summit, interview series, research |

## Tech Stack

- **HTML5** — semantic markup with ARIA accessibility
- **CSS3** — custom properties, responsive grid, loading animations
- **Vanilla JavaScript** — page loader, YouTube embed renderer
- **Google Fonts** — Lora (serif) + Source Sans 3 (sans-serif)
- No build tools, no framework, no backend

## Getting Started

Simply open any `.html` file in a browser, or serve the directory with any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

No build step required.

## Project Structure

```
├── index.html           # Home page
├── team.html            # Meet Our Team page
├── events.html          # Events & Interviews page
├── posts.html           # General Posts / Research Schedule page
├── projects.html        # Special Projects page
├── styles.css           # All site styles
├── loader.js            # Page loading screen script
├── videos.js            # YouTube video data
├── render-videos.js     # YouTube embed renderer
├── team/                # Individual profile pages (30 members)
├── images/
│   ├── be-positive-logo.jpeg
│   └── team/            # Team member photos (~26 images)
└── package.json         # Minimal (vestigial dependency only)
```

## Accessibility

The site uses semantic HTML, ARIA labels, a skip-link, `prefers-reduced-motion` support, and lazy-loaded images and iframes. Members without photos are shown initials‑based avatar placeholders.

## Live Site

The site is deployed at:
[https://producky-001.github.io/ProDucky-001.github.io-BePositiveHK/index.html](https://producky-001.github.io/ProDucky-001.github.io-BePositiveHK/index.html)

## Social Media

- **Instagram**: [@bepositive.hk\_](https://instagram.com/bepositive.hk_)
- **YouTube**: [@BePositiveHK](https://youtube.com/@BePositiveHK)
- **Email**: bepositivehk07@gmail.com

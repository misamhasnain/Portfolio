# Portfolio: Syed Misam Hasnain Rizvi

Frontend-only portfolio. React + Vite + Tailwind CSS + Three.js (React Three Fiber, Drei) + Framer Motion.
There is no backend. The contact form uses Formspree.

## Run

```powershell
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the build
```

## Where to edit your information (all in `src/data/`)

| File | What it holds |
|---|---|
| `profile.js` | Name, title, location, email, bio, photo and resume path |
| `socialLinks.js` | All social media URLs (empty `href` = hidden) |
| `projects.js` | Projects (empty fields = not shown) |
| `skills.js` | Skills by category |
| `education.js` | Education and training |
| `experience.js` | Experience (empty, section hidden) |
| `navLinks.js` | Navbar links |
| `siteConfig.js` | Section on/off flags, features, Formspree and avatar settings |

## Formspree (contact form)

1. Create a form at https://formspree.io and copy its endpoint (`https://formspree.io/f/xxxxxxxx`).
2. Copy `.env.example` to `.env` and set `VITE_FORMSPREE_ENDPOINT=your-endpoint`.
3. Restart `npm run dev`.

## Resume

Save your final PDF as `public/resume.pdf`, then set `features.resumeDownload: true` in `src/data/siteConfig.js`.

## 3D avatar

Save your own avatar as `public/models/avatar.glb`. Until then an abstract placeholder is used.

## Rules this project follows

- No invented information. Missing data stays empty.
- Every section and component has its own file. `App.jsx` only composes them.
- All 3D code lives in `src/components/three/`.

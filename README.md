# React Personal Portfolio

Modern, responsive portfolio website for **Hima Teja Vankayalapati** — Python Full Stack Developer (Django, DRF, React.js, MySQL).

**Live demo:** [personal-portfolio-black-pi.vercel.app](https://personal-portfolio-black-pi.vercel.app/)

**Repository:** [github.com/himateja27/React-Personal-Portfolio](https://github.com/himateja27/React-Personal-Portfolio)

---

## Features

- Multi-page layout: Home, About, Projects, Resume, Internship, Certifications
- Responsive design for mobile, tablet, and desktop
- Dark / light theme toggle
- Animated hero section with typing effect
- Project showcase with GitHub links
- Resume PDF download and preview
- GitHub contribution calendar on About page
- Contact form (mailto)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 17, React Router 6 |
| UI | React Bootstrap 5, Custom CSS |
| Effects | react-tsparticles, react-type-animation |
| Other | react-github-calendar, react-icons |

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) 16 or higher
- [npm](https://www.npmjs.com/) 8 or higher

### Steps

```bash
# Clone the repository
git clone https://github.com/himateja27/React-Personal-Portfolio.git
cd React-Personal-Portfolio

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

See `requirements.txt` for dependency reference and version notes.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run app in development mode |
| `npm run build` | Create production build in `build/` |
| `npm test` | Run tests |

---

## Project Structure

```
React-Personal-Portfolio/
├── public/
│   └── media/              # Profile photo & resume PDF
├── src/
│   ├── components/
│   │   ├── About/          # About page, skills, GitHub, contact
│   │   ├── Home/           # Hero & home about section
│   │   ├── Projects/       # Project cards
│   │   ├── Resume/         # Resume page
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── App.js              # Routes
│   └── style.css           # Global styles
├── package.json
├── requirements.txt
└── README.md
```

---

## Customization

Edit your information in these locations:

| Content | File(s) |
|---------|---------|
| Hero text & buttons | `src/components/Home/Home.js` |
| About section on home | `src/components/Home/Home2.js` |
| Full about page | `src/components/About/About.js` |
| Projects | `src/components/Projects/Projects.js` |
| Resume | `src/components/Resume/ResumeNew.js` |
| Profile image | `public/media/profile.jpg` |
| Resume PDF | `public/media/himateja-fullstack-dev.pdf` |
| Social links | `src/components/Navbar.js`, `src/components/Footer.js` |

---

## Deployment

Build for production:

```bash
npm run build
```

Deploy the `build` folder to [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or any static host.

---

## License

Fork and modify for your own portfolio. Credit appreciated if you use this as a template.

---

## Author

**Hima Teja Vankayalapati**

- GitHub: [@himateja27](https://github.com/himateja27)
- LinkedIn: [himateja27](https://www.linkedin.com/in/himateja27/)
- Email: himatejahima032@gmail.com

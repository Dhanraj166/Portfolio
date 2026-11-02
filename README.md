# Dhanraj S — Developer Portfolio

A modern, high-performance, editorial portfolio website built for a **Java Full Stack Developer**. Features an elegant warm-cream aesthetic, centered portrait hero with oversized typography, interactive project showcase, animated stats, skills breakdown, education timeline, and smooth micro-interactions.

---

# Live - [https://dhanraj-portfolio-ten.vercel.app/](https://dhanraj-portfolio-ten.vercel.app/)

---

## Preview & Highlights

- **Hero Section**: Centered portrait with feathered fade, oversized *"Hey, there"* editorial typography, availability status badge, and bold condensed name & title blocks.
- **Continuous Tech Marquee**: Seamless horizontal ticker showing core technologies.
- **About Me**: Narrative transition from Mechanical Engineering to Software Development, paired with GSAP-animated achievement counters.
- **Technical Skills**: Grouped by Programming Languages, Frontend, Backend, Databases, and Tools.
- **Featured Projects**: Interactive carousel with project cards, live demo links, GitHub source buttons, and technology tags.
- **Education & Training**: Clean vertical timeline showcasing certifications and degree.
- **Contact Panel**: High-contrast dark panel with email action and social links.
- **Interactive Details**: Custom mouse follower cursor, scroll progress bar, and full mobile responsiveness.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Animations**: [GSAP](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Styling**: Vanilla CSS with modern custom properties (CSS variables)
- **Typography**: Google Fonts (*Archivo* & *Instrument Serif*)

---

## Quick Start & How to Run

### 1. Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your machine.

Check version:
```bash
node -v
npm -v
```

### 2. Installation

Navigate to the project directory and install the required dependencies:

```bash
cd dhanraj-portfolio
npm install
```

### 3. Start Development Server

Run the local development server with hot-reload:

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:5173/
```

### 4. Build for Production

To create an optimized, minified production build:

```bash
npm run build
```

The compiled files will be output to the `dist/` directory.

### 5. Preview Production Build

Test the production bundle locally before deploying:

```bash
npm run preview
```

---

## How to Customize Your Content

All data is decoupled from component code inside the `src/data/` folder, making customization effortless without needing to edit complex JSX or CSS.

### 1. Update Personal Profile & Social Links
Open [`src/data/profile.js`](src/data/profile.js):
```javascript
export const profile = {
  name: 'Dhanraj S',
  title: 'Fresher / Entry-Level Java Full Stack Developer',
  email: 'dhanrajs781004@gmail.com',
  github: 'https://github.com/Dhanraj166',
  linkedin: 'https://www.linkedin.com/in/dhanraj-s-173a08327',
  resumePath: '/Dhanraj_S_Resume.pdf',
  resumeFileName: 'Dhanraj_S_Resume.pdf',
}
```

### 2. Replace Your Resume PDF
Place your new resume in the `public/` directory:
- Path: `public/Dhanraj_S_Resume.pdf`
- Keep the same file name so the download buttons automatically serve the latest copy.

### 3. Update Profile Photo
- **Cutout image**: Place your transparent background PNG at `src/assets/projects/profile-cutout.png`.
- Alternatively, if you want to use a standard image or different path, update the import at the top of [`src/components/Hero.jsx`](src/components/Hero.jsx):
  ```jsx
  import profileCutout from '../assets/projects/your-new-image.png'
  ```

### 4. Adjust Hero Text & Spacing
Open [`src/components/Hero.jsx`](src/components/Hero.jsx):
- **Availability badge text**: Change line 37.
- **Short intro blurb**: Change lines 43–45.
- **Bottom name & title**: Change lines 51–64.
- **Left/Right Margins**: Adjust insets in [`src/styles/Hero.css`](src/styles/Hero.css) (look for `.hero-heading-left`, `.hero-heading-right`, and `.hero-name-slot`).

### 5. Add or Edit Projects
Open [`src/data/projects.js`](src/data/projects.js):
Each project item contains:
```javascript
{
  id: 'my-project',
  name: 'Project Name',
  type: 'Full-stack application',
  description: 'Short 2-3 sentence overview...',
  features: ['Key feature 1', 'Key feature 2'],
  technologies: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL'],
  image: myProjectImage, // imported from src/assets/projects/
  liveUrl: 'https://your-demo-url.vercel.app/', // or ''
  githubUrl: 'https://github.com/YourUsername/repo',
}
```
*Screenshots should be saved in `src/assets/projects/`.*

### 6. Update Skills
Open [`src/data/skills.js`](src/data/skills.js):
Add or delete technologies under their respective categories (`languages`, `frontend`, `backend`, `databases`, `tools`, `concepts`).

### 7. Update Education & Certifications
Open [`src/data/education.js`](src/data/education.js):
Add degrees, bootcamps, or certifications with date ranges and descriptions.

### 8. Change Colors & Themes
Open [`src/styles/global.css`](src/styles/global.css) and customize the CSS root variables:
```css
:root {
  --color-bg: #fffdfa;          /* Page background */
  --color-text: #111111;        /* Main text */
  --color-muted: #6b645c;       /* Secondary text */
  --color-border: #ede4d8;      /* Card & divider borders */
  --color-accent: #f28c38;      /* Indicator dot & highlights */
}
```

---

## Project Structure

```
dhanraj-portfolio/
├── public/
│   ├── Dhanraj_S_Resume.pdf      # Resume download file
│   └── favicon.svg               # Browser tab icon
├── src/
│   ├── assets/
│   │   └── projects/             # Project screenshots & profile cutout
│   ├── components/
│   │   ├── About.jsx             # Story & animated counters
│   │   ├── Contact.jsx           # Contact panel & socials
│   │   ├── CustomCursor.jsx      # Smooth trailing cursor
│   │   ├── Education.jsx         # Career & education timeline
│   │   ├── Hero.jsx              # Central portrait & oversized typography
│   │   ├── Navbar.jsx            # Fixed navigation bar
│   │   ├── ProjectCard.jsx       # Individual project card
│   │   ├── Projects.jsx          # Projects carousel slider
│   │   ├── Reveal.jsx            # Scroll reveal animation wrapper
│   │   ├── ScrollProgress.jsx    # Top reading progress indicator
│   │   ├── Skills.jsx            # Categorized skills matrix
│   │   └── TechMarquee.jsx       # Infinite tech ticker
│   ├── data/
│   │   ├── education.js          # Education entries
│   │   ├── profile.js            # Personal info & links
│   │   ├── projects.js           # Portfolio projects
│   │   └── skills.js             # Technical skills lists
│   ├── styles/
│   │   ├── About.css
│   │   ├── Contact.css
│   │   ├── CustomCursor.css
│   │   ├── Education.css
│   │   ├── global.css            # Base styles & theme variables
│   │   ├── Hero.css              # Hero layout & margins
│   │   ├── Navbar.css
│   │   ├── Projects.css
│   │   ├── Reveal.css
│   │   ├── ScrollProgress.css
│   │   ├── Skills.css
│   │   └── TechMarquee.css
│   ├── App.jsx                   # Root application assembly
│   └── main.jsx                  # React entry point
├── index.html                    # HTML shell & font imports
├── package.json
└── vite.config.js                # Build & bundling optimizations
```

---

## Deployment

### Deploy to Vercel 
1. Push this project to your GitHub repository.
2. Sign in to [vercel.com](https://vercel.com).
3. Click **Add New Project** and import your GitHub repository.
4. Vercel will automatically detect **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**!


---

## License

This portfolio is personal and open for reference. Feel free to use the structure as inspiration for your own portfolio.

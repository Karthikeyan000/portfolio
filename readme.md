# Karthikeyan M — Developer Portfolio

A modern, responsive and developer-focused personal portfolio built with **React.js, Vite and Material UI (MUI)**.

The portfolio showcases my professional experience, technical skills, projects, achievements, certifications and education as a **Software Development Engineer 2 / Full Stack Engineer**.

---

## Overview

This portfolio is designed with a clean, modern developer aesthetic focused on:

* Full Stack Development
* Backend Engineering
* Scalable REST APIs
* Microservices
* Event-driven architecture
* Database optimization
* Cloud & DevOps
* Mobile development
* Technical leadership

The UI is fully responsive and optimized for desktop, tablet and mobile devices.

---

## Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* Material UI (MUI)
* HTML5
* CSS3
* Vite

### Backend Technologies

* Node.js
* Express.js
* REST APIs
* Microservices
* Apache Kafka
* BullMQ
* Redis
* JWT
* OAuth
* Cron Jobs
* AWS Lambda

### Databases

* PostgreSQL
* MongoDB
* SQLite

### ORM / ODM

* Prisma
* Sequelize
* Mongoose

### Mobile

* Flutter
* Capacitor
* Firebase
* Push Notifications
* AdMob
* Razorpay

### DevOps & Tools

* Git
* GitHub
* GitLab
* Docker
* CI/CD
* Agile / Scrum
* Unit Testing
* Code Reviews

---

## Features

### Developer-focused Hero Section

The landing section includes:

* Developer introduction
* Current designation
* Full Stack engineering focus
* Availability status
* Developer-style code window
* GitHub profile
* LinkedIn profile
* Email contact
* Resume download

---

### Technical Stack

Skills are organized into dedicated categories:

```text
Backend
Frontend
Databases
ORM / ODM
Mobile
DevOps & Quality
Performance
```

Each technology is displayed using MUI components for a clean visual presentation.

---

### Project Showcase

The portfolio includes selected projects with:

* Project name
* Project type
* Project duration
* Technology stack
* Project description
* Technical contributions
* Performance improvements
* Business impact

Featured projects include:

* Eva Equity Partners
* Jesus Calls — Lyfgen
* Infilect — InfiViz
* PluginLive
* Waterfield Advisors
* Duco Insure

---

### Professional Experience

Career progression is displayed as a timeline:

```text
Software Development Engineer 2
        ↓
Software Development Engineer 1
        ↓
Software Development Engineer — Intern
```

The timeline highlights responsibilities, technical contributions, leadership and career progression.

---

### Achievements

The portfolio highlights:

**1st Place — AI Vibe Hackathon 2025**

Project:

> Vistello — AI-powered Idea to Diagram

Technology:

```text
React.js
Python Django
DeepSeek
Phidata
Mermaid
Cursor AI
```

---

### Certifications

The portfolio includes certifications from:

* Udemy
* Anthropic
* IBM Skills Network / Cognitive Class
* LinkedIn Learning

---

### Education

```text
Bachelor of Computer Application (B.C.A)

Sri Paramakalyani College
Tamil Nadu, India

CGPA: 8.0 / 10
Graduated: June 2023
```

---

## Project Structure

```text
karthikeyan-portfolio/
│
├── public/
│   ├── favicon.svg
│   └── resume/
│       └── Karthikeyan-M-Resume.pdf
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   │
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── navbar.css
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── hero.css
│   │   │
│   │   ├── Stats/
│   │   │   ├── Stats.jsx
│   │   │   └── stats.css
│   │   │
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   ├── SkillCard.jsx
│   │   │   └── skills.css
│   │   │
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── projects.css
│   │   │
│   │   ├── Experience/
│   │   │   ├── Experience.jsx
│   │   │   ├── ExperienceItem.jsx
│   │   │   └── experience.css
│   │   │
│   │   ├── Achievements/
│   │   │   ├── Achievements.jsx
│   │   │   └── achievements.css
│   │   │
│   │   ├── Certifications/
│   │   │   ├── Certifications.jsx
│   │   │   └── certifications.css
│   │   │
│   │   ├── Education/
│   │   │   ├── Education.jsx
│   │   │   └── education.css
│   │   │
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── contact.css
│   │   │
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── footer.css
│   │
│   ├── data/
│   │   ├── profile.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── experience.js
│   │   ├── certifications.js
│   │   └── achievements.js
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── theme/
│   │   └── theme.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm

Check your versions:

```bash
node -v
npm -v
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/karthikeyan-portfolio.git
```

Navigate to the project:

```bash
cd karthikeyan-portfolio
```

Install dependencies:

```bash
npm install
```

---

## Run Development Server

Start the Vite development server:

```bash
npm run dev
```

The terminal will provide the local development URL.

Usually:

```text
http://localhost:5173
```

---

## Production Build

Create an optimized production build:

```bash
npm run build
```

The generated files will be available inside:

```text
dist/
```

---

## Preview Production Build

```bash
npm run preview
```

---

## Customization

Most portfolio content is separated into the `src/data` directory.

### Profile

Update:

```text
src/data/profile.js
```

Example:

```javascript
const profile = {
  name: "Karthikeyan M",
  role: "Software Development Engineer 2",
  headline: "Full Stack Engineer",
  email: "karthikeyandev03@gmail.com",
  github: "https://github.com/Karthikeyan000",
  linkedin: "https://linkedin.com/in/karthi-keyan-m"
};
```

### Skills

Update:

```text
src/data/skills.js
```

### Projects

Update:

```text
src/data/projects.js
```

### Experience

Update:

```text
src/data/experience.js
```

### Certifications

Update:

```text
src/data/certifications.js
```

---

## Adding Your Resume

Place your resume inside:

```text
public/resume/
```

For example:

```text
public/
└── resume/
    └── Karthikeyan-M-Resume.pdf
```

The Hero section can then use:

```jsx
<Button
  href="/resume/Karthikeyan-M-Resume.pdf"
  download
>
  Download Resume
</Button>
```

---

## Adding Project Images

Place project images inside:

```text
src/assets/images/
```

Example:

```text
src/assets/images/
├── vistello.png
├── pluginlive.png
├── eva-equity.png
├── waterfield.png
└── infiviz.png
```

Then import them into the corresponding component:

```javascript
import pluginLiveImage from "../../assets/images/pluginlive.png";
```

---

## Responsive Design

The portfolio is designed for:

```text
Desktop
   ↓
Tablet
   ↓
Mobile
```

Responsive breakpoints are handled using:

* MUI Grid
* CSS media queries
* Responsive Stack
* Responsive typography
* Mobile navigation drawer

---

## Design Philosophy

The portfolio follows a developer-oriented visual language:

```text
Minimal
   +
Technical
   +
Professional
   +
Performance-focused
   +
Responsive
```

The visual design uses:

* Developer code editor aesthetic
* IBM Plex Sans
* IBM Plex Mono
* Minimal color palette
* High contrast sections
* Technical typography
* Structured content
* Subtle hover animations

---

## Deployment

This is a static React application and can be deployed to several platforms.

### Vercel

Build the project:

```bash
npm run build
```

Then deploy the project using Vercel.

Recommended build configuration:

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

### Netlify

```text
Build command:
npm run build

Publish directory:
dist
```

### GitHub Pages

The production output is generated in:

```text
dist/
```

This folder can be deployed through GitHub Pages using a suitable Vite/GitHub Pages configuration.

### AWS S3

The application can also be hosted as a static website using:

```text
React
   ↓
Vite Build
   ↓
dist/
   ↓
AWS S3
   ↓
CloudFront
```

---

## Performance

The portfolio is intentionally static and does not require:

* Backend API
* Database
* Authentication
* Server-side rendering

This keeps the application lightweight and easy to deploy.

---

## Future Improvements

Potential future additions:

* GitHub API integration
* Dynamic GitHub project showcase
* Project detail pages
* Blog section
* Dark / Light mode
* Contact form
* Downloadable resume
* Project screenshots
* Architecture diagrams
* Technical writing section
* Visitor analytics
* Animated technology graph
* Interactive developer terminal
* Three.js developer-themed 3D section

---

## Contact

**Karthikeyan M**

Software Development Engineer 2
Full Stack Engineer

Email:

```text
karthikeyandev03@gmail.com
```

GitHub:

```text
https://github.com/Karthikeyan000
```

LinkedIn:

```text
https://linkedin.com/in/karthi-keyan-m
```

Location:

```text
Tirunelveli, Tamil Nadu, India
```

---

## License

This project is intended for personal portfolio use.

© 2026 Karthikeyan M. All rights reserved.

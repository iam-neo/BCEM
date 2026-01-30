# BCEM - Bheri College of Engineering and Management

A modern, responsive website for Bheri College of Engineering & Management (BCEM), built with React and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.3-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)

## 🎓 About

This is the official website for BCEM located in Nepalgunj, Nepal. The site showcases:

- **Bachelor of Civil Engineering** - 4-year program
- **Bachelor of Business Administration (BBA)** - 4-year program

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd BCEM

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 📁 Project Structure

```
BCEM/
├── public/
│   └── logo.jpeg          # College logo
├── src/
│   ├── components/
│   │   ├── Button/        # Reusable button component
│   │   ├── Card/          # Reusable card component
│   │   ├── Footer/        # Site footer
│   │   └── Navbar/        # Navigation bar
│   ├── pages/
│   │   ├── Home.jsx       # Home page
│   │   ├── About.jsx      # About us page
│   │   ├── Courses.jsx    # Programs page
│   │   ├── Admissions.jsx # Admissions info
│   │   ├── Notices.jsx    # Announcements
│   │   └── Contact.jsx    # Contact form
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles with Tailwind
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.js         # Vite configuration
└── vercel.json            # Vercel deployment config
```

## 🎨 Design

### Color Palette (from Logo)
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#1565C0` | Headlines, buttons |
| Navy | `#0D47A1` | Footer, headers |
| Primary Red | `#E31837` | Accents, CTAs |
| Primary Yellow | `#FFD600` | Highlights |
| Primary Green | `#43A047` | Success states |

### Typography
- **Headings**: Outfit (Google Fonts)
- **Body**: Inter (Google Fonts)

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and configure the build
4. Click Deploy

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

## 📝 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern university aesthetic
- ✅ Fast loading with Vite
- ✅ SEO-friendly structure
- ✅ Accessible navigation
- ✅ Smooth animations
- ✅ Contact form UI
- ✅ Program showcases

## 🖼️ Pages

| Page | Description |
|------|-------------|
| Home | Hero section, features, programs, campus life |
| About | College story, mission, vision, values |
| Programs | Civil Engineering & BBA details |
| Admissions | Process, eligibility, documents |
| Notices | Announcements and updates |
| Contact | Contact form and info |

## 📄 License

© 2026 Bheri College of Engineering and Management. All rights reserved.

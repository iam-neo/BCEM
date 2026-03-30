# BCEM - Bheri College of Engineering and Management

A modern, responsive website for Bheri College of Engineering & Management (BCEM), built with React and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.3-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)
![React Router](https://img.shields.io/badge/React_Router-7.x-CA4245?logo=reactrouter)

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
│   ├── building/
│   │   └── building.jpeg      # Campus building photo
│   ├── program/               # Program-related images
│   ├── logo.jpeg              # College logo
│   ├── og-image.jpg           # Open Graph social sharing image
│   ├── robots.txt             # Search engine crawler rules
│   └── sitemap.xml            # XML sitemap for SEO
├── src/
│   ├── components/
│   │   ├── Button/            # Reusable button component (primary, outline, white)
│   │   ├── Card/              # Reusable card component (image, badge support)
│   │   ├── FAQ/               # Searchable FAQ accordion with category filters
│   │   ├── Footer/            # Site footer with contact & social links
│   │   ├── Navbar/            # Responsive navbar with mobile menu & dark mode toggle
│   │   ├── ScrollToTop/       # Scroll-to-top floating button
│   │   ├── SEO/               # SEO meta tags & structured data component
│   │   ├── Skeleton/          # Loading skeleton placeholders
│   │   └── Testimonials/      # Auto-rotating testimonials carousel (Swiper)
│   ├── context/
│   │   └── ThemeContext.jsx   # Dark mode context (localStorage persistence)
│   ├── data/
│   │   ├── faqData.js         # FAQ questions & answers (26 items, 4 categories)
│   │   ├── schemaData.js      # JSON-LD structured data for SEO
│   │   └── testimonialsData.js # Student testimonial entries
│   ├── pages/
│   │   ├── Home.jsx           # Hero, stats, programs, campus life, testimonials
│   │   ├── About.jsx          # College story, mission, vision, values
│   │   ├── Courses.jsx        # Programs page (Civil Engineering & BBA)
│   │   ├── Admissions.jsx     # Admissions info with FAQ section
│   │   ├── Notices.jsx        # Announcements and updates
│   │   ├── Contact.jsx        # Contact form and info
│   │   ├── PrivacyPolicy.jsx  # Privacy policy page
│   │   └── TermsOfUse.jsx     # Terms of use page
│   ├── App.jsx                # Main app with lazy-loaded routes
│   ├── App.css                # App-level styles
│   ├── main.jsx               # Entry point (BrowserRouter, ThemeProvider)
│   └── index.css              # Global styles with Tailwind directives
├── documentation/             # Standalone HTML documentation
│   ├── index.html
│   ├── script.js
│   └── style.css
├── FRONTEND_FEATURES.md       # Feature analysis & implementation roadmap
├── tailwind.config.cjs        # Tailwind configuration (custom theme)
├── postcss.config.cjs         # PostCSS configuration
├── vite.config.js             # Vite configuration
└── vercel.json                # Vercel deployment config (SPA rewrites)
```

## 🎨 Design

### Color Palette (from Logo)
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#1565C0` | Headlines, buttons |
| Navy | `#0D47A1` | Footer, headers |
| Navy Dark | `#0A3A8A` | Hover states |
| Navy Light | `#1E5BC6` | Accents |
| Primary Red | `#E31837` | Accents, CTAs |
| Primary Yellow | `#FFD600` | Highlights |
| Primary Green | `#43A047` | Success states |

The full `brand` (blue scale) and `accent` (red scale) color palettes with 50–900 shades are defined in `tailwind.config.cjs`.

### Typography
- **Headings**: Outfit (Google Fonts)
- **Body**: Inter (Google Fonts)

### Dark Mode
Dark mode is supported via Tailwind's `class` strategy, managed through `ThemeContext` with `localStorage` persistence. Toggle is available in the Navbar.

## 📝 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark mode with persistent toggle
- ✅ Lazy-loaded routes with code splitting
- ✅ Loading skeleton placeholders
- ✅ Animated statistics counter (react-countup)
- ✅ Scroll-triggered animations (Intersection Observer)
- ✅ Searchable FAQ accordion (26 questions, 4 categories)
- ✅ Student testimonials carousel (Swiper, auto-rotate)
- ✅ Scroll-to-top floating button
- ✅ SEO meta tags & structured data (react-helmet-async)
- ✅ Sitemap & robots.txt
- ✅ Open Graph image for social sharing
- ✅ Modern university aesthetic
- ✅ Fast loading with Vite
- ✅ Smooth animations
- ✅ Contact form UI
- ✅ Program showcases

## 🖼️ Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section, animated stats, programs, campus life, testimonials |
| About | `/about` | College story, mission, vision, values |
| Programs | `/courses` | Civil Engineering & BBA details |
| Admissions | `/admissions` | Process, eligibility, documents, FAQ section |
| Notices | `/notices` | Announcements and updates |
| Contact | `/contact` | Contact form with map and info |
| Privacy Policy | `/privacy-policy` | Privacy policy |
| Terms of Use | `/terms-of-use` | Terms of use |

## 📦 Dependencies

### Runtime
| Package | Version | Purpose |
|---------|---------|---------|
| `react` | 18.3.x | Core UI framework |
| `react-dom` | 18.3.x | React DOM renderer |
| `react-router-dom` | 7.1.x | Client-side routing |
| `react-icons` | 5.5.x | Icon library |
| `react-countup` | 6.5.x | Animated number counters |
| `react-intersection-observer` | 10.x | Scroll-triggered animations |
| `react-helmet-async` | 2.x | SEO meta tags management |
| `swiper` | 12.x | Testimonials carousel |
| `prop-types` | 15.8.x | Runtime type checking |

### Dev
| Package | Purpose |
|---------|---------|
| `vite` 6.x | Build tool & dev server |
| `@vitejs/plugin-react` | React Fast Refresh |
| `tailwindcss` 3.4.x | Utility-first CSS |
| `postcss` | CSS processing |
| `autoprefixer` | Vendor prefixing |

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and configure the build
4. Click Deploy

The `vercel.json` includes SPA rewrite rules for client-side routing.

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Deploy the 'dist' folder to Netlify
# Add _redirects file: /*  /index.html  200
```

## 📄 License

© 2026 Bheri College of Engineering and Management. All rights reserved.

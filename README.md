# BCEM College Website

This is the official frontend for the Bheri College of Engineering & Management (BCEM) website, built with **React** and **Vite**.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## Getting Started

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd BCEM
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## Building for Production

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist/` directory.

## Project Structure

- `src/components`: Reusable UI components (Navbar, Footer, Card, Button).
- `src/pages`: Individual page components (Home, About, Courses, etc.).
- `src/App.jsx`: Main application component with routing configuration.
- `public/`: Static assets (images, logos).

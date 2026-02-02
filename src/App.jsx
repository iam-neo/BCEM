import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Notices = lazy(() => import('./pages/Notices'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading Fallback Component
const PageLoader = () => (
    <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary-blue border-t-transparent rounded-full animate-spin"></div>
    </div>
);

function App() {
    return (
        <div className="app-layout">
            <Navbar />
            <main className="main-content">
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/admissions" element={<Admissions />} />
                        <Route path="/notices" element={<Notices />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default App;

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/courses', label: 'Courses' },
        { path: '/admissions', label: 'Admissions' },
        { path: '/notices', label: 'Notices' },
        { path: '/contact', label: 'Contact' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand" onClick={closeMenu}>
                    <img src="/logo.jpeg" alt="BCEM Logo" className="navbar-logo" />
                    <div className="navbar-brand-text">
                        <span className="brand-name">BCEM</span>
                        <span className="brand-tagline">Bheri College of Engineering & Management</span>
                    </div>
                </Link>

                <button
                    className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                <nav className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.path} className="nav-item">
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {isMenuOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}
            </div>
        </header>
    );
};

export default Navbar;

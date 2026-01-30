import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { path: '/about', label: 'About Us' },
        { path: '/courses', label: 'Courses' },
        { path: '/admissions', label: 'Admissions' },
        { path: '/notices', label: 'Notices' },
        { path: '/contact', label: 'Contact' },
    ];

    const courses = [
        { label: 'Bachelor of Civil Engineering' },
        { label: 'Bachelor of Business Administration (BBA)' },
    ];

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* College Info */}
                        <div className="footer-section footer-about">
                            <div className="footer-brand">
                                <img src="/logo.jpeg" alt="BCEM Logo" className="footer-logo" />
                                <div>
                                    <h3 className="footer-title">BCEM</h3>
                                    <p className="footer-subtitle">Bheri College of Engineering & Management</p>
                                </div>
                            </div>
                            <p className="footer-description">
                                Empowering students with quality education in Engineering and Management
                                since our establishment. Building the future leaders of Nepal.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-section">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul className="footer-links">
                                {quickLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="footer-link">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Courses */}
                        <div className="footer-section">
                            <h4 className="footer-heading">Our Programs</h4>
                            <ul className="footer-links">
                                {courses.map((course, index) => (
                                    <li key={index}>
                                        <span className="footer-course">{course.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-section">
                            <h4 className="footer-heading">Contact Us</h4>
                            <div className="footer-contact">
                                <div className="contact-item">
                                    <span className="contact-icon">📍</span>
                                    <span>Nepalgunj, Banke, Nepal</span>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">📞</span>
                                    <span>+977-81-XXXXXX</span>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">✉️</span>
                                    <span>info@bcem.edu.np</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">
                        © {currentYear} Bheri College of Engineering and Management. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

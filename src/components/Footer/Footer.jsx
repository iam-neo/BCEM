import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { path: '/about', label: 'About Us' },
        { path: '/courses', label: 'Programs' },
        { path: '/admissions', label: 'Admissions' },
        { path: '/notices', label: 'Notices' },
        { path: '/contact', label: 'Contact' },
    ];

    const programs = [
        { label: 'Bachelor of Civil Engineering' },
        { label: 'Bachelor of Business Administration (BBA)' },
    ];

    return (
        <footer className="bg-gradient-to-br from-navy via-navy-dark to-gray-900 text-white">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* College Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src="/logo.jpeg"
                                alt="BCEM Logo"
                                className="h-16 w-16 object-contain rounded-full border-2 border-white/20"
                            />
                            <div>
                                <h3 className="text-2xl font-heading font-bold text-white">BCEM</h3>
                                <p className="text-sm text-gray-300">Nepalgunj, Nepal</p>
                                <p className="text-xs text-primary-yellow mt-1">Affiliated to Far-western University</p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Bheri College of Engineering & Management - Empowering students with quality education
                            in Engineering and Management for a brighter future.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue transition-colors"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.25,3.11,9.25,5.32V7.46H6.5v4.15h2.75V22h4.25V11.61h3.27Z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-red transition-colors"
                                aria-label="YouTube"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.5,6.2c-.3-1-1.1-1.8-2.1-2.1C19.5,3.5,12,3.5,12,3.5s-7.5,0-9.4.6c-1,.3-1.8,1.1-2.1,2.1C0,8.1,0,12,0,12s0,3.9.5,5.8c.3,1,1.1,1.8,2.1,2.1,1.9.5,9.4.5,9.4.5s7.5,0,9.4-.5c1-.3,1.8-1.1,2.1-2.1.5-1.9.5-5.8.5-5.8S24,8.1,23.5,6.2ZM9.5,15.5v-7L16,12Z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-blue transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.45,20.45H16.9V14.88c0-1.33,0-3-1.85-3s-2.14,1.45-2.14,2.94v5.66H9.36V9h3.41v1.56h.05a3.74,3.74,0,0,1,3.37-1.85c3.6,0,4.27,2.37,4.27,5.46ZM5.34,7.43A2.06,2.06,0,1,1,7.4,5.37,2.06,2.06,0,0,1,5.34,7.43ZM7.12,20.45H3.56V9H7.12ZM22.23,0H1.77A1.75,1.75,0,0,0,0,1.73V22.27A1.75,1.75,0,0,0,1.77,24H22.23A1.75,1.75,0,0,0,24,22.27V1.73A1.75,1.75,0,0,0,22.23,0Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold text-white mb-6 relative">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-yellow -mb-2"></span>
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-primary-yellow transition-colors text-sm flex items-center gap-2"
                                    >
                                        <span className="text-primary-yellow">›</span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold text-white mb-6 relative">
                            Our Programs
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-yellow -mb-2"></span>
                        </h4>
                        <ul className="space-y-3">
                            {programs.map((program, index) => (
                                <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                                    <span className="text-primary-green mt-1">✓</span>
                                    {program.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold text-white mb-6 relative">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary-yellow -mb-2"></span>
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-300">
                                <span className="text-xl">📍</span>
                                <span>Nepalgunj, Banke<br />Nepal</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <span className="text-xl">📞</span>
                                <span>+977-81-XXXXXX</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <span className="text-xl">✉️</span>
                                <span>info@bcem.edu.np</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <span className="text-xl">🕐</span>
                                <span>Sun - Fri: 9:00 AM - 5:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            © {currentYear} Bheri College of Engineering and Management. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/courses', label: 'Programs' },
        { path: '/admissions', label: 'Admissions' },
        { path: '/notices', label: 'Notices' },
        { path: '/contact', label: 'Contact' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg'
                    : 'bg-white shadow-sm'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 group"
                        onClick={closeMenu}
                    >
                        <img
                            src="/logo.jpeg"
                            alt="BCEM Logo"
                            className="h-14 w-14 object-contain rounded-full shadow-md group-hover:shadow-lg transition-shadow"
                        />
                        <div className="hidden sm:block">
                            <span className="block text-xl font-heading font-bold text-navy">
                                BCEM
                            </span>
                            <span className="block text-xs text-gray-600 leading-tight">
                                Bheri College of Engineering<br className="hidden lg:block" /> & Management
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'text-primary-blue bg-brand-50'
                                        : 'text-gray-700 hover:text-primary-blue hover:bg-gray-50'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Link
                            to="/admissions"
                            className="ml-4 btn btn-primary text-sm py-2"
                        >
                            Apply Now
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <div className="relative w-6 h-5">
                            <span
                                className={`absolute left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-2 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                            />
                            <span
                                className={`absolute left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'
                                    }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
                        }`}
                >
                    <nav className="flex flex-col gap-1 pt-2 border-t border-gray-100">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `px-4 py-3 rounded-lg font-medium transition-all ${isActive
                                        ? 'text-primary-blue bg-brand-50'
                                        : 'text-gray-700 hover:text-primary-blue hover:bg-gray-50'
                                    }`
                                }
                                onClick={closeMenu}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Link
                            to="/admissions"
                            className="mt-3 btn btn-primary text-center"
                            onClick={closeMenu}
                        >
                            Apply Now
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 -z-10 lg:hidden"
                    onClick={closeMenu}
                />
            )}
        </header>
    );
};

export default Navbar;

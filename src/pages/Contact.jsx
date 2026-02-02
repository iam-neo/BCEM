import { useState } from 'react';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import SEO from '../components/SEO/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        });
    };

    const contactInfo = [
        {
            icon: '📍',
            title: 'Visit Us',
            details: ['Nepalgunj, Banke', 'Mid-Western Nepal'],
        },
        {
            icon: '📞',
            title: 'Call Us',
            details: ['+977-81-XXXXXX', '+977-81-XXXXXX'],
        },
        {
            icon: '✉️',
            title: 'Email Us',
            details: ['info@bcem.edu.np', 'admission@bcem.edu.np'],
        },
        {
            icon: '🕐',
            title: 'Office Hours',
            details: ['Sun - Fri: 9:00 AM - 5:00 PM', 'Sat: Closed'],
        },
    ];

    return (
        <div className="contact-page pt-20">
            <SEO
                title="Contact BCEM - Get in Touch | Nepalgunj, Nepal"
                description="Contact BCEM for admissions, inquiries, and information. Visit us in Nepalgunj or reach us via phone and email."
                url="/contact"
            />
            {/* Hero Section */}
            <section className="relative py-20 gradient-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="container-custom relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Get in touch with us.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-20">
                        {contactInfo.map((info, index) => (
                            <Card key={index} className="text-center">
                                <Card.Body>
                                    <div className="text-4xl mb-3">{info.icon}</div>
                                    <Card.Title className="text-lg">{info.title}</Card.Title>
                                    {info.details.map((detail, i) => (
                                        <p key={i} className="text-gray-600 text-sm">{detail}</p>
                                    ))}
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="section-title text-left after:mx-0 after:ml-0">Send us a Message</h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="input-field"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="input-field"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="input-field"
                                            placeholder="+977-XXXXXXXXXX"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="input-field"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="admission">Admission Inquiry</option>
                                            <option value="program">Program Information</option>
                                            <option value="fees">Fees & Scholarships</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="input-field resize-none"
                                        placeholder="Write your message here..."
                                    ></textarea>
                                </div>
                                <Button type="submit" variant="primary" size="large" className="w-full sm:w-auto">
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Map & Additional Info */}
                        <div>
                            <h2 className="section-title text-left after:mx-0 after:ml-0">Find Us</h2>
                            <p className="text-gray-600 mb-8">
                                Visit our campus or reach out to us through any of the channels below.
                            </p>
                            {/* Map Placeholder */}
                            <div className="relative rounded-xl overflow-hidden shadow-lg mb-8">
                                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="text-6xl mb-4">🗺️</div>
                                        <p className="text-gray-600 font-medium">
                                            Map Placeholder
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            Nepalgunj, Banke, Nepal
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md text-primary-blue font-medium text-sm hover:bg-gray-50 transition-colors"
                                >
                                    Open in Google Maps
                                </a>
                            </div>

                            {/* Quick Contact Card */}
                            <Card className="bg-gradient-to-br from-primary-blue to-navy text-white">
                                <Card.Body>
                                    <h3 className="text-xl font-heading font-bold text-white mb-4">
                                        Quick Contact
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">📱</span>
                                            <div>
                                                <p className="text-sm text-gray-300">Admission Helpline</p>
                                                <p className="font-semibold">+977-81-XXXXXX</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">💬</span>
                                            <div>
                                                <p className="text-sm text-gray-300">WhatsApp</p>
                                                <p className="font-semibold">+977-98XXXXXXXX</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import FAQ from '../components/FAQ/FAQ';
import { faqData } from '../data/faqData';
import SEO from '../components/SEO/SEO';

const Admissions = () => {
    const steps = [
        {
            number: '01',
            title: 'Get Information',
            description: 'Visit our campus or website to learn about programs, fees, and admission requirements.',
            icon: '📋',
        },
        {
            number: '02',
            title: 'Fill Application',
            description: 'Complete the application form online or collect it from our admission office.',
            icon: '📝',
        },
        {
            number: '03',
            title: 'Submit Documents',
            description: 'Submit required documents including mark sheets, certificates, and photos.',
            icon: '📁',
        },
        {
            number: '04',
            title: 'Entrance Exam',
            description: 'Appear for the entrance examination as per the schedule.',
            icon: '✍️',
        },
        {
            number: '05',
            title: 'Merit List',
            description: 'Check the merit list published after the entrance examination.',
            icon: '📊',
        },
        {
            number: '06',
            title: 'Confirm Admission',
            description: 'Pay the admission fees and complete enrollment formalities.',
            icon: '✅',
        },
    ];

    const documents = [
        'SLC/SEE Mark Sheet (Original + Photocopy)',
        '+2/Intermediate Mark Sheet & Certificate',
        'Character Certificate from previous institution',
        'Migration Certificate (if applicable)',
        'Citizenship Certificate (Photocopy)',
        'Passport-size photographs (4 copies)',
        'Entrance Exam Admit Card',
    ];

    const eligibility = [
        {
            program: 'B.E. Civil Engineering',
            requirements: [
                'Passed +2 or equivalent in Science stream',
                'Minimum 45% aggregate in Physics, Chemistry, and Mathematics',
                'Must pass the engineering entrance examination',
            ],
        },
        {
            program: 'Bachelor of Business Administration (BBA)',
            requirements: [
                'Passed +2 or equivalent in any stream',
                'Minimum D+ grade in all subjects or equivalent percentage',
                'Must pass the management entrance examination',
            ],
        },
    ];

    return (
        <div className="admissions-page pt-20">
            {/* Hero Section */}
            <section className="relative py-20 gradient-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="container-custom relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Admissions</h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                        Join BCEM and take the first step towards a successful career in Engineering or Business.
                    </p>
                </div>
            </section>

            {/* Key Info Cards */}
            <section className="py-12 bg-gray-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-6 -mt-20 relative z-20">
                        <Card className="text-center">
                            <Card.Body>
                                <div className="text-4xl mb-3">📅</div>
                                <Card.Title className="text-lg">Application Open</Card.Title>
                                <Card.Text className="text-primary-blue font-semibold">Contact for dates</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="text-center">
                            <Card.Body>
                                <div className="text-4xl mb-3">📞</div>
                                <Card.Title className="text-lg">Admission Helpline</Card.Title>
                                <Card.Text className="text-primary-blue font-semibold">+977-81-XXXXXX</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="text-center">
                            <Card.Body>
                                <div className="text-4xl mb-3">📧</div>
                                <Card.Title className="text-lg">Email Us</Card.Title>
                                <Card.Text className="text-primary-blue font-semibold">admission@bcem.edu.np</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Admission Process */}
            <section className="section">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Admission Process</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Follow these simple steps to become a part of the BCEM family.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {steps.map((step, index) => (
                            <Card key={index} variant="outline" className="relative">
                                <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100">
                                    {step.number}
                                </div>
                                <Card.Body className="relative z-10">
                                    <div className="text-3xl mb-3">{step.icon}</div>
                                    <Card.Title className="text-lg">{step.title}</Card.Title>
                                    <Card.Text className="text-sm">{step.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility Criteria */}
            <section className="section bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Eligibility Criteria</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Check if you meet the requirements for your preferred program.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {eligibility.map((item, index) => (
                            <Card key={index} className="h-full">
                                <Card.Header className="bg-gradient-to-r from-primary-blue to-navy text-white">
                                    <h3 className="font-heading font-bold text-white text-lg">{item.program}</h3>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="space-y-3">
                                        {item.requirements.map((req, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-600">
                                                <span className="w-5 h-5 bg-primary-green/20 text-primary-green rounded-full flex items-center justify-center text-xs mt-0.5 flex-shrink-0">✓</span>
                                                <span className="text-sm">{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Required Documents */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="section-title text-left after:mx-0 after:ml-0">Required Documents</h2>
                            <p className="text-gray-600 mb-6">
                                Please ensure you have the following documents ready for the admission process.
                            </p>
                            <ul className="space-y-3">
                                {documents.map((doc, index) => (
                                    <li key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <span className="w-6 h-6 bg-primary-blue text-white rounded-full flex items-center justify-center text-xs font-bold">
                                            {index + 1}
                                        </span>
                                        <span className="text-gray-700">{doc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=500&fit=crop"
                                alt="Documents and study materials"
                                className="rounded-2xl shadow-xl w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section bg-gray-50 dark:bg-gray-900">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Find answers to common questions about admissions, fees, and our programs.
                        </p>
                    </div>
                    <FAQ data={faqData} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 gradient-primary text-white">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                                Ready to Apply?
                            </h2>
                            <p className="text-gray-200">
                                Start your application or contact us for more information.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="white" size="large">
                                Download Brochure
                            </Button>
                            <Link to="/contact">
                                <Button variant="outline-primary" size="large" className="border-white text-white hover:bg-white hover:text-primary-blue">
                                    Contact Admission Office
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Admissions;

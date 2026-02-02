import { Link } from 'react-router-dom';
import { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import Testimonials from '../components/Testimonials/Testimonials';
import { testimonialsData } from '../data/testimonialsData';
import SEO from '../components/SEO/SEO';
import { organizationSchema } from '../data/schemaData';

const Home = () => {
    const [statsRef, statsInView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const statistics = [
        {
            end: 500,
            suffix: '+',
            label: 'Students Enrolled',
            icon: '👨‍🎓',
        },
        {
            end: 50,
            suffix: '+',
            label: 'Experienced Faculty',
            icon: '👩‍🏫',
        },
        {
            end: 2,
            suffix: '',
            label: 'Academic Programs',
            icon: '📚',
        },
        {
            end: 95,
            suffix: '%',
            label: 'Placement Rate',
            icon: '💼',
        },
    ];

    const features = [
        {
            icon: '🎓',
            title: 'Quality Education',
            description: 'Experienced faculty delivering world-class education with modern teaching methodologies.',
        },
        {
            icon: '🏛️',
            title: 'Modern Infrastructure',
            description: 'State-of-the-art labs, libraries, and classrooms to support your learning journey.',
        },
        {
            icon: '💼',
            title: 'Career Guidance',
            description: 'Dedicated career counseling and placement assistance to help you succeed.',
        },
        {
            icon: '🌍',
            title: 'Industry Connections',
            description: 'Strong partnerships with leading companies for internships and job opportunities.',
        },
    ];

    const programs = [
        {
            title: 'Bachelor of Civil Engineering',
            duration: '4 Years',
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
            description: 'Design and build the infrastructure of tomorrow with our comprehensive civil engineering program.',
        },
        {
            title: 'Bachelor of Business Administration (BBA)',
            duration: '4 Years',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
            description: 'Develop business acumen and leadership skills for the modern corporate world.',
        },
    ];

    // Transform Testimonials to Review Schema
    const reviews = testimonialsData.map(t => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": t.name },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": t.text,
        "itemReviewed": {
            "@type": "EducationalOrganization",
            "name": "Bheri College of Engineering and Management",
            "image": "https://bcem.edu.np/logo.jpeg"
        }
    }));

    // Combine Organization and Reviews into a Graph
    const homeSchema = {
        "@context": "https://schema.org",
        "@graph": [
            organizationSchema,
            ...reviews
        ]
    };

    return (
        <div className="home-page pt-20">
            <SEO
                title="BCEM - Bheri College of Engineering & Management | Top College in Nepalgunj"
                description="Join BCEM for B.E. Civil Engineering and BBA programs. Quality education, modern facilities, experienced faculty. Admissions open for 2026."
                keywords="BCEM, civil engineering Nepalgunj, BBA college, engineering college Nepal, Bheri College"
                schema={homeSchema}
            />
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center gradient-primary overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-yellow rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10 pt-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white animate-fade-up">
                            <div className="flex items-center gap-3 mb-6">
                                <img
                                    src="/logo.jpeg"
                                    alt="BCEM Logo"
                                    className="h-20 w-20 rounded-full border-4 border-white/30 shadow-xl"
                                />
                                <span className="px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-medium border border-white/20">
                                    Affiliated to Far-western University
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                                Bheri College of<br />
                                <span className="text-primary-yellow">Engineering</span> &<br />
                                <span className="text-primary-yellow">Management</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
                                Empowering students with quality education and practical skills
                                to build a better tomorrow. Join us in shaping the future.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/courses">
                                    <Button variant="white" size="large">
                                        Explore Programs
                                    </Button>
                                </Link>
                                <Link to="/admissions">
                                    <Button variant="outline-primary" size="large" className="border-white text-white hover:bg-white hover:text-primary-blue">
                                        Apply Now
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="hidden lg:block animate-fade-in animate-delay-200">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=700&fit=crop"
                                    alt="Students at campus"
                                    className="rounded-2xl shadow-2xl w-full object-cover"
                                />
                                {/* Stats Card */}
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                                    <div className="text-3xl font-bold text-primary-blue">500+</div>
                                    <div className="text-gray-600 text-sm">Students Enrolled</div>
                                </div>
                                <div className="absolute -top-6 -right-6 bg-primary-yellow rounded-xl shadow-xl p-6">
                                    <div className="text-3xl font-bold text-navy">2</div>
                                    <div className="text-navy text-sm">Programs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Why Choose BCEM?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We provide a comprehensive learning environment with excellent facilities
                            and experienced faculty to help you achieve your goals.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <Card key={index} className="text-center group">
                                <Card.Body>
                                    <div className="w-16 h-16 mx-auto mb-4 bg-brand-50 rounded-xl flex items-center justify-center text-3xl group-hover:bg-primary-blue group-hover:scale-110 transition-all duration-300">
                                        <span className="group-hover:grayscale group-hover:brightness-200">{feature.icon}</span>
                                    </div>
                                    <Card.Title className="text-lg">{feature.title}</Card.Title>
                                    <Card.Text className="text-sm">{feature.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section ref={statsRef} className="py-20 gradient-primary text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-yellow rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                            Our Achievements
                        </h2>
                        <p className="text-gray-200 max-w-2xl mx-auto">
                            Numbers that speak for our commitment to excellence in education
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {statistics.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center group hover:transform hover:scale-110 transition-all duration-300"
                            >
                                <div className="text-5xl mb-3">{stat.icon}</div>
                                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                                    {statsInView ? (
                                        <CountUp
                                            end={stat.end}
                                            duration={2.5}
                                            suffix={stat.suffix}
                                        />
                                    ) : (
                                        '0' + stat.suffix
                                    )}
                                </div>
                                <div className="text-gray-200 text-sm md:text-base font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="section">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Our Programs</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choose from our carefully designed programs that prepare you for success
                            in your chosen field.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {programs.map((program, index) => (
                            <Card key={index} className="overflow-hidden">
                                <Card.Image
                                    src={program.image}
                                    alt={program.title}
                                    className="h-48"
                                />
                                <Card.Body>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Card.Badge variant="primary">{program.duration}</Card.Badge>
                                    </div>
                                    <Card.Title>{program.title}</Card.Title>
                                    <Card.Text className="mb-4">{program.description}</Card.Text>
                                    <Link to="/courses">
                                        <Button variant="outline-primary" size="small">
                                            Learn More
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Campus Life Section */}
            <section className="section bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="section-title text-left after:mx-0 after:ml-0">Campus Life</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Experience a vibrant campus life with modern facilities,
                                extracurricular activities, and a supportive community that
                                helps you grow both personally and professionally.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <span className="w-8 h-8 bg-primary-green/20 text-primary-green rounded-full flex items-center justify-center text-lg">✓</span>
                                    <span className="text-gray-700">Modern computer labs and engineering workshops</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-8 h-8 bg-primary-green/20 text-primary-green rounded-full flex items-center justify-center text-lg">✓</span>
                                    <span className="text-gray-700">Well-stocked library with digital resources</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-8 h-8 bg-primary-green/20 text-primary-green rounded-full flex items-center justify-center text-lg">✓</span>
                                    <span className="text-gray-700">Sports facilities and recreational activities</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-8 h-8 bg-primary-green/20 text-primary-green rounded-full flex items-center justify-center text-lg">✓</span>
                                    <span className="text-gray-700">Student clubs and organizations</span>
                                </li>
                            </ul>
                            <Link to="/about">
                                <Button variant="primary">Learn More About Us</Button>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=400&fit=crop"
                                alt="Campus building"
                                className="rounded-xl shadow-lg w-full h-64 object-cover"
                                loading="lazy"
                                width="300"
                                height="400"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=300&h=400&fit=crop"
                                alt="Students studying"
                                className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
                                loading="lazy"
                                width="300"
                                height="400"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=300&h=400&fit=crop"
                                alt="Computer lab"
                                className="rounded-xl shadow-lg w-full h-64 object-cover"
                                loading="lazy"
                                width="300"
                                height="400"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=400&fit=crop"
                                alt="Classroom"
                                className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
                                loading="lazy"
                                width="300"
                                height="400"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Testimonials Section */}
            <section className="section">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="section-title">What Our Students Say</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Hear from our successful students about their experience at BCEM
                            and how we helped shape their careers.
                        </p>
                    </div>
                    <Testimonials data={testimonialsData} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 gradient-primary text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                        Take the first step towards a successful career.
                        Apply now for admission to BCEM.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/admissions">
                            <Button variant="white" size="large">Apply for Admission</Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline-primary" size="large" className="border-white text-white hover:bg-white hover:text-primary-blue">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

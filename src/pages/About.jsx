import Card from '../components/Card/Card';
import SEO from '../components/SEO/SEO';

const About = () => {
    const stats = [
        { value: '500+', label: 'Students Enrolled' },
        { value: '50+', label: 'Expert Faculty' },
        { value: '2', label: 'Programs Offered' },
        { value: '90%', label: 'Placement Rate' },
    ];

    const values = [
        {
            icon: '🎯',
            title: 'Excellence',
            description: 'We strive for excellence in everything we do, from teaching to research.',
        },
        {
            icon: '🤝',
            title: 'Integrity',
            description: 'We uphold the highest standards of honesty and ethical behavior.',
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'We encourage creative thinking and embrace new ideas.',
        },
        {
            icon: '🌱',
            title: 'Growth',
            description: 'We are committed to the continuous development of our students and staff.',
        },
    ];

    return (
        <div className="about-page pt-20">
            <SEO
                title="About BCEM - Premier Engineering & Management College in Nepalgunj"
                description="Affiliated to Far-western University, BCEM offers quality education in Civil Engineering and Business Administration with modern facilities and expert faculty."
                url="/about"
            />
            {/* Hero Section */}
            <section className="relative py-20 gradient-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="container-custom relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">About Us</h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                        Learn about our journey, mission, and commitment to excellence in education.
                    </p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="section-title text-left after:mx-0 after:ml-0">Our Story</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Bheri College of Engineering & Management (BCEM) is a premier institution
                                located in Nepalgunj, Nepal. Affiliated to Far-western University, we have
                                been transforming lives through education since our establishment.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our college offers carefully designed programs in Civil Engineering and
                                Business Administration, preparing students for successful careers in
                                their chosen fields. We combine theoretical knowledge with practical
                                skills to ensure our graduates are industry-ready.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                With experienced faculty, modern infrastructure, and a supportive
                                learning environment, BCEM is committed to nurturing the next generation
                                of engineers and business leaders.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="/building/building.jpeg"
                                alt="BCEM College Building"
                                className="rounded-2xl shadow-xl w-full object-cover"
                                loading="lazy"
                                width="800"
                                height="600"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                                <div className="flex items-center gap-3">
                                    <img src="/logo.jpeg" alt="BCEM" className="w-12 h-12 rounded-full" />
                                    <div>
                                        <div className="font-bold text-navy">BCEM</div>
                                        <div className="text-sm text-gray-500">Nepalgunj, Nepal</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                                <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card className="border-l-4 border-l-primary-blue">
                            <Card.Body>
                                <div className="text-4xl mb-4">🎯</div>
                                <Card.Title className="text-2xl">Our Mission</Card.Title>
                                <Card.Text>
                                    To provide accessible, affordable, and high-quality education that
                                    empowers students to become responsible professionals and leaders
                                    who contribute positively to society and the nation.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="border-l-4 border-l-primary-red">
                            <Card.Body>
                                <div className="text-4xl mb-4">🔭</div>
                                <Card.Title className="text-2xl">Our Vision</Card.Title>
                                <Card.Text>
                                    To be a center of excellence in education, research, and innovation,
                                    recognized for producing skilled professionals who make a meaningful
                                    impact in their communities and beyond.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            These values guide everything we do at BCEM.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <Card key={index} variant="flat" className="text-center bg-white">
                                <Card.Body>
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <Card.Title className="text-lg">{value.title}</Card.Title>
                                    <Card.Text className="text-sm">{value.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

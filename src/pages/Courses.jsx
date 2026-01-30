import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';

const Courses = () => {
    const programs = [
        {
            id: 1,
            title: 'Bachelor of Civil Engineering',
            shortName: 'B.E. Civil',
            duration: '4 Years',
            affiliation: 'Far-Western University',
            seats: '48',
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
            icon: '🏗️',
            description: 'The Bachelor of Civil Engineering program prepares students to design, construct, and maintain infrastructure projects including buildings, roads, bridges, and water systems.',
            highlights: [
                'Structural Analysis & Design',
                'Construction Management',
                'Surveying & Geotechnics',
                'Hydraulics & Water Resources',
                'Transportation Engineering',
            ],
            careers: ['Structural Engineer', 'Construction Manager', 'Site Engineer', 'Project Engineer', 'Government Services'],
        },
        {
            id: 2,
            title: 'Bachelor of Business Administration (BBA)',
            shortName: 'BBA',
            duration: '4 Years',
            affiliation: 'Far-Western University',
            seats: '60',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
            icon: '📊',
            description: 'The BBA program develops well-rounded business professionals with strong analytical, managerial, and leadership skills for the modern corporate world.',
            highlights: [
                'Financial Management',
                'Marketing & Sales',
                'Human Resource Management',
                'Strategic Management',
                'Entrepreneurship Development',
            ],
            careers: ['Business Manager', 'Marketing Executive', 'Financial Analyst', 'HR Manager', 'Entrepreneur'],
        },
    ];

    return (
        <div className="courses-page pt-20">
            {/* Hero Section */}
            <section className="relative py-20 gradient-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="container-custom relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Programs</h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                        Choose from our carefully designed programs that prepare you for a successful career.
                    </p>
                </div>
            </section>

            {/* Programs Overview */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {programs.map((program) => (
                            <Card key={program.id} className="overflow-hidden">
                                <Card.Image
                                    src={program.image}
                                    alt={program.title}
                                    className="h-48"
                                />
                                <Card.Body>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Card.Badge variant="primary">{program.duration}</Card.Badge>
                                        <Card.Badge variant="success">{program.seats} Seats</Card.Badge>
                                    </div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-3xl">{program.icon}</span>
                                        <Card.Title className="mb-0">{program.shortName}</Card.Title>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-3">{program.title}</p>
                                    <Card.Text className="text-sm mb-4">{program.description}</Card.Text>
                                    <a href={`#program-${program.id}`}>
                                        <Button variant="outline-primary" size="small" className="w-full">
                                            View Details
                                        </Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Program Sections */}
            {programs.map((program, index) => (
                <section
                    key={program.id}
                    id={`program-${program.id}`}
                    className={`section ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                    <div className="container-custom">
                        <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-4xl">{program.icon}</span>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-1">
                                            {program.shortName}
                                        </h2>
                                        <p className="text-gray-500 text-sm">{program.title}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="badge badge-primary">
                                        ⏱️ {program.duration}
                                    </span>
                                    <span className="badge badge-success">
                                        🎓 {program.affiliation}
                                    </span>
                                    <span className="badge bg-gray-100 text-gray-700">
                                        👥 {program.seats} Seats
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {program.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-navy mb-3">Key Subjects</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {program.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <span className="w-5 h-5 bg-primary-green/20 text-primary-green rounded-full flex items-center justify-center text-xs">✓</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-navy mb-3">Career Opportunities</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {program.careers.map((career, i) => (
                                            <span key={i} className="px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-xs font-medium">
                                                {career}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Link to="/admissions">
                                    <Button variant="primary">Apply Now</Button>
                                </Link>
                            </div>
                            <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA Section */}
            <section className="py-16 gradient-primary text-white">
                <div className="container-custom text-center">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                        Ready to Join BCEM?
                    </h2>
                    <p className="text-gray-200 mb-6 max-w-xl mx-auto">
                        Start your journey towards a successful career. Apply for admission today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/admissions">
                            <Button variant="white">Apply for Admission</Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline-primary" className="border-white text-white hover:bg-white hover:text-primary-blue">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;

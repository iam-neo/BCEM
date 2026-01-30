import Button from '../components/Button/Button';
import Card from '../components/Card/Card';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero-section" style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                backgroundColor: '#f8f9fa',
                marginBottom: '2rem'
            }}>
                <h1 className="hero-title">Welcome to BCEM</h1>
                <p className="hero-subtitle">Bheri College of Engineering & Management</p>
                <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
                    Empowering students with quality education and practical skills for a better tomorrow.
                </p>
                <div className="hero-actions" style={{ marginTop: '2rem' }}>
                    <Button variant="primary" size="large">Explore Courses</Button>
                    <Button variant="outline-primary" size="large" style={{ marginLeft: '1rem' }}>Contact Us</Button>
                </div>
            </section>

            <section className="highlights-section" style={{ padding: '2rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Why Choose BCEM?</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Quality Education</Card.Title>
                            <Card.Text>
                                We provide top-notch education with experienced faculty and modern teaching methodologies.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Modern Infrastructure</Card.Title>
                            <Card.Text>
                                Fully equipped labs, libraries, and classrooms to support your learning journey.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Career Guidance</Card.Title>
                            <Card.Text>
                                We offer dedicated career counseling and placement assistance to helping you succeed.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default Home;

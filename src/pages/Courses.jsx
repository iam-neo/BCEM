import Button from '../components/Button/Button';
import Card from '../components/Card/Card';

const Courses = () => {
    const courses = [
        {
            id: 1,
            title: 'Bachelor of Computer Application (BCA)',
            description: 'A 4-year undergraduate program focusing on computer applications and software development.',
            duration: '4 Years'
        },
        {
            id: 2,
            title: 'Bachelor of Business Administration (BBA)',
            description: 'A comprehensive program designed to develop business acumen and leadership skills.',
            duration: '4 Years'
        },
        {
            id: 3,
            title: 'Bachelor of Information Technology (BIT)',
            description: 'Focuses on IT systems, networking, and data management.',
            duration: '4 Years'
        }
    ];

    return (
        <div className="courses-page" style={{ padding: '2rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Courses</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {courses.map(course => (
                    <Card key={course.id}>
                        <Card.Body>
                            <Card.Title>{course.title}</Card.Title>
                            <Card.Text>
                                {course.description}
                            </Card.Text>
                            <p><strong>Duration:</strong> {course.duration}</p>
                            <div style={{ marginTop: '1rem' }}>
                                <Button variant="primary" size="small">View Details</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Courses;

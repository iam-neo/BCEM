import Button from '../components/Button/Button';
import Card from '../components/Card/Card';

const Contact = () => {
    return (
        <div className="contact-page" style={{ padding: '2rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Contact Us</h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                maxWidth: '1000px',
                margin: '0 auto'
            }}>
                <Card>
                    <Card.Body>
                        <Card.Title>Get in Touch</Card.Title>
                        <div style={{ marginTop: '1rem' }}>
                            <p><strong>Address:</strong> Birendranagar-8, Surkhet, Nepal</p>
                            <p><strong>Phone:</strong> +977-083-52xxxx</p>
                            <p><strong>Email:</strong> info@bcem.edu.np</p>
                        </div>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Body>
                        <Card.Title>Send us a Message</Card.Title>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                                <input type="text" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                                <input type="email" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
                                <textarea rows="4" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }}></textarea>
                            </div>
                            <Button variant="primary" type="submit">Send Message</Button>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Contact;

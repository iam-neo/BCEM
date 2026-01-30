const About = () => {
    return (
        <div className="about-page" style={{ padding: '2rem' }}>
            <div className="container">
                <h1 style={{ marginBottom: '2rem' }}>About Us</h1>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Our History</h2>
                    <p>
                        Bheri College of Engineering & Management (BCEM) has been a pioneer in providing technical and management education.
                        Established with a vision to bridge the gap between industry requirements and academic curriculum, we have come a long way.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Mission</h2>
                    <p>
                        To provide accessible, affordable, and high-quality education that empowers students to become responsible professionals and leaders.
                    </p>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Vision</h2>
                    <p>
                        To be a center of excellence in education, research, and innovation, contributing to the development of society and the nation.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;

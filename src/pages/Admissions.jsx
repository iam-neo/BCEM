import Button from '../components/Button/Button';

const Admissions = () => {
    return (
        <div className="admissions-page" style={{ padding: '2rem' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Admissions</h1>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Admission Procedure</h2>
                    <ul style={{ lineHeight: '1.6', marginTop: '1rem' }}>
                        <li>Fill out the online application form or visit the college admission office.</li>
                        <li>Submit necessary documents (mark sheets, character certificate, etc.).</li>
                        <li>Appear for the entrance examination/interview if applicable.</li>
                        <li>Pay the admission fees to confirm your seat.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '3rem' }}>
                    <h2>Eligibility</h2>
                    <p>
                        <strong>BCA/BIT:</strong> +2 or equivalent in any discipline with minimum 45% aggregate and D+ in all subjects.
                    </p>
                    <p>
                        <strong>BBA:</strong> +2 or equivalent in any discipline with minimum D+ in all subjects.
                    </p>
                </section>

                <div style={{ textAlign: 'center' }}>
                    <Button variant="primary" size="large">Apply Now</Button>
                    <Button variant="outline-secondary" size="large" style={{ marginLeft: '1rem' }}>Download Brochure</Button>
                </div>
            </div>
        </div>
    );
};

export default Admissions;

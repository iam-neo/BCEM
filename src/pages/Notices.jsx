import Card from '../components/Card/Card';

const Notices = () => {
    const notices = [
        {
            id: 1,
            title: 'Mid-Term Examination Schedule',
            date: '2025-10-15',
            content: 'The mid-term examinations for all semesters will commence from November 1st. Please collect your admit card.'
        },
        {
            id: 2,
            title: 'Holiday Announcement',
            date: '2025-10-10',
            content: 'The college will remain closed on the occasion of Dashain from October 12th to October 20th.'
        },
        {
            id: 3,
            title: 'Guest Lecture on AI',
            date: '2025-09-28',
            content: 'A guest lecture on "Future of AI" is organized for BCA and BIT students on Friday.'
        }
    ];

    return (
        <div className="notices-page" style={{ padding: '2rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Notices & Announcements</h1>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {notices.map(notice => (
                    <Card key={notice.id} style={{ marginBottom: '1.5rem' }}>
                        <Card.Body>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <Card.Title className="notice-title">{notice.title}</Card.Title>
                                <span style={{ fontSize: '0.9rem', color: '#666' }}>{notice.date}</span>
                            </div>
                            <Card.Text>
                                {notice.content}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Notices;

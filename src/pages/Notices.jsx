import { useState, useEffect } from 'react';
import Card from '../components/Card/Card';
import { NoticeSkeleton } from '../components/Skeleton/Skeleton';

const Notices = () => {
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const notices = [
        {
            id: 1,
            title: 'Admission Open for 2026 Academic Session',
            date: '2026-01-28',
            category: 'Admission',
            priority: 'high',
            content: 'We are pleased to announce that admissions are now open for BE Civil Engineering and BBA programs for the 2026 academic session. Interested candidates can apply online or visit our admission office.',
        },
        {
            id: 2,
            title: 'Mid-Term Examination Schedule',
            date: '2026-01-25',
            category: 'Examination',
            priority: 'high',
            content: 'The mid-term examinations for all semesters will commence from February 15, 2026. Students are requested to collect their admit cards from the examination section.',
        },
        {
            id: 3,
            title: 'Guest Lecture on Sustainable Infrastructure',
            date: '2026-01-22',
            category: 'Event',
            priority: 'normal',
            content: 'A guest lecture on "Sustainable Infrastructure Development in Nepal" will be held on February 5, 2026. All Civil Engineering students are encouraged to attend.',
        },
        {
            id: 4,
            title: 'Library Timings Extended',
            date: '2026-01-20',
            category: 'General',
            priority: 'normal',
            content: 'The college library will remain open from 7:00 AM to 8:00 PM from Monday to Friday during the examination period.',
        },
        {
            id: 5,
            title: 'Industrial Visit for BBA Students',
            date: '2026-01-18',
            category: 'Event',
            priority: 'normal',
            content: 'An industrial visit to leading business organizations in Nepalgunj is scheduled for BBA 3rd semester students on January 30, 2026.',
        },
        {
            id: 6,
            title: 'Sports Week Announcement',
            date: '2026-01-15',
            category: 'Event',
            priority: 'normal',
            content: 'Annual Sports Week will be held from February 20-25, 2026. All students are encouraged to participate in various sports activities.',
        },
    ];

    // Simulate loading data
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const getCategoryColor = (category) => {
        switch (category) {
            case 'Admission': return 'primary';
            case 'Examination': return 'secondary';
            case 'Event': return 'success';
            default: return 'primary';
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    // Categories for filtering
    const categories = ['All', 'Admission', 'Examination', 'Event', 'General'];

    // Filter notices based on selected category
    const filteredNotices = selectedCategory === 'All'
        ? notices
        : notices.filter(notice => notice.category === selectedCategory);

    return (
        <div className="notices-page pt-20">
            {/* Hero Section */}
            <section className="relative py-20 gradient-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="container-custom relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Notices & Announcements</h1>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                        Stay updated with the latest news, events, and important announcements from BCEM.
                    </p>
                </div>
            </section>

            {/* Notices Grid */}
            <section className="section">
                <div className="container-custom">
                    {/* Filter Tags */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${selectedCategory === category
                                    ? 'bg-primary-blue text-white shadow-md scale-105'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                            >
                                {category === 'All' ? 'All Notices' : category}
                            </button>
                        ))}
                    </div>

                    {/* Notices */}
                    <div className="max-w-4xl mx-auto space-y-6">
                        {loading ? (
                            // Show skeletons while loading
                            Array.from({ length: 6 }).map((_, index) => (
                                <NoticeSkeleton key={index} />
                            ))
                        ) : filteredNotices.length > 0 ? (
                            // Show filtered notices
                            filteredNotices.map((notice) => (
                                <Card key={notice.id} className="relative overflow-hidden group">
                                    {notice.priority === 'high' && (
                                        <div className="absolute top-0 right-0 bg-primary-red text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                            Important
                                        </div>
                                    )}
                                    <Card.Body>
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <Card.Badge variant={getCategoryColor(notice.category)}>
                                                {notice.category}
                                            </Card.Badge>
                                            <span className="text-sm text-gray-500 flex items-center gap-1">
                                                <span>📅</span>
                                                {formatDate(notice.date)}
                                            </span>
                                        </div>
                                        <Card.Title className="group-hover:text-primary-blue transition-colors">
                                            {notice.title}
                                        </Card.Title>
                                        <Card.Text>{notice.content}</Card.Text>
                                        <button className="text-primary-blue font-medium text-sm hover:underline mt-2">
                                            Read More →
                                        </button>
                                    </Card.Body>
                                </Card>
                            ))
                        ) : (
                            // No notices found
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">📭</div>
                                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    No Notices Found
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    There are no notices in the "{selectedCategory}" category yet.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-10">
                        <button className="px-8 py-3 border-2 border-primary-blue text-primary-blue rounded-lg font-medium hover:bg-primary-blue hover:text-white transition-colors">
                            Load More Notices
                        </button>
                    </div>
                </div>
            </section>

            {/* Subscribe Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-heading font-bold text-navy dark:text-white mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Subscribe to receive important notices and updates directly in your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input-field flex-1"
                            />
                            <button className="btn btn-primary whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Notices;

import { useState } from 'react';
import { HiChevronDown, HiSearch } from 'react-icons/hi';

const FAQ = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    // Filter FAQs based on search term and category
    const filteredData = data
        .map(category => ({
            ...category,
            questions: category.questions.filter(q => {
                const answerText = typeof q.answer === 'object'
                    ? `${q.answer.intro || ''} ${q.answer.list?.join(' ') || ''} ${q.answer.conclusion || ''}`
                    : q.answer;
                return q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    answerText.toLowerCase().includes(searchTerm.toLowerCase());
            })
        }))
        .filter(category =>
            (activeCategory === 'all' || category.category === activeCategory) &&
            category.questions.length > 0
        );

    return (
        <div className="w-full">
            {/* Search Bar */}
            <div className="mb-8">
                <div className="relative max-w-2xl mx-auto">
                    <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search frequently asked questions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-blue-500 transition-all"
                    />
                </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-5 py-2 rounded-full font-medium transition-all ${activeCategory === 'all'
                            ? 'bg-primary-blue text-white dark:bg-blue-600'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                >
                    All Questions
                </button>
                {data.map((category) => (
                    <button
                        key={category.category}
                        onClick={() => setActiveCategory(category.category)}
                        className={`px-5 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${activeCategory === category.category
                                ? 'bg-primary-blue text-white dark:bg-blue-600'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                    >
                        <span>{category.icon}</span>
                        <span>{category.category}</span>
                    </button>
                ))}
            </div>

            {/* FAQ Categories */}
            {filteredData.length > 0 ? (
                <div className="space-y-8">
                    {filteredData.map((category) => (
                        <FAQCategory key={category.category} category={category} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        No results found
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        Try searching with different keywords
                    </p>
                </div>
            )}
        </div>
    );
};

const FAQCategory = ({ category }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                    {category.category}
                </h3>
            </div>
            <div className="space-y-3">
                {category.questions.map((question) => (
                    <FAQItem key={question.id} question={question} />
                ))}
            </div>
        </div>
    );
};

const FAQItem = ({ question }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Check if answer is a structured object with intro, list, and conclusion
    const isStructured = typeof question.answer === 'object' && question.answer.intro;

    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
            >
                <span className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-blue dark:group-hover:text-blue-400 transition-colors">
                    {question.question}
                </span>
                <HiChevronDown
                    className={`w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[600px]' : 'max-h-0'
                    }`}
            >
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700">
                    {isStructured ? (
                        <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
                            {question.answer.intro && (
                                <p>{question.answer.intro}</p>
                            )}
                            {question.answer.list && (
                                <ol className="list-decimal list-inside space-y-2 ml-2">
                                    {question.answer.list.map((item, idx) => (
                                        <li key={idx} className="pl-2">{item}</li>
                                    ))}
                                </ol>
                            )}
                            {question.answer.conclusion && (
                                <p className="mt-3">{question.answer.conclusion}</p>
                            )}
                        </div>
                    ) : (
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {question.answer}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQ;

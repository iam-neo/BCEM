const Card = ({
    children,
    variant = 'default',
    className = '',
    hover = true,
    ...props
}) => {
    const baseClasses = 'bg-white rounded-xl overflow-hidden transition-all duration-300';
    const hoverClasses = hover ? 'hover:shadow-card-hover hover:-translate-y-1' : '';

    const variants = {
        'default': 'shadow-card',
        'elevated': 'shadow-lg',
        'outline': 'border border-gray-200 shadow-sm',
        'flat': 'shadow-none bg-gray-50',
    };

    const variantClasses = variants[variant] || variants.default;

    return (
        <div
            className={`${baseClasses} ${variantClasses} ${hoverClasses} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

// Sub-components
Card.Image = ({ src, alt, className = '' }) => (
    <div className={`relative overflow-hidden ${className}`}>
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
    </div>
);

Card.Header = ({ children, className = '' }) => (
    <div className={`px-6 py-4 border-b border-gray-100 ${className}`}>
        {children}
    </div>
);

Card.Body = ({ children, className = '' }) => (
    <div className={`p-6 md:p-8 ${className}`}>
        {children}
    </div>
);

Card.Title = ({ children, className = '' }) => (
    <h3 className={`text-xl font-heading font-bold text-navy mb-2 ${className}`}>
        {children}
    </h3>
);

Card.Text = ({ children, className = '' }) => (
    <p className={`text-gray-600 leading-relaxed ${className}`}>
        {children}
    </p>
);

Card.Footer = ({ children, className = '' }) => (
    <div className={`px-6 py-4 bg-gray-50 border-t border-gray-100 ${className}`}>
        {children}
    </div>
);

Card.Badge = ({ children, variant = 'primary', className = '' }) => {
    const variants = {
        'primary': 'bg-brand-100 text-brand-700',
        'secondary': 'bg-accent-100 text-accent-700',
        'success': 'bg-green-100 text-green-700',
        'warning': 'bg-yellow-100 text-yellow-800',
    };

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Card;

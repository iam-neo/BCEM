const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    className = '',
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

    const variants = {
        'primary': 'bg-primary-blue text-white hover:bg-navy shadow-md hover:shadow-lg focus:ring-primary-blue',
        'secondary': 'bg-primary-red text-white hover:bg-accent-700 shadow-md hover:shadow-lg focus:ring-primary-red',
        'outline-primary': 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white focus:ring-primary-blue bg-transparent',
        'outline-secondary': 'border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-white focus:ring-primary-red bg-transparent',
        'white': 'bg-white text-primary-blue hover:bg-gray-100 shadow-md hover:shadow-lg focus:ring-white',
        'ghost': 'text-primary-blue hover:bg-brand-50 focus:ring-primary-blue',
    };

    const sizes = {
        'small': 'px-4 py-2 text-sm',
        'medium': 'px-6 py-3 text-base',
        'large': 'px-8 py-4 text-lg',
    };

    const variantClasses = variants[variant] || variants.primary;
    const sizeClasses = sizes[size] || sizes.medium;

    return (
        <button
            className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

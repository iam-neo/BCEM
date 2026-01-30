import './Card.css';

const Card = ({
    children,
    variant = 'default',
    className = '',
    hover = true,
    ...props
}) => {
    return (
        <div
            className={`card card-${variant} ${hover ? 'card-hover' : ''} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

// Sub-components for flexible card structure
Card.Image = ({ src, alt, className = '' }) => (
    <div className={`card-image ${className}`}>
        <img src={src} alt={alt} />
    </div>
);

Card.Header = ({ children, className = '' }) => (
    <div className={`card-header ${className}`}>
        {children}
    </div>
);

Card.Body = ({ children, className = '' }) => (
    <div className={`card-body ${className}`}>
        {children}
    </div>
);

Card.Title = ({ children, className = '' }) => (
    <h3 className={`card-title ${className}`}>
        {children}
    </h3>
);

Card.Text = ({ children, className = '' }) => (
    <p className={`card-text ${className}`}>
        {children}
    </p>
);

Card.Footer = ({ children, className = '' }) => (
    <div className={`card-footer ${className}`}>
        {children}
    </div>
);

export default Card;

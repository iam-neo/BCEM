import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    ...props
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn btn-${variant} btn-${size} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

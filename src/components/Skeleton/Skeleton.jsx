const Skeleton = ({ variant = 'text', className = '', count = 1 }) => {
    const baseClasses = 'animate-pulse bg-gray-300 dark:bg-gray-700 rounded';

    const variants = {
        text: 'h-4 w-full',
        title: 'h-8 w-3/4',
        avatar: 'h-12 w-12 rounded-full',
        card: 'h-64 w-full',
        image: 'h-48 w-full',
        button: 'h-10 w-32',
        circle: 'h-16 w-16 rounded-full',
    };

    const variantClasses = variants[variant] || variants.text;

    // Render multiple skeletons if count > 1
    if (count > 1) {
        return (
            <div className="space-y-3">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        className={`${baseClasses} ${variantClasses} ${className}`}
                    />
                ))}
            </div>
        );
    }

    return <div className={`${baseClasses} ${variantClasses} ${className}`} />;
};

// CardSkeleton - commonly used pattern
export const CardSkeleton = () => {
    return (
        <div className="card">
            <Skeleton variant="image" />
            <div className="card-body space-y-3">
                <Skeleton variant="title" />
                <Skeleton variant="text" count={3} />
                <Skeleton variant="button" />
            </div>
        </div>
    );
};

// NoticeSkeleton - for notice cards
export const NoticeSkeleton = () => {
    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-card space-y-3">
            <div className="flex items-center justify-between">
                <Skeleton variant="text" className="w-24" />
                <Skeleton variant="text" className="w-20" />
            </div>
            <Skeleton variant="title" className="w-full" />
            <Skeleton variant="text" count={2} />
        </div>
    );
};

// StatSkeleton - for statistics
export const StatSkeleton = () => {
    return (
        <div className="text-center space-y-2">
            <Skeleton variant="title" className="w-20 mx-auto" />
            <Skeleton variant="text" className="w-32 mx-auto" />
        </div>
    );
};

export default Skeleton;

import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({
    title = 'BCEM - Bheri College of Engineering & Management',
    description = 'Join BCEM for B.E. Civil Engineering and BBA programs. Quality education, modern facilities, experienced faculty in Nepalgunj, Nepal.',
    keywords = 'BCEM, civil engineering, BBA, Nepalgunj, engineering college Nepal, business administration',
    image = '/logo.jpeg',
    url = 'https://bcem.edu.np',
    type = 'website',
    schema = null,
}) => {
    // Ensure full URL for image
    const fullImageUrl = image.startsWith('http') ? image : `https://bcem.edu.np${image}`;
    const fullUrl = url.startsWith('http') ? url : `https://bcem.edu.np${url}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Canonical URL */}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:site_name" content="BCEM" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />

            {/* Additional Meta Tags */}
            <meta name="author" content="BCEM - Bheri College of Engineering & Management" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
    schema: PropTypes.object,
};

export default SEO;

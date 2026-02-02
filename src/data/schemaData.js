export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Bheri College of Engineering and Management",
    "alternateName": "BCEM",
    "url": "https://bcem.edu.np",
    "logo": "https://bcem.edu.np/logo.jpeg",
    "description": "Premier college offering B.E. Civil Engineering and BBA programs in Nepalgunj, Nepal.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nepalgunj",
        "addressLocality": "Nepalgunj",
        "addressRegion": "Banke",
        "addressCountry": "NP"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+977-81-XXXXXX",
        "contactType": "Admissions",
        "areaServed": "NP",
        "availableLanguage": ["English", "Nepali"]
    },
    "sameAs": [
        "https://www.facebook.com/bcem",
        "https://www.instagram.com/bcem"
    ]
};

export const civilEngineeringSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Bachelor of Civil Engineering",
    "description": "4-year undergraduate program in Civil Engineering affiliated with Far-Western University.",
    "provider": {
        "@type": "EducationalOrganization",
        "name": "Bheri College of Engineering and Management",
        "sameAs": "https://bcem.edu.np"
    },
    "educationalLevel": "Undergraduate",
    "timeRequired": "P4Y",
    "courseCode": "BE-CIVIL"
};

export const bbaSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Bachelor of Business Administration",
    "description": "4-year undergraduate program in Business Administration affiliated with Far-Western University.",
    "provider": {
        "@type": "EducationalOrganization",
        "name": "Bheri College of Engineering and Management",
        "sameAs": "https://bcem.edu.np"
    },
    "educationalLevel": "Undergraduate",
    "timeRequired": "P4Y",
    "courseCode": "BBA"
};

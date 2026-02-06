export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Bheri College of Engineering and Management",
    "alternateName": "BCEM",
    "url": "https://bcem.vercel.app",
    "logo": "https://bcem.vercel.app/logo.jpeg",
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
        "telephone": "+977-81-534570",
        "contactType": "Admissions",
        "areaServed": "NP",
        "availableLanguage": ["English", "Nepali"],
        "email": "bcem2081@gmail.com"
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
        "sameAs": "https://bcem.vercel.app"
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
        "sameAs": "https://bcem.vercel.app"
    },
    "educationalLevel": "Undergraduate",
    "timeRequired": "P4Y",
    "courseCode": "BBA"
};

// LocalBusiness Schema for Local SEO
export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "Bheri College of Engineering and Management",
    "alternateName": "BCEM",
    "url": "https://bcem.vercel.app",
    "logo": "https://bcem.vercel.app/logo.jpeg",
    "image": "https://bcem.vercel.app/building/building.jpeg",
    "description": "Premier college offering B.E. Civil Engineering and BBA programs in Nepalgunj, Nepal, affiliated with Far-western University.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nepalgunj",
        "addressLocality": "Nepalgunj",
        "addressRegion": "Banke",
        "postalCode": "21900",
        "addressCountry": "NP"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.0505",
        "longitude": "81.6167"
    },
    "telephone": "+977-81-534570",
    "email": "bcem2081@gmail.com",
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "07:00",
            "closes": "17:00"
        }
    ],
    "sameAs": [
        "https://www.facebook.com/bcem",
        "https://www.instagram.com/bcem"
    ]
};

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Everest College of Engineering and Management",
    "alternateName": "ECEM",
    "url": "https://ecem-demo.vercel.app",
    "logo": "https://ecem-demo.vercel.app/logo.png",
    "description": "Premier college offering B.E. Civil Engineering and BBA programs in Nepal.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "College Road",
        "addressLocality": "Your City",
        "addressRegion": "Province",
        "addressCountry": "NP"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+977-XX-XXXXXX",
        "contactType": "Admissions",
        "areaServed": "NP",
        "availableLanguage": ["English", "Nepali"],
        "email": "info@ecem-demo.edu.np"
    },
    "sameAs": [
        "https://www.facebook.com/ecem",
        "https://www.instagram.com/ecem"
    ]
};

export const civilEngineeringSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Bachelor of Civil Engineering",
    "description": "4-year undergraduate program in Civil Engineering affiliated with National University.",
    "provider": {
        "@type": "EducationalOrganization",
        "name": "Everest College of Engineering and Management",
        "sameAs": "https://ecem-demo.vercel.app"
    },
    "educationalLevel": "Undergraduate",
    "timeRequired": "P4Y",
    "courseCode": "BE-CIVIL"
};

export const bbaSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Bachelor of Business Administration",
    "description": "4-year undergraduate program in Business Administration affiliated with National University.",
    "provider": {
        "@type": "EducationalOrganization",
        "name": "Everest College of Engineering and Management",
        "sameAs": "https://ecem-demo.vercel.app"
    },
    "educationalLevel": "Undergraduate",
    "timeRequired": "P4Y",
    "courseCode": "BBA"
};

// LocalBusiness Schema for Local SEO
export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "Everest College of Engineering and Management",
    "alternateName": "ECEM",
    "url": "https://ecem-demo.vercel.app",
    "logo": "https://ecem-demo.vercel.app/logo.png",
    "image": "https://ecem-demo.vercel.app/building/building.png",
    "description": "Premier college offering B.E. Civil Engineering and BBA programs in Nepal, affiliated with National University.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "College Road",
        "addressLocality": "Your City",
        "addressRegion": "Province",
        "postalCode": "00000",
        "addressCountry": "NP"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "27.7172",
        "longitude": "85.3240"
    },
    "telephone": "+977-XX-XXXXXX",
    "email": "info@ecem-demo.edu.np",
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "07:00",
            "closes": "17:00"
        }
    ],
    "sameAs": [
        "https://www.facebook.com/ecem",
        "https://www.instagram.com/ecem"
    ]
};

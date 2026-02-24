import React, { useEffect } from 'react';

const TermsOfUse = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const lastUpdated = "October 2026";

    return (
        <div className="pt-24 lg:pt-32 pb-16 lg:pb-24">
            {/* Header Section */}
            <div className="bg-navy text-white py-16 lg:py-20">
                <div className="container-custom">
                    <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                        Terms of Use
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl">
                        Please read these Terms of Use carefully before using our website and services.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container-custom mt-12">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12 prose prose-lg prose-blue">
                    <p className="text-gray-500 text-sm mb-8">
                        Last Updated: {lastUpdated}
                    </p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using the Bheri College of Engineering and Management (BCEM) website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>

                    <h2>2. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                    </p>

                    <h2>3. User Representations</h2>
                    <p>
                        By using the Site, you represent and warrant that:
                        (1) all registration information you submit will be true, accurate, current, and complete;
                        (2) you will maintain the accuracy of such information and promptly update such registration information as necessary;
                        (3) you have the legal capacity and you agree to comply with these Terms of Use.
                    </p>

                    <h2>4. Prohibited Activities</h2>
                    <p>
                        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </p>

                    <h2>5. Site Management</h2>
                    <p>
                        We reserve the right, but not the obligation, to:
                        (1) monitor the Site for violations of these Terms of Use;
                        (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use;
                        (3) refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof.
                    </p>

                    <h2>6. Contact Us</h2>
                    <p>
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        <br /><br />
                        Bheri College of Engineering and Management
                        <br />
                        Nepalgunj, Banke
                        <br />
                        Nepal
                        <br />
                        Email: bcem2081@gmail.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;

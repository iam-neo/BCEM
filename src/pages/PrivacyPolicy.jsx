import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
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
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl">
                        At Bheri College of Engineering and Management (BCEM), we are committed to protecting your personal information and your right to privacy.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container-custom mt-12">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12 prose prose-lg prose-blue">
                    <p className="text-gray-500 text-sm mb-8">
                        Last Updated: {lastUpdated}
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>
                        We collect personal information that you voluntarily provide to us when you register on our website, express an interest in obtaining information about us or our programs, or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use.
                    </p>

                    <h2>2. How We Use Your Information</h2>
                    <p>
                        We use personal information collected via our Website for a variety of academic and administrative purposes described below. We process your personal information for these purposes in reliance on our legitimate interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                    </p>
                    <ul>
                        <li>To facilitate account creation and logon process.</li>
                        <li>To send you educational and administrative information.</li>
                        <li>To fulfill and manage admissions or course registrations.</li>
                        <li>To respond to your inquiries and offer support.</li>
                    </ul>

                    <h2>3. Will Your Information Be Shared With Anyone?</h2>
                    <p>
                        We only share information with your consent, to comply with laws (such as the Ministry of Education directives), to provide you with services, to protect your rights, or to fulfill academic obligations.
                    </p>

                    <h2>4. How Long Do We Keep Your Information?</h2>
                    <p>
                        We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law (such as educational records, tax, accounting or other legal requirements).
                    </p>

                    <h2>5. How Do We Keep Your Information Safe?</h2>
                    <p>
                        We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
                    </p>

                    <h2>6. Contact Us</h2>
                    <p>
                        If you have questions or comments about this notice, you may email us at <strong>bcem2081@gmail.com</strong> or by post to:
                        <br /><br />
                        Bheri College of Engineering and Management
                        <br />
                        Nepalgunj, Banke
                        <br />
                        Nepal
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

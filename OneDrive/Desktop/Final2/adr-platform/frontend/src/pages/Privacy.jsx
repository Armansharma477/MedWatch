import React from 'react';
import { Shield, Lock, Eye, FileText, Users, Globe } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: `
        We collect information that you provide directly to us, including:

        • Personal Information: Name, email address, phone number, professional registration number (for HCPs)
        • Account Information: Login credentials, profile information, subscription details
        • Report Data: Drug names, symptoms, severity ratings, descriptions, and dates
        • Usage Data: How you interact with our platform, features used, and preferences
        • Device Information: IP address, browser type, operating system

        For patients: We collect minimal identifiable information and offer anonymous reporting options.

        For healthcare professionals: We verify professional credentials to ensure data quality.
      `,
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: `
        We use your information for the following purposes:

        • Processing and submitting ADR reports to CDSCO and other regulatory bodies
        • Creating user accounts and providing platform access
        • Sending notifications about report status, drug safety alerts, and platform updates
        • Analyzing trends to improve drug safety monitoring
        • Communicating with you about your reports and account
        • Complying with legal obligations and regulatory requirements
        • Preventing fraud and ensuring platform security

        We anonymize data before using it for research and analytics purposes.
      `,
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: `
        We share your information only in limited circumstances:

        • Regulatory Authorities: ADR reports are shared with CDSCO (Central Drugs Standard Control Organization) as required by law
        • Healthcare Partners: With your consent, reports may be shared with your healthcare provider
        • Service Providers: Trusted third parties who help us operate our platform (under strict confidentiality agreements)
        • Legal Requirements: When required by law, court order, or to protect our rights

        We do NOT sell your personal information to advertisers or data brokers.
      `,
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: `
        We implement comprehensive security measures to protect your data:

        • Encryption: All data is encrypted in transit (TLS 1.3) and at rest (AES-256)
        • Access Controls: Role-based access controls and multi-factor authentication
        • Regular Audits: Security audits and penetration testing conducted quarterly
        • Data Centers: Servers hosted in ISO 27001 certified facilities within India
        • Staff Training: All employees undergo data protection training
        • Incident Response: 24/7 security monitoring and rapid incident response

        Despite these measures, no internet transmission is 100% secure.
      `,
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: `
        Under Indian data protection laws, you have the following rights:

        • Right to Access: Request a copy of your personal data
        • Right to Correction: Update or correct inaccurate information
        • Right to Deletion: Request deletion of your account and data (subject to legal retention requirements)
        • Right to Portability: Export your data in a machine-readable format
        • Right to Object: Opt-out of certain data processing activities
        • Right to Withdraw Consent: Withdraw consent for data processing at any time

        To exercise these rights, contact us at privacy@medwatchindia.com
      `,
    },
    {
      icon: Globe,
      title: 'Data Retention',
      content: `
        We retain your data as follows:

        • ADR Reports: Retained indefinitely (as required by pharmacovigilance regulations)
        • Account Information: Retained while your account is active, deleted 2 years after closure
        • Usage Logs: Retained for 12 months for security purposes
        • Communication Records: Retained for 3 years

        Anonymized data used for research may be retained indefinitely.
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your privacy is our priority. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              Last Updated: April 16, 2026
            </p>
            <p className="text-gray-600 leading-relaxed">
              MedWatch India ("we", "us", "our") is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you
              use our adverse drug reaction reporting platform and related services (collectively, the "Services").
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              By using our Services, you agree to the collection and use of information in accordance
              with this policy. If you do not agree with our policies and practices, please do not use
              our Services.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={section.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>
                    <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Remember your login session</li>
              <li>Understand how you use our platform</li>
              <li>Improve site performance and user experience</li>
              <li>Maintain platform security</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              You can control cookies through your browser settings. Disabling cookies may affect
              certain features of our platform.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Services are not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13. If you are a parent or guardian and
              believe your child has provided us with personal information, please contact us immediately.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new policy on this page and updating the "Last Updated" date. We
              encourage you to review this Privacy Policy periodically.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please
              contact us:
            </p>
            <div className="mt-4 space-y-2 text-gray-600">
              <p><strong>Email:</strong> privacy@medwatchindia.com</p>
              <p><strong>Address:</strong> Plot No. 23, Sector 16, New Delhi - 110001, India</p>
              <p><strong>Phone:</strong> +91 11 2345 6789</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

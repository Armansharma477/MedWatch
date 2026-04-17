import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ClipboardList, Building2, Users, Bell, BarChart3, Shield, Zap, Globe } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'adr-reporting',
      icon: ClipboardList,
      title: 'ADR Reporting Tool',
      tagline: 'Report adverse drug reactions in under 5 minutes',
      description: 'Our flagship product makes it incredibly easy for anyone to report adverse drug reactions. With intelligent form validation, drug database integration, and multi-language support, reporting has never been simpler.',
      features: [
        'Guided step-by-step reporting process',
        'Auto-complete drug names from Indian pharmacopeia',
        'Severity classification with AI assistance',
        'Upload photos of affected areas or medications',
        'Track report status in real-time',
        'Available in Hindi, Tamil, Telugu, and more',
      ],
      benefits: [
        { title: 'For Patients', desc: 'Report side effects easily from your phone' },
        { title: 'For Doctors', desc: 'Quick reporting during patient consultations' },
        { title: 'For Pharmacists', desc: 'Report OTC drug reactions instantly' },
      ],
      color: 'primary',
      cta: 'Start Reporting',
      ctaLink: '/report',
      popular: true,
    },
    {
      id: 'healthcare-dashboard',
      icon: Building2,
      title: 'Healthcare Dashboard',
      tagline: 'Comprehensive management for hospitals and clinics',
      description: 'A powerful dashboard designed for healthcare institutions to manage ADR reports, track drug safety metrics, and ensure compliance with regulatory requirements.',
      features: [
        'Hospital-wide report tracking and analytics',
        'Department-level access controls',
        'Integration with EMR/HIS systems',
        'Automated regulatory submission to CDSCO',
        'Custom reporting and export tools',
        'Staff training and certification tracking',
      ],
      benefits: [
        { title: 'Compliance', desc: 'Meet CDSCO reporting requirements effortlessly' },
        { title: 'Efficiency', desc: 'Reduce administrative burden by 80%' },
        { title: 'Insights', desc: 'Identify drug safety trends in your facility' },
      ],
      color: 'secondary',
      cta: 'Request Demo',
      ctaLink: '/contact',
      popular: false,
    },
    {
      id: 'patient-portal',
      icon: Users,
      title: 'Patient Reporting Portal',
      tagline: 'Patient-friendly platform for side effect reporting',
      description: 'A dedicated portal designed specifically for patients to report adverse reactions without medical jargon. Simple language, visual guides, and empathetic design make the process stress-free.',
      features: [
        'Plain language explanations',
        'Visual symptom selector',
        'Anonymous reporting option',
        'Family account management',
        'Medication history tracking',
        'Educational resources on drug safety',
      ],
      benefits: [
        { title: 'Accessible', desc: 'No medical knowledge required' },
        { title: 'Private', desc: 'Your data is secure and confidential' },
        { title: 'Empowering', desc: 'Your voice helps improve drug safety' },
      ],
      color: 'primary',
      cta: 'Try Patient Portal',
      ctaLink: '/register',
      popular: false,
    },
    {
      id: 'safety-alerts',
      icon: Bell,
      title: 'Drug Safety Alerts',
      tagline: 'Real-time notifications about drug safety issues',
      description: 'Stay informed about drug recalls, black box warnings, and emerging safety concerns. Our alert system aggregates data from CDSCO, WHO, and FDA to keep you updated.',
      features: [
        'Instant notifications via SMS, email, and app',
        'Customizable alert preferences',
        'Drug-specific safety updates',
        'Recall notifications with batch numbers',
        'Integration with pharmacy inventory systems',
        'Historical safety data access',
      ],
      benefits: [
        { title: 'Timely', desc: 'Receive alerts as soon as they are issued' },
        { title: 'Relevant', desc: 'Only get alerts for drugs you prescribe or take' },
        { title: 'Comprehensive', desc: 'Global safety data in one place' },
      ],
      color: 'secondary',
      cta: 'Get Alerts',
      ctaLink: '/register',
      popular: false,
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Analytics Dashboard',
      tagline: 'Advanced analytics for researchers and regulators',
      description: 'Powerful analytics tools for pharmaceutical companies, researchers, and regulatory bodies to analyze ADR data, identify patterns, and generate insights for drug safety.',
      features: [
        'Advanced filtering and data segmentation',
        'Predictive analytics for emerging risks',
        'Comparative analysis across regions',
        'Automated signal detection algorithms',
        'Custom report generation',
        'Data export in multiple formats',
      ],
      benefits: [
        { title: 'Research', desc: 'Support pharmacovigilance research' },
        { title: 'Policy', desc: 'Inform evidence-based drug policies' },
        { title: 'Industry', desc: 'Support pharmaceutical R&D decisions' },
      ],
      color: 'primary',
      cta: 'View Pricing',
      ctaLink: '/payment',
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive pharmacovigilance solutions for patients, healthcare providers,
            and pharmaceutical organizations across India.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    {/* Popular badge */}
                    {product.popular && (
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </div>
                    )}

                    <div className={`w-16 h-16 bg-${product.color}-100 rounded-2xl flex items-center justify-center mb-6`}>
                      <product.icon className={`w-8 h-8 text-${product.color}-600`} />
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h2>
                    <p className={`text-${product.color}-600 font-medium mb-4`}>{product.tagline}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {[
                        { icon: Shield, text: 'Secure' },
                        { icon: Zap, text: 'Fast' },
                        { icon: Globe, text: 'Made for India' },
                      ].map((badge) => (
                        <div
                          key={badge.text}
                          className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full"
                        >
                          <badge.icon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{badge.text}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={product.ctaLink}
                      className={`btn-hover inline-flex items-center space-x-2 px-6 py-3 bg-${product.color}-600 text-white rounded-xl font-semibold`}
                    >
                      <span>{product.cta}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className={`bg-${product.color}-50 px-6 py-4 border-b border-${product.color}-100`}>
                      <h3 className={`font-semibold text-${product.color}-900`}>Key Features</h3>
                    </div>

                    <div className="p-6">
                      <ul className="space-y-3">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start space-x-3">
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-${product.color}-100 flex items-center justify-center mt-0.5`}>
                              <Check className={`w-3 h-3 text-${product.color}-600`} />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`mt-6 pt-6 border-t border-gray-100`}>
                        <h4 className="font-semibold text-gray-900 mb-4">Who Benefits</h4>
                        <div className="space-y-3">
                          {product.benefits.map((benefit) => (
                            <div key={benefit.title} className="flex items-center justify-between">
                              <span className="font-medium text-gray-700">{benefit.title}</span>
                              <span className="text-sm text-gray-500">{benefit.desc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plan Comparison</h2>
            <p className="text-gray-600">Choose the plan that fits your needs</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Free</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary-600">Premium</th>
                  <th className="text-center py-4 px-4 font-semibold text-secondary-600">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'ADR Reporting', free: '5/month', premium: 'Unlimited', enterprise: 'Unlimited' },
                  { feature: 'Report Storage', free: '1 year', premium: '5 years', enterprise: 'Lifetime' },
                  { feature: 'Analytics Dashboard', free: 'Basic', premium: 'Advanced', enterprise: 'Custom' },
                  { feature: 'Safety Alerts', free: 'Email', premium: 'Email + SMS', enterprise: 'All Channels' },
                  { feature: 'Support', free: 'Community', premium: 'Email', enterprise: '24/7 Phone' },
                  { feature: 'API Access', free: '—', premium: 'Limited', enterprise: 'Full Access' },
                  { feature: 'EMR Integration', free: '—', premium: '—', enterprise: 'Yes' },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-4 px-4 text-gray-700">{row.feature}</td>
                    <td className="text-center py-4 px-4 text-gray-600">{row.free}</td>
                    <td className="text-center py-4 px-4 text-gray-900 font-medium">{row.premium}</td>
                    <td className="text-center py-4 px-4 text-gray-900 font-medium">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Start Free
            </Link>
            <Link
              to="/payment"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              Upgrade to Premium
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary-600 text-white rounded-xl font-semibold hover:bg-secondary-700 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

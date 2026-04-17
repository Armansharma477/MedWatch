import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, AlertTriangle, BarChart3, Users, CheckCircle2, ClipboardList, HeartPulse, Activity } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20 pb-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-100 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <span className="flex h-2 w-2 rounded-full bg-secondary-500"></span>
                <span className="text-sm font-medium text-gray-600">Trusted by 10,000+ healthcare professionals</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Making Drug Safety
                <span className="gradient-text block">Reporting Simple</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Join India's leading pharmacovigilance platform. Report adverse drug reactions,
                track safety data, and help make medications safer for millions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="btn-hover inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/products"
                  className="btn-hover inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold text-lg border border-gray-200 hover:bg-gray-50"
                >
                  <span>Learn More</span>
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center"
                    >
                      <Users className="w-5 h-5 text-gray-500" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">25,000+</span> reports submitted
                </div>
              </div>
            </div>

            {/* Hero Image / Dashboard Preview */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-4">ADR Dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Reports', value: '2,847', change: '+12%' },
                      { label: 'Active Drugs', value: '1,234', change: '+5%' },
                      { label: 'Healthcare Partners', value: '456', change: '+8%' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-gray-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                        <div className="text-xs text-green-600">{stat.change}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Recent Reports</span>
                      <span className="text-xs text-primary-600">View All</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { drug: 'Paracetamol', status: 'Reviewed', color: 'green' },
                        { drug: 'Amoxicillin', status: 'Pending', color: 'yellow' },
                        { drug: 'Ibuprofen', status: 'Critical', color: 'red' },
                      ].map((item) => (
                        <div key={item.drug} className="flex items-center justify-between bg-white rounded p-2">
                          <span className="text-sm text-gray-700">{item.drug}</span>
                          <span className={`text-xs px-2 py-1 rounded-full bg-${item.color}-100 text-${item.color}-700`}>
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-red-50 text-red-700 rounded-lg text-sm font-medium">
                The Problem
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Under-reporting of ADRs in India
              </h2>
              <p className="text-lg text-gray-600">
                Only 3% of adverse drug reactions are reported in India compared to 90% in developed
                countries. This creates a significant gap in drug safety monitoring.
              </p>
              <ul className="space-y-4">
                {[
                  'Lack of awareness about reporting mechanisms',
                  'Complex and time-consuming reporting processes',
                  'No feedback or follow-up on submitted reports',
                  'Limited digital infrastructure in healthcare',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
                Our Solution
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Simplified, Digital-First Reporting
              </h2>
              <p className="text-lg text-gray-600">
                MedWatch India provides an intuitive platform that makes ADR reporting accessible to
                everyone - patients, doctors, nurses, and pharmacists.
              </p>
              <ul className="space-y-4">
                {[
                  'Simple 5-minute reporting process',
                  'Available in multiple Indian languages',
                  'Real-time tracking and status updates',
                  'Mobile-friendly for on-the-go reporting',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Everyone
            </h2>
            <p className="text-lg text-gray-600">
              Whether you're a patient who experienced a side effect or a healthcare professional
              managing multiple patients, we have tools for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ClipboardList,
                title: 'Easy ADR Reporting',
                description: 'Report adverse reactions in under 5 minutes with our guided form and auto-complete features.',
                color: 'primary',
              },
              {
                icon: BarChart3,
                title: 'Real-time Analytics',
                description: 'Track trends, view statistics, and identify potential drug safety issues as they emerge.',
                color: 'secondary',
              },
              {
                icon: Shield,
                title: 'Secure Data Handling',
                description: 'Your data is encrypted and stored securely. We comply with all Indian healthcare regulations.',
                color: 'primary',
              },
              {
                icon: Users,
                title: 'Multi-user Support',
                description: 'Patients, doctors, nurses, and pharmacists - each with tailored interfaces and capabilities.',
                color: 'secondary',
              },
              {
                icon: Activity,
                title: 'Drug Safety Alerts',
                description: 'Receive instant notifications about drug recalls and safety warnings from CDSCO.',
                color: 'primary',
              },
              {
                icon: HeartPulse,
                title: 'Healthcare Integration',
                description: 'Seamlessly integrate with hospital EMR systems and pharmacy management software.',
                color: 'secondary',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="card-hover bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '25,000+', label: 'ADR Reports' },
              { value: '10,000+', label: 'Healthcare Pros' },
              { value: '500+', label: 'Hospitals' },
              { value: '28', label: 'States Covered' },
            ].map((stat) => (
              <div key={stat.label} className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Healthcare Professionals Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by doctors, nurses, and pharmacists across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "MedWatch has transformed how we report ADRs at our hospital. The process is now 10x faster and our reporting rate has increased dramatically.",
                author: "Dr. Priya Sharma",
                role: "Head of Pharmacology, AIIMS Delhi",
                rating: 5,
              },
              {
                quote: "As a community pharmacist, I can now easily report adverse reactions I observe. The mobile app makes it convenient to report on the spot.",
                author: "Rahul Patel",
                role: "Senior Pharmacist, Mumbai",
                rating: 5,
              },
              {
                quote: "The analytics dashboard helps us identify patterns we never noticed before. It's an essential tool for drug safety monitoring.",
                author: "Dr. Ananya Gupta",
                role: "Clinical Researcher, Bangalore",
                rating: 5,
              },
            ].map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"​</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-700 font-semibold">{testimonial.author[0]}</span>
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Improve Drug Safety?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare professionals and patients making medications
              safer for everyone in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="btn-hover inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold text-lg"
              >
                <span>Start Reporting Free</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="btn-hover inline-flex items-center justify-center space-x-2 px-8 py-4 bg-transparent text-white rounded-xl font-semibold text-lg border-2 border-white hover:bg-white/10"
              >
                <span>Contact Sales</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

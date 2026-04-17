import React from 'react';
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Patient Safety First',
      description: 'Every decision we make prioritizes the safety and well-being of patients above all else.',
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'We believe everyone deserves access to safe medications, regardless of language or location.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in data security, accuracy, and regulatory compliance.',
    },
    {
      icon: Globe,
      title: 'Global Standards, Local Focus',
      description: 'We bring international pharmacovigilance best practices to the Indian healthcare context.',
    },
  ];

  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & CEO',
      bio: 'Former CDSCO official with 20+ years in drug safety regulation.',
      image: 'RK',
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Chief Medical Officer',
      bio: 'Pharmacologist with expertise in adverse event analysis.',
      image: 'PS',
    },
    {
      name: 'Amit Patel',
      role: 'CTO',
      bio: 'Tech veteran with experience building healthcare platforms at scale.',
      image: 'AP',
    },
    {
      name: 'Dr. Neha Gupta',
      role: 'Head of Research',
      bio: 'Leading pharmacovigilance research initiatives across India.',
      image: 'NG',
    },
    {
      name: 'Vikram Singh',
      role: 'VP of Operations',
      bio: 'Healthcare operations expert with focus on rural outreach.',
      image: 'VS',
    },
    {
      name: 'Anita Desai',
      role: 'Head of Partnerships',
      bio: 'Building relationships with hospitals and pharmaceutical companies.',
      image: 'AD',
    },
  ];

  const partners = [
    'All India Institute of Medical Sciences',
    'Christian Medical College, Vellore',
    'Tata Memorial Hospital',
    'Apollo Hospitals',
    'Fortis Healthcare',
    'Max Healthcare',
    'Manipal Hospitals',
    'Narayana Health',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About MedWatch India</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Building a safer future for healthcare in India through technology-enabled
            pharmacovigilance and community engagement.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-primary-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To reduce under-reporting of adverse drug reactions in India by making the reporting
                process simple, accessible, and rewarding. We aim to empower patients and healthcare
                professionals to contribute to drug safety, ultimately preventing harm and saving lives.
              </p>
              <div className="mt-6 pt-6 border-t border-primary-200">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-primary-600">3%</div>
                  <div className="text-sm text-gray-600">
                    Current ADR reporting rate in India
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="text-3xl font-bold text-secondary-600">90%</div>
                  <div className="text-sm text-gray-600">
                    Target reporting rate in developed countries
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-secondary-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A future where every adverse drug reaction in India is reported, analyzed, and acted upon.
                We envision a healthcare ecosystem where patients and providers collaborate seamlessly to
                ensure medication safety, where data-driven insights prevent adverse events before they occur.
              </p>
              <div className="mt-6 pt-6 border-t border-secondary-200">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-secondary-600">2030</div>
                  <div className="text-sm text-gray-600">
                    Target: 50% ADR reporting coverage across India
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="text-3xl font-bold text-primary-600">28</div>
                  <div className="text-sm text-gray-600">
                    States and UTs we aim to cover
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  MedWatch India was born from a simple observation: despite having one of the world's
                  largest pharmaceutical industries and a massive patient population, India's adverse drug
                  reaction reporting rate remained abysmally low at just 3%.
                </p>
                <p>
                  In 2022, Dr. Rajesh Kumar, after spending two decades at CDSCO witnessing the gap
                  between regulatory requirements and ground reality, decided to build a solution. He
                  teamed up with Amit Patel, a technology veteran, to create a platform that would make
                  ADR reporting as simple as sending a WhatsApp message.
                </p>
                <p>
                  Today, MedWatch India serves over 10,000 healthcare professionals and has processed
                  more than 25,000 adverse drug reaction reports. We've partnered with major hospital
                  chains, integrated with EMR systems, and most importantly, we've empowered thousands
                  of patients to speak up about side effects.
                </p>
                <p>
                  But this is just the beginning. Our goal is to reach every corner of India, to ensure
                  that no adverse reaction goes unreported, and to make India a global leader in
                  pharmacovigilance.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Milestones</h3>
              <div className="space-y-6">
                {[
                  { year: '2022', event: 'MedWatch India founded in New Delhi' },
                  { year: '2023', event: 'Launched pilot with 50 hospitals' },
                  { year: '2023', event: 'Reached 10,000 registered users' },
                  { year: '2024', event: 'Expanded to 10 states across India' },
                  { year: '2024', event: 'Partnered with CDSCO for data sharing' },
                  { year: '2025', event: 'Processing 1,000+ reports monthly' },
                ].map((milestone, index) => (
                  <div key={milestone.year} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-20 text-sm font-semibold text-primary-600 pt-1">
                      {milestone.year}
                    </div>
                    <div className="flex-grow pb-6 border-l-2 border-gray-200 pl-4 last:border-0">
                      <div className="w-3 h-3 bg-primary-500 rounded-full -ml-[21px] mt-1.5"></div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600">Passionate individuals dedicated to drug safety in India</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">{member.image}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 font-medium text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-gray-600">Working with leading healthcare institutions across India</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-gray-50 rounded-xl p-6 flex items-center justify-center h-24 hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-600 font-medium text-center text-sm">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

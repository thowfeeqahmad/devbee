import React from 'react';
import { Code, Smartphone, Brain, Cloud, Database, Shield, Zap, Users } from 'lucide-react';
]import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-yellow-600" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Vue, and Angular. We create responsive, fast, and user-friendly websites that drive engagement and conversions.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Cross-browser Compatibility']
    },
    {
      icon: <Smartphone className="w-12 h-12 text-yellow-600" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. From concept to deployment, we build apps that users love and businesses rely on.',
      features: ['Native iOS & Android', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications']
    },
    {
      icon: <Brain className="w-12 h-12 text-yellow-600" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that automate processes and provide valuable insights. We implement AI technologies to give your business a competitive edge.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automation Solutions']
    },
    {
      icon: <Cloud className="w-12 h-12 text-yellow-600" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services. We help you leverage the power of cloud computing for better performance and cost efficiency.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps Implementation', 'Monitoring & Maintenance']
    },
    {
      icon: <Database className="w-12 h-12 text-yellow-600" />,
      title: 'Database Solutions',
      description: 'Robust database design and optimization services. We ensure your data is secure, accessible, and performs at scale.',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup & Recovery']
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-600" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets. We implement best practices to keep your systems and data safe.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Solutions', 'Incident Response']
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs that enable seamless integration between systems. We build scalable APIs that power modern applications.',
      features: ['RESTful APIs', 'GraphQL Implementation', 'API Documentation', 'Rate Limiting & Security']
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-600" />,
      title: 'Consulting Services',
      description: 'Strategic technology consulting to help you make informed decisions. Our experts guide you through digital transformation.',
      features: ['Technology Strategy', 'Architecture Review', 'Code Audits', 'Team Training']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-yellow-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development services tailored to meet your business needs. 
              From web applications to AI solutions, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-600">We analyze your requirements and define project scope and objectives.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-600">We create detailed project plans, timelines, and technical specifications.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Development</h3>
              <p className="text-gray-600">Our team builds your solution using agile methodologies and best practices.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Delivery</h3>
              <p className="text-gray-600">We deploy your solution and provide ongoing support and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and see how our services can help you achieve your business goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
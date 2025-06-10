import React from 'react';
import { Code2, Palette, Server, Smartphone, Brain, Shield, Database, Globe } from 'lucide-react';

const Expertise = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: <Code2 className="w-8 h-8 text-yellow-600" />,
      skills: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js', 'Tailwind CSS', 'SASS/SCSS', 'Webpack']
    },
    {
      category: 'Backend',
      icon: <Server className="w-8 h-8 text-yellow-600" />,
      skills: ['Node.js', 'Python', 'Java', 'C#', 'PHP', 'Ruby', 'Go', 'Express.js']
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-8 h-8 text-yellow-600" />,
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic', 'PhoneGap', 'Unity']
    },
    {
      category: 'Database',
      icon: <Database className="w-8 h-8 text-yellow-600" />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Firebase', 'DynamoDB', 'Oracle']
    },
    {
      category: 'Cloud & DevOps',
      icon: <Globe className="w-8 h-8 text-yellow-600" />,
      skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform']
    },
    {
      category: 'AI & ML',
      icon: <Brain className="w-8 h-8 text-yellow-600" />,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Computer Vision', 'NLP', 'Deep Learning', 'MLOps']
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'HIPAA-compliant solutions for medical practices, hospitals, and health tech startups.',
      projects: '50+ Projects'
    },
    {
      name: 'E-commerce',
      description: 'Scalable online stores and marketplace platforms with advanced features.',
      projects: '75+ Projects'
    },
    {
      name: 'Finance',
      description: 'Secure fintech applications, trading platforms, and banking solutions.',
      projects: '40+ Projects'
    },
    {
      name: 'Education',
      description: 'Learning management systems, educational apps, and e-learning platforms.',
      projects: '60+ Projects'
    },
    {
      name: 'Real Estate',
      description: 'Property management systems, listing platforms, and virtual tour applications.',
      projects: '35+ Projects'
    },
    {
      name: 'Manufacturing',
      description: 'IoT solutions, inventory management, and production optimization systems.',
      projects: '25+ Projects'
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional',
    'Microsoft Azure Expert',
    'Certified Kubernetes Administrator',
    'Scrum Master Certified',
    'ISO 27001 Security Certified'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-yellow-600">Expertise</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep technical knowledge across modern technologies and industries. 
              We stay at the forefront of innovation to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team masters the latest technologies and frameworks to build robust, scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {tech.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{tech.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have extensive experience across various industries, understanding unique challenges and requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="text-yellow-600 font-semibold">{industry.projects}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team holds industry-recognized certifications ensuring we follow best practices and standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-yellow-50 p-4 rounded-lg">
                <Shield className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow industry best practices and proven methodologies to ensure project success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Agile Methodology</h3>
              <p className="text-gray-600">Iterative development with regular feedback and continuous improvement.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security First</h3>
              <p className="text-gray-600">Built-in security measures and compliance with industry standards.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Architecture</h3>
              <p className="text-gray-600">Future-proof solutions that grow with your business needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Centric Design</h3>
              <p className="text-gray-600">Intuitive interfaces designed with user experience in mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
            Ready to leverage our expertise for your next project? Let's discuss how we can help you succeed.
          </p>
          <a
            href="/contact"
            className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
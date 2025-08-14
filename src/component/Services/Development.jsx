import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import local images
import webDesignIllustration from '../../assets/two.png';
import webAppIllustration from '../../assets/two.png';
import featureImage1 from '../../assets/two.png';
import featureImage2 from '../../assets/two.png';
import featureImage3 from '../../assets/two.png';
import JobDriveBanner from '../MovingDots/dot';


// Icons (using Heroicons)
const CustomDesignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

const ResponsiveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const SEOIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
  </svg>
);

const SecurityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const PerformanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const cardHover = {
  hover: { 
    y: -5,
    transition: { 
      type: "spring", 
      stiffness: 300 
    } 
  }
};

// Reusable components
const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
    variants={item}
    whileHover="hover"
    initial="hidden"
    animate="show"
  >
    <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const SectionHeader = ({ title, subtitle, center = false }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
    {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

export default function WebSolutionsPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Simplified without image */}
      <section className="relative h-screen bg-gradient-to-r from-gray-900 to-emerald-900">
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Modern Web Solutions for <span className="text-emerald-400">Your Business</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We design and develop high-performance websites and web applications that drive results.
              </p>
              <div className="flex gap-4 justify-center">
                <motion.button 
            className="bg-white hover:bg-gray-100 text-emerald-800 font-medium py-3 px-8 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
          </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
         <JobDriveBanner />
        
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Our Web Solutions" 
            subtitle="Comprehensive digital solutions tailored to your business needs" 
            center
          />
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item} className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website Development</h3>
                <p className="text-gray-600 mb-6">
                  Beautiful, high-converting websites designed to showcase your brand and engage your audience.
                </p>
                <ul className="space-y-3">
                  {['Custom designs', 'Mobile-first approach', 'SEO optimized', 'Fast performance'].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img 
                src={webDesignIllustration} 
                alt="Website development" 
                className="w-full h-64 object-cover"
              />
            </motion.div>

            <motion.div variants={item} className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Applications</h3>
                <p className="text-gray-600 mb-6">
                  Custom web applications that solve business challenges and streamline operations.
                </p>
                <ul className="space-y-3">
                  {['Custom business logic', 'Database integration', 'User authentication', 'API connections'].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img 
                src={webAppIllustration} 
                alt="Web application development" 
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Website Features */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Website Development Features" 
            subtitle="We build websites that perform" 
            center
          />
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <FeatureCard 
              icon={<CustomDesignIcon />}
              title="Custom Design"
              description="Tailored to your brand with unique visuals that stand out from competitors."
            />
            <FeatureCard 
              icon={<ResponsiveIcon />}
              title="Fully Responsive"
              description="Perfectly adapted for all devices from desktop to mobile."
            />
            <FeatureCard 
              icon={<SEOIcon />}
              title="SEO Optimized"
              description="Built with search engine visibility in mind from the start."
            />
            <FeatureCard 
              icon={<PerformanceIcon />}
              title="Blazing Fast"
              description="Optimized for speed to keep visitors engaged."
            />
            <FeatureCard 
              icon={<DatabaseIcon />}
              title="CMS Integration"
              description="Easy content management with WordPress or other platforms."
            />
            <FeatureCard 
              icon={<SecurityIcon />}
              title="Secure"
              description="HTTPS, security headers, and regular updates included."
            />
          </motion.div>
        </div>
      </section>

      {/* Web App Features */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Web Application Capabilities" 
            subtitle="Powerful solutions for complex business needs" 
            center
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Process Automation</h3>
              <p className="text-gray-600 mb-6">
                Streamline operations with custom applications that automate repetitive tasks and reduce errors.
              </p>
              
              <div className="space-y-4">
                {[
                  "Workflow management systems",
                  "Inventory and order processing",
                  "Custom CRM solutions",
                  "Data collection and reporting"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer-Facing Applications</h3>
              <p className="text-gray-600 mb-6">
                Create powerful tools for your customers that enhance engagement and provide value.
              </p>
              
              <div className="space-y-4">
                {[
                  "Member portals and dashboards",
                  "E-learning platforms",
                  "Interactive service tools",
                  "Real-time collaboration"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your digital presence?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Whether you need a stunning website or a powerful web application, we have the expertise to bring your vision to life.
          </p>
          <motion.button 
            className="bg-white hover:bg-gray-100 text-emerald-800 font-medium py-3 px-8 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
          </motion.button>
        </div>
      </section>
    </div>
  );
}
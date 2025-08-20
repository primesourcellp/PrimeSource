import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import local images
import webDesignIllustration from '../../assets/two.png';
import webAppIllustration from '../../assets/two.png';
import mobileAppIllustration from '../../assets/two.png';
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

const MobileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const AppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } }
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardHover = {
  hover: { 
    y: -8,
    transition: { 
      type: "spring", 
      stiffness: 300 
    } 
  }
};

// Reusable components
const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/30 hover:shadow-md transition-all"
    variants={item}
    whileHover="hover"
    initial="hidden"
    animate="show"
  >
    <div className="w-12 h-12 rounded-lg bg-emerald-100/50 text-emerald-700 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

const ServiceCard = ({ icon, title, description, features, image, reverse = false }) => (
  <motion.div 
    className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm border border-white/30 p-1 mb-12`}
    variants={item}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
  >
    <div className="md:w-1/2 p-8">
      <div className="w-14 h-14 rounded-xl bg-emerald-100/50 text-emerald-700 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <svg className="w-5 h-5 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="md:w-1/2">
      <motion.img 
        src={image} 
        alt={title} 
        className="w-full h-72 object-cover rounded-xl"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  </motion.div>
);

const SectionHeader = ({ title, subtitle, center = false }) => (
  <motion.div 
    className={`mb-12 ${center ? 'text-center' : ''}`}
    variants={fadeIn}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
    {subtitle && <p className="text-lg text-gray-700 max-w-3xl mx-auto">{subtitle}</p>}
  </motion.div>
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
    <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-70 md:py-70 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Modern <span className="text-emerald-600">Digital Solutions</span> for Your Business
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We design and develop high-performance websites, web applications, and mobile apps that drive results.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              <motion.button 
                className="bg-white/90 hover:bg-white text-emerald-600 border border-emerald-600 font-medium py-3 px-8 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        <JobDriveBanner />
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Our Digital Solutions" 
            subtitle="Comprehensive services tailored to your business needs" 
            center
          />
          
          <motion.div 
            className="space-y-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ServiceCard 
              icon={<CustomDesignIcon />}
              title="Website Development"
              description="Beautiful, high-converting websites designed to showcase your brand and engage your audience."
              features={['Custom designs', 'Mobile-first approach', 'SEO optimized', 'Fast performance']}
              image={webDesignIllustration}
            />
            
            <ServiceCard 
              icon={<AppIcon />}
              title="Web Application Development"
              description="Custom web applications that solve business challenges and streamline operations."
              features={['Custom business logic', 'Database integration', 'User authentication', 'API connections']}
              image={webAppIllustration}
              reverse={true}
            />
            
            <ServiceCard 
              icon={<MobileIcon />}
              title="Mobile Application Development"
              description="Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences."
              features={['iOS & Android development', 'Cross-platform solutions', 'App store optimization', 'Push notifications']}
              image={mobileAppIllustration}
            />
          </motion.div>
        </div>
        
      </section>

      {/* Website Features */}
      <section className="py-20 px-6 lg:px-8">
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
            viewport={{ once: true, margin: "-100px" }}
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
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Web Application Capabilities" 
            subtitle="Powerful solutions for complex business needs" 
            center
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={slideIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Process Automation</h3>
              <p className="text-gray-700 mb-6">
                Streamline operations with custom applications that automate repetitive tasks and reduce errors.
              </p>
              
              <div className="space-y-4">
                {[
                  "Workflow management systems",
                  "Inventory and order processing",
                  "Custom CRM solutions",
                  "Data collection and reporting"
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-emerald-100/70 flex items-center justify-center">
                        <svg className="w-3 h-3 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={slideIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer-Facing Applications</h3>
              <p className="text-gray-700 mb-6">
                Create powerful tools for your customers that enhance engagement and provide value.
              </p>
              
              <div className="space-y-4">
                {[
                  "Member portals and dashboards",
                  "E-learning platforms",
                  "Interactive service tools",
                  "Real-time collaboration"
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-emerald-100/70 flex items-center justify-center">
                        <svg className="w-3 h-3 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-emerald-100/50 to-cyan-100/50 rounded-3xl mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto">
            
          <SectionHeader 
            title="Mobile Application Development" 
            subtitle="Reach your audience on any device with native and cross-platform solutions" 
            center
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">iOS & Android Development</h3>
              <p className="text-gray-700 mb-6">
                We create mobile experiences that feel native to each platform while maintaining a consistent brand identity.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/30">
                  <h4 className="font-semibold text-gray-900 mb-2">iOS Apps</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Swift & Objective-C</li>
                    <li>• Apple Design Guidelines</li>
                    <li>• App Store Optimization</li>
                    <li>• iPhone & iPad Support</li>
                  </ul>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/30">
                  <h4 className="font-semibold text-gray-900 mb-2">Android Apps</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Kotlin & Java</li>
                    <li>• Material Design</li>
                    <li>• Google Play Optimization</li>
                    <li>• Multi-device Support</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-200/40 rounded-3xl blur-lg opacity-70"></div>
                <img 
                  src={mobileAppIllustration} 
                  alt="Mobile app development" 
                  className="relative rounded-2xl shadow-lg w-full max-w-md"
                />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-4xl mx-4 lg:mx-8 mt-12 mb-6 ">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to transform your digital presence?
          </motion.h2>
          <motion.p 
            className="text-xl text-emerald-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you need a stunning website, a powerful web application, or a mobile app, we have the expertise to bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-white hover:bg-gray-100 text-emerald-800 font-medium py-3 px-8 rounded-lg transition-colors mr-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
            <motion.button 
              className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-8 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}
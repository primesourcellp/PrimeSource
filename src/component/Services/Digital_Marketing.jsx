import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import local images (replace with your actual images)
import seoImage from '../../assets/five.png';
import socialMediaImage from '../../assets/five.png';
import semImage from '../../assets/five.png';
import contentImage from '../../assets/five.png';
import analyticsImage from '../../assets/five.png';
import strategyImage from '../../assets/five.png';
import digitalMarketingHero from '../../assets/five.png';

// Icons
const SeoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const SocialIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const SemIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ContentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const StrategyIcon = () => (
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
      staggerChildren: 0.2
    }
  }
};

const itemFromLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

const itemFromRight = {
  hidden: { opacity: 0, x: 100 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

const itemFromTop = {
  hidden: { opacity: 0, y: -100 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

const itemFromBottom = {
  hidden: { opacity: 0, y: 100 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      duration: 0.8 
    } 
  }
};

// Reusable components
const ServiceCard = ({ icon, title, description, features, image, animationDirection }) => {
  let animationVariant;
  switch(animationDirection) {
    case 'left':
      animationVariant = itemFromLeft;
      break;
    case 'right':
      animationVariant = itemFromRight;
      break;
    case 'top':
      animationVariant = itemFromTop;
      break;
    case 'bottom':
      animationVariant = itemFromBottom;
      break;
    default:
      animationVariant = fadeIn;
  }
  
  return (
    <motion.div 
      className="flex flex-col md:flex-row gap-8 items-center bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm border border-white/30 p-1 mb-16 max-w-full"
      variants={animationVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="md:w-1/2 p-6 md:p-8 w-full">
        <div className="w-14 h-14 rounded-xl bg-blue-100/50 text-blue-700 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 w-full px-4 md:px-0">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-64 md:h-72 object-contain rounded-xl"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, description, animationDirection }) => {
  let animationVariant;
  switch(animationDirection) {
    case 'left':
      animationVariant = itemFromLeft;
      break;
    case 'right':
      animationVariant = itemFromRight;
      break;
    case 'top':
      animationVariant = itemFromTop;
      break;
    case 'bottom':
      animationVariant = itemFromBottom;
      break;
    default:
      animationVariant = fadeIn;
  }
  
  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/30 hover:shadow-md transition-all h-full max-w-full"
      variants={animationVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="w-12 h-12 rounded-lg bg-blue-100/50 text-blue-700 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

const SectionHeader = ({ title, subtitle, center = false }) => (
  <motion.div 
    className={`mb-12 ${center ? 'text-center' : ''} px-4`}
    variants={fadeIn}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
    {subtitle && <p className="text-lg text-gray-700 max-w-3xl mx-auto">{subtitle}</p>}
  </motion.div>
);

export default function DigitalMarketingPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen overflow-x-hidden">
      {/* Hero Section - Fixed responsive issues */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 md:py-40 grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Text Content - Animated from left */}
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Amplify Your <span className="text-blue-600">Digital Presence</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive digital marketing solutions to grow your brand, engage your audience, and drive conversions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 md:px-8 rounded-lg transition-colors text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button 
                className="bg-white/90 hover:bg-white text-blue-600 border border-blue-600 font-medium py-3 px-6 md:px-8 rounded-lg transition-colors text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 md:gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { label: "SEO", color: "bg-blue-500" },
                { label: "SMM", color: "bg-cyan-500" },
                { label: "SEM", color: "bg-teal-500" },
                { label: "Content", color: "bg-emerald-500" }
              ].map((item, index) => (
                <motion.span 
                  key={index}
                  className="inline-flex items-center text-sm font-medium text-gray-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                >
                  <span className={`w-2 h-2 rounded-full ${item.color} mr-2`}></span>
                  {item.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Image Content - Animated from right with floating effect */}
          <motion.div
            className="relative mt-8 md:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute -inset-2 md:-inset-4 bg-blue-200/30 rounded-3xl blur-xl"></div>
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex justify-center"
            >
              <img 
                src={digitalMarketingHero} 
                alt="Digital Marketing" 
                className="relative rounded-2xl shadow-lg w-full max-w-md mx-auto"
              />
            </motion.div>
            
            {/* Floating elements around the image */}
            <motion.div
              className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-xl shadow-md border border-white/30"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-xl shadow-md border border-white/30"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.05, rotate: -5 }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 -right-4 md:-right-8 bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-xl shadow-md border border-white/30"
              initial={{ opacity: 0, scale: 0.5, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader 
            title="Our Digital Marketing Services" 
            subtitle="Comprehensive strategies to grow your online presence and drive measurable results" 
            center
          />
          
          <motion.div 
            className="space-y-12 md:space-y-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ServiceCard 
              icon={<SeoIcon />}
              title="Search Engine Optimization (SEO)"
              description="Improve your website's visibility in search engines and drive organic traffic with our comprehensive SEO strategies."
              features={[
                'Keyword research & analysis',
                'On-page optimization',
                'Technical SEO audits',
                'Content strategy development',
                'Local SEO optimization',
                'Performance tracking & reporting'
              ]}
              image={seoImage}
              animationDirection="left"
            />
            
            <ServiceCard 
              icon={<SocialIcon />}
              title="Social Media Marketing (SMM)"
              description="Build brand awareness, engage with your audience, and drive conversions through strategic social media campaigns."
              features={[
                'Social media strategy development',
                'Content creation & curation',
                'Community management',
                'Paid social advertising',
                'Influencer partnerships',
                'Performance analytics & reporting'
              ]}
              image={socialMediaImage}
              animationDirection="right"
            />
            
            <ServiceCard 
              icon={<SemIcon />}
              title="Search Engine Marketing (SEM)"
              description="Drive immediate traffic and conversions with targeted paid search campaigns across search engines."
              features={[
                'PPC campaign management',
                'Keyword research & bidding strategy',
                'Ad copy creation & testing',
                'Landing page optimization',
                'Conversion rate optimization',
                'ROI tracking & optimization'
              ]}
              image={semImage}
              animationDirection="left"
            />
            
            <ServiceCard 
              icon={<ContentIcon />}
              title="Content Marketing"
              description="Create valuable, relevant content to attract and retain your target audience and drive profitable customer action."
              features={[
                'Content strategy development',
                'Blog post creation',
                'Video content production',
                'Infographic design',
                'Email newsletter campaigns',
                'Content performance analysis'
              ]}
              image={contentImage}
              animationDirection="right"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-3xl mx-2 md:mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader 
            title="Our Strategic Approach" 
            subtitle="A data-driven process that delivers measurable results" 
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/30"
              variants={itemFromTop}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">01</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Research & Analysis</h3>
              <p className="text-gray-700">We begin by thoroughly understanding your business, audience, and competitors to develop effective strategies.</p>
            </motion.div>
            
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/30"
              variants={itemFromTop}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">02</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategy Development</h3>
              <p className="text-gray-700">We create customized digital marketing strategies aligned with your business goals and target audience.</p>
            </motion.div>
            
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/30"
              variants={itemFromTop}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">03</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-700">Our team executes the strategy with precision, ensuring all elements work together seamlessly.</p>
            </motion.div>
            
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/30"
              variants={itemFromBottom}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">04</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimization</h3>
              <p className="text-gray-700">We continuously monitor performance and make data-driven adjustments to improve results.</p>
            </motion.div>
            
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/30"
              variants={itemFromBottom}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">05</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reporting</h3>
              <p className="text-gray-700">Transparent reporting keeps you informed about campaign performance and ROI.</p>
            </motion.div>
            
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/30"
              variants={itemFromBottom}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">06</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scaling</h3>
              <p className="text-gray-700">We identify successful strategies and scale them to maximize your marketing impact.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader 
            title="Additional Marketing Services" 
            subtitle="Complementary services to enhance your digital marketing efforts" 
            center
          />
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <FeatureCard 
              icon={<AnalyticsIcon />}
              title="Analytics & Reporting"
              description="Gain valuable insights into your marketing performance with comprehensive analytics and detailed reporting."
              animationDirection="left"
            />
            <FeatureCard 
              icon={<StrategyIcon />}
              title="Marketing Strategy"
              description="Develop a comprehensive digital marketing roadmap aligned with your business objectives."
              animationDirection="top"
            />
            <FeatureCard 
              icon={<ContentIcon />}
              title="Email Marketing"
              description="Nurture leads and engage customers with targeted email campaigns that drive conversions."
              animationDirection="right"
            />
            <FeatureCard 
              icon={<SeoIcon />}
              title="Conversion Rate Optimization"
              description="Improve your website's ability to convert visitors into customers through data-driven optimization."
              animationDirection="left"
            />
            <FeatureCard 
              icon={<SocialIcon />}
              title="Influencer Marketing"
              description="Leverage the power of influencers to expand your reach and build brand credibility."
              animationDirection="bottom"
            />
            <FeatureCard 
              icon={<SemIcon />}
              title="Remarketing Campaigns"
              description="Re-engage visitors who didn't convert with targeted ads across multiple platforms."
              animationDirection="right"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-3xl mx-2 md:mx-4 lg:mx-8 mt-8 md:mt-12">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to transform your digital marketing?
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-blue-100 mb-8 px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's work together to create a customized digital marketing strategy that drives growth and delivers measurable results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              className="bg-white hover:bg-gray-100 text-blue-800 font-medium py-3 px-6 md:px-8 rounded-lg transition-colors text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
            <motion.button 
              className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-6 md:px-8 rounded-lg transition-colors text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Portfolio
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
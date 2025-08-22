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

// Enhanced Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { 
    opacity: 0, 
    y: 40,
    transition: { duration: 0.5 }
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      duration: 0.9,
      ease: "easeOut"
    } 
  }
};

const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -100,
    transition: { duration: 0.6 }
  },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  }
};

const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 100,
    transition: { duration: 0.6 }
  },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  }
};

const slideInTop = {
  hidden: { 
    opacity: 0, 
    y: -60,
    transition: { duration: 0.6 }
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  }
};

const slideInBottom = {
  hidden: { 
    opacity: 0, 
    y: 60,
    transition: { duration: 0.6 }
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  }
};

const scaleUp = {
  hidden: { 
    opacity: 0, 
    scale: 0.85,
    transition: { duration: 0.6 }
  },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94],
    } 
  }
};

const cardHover = {
  hover: { 
    y: -12,
    scale: 1.02,
    transition: { 
      type: "spring", 
      stiffness: 300,
      damping: 15
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
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
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
className={`flex flex-col lg:flex-row items-center gap-12 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
    variants={reverse ? slideInRight : slideInLeft}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
  >
    {/* Image */}
    <motion.div 
      className="lg:w-1/2 w-full flex justify-center"
      variants={scaleUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.3 }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-4/5 lg:w-3/4 rounded-2xl shadow-lg"
      />
    </motion.div>

    {/* Content */}
    <motion.div 
      className="lg:w-1/2 w-full"
      variants={reverse ? slideInLeft : slideInRight}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-lg bg-emerald-100/50 text-emerald-700 flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {features.map((feature, index) => (
          <motion.li 
            key={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

const SectionHeader = ({ title, subtitle, center = false }) => (
  <motion.div 
className={`mb-12 ${center ? 'text-center' : ''}`}
    variants={slideInTop}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <motion.h2 
      className="text-3xl font-bold text-gray-900 mb-3"
      variants={slideInTop}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        className="text-lg text-gray-700 max-w-3xl mx-auto"
        variants={slideInBottom}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

export default function WebSolutionsPage() {
 

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0.5, 0.7],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="absolute top-40 right-10 w-72 h-72 bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          ></motion.div>
          <motion.div 
            className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-200/40 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.4, 0.7],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          ></motion.div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-70 md:py-70 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Modern <span className="text-emerald-600">Digital Solutions</span> for Your Business
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              We design and develop high-performance websites, web applications, and mobile apps that drive results.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -10px rgba(5, 150, 105, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project Today
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
            className="space-y-24"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ServiceCard 
              icon={<AppIcon />}
              title="Website Development"
              description="At Primesource, we design and develop websites that go beyond aesthetics — we create digital platforms that connect, engage, and convert. In today's competitive market, your website is the first impression of your brand, and we make sure it is powerful, user-friendly, and future-ready. Our website development services combine creativity, technology, and strategy to deliver solutions that help businesses establish a strong online presence and achieve measurable results. "
              features={['Custom designs', 'SEO optimized', 'Fast performance', 'Mobile-first approach','Website Maintenance and Support']}
              image={webDesignIllustration}
              reverse={true}
            />

            <ServiceCard 
              icon={<MobileIcon />}
              title="Web Application Development"
              description="At Primesource, we create web applications that are robust, scalable, and user-friendly designed to help businesses succeed in the digital era. From simple tools to complex enterprise platforms, our solutions combine cutting-edge technology with creative problem-solving, ensuring applications that are both functional and visually engaging."
              features={['Custom business logic', 'Database integration', 'User authentication', 'API connections','Cloud Platforms']}
              image={webAppIllustration}
              reverse={false}
            />

            <ServiceCard 
              icon={<MobileIcon />}
              title="Mobile Application Development"
              description="At Primesource, we specialize in building powerful mobile applications for Android and iOS platforms that deliver functionality, performance, and exceptional user experience. In today's mobile-first world, apps are more than just tools — they are gateways that connect businesses with customers, enhance engagement, and drive growth. Our mobile app development services are designed to help organizations bring their ideas to life with innovative, secure, and scalable solutions."
              features={['iOS & Android App development', 'Custom Mobile App Development', 'App Maintenance, Support, and Upgrades', 'Cross-Platform and Hybrid App Development']}
              image={mobileAppIllustration}
              reverse={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Website Features */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Building Digital Experiences That Inspire" 
            subtitle="At Primesource, we design and develop websites that go beyond aesthetics — we create digital platforms that connect, engage, and convert."
            center
          />

          <motion.div 
            className="space-y-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Custom Website Development */}
            <motion.div 
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white/50 p-8 rounded-2xl backdrop-blur-sm border border-white/30"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Website Development</h3>
              <p className="text-gray-700 mb-4">
                Every business is unique, and your website should reflect that. At Primesource, we craft custom websites tailored to your brand identity, industry, and customer expectations. Our team focuses on clean design, intuitive navigation, and scalable structures to ensure your site stands out and grows with your business. From concept to launch, we deliver websites that not only look great but also function seamlessly across all devices.
              </p>
            </motion.div>

            {/* E-Commerce Development */}
            <motion.div 
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/50 p-8 rounded-2xl backdrop-blur-sm border border-white/30"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce Development</h3>
              <p className="text-gray-700 mb-4">
                In the digital age, online shopping has become the backbone of many businesses. We help companies launch and scale e-commerce platforms that deliver seamless buying experiences. Our expertise includes designing secure, responsive, and easy-to-manage online stores with features like product catalogs, payment gateways, inventory management, and customer engagement tools. With Primesource, your e-commerce platform becomes a growth engine for your business.
              </p>
            </motion.div>

            {/* Web Applications and Advanced Solutions */}
            <motion.div 
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/50 p-8 rounded-2xl backdrop-blur-sm border border-white/30"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Applications and Advanced Solutions</h3>
              <p className="text-gray-700 mb-4">
                For businesses seeking more than a standard website, we offer advanced web development solutions including web applications, portals, and custom integrations. From booking systems and dashboards to interactive tools, Primesource develops web applications that solve real business challenges and enhance efficiency. We focus on scalability, performance, and security to ensure your solutions are built to last.
              </p>
            </motion.div>

            {/* Mobile-Responsive and UX Design */}
            <motion.div 
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/50 p-8 rounded-2xl backdrop-blur-sm border border-white/30"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile-Responsive and User Experience (UX) Design</h3>
              <p className="text-gray-700 mb-4">
                With most users accessing websites from mobile devices, responsiveness is no longer optional. Primesource ensures that every website we build is fully optimized for mobile, tablet, and desktop. Beyond responsiveness, we prioritize user experience by designing websites that are easy to navigate, fast-loading, and visually engaging. The result is a website that keeps visitors engaged and encourages them to take action.
              </p>
            </motion.div>

            {/* Website Maintenance and Support */}
            <motion.div 
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/50 p-8 rounded-2xl backdrop-blur-sm border border-white/30"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Website Maintenance and Support</h3>
              <p className="text-gray-700 mb-4">
                A great website is not just about launch — it's about continuous performance. Primesource provides website maintenance and support services to keep your site secure, updated, and optimized. From bug fixes and performance monitoring to content updates and feature enhancements, we ensure your digital presence stays strong and reliable over time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Web Application Development Services */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Web Application Development Services" 
            subtitle=" At Primesource, we create web applications that are robust, scalable, and user-friendly —
              designed to help businesses succeed in the digital era."
            center
          />

          <motion.div 
            className="space-y-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Why Choose */}
            <motion.div 
              className="text-left space-y-4 bg-white/50 p-8 rounded-2xl backdrop-blur-sm border border-white/30"
              variants={slideInTop}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900">Why Choose Primesource for Web Apps?</h3>
              <p className="text-gray-700">
                What sets us apart is our ability to design digital experiences that align perfectly with
                business goals. Every application is custom-built to meet specific requirements, ensuring
                flexibility and adaptability as your business grows. We focus on delivering secure,
                future-ready applications while maintaining a seamless user experience with clean design
                and smooth navigation.
              </p>
            </motion.div>

            {/* Process */}
            <motion.div 
              className="text-left space-y-4 bg-white/50 p-8 rounded-2xl backdrop-blur-sm border border-white/30"
              variants={slideInBottom}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900">Our Web App Development Process</h3>
              <p className="text-gray-700">
                We follow a structured development process that begins with careful planning to understand
                your business model, target audience, and objectives. From there, we move to UI and UX
                design, where we create intuitive layouts that engage users and simplify interaction.
              </p>
              <p className="text-gray-700">
                Development is carried out using the latest frameworks such as <span className="font-semibold">React, Angular, Vue, Node.js, and Laravel</span>,
                ensuring speed, reliability, and scalability. Before launch, every application undergoes rigorous
                testing across multiple devices and browsers to guarantee flawless performance. Once live, we
                provide continuous maintenance, upgrades, and technical support to keep your web application
                running at its best.
              </p>
            </motion.div>

            {/* Solutions */}
            <motion.div 
              className="text-left space-y-6 bg-white/50 p-8 rounded-2xl backdrop-blur-sm border border-white/30"
              variants={slideInTop}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900">Solutions We Deliver</h3>
              <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
                {[
                  "Business Portals – Streamline workflows and improve performance tracking.",
                  "E-Commerce Platforms – Secure, scalable, and optimized for conversions.",
                  "Community Platforms – Connect people with engaging and interactive features.",
                  "SaaS Solutions – Subscription-based applications tailored for niche markets."
                ].map((solution, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  >
                    <span className="text-emerald-600 mr-2">✔</span> {solution}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Technology Stack */}
            <motion.div 
              className="text-left space-y-4 bg-white/50 p-8 rounded-2xl backdrop-blur-sm border border-white/30"
              variants={slideInBottom}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900">Technology Stack We Use</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
                <motion.div 
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="font-semibold">Frontend:</span> React.js, Angular, Vue.js
                </motion.div>
                <motion.div 
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="font-semibold">Backend:</span> Node.js, Laravel, Django
                </motion.div>
                <motion.div 
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="font-semibold">Databases:</span> MySQL, PostgreSQL, MongoDB
                </motion.div>
                <motion.div 
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="font-semibold">Cloud:</span> AWS, Azure, Google Cloud
                </motion.div>
              </div>
            </motion.div>

            {/* Conclusion */}
            <motion.div 
              className="text-left space-y-4 bg-white/50 p-8 rounded-2xl backdrop-blur-sm border border-white/30"
              variants={slideInTop}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900">Our Expertise</h3>
              <p className="text-gray-700">
                In a fast-paced digital world, your business deserves a web application that is reliable,
                scalable, and tailored to your unique needs. At Primesource, we partner with you at every
                step — from concept to launch and beyond — ensuring that your web app becomes a valuable
                asset for business growth.
              </p>
            </motion.div>
          </motion.div>
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
              variants={slideInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">iOS & Android Development</h3>
              <p className="text-gray-700 mb-6">
                We create mobile experiences that feel native to each platform while maintaining a consistent brand identity.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <motion.div 
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/30"
                  variants={scaleUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="font-semibold text-gray-900 mb-2">iOS Apps</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Swift & Objective-C</li>
                    <li>• Apple Design Guidelines</li>
                    <li>• App Store Optimization</li>
                    <li>• iPhone & iPad Support</li>
                  </ul>
                </motion.div>
                
                <motion.div 
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/30"
                  variants={scaleUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Android Apps</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Kotlin & Java</li>
                    <li>• Material Design</li>
                    <li>• Google Play Optimization</li>
                    <li>• Multi-device Support</li>
                  </ul>
                </motion.div>
              </div>
              
              {/* Custom Mobile App Development */}
              <motion.div 
                className="mb-8"
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="font-semibold text-lg text-gray-900 mb-2">Custom Mobile App Development</h4>
                <p className="text-gray-700 text-sm">
                  Every business has unique needs, and we believe your mobile app should reflect that. 
                  Primesource designs and develops custom applications tailored to your business objectives, 
                  user requirements, and brand identity.
                </p>
              </motion.div>
              
              {/* Cross-Platform Development */}
              <motion.div 
                className="mb-8"
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="font-semibold text-lg text-gray-900 mb-2">Cross-Platform Development</h4>
                <p className="text-gray-700 text-sm">
                  Using frameworks like Flutter and React Native, we build applications that work seamlessly 
                  across Android and iOS, reducing development costs and time-to-market.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-4 bg-emerald-200/40 rounded-3xl blur-lg opacity-70"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 0.5, 0.7],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <img 
                  src={mobileAppIllustration} 
                  alt="Mobile app development" 
                  className="relative rounded-2xl shadow-lg w-full max-w-md"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Additional Content Section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            {/* Left Column */}
            <div>
              <motion.div 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/30 mb-6"
                variants={slideInLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="font-semibold text-lg text-gray-900 mb-3">Scalable, Secure, and Feature-Rich Apps</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Security, performance, and scalability are top priorities at Primesource. We build mobile apps 
                  using modern architecture and secure coding practices that ensure reliability, even under heavy use.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Real-time messaging integration</li>
                  <li>• Geo-location services</li>
                  <li>• Secure payment processing</li>
                  <li>• Offline functionality</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/30"
                variants={slideInLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="font-semibold text-lg text-gray-900 mb-3">UI/UX Design and User-Centric Experiences</h4>
                <p className="text-gray-700 text-sm">
                  A great app is not just about features — it's about the experience. Our design team focuses on 
                  creating intuitive, visually appealing, and user-friendly interfaces that enhance customer 
                  satisfaction and engagement.
                </p>
              </motion.div>
            </div>
            
            {/* Right Column */}
            <div>
              <motion.div 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/30 mb-6"
                variants={slideInRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="font-semibold text-lg text-gray-900 mb-3">App Maintenance & Support</h4>
                <p className="text-gray-700 text-sm">
                  The journey doesn't end at launch. Primesource provides ongoing app maintenance and support 
                  services to keep your applications up-to-date, reliable, and optimized. Our proactive approach 
                  ensures your app evolves with changing technologies and user expectations.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/30"
                variants={slideInRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="font-semibold text-lg text-gray-900 mb-3">Why Choose Primesource?</h4>
                <p className="text-gray-700 text-sm">
                  At Primesource, we blend innovation, technical expertise, and market insights to deliver 
                  mobile applications that empower businesses to grow and succeed. Our end-to-end services 
                  cover everything from strategy and design to development, testing, and support.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-4xl mx-4 lg:mx-8 mt-12 mb-6 ">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to transform your digital presence?
          </motion.h2>
          <motion.p 
            className="text-xl text-emerald-100 mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you need a stunning website, a powerful web application, or a mobile app, we have the expertise to bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-white hover:bg-gray-100 text-emerald-800 font-medium py-3 px-8 rounded-lg transition-colors mr-4"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -10px rgba(255, 255, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}
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
    className={`flex flex-col lg:flex-row items-center gap-12 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
    variants={item}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
  >
    {/* Image */}
<div className="lg:w-1/2 w-full flex justify-center">
  <img 
    src={image} 
    alt={title} 
    className="w-4/5 lg:w-3/4 rounded-2xl shadow-lg"
  />
</div>


    {/* Content */}
    <div className="lg:w-1/2 w-full">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-lg bg-emerald-100/50 text-emerald-700 flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
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
                Start Your Project Today
              </motion.button>
              {/* <motion.button 
                className="bg-white/90 hover:bg-white text-emerald-600 border border-emerald-600 font-medium py-3 px-8 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.button> */}
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
            description="At Primesource, we design and develop websites that go beyond aesthetics — we create digital platforms that connect, engage, and convert. In today’s competitive market, your website is the first impression of your brand, and we make sure it is powerful, user-friendly, and future-ready. Our website development services combine creativity, technology, and strategy to deliver solutions that help businesses establish a strong online presence and achieve measurable results. "
            features={['Custom designs', 'Mobile-first approach', 'SEO optimized', 'Fast performance','Website Maintenance and Support']}
            image={webDesignIllustration}
            reverse={true}  // Image on left, text on right
            />

            <ServiceCard 
            icon={<MobileIcon />}
            title="Web Application Development"
            description="We follow a structured development process that begins with careful planning to understand your business model, target audience, and objectives. From there, we move to UI and UX design, where we create intuitive layouts that engage users and simplify interaction.
            tinuous maintenance, upgrades, and technical support to keep your web application running at its best."
            features={['Custom business logic', 'Database integration', 'User authentication', 'API connections','Cloud Platforms']}
            image={webAppIllustration}
            reverse={false} // Image on right, text on left
            />

            
            <ServiceCard 
              icon={<MobileIcon />}
              title="Mobile Application Development"
              description="Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences."
              features={['iOS & Android development', 'Cross-platform solutions', 'App store optimization', 'Push notifications']}
              image={mobileAppIllustration}
              reverse={true}
            />
          </motion.div>
        </div>
        
      </section>

      {/* Website Features */}
<section className="py-20 px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
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
      <motion.div variants={item}>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Website Development</h3>
        <p className="text-gray-700 mb-4">
          Every business is unique, and your website should reflect that. At Primesource, we craft custom websites tailored to your brand identity, industry, and customer expectations. Our team focuses on clean design, intuitive navigation, and scalable structures to ensure your site stands out and grows with your business. From concept to launch, we deliver websites that not only look great but also function seamlessly across all devices.
        </p>
      </motion.div>

      {/* E-Commerce Development */}
      <motion.div variants={item}>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce Development</h3>
        <p className="text-gray-700 mb-4">
          In the digital age, online shopping has become the backbone of many businesses. We help companies launch and scale e-commerce platforms that deliver seamless buying experiences. Our expertise includes designing secure, responsive, and easy-to-manage online stores with features like product catalogs, payment gateways, inventory management, and customer engagement tools. With Primesource, your e-commerce platform becomes a growth engine for your business.
        </p>
      </motion.div>

      {/* Web Applications and Advanced Solutions */}
      <motion.div variants={item}>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Applications and Advanced Solutions</h3>
        <p className="text-gray-700 mb-4">
          For businesses seeking more than a standard website, we offer advanced web development solutions including web applications, portals, and custom integrations. From booking systems and dashboards to interactive tools, Primesource develops web applications that solve real business challenges and enhance efficiency. We focus on scalability, performance, and security to ensure your solutions are built to last.
        </p>
      </motion.div>

      {/* Mobile-Responsive and UX Design */}
      <motion.div variants={item}>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile-Responsive and User Experience (UX) Design</h3>
        <p className="text-gray-700 mb-4">
          With most users accessing websites from mobile devices, responsiveness is no longer optional. Primesource ensures that every website we build is fully optimized for mobile, tablet, and desktop. Beyond responsiveness, we prioritize user experience by designing websites that are easy to navigate, fast-loading, and visually engaging. The result is a website that keeps visitors engaged and encourages them to take action.
        </p>
      </motion.div>

      {/* Website Maintenance and Support */}
      <motion.div variants={item}>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Website Maintenance and Support</h3>
        <p className="text-gray-700 mb-4">
          A great website is not just about launch — it’s about continuous performance. Primesource provides website maintenance and support services to keep your site secure, updated, and optimized. From bug fixes and performance monitoring to content updates and feature enhancements, we ensure your digital presence stays strong and reliable over time.
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
      <motion.div className="text-left space-y-4" variants={item}>
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
      <motion.div className="text-left space-y-4" variants={item}>
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
      <motion.div className="text-left space-y-6" variants={item}>
        <h3 className="text-2xl font-semibold text-gray-900">Solutions We Deliver</h3>
        <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
          {[
            "Business Portals – Streamline workflows and improve performance tracking.",
            "E-Commerce Platforms – Secure, scalable, and optimized for conversions.",
            "Community Platforms – Connect people with engaging and interactive features.",
            "SaaS Solutions – Subscription-based applications tailored for niche markets."
          ].map((solution, i) => (
            <li key={i} className="flex items-start">
              <span className="text-emerald-600 mr-2">✔</span> {solution}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Technology Stack */}
      <motion.div className="text-left space-y-4" variants={item}>
        <h3 className="text-2xl font-semibold text-gray-900">Technology Stack We Use</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
          <div><span className="font-semibold">Frontend:</span> React.js, Angular, Vue.js</div>
          <div><span className="font-semibold">Backend:</span> Node.js, Laravel, Django</div>
          <div><span className="font-semibold">Databases:</span> MySQL, PostgreSQL, MongoDB</div>
          <div><span className="font-semibold">Cloud:</span> AWS, Azure, Google Cloud</div>
        </div>
      </motion.div>

      {/* Conclusion */}
      <motion.div className="text-left space-y-4" variants={item}>
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
            {/* <motion.button 
              className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-8 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button> */}
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}
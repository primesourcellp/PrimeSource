import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Import local images (replace with your actual images)
import seoImage from '../../assets/five.png';
import socialMediaImage from '../../assets/five.png';
import semImage from '../../assets/five.png';
import contentImage from '../../assets/five.png';
import digitalMarketingHero from '../../assets/five.png';
import JobDriveBanner from '../MovingDots/dot';

// Animation variants
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

// Icons
const SeoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const SocialMediaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
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

// Reusable components
const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/30 hover:shadow-lg transition-all duration-300 group"
    variants={item}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
  >
    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const ServiceCard = ({ icon, title, description, features, image, reverse = false }) => (
  <motion.div 
    className={`flex flex-col lg:flex-row items-center gap-16 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} mb-24 last:mb-0`}
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
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-300/30 to-cyan-300/30 rounded-3xl blur-xl z-0"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full max-w-md rounded-2xl shadow-xl relative z-10"
        />
      </div>
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
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-white flex items-center justify-center mr-5 shadow-lg">
          {icon}
        </div>
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <motion.li 
            key={index}
            className="flex items-start"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            <svg className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-gray-700">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

const SectionHeader = ({ title, subtitle, center = false }) => (
  <motion.div 
    className={`mb-16 ${center ? 'text-center' : ''}`}
    variants={slideInTop}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <motion.h2 
      className="text-4xl font-bold text-gray-900 mb-4"
      variants={slideInTop}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
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

export default function DigitalMarketingPage() {
  const [isMobile, setIsMobile] = useState(false);

  
  return (
    <div className="bg-gradient-to-br from-emerald-50/70 via-white to-cyan-50/70 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center pt-20">
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-10 left-5 w-72 h-72 bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
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
            className="absolute top-20 right-5 w-72 h-72 bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
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
            className="absolute bottom-10 left-20 w-72 h-72 bg-teal-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full">
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              variants={slideInBottom}
            >
              Amplify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Digital Presence</span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed"
              variants={slideInBottom}
              transition={{ delay: 0.2 }}
            >
              Comprehensive digital marketing solutions to grow your brand, engage your audience, and drive conversions.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-5"
              variants={slideInBottom}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40"
                whileHover={{ 
                  scale: isMobile ? 1 : 1.05, 
                  y: isMobile ? 0 : -3,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="bg-white/90 hover:bg-white text-gray-800 border border-gray-200 font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-gray-500/10 hover:shadow-gray-500/20"
                whileHover={{ 
                  scale: isMobile ? 1 : 1.05, 
                  y: isMobile ? 0 : -3,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                View Case Studies
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="relative mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 80, delay: 0.2 }}
          >
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-emerald-300/20 to-cyan-300/20 rounded-3xl blur-2xl"></div>
            <motion.div
              animate={{
                y: isMobile ? 0 : [0, -12, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center"
            >
              <img
                src={digitalMarketingHero}
                alt="Digital Marketing"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                loading="eager"
              />
            </motion.div>

            {/* Floating elements with smoother animations */}
            {!isMobile && (
              <>
                <motion.div
                  className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/30"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.8 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl">🔍</div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/30"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200, delay: 1.0 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 text-xl">📈</div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Our Digital Marketing Services" 
            subtitle="Comprehensive strategies to grow your online presence and drive measurable results." 
            center
          />
          
          <motion.div 
            className="space-y-32"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ServiceCard 
              icon={<SeoIcon />}
              title="Search Engine Optimization (SEO)"
              description="At Primesource, we help businesses rise to the top of search engine results with expert SEO strategies tailored to your goals. In a digital landscape where visibility equals opportunity, our SEO services are designed to bring qualified traffic, boost your online presence, and turn visitors into paying customers. Whether you're a startup or an established brand, we deliver measurable results that grow with your business."
              features={[ 'On-Page SEO', 'Off-Page SEO', 'Technical SEO ', ' National SEO Expertise', 'Local SEO Expertise ','Keyword Research & Analysis']}
              image={seoImage}
              reverse={true}
            />

            <ServiceCard 
              icon={<SocialMediaIcon />}
              title="Social Media Marketing (SMM)"
              description="Build brand awareness, engage your audience, and drive conversions through strategic social media campaigns."
              features={['Strategy Development', 'Content Creation & Curation', 'Community Management', 'Paid Social Advertising', 'Influencer Partnerships', 'Analytics & Reporting']}
              image={socialMediaImage}
              reverse={false}
            />

            <ServiceCard 
              icon={<SemIcon />}
              title="Search Engine Marketing (SEM)"
              description="Drive immediate traffic and conversions with targeted paid search campaigns across major search engines."
              features={['PPC Campaign Management', 'Keyword & Bidding Strategy', 'Ad Copy Creation & A/B Testing', 'Landing Page Optimization', 'Conversion Rate Optimization', 'ROI Tracking']}
              image={semImage}
              reverse={true}
            />

            <ServiceCard 
              icon={<ContentIcon />}
              title="Content Writting"
              description="Create valuable, relevant content to attract and retain your target audience, driving profitable customer action."
              features={['Content Strategy', 'Blog Post & Article Creation', 'Video Content Production', 'Infographics & E-books', 'Email Newsletter Campaigns', 'Performance Analysis']}
              image={contentImage}
              reverse={false}
            />
          </motion.div>
        </div>
      </section>

      {/* SEO Services Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="SEO Services"
            subtitle="Rise to the top of search results with tailored SEO strategies that drive traffic, boost visibility, and convert visitors into customers."
            center
          />

          {/* Main Intro */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Text Content */}
            <motion.div className="space-y-6" variants={slideInLeft}>
              <h3 className="text-3xl font-bold text-gray-900">
                Tailored SEO Solutions That Match Your Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Primesource, we help businesses rise to the top of search engine
                results with expert SEO strategies tailored to your goals. In a
                digital landscape where visibility equals opportunity, our SEO
                services are designed to bring qualified traffic, boost your online
                presence, and turn visitors into paying customers. Whether you're a
                startup or an established brand, we deliver measurable results that
                grow with your business.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We don't rely on cookie-cutter approaches. Instead, we create fully
                customized SEO campaigns built around your industry, target audience,
                and business objectives. From local visibility to national reach, our
                team crafts strategies that help you stand out in even the most
                competitive markets.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              className="flex justify-center relative"
              variants={slideInRight}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-300/20 to-cyan-300/20 rounded-3xl blur-2xl"></div>
              <img
                src={seoImage}
                alt="SEO Strategy"
                className="relative rounded-2xl shadow-xl w-full max-w-md"
              />
            </motion.div>
          </motion.div>

          {/* SEO Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: "On-Page SEO",
                description:
                  "Optimizing your website's content, metadata, structure, and internal links for better rankings and user engagement.",
              },
              {
                title: "Off-Page SEO",
                description:
                  "Building strong backlinks, improving domain authority, and increasing your website's trust and credibility.",
              },
              {
                title: "Technical SEO",
                description:
                  "Enhancing site speed, mobile performance, indexing, and crawlability to ensure your site is search engine friendly.",
              },
              {
                title: "Local & National SEO",
                description:
                  "Whether you're targeting local customers or scaling nationally, we craft strategies that deliver measurable results.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-white/50 hover:shadow-lg transition-all duration-300 group"
                variants={slideInBottom}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Closing Statement */}
          <motion.div
            className="mt-20 text-center max-w-3xl mx-auto space-y-6"
            variants={slideInBottom}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Driven by Data. Focused on Results.
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Primesource, we believe in transparency and performance. Our SEO
              campaigns are powered by real-time data, analytics, and continuous
              optimization. Every month, you'll receive clear reports that show
              exactly how your site is performing — and how we're keeping it ahead.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium text-lg">
              SEO isn't just about getting to the top — it's about staying there. With
              Primesource as your SEO partner, you get a dedicated team committed to
              long-term growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Complete Marketing Solutions" 
            subtitle="Complementary services designed to enhance and amplify your digital marketing efforts across all channels." 
            center
          />

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <FeatureCard 
              icon="📊"
              title="Analytics & Reporting"
              description="Gain actionable insights into your performance with comprehensive analytics and detailed reporting."
            />
            <FeatureCard 
              icon="🎯"
              title="Marketing Strategy"
              description="Develop a complete digital marketing roadmap aligned perfectly with your business objectives."
            />
            <FeatureCard 
              icon="✉️"
              title="Email Marketing"
              description="Nurture leads and engage customers with targeted email campaigns that drive action."
            />
            <FeatureCard 
              icon="🔄"
              title="Conversion Rate Optimization"
              description="Improve your website's ability to convert visitors into customers through data-driven A/B testing."
            />
            <FeatureCard 
              icon="🌟"
              title="Influencer Marketing"
              description="Leverage the power of influencers to expand your reach and build authentic brand credibility."
            />
            <FeatureCard 
              icon="🔁"
              title="Remarketing Campaigns"
              description="Re-engage visitors who didn't convert with targeted ads across multiple platforms to boost ROI."
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-3xl p-12 md:p-16 shadow-2xl shadow-emerald-500/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_2px)] [background-size:32px_32px]"></div>
            </div>
            
            <div className="relative text-center max-w-3xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Digital Marketing?
              </motion.h2>
              <motion.p 
                className="text-xl text-emerald-100 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Let's create a customized strategy that drives growth and delivers the results you deserve.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-5 justify-center"
              >
                <motion.button 
                  className="bg-white hover:bg-gray-100 text-emerald-700 font-semibold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg shadow-black/10"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -10px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get a Free Consultation
                </motion.button>
                <motion.button 
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white/80 font-semibold py-4 px-8 rounded-xl transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -10px rgba(255, 255, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Our Portfolio
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
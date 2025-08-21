import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Import local images (replace with your actual images)
import seoImage from '../../assets/five.png';
import socialMediaImage from '../../assets/five.png';
import semImage from '../../assets/five.png';
import contentImage from '../../assets/five.png';
import analyticsImage from '../../assets/five.png';
import strategyImage from '../../assets/five.png';
import digitalMarketingHero from '../../assets/five.png';

// ✨ CHANGED: Enhanced animation variants with spring physics for a smoother feel.

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slightly adjusted stagger
      delayChildren: 0.1,
    }
  }
};

const itemFromLeft = {
  hidden: { opacity: 0, x: -30, skewX: -10 }, // Added a subtle skew
  show: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

const itemFromRight = {
  hidden: { opacity: 0, x: 30, skewX: 10 }, // Added a subtle skew
  show: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

const itemFromTop = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

const itemFromBottom = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8, // Fade can remain a duration-based ease
      ease: "easeOut"
    }
  }
};

// Service Icons using text/emojis
const ServiceIcon = ({ emoji, color }) => {
  return (
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-xl`}>
      {emoji}
    </div>
  );
};

// Reusable components
const ServiceCard = ({ icon, title, description, features, image, animationDirection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  let animationVariant;
  switch (animationDirection) {
    case 'left':
      animationVariant = itemFromLeft;
      break;
    case 'right':
      animationVariant = itemFromRight;
      break;
    default:
      animationVariant = fadeIn;
  }

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row gap-6 items-center bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm border border-white/30 p-1 mb-12 max-w-full"
      variants={animationVariant}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <div className="md:w-1/2 p-5 md:p-6 w-full">
        {icon}
        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-3">{title}</h3>
        <p className="text-gray-700 mb-4 text-sm">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="text-blue-600 mr-2 flex-shrink-0">✓</span>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 w-full px-4 md:px-0">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-56 md:h-64 object-contain rounded-xl"
          whileHover={{ scale: 1.03 }} // Slightly increased scale effect
          transition={{ type: "spring", stiffness: 300, damping: 15 }} // ✨ CHANGED: Spring transition on hover
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-white/30 hover:shadow-md transition-shadow h-full max-w-full"
      variants={itemFromBottom} // Use a consistent variant
      whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 15 } }} // ✨ CHANGED: Spring transition on hover
    >
      {icon}
      <h3 className="text-base font-semibold text-gray-900 mb-2 mt-3">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </motion.div>
  );
};

const SectionHeader = ({ title, subtitle, center = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      className={`mb-10 ${center ? 'text-center' : ''} px-4`}
      variants={fadeIn}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
      {subtitle && <p className="text-base text-gray-700 max-w-3xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
};

export default function DigitalMarketingPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute top-20 left-10 w-60 h-60 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-60 h-60 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-60 h-60 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 grid md:grid-cols-2 gap-6 md:gap-10 items-center w-full">
          {/* Text Content */}
          <motion.div
            className="space-y-5 md:space-y-7"
            initial="hidden"
            animate={isHeroInView ? "show" : "hidden"}
            variants={container} // ✨ CHANGED: Use container variant for staggering
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
              variants={itemFromBottom}
            >
              Amplify Your <span className="text-blue-600">Digital Presence</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-700"
              variants={itemFromBottom}
            >
              Comprehensive digital marketing solutions to grow your brand, engage your audience, and drive conversions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={itemFromBottom}
            >
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 md:px-7 rounded-lg transition-colors text-sm md:text-base"
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }} // ✨ CHANGED
              >
                Get Started
              </motion.button>
              <motion.button
                className="bg-white/90 hover:bg-white text-blue-600 border border-blue-600 font-medium py-2 px-5 md:px-7 rounded-lg transition-colors text-sm md:text-base"
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }} // ✨ CHANGED
              >
                View Case Studies
              </motion.button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 md:gap-5 pt-3"
              variants={container}
            >
              {[
                { label: "SEO", color: "bg-blue-500" },
                { label: "SMM", color: "bg-cyan-500" },
                { label: "SEM", color: "bg-teal-500" },
                { label: "Content", color: "bg-emerald-500" }
              ].map((item) => (
                <motion.span
                  key={item.label}
                  className="inline-flex items-center text-xs font-medium text-gray-700"
                  variants={fadeIn}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${item.color} mr-1.5`}></span>
                  {item.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="relative mt-6 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ type: "spring", damping: 20, stiffness: 80, delay: 0.2 }}
          >
            <div className="absolute -inset-1 md:-inset-3 bg-blue-200/20 rounded-3xl blur-xl"></div>
            <motion.div
              // ✨ CHANGED: Enhanced floating animation with rotation for a more natural feel
              animate={{
                y: isMobile ? 0 : [0, -8, 0],
                rotate: isMobile ? 0 : [0, 1, -1, 1, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex justify-center"
            >
              <img
                src={digitalMarketingHero}
                alt="Digital Marketing"
                className="relative rounded-2xl shadow-lg w-full max-w-md mx-auto"
                loading="eager"
              />
            </motion.div>

            {/* Floating elements around the image */}
            {!isMobile && (
              <>
                <motion.div
                  className="absolute -top-3 -left-3 md:-top-5 md:-left-5 bg-white/80 backdrop-blur-sm p-1.5 md:p-2.5 rounded-xl shadow-md border border-white/30"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.8 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                   <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-base">
                     🔍
                   </div>
                </motion.div>
                
                <motion.div
                   className="absolute -bottom-3 -right-3 md:-bottom-5 md:-right-5 bg-white/80 backdrop-blur-sm p-1.5 md:p-2.5 rounded-xl shadow-md border border-white/30"
                   initial={{ opacity: 0, scale: 0.7 }}
                   animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                   transition={{ type: "spring", damping: 15, stiffness: 200, delay: 1.0 }}
                   whileHover={{ scale: 1.1, rotate: -5 }}
                >
                   <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-base">
                     📈
                   </div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-3 md:-right-6 bg-white/80 backdrop-blur-sm p-1.5 md:p-2.5 rounded-xl shadow-md border border-white/30"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ type: "spring", damping: 15, stiffness: 200, delay: 1.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 text-base">
                    👥
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-14 md:py-18 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader
            title="Our Digital Marketing Services"
            subtitle="Comprehensive strategies to grow your online presence and drive measurable results"
            center
          />

          <div className="space-y-10 md:space-y-14">
            <ServiceCard
              icon={<ServiceIcon emoji="🔍" color="bg-blue-100/50 text-blue-700" />}
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
              icon={<ServiceIcon emoji="💬" color="bg-purple-100/50 text-purple-700" />}
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
              icon={<ServiceIcon emoji="📈" color="bg-green-100/50 text-green-700" />}
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
              icon={<ServiceIcon emoji="📝" color="bg-amber-100/50 text-amber-700" />}
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
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-14 md:py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-3xl mx-2 md:mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader
            title="Our Strategic Approach"
            subtitle="A data-driven process that delivers measurable results"
            center
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            {[
              { number: "01", title: "Research & Analysis", description: "We begin by thoroughly understanding your business, audience, and competitors to develop effective strategies." },
              { number: "02", title: "Strategy Development", description: "We create customized digital marketing strategies aligned with your business goals and target audience." },
              { number: "03", title: "Implementation", description: "Our team executes the strategy with precision, ensuring all elements work together seamlessly." },
              { number: "04", title: "Optimization", description: "We continuously monitor performance and make data-driven adjustments to improve results." },
              { number: "05", title: "Reporting", description: "Transparent reporting keeps you informed about campaign performance and ROI." },
              { number: "06", title: "Scaling", description: "We identify successful strategies and scale them to maximize your marketing impact." }
            ].map((item) => (
              <motion.div
                key={item.number}
                className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-white/30"
                variants={itemFromBottom}
              >
                <div className="text-3xl font-bold text-blue-600 mb-3">{item.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-14 md:py-18 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader
            title="Additional Marketing Services"
            subtitle="Complementary services to enhance your digital marketing efforts"
            center
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <FeatureCard
              icon={<ServiceIcon emoji="📊" color="bg-indigo-100/50 text-indigo-700 text-lg" />}
              title="Analytics & Reporting"
              description="Gain valuable insights into your marketing performance with comprehensive analytics and detailed reporting."
            />
            <FeatureCard
              icon={<ServiceIcon emoji="🎯" color="bg-red-100/50 text-red-700 text-lg" />}
              title="Marketing Strategy"
              description="Develop a comprehensive digital marketing roadmap aligned with your business objectives."
            />
            <FeatureCard
              icon={<ServiceIcon emoji="✉️" color="bg-blue-100/50 text-blue-700 text-lg" />}
              title="Email Marketing"
              description="Nurture leads and engage customers with targeted email campaigns that drive conversions."
            />
             <FeatureCard 
               icon={<ServiceIcon emoji="🔄" color="bg-green-100/50 text-green-700 text-lg" />}
               title="Conversion Rate Optimization"
               description="Improve your website's ability to convert visitors into customers through data-driven optimization."
             />
             <FeatureCard 
               icon={<ServiceIcon emoji="🌟" color="bg-yellow-100/50 text-yellow-700 text-lg" />}
               title="Influencer Marketing"
               description="Leverage the power of influencers to expand your reach and build brand credibility."
             />
             <FeatureCard 
               icon={<ServiceIcon emoji="🔁" color="bg-purple-100/50 text-purple-700 text-lg" />}
               title="Remarketing Campaigns"
               description="Re-engage visitors who didn't convert with targeted ads across multiple platforms."
             />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-3xl mx-2 md:mx-4 lg:mx-8 mt-6 md:mt-10">
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-5"
            variants={itemFromBottom}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Ready to transform your digital marketing?
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-blue-100 mb-6 px-2"
            variants={itemFromBottom}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's work together to create a customized digital marketing strategy that drives growth and delivers measurable results.
          </motion.p>
          <motion.div
            variants={itemFromBottom}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.button
              className="bg-white hover:bg-gray-100 text-blue-800 font-medium py-2.5 px-5 md:px-7 rounded-lg transition-colors text-sm md:text-base"
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              Get Free Consultation
            </motion.button>
            <motion.button
              className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-2.5 px-5 md:px-7 rounded-lg transition-colors text-sm md:text-base"
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              View Our Portfolio
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
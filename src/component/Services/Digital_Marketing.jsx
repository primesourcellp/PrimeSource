import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Import local images (replace with your actual images)
import seoImage from '../../assets/five.png';
import socialMediaImage from '../../assets/five.png';
import semImage from '../../assets/five.png';
import contentImage from '../../assets/five.png';
import digitalMarketingHero from '../../assets/five.png';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const itemFromLeft = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 80,
      duration: 0.5
    }
  }
};

const itemFromRight = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 80,
      duration: 0.5
    }
  }
};

const itemFromTop = {
  hidden: { opacity: 0, y: -50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 80,
      duration: 0.5
    }
  }
};

const itemFromBottom = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 80,
      duration: 0.5
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Reusable Components
const ServiceIcon = ({ emoji, color }) => (
  <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center text-2xl`}>
    {emoji}
  </div>
);

const ServiceCard = ({ icon, title, description, features, image, animationDirection }) => {
  const animationVariant = animationDirection === 'left' ? itemFromLeft : itemFromRight;

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-6 items-center bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-white/40 p-1 mb-12"
      variants={animationVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
    >
      <div className="md:w-1/2 p-5 md:p-8 w-full order-2 md:order-1">
        {icon}
        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">{title}</h3>
        <p className="text-gray-700 mb-5 text-sm">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span className="text-emerald-600 mr-2.5 flex-shrink-0 mt-1">✓</span>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`md:w-1/2 w-full px-4 md:px-0 order-1 ${animationDirection === 'right' ? 'md:order-2' : 'md:order-1'}`}>
        <motion.img
          src={image}
          alt={title}
          className="w-full h-60 md:h-72 object-contain rounded-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-sm border border-white/40 hover:shadow-lg transition-shadow duration-300 h-full"
    variants={itemFromBottom}
    whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 10 } }}
  >
    {icon}
    <h3 className="text-base font-semibold text-gray-900 mb-2 mt-4">{title}</h3>
    <p className="text-gray-700 text-sm">{description}</p>
  </motion.div>
);

const SectionHeader = ({ title, subtitle, center = false }) => (
  <motion.div
    className={`mb-12 ${center ? 'text-center' : ''} px-4`}
    initial="hidden"
    whileInView="show"
    variants={fadeIn}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
  >
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{title}</h2>
    {subtitle && <p className="text-base text-gray-700 max-w-3xl mx-auto">{subtitle}</p>}
  </motion.div>
);

// Main Page Component
export default function DigitalMarketingPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 min-h-screen overflow-x-hidden font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Background Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 w-72 h-72 bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
          <div className="absolute top-20 right-5 w-72 h-72 bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-teal-200/40 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
              variants={itemFromBottom}
            >
              Amplify Your <span className="text-emerald-600">Digital Presence</span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-gray-700 max-w-xl"
              variants={itemFromBottom}
            >
              Comprehensive digital marketing solutions to grow your brand, engage your audience, and drive conversions.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemFromBottom}
            >
              <motion.button
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg shadow-emerald-500/20"
                whileHover={{ scale: isMobile ? 1 : 1.05, y: isMobile ? 0 : -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="bg-white/90 hover:bg-white text-emerald-600 border border-emerald-200 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg shadow-gray-500/10"
                whileHover={{ scale: isMobile ? 1 : 1.05, y: isMobile ? 0 : -2 }}
                whileTap={{ scale: 0.95 }}
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
            <div className="absolute -inset-2 md:-inset-4 bg-emerald-300/20 rounded-3xl blur-xl"></div>
            <motion.div
              animate={{
                y: isMobile ? 0 : [0, -10, 0],
                rotate: isMobile ? 0 : [0, 0.5, -0.5, 0.5, 0],
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
                  className="absolute -top-4 -left-4 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/30"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.8 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl">🔍</div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/30"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200, delay: 1.0 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600 text-xl">📈</div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader
            title="Our Digital Marketing Services"
            subtitle="Comprehensive strategies to grow your online presence and drive measurable results."
            center
          />
          <div className="space-y-12 md:space-y-16">
            <ServiceCard
              icon={<ServiceIcon emoji="🔍" color="bg-emerald-100 text-emerald-700" />}
              title="Search Engine Optimization (SEO)"
              description="Improve your website's visibility and drive organic traffic with our comprehensive SEO strategies."
              features={['Keyword Research & Analysis', 'On-Page & Technical SEO', 'Content Strategy', 'Link Building', 'Local SEO', 'Performance Reporting']}
              image={seoImage}
              animationDirection="left"
            />
            <ServiceCard
              icon={<ServiceIcon emoji="💬" color="bg-cyan-100 text-cyan-700" />}
              title="Social Media Marketing (SMM)"
              description="Build brand awareness, engage your audience, and drive conversions through strategic social media campaigns."
              features={['Strategy Development', 'Content Creation & Curation', 'Community Management', 'Paid Social Advertising', 'Influencer Partnerships', 'Analytics & Reporting']}
              image={socialMediaImage}
              animationDirection="right"
            />
            <ServiceCard
              icon={<ServiceIcon emoji="📈" color="bg-teal-100 text-teal-700" />}
              title="Search Engine Marketing (SEM)"
              description="Drive immediate traffic and conversions with targeted paid search campaigns across major search engines."
              features={['PPC Campaign Management', 'Keyword & Bidding Strategy', 'Ad Copy Creation & A/B Testing', 'Landing Page Optimization', 'Conversion Rate Optimization', 'ROI Tracking']}
              image={semImage}
              animationDirection="left"
            />
            <ServiceCard
              icon={<ServiceIcon emoji="📝" color="bg-amber-100 text-amber-700" />}
              title="Content Marketing"
              description="Create valuable, relevant content to attract and retain your target audience, driving profitable customer action."
              features={['Content Strategy', 'Blog Post & Article Creation', 'Video Content Production', 'Infographics & E-books', 'Email Newsletter Campaigns', 'Performance Analysis']}
              image={contentImage}
              animationDirection="right"
            />
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-100/60 to-cyan-100/60 rounded-3xl mx-2 md:mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader
            title="Our Strategic Approach"
            subtitle="A data-driven, six-step process that ensures clarity, execution, and measurable results for your campaigns."
            center
          />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          >
            {[
              { number: "01", title: "Research & Analysis", description: "We dive deep into your business, audience, and competitors to build a rock-solid foundation." },
              { number: "02", title: "Strategy Development", description: "We create a customized digital marketing roadmap that aligns perfectly with your business goals." },
              { number: "03", title: "Implementation", description: "Our expert team executes the strategy with precision, ensuring every element works in harmony." },
              { number: "04", title: "Optimization", description: "We continuously monitor performance, making data-driven adjustments to maximize your results." },
              { number: "05", title: "Reporting", description: "Transparent, easy-to-understand reports keep you informed on campaign performance and ROI." },
              { number: "06", title: "Scaling", description: "We identify and amplify successful strategies to continuously grow your marketing impact and reach." }
            ].map((item) => (
              <motion.div
                key={item.number}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/40"
                variants={itemFromBottom}
              >
                <div className="text-3xl font-bold text-emerald-600 mb-4">{item.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader
            title="Complete Marketing Solutions"
            subtitle="Complementary services designed to enhance and amplify your digital marketing efforts across all channels."
            center
          />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          >
            <FeatureCard icon={<ServiceIcon emoji="📊" color="bg-emerald-100 text-emerald-700" />} title="Analytics & Reporting" description="Gain actionable insights into your performance with comprehensive analytics and detailed reporting." />
            <FeatureCard icon={<ServiceIcon emoji="🎯" color="bg-cyan-100 text-cyan-700" />} title="Marketing Strategy" description="Develop a complete digital marketing roadmap aligned perfectly with your business objectives." />
            <FeatureCard icon={<ServiceIcon emoji="✉️" color="bg-teal-100 text-teal-700" />} title="Email Marketing" description="Nurture leads and engage customers with targeted email campaigns that drive action." />
            <FeatureCard icon={<ServiceIcon emoji="🔄" color="bg-emerald-100 text-emerald-700" />} title="Conversion Rate Optimization" description="Improve your website's ability to convert visitors into customers through data-driven A/B testing." />
            <FeatureCard icon={<ServiceIcon emoji="🌟" color="bg-amber-100 text-amber-700" />} title="Influencer Marketing" description="Leverage the power of influencers to expand your reach and build authentic brand credibility." />
            <FeatureCard icon={<ServiceIcon emoji="🔁" color="bg-cyan-100 text-cyan-700" />} title="Remarketing Campaigns" description="Re-engage visitors who didn't convert with targeted ads across multiple platforms to boost ROI." />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-3xl p-8 sm:p-12 md:p-16 mx-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              variants={itemFromBottom}
            >
              Ready to Transform Your Digital Marketing?
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-emerald-100 mb-8 max-w-2xl mx-auto"
              variants={itemFromBottom}
            >
              Let's create a customized strategy that drives growth and delivers the results you deserve.
            </motion.p>
            <motion.div
              variants={itemFromBottom}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                className="bg-white hover:bg-gray-100 text-emerald-700 font-semibold py-3 px-7 rounded-lg transition-colors duration-300 shadow-lg"
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Get a Free Consultation
              </motion.button>
              <motion.button
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/80 font-semibold py-3 px-7 rounded-lg transition-colors duration-300"
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                View Our Portfolio
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
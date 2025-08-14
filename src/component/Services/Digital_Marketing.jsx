import React from 'react';
import { motion } from 'framer-motion';

// Placeholder images - in a real app, you would import actual assets
const heroImage = "https://placehold.co/1200x600/60A5FA/FFFFFF?text=Modern+Web+Dev";
const brandIdentityIcon = "https://placehold.co/80x80/34D399/FFFFFF?text=Brand";
const salesConversionsIcon = "https://placehold.co/80x80/FBBF24/FFFFFF?text=Sales";
const credibilityTrustIcon = "https://placehold.co/80x80/93C5FD/FFFFFF?text=Trust";
const customerSupportIcon = "https://placehold.co/80x80/EC4899/FFFFFF?text=Support";
const uxIcon = "https://placehold.co/80x80/8B5CF6/FFFFFF?text=UX";
const securityIcon = "https://placehold.co/80x80/EF4444/FFFFFF?text=Security";
const scalabilityIcon = "https://placehold.co/80x80/10B981/FFFFFF?text=Scale";

// Framer Motion variants for section entry
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const cardHoverVariants = {
  initial: { scale: 1, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" },
  hover: { scale: 1.05, boxShadow: "0 10px 15px rgba(0,0,0,0.2)", y: -5, transition: { type: "spring", stiffness: 300 } }
};

const ServiceFeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center border border-gray-200"
    variants={cardHoverVariants}
    initial="initial"
    whileHover="hover"
  >
    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
      <img src={icon} alt={title} className="w-12 h-12 object-contain" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
);

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Professional Web Development: <br className="hidden md:block"/> Your Digital Foundation for Growth
          </h1>
          <p className="text-lg md:text-xl font-light mb-8">
            Crafting functional, secure, and optimized websites that drive business success
          </p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>
      </section>

      {/* Introduction/Overview Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            The Heartbeat of Your Brand's Online Presence
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            In today's competitive digital landscape, your website is often the first interaction potential customers have with your business. Professional web development ensures this crucial first impression is impactful, with a site that is not just aesthetically pleasing but also functional, secure, and optimized to help your business thrive.
          </motion.p>
        </div>
      </motion.section>

      {/* Role of Web Development Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            The Pivotal Role of Web Development in Modern Business
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={itemVariants}>
              <ServiceFeatureCard
                icon={brandIdentityIcon}
                title="Brand Identity"
                description="Your website is the digital face of your brand, communicating its values and personality."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ServiceFeatureCard
                icon={salesConversionsIcon}
                title="Sales & Conversions"
                description="A well-designed site guides visitors through the sales funnel, turning leads into customers."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ServiceFeatureCard
                icon={credibilityTrustIcon}
                title="Credibility & Trust"
                description="A professional online presence builds confidence and establishes your authority in the market."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ServiceFeatureCard
                icon={customerSupportIcon}
                title="Customer Support"
                description="Provide seamless support, FAQs, and resources to enhance customer satisfaction."
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Advantages Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Key Advantages of Professional Web Development
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={itemVariants}>
              <ServiceFeatureCard
                icon={uxIcon}
                title="Enhanced User Experience (UX)"
                description="From fast loading speeds and mobile responsiveness to clear navigation and engaging layouts, we prioritize your users."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ServiceFeatureCard
                icon={securityIcon}
                title="Robust Security Measures"
                description="Protect your business from cyber threats with secure coding practices, regular updates, data encryption, and disaster recovery."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ServiceFeatureCard
                icon={scalabilityIcon}
                title="Scalability for Future Growth"
                description="Your website will be built to evolve with your business, easily accommodating new features, integrations, and international expansion."
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Invest Now Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Don't Delay: The Urgency of Investing in Web Development
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Delaying your investment in professional web development can be costly, leading to lost customers, reduced trust, and missed opportunities. Starting now means you reap the benefits sooner and stay ahead of the curve.
          </motion.p>
          <motion.ul variants={sectionVariants} className="space-y-4 text-left inline-block">
            <motion.li variants={itemVariants} className="flex items-start">
              <span className="text-yellow-400 text-2xl mr-3">&bull;</span>
              <p className="text-lg">
                <span className="font-semibold">Competitors are advancing:</span> Your rivals are continuously improving their online presence; don't get left behind.
              </p>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-start">
              <span className="text-yellow-400 text-2xl mr-3">&bull;</span>
              <p className="text-lg">
                <span className="font-semibold">Search engines favor optimized sites:</span> Well-built and regularly updated sites rank higher, increasing your visibility.
              </p>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-start">
              <span className="text-yellow-400 text-2xl mr-3">&bull;</span>
              <p className="text-lg">
                <span className="font-semibold">Catch-up is harder later:</span> The longer you wait, the more challenging it becomes to regain ground in rankings and market visibility.
              </p>
            </motion.li>
          </motion.ul>
        </div>
      </motion.section>

      {/* Final Thoughts / CTA Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Build Your Digital Future?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            In the digital-first economy, web development is not optional—it's essential. It's the platform upon which all your marketing, sales, and branding efforts are built. Let us help you create a powerful online presence that attracts, engages, and converts customers, keeping your brand ahead of the competition.
          </motion.p>
          <motion.button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}

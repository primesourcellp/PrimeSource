import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import webDevImg from '../../assets/web-development.png';

// CollapsibleContent Component
const CollapsibleContent = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left py-3 px-6 bg-gradient-to-r from-[#F0F7F6] to-[#E0F0EF] rounded-lg transition-all duration-300 hover:from-[#E0F0EF] hover:to-[#B8E1DD] shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#044A42]">{title}</h3>
        <span className={`text-3xl text-[#3A9188] font-semibold transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden bg-[#F9FCFB] rounded-b-lg border-l-4 border-[#3A9188]"
          >
            <div className="p-6 text-[#062925]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Website Features List
const FeaturesList = () => {
  const features = [
    "Responsive Design – Seamless experience across all devices",
    "SEO Optimized – Improve your search engine visibility",
    "Custom UI/UX – Engaging and intuitive user interfaces",
    "High Performance – Fast loading and reliable websites",
    "Security – Safe and secure web applications",
    "Scalable Solutions – Grow your website as your business grows"
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex items-start p-4 bg-white rounded-lg shadow-lg border border-[#B8E1DD] hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex-shrink-0 w-10 h-10 bg-[#3A9188] rounded-full flex items-center justify-center mr-4 mt-1">
            <span className="text-white font-bold text-lg">{index + 1}</span>
          </div>
          <span className="text-lg font-medium text-[#044A42]">{feature}</span>
        </motion.div>
      ))}
    </div>
  );
};

// Main Website Development Page
export default function WebsiteDevelopment() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="bg-white py-20 px-4 md:px-12">
      {/* Page Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-[#044A42] mb-4"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Website Development Services
        </motion.h1>
        <motion.div
          className="w-28 h-2 bg-[#3A9188] mx-auto rounded-full mb-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <motion.p
          className="text-[#062925] max-w-3xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We provide premium website development services that help businesses grow online. Our team delivers responsive, SEO-friendly, and user-centric websites designed to engage and convert.
        </motion.p>
      </motion.div>

      {/* Image & Intro */}
      <motion.div
        className="mx-auto flex flex-col md:flex-row items-center gap-12 mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-[#044A42] leading-tight">
            Build Your Digital Presence with Us
          </h2>
          <p className="text-[#062925] text-lg">
            Our website development services focus on creating websites that are visually stunning, fully functional, and optimized for performance. We combine modern design principles with best coding practices.
          </p>
          <CollapsibleContent title="Responsive Design">
            <p>Websites that work seamlessly across all devices, from mobile to desktop, providing a consistent user experience.</p>
          </CollapsibleContent>
          <CollapsibleContent title="SEO Optimized">
            <p>We implement SEO best practices so your website ranks higher on search engines, driving organic traffic and visibility.</p>
          </CollapsibleContent>
          <CollapsibleContent title="Custom UI/UX">
            <p>Designs that are engaging, intuitive, and aligned with your brand identity to ensure users love your website.</p>
          </CollapsibleContent>
        </motion.div>
        <motion.div variants={itemVariants} className="md:w-1/2 flex justify-center">
          <motion.img
            src={webDevImg}
            alt="Website Development"
            className="w-full max-w-lg rounded-2xl shadow-2xl border border-[#B8E1DD] object-cover"
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="mx-auto mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-[#044A42] mb-8 text-center">Why Choose Our Web Development Services?</h2>
        <FeaturesList />
      </motion.div>

      {/* Additional Content */}
      <motion.div
        className="mx-auto max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p className="text-[#062925] text-lg mb-6" variants={itemVariants}>
          From corporate websites to e-commerce platforms, we handle every aspect of website development. We focus on speed, scalability, and secure coding practices to ensure your online presence is robust and future-proof.
        </motion.p>
        <motion.p className="text-[#062925] text-lg" variants={itemVariants}>
          Partner with us to transform your ideas into high-performance websites that attract, engage, and convert visitors effectively.
        </motion.p>
      </motion.div>
    </section>
  );
}

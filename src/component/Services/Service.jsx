import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import React, { useState } from 'react';

// Import images (update paths as needed)
import parallaxBg from '../../assets/IMG_2189[1].jpg';
import webDevImg from '../../assets/two.png';
import dataMigrationImg from '../../assets/logo_primary_1.png';
import digitalMarketingImg from '../../assets/logo_primary_3.png';
import sapConsultingImg from '../../assets/sap_png.png';
import hrConsultingImg from '../../assets/hr.png';
import payrollImg from '../../assets/payroll.png';
import staffingImg from '../../assets/Full_time_staffing.png';
import globalSourcingImg from '../../assets/Global_sourcing.png';
import contractStaffingImg from '../../assets/contract_staffing.png';
import webAppImg from '../../assets/two.png';
import expertiseIcon from '../../assets/hero.png'; // Example icon for a feature card
import qualityIcon from '../../assets/hero.png';
import integrityIcon from '../../assets/hero.png';
import trackRecordIcon from '../../assets/hero.png';
import supportIcon from '../../assets/hero.png';
import ServicesSection from '../ServicesCompo/servicecompo'

// ServiceCard component - updated for new design
const ServiceCard = ({ title, description, image }) => (
  <div className="flex flex-col items-center p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 border border-white/20 h-full">
    <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-[#E0F0EF] p-2">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 object-contain"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/80x80/cccccc/ffffff?text=Img";
        }}
      />
    </div>
    <h3 className="text-xl font-semibold text-[#3A9188] mb-2 text-center">{title}</h3>
    <p className="text-[#062925] text-center text-sm">{description}</p>
  </div>
);

// FeatureCard component - updated for new design
const FeatureCard = ({ title, content, icon }) => (
  <div className="flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 h-full">
    <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#E0F0EF] p-2">
      <img
        src={icon}
        alt={`${title} icon`}
        className="w-14 h-14 object-contain"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/48x48/cccccc/ffffff?text=Icon";
        }}
      />
    </div>
    <h3 className="text-xl font-semibold text-[#3A9188] mb-2 text-center">{title}</h3>
    <p className="text-sm text-center text-[#062925]">{content}</p>
  </div>
);

export default function ServicesPage() {
  // Parallax background logic
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 1000]);

  const services = [
    {
      title: 'Web & Web Application Development',
      description: 'We deliver web development solutions that empower businesses to innovate, expand, and thrive — guiding you seamlessly from the first idea to a flawless launch.',
      image: webDevImg,
    },
    {
      title: 'Data Migration',
      description: 'Empower your business with a smooth, secure, and stress-free data transfer through our expert Data Migration Services.',
      image: dataMigrationImg,
    },
    {
      title: 'Digital Marketing',
      description: 'Our digital marketing specialists design powerful strategies that amplify your online presence and elevate your brand\'s visibility to new heights.',
      image: digitalMarketingImg,
    },
    {
      title: 'SAP Consulting',
      description: 'Through our SAP consulting services, we empower businesses to streamline operations, maximize efficiency, and drive sustainable growth.',
      image: sapConsultingImg,
    },
    {
      title: 'HR Consulting',
      description: 'Our HR consulting services are crafted to simplify and optimize your recruitment process, helping you secure the right talent with ease and precision.',
      image: hrConsultingImg,
    },
    {
      title: 'Payroll Management',
      description: 'Our system simplifies business operations with smart solutions that drive efficiency and enhance performance.',
      image: payrollImg,
    },
    {
      title: 'Full Time Staffing',
      description: 'We deliver top industry talent through a meticulous screening process, streamlining recruitment and ensuring the perfect fit for your business needs.',
      image: staffingImg,
    },
    {
      title: 'Global Sourcing',
      description: 'Our dedicated team connects leading IT professionals with companies seeking top level skills to drive success.',
      image: globalSourcingImg,
    },
    {
      title: 'Contract Staffing',
      description: 'We provide the right talent exactly when you need it—whether for short-term projects or permanent roles, we ensure you\'re fully covered.',
      image: contractStaffingImg,
    },
  ];

  const whyChooseUs = [
    {
      title: "Specific Expertise",
      content: "Our consultants bring deep domain knowledge across sectors including IT, data migration, digital marketing, HR consulting, contract, staffing, and more — ensuring tailored solutions for every hiring need.",
      icon: expertiseIcon,
    },
    {
      title: "Quality Over Quantity",
      content: "We focus on precision hiring, delivering only the most relevant and pre-screened candidates to save your time and boost recruitment efficiency.",
      icon: qualityIcon,
    },
    {
      title: "Integrity-Driven Partnerships",
      content: "Built on a foundation of trust and transparency, we value long-term relationships with both employers and job seekers.",
      icon: integrityIcon,
    },
    {
      title: "Proven Track Record",
      content: "Hundreds of companies and thousands of professionals have trusted us for reliable, results-driven recruitment services.",
      icon: trackRecordIcon,
    },
    {
      title: "End-to-End Recruitment Support",
      content: "From sourcing to onboarding, we manage the entire hiring process — letting you focus on your core business while we handle the talent.",
      icon: supportIcon,
    }
  ];

  // Framer Motion variants for section entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  // NEW: Hover variants for card animations
  const hoverVariants = {
    initial: {
      x: 0,
      y: 0,
      scale: 1,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.2 }
    },
    hover: (direction) => ({
      x: direction === 'left' ? -10 : direction === 'right' ? 10 : 0,
      y: direction === 'top' ? -10 : direction === 'bottom' ? 10 : 0,
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }),
  };

  const directions = ['left', 'right', 'top', 'bottom'];

  return (
    <div className="relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${parallaxBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y
        }}
      />

      {/* Content Container with semi-transparent overlay */}
      <div className="relative z-10 min-h-screen bg-black/20 backdrop-blur-sm">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Comprehensive Business Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              We deliver tailored services designed to drive growth, efficiency, and innovation for your business.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white text-[#044A42] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Services
            </motion.button>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#044A42] bg-opacity-90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
            >
              Why Choose Us
            </motion.h2>

            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {whyChooseUs.map((feature, index) => (
                <motion.div
                  key={index}
                  className="w-full md:w-[48%] lg:w-[30%]"
                  variants={itemVariants}
                >
                  <motion.div
                    className="h-full"
                    initial="initial"
                    whileHover="hover"
                    custom={directions[index % directions.length]}
                    variants={hoverVariants}
                  >
                    <FeatureCard {...feature} />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-9xl mx-auto bg-gradient-to-r from-[#044A42] to-[#3A9188] rounded-xl p-8 md:p-12 text-center text-white shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <button className="bg-white text-[#044A42] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg">
              Contact Us
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
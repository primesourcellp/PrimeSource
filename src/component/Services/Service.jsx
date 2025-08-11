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
import heroImg from '../../assets/hero.png';
import expertiseIcon from '../../assets/hero.png'; // Example icon for a feature card
import qualityIcon from '../../assets/hero.png';
import integrityIcon from '../../assets/hero.png';
import trackRecordIcon from '../../assets/hero.png';
import supportIcon from '../../assets/hero.png';

// ServiceCard component (no changes needed)
const ServiceCard = ({ title, description, image }) => (
  <div className="flex flex-col h-full p-8 pt-10 bg-[#B8E1DD] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
    <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-[#E0F0EF] p-2 mx-auto">
      <img
        src={image}
        alt={title}
        className="w-20 h-20 object-contain"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/80x80/cccccc/ffffff?text=Img";
        }}
      />
    </div>
    <h3 className="text-xl font-semibold text-[#3A9188] mb-2 text-center">{title}</h3>
    <p className="text-[#062925] text-center">{description}</p>
  </div>
);

// New FeatureCard component for "Why Choose Us" section
const FeatureCard = ({ title, content, icon }) => (
  <div className="flex flex-col h-full p-6 bg-[#B8E1DD] rounded-xl shadow-lg border border-gray-100 transition-all duration-300">
    <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#E0F0EF] p-2 mx-auto">
      <img
        src={icon}
        alt={`${title} icon`}
        className="w-12 h-12 object-contain"
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
  const y = useTransform(scrollY, [0, 500], [0, 1]); // Changed back to [0, 100] for a more noticeable effect

  const services = [
    {
      title: 'Web Development',
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
    {
      title: 'Web Application',
      description: 'Our focus on performance, security, and usability ensures you stay ahead in a competitive digital landscape.',
      image: webAppImg,
    }
  ];

  // Updated 'whyChooseUs' data to include an icon for each card
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
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      style={{
        backgroundImage: `url(${parallaxBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        y,
      }}
      className="min-h-screen relative"
    >
      <div className="bg-[#F6F6F6]/80 backdrop-blur-sm min-h-screen">
        {/* Hero Section - Styled like Home page Hero */}
        <div className="relative w-full">
          <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-10 py-45 px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="md:w-1/2 text-center md:text-left"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-extrabold text-[#062925] mb-6 leading-tight">
                Comprehensive Business Solutions
              </h1>
              <p className="text-xl text-[#044A42] mb-8">
                We deliver tailored services designed to drive growth, efficiency, and innovation for your business.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={heroImg} alt="Hero" className="w-full max-w-lg rounded-2xl shadow-2xl border-[#B8E1DD]" />
            </motion.div>
          </div>
        </div>

        {/* Services Section - Styled like Home page's "Our Services" */}
        <div className="w-full pt-16 mb-20 px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-[#044A42] mb-12"
          >
            Our Services
          </motion.h2>
          <motion.div
            className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Why Choose Us Section - REVISED STRUCTURE */}
        <div className="w-full mb-20 px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-[#044A42] mb-12"
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section - Maintains existing professional style */}
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
          <section className="text-center max-w-screen-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-[#044A42] rounded-xl p-8 md:p-12 text-white shadow-xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your business goals.
              </p>
              <button className="bg-white text-[#044A42] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </motion.div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
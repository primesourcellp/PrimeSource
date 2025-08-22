import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import companyIntroImg from '../../assets/four.png';
import ethicsImg from '../../assets/one.png';
import developmentProcessImg from '../../assets/three.png';
import hrSolutionsImg from '../../assets/five.png';

// Scroll animation variants
const scrollVariants = {
  offscreen: {
    opacity: 0,
    y: 50
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

// Directional animation variants
const slideInFromLeft = {
  offscreen: {
    opacity: 0,
    x: -50
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.5
    }
  }
};

const slideInFromRight = {
  offscreen: {
    opacity: 0,
    x: 50
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.5
    }
  }
};

const fadeIn = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

const CollapsibleContent = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="mb-4 "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, margin: "-50px" }}
      variants={scrollVariants}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left py-3 px-6 bg-gradient-to-r from-[#F0F7F6] to-[#E0F0EF] rounded-lg transition-all duration-300 hover:from-[#E0F0EF] hover:to-[#B8E1DD] shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#044A42]">{title}</h3>
        <motion.span 
          className="text-3xl text-[#3A9188] font-semibold"
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? '−' : '+'}
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-[#F9FCFB] rounded-b-lg border-l-4 border-[#3A9188]"
          >
            <div className="p-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WhatWeDoList = () => {
  const items = [
    "Premium Software Development",
    "Strategic Digital Marketing",
    "Expert HR Consulting",
    "Efficient Payroll Management",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 ">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-[#B8E1DD] hover:shadow-md transition-all duration-300"
        >
          <div className="flex-shrink-0 w-8 h-8 bg-[#3A9188] rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold">{index + 1}</span>
          </div>
          <span className="text-lg font-medium text-[#044A42]">{item}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default function About() {
  return (
    <section className="py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-emerald-50 to-cyan-50 min-h-screen">
      {/* About Us Main Heading */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 pt-10"
      >
        <motion.h1
          className="text-5xl font-extrabold text-[#044A42] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          About Us
        </motion.h1>
        <motion.div
          className="w-24 h-2 bg-[#3A9188] mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>
      
      {/* Section 1: Your Partner in Digital & Business Solutions */}
      <motion.div
        className="mx-auto flex flex-col md:flex-row items-center gap-12 mb-20 max-w-7xl"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollVariants}
      >
        <motion.div 
          className="md:w-1/2 text-left"
          variants={slideInFromLeft}
        >
          <h2 className="text-3xl font-bold text-[#044A42] mb-6 leading-tight">
           Your Trusted Web Development Partner -Delivering Scalable Solutions, Driving Digital Growth.
          </h2>
          <motion.p 
            className="text-[#062925] text-lg mb-8"
            variants={fadeIn}
          >
            At Primesource , we are trusted technology partner committed to driving digital success. Built on a foundation of innovation, excellence, and integrity, we deliver end-to-end IT development and consulting services that empower businesses to thrive in a rapidly changing digital world.

          </motion.p>
          <motion.h3 
            className="text-2xl font-bold text-[#044A42] mb-4"
            variants={fadeIn}
          >
            Our Core Services
          </motion.h3>
          <WhatWeDoList />
        </motion.div>
        <motion.div 
          className="md:w-1/2 flex justify-center"
          variants={slideInFromRight}
        >
          <motion.img
            src={companyIntroImg}
            alt="PrimeSource Consulting Team Collaboration"
            className="w-full max-w-lg rounded-2xl shadow-xl  object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </motion.div>
      </motion.div>

      {/* Section 2: Our Commitment to Quality */}
      <motion.div
        className="mx-auto flex flex-col md:flex-row-reverse items-center gap-12 mb-20 max-w-7xl"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollVariants}
      >
        <motion.div 
          className="md:w-1/2 text-left"
          variants={slideInFromRight}
        >
          <h2 className="text-3xl font-bold text-[#044A42] mb-6 leading-tight">
           Why Primesource Consulting Stands Out in Web Applications Development
          </h2>
          <motion.p 
            className="text-[#062925] text-lg mb-8"
            variants={fadeIn}
          >
          At Primesource, we create more than web application — we design complete digital experiences. Our team powers every project with innovation and expertise, delivering solutions that enable businesses to grow, scale, and achieve global success.
          </motion.p>
        
         <CollapsibleContent title="Creative Excellence">
            <p className="text-lg text-[#062925]">
              At Primesource, we go beyond traditional web development by delivering high-impact digital solutions that push boundaries. Every project is designed to drive measurable change, combining creativity, technology, and innovation to build experiences that stand out.
            </p>
          </CollapsibleContent>
         <CollapsibleContent title="Success-Focused Strategy">
            <p className="text-lg text-[#062925]">
              Your success is our mission. With strategic planning, tailored development, and performance-focused solutions, we help your business scale faster and reach new markets with confidence.
            </p>
          </CollapsibleContent>
         <CollapsibleContent title="Worldwide Expertise, Local Value">
            <p className="text-lg text-[#062925]">
              As a globally connected firm, we bring worldwide expertise to every project. From startups to enterprises, we collaborate across industries and geographies, ensuring your digital presence resonates with audiences everywhere.
            </p>
          </CollapsibleContent>
         <CollapsibleContent title="Strong Partnerships">
            <p className="text-lg text-[#062925]">
            We believe the best results come from teamwork. Our open and transparent process ensures your ideas are valued, your voice is heard, and your vision is transformed into powerful digital solutions.
            </p>
          </CollapsibleContent>
         <CollapsibleContent title="Evolving with Technology">
            <p className="text-lg text-[#062925]">
             Technology evolves rapidly — and so do we. At Primesource Consulting LLP, we stay ahead with the latest frameworks, tools, and best practices, ensuring your business always benefits from cutting-edge web development.
            </p>
          </CollapsibleContent>
        </motion.div>
        <motion.div 
          className="md:w-1/2 flex justify-center"
          variants={slideInFromLeft}
        >
          <motion.img
            src={ethicsImg}
            alt="Our Commitment to Quality and Ethics"
            className="w-full max-w-lg rounded-2xl shadow-xl border-1 border-[#B8E1DD] object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </motion.div>
      </motion.div>

      {/* Section 3: Premium Web & App Development */}
      <motion.div
        className="mx-auto flex flex-col md:flex-row items-center gap-12 mb-20 max-w-7xl"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollVariants}
      >
        <motion.div 
          className="md:w-1/2 text-left"
          variants={slideInFromLeft}
        >
          <h2 className="text-4xl font-bold text-[#044A42] mb-6 leading-tight">
            Premium Software Development
          </h2>
          <motion.p 
            className="text-[#062925] text-lg mb-8"
            variants={fadeIn}
          >
            We transform your ideas into high-performance, scalable, and secure digital products. Our development process is designed for clarity, efficiency, and superior quality, ensuring your project is a success from conception to launch. We build premium software that works flawlessly and looks incredible.
          </motion.p>
          <CollapsibleContent title="Website Development">
            <p className="text-lg text-[#062925]">
              At Primesource, we design and develop websites that go beyond aesthetics — we create digital platforms that connect, engage, and convert. In today’s competitive market, your website is the first impression of your brand, and we make sure it is powerful, user-friendly, and future-ready. Our website development services combine creativity, technology, and strategy to deliver solutions that help businesses establish a strong online presence and achieve measurable results.
            </p>
          </CollapsibleContent>
          <CollapsibleContent title="Web Application Development">
            <p className="text-lg text-[#062925]">
         At Primesource, we create web applications that are robust, scalable, and user-friendly — designed to help businesses succeed in the digital era. From simple tools to complex enterprise platforms, our solutions combine cutting-edge technology with creative problem-solving, ensuring applications that are both functional and visually engaging.
            </p>
          </CollapsibleContent>
          <CollapsibleContent title="Mobile Application Development">
            <p className="text-lg text-[#062925]">
         At Primesource, we specialize in building powerful mobile applications for Android and iOS platforms that deliver functionality, performance, and exceptional user experience. In today’s mobile-first world, apps are more than just tools — they are gateways that connect businesses with customers, enhance engagement, and drive growth. Our mobile app development services are designed to help organizations bring their ideas to life with innovative, secure, and scalable solutions.
            </p>
          </CollapsibleContent>
        </motion.div>
        <motion.div 
          className="md:w-1/2 flex justify-center"
          variants={slideInFromRight}
        >
          <motion.img
            src={developmentProcessImg}
            alt="Our Development Process"
            className="w-full max-w-lg rounded-2xl shadow-xl border-1 border-[#B8E1DD] object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </motion.div>
      </motion.div>

      {/* Section 4: Expert HR & Payroll Solutions */}
      <motion.div
        className="mx-auto flex flex-col md:flex-row-reverse items-center gap-12 mb-20 max-w-7xl"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollVariants}
      >
        <motion.div 
          className="md:w-1/2 text-left"
          variants={slideInFromRight}
        >
          <h2 className="text-4xl font-bold text-[#044A42] mb-6 leading-tight">
            Streamline Operations with HR & Payroll
          </h2>
          <motion.p 
            className="text-[#062925] text-lg mb-8"
            variants={fadeIn}
          >
            Focus on growing your business while we handle the complexities of human resources and payroll. Our services are designed to improve efficiency, ensure compliance, and support your most valuable asset—your people.
          </motion.p>
          <CollapsibleContent title="Expert HR Consulting">
            <p className="text-lg text-[#062925]">
              From talent acquisition and onboarding to policy development and compliance, our HR experts provide the strategic support you need to build a strong and effective team.
            </p>
          </CollapsibleContent>
          <CollapsibleContent title="Efficient Payroll Management">
            <p className="text-lg text-[#062925]">
              Ensure your team is paid accurately and on time, every time. We manage salary processing, tax compliance, and reporting with precision, freeing you from administrative burdens.
            </p>
          </CollapsibleContent>
        </motion.div>
        <motion.div 
          className="md:w-1/2 flex justify-center"
          variants={slideInFromLeft}
        >
          <motion.img
            src={hrSolutionsImg}
            alt="HR and Payroll Solutions"
            className="w-full max-w-lg rounded-2xl shadow-xl border-1 border-[#B8E1DD] object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </motion.div>
      </motion.div>

      {/* Section 5: Strategic Digital Marketing */}
      <motion.div
        className="mx-auto flex flex-col md:flex-row items-center gap-12 mb-20 max-w-7xl"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollVariants}
      >
        <motion.div 
          className="md:w-1/2 text-left"
          variants={slideInFromLeft}
        >
          <h2 className="text-4xl font-bold text-[#044A42] mb-6 leading-tight">
            Amplify Your Brand with Digital Marketing
          </h2>
          <motion.p 
            className="text-[#062925] text-lg mb-8"
            variants={fadeIn}
          >
            A great product deserves a great audience. Our digital marketing services are designed to enhance your online presence, connect with your target customers, and drive meaningful growth for your business through data-driven strategies.
          </motion.p>
          <CollapsibleContent title="SEO & Content Marketing">
            <p className="text-lg text-[#062925]">
              We boost your visibility on search engines and establish you as an industry authority with high-quality, engaging content that attracts and converts your ideal customers.
            </p>
          </CollapsibleContent>
          <CollapsibleContent title="Social Media & PPC Campaigns">
            <p className="text-lg text-[#062925]">
              From building a community on social media to running targeted pay-per-click (PPC) advertising campaigns, we create and manage strategies that deliver a high return on investment.
            </p>
          </CollapsibleContent>
        </motion.div>
        <motion.div 
          className="md:w-1/2 flex justify-center"
          variants={slideInFromRight}
        >
          <motion.img
            src={companyIntroImg}
            alt="Digital Marketing Strategy"
            className="w-full max-w-lg rounded-2xl shadow-xl border-1 border-[#B8E1DD] object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </motion.div>
      </motion.div>

      {/* New Section: Career Call-to-Action */}
      <motion.div
        className="mx-auto text-center py-16 max-w-4xl"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={scrollVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-[#044A42] mb-8"
          variants={fadeIn}
        >
          Join Our Team
        </motion.h2>
        <motion.p
          className="text-2xl text-[#062925] font-medium leading-relaxed"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Join Primesource Consulting LLP and build a career that challenges you, supports you, and takes you further than you imagined.
        </motion.p>
      </motion.div>
    </section>
  );
}
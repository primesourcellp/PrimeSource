import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Main background image
import heroBg from '../../assets/intro.jpg';
// Background images for each process step
import needsAssessmentBg from '../../assets/intro.jpg';
import sourcingBg from '../../assets/intro.jpg';
import interviewBg from '../../assets/intro.jpg';
import complianceBg from '../../assets/intro.jpg';
import supportBg from '../../assets/intro.jpg';

const GlobalRecruitmentPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Process steps data
  const processSteps = [
    {
      title: "Needs Assessment",
      description: "We start by understanding your staffing needs, role specifications, and company culture.",
      bgImage: needsAssessmentBg
    },
    {
      title: "Sourcing & Screening",
      description: "Using global databases, we source and screen candidates who meet your criteria.",
      bgImage: sourcingBg
    },
    {
      title: "Interview & Evaluation",
      description: "We conduct in-depth interviews and assessments to ensure top-quality hires.",
      bgImage: interviewBg
    },
    {
      title: "Compliance & Onboarding",
      description: "Our team handles all documentation, visa processing, and smooth onboarding logistics.",
      bgImage: complianceBg
    },
    {
      title: "Post-Hire Support",
      description: "We provide ongoing support to ensure new employees integrate successfully.",
      bgImage: supportBg
    }
  ];

  return (
    <section className="bg-[#F6F6F6] pt-20 pb-20 font-sans">
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center py-70 min-h-[400px] flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <motion.div
          className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Global Recruitment Solutions
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
            Connecting Top Talent with Opportunities Worldwide
          </p>
        </motion.div>
      </div>

      {/* Introduction Section */}
      <div
        className="w-full mt-[-80px] mb-20 px-4 sm:px-6 lg:px-8 relative z-10"
        data-aos="fade-up"
      >
        <motion.div
          className="max-w-screen-xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <p className="text-lg text-center text-[#062925] leading-relaxed">
            In today's interconnected world, securing the right talent is crucial for global success. Our comprehensive recruitment services are designed to help you build a world-class team, no matter where your next hire is located. We manage the entire process, ensuring a seamless and efficient experience from start to finish.
          </p>
        </motion.div>
      </div>

      {/* Process Section Header */}
      <div className="text-center mb-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-[#044A42] mb-4">
          Our Global Recruitment Process
        </h2>
        <p className="text-lg text-[#062925] max-w-2xl mx-auto">
          Our process is meticulously crafted to identify, vet, and onboard the best candidates globally.
        </p>
      </div>

      {/* Process Steps Grid */}
      <motion.div
        className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 pb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 border border-gray-100 relative overflow-hidden group"
          >
            {/* Background image with overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
              style={{ backgroundImage: `url(${step.bgImage})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-30"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-[#044A42] mb-3">{step.title}</h3>
              <p className="text-[#062925]">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
        
        {/* Empty div to center the last card on medium screens */}
        <div className="hidden md:block lg:hidden"></div>
      </motion.div>

      {/* Call to Action Section */}
      <div className="w-full" data-aos="fade-up">
        <div className="max-w-screen-xl mx-auto text-center bg-[#B8E1DD] text-white py-16 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#044A42] mb-4">
              Build Your Global Team with Confidence
            </h2>
            <p className="text-lg sm:text-xl text-[#062925] mb-8 max-w-3xl mx-auto">
              Whether you need a single specialist or an entire team, PrimeSource LLP delivers recruitment solutions customized to your business goals.
            </p>
            <Link to="/contact">
              <motion.button
                className="bg-[#3A9188] text-white px-10 py-4 rounded-full shadow-lg hover:bg-[#044A42] transition-colors duration-300 font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalRecruitmentPage;
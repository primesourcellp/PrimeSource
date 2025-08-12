import { motion } from "framer-motion";
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importing your image assets.
import appImg from '../../assets/five.png';
import webImg from '../../assets/four.png';
import heroImg from '../../assets/hero.png';
import meetingImg from '../../assets/one.png';
import userImg from '../../assets/three.png';
import teamImg from '../../assets/two.png';
import clientLogo from '../../assets/client_logo_1.png';
import heroBg from '../../assets/intro.jpg';
import JobDriveBanner from '../MovingDots/dot';
import { Link } from "react-router-dom";

// Main Home component
export default function Home() {
  const logosContainerRef = useRef(null);
  const logos = Array(10).fill(clientLogo);

  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  // Framer Motion variants for animations
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

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    },
    highlight: {
      scale: 1.2,
      filter: 'grayscale(0%)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="bg-[#F6F6F6] pt-20 pb-20">
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-10 bg-[#F6F6F6] opacity-5 z-0"></div>
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-10 py-70 px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ y: 50, opacity: 90 }}
            animate={{ y: [30, 0, 30], opacity: [10, 1, 10] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <motion.h1
              className="text-5xl font-extrabold text-[#062925] mb-6 leading-tight"
              animate={{ y: [20, 0, 20] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              We turn your career dreams into clickable reality.
            </motion.h1>
            <motion.p
              className="text-xl text-[#044A42] mb-8"
              animate={{ y: [20, 0, 20] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.1,
              }}
            >
              Driving Innovation with Expert Development Consulting for Business Success.
            </motion.p>
          </motion.div>
          <JobDriveBanner />
        </div>
      </div>

      {/* About Us Section */}
      <div
        className="w-full pt-1 mb-20 px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <motion.div
          className="max-w-screen-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#044A42] mb-6 text-center"
          >
            About Our Company
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="md:w-1/2">
              <motion.p
                variants={itemVariants}
                className="text-lg text-[#062925] mb-6"
              >
                Built on a foundation of excellence and integrity, PrimeSource Consulting LLP stands as a trusted partner for employers and job seekers alike. Leveraging our deep industry expertise and expansive network, we deliver exceptional placement solutions that drive success for both clients and candidates.
              </motion.p>
            </div>
            <div className="md:w-1/2 bg-[#B8E1DD] p-6 rounded-xl">
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-[#044A42] mb-4 text-center"
              >
                Your Nationwide Talent Partner
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="text-lg text-[#062925] text-center italic"
              >
                Trusted by Employers, Preferred by Professionals
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Career Section */}
      <div
        className="w-full mb-20 px-4 sm:px-6 lg:px-8"
        data-aos="fade-right"
      >
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-10 pt-2">
          <div className="md:w-1/2 flex justify-center">
            <motion.img
              src={teamImg}
              alt="Career Team"
              className="w-full max-w-lg rounded-2xl shadow-xl border-[#3A9188]"
              whileHover={{ scale: 1.02 }}
            />
          </div>
          <motion.div
            className="md:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            data-aos="fade-left"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#044A42] mb-4">Your Career</motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-[#062925] mb-6">
              Driven by Commitment, Focused on Your Success – Partner with PrimeSource Consulting LLP
            </motion.p>
            <motion.ul variants={containerVariants} className="list-disc list-inside text-[#044A42] space-y-2 text-base">
              <motion.li variants={itemVariants}>Empowering careers and fueling business growth</motion.li>
              <motion.li variants={itemVariants}>Strong presence across India</motion.li>
              <motion.li variants={itemVariants}>Commitment to excellence, integrity, and results-driven hiring solutions</motion.li>
            </motion.ul>
            <Link to="/job-seeker">
              <motion.button
                className="mt-8 md:mt-8 bg-[#3A9188] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#044A42] transition font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div
        className="w-full mb-20 px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="md:w-1/2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-aos="fade-right"
          >
            <h2 className="text-3xl font-bold text-[#044A42] mb-4">Why Choose Us</h2>
            <p className="text-lg text-[#062925] mb-6">
              At PrimeSource Consulting LLP, we go beyond recruitment — we empower careers and fuel business growth. With a strong presence across India, organizations and professionals alike trust us for our commitment to excellence, integrity, and results-driven hiring solutions.
            </p>
            <ul className="list-disc list-inside text-[#044A42] space-y-2 text-base">
              <motion.li
                whileHover={{ x: 5 }}
                className="hover:text-[#3A9188] transition"
              >
                <span className="font-semibold">Specific Expertise:</span> Deep domain knowledge across IT, data migration, digital marketing, HR consulting, contract, staffing, and more
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="hover:text-[#3A9188] transition"
              >
                <span className="font-semibold">Quality Over Quantity:</span> Precision hiring, delivering only the most relevant and pre-screened candidates
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="hover:text-[#3A9188] transition"
              >
                <span className="font-semibold">Integrity-Driven Partnerships:</span> Trust and transparency for long-term relationships
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="hover:text-[#3A9188] transition"
              >
                <span className="font-semibold">Proven Track Record:</span> Trusted by hundreds of companies and thousands of professionals
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="hover:text-[#3A9188] transition"
              >
                <span className="font-semibold">End-to-End Recruitment Support:</span> From sourcing to onboarding, we manage the entire hiring process
              </motion.li>
            </ul>
          </motion.div>
          <div className="md:w-1/2 flex justify-center">
            <motion.img
              src={userImg}
              alt="Meeting"
              className="w-full max-w-lg rounded-2xl shadow-xl border-1 border-[#B8E1DD]"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div
        className="w-full mb-12 px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-[#044A42] mb-8 text-center">Our Services</h2>
        <motion.div
          className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="bg-[#B8E1DD] p-8 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition"
            whileHover={{ y: -10 }}
              data-aos="fade-right"
>
            <img src={appImg} alt="Contract Staffing" className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold text-[#3A9188] mb-2">Contract Staffing</h3>
            <p className="text-[#062925] text-center">Flexible workforce solutions for your business needs.</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-[#B8E1DD] p-8 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition"
            whileHover={{ y: -10 }}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <img src={webImg} alt="Global Sourcing" className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold text-[#3A9188] mb-2">Global Sourcing</h3>
            <p className="text-[#062925] text-center">Access top talent from around the world.</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-[#B8E1DD] p-8 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition"
            whileHover={{ y: -10 }}
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            <img src={userImg} alt="Payroll Management" className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold text-[#3A9188] mb-2">Payroll Management</h3>
            <p className="text-[#062925] text-center">Efficient and accurate payroll services.</p>
          </motion.div>
        </motion.div>
        <motion.div
          className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="bg-[#B8E1DD] p-8 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition"
            whileHover={{ y: -10 }}
            data-aos="zoom-in-up"
            data-aos-delay="600"
          >
            <img src={meetingImg} alt="HR Consulting" className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold text-[#3A9188] mb-2">HR Consulting</h3>
            <p className="text-[#062925] text-center">Expert HR advice and solutions for your organization.</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-[#B8E1DD] p-8 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition"
            whileHover={{ y: -10 }}
            data-aos="zoom-in-up"
            data-aos-delay="800"
          >
            <img src={appImg} alt="SAP Consulting" className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold text-[#3A9188] mb-2">SAP Consulting</h3>
            <p className="text-[#062925] text-center">Specialized SAP solutions for business transformation.</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-[#B8E1DD] p-8 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition"
            whileHover={{ y: -10 }}
            data-aos="zoom-in-up"
            data-aos-delay="1000"
          >
            <img src={webImg} alt="Digital Marketing" className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold text-[#3A9188] mb-2">Digital Marketing</h3>
            <p className="text-[#062925] text-center">Grow your brand with our digital marketing expertise.</p>
          </motion.div>
        </motion.div>
        <motion.div
          className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="bg-[#B8E1DD] p-8 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition"
            whileHover={{ y: -10 }}
            data-aos="zoom-in-up"
            data-aos-delay="1200"
          >
            <img src={userImg} alt="Data Migration" className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold text-[#3A9188] mb-2">Data Migration</h3>
            <p className="text-[#062925] text-center">Seamless migration of your business data.</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-[#B8E1DD] p-8 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition"
            whileHover={{ y: -10 }}
            data-aos="zoom-in-up"
            data-aos-delay="1400"
          >
            <img src={webImg} alt="Web Development" className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold text-[#3A9188] mb-2">Web Development & Application</h3>
            <p className="text-[#062925] text-center">Custom web solutions and applications for your business.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Client Logos Marquee Section */}
      <div className="w-full my-20 py-12 bg-white rounded-2xl shadow-lg overflow-hidden px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-screen-2xl mx-auto"
          data-aos="fade-in"
        >
          <h2 className="text-3xl font-bold text-[#044A42] mb-12 text-center">
            Trusted By Leading Companies
          </h2>
          {/* Desktop Version - Infinite Marquee */}
          <div className="hidden md:block relative h-32 overflow-hidden">
            <motion.div
              className="absolute flex items-center h-full"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <motion.div
                  key={`desktop-${index}`}
                  className={`flex-shrink-0 px-8 ${index % 5 === 2 ? 'highlighted-logo' : ''}`}
                  whileHover="hover"
                  variants={logoVariants}
                  initial="visible"
                  animate={index % 5 === 2 ? "highlight" : "visible"}
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className={`h-16 object-contain ${index % 5 === 2 ? 'grayscale-0' : 'grayscale'} transition-all duration-300`}
                  />

                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Version - Single Highlighted Logo */}
          <div className="md:hidden">
            <motion.div
              className="flex overflow-x-auto py-4 hide-scrollbar"
              ref={logosContainerRef}
            >
              {logos.map((logo, index) => (
                <motion.div
                  key={`mobile-${index}`}
                  className={`flex-shrink-0 px-6 ${index === 2 ? 'highlighted-logo' : ''}`}
                  whileHover="hover"
                  variants={logoVariants}
                  initial="visible"
                  animate={index === 2 ? "highlight" : "visible"}
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className={`h-16 object-contain ${index === 2 ? 'grayscale-0' : 'grayscale'} transition-all duration-300`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
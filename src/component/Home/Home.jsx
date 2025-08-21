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
import Hero from '../../assets/Guy_Animation_Reversed_Edit.gif';

import clientLogo from '../../assets/client_logo_1.png';
import clientLogo1 from '../../assets/client_logo_2.png';
import clientLogo2 from '../../assets/client_logo_3.png';
import clientLogo3 from '../../assets/client_logo_4.png';
import clientLogo4 from '../../assets/client_logo_5.png';
import heroBg from '../../assets/intro.jpg';
import JobDriveBanner from '../MovingDots/dot';
import FollowCursorContact from '../Animations/Smoke';
import { Link } from "react-router-dom";
import ServicesSection from '../ServicesCompo/servicecompo'

// Main Home component
export default function Home() {
  const logosContainerRef = useRef(null);
  const logos = [
  clientLogo,
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
 
];


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
    <section className=" pt-0 pb-20 bg-gradient-to-br from-emerald-50 to-cyan-50 min-h-screen">
  {/* Hero Section */}
<div
  className="relative w-full bg-cover bg-center"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  <div className="absolute inset-10 bg-[#F6F6F6] opacity-5 z-0"></div>

  <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-10 pt-52 pb-40 md:py-68 px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* Left Content */}
    <motion.div
      className="md:w-1/2 text-center md:text-left"
      initial={{ y: 50, opacity: 0, scale: 0.95, rotate: -2 }}
      animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-[#062925] mb-6 leading-tight"
        initial={{ y: 40, opacity: 0, scale: 0.9, skewY: 5 }}
        animate={{ y: 0, opacity: 1, scale: 1, skewY: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      >
        We turn your career dreams into clickable reality.
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-[#044A42] mb-8"
        initial={{ y: 40, opacity: 0, scale: 0.9, skewX: -5 }}
        animate={{ y: 0, opacity: 1, scale: 1, skewX: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
      >
        Driving Innovation with Expert Development Consulting for Business Success.
      </motion.p>
    </motion.div>

    {/* Hero Image - show only on mobile */}
    <motion.div
      className="md:hidden flex justify-center"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
    >
      <img
        src={Hero}
        alt="Hero"
        className="w-full max-w-md h-[350px] sm:h-[400px] object-cover"
      />
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
              At Primesource , we are trusted technology partner committed to driving digital success. Built on a foundation of innovation, excellence, and integrity, we deliver end-to-end IT development and consulting services that empower businesses to thrive in a rapidly changing digital world.

              </motion.p>
            </div>
            <div className="md:w-1/2 bg-[#B8E1DD] p-6 rounded-xl">
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-[#044A42] mb-4 text-center"
              >
                Your Trusted Web Development Partner
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="text-lg text-[#062925] text-center italic"
              >
               Delivering Scalable Solutions, Driving Digital Growth.
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
              Driven by Commitment, Focused on Your Success – Partner with Primesource Consulting
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
            <h2 className="text-3xl font-bold text-[#044A42] mb-4">Why Choose us</h2>
            <p className="text-lg text-[#062925] mb-6">
          At Primesource Consulting LLP, we go beyond recruitment — we empower careers and fuel business growth. With a strong presence across India, organizations and professionals alike trust us for our commitment to excellence, integrity, and results-driven hiring solutions.
            </p>
            <ul className="list-none text-[#044A42] space-y-4 text-base">
        <motion.li
          whileHover={{ x: 5 }}
          className="flex items-start gap-2 hover:text-[#3A9188] transition"
        >
          <span className="text-[#3A9188] mt-1">★</span>
          <span>
            <span className="font-bold">Specific Expertise :</span> Our consultants bring deep domain knowledge across sectors including IT, digital marketing, HR consulting, Payroll services and more — ensuring tailored solutions for every hiring need.
          </span>
        </motion.li>
                <motion.li
          whileHover={{ x: 5 }}
          className="flex items-start gap-2 hover:text-[#3A9188] transition"
        >
          <span className="text-[#3A9188] mt-1">★</span>
          <span>
            <span className="font-bold">Quality Over Quantity: :</span>  We focus on precision hiring, delivering only the most relevant and pre-screened candidates to save your time and boost recruitment efficiency.
          </span>
        </motion.li>
                <motion.li
          whileHover={{ x: 5 }}
          className="flex items-start gap-2 hover:text-[#3A9188] transition"
        >
          <span className="text-[#3A9188] mt-1">★</span>
          <span>
            <span className="font-bold">Integrity-Driven Partnerships :</span> Built on a foundation of trust and transparency, we value long-term relationships with both employers and job seekers.
          </span>
        </motion.li>
                <motion.li
          whileHover={{ x: 5 }}
          className="flex items-start gap-2 hover:text-[#3A9188] transition"
        >
          <span className="text-[#3A9188] mt-1">★</span>
          <span>
            <span className="font-bold">Proven Track Record :</span>  Hundreds of companies and thousands of professionals have trusted Primesource for reliable, results-driven recruitment services.
          </span>
        </motion.li> 

                <motion.li
          whileHover={{ x: 5 }}
          className="flex items-start gap-2 hover:text-[#3A9188] transition"
        >
          <span className="text-[#3A9188] mt-1">★</span>
          <span>
            <span className="font-bold">End-to-End Recruitment Support :</span>From sourcing to onboarding, we manage the entire hiring process — letting you focus on your core business while we handle the talent.
          </span>
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
<ServicesSection />

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

          {/* Mobile Version - Auto-scrolling Logos */}
      <div className="md:hidden w-full overflow-hidden py-4">
        <motion.div
          className="flex gap-6 min-w-max"
          animate={{ x: ['0%', '-50%'] }} // move left
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 15,
              ease: 'linear',
            },
          }}
        >
          {/* Repeat logos twice for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <motion.div
              key={`mobile-${index}`}
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="h-16 object-contain"
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
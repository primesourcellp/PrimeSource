import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

import appImg from '../../assets/five.png';
import webImg from '../../assets/four.png';
import heroImg from '../../assets/hero.png';
import meetingImg from '../../assets/one.png';
import userImg from '../../assets/three.png';
import teamImg from '../../assets/two.png';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#F6F6F6] pt-55 pb-20 px-4">
      {/* Hero Section */}
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-[#062925] mb-6 leading-tight">
            Find your dream job now
          </h1>
          <p className="text-xl text-[#044A42] mb-8">
            Strategic HR Consulting That Accelerates Growth and Empowers Your Workforce.
          </p>
          <button className="bg-[#3A9188] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#044A42] transition font-semibold text-lg">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full max-w-lg rounded-2xl shadow-2xl border-[#B8E1DD]"
          />
        </div>
      </div>

      {/* Career Section */}
      <div
        data-aos="fade-right"
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20 pt-2"
      >
        <div className="md:w-1/2 flex justify-center">
          <img
            src={teamImg}
            alt="Career Team"
            className="w-full max-w-lg rounded-2xl shadow-xl border-4 border-[#3A9188]"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#044A42] mb-4">Your Career</h2>
          <p className="text-lg text-[#062925] mb-6">
            Driven by Commitment, Focused on Your Success – Partner with PrimeSource Consulting LLP
          </p>
          <ul className="list-disc list-inside text-[#044A42] space-y-2 text-base">
            <li>Empowering careers and fueling business growth</li>
            <li>Strong presence across India</li>
            <li>Commitment to excellence, integrity, and results-driven hiring solutions</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div
        data-aos="fade-left"
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20"
      >
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#044A42] mb-4">Why Choose Us</h2>
          <p className="text-lg text-[#062925] mb-6">
            At PrimeSource Consulting LLP, we go beyond recruitment — we empower careers and fuel business growth. With a strong presence across India, organizations and professionals alike trust us for our commitment to excellence, integrity, and results-driven hiring solutions.
          </p>
          <ul className="list-disc list-inside text-[#044A42] space-y-2 text-base">
            <li>
              <span className="font-semibold">Specific Expertise:</span> Deep domain knowledge across IT, data migration, digital marketing, HR consulting, contract, staffing, and more
            </li>
            <li>
              <span className="font-semibold">Quality Over Quantity:</span> Precision hiring, delivering only the most relevant and pre-screened candidates
            </li>
            <li>
              <span className="font-semibold">Integrity-Driven Partnerships:</span> Trust and transparency for long-term relationships
            </li>
            <li>
              <span className="font-semibold">Proven Track Record:</span> Trusted by hundreds of companies and thousands of professionals
            </li>
            <li>
              <span className="font-semibold">End-to-End Recruitment Support:</span> From sourcing to onboarding, we manage the entire hiring process
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={userImg}
            alt="Meeting"
            className="w-full max-w-lg rounded-2xl shadow-xl border-1 border-[#B8E1DD]"
          />
        </div>
      </div>

      {/* Our Services Section */}
      <div data-aos="fade-up" className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-[#044A42] mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[ 
            { img: appImg, title: "Contract Staffing", desc: "Flexible workforce solutions for your business needs." },
            { img: webImg, title: "Global Sourcing", desc: "Access top talent from around the world." },
            { img: userImg, title: "Payroll Management", desc: "Efficient and accurate payroll services." }
          ].map(({ img, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#B8E1DD] p-8 rounded-xl shadow-lg flex flex-col items-center cursor-pointer"
            >
              <img src={img} alt={title} className="w-24 h-24 mb-4" />
              <h3 className="text-xl font-semibold text-[#3A9188] mb-2">{title}</h3>
              <p className="text-[#062925] text-center">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {[ 
            { img: meetingImg, title: "HR Consulting", desc: "Expert HR advice and solutions for your organization." },
            { img: appImg, title: "SAP Consulting", desc: "Specialized SAP solutions for business transformation." },
            { img: webImg, title: "Digital Marketing", desc: "Grow your brand with our digital marketing expertise." }
          ].map(({ img, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#B8E1DD] p-8 rounded-xl shadow-lg flex flex-col items-center cursor-pointer"
            >
              <img src={img} alt={title} className="w-24 h-24 mb-4" />
              <h3 className="text-xl font-semibold text-[#3A9188] mb-2">{title}</h3>
              <p className="text-[#062925] text-center">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {[ 
            { img: userImg, title: "Data Migration", desc: "Seamless migration of your business data." },
            { img: webImg, title: "Web Development & Application", desc: "Custom web solutions and applications for your business." }
          ].map(({ img, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#B8E1DD] p-8 rounded-xl shadow-lg flex flex-col items-center cursor-pointer"
            >
              <img src={img} alt={title} className="w-24 h-24 mb-4" />
              <h3 className="text-xl font-semibold text-[#3A9188] mb-2">{title}</h3>
              <p className="text-[#062925] text-center">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

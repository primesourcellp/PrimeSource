import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

// Import your images from the assets folder.
// Ensure these paths are correct relative to where this component is used.
// For demonstration, these are kept as is, assuming a working asset setup.
import companyIntroImg from '../../assets/four.png';
import ethicsImg from '../../assets/one.png';
import screeningProcessImg from '../../assets/three.png';
import onboardingBenefitsImg from '../../assets/five.png';

// Enhanced CollapsibleContent component with improved styling
const CollapsibleContent = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left py-3 px-6 bg-gradient-to-r from-[#F0F7F6] to-[#E0F0EF] rounded-lg transition-all duration-300 hover:from-[#E0F0EF] hover:to-[#B8E1DD] shadow-sm"
      >
        <h3 className="text-2xl font-bold text-[#044A42]">{title}</h3>
        <span className="text-3xl text-[#3A9188] font-semibold transition-transform duration-300 transform">
          {isOpen ? '−' : '+'}
        </span>
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
    </div>
  );
};

// Enhanced "What We Do" component
const WhatWeDoList = () => {
  const items = [
    "Documentation",
    "Assignment",
    "Orientation",
    "Welcome package",
    "IT setup",
    "Training plan"
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }} /* Reduced delay for faster animation */
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Reduced stagger time for overall section
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3 // Reduced duration for faster individual item animation
      }
    }
  };

  return (
    <section className="bg-white py-20 px-4 md:px-8">
      {/* About Us Main Heading with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} // Faster overall fade-in for the heading block
        className="text-center mb-16 pt-10"
      >
        <motion.h1
          className="text-5xl font-extrabold text-[#044A42] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }} // Faster text slide-in
        >
          About Us
        </motion.h1>
        <motion.div
          className="w-24 h-2 bg-[#3A9188] mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }} // Faster underline expansion
        />
      </motion.div>
      
      {/* Section 1: Your Nationwide Talent Partner */}
      <motion.div
        // Removed md:max-w-7xl here to allow full width on desktop.
        // mx-auto will center the content, and section's padding will manage spacing.
        className="mx-auto flex flex-col md:flex-row items-center gap-12 mb-20" 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-[#044A42] mb-6 leading-tight">
            Your Nationwide Talent Partner – Trusted by Employers, Preferred by Professionals.
          </h2>
          <p className="text-[#062925] text-lg mb-8">
            Built on a foundation of excellence and integrity, PrimeSource Consulting LLP stands as a trusted
            partner for employers and job seekers alike. Leveraging our deep industry expertise and expansive
            network, we deliver exceptional placement solutions that drive success for both clients and candidates.
          </p>
          <h3 className="text-2xl font-bold text-[#3A9188] mb-4">What We Do</h3>
          <WhatWeDoList />
        </motion.div>
        <motion.div variants={itemVariants} className="md:w-1/2 flex justify-center">
          <motion.img
            src={companyIntroImg}
            alt="Team Collaboration"
            className="w-full max-w-lg rounded-2xl shadow-xl border-1 border-[#B8E1DD] object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1, delay: 0.1 }} // Faster image animation
            whileHover={{ scale: 1.02 }}
          />
        </motion.div>
      </motion.div>

      {/* Section 2: Our Approach and Work Ethics */}
      <motion.div
        // Removed md:max-w-7xl here to allow full width on desktop.
        className="mx-auto flex flex-col md:flex-row-reverse items-center gap-12 mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-[#044A42] mb-6 leading-tight">
            Our Approach and Work Ethics
          </h2>
          <p className="text-[#062925] text-lg mb-8">
            At PrimeSource Consulting LLP, our approach is rooted in transparency, precision, and partnership.
            We believe that successful recruitment isn’t just about matching resumes — it’s about understanding
            people, business goals, and long-term potential.
          </p>
          <h3 className="text-2xl font-bold text-[#3A9188] mb-4">Integrity at the Core of Our Consulting</h3>
          <ul className="list-disc list-inside text-[#062925] text-lg space-y-2">
            <li>
              <span className="font-semibold">Quality Over Quantity:</span> We focus on delivering the right fit, not just the fastest one — ensuring lasting results for both employers and job seekers.
            </li>
            <li>
              <span className="font-semibold">Relationship First:</span> Whether it’s a one-time placement or a long-term partnership, we treat every engagement with equal care and commitment.
            </li>
            <li>
              <span className="font-semibold">Integrity-Driven Processes:</span> Honesty, confidentiality, and ethical practices are at the heart of everything we do.
            </li>
          </ul>
        </motion.div>
        <motion.div variants={itemVariants} className="md:w-1/2 flex justify-center">
          <img
            src={ethicsImg}
            alt="Work Ethics"
            className="w-full max-w-lg rounded-2xl shadow-xl border-1 border-[#B8E1DD] object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Section 3: Application, Screening, and Scheduling */}
      <motion.div
        // Removed md:max-w-7xl here to allow full width on desktop.
        className="mx-auto flex flex-col md:flex-row items-center gap-12 mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-[#044A42] mb-6 leading-tight">
            Application, Screening, and Scheduling
          </h2>
          <p className="text-[#062925] text-lg mb-8">
            Streamlining your hiring process: At PrimeSource Consulting LLP, we know that the success of
            your business starts with the right people. That’s why our application screening and interview
            scheduling services are built to simplify your recruitment process. We meticulously filter candidates
            to match your specific needs and handle the logistics, so you can focus on selecting top-tier talent
            without the hassle.
          </p>
          <CollapsibleContent title="Thorough Screening">
            <p className="text-lg text-[#062925]">
              At PrimeSource Consulting LLP, we go beyond resumes. Our thorough screening process evaluates each candidate’s qualifications, experience, and cultural alignment to
              ensure they meet not just the job requirements — but your business expectations. By combining in-depth assessments, background verification, and behavioral evaluations, we present only the most
              suitable candidates, saving you time and reducing hiring risks.
            </p>
          </CollapsibleContent>
          <CollapsibleContent title="Efficient Scheduling">
            <p className="text-lg text-[#062925]">
              At PrimeSource Consulting LLP, we understand that time is critical in
              recruitment. Our efficient scheduling system ensures smooth coordination between candidates and
              hiring teams — minimizing delays, reducing drop-offs, and keeping the hiring process moving
              forward. We handle all the logistics so you can focus on making the right hiring decisions without
              disruption.
            </p>
          </CollapsibleContent>
        </motion.div>
        <motion.div variants={itemVariants} className="md:w-1/2 flex justify-center">
          <img
            src={screeningProcessImg}
            alt="Application Screening Process"
            className="w-full max-w-lg rounded-2xl shadow-xl border-1 border-[#B8E1DD] object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Section 4: EMPLOYEE ONBOARDING CHECKLIST */}
      <motion.div
        // Removed md:max-w-7xl here to allow full width on desktop.
        className="mx-auto flex flex-col md:flex-row-reverse items-center gap-12 mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-[#044A42] mb-6 leading-tight">
            EMPLOYEE ONBOARDING CHECKLIST
          </h2>
          <p className="text-[#062925] text-lg mb-8">
            We ensure every new employee begins their journey fully informed and confident. From a comprehensive overview of your company values and culture to a clear understanding of their role and responsibilities, we provide all the essential information they need.
          </p>
          <CollapsibleContent title="Documentation">
            <p className="text-lg text-[#062925]">
              From identity verification and background checks to role-specific contracts and policy acknowledgments, our process ensures every document is accurate, compliant, and securely managed. This helps protect your business, supports smooth onboarding, and builds a solid foundation for employee success.
            </p>
          </CollapsibleContent>
          <CollapsibleContent title="IT setup">
            <p className="text-lg text-[#062925]">
              We make sure every new hire is set up for success before they walk through the door. From system logins and email accounts to necessary hardware and software access, everything is prepared in advance. This ensures a smooth start, eliminates downtime, and allows your new team members to hit the ground running on their very first day.
            </p>
          </CollapsibleContent>
          <CollapsibleContent title="Training plan">
            <p className="text-lg text-[#062925]">
              Every role comes with its own learning curve. That’s why we develop tailored training plans that cover job-specific tools, workflows, and expectations, ensuring your new employees build confidence and competence at a steady pace.
            </p>
          </CollapsibleContent>
        </motion.div>
        <motion.div variants={itemVariants} className="md:w-1/2 flex justify-center">
          <img
            src={ethicsImg}
            alt="Work Ethics"
            className="w-full max-w-lg rounded-2xl shadow-xl border-1 border-[#B8E1DD] object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Section 5: Investing in your team’s well-being (Benefits) */}
      <motion.div
        // Removed md:max-w-7xl here to allow full width on desktop.
        className="mx-auto flex flex-col md:flex-row items-center gap-12 mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-[#044A42] mb-6 leading-tight">
            Investing in your team’s well-being
          </h2>
          <p className="text-[#062925] text-lg mb-8">
            At PrimeSource Consulting LLP, we believe that taking care of our people is the foundation of long-term success. That’s why we offer a holistic benefits package designed to support the personal and professional well-being of every team member.
          </p>
          <CollapsibleContent title="Health and Wellness">
            <p className="text-lg text-[#062925]">
              Comprehensive medical coverage, mental health resources, and wellness programs to keep our team healthy, focused, and supported — both inside and outside of work.
            </p>
          </CollapsibleContent>
          <CollapsibleContent title="Retirement Plans">
            <p className="text-lg text-[#062925]">
              We help employees plan for their future with structured retirement plans, company contributions, and financial wellness tools to build long-term security.
            </p>
          </CollapsibleContent>
          <CollapsibleContent title="Paid Time Off">
            <p className="text-lg text-[#062925]">
              Everyone needs time to recharge. We provide generous paid leave, holidays, and flexible time-off policies to support rest, family time, and personal needs.
            </p>
          </CollapsibleContent>
          <CollapsibleContent title="Professional Development">
            <p className="text-lg text-[#062925]">
              From certifications to leadership training, we invest in ongoing learning opportunities that help our team grow their skills and advance their careers.
            </p>
          </CollapsibleContent>
        </motion.div>
        <motion.div variants={itemVariants} className="md:w-1/2 flex justify-center">
          <img
            src={onboardingBenefitsImg}
            alt="Employee benefits"
            className="w-full max-w-lg rounded-2xl shadow-xl border-1 border-[#B8E1DD] object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

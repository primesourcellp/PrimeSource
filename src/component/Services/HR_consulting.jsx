import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUserTie, FaChartLine, FaUsers, FaGraduationCap, FaHandshake, FaLightbulb, FaBriefcase } from 'react-icons/fa';
import WaveBanner from '../Animations/WaveBanner';
import { TypeAnimation } from 'react-type-animation';

const HRConsultingPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
  }, []);
  return (
    <div className="bg-gray-50">

        
      {/* Hero Section with White Background */}
     <section 
  ref={ref}
  className="relative h-screen overflow-hidden bg-white text-[#044A42] py-20 px-6 flex items-center"
>
  <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left Column - Hero Content */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-left"
    >
      <h1 
        className="text-4xl md:text-5xl font-bold mb-6"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        Strategic HR Consulting
      </h1>
      <p 
        className="text-xl md:text-2xl mb-8"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        Transforming your workforce into a competitive advantage
      </p>
      <div data-aos="fade-right" data-aos-delay="300">
        <motion.button
          className="bg-[#3A9188] hover:bg-[#2D7A72] text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
        
      </div>
    </motion.div>

   {/* Right Column - Introduction Content */}
<motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="p-8 rounded-lg"
  data-aos="fade-left"
  data-aos-delay="400"
>
  {/* Typing animation for heading */}
  <TypeAnimation
    sequence={[
      'Expert HR Solutions',
      2000, // pause after typing
      '', // clear text
      500
    ]}
    wrapper="h2"
    cursor={true}
    className="text-2xl md:text-3xl font-bold text-[#044A42] mb-6"
    speed={30}
    repeat={Infinity}
  />

  {/* Typing animation for paragraph */}
  <TypeAnimation
    sequence={[
      "We provide comprehensive HR consulting services designed to align your human capital strategy with business objectives.",
      3000,
      '',
      500
    ]}
    wrapper="p"
    cursor={true}
    className="text-gray-700 leading-relaxed mb-6"
    speed={50}
    repeat={Infinity}
  />

  <ul className="space-y-3 text-gray-600">
    {[
      "Build high-performing teams",
      "Optimize HR processes",
      "Create thriving workplaces"
    ].map((item, index) => (
      <li 
        key={index}
        className="flex items-start"
        data-aos="fade-left"
        data-aos-delay={500 + (index * 100)}
      >
        <span className="text-[#3A9188] mr-2">•</span>
        <TypeAnimation
          sequence={[
            item,
            1500,
            '',
            500
          ]}
          wrapper="span"
          cursor={true}
          speed={60}
          repeat={Infinity}
        />
      </li>
    ))}
  </ul>
</motion.div>

  </div>


   {/* Scroll Down Indicator */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
    <div className="flex flex-col items-center text-gray-500">
      <span className="text-sm mb-1">Read More</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center p-1"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="w-1 h-2 bg-gray-400 rounded-full"
        />
      </motion.div>
    </div>
  </div>
  <WaveBanner/>
</section>

      {/* Rest of the sections remain the same */}
      {/* Introduction Section */}
     
      {/* Value Proposition Section */}
      <section className="py-20 px-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl font-bold text-center text-[#044A42] mb-16"
            data-aos="fade-up"
          >
            Why Partner With Us?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaUserTie className="text-[#3A9188] text-4xl mb-4" />,
                title: "Industry Expertise",
                description: "Our consultants bring decades of combined experience across diverse industries and organizational sizes."
              },
              {
                icon: <FaLightbulb className="text-[#3A9188] text-4xl mb-4" />,
                title: "Innovative Solutions",
                description: "We combine best practices with innovative approaches tailored to your unique challenges."
              },
              {
                icon: <FaBriefcase className="text-[#3A9188] text-4xl mb-4" />,
                title: "Practical Implementation",
                description: "We don't just advise - we help implement solutions that deliver measurable results."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-center">
                  <div data-aos="zoom-in" data-aos-delay={index * 100 + 100}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#062925] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2
      className="text-4xl font-bold text-center text-[#044A42] mb-4"
      data-aos="fade-up"
    >
      Our HR Consulting Services
    </h2>
    <p
      className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      We offer a full spectrum of HR services to help you build, develop, and retain a high-performing workforce.
    </p>

    <div className="grid md:grid-cols-2 gap-10">
      {[
        {
          icon: <FaUsers className="text-4xl text-white" />,
          title: "Talent Strategy",
          items: [
            "Workforce planning & organizational design",
            "Recruitment process optimization",
            "Employer branding & candidate experience",
          ],
          color: "from-emerald-500 to-teal-600",
        },
        {
          icon: <FaGraduationCap className="text-4xl text-white" />,
          title: "Learning & Development",
          items: [
            "Leadership development programs",
            "Competency frameworks & skills assessments",
            "Custom training solutions",
          ],
          color: "from-indigo-500 to-blue-600",
        },
        {
          icon: <FaChartLine className="text-4xl text-white" />,
          title: "Performance & Analytics",
          items: [
            "Performance management systems",
            "HR metrics & workforce analytics",
            "Employee engagement strategies",
          ],
          color: "from-orange-500 to-red-600",
        },
        {
          icon: <FaHandshake className="text-4xl text-white" />,
          title: "HR Transformation",
          items: [
            "HR process optimization",
            "Change management support",
            "HR technology implementation",
          ],
          color: "from-purple-500 to-pink-600",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          <div
            className={`w-14 h-14 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-md`}
          >
            {service.icon}
          </div>
          <h3 className="text-2xl font-semibold text-[#062925] mb-4">
            {service.title}
          </h3>
          <ul className="space-y-3">
            {service.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex items-start text-gray-600"
                data-aos="fade-right"
                data-aos-delay={index * 150 + itemIndex * 50 + 150}
              >
                <span className="text-[#3A9188] mr-2">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Process Section */}
      <section className="py-20 px-6 bg-[#062925] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl font-bold text-center mb-16"
            data-aos="fade-up"
          >
            Our Approach
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Deep dive into your business goals and HR challenges"
              },
              {
                step: "02",
                title: "Assessment",
                description: "Comprehensive analysis of current HR practices"
              },
              {
                step: "03",
                title: "Solution Design",
                description: "Customized strategies aligned with your objectives"
              },
              {
                step: "04",
                title: "Implementation",
                description: "Practical execution with measurable outcomes"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div 
                  className="bg-[#3A9188] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100 + 100}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#3A9188] text-white">
        <div 
          className="max-w-4xl mx-auto text-center"
          data-aos="zoom-in"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your HR Strategy?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you build a workforce that drives business success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              className="bg-[#062925] hover:bg-[#044A42] text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              className="bg-white hover:bg-gray-100 text-[#062925] font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us Now
            </motion.button>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default HRConsultingPage;
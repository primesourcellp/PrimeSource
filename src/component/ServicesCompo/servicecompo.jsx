import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import softwareImg from "../../assets/software-dev.png";
import Desktopimg from "../../assets/desktop_application.png";
import websiteimg from "../../assets/website_development.png";
import appimage from "../../assets/appimage.png";
import digitalimg  from "../../assets/digital_image.png";
import hrconsul  from "../../assets/hr_consul.png";
import payroll  from "../../assets/payroll1.png";
// import { Link } from "react-router-dom";

// Service data
const services = [
    {
      id: 1,
      title: "Software Development",
      description: "Flexible workforce solutions for your business needs.",
      image: softwareImg,
      backContent: "Our development process combines cutting-edge technology, agile methodologies, and deep industry expertise to deliver software that enhances efficiency, improves performance, and drives growth."
    },
    {
      id: 2,
      title: "Desktop Application Development",
      description: "Access top talent from around the world.",
      image: Desktopimg,
      backContent: "We design and develop powerful desktop applications that deliver speed, reliability, and seamless performance. Whether for Windows, macOS, or Linux, our desktop solutions are tailored to meet your unique business requirements and enhance productivity."
    },
    {
      id: 3,
      title: "Web Development",
      description: "Efficient and accurate payroll services.",
      image: websiteimg,
      backContent: "We create responsive, user-friendly, and visually engaging websites that reflect your brand and drive results. From simple business sites to complex portals, our web development services ensure seamless performance, security, and scalability for long-term growth."
    },
    {
      id: 4,
      title: "Web Application",
      description: "Expert HR advice and solutions for your organization.",
      image: appimage,
      backContent: " Our custom web applications are built to handle real-world challenges with speed, security, and efficiency. From enterprise dashboards to SaaS platforms, we deliver dynamic, scalable solutions that streamline workflows and enhance user experiences."
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "Specialized SAP solutions for business transformation.",
      image: digitalimg,
      backContent: " We design data-driven digital marketing strategies that amplify your online presence and connect you with the right audience. Through SEO, social media marketing, and paid campaigns, we help your brand achieve visibility, engagement, and measurable growth."
    },
    {
      id: 6,
      title: "HR Consulting",
      description: "Grow your brand with our digital marketing expertise.",
      image:hrconsul,
      backContent: "Our HR consulting services simplify and optimize the hiring process, ensuring you attract, recruit, and retain top talent. With tailored strategies and expert guidance, we help businesses build strong teams that fuel long-term success."
    },
    {
      id: 7,
      title: "Payroll Management",
      description: "Seamless migration of your business data.",
      image: payroll,
      backContent: " We provide smart payroll management solutions that reduce complexity and improve accuracy. From salary processing and compliance to reporting and analytics, our services streamline operations, save time, and ensure error-free payroll management."
    }
];

// --- Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const cardFlipVariants = {
    initial: { rotateY: 0 },
    flipped: { rotateY: 180 }
};

// --- Service Card Component (Enhanced with new color scheme) ---
const ServiceCard = ({ service, isMobile, isActive, onClick }) => {
    const isFlipped = isMobile && isActive;

    return (
        <motion.div
            variants={itemVariants}
            className="w-full h-80 cursor-pointer"
            style={{ perspective: 1000 }}
            onClick={onClick}
        >
            <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
                initial="initial"
                animate={isFlipped ? "flipped" : "initial"}
                whileHover={!isMobile ? "flipped" : "initial"}
                variants={cardFlipVariants}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {/* --- Front of the Card --- */}
                <div
                    className="absolute w-full h-full rounded-2xl shadow-lg overflow-hidden border-2 border-[#B8E1DD]"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062925]/90 via-transparent to-transparent flex items-end justify-center p-6">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {service.title}
                            </h3>
                            <p className="text-[#B8E1DD] text-sm">{service.description}</p>
                        </div>
                    </div>
                </div>

                {/* --- Back of the Card --- */}
                <div
                    className="absolute w-full h-full bg-gradient-to-br from-[#044A42] to-[#062925] p-6 flex flex-col justify-center items-center text-white rounded-2xl shadow-lg border-2 border-[#3A9188]"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="w-12 h-1 bg-[#3A9188] rounded-full mb-4"></div>
                    <p className="text-center text-md leading-relaxed text-[#B8E1DD]">
                        {service.backContent}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

// --- Main Services Section Component ---
const ServicesSection = () => {
    const [activeCardId, setActiveCardId] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const handleCardClick = (id) => {
        if (isMobile) {
            setActiveCardId(prevId => (prevId === id ? null : id));
        }
    };

    return (
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#B8E1DD]/30 to-[#3A9188]/20 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="inline-block bg-[#044A42] rounded-full p-3 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#B8E1DD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#044A42] mb-4">
                        Our <span className="text-[#3A9188]">Services</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#3A9188] rounded-full mx-auto mb-4"></div>
                    <p className="text-xl text-[#062925] max-w-3xl mx-auto">
                        Innovation and Technology Driving Your Online Success
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            isMobile={isMobile}
                            isActive={activeCardId === service.id}
                            onClick={() => handleCardClick(service.id)}
                        />
                    ))}
                </motion.div>

                {/* <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Link to="/Services">
                    <motion.button 
                        className="bg-gradient-to-r from-[#044A42] to-[#3A9188] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 "
                        whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(4, 74, 66, 0.3)' }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View All Services
                    </motion.button>
                    </Link>
                </motion.div> */}
            </div>
        </section>
    );
};

export default ServicesSection;
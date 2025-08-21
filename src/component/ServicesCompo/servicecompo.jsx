import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Service data (no changes here)
const services = [
    {
      id: 1,
      title: "Software Development",
      description: "Flexible workforce solutions for your business needs.",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?cs=srgb&dl=blur-blurred-background-cellphone-1092644.jpg&fm=jpg",
      backContent: "Our development process combines cutting-edge technology, agile methodologies, and deep industry expertise to deliver software that enhances efficiency, improves performance, and drives growth."
    },
    {
      id: 2,
      title: "Desktop Application Development",
      description: "Access top talent from around the world.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      backContent: "We design and develop powerful desktop applications that deliver speed, reliability, and seamless performance. Whether for Windows, macOS, or Linux, our desktop solutions are tailored to meet your unique business requirements and enhance productivity."
    },
    {
      id: 3,
      title: "Web Development",
      description: "Efficient and accurate payroll services.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      backContent: "We create responsive, user-friendly, and visually engaging websites that reflect your brand and drive results. From simple business sites to complex portals, our web development services ensure seamless performance, security, and scalability for long-term growth."
    },
    {
      id: 4,
      title: "Web Application",
      description: "Expert HR advice and solutions for your organization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      backContent: " Our custom web applications are built to handle real-world challenges with speed, security, and efficiency. From enterprise dashboards to SaaS platforms, we deliver dynamic, scalable solutions that streamline workflows and enhance user experiences."
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "Specialized SAP solutions for business transformation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      backContent: " We design data-driven digital marketing strategies that amplify your online presence and connect you with the right audience. Through SEO, social media marketing, and paid campaigns, we help your brand achieve visibility, engagement, and measurable growth."
    },
    {
      id: 6,
      title: "HR Consulting",
      description: "Grow your brand with our digital marketing expertise.",
      image: "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      backContent: "Our HR consulting services simplify and optimize the hiring process, ensuring you attract, recruit, and retain top talent. With tailored strategies and expert guidance, we help businesses build strong teams that fuel long-term success."
    },
    {
      id: 7,
      title: "Payroll Management",
      description: "Seamless migration of your business data.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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


// --- Service Card Component (Enhanced with 3D Flip & Click Logic) ---
const ServiceCard = ({ service, isMobile, isActive, onClick }) => {
    const isFlipped = isMobile && isActive;

    return (
        <motion.div
            variants={itemVariants}
            className="w-full h-80 cursor-pointer " // Increased height
            style={{ perspective: 1000 }} // Set perspective for 3D effect
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
                    className="absolute w-full h-full rounded-2xl shadow-lg overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-6">
                        <h3 className="text-2xl font-bold text-white text-center">
                            {service.title}
                        </h3>
                    </div>
                </div>

                {/* --- Back of the Card --- */}
                <div
                    className="absolute w-full h-full bg-gradient-to-br from-[#3A9188] to-[#2A7C74] p-6 flex flex-col justify-center items-center text-white rounded-2xl shadow-lg"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <p className="text-center text-md leading-relaxed text-white/95">
                        {service.backContent}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};


// --- Main Services Section Component ---
const ServicesSection = () => {
    // State to track the active card on mobile
    const [activeCardId, setActiveCardId] = useState(null);
    
    // State to detect if the screen is mobile-sized
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768); // Using 768px as the mobile breakpoint
        };
        checkIsMobile(); // Check on initial render
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    // Handler for card clicks on mobile
    const handleCardClick = (id) => {
        if (isMobile) {
            setActiveCardId(prevId => (prevId === id ? null : id));
        }
    };

    return (
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-cyan-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#044A42] mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-[#3A9188] max-w-3xl mx-auto">
                        Innovation and Technology Driving Your Online Success
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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

                <motion.div
                    className="text-center mt-20" // Increased margin-top
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.button 
                        className="bg-[#044A42] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(4, 74, 66, 0.3)' }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View All Services
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
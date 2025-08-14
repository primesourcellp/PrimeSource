import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Data for Testimonials ---
const clientTestimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO, Tech Solutions",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "PrimeSource exceeded our expectations with their professionalism and the quality of candidates they provided. A truly seamless partnership.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mark Smith",
    role: "HR Manager, FinCorp",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "Their recruitment services helped us hire the perfect candidates swiftly and efficiently. We saved so much time and effort.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sophie Lee",
    role: "Marketing Head, Brandify",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "The team's expertise in sourcing top marketing talent boosted our team's capabilities dramatically. Highly recommended!",
    rating: 5,
  },
];

const candidateTestimonials = [
  {
    id: 1,
    name: "David Chen",
    role: "Senior Software Engineer",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "The team at PrimeSource was incredibly supportive throughout my job search. They found me a role that was a perfect fit for my skills and career goals.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Data Scientist",
    photo: "https://randomuser.me/api/portraits/women/55.jpg",
    text: "A fantastic experience from start to finish. They were transparent, communicative, and genuinely cared about finding the right opportunity for me.",
    rating: 5,
  },
  {
    id: 3,
    name: "James Wilson",
    role: "Product Manager",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "I was placed in my dream company thanks to PrimeSource. Their industry knowledge and connections are second to none.",
    rating: 4,
  },
];

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// Floating decorative elements
const FloatingCircles = () => {
  return (
    <>
      <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-[#B8E1DD]/20 blur-md animate-float1"></div>
      <div className="absolute bottom-1/4 right-10 w-12 h-12 rounded-full bg-[#B8E1DD]/15 blur-md animate-float2"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 rounded-full bg-[#B8E1DD]/25 blur-md animate-float3"></div>
      <div className="absolute bottom-1/3 left-20 w-10 h-10 rounded-full bg-[#B8E1DD]/20 blur-md animate-float4"></div>
    </>
  );
};

// --- Reusable Auto-Scrolling Slider Component ---
const Slider = ({ testimonials }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const testimonialIndex =
    ((page % testimonials.length) + testimonials.length) % testimonials.length;

  const paginate = (newDirection) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

const startAutoScroll = () => {
  if (intervalRef.current) clearInterval(intervalRef.current);
  intervalRef.current = setInterval(() => paginate(1), 1500);
};

useEffect(() => {
  startAutoScroll();
  return () => clearInterval(intervalRef.current);
}, []);


  const handleManualPaginate = (newDirection) => {
    paginate(newDirection);
    startAutoScroll();
  };

  return (
    <div 
      className="relative h-80 overflow-hidden flex items-center justify-center max-w-4xl mx-auto"
      onMouseEnter={() => {
        setIsHovered(true);
        clearInterval(intervalRef.current);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        startAutoScroll();
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={testimonials[testimonialIndex].id}
          custom={direction}
          variants={{
            enter: (direction) => ({
              x: direction > 0 ? "100%" : "-100%",
              opacity: 0,
            }),
            center: { 
              x: 0, 
              opacity: 1, 
              zIndex: 1,
              transition: { duration: 0.5 }
            },
            exit: (direction) => ({
              x: direction < 0 ? "100%" : "-100%",
              opacity: 0,
              zIndex: 0,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            x: { type: "spring", stiffness: 300, damping: 30 }, 
            opacity: { duration: 0.3 } 
          }}
          className="absolute w-full p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg"
        >
          <StarRating rating={testimonials[testimonialIndex].rating} />
          <p className="text-lg italic mb-6 text-white/90 relative">
            <span className="absolute -left-6 text-3xl text-[#B8E1DD]">"</span>
            {testimonials[testimonialIndex].text}
            <span className="absolute -right-6 text-3xl text-[#B8E1DD]">"</span>
          </p>
          <div className="flex items-center justify-center space-x-4">
            <motion.img
              src={testimonials[testimonialIndex].photo}
              alt={testimonials[testimonialIndex].name}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#B8E1DD]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <div className="text-left">
              <p className="font-semibold text-white">{testimonials[testimonialIndex].name}</p>
              <p className="text-sm text-gray-300">{testimonials[testimonialIndex].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => handleManualPaginate(-1)}
        className="absolute left-0 z-10 p-3 bg-white/20 rounded-full hover:bg-white/40 transition text-white focus:outline-none backdrop-blur-sm shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      <button
        onClick={() => handleManualPaginate(1)}
        className="absolute right-0 z-10 p-3 bg-white/20 rounded-full hover:bg-white/40 transition text-white focus:outline-none backdrop-blur-sm shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const direction = index > testimonialIndex ? 1 : -1;
              setPage([index, direction]);
              startAutoScroll();
            }}
            className={`w-2 h-2 rounded-full transition-all ${index === testimonialIndex ? 'bg-white w-4' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- Main Testimonial Component ---
export default function Testimonial() {
  const [activeTab, setActiveTab] = useState("clients");

  return (
    <section className="bg-[#044A42] w-full py-40 relative overflow-hidden">
      <FloatingCircles />
      
      <div className="relative w-full text-center px-4 sm:px-6 lg:px-8 z-10">
        <motion.h2 
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What People Are Saying
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Hear from the clients we've partnered with and the professionals we've placed.
        </motion.p>

        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-10 space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setActiveTab("clients")}
            className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
              activeTab === "clients"
                ? "bg-[#B8E1DD] text-[#044A42] shadow-lg"
                : "bg-transparent text-white border border-white/50 hover:bg-white/20 hover:shadow-md"
            }`}
          >
            Client Reviews
          </button>
          <button
            onClick={() => setActiveTab("candidates")}
            className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
              activeTab === "candidates"
                ? "bg-[#B8E1DD] text-[#044A42] shadow-lg"
                : "bg-transparent text-white border border-white/50 hover:bg-white/20 hover:shadow-md"
            }`}
          >
            Candidate Reviews
          </button>
        </motion.div>

        {/* Conditional Slider Rendering */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {activeTab === "clients" ? (
            <Slider testimonials={clientTestimonials} />
          ) : (
            <Slider testimonials={candidateTestimonials} />
          )}
        </motion.div>
      </div>

      {/* Animated background elements */}
      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(10px) translateX(15px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
        .animate-float4 { animation: float4 9s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
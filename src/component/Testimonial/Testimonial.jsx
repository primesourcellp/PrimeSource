import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import male from '../../assets/male.png';
import female from '../../assets/female.png';
// --- Data for Testimonials ---
const clientTestimonials = [
  {
    id: 1,
    name: "Vishnupriya S",
    role: "HR, Swelect Energy Systems",
    photo: "https://i0.wp.com/swelectes.com/wp-content/uploads/2021/04/SWELECT-LOGO-Black-tagline.png?fit=400%2C150&ssl=1",
    type: "logo",
    text: "Primesource has been an invaluable partner in our recruitment process. Their deep understanding of our industry, combined with a keen eye for talent, has helped us consistently find high-quality candidates who are skilled and a great cultural fit. What sets them apart is their timely communication, attention to detail, and genuine commitment to finding the right people for our team. I highly recommend Prime Source to any organization looking to elevate their hiring strategy.",
    rating: 5,
  },
  {
    id: 2,
    name: "Karthik",
    role: "HR Manager, Acme Fitness",
    photo: "https://www.acmefitness.com/assets/front_includes/images/logo.png",
    type: "logo",
    text: "On behalf of Acme Fitness Coimbatore, we take this opportunity to extend our sincere appreciation to Primesource Consulting for their exceptional services and professional support.Your team’s expertise, structured approach, and commitment to excellence have been instrumental in streamlining our operations and contributing significantly to our business growth. The strategic guidance provided by your consultants has added immense value to our organization, enabling us to achieve improved efficiency and better outcomes. We are pleased to recognize Primesource Consulting LLP as a trusted partner in our journey forward and look forward to continuing this association in the years to come.",
    rating: 5,
  }
];

const candidateTestimonials = [
  {
    id: 1,
    name: "Sri Viki",
    role: "",
    photo: male,
    type: "profile",
    text: "Primesource Consulting is a trustworthy recruitment agency.They helped me secure a job in the UK public sector. Their interview process is transparent, and they are very straightforward about the outcome.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rudhreesh M",
    role: "",
    photo: male,
    type: "profile",
    text: "From the initial contact to the final stages of the hiring process, their team was supportive, professional, and transparent. They took the time to understand my skills and career goals, and matched me with a fantastic opportunity. I felt well-prepared and informed throughout the process.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jeeva Nalini",
    role: "",
    photo: female,
    type: "profile",
    text: "I highly recommend this  Company to anyone looking for a reliable and effective recruitment service. Their commitment to delivering excellent results is evident, and I'm grateful for their role in helping me secure a great new position.",
    rating: 5,
  }
];

// Star rating component
const StarRating = ({ rating }) => (
  <div className="flex justify-center mb-4">
    {[...Array(5)].map((_, i) => (
      <motion.svg
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: i * 0.1 }}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </motion.svg>
    ))}
  </div>
);

// --- Enhanced Manual Slider Component ---
const Slider = ({ testimonials }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const testimonialIndex =
    ((page % testimonials.length) + testimonials.length) % testimonials.length;

  const paginate = (newDirection) => setPage([page + newDirection, newDirection]);

  const current = testimonials[testimonialIndex];

  return (
    <div className="relative h-auto flex flex-col items-center justify-center max-w-4xl mx-auto">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current.id}
          custom={direction}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="w-full p-8 bg-white rounded-xl shadow-xl border border-[#B8E1DD]/30"
        >
          <StarRating rating={current.rating} />
          <p className="text-lg text-gray-700 italic mb-6 relative px-4">
            <span className="absolute -left-2 top-0 text-3xl text-[#044A42]/30">"</span>
            {current.text}
            <span className="absolute -right-2 bottom-0 text-3xl text-[#044A42]/30">"</span>
          </p>
          <div className="flex items-center justify-center space-x-6">
            <motion.div whileHover={{ scale: 1.05 }}>
              {current.type === "logo" ? (
                <div className="w-40 h-20 flex items-center justify-center bg-white p-2 border border-[#B8E1DD] rounded-md">
                  <img
                    src={current.photo}
                    alt={current.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ) : (
                <img
                  src={current.photo}
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#B8E1DD]"
                />
              )}
            </motion.div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">{current.name}</p>
              <p className="text-sm text-gray-600">{current.role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Next Button */}
      <motion.button
        onClick={() => paginate(1)}
        className="mt-6 px-6 py-3 bg-[#044A42] text-white rounded-full shadow-md hover:bg-[#033a34] transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Next Review →
      </motion.button>

      {/* Dots indicator */}
      <div className="mt-4 flex space-x-2">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              const direction = index > testimonialIndex ? 1 : -1;
              setPage([index, direction]);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === testimonialIndex ? "bg-[#044A42]" : "bg-[#B8E1DD]"
            }`}
            whileHover={{ scale: 1.2 }}
            animate={{
              width: index === testimonialIndex ? 24 : 12,
            }}
            transition={{ type: "spring", stiffness: 500 }}
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
    <section className="bg-white w-full py-40 md:py-35 relative overflow-hidden">
      <div className="relative w-full text-center px-4 sm:px-6 lg:px-8 z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#044A42] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What People Are Saying
        </motion.h2>
        <motion.p
          className="text-lg text-[#044A42]/80 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Hear from the clients we've partnered with and the professionals we've placed.
        </motion.p>

        {/* Tabs */}
        <div className="flex justify-center mb-10 space-x-4">
          <motion.button
            onClick={() => setActiveTab("clients")}
            className={`px-6 py-3 font-semibold rounded-full ${
              activeTab === "clients"
                ? "bg-[#044A42] text-white shadow-lg"
                : "bg-transparent text-[#044A42] border border-[#044A42]/50 hover:bg-[#044A42]/10"
            }`}
          >
            Client Reviews
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("candidates")}
            className={`px-6 py-3 font-semibold rounded-full ${
              activeTab === "candidates"
                ? "bg-[#044A42] text-white shadow-lg"
                : "bg-transparent text-[#044A42] border border-[#044A42]/50 hover:bg-[#044A42]/10"
            }`}
          >
            Candidate Reviews
          </motion.button>
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          {activeTab === "clients" ? (
            <Slider testimonials={clientTestimonials} />
          ) : (
            <Slider testimonials={candidateTestimonials} />
          )}
        </motion.div>
      </div>
    </section>
  );
}

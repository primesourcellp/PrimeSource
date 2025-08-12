import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Example testimonials data — customize as needed
const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO, Tech Solutions",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "PrimeSource exceeded our expectations with their professionalism and quality of work. Highly recommended!",
  },
  {
    id: 2,
    name: "Mark Smith",
    role: "HR Manager, FinCorp",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "Their recruitment services helped us hire the perfect candidates swiftly and efficiently.",
  },
  {
    id: 3,
    name: "Sophie Lee",
    role: "Marketing Head, Brandify",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "The team’s expertise in digital marketing boosted our online presence dramatically.",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function Testimonial() {
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonialIndex = ((page % testimonials.length) + testimonials.length) % testimonials.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="bg-[#044A42] py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>

        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={testimonials[testimonialIndex].id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="p-8 bg-white/10 rounded-lg shadow-lg"
            >
              <p className="text-lg italic mb-6">"{testimonials[testimonialIndex].text}"</p>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[testimonialIndex].photo}
                  alt={testimonials[testimonialIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white"
                />
                <div className="text-left">
                  <p className="font-semibold">{testimonials[testimonialIndex].name}</p>
                  <p className="text-sm text-gray-300">{testimonials[testimonialIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center mt-8 space-x-6">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="text-white hover:text-[#b8e1dd] focus:outline-none"
            >
              &#8592; Prev
            </button>
            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="text-white hover:text-[#b8e1dd] focus:outline-none"
            >
              Next &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

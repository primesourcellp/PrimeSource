import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/IMG_2189.jpg"; // Replace with your career hero image

export default function Career() {
  const reasons = [
    {
      title: "Innovative Projects",
      description:
        "Work on cutting-edge projects that drive digital transformation across industries. From web development to SAP consulting, you'll be at the forefront of technological advancements.",
    },
    {
      title: "Career Growth",
      description:
        "We prioritize your professional development. With access to the latest tools, training programs, and a network of industry leaders, your career will be on the fast track to success.",
    },
    {
      title: "Global Opportunities",
      description:
        "Our global sourcing and consulting services offer you the chance to work with international clients and teams, expanding your horizons and experience.",
    },
    {
      title: "Collaborative Environment",
      description:
        "Join a team of dynamic professionals who are as passionate as you are about driving success. Collaboration is key, and every voice is heard.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#F6F6F6]">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <img
          src={heroImg}
          alt="Careers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#044A42]/80 to-[#3A9188]/70" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Careers at PrimeSource
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Join our team and help us build the future of business technology!
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 max-w-screen-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-[#044A42] mb-12"
        >
          Why Choose PrimeSource Consulting LLP
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-[#3A9188] mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#B8E1DD] py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold text-[#044A42] mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-[#062925] mb-6">
            Explore opportunities to work with innovative minds and grow your
            career with us.
          </p>
          <button className="bg-[#3A9188] text-white px-8 py-3 rounded-lg shadow hover:bg-[#044A42] transition text-lg font-medium">
            View Open Positions
          </button>
        </motion.div>
      </section>
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import bgImage from "../../assets/IMG_2189[1].jpg"; // Replace with your actual image path
import FollowCursorContact from "../Animations/FollowCursorContact "

export default function Contact() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.5581793847773!2d77.38933797483156!3d8.92060069113649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0427a947312531%3A0x37be84092961c8d5!2sPrimesource%20Consulting%20LLP!5e0!3m2!1sen!2sin!4v1754972707841!5m2!1sen!2sin";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const SERVICE_ID = "service_kb5xg2i";
    const TEMPLATE_ID = "template_xk3mqxn";
    const PUBLIC_KEY = "7gamUQv_zyCIgzUmY";

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("Failed to send message. Please try again later.");
      });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-40"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for improved text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#044A42]/10 to-[#3A9188]/50"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Main Heading and Subtitle */}
        <h2 className="text-4xl font-bold text-white mb-2 text-center">
          CONTACT US
        </h2>
        <p className="text-center text-gray-200 text-lg mb-12">
          Want to Know More? Reach Out to us.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Left Column: Online Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-[#044A42] mb-6">
              ONLINE INQUIRY
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg border-[#3A9188] focus:outline-none focus:ring-2 focus:ring-[#3A9188]"
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg border-[#3A9188] focus:outline-none focus:ring-2 focus:ring-[#3A9188]"
                type="email"
                placeholder="Your Email"
                required
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg border-[#3A9188] focus:outline-none focus:ring-2 focus:ring-[#3A9188]"
                type="tel"
                placeholder="Your Phone Number"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg border-[#3A9188] focus:outline-none focus:ring-2 focus:ring-[#3A9188]"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#3A9188] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#044A42] transition w-full text-lg font-medium"
              >
                Send Message
              </motion.button>
              {status && (
                <p className="mt-4 text-center text-sm text-[#3A9188] font-semibold">
                  {status}
                </p>
              )}
            </form>
          </motion.div>
          

          {/* Right Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:w-1/2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-[#044A42] mb-6">
              CONTACT DETAILS
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-lg font-semibold text-[#3A9188]">Email</p>
                <p className="text-gray-700">connect@primesourcellp.com</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-[#3A9188]">Mobile</p>
                <p className="text-gray-700">(+91)  8190901250 </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-[#3A9188]">
                  Primesource Office
                </p>
                <p className="text-gray-700">
                  10/91/K6, Nehru Nager, Surandai Road, Pavoorchatram,<br/>
                   Tenkasi Tk,
                  <br /> Tenkasi District - 627808.
                </p>
              </div>
            </div>
          </motion.div>
          <FollowCursorContact/>
        </div>

        {/* Full-width Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl mt-12"
        >
          <iframe
            title="Primesource Office Location"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
      
    </section>
  );
}

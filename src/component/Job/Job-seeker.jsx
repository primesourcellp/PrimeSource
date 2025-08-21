import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function JobSeekerForm() {
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    email: "",
    phone: "",
    resume: "", // URL of uploaded resume
    linkedin: "",
    github: "",
    education: "",
    skills: ""
  });
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Parallax effect
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: "", type: "" });

    const data = {
      ...formData,
      submittedAt: new Date().toLocaleString()
    };

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbzffRrtrBmIxxF5WoraA74LacQXwwukuUv8OB13VS6eWGmJqO1IzJutP14-FMSIRIeN/exec", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.status === "success") {
        setMessage({ text: "Application submitted successfully!", type: "success" });
        setFormData({
          name: "",
          experience: "",
          email: "",
          phone: "",
          resume: "",
          linkedin: "",
          github: "",
          education: "",
          skills: ""
        });
      } else {
        setMessage({ text: "Error submitting form: " + (result.message || "Try again later."), type: "error" });
      }
    } catch (error) {
      setMessage({ text: "Network error: " + error.message, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gray-900 flex items-center justify-center p-4 py-25 "
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 to-green-900/70"></div>
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2069&q=80"
          alt="Office background"
          className="w-full h-full object-cover opacity-50"
        />
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-xl bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20"
      >
        <div className="p-8">
          <motion.h2 className="text-3xl font-bold text-gray-800 mb-2 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Join Our Team
          </motion.h2>
          <motion.p className="text-green-600 font-medium text-center mb-6 text-base" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Start your career journey with us
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name, Experience, Email, Phone */}
              {['name', 'experience', 'email', 'phone'].map((key, i) => (
                <motion.div key={key} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.05 }}>
                  <label className="block text-gray-700 font-medium mb-1 capitalize text-sm">
                    {key} {['name','email','experience'].includes(key) && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={key === 'email' ? 'email' : key === 'experience' ? 'number' : 'text'}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    required={['name','email','experience'].includes(key)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-base transition-all"
                    placeholder={`Enter your ${key}`}
                  />
                </motion.div>
              ))}

              {/* Resume URL */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-1 text-sm">Resume URL <span className="text-red-500">*</span></label>
                <input
                  type="url"
                  name="resume"
                  value={formData.resume}
                  onChange={handleChange}
                  required
                  placeholder="Paste Google Drive or direct link to resume"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-base transition-all"
                />
              </motion.div>

              {/* GitHub & LinkedIn URLs */}
              {['github', 'linkedin'].map((key, i) => (
                <motion.div key={key} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.05 }}>
                  <label className="block text-gray-700 font-medium mb-1 capitalize text-sm">{key} URL</label>
                  <input
                    type="url"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    placeholder={`Enter your ${key} profile link`}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-base transition-all"
                  />
                </motion.div>
              ))}

              {/* Education & Skills */}
              {['education', 'skills'].map((key, i) => (
                <motion.div key={key} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.05 }} className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-1 capitalize text-sm">{key}</label>
                  <textarea
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    placeholder={`Enter your ${key}`}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-base transition-all"
                  />
                </motion.div>
              ))}
            </div>

            {/* Submit Button */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-green-6000 cursor-not-allowed' : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'} text-white py-3 rounded-lg font-semibold shadow-md flex items-center justify-center text-lg transition-all`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </motion.div>
          </form>

          {/* Submission Message */}
          {message.text && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`mt-4 p-3 rounded-lg text-base ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {message.text}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

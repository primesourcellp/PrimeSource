import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ApplyJob({ job, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coverLetter: "",
    resume: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.resume) {
      setError("Please fill in all required fields and upload a resume.");
      return;
    }

    console.log("Job Applied:", job.title);
    console.log("Form Data:", formData);
    setSubmitted(true);
    setError("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <motion.div
        className="bg-white rounded-xl p-8 max-w-lg w-full relative shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-[#044A42] mb-4">
          Apply for: {job.title}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-[#B8E1DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A9188]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-[#B8E1DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A9188]"
          />
          <textarea
            name="coverLetter"
            placeholder="Cover Letter (optional)"
            value={formData.coverLetter}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 border border-[#B8E1DD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A9188]"
          />
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
          />
          {formData.resume && (
            <p className="text-sm text-[#3A9188]">
              Selected file: {formData.resume.name}
            </p>
          )}
          {error && <p className="text-red-500">{error}</p>}
          {submitted && (
            <p className="text-green-600 font-semibold">
              Application submitted successfully!
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-[#044A42] hover:bg-[#062925] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm"
          >
            Submit Application
          </button>
        </form>
      </motion.div>
    </div>
  );
}

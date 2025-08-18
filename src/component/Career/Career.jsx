import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const sampleJobs = [/* your existing job data */
// Sample job data with added 'skills' array and 'type' field

  // {
  //   id: 1,
  //   title: "Frontend Developer",
  //   location: "Remote",
  //   type: "Remote", // Added job type
  //   skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  //   description: "We are looking for a skilled Frontend Developer with React experience to join our team. This is a fully remote position.",
  //   applyLink: "https://example.com/apply/frontend",
  // }
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    type: "Remote", // Added job type
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    description: "We are looking for a skilled Frontend Developer with React experience to join our team. This is a fully remote position.",
    applyLink: "https://example.com/apply/frontend",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "New York, NY",
    type: "Onsite", // Added job type
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    description: "Join our backend team working with Node.js and databases to build scalable APIs. This role requires working from our New York office.",
    applyLink: "https://example.com/apply/backend",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "San Francisco, CA",
    type: "Onsite", // Added job type
    skills: ["Figma", "Sketch", "Prototyping", "User Research"],
    description: "Creative UI/UX Designer needed to craft intuitive interfaces and user experiences at our San Francisco office.",
    applyLink: "https://example.com/apply/uiux",
  },
  {
    id: 4,
    title: "Data Scientist",
    location: "Remote",
    type: "Remote", // Added job type
    skills: ["Python", "Pandas", "Scikit-learn", "SQL", "Machine Learning"],
    description: "Analyze large datasets and build machine learning models. This is a remote-first position.",
    applyLink: "https://example.com/apply/data-scientist",
  },
  {
    id: 5,
    title: "Marketing Manager",
    location: "London, UK",
    type: "Onsite", // Added job type
    skills: ["SEO", "Content Marketing", "Social Media", "Analytics"],
    description: "Develop and execute marketing campaigns to grow our brand from our London office.",
    applyLink: "https://example.com/apply/marketing-manager",
  },
  {
    id: 6,
    title: "Full Stack Engineer",
    location: "San Francisco, CA",
    type: "Hybrid", // Added job type
    skills: ["React", "Node.js", "TypeScript", "SQL"],
    description: "Work on both the frontend and backend of our core application with a flexible hybrid work model.",
    applyLink: "https://example.com/apply/full-stack",
  },
  {
    id: 7,
    title: "DevOps Engineer",
    location: "Remote",
    type: "Remote",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    description: "Seeking an experienced DevOps Engineer to build and maintain our cloud infrastructure.",
    applyLink: "https://example.com/apply/devops",
  },
  {
    id: 8,
    title: "Product Manager",
    location: "Austin, TX",
    type: "Onsite",
    skills: ["Product Strategy", "Roadmapping", "Agile", "Market Research"],
    description: "Lead product development cycles from conception to launch.",
    applyLink: "https://example.com/apply/product-manager",
  },




];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

export default function JobOpening() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4; // Number of jobs per page

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setJobs(sampleJobs);
      setFilteredJobs(sampleJobs);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const results = jobs.filter((job) => {
      const matchesSearchTerm =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesTypeFilter = filterType === "All" || job.type === filterType;

      return matchesSearchTerm && matchesTypeFilter;
    });

    setFilteredJobs(results);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, filterType, jobs]);

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen bg-[#F6F6F6] py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-center text-[#044A42] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Current Job Openings
        </motion.h1>
        <motion.p
          className="text-center text-[#062925] mb-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore exciting career opportunities that match your skills and
          aspirations.
        </motion.p>
        <motion.p
          className="text-center text-[#3A9188] mb-8 text-xl font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Showing {filteredJobs.length} job openings
        </motion.p>

        {/* Search and Filter */}
        <motion.div
          className="mb-8 flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search by title, location, or skills..."
              className="w-full p-4 pl-10 border border-[#B8E1DD] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3A9188] transition-colors bg-white text-[#062925]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaMagnifyingGlass className="text-[#3A9188]" />
            </div>
          </div>
          {/* Filter Buttons */}
          <div className="flex justify-center md:justify-end space-x-2">
            {["All", "Remote", "Onsite", "Hybrid"].map((type) => (
              <button
                key={type}
                className={`px-6 py-3 rounded-lg font-medium transition-colors shadow-sm ${
                  filterType === type
                    ? "bg-[#044A42] text-white"
                    : "bg-white text-[#062925] hover:bg-[#E0F0EF] border border-[#B8E1DD]"
                }`}
                onClick={() => setFilterType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Job List */}
        {isLoading ? (
          <p className="text-center text-[#062925]">Loading job openings...</p>
        ) : currentJobs.length === 0 ? (
          <motion.p
            className="text-center text-[#062925]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No job openings found matching your criteria.
          </motion.p>
        ) : (
          <ul className="grid md:grid-cols-2 gap-6">
            {currentJobs.map((job) => (
              <motion.li
                key={job.id}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="bg-[#B8E1DD] rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-[#E0F0EF]">
                  <h2 className="text-2xl font-bold text-[#044A42] mb-2">
                    {job.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-[#062925] mb-4">
                    <span className="flex items-center">
                      <FaBriefcase className="mr-2 text-[#3A9188]" /> {job.type}
                    </span>
                    <span className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-[#3A9188]" />{" "}
                      {job.location}
                    </span>
                  </div>
                  <p className="text-[#062925] mb-4">{job.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#044A42] mb-2">
                      Required Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-[#3A9188] text-white text-sm font-medium px-4 py-1 rounded-full shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={job.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#044A42] hover:bg-[#062925] text-white font-semibold px-6 py-2 rounded-lg transition-colors shadow-sm"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.li>
            ))}
          </ul>
        )}

        {/* Pagination */}
        {filteredJobs.length > jobsPerPage && (
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-white border border-[#B8E1DD] shadow-sm hover:bg-[#E0F0EF] disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-[#062925] font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-white border border-[#B8E1DD] shadow-sm hover:bg-[#E0F0EF] disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

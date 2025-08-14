import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active styling
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [payrollOpen, setPayrollOpen] = useState(false);
  const [webDevOpen, setWebDevOpen] = useState(false);
  const [jobSeekerOpen, setJobSeekerOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Style object for text color based on scroll position
  const textColorStyle = isMobile
    ? { color: scrolled ? "black" : "white" }
    : { color: scrolled ? "rgba(0,0,0,0.9)" : "white" };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-transparent backdrop-blur" : "bg-[#062925]"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <NavLink to="/Home" className="flex items-center gap-2" style={textColorStyle}>
          <img src={logo} alt="PrimeSource Logo" className="w-30 mb-0" />
        </NavLink>

        {/* Desktop contact */}
        <div className="hidden md:flex items-center space-x-15 text-sm" style={textColorStyle}>
          <a href="tel: 81909 01250" className="flex items-center gap-1 hover:underline">
            <FaPhoneAlt />
            <span> 819-090-1250</span>
          </a>
          <a href="mailto:recruit@primesourcellp.com" className="flex items-center gap-1 hover:underline">
            <FaEnvelope />
            <span>recruit@primesourcellp.com</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="md:hidden block focus:outline-none"
          style={textColorStyle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

       {/* Mobile Menu */}
<div
  className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#062925] z-50 p-6 flex flex-col transition-transform duration-300 ${
    open ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {/* Top section: Logo + Close button */}
  <div className="flex justify-between items-center mb-8">
    <NavLink to="/Home" onClick={() => setOpen(false)}>
      <img src={logo} alt="Logo" className="w-28" />
    </NavLink>
  <button onClick={() => setOpen(false)} aria-label="Close menu">
  <motion.svg
    className="w-6 h-6 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    whileHover={{ rotate: 90, scale: 1.2 }}
    whileTap={{ scale: 0.9, rotate: 180 }}
    initial={{ rotate: 0 }}
    animate={{ rotate: 0 }}
  >
    <path d="M6 18L18 6M6 6l12 12" />
  </motion.svg>
</button>
  </div>

  

  {/* Links */}
  <NavLink
    to="/Home"
    onClick={() => setOpen(false)}
    className="block text-white py-2 text-lg hover:text-[#b8e1dd]"
  >
    Home
  </NavLink>
  <NavLink
    to="/About"
    onClick={() => setOpen(false)}
    className="block text-white py-2 text-lg hover:text-[#b8e1dd]"
  >
    About
  </NavLink>

  {/* Services Dropdown */}
  <div className="py-2">
    <button
      onClick={() => setServicesOpen(!servicesOpen)}
      className="flex justify-between w-full text-white text-lg hover:text-[#b8e1dd]"
    >
      Services ▸
    </button>
    {servicesOpen && (
      <div className="pl-4 mt-2 space-y-1">
        <NavLink
          to="/services/Development"
          onClick={() => setOpen(false)}
          className="block text-white py-1 hover:text-[#b8e1dd]"
        >
          Software Development
        </NavLink>
        <NavLink
          to="/services/HR_consulting"
          onClick={() => setOpen(false)}
          className="block text-white py-1 hover:text-[#b8e1dd]"
        >
          HR Consulting
        </NavLink>
        <NavLink
          to="/Services/PayRoll"
          onClick={() => setOpen(false)}
          className="block text-white py-1 hover:text-[#b8e1dd]"
        >
          PayRoll Service
        </NavLink>
        <NavLink
          to="/Services/Global"
          onClick={() => setOpen(false)}
          className="block text-white py-1 hover:text-[#b8e1dd]"
        >
          Global Recruitment
        </NavLink>
        <NavLink
          to="/Services/Staffing"
          onClick={() => setOpen(false)}
          className="block text-white py-1 hover:text-[#b8e1dd]"
        >
          Staffing Service
        </NavLink>
        <NavLink
          to="/Services/Digital_Marketing"
          onClick={() => setOpen(false)}
          className="block text-white py-1 hover:text-[#b8e1dd]"
        >
          Digital Marketing
        </NavLink>
      </div>
    )}
  </div>

  {/* Job Seeker */}
  <NavLink
    to="/Job-seeker"
    onClick={() => setOpen(false)}
    className="block text-white py-2 text-lg hover:text-[#b8e1dd]"
  >
    Job Seeker
  </NavLink>

  <NavLink
    to="/Career"
    onClick={() => setOpen(false)}
    className="block text-white py-2 text-lg hover:text-[#b8e1dd]"
  >
    Career
  </NavLink>
  <NavLink
    to="/Testimonial"
    onClick={() => setOpen(false)}
    className="block text-white py-2 text-lg hover:text-[#b8e1dd]"
  >
    Testimonial
  </NavLink>
  <NavLink
    to="/Contact"
    onClick={() => setOpen(false)}
    className="block text-white py-2 text-lg hover:text-[#b8e1dd]"
  >
    Contact
  </NavLink>
</div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex space-x-8 ${scrolled ? "" : "text-white"}`}
        >
          {/* ... Desktop links are here, unchanged ... */}
          <NavLink
            to="/Home"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `hover:text-[#b8e1dd] ${isActive ? "text-[#b8e1dd] font-bold" : ""}`
            }
            style={textColorStyle}
          >
            Home
          </NavLink>

          {/* About */}
          <NavLink
            to="/About"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `hover:text-[#b8e1dd] ${isActive ? "text-[#b8e1dd] font-bold" : ""}`
            }
            style={textColorStyle}
          >
            About
          </NavLink>

          {/* Services Dropdown */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink
              to="/Services"
              className={({ isActive }) =>
                `hover:text-[#b8e1dd] ${isActive ? "text-[#b8e1dd] font-bold" : ""}`
              }
              style={textColorStyle}
            >
              Services ▸
            </NavLink>
            {servicesOpen && (
              <div className="absolute bg-white shadow-lg rounded-md w-64 text-black">


                {/* Software Development */}
                <div
                  className="relative"
                  onMouseEnter={() => setWebDevOpen(true)}
                  onMouseLeave={() => setWebDevOpen(false)}
                >
                  <NavLink
                    to="/Services/Development"
                    className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Software Development ▸
                  </NavLink>

                  {webDevOpen && (
                    <div className="absolute left-full top-0 bg-white shadow-lg rounded-md w-64">
                      <p className="py-1">HR Payroll and Statutory Service</p>
                      <p className="py-1">Payroll Outsourcing</p>
                    </div>
                  )}
                </div>

                <NavLink to="/services/HR_consulting" className="block px-4 py-2 hover:bg-gray-100">
                  HR Consulting
                </NavLink>

                {/* Payroll Service */}
                <div
                  className="relative"
                  onMouseEnter={() => setPayrollOpen(true)}
                  onMouseLeave={() => setPayrollOpen(false)}
                >
                  <NavLink
                    to="/Services/PayRoll"
                    className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Payroll Service ▸
                  </NavLink>

                  {payrollOpen && (
                    <div className="absolute left-full top-0 bg-white shadow-lg rounded-md w-64 px-4 py-2">
                      <p className="py-1">HR Payroll and Statutory Service</p>
                      <p className="py-1">Payroll Outsourcing</p>
                    </div>
                  )}
                </div>


                {/* Global Recruitment */}
                <NavLink to="/Services/Global" className="block px-4 py-2 hover:bg-gray-100">
                  Global Recruitment
                </NavLink>

                {/* Staffing Service */}
                <NavLink to="/Services/Staffing" className="block px-4 py-2 hover:bg-gray-100">
                  Staffing Service
                </NavLink>
                {/* Staffing Service */}
                <NavLink to="/Services/Digital_Marketing" className="block px-4 py-2 hover:bg-gray-100">
                  Digital Marketing
                </NavLink>
              </div>
            )}
          </div>

          {/* Job Seeker Dropdown */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setJobSeekerOpen(true)}
            onMouseLeave={() => setJobSeekerOpen(false)}
          >
            <NavLink
              to="/Job-seeker"
              className={({ isActive }) =>
                `hover:text-[#b8e1dd] ${isActive ? "text-[#b8e1dd] font-bold" : ""}`
              }
              style={textColorStyle}
            >
              Job Seeker
            </NavLink>
            {jobSeekerOpen && (
              <div className="absolute bg-white shadow-lg rounded-md w-64 text-black">
                <span className="block px-4 py-2">Current Opening</span>
              </div>
            )}
          </div>
          

          {/* Career */}
          <NavLink
            to="/Career"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `hover:text-[#b8e1dd] ${isActive ? "text-[#b8e1dd] font-bold" : ""}`
            }
            style={textColorStyle}
          >
            Career
          </NavLink>
          {/* Testimonial */}
          <NavLink
            to="/Testimonial"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `hover:text-[#b8e1dd] ${isActive ? "text-[#b8e1dd] font-bold" : ""}`
            }
            style={textColorStyle}
          >
            Testimonial
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/Contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `hover:text-[#b8e1dd] ${isActive ? "text-[#b8e1dd] font-bold" : ""}`
            }
            style={textColorStyle}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
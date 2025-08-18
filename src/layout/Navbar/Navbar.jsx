import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; 
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [softwareOpen, setSoftwareOpen] = useState(false);
  const [digitalOpen, setDigitalOpen] = useState(false);
  const [hrOpen, setHrOpen] = useState(false);
  const [payrollOpen, setPayrollOpen] = useState(false);
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

  const textColorStyle = isMobile
    ? { color: scrolled ? "black" : "white" }
    : { color: scrolled ? "rgba(0,0,0,0.9)" : "white" };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${open ? "bg-[#062925]" : scrolled ? "bg-transparent backdrop-blur" : "bg-[#062925]"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <NavLink to="/Home" className="flex items-center gap-2" style={textColorStyle}>
          <img src={logo} alt="PrimeSource Logo" className="w-30 mb-0" />
        </NavLink>

        {/* Desktop contact */}
        <div className="hidden md:flex items-center space-x-15 text-sm" style={textColorStyle}>
          <a href="tel: 8190901250" className="flex items-center gap-1 hover:underline">
            <FaPhoneAlt />
            <span>+91 8190901250</span>
          </a>
          <a href="mailto:connect@primesourcellp.com" className="flex items-center gap-1 hover:underline">
            <FaEnvelope />
            <span>connect@primesourcellp.com</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="md:hidden block focus:outline-none"
          style={textColorStyle}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#062925] z-50 p-6 flex flex-col transition-transform duration-300 space-y-2 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
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
          <NavLink to="/Home" onClick={() => setOpen(false)} className="block text-white py-2 text-lg hover:text-[#b8e1dd]">Home</NavLink>
          <NavLink to="/About" onClick={() => setOpen(false)} className="block text-white py-2 text-lg hover:text-[#b8e1dd]">About</NavLink>

          {/* Services Dropdown */}
          <div className="py-2">
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex justify-between w-full text-white text-lg hover:text-[#b8e1dd]">
              Services ▸
            </button>
            {servicesOpen && (
              <div className="pl-4 mt-2 space-y-5">
                {/* Software Development */}
                <div>
                  <button onClick={() => setSoftwareOpen(!softwareOpen)} className="flex justify-between w-full text-white text-lg hover:text-[#b8e1dd] ">Software Development ▸</button>
                  {softwareOpen && (
                    <div className="pl-4 space-y-2">
                      <NavLink to="/Services/Development" onClick={() => setOpen(false)} className="block text-white  py-3 hover:text-[#b8e1dd]">Website</NavLink>
                      <NavLink to="/Services/Development" onClick={() => setOpen(false)} className="block text-white  hover:text-[#b8e1dd]">Web Application</NavLink>
                      <NavLink to="/Services/Development" onClick={() => setOpen(false)} className="block text-white py-2 hover:text-[#b8e1dd]">Mobile Application </NavLink>
                    </div>
                  )}
                </div>

                {/* Digital Marketing */}
                
                <NavLink to="/Services/Digital_Marketing" onClick={() => setOpen(false)} className="flex justify-between w-full text-white text-lg hover:text-[#b8e1dd]">Digital Marketing</NavLink>

                {/* HR Consulting */}
                <div>
                  <button onClick={() => setHrOpen(!hrOpen)} className="flex justify-between w-full text-white text-lg hover:text-[#b8e1dd]">HR Consulting ▸</button>
                  {hrOpen && (
                    <div className="pl-4 space-y-1">
                      <NavLink to="/Services/Global" onClick={() => setOpen(false)} className="block text-white py-3 hover:text-[#b8e1dd]">Global Recruitment</NavLink>
                      <NavLink to="/Services/Staffing" onClick={() => setOpen(false)} className="block text-white py-1 hover:text-[#b8e1dd]">Staffing Service</NavLink>
                    </div>
                  )}
                </div>

                {/* Payroll Service */}
                <div>
                  <button onClick={() => setPayrollOpen(!payrollOpen)} className="flex justify-between w-full text-white text-lg hover:text-[#b8e1dd]">Payroll Service ▸</button>
                  {payrollOpen && (
                    <div className="pl-4 space-y-1">
                      <NavLink to="/Services/HR_Payroll" onClick={() => setOpen(false)} className="block text-white py-3 hover:text-[#b8e1dd]">HR Payroll Management</NavLink>
                      <NavLink to="/Services/Payroll_Outsourcing" onClick={() => setOpen(false)} className="block text-white py-1 hover:text-[#b8e1dd]">Payroll Outsourcing</NavLink>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/Job-seeker" onClick={() => setOpen(false)} className="block text-white py-2 text-lg hover:text-[#b8e1dd]">Job Seeker</NavLink>
          <NavLink to="/Career" onClick={() => setOpen(false)} className="block text-white py-2 text-lg hover:text-[#b8e1dd]">Career</NavLink>
          <NavLink to="/Testimonial" onClick={() => setOpen(false)} className="block text-white py-2 text-lg hover:text-[#b8e1dd]">Testimonial</NavLink>
          <NavLink to="/Contact" onClick={() => setOpen(false)} className="block text-white py-2 text-lg hover:text-[#b8e1dd]">Contact</NavLink>
        </div>


{/* ********************************************************************* */}


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/Home" className={({ isActive }) => `hover:text-[#b8e1dd] ${isActive ? "text-[#b8e1dd] font-bold" : ""}`} style={textColorStyle}>Home</NavLink>
          <NavLink to="/About" className={({ isActive }) => `hover:text-[#b8e1dd] ${isActive ? "text-[#b8e1dd] font-bold" : ""}`} style={textColorStyle}>About</NavLink>

          {/* Services Dropdown */}
          <div className="relative inline-block" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <NavLink to="/Services" className={({ isActive }) => `hover:text-[#b8e1dd] ${isActive ? "text-[#b8e1dd] font-bold" : ""}`} style={textColorStyle}>Services ▸</NavLink>
            {servicesOpen && (
              <div className="absolute bg-white shadow-lg rounded-md w-64 text-black">

              {/* Software Development */}
                    <div
                      className="relative"
                      onMouseEnter={() => setSoftwareOpen(true)}
                      onMouseLeave={() => setSoftwareOpen(false)}
                    >
                      <NavLink
                        to="/Services/Development"
                        className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Software Development ▸
                      </NavLink>

                      {softwareOpen && (
                        <div className="absolute left-full top-0 bg-white shadow-lg rounded-md w-64 px-4 py-2">
                          <NavLink
                            to="/Services/Web_Development"
                            className="block py-1 hover:bg-gray-100"
                          >
                            Wesite 
                          </NavLink>
                          <NavLink
                            to="/Services/Development"
                            className="block py-2 hover:bg-gray-100"
                          >
                            Web Application 
                          </NavLink>
                          <NavLink
                            to="/Services/Development"
                            className="block py-2 hover:bg-gray-100"
                          >
                            Mobile Application In ios & android
                          </NavLink>
                        </div>
                      )}
                    </div>


                {/* Digital Marketing */}
                <NavLink to="/Services/Digital_Marketing" className="block px-4 py-2 hover:bg-gray-100">Digital Marketing</NavLink>

                {/* HR Consulting */}
                  <div
                    className="relative"
                    onMouseEnter={() => setHrOpen(true)}
                    onMouseLeave={() => setHrOpen(false)}
                  >
                    <NavLink
                      to="/Services/HR_consulting"
                      className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      HR Consulting ▸
                    </NavLink>

                    {hrOpen && (
                      <div className="absolute left-full top-0 bg-white shadow-lg rounded-md w-64 px-4 py-2">
                        <NavLink
                          to="/Services/Development"
                          className="block py-1 hover:bg-gray-100"
                        >
                          Global Recruitment
                        </NavLink>
                        <NavLink
                          to="/Services/HR_consulting"
                          className="block py-1 hover:bg-gray-100"
                        >
                          Staffing Service
                        </NavLink>
                      </div>
                    )}
                  </div>


                {/* Payroll Service */}
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
                          <NavLink
                            to="/Services/PayRoll"
                            className="block py-1 hover:bg-gray-100"
                          >
                            HR Payroll Management
                          </NavLink>
                          <NavLink
                            to="/Services/Development"
                            className="block py-1 hover:bg-gray-100"
                          >
                            Payroll Outsourcing
                          </NavLink>
                        </div>
                      )}
                    </div>

              </div>
            )}
          </div>

          {/* Other desktop links */}
          <NavLink to="/Career" className={({ isActive }) => `hover:text-[#b8e1dd] ${isActive ? "text-[#b8e1dd] font-bold" : ""}`} style={textColorStyle}>Career</NavLink>
          <div className="relative inline-block" onMouseEnter={() => setJobSeekerOpen(true)} onMouseLeave={() => setJobSeekerOpen(false)}>
            <NavLink to="/Job-seeker" className={({ isActive }) => `hover:text-[#b8e1dd] ${isActive ? "text-[#b8e1dd] font-bold" : ""}`} style={textColorStyle}>Job Seeker</NavLink>
            {jobSeekerOpen && (
              <div className="absolute bg-white shadow-lg rounded-md w-64 text-black">
                <span className="block px-4 py-2">Apply for job</span>
              </div>
            )}
          </div>
          <NavLink to="/Testimonial" className={({ isActive }) => `hover:text-[#b8e1dd] ${isActive ? "text-[#b8e1dd] font-bold" : ""}`} style={textColorStyle}>Testimonial</NavLink>
          <NavLink to="/Contact" className={({ isActive }) => `hover:text-[#b8e1dd] ${isActive ? "text-[#b8e1dd] font-bold" : ""}`} style={textColorStyle}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

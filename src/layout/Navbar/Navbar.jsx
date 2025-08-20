import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; 
import logo from "../../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaChevronDown, FaChevronRight } from "react-icons/fa";

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

  // Close all dropdowns when menu closes
  useEffect(() => {
    if (!open) {
      setServicesOpen(false);
      setSoftwareOpen(false);
      setDigitalOpen(false);
      setHrOpen(false);
      setPayrollOpen(false);
      setJobSeekerOpen(false);
    }
  }, [open]);

  const textColorStyle = isMobile
    ? { color: scrolled ? "black" : "white" }
    : { color: scrolled ? "rgba(0,0,0,0.9)" : "white" };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${open ? "bg-transparent" : scrolled ? "bg-transparent backdrop-blur" : "bg-[#062925]"}`}
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

        {/* Mobile toggle - Only show when menu is closed */}
        {!open && (
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            className="md:hidden block focus:outline-none z-60"
            style={textColorStyle}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="md:hidden fixed top-0 left-0 w-full h-full bg-transparent backdrop-blur-lg z-50 p-6 flex flex-col overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8 sticky top-0 bg-transparent pt-4 pb-2">
                <NavLink to="/Home" onClick={() => setOpen(false)}>
                  <img src={logo} alt="Logo" className="w-28" />
                </NavLink>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-black">
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    whileHover={{ rotate: 90, scale: 1.2 }}
                    whileTap={{ scale: 0.9, rotate: 180 }}
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                </button>
              </div>

              {/* Mobile contact info */}
              <div className="flex flex-col space-y-4 mb-6 text-black">
                <a href="tel: 8190901250" className="flex items-center gap-2">
                  <FaPhoneAlt />
                  <span>+91 8190901250</span>
                </a>
                <a href="mailto:connect@primesourcellp.com" className="flex items-center gap-2">
                  <FaEnvelope />
                  <span>connect@primesourcellp.com</span>
                </a>
              </div>

              {/* Links */}
              <div className="space-y-2">
                <NavLink 
                  to="/Home" 
                  onClick={() => setOpen(false)} 
                  className="block text-black py-3 text-lg hover:text-[#062925] border-b border-gray-300"
                >
                  Home
                </NavLink>
                
                <NavLink 
                  to="/About" 
                  onClick={() => setOpen(false)} 
                  className="block text-black py-3 text-lg hover:text-[#062925] border-b border-gray-300"
                >
                  About
                </NavLink>

                {/* Services Dropdown */}
                <div className="py-3 border-b border-gray-300">
                  <button 
                    onClick={() => setServicesOpen(!servicesOpen)} 
                    className="flex justify-between items-center w-full text-black text-lg hover:text-[#062925]"
                  >
                    <span>Services</span>
                    <motion.span
                      animate={{ rotate: servicesOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaChevronRight size={14} />
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 mt-2 space-y-4 overflow-hidden"
                      >
                        {/* Software Development */}
                        <div>
                          <button 
                            onClick={() => setSoftwareOpen(!softwareOpen)} 
                            className="flex justify-between items-center w-full text-black text-md hover:text-[#062925]"
                          >
                            <span>Software Development</span>
                            <motion.span
                              animate={{ rotate: softwareOpen ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FaChevronRight size={12} />
                            </motion.span>
                          </button>
                          
                          <AnimatePresence>
                            {softwareOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 mt-2 space-y-3 overflow-hidden"
                              >
                                <NavLink 
                                  to="/Services/Development" 
                                  onClick={() => setOpen(false)} 
                                  className="block text-black py-2 hover:text-[#062925] text-md"
                                >
                                  Website
                                </NavLink>
                                <NavLink 
                                  to="/Services/Development" 
                                  onClick={() => setOpen(false)} 
                                  className="block text-black py-2 hover:text-[#062925] text-md"
                                >
                                  Web Application
                                </NavLink>
                                <NavLink 
                                  to="/Services/Development" 
                                  onClick={() => setOpen(false)} 
                                  className="block text-black py-2 hover:text-[#062925] text-md"
                                >
                                  Mobile Application
                                </NavLink>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Digital Marketing */}
                        <div>
                          <button 
                            onClick={() => setDigitalOpen(!digitalOpen)} 
                            className="flex justify-between items-center w-full text-black text-md hover:text-[#062925]"
                          >
                            <span>Digital Marketing</span>
                            <motion.span
                              animate={{ rotate: digitalOpen ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FaChevronRight size={12} />
                            </motion.span>
                          </button>
                          
                          <AnimatePresence>
                            {digitalOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 mt-2 space-y-3 overflow-hidden"
                              >
                                <NavLink 
                                  to="/Services/Digital_Marketing/SEO" 
                                  onClick={() => setOpen(false)} 
                                  className="block text-black py-2 hover:text-[#062925] text-md"
                                >
                                   Search Engine Optimization
                                </NavLink>
                                
                                <NavLink 
                                  to="/Services/Digital_Marketing/Social" 
                                  onClick={() => setOpen(false)} 
                                  className="block text-black py-2 hover:text-[#062925] text-md"
                                >
                                  Social Media Marketing
                                </NavLink>
                                <NavLink 
                                  to="/Services/Digital_Marketing/SEM" 
                                  onClick={() => setOpen(false)} 
                                  className="block text-black py-2 hover:text-[#062925] text-md"
                                >
                                   Search Engine Marketing
                                </NavLink>
                                <NavLink 
                                  to="/Services/Digital_Marketing/Content" 
                                  onClick={() => setOpen(false)} 
                                  className="block text-black py-2 hover:text-[#062925] text-md"
                                >
                                  Content writing
                                </NavLink>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* HR Consulting */}
                        <div>
                          <button 
                            onClick={() => setHrOpen(!hrOpen)} 
                            className="flex justify-between items-center w-full text-black text-md hover:text-[#062925]"
                          >
                            <span>HR Consulting</span>
                            <motion.span
                              animate={{ rotate: hrOpen ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FaChevronRight size={12} />
                            </motion.span>
                          </button>
                          
                          <AnimatePresence>
                            {hrOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 mt-2 space-y-3 overflow-hidden"
                              >
                                <NavLink 
                                  to="/Services/Global" 
                                  onClick={() => setOpen(false)} 
                                  className="block text-black py-2 hover:text-[#062925] text-md"
                                >
                                  Global Recruitment
                                </NavLink>
                                <NavLink 
                                  to="/Services/Staffing" 
                  onClick={() => setOpen(false)} 
                  className="block text-black py-2 hover:text-[#062925] text-md"
                >
                  Staffing Service
                </NavLink>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Payroll Service */}
        <div>
          <button 
            onClick={() => setPayrollOpen(!payrollOpen)} 
            className="flex justify-between items-center w-full text-black text-md hover:text-[#062925]"
          >
            <span>Payroll Service</span>
            <motion.span
              animate={{ rotate: payrollOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaChevronRight size={12} />
            </motion.span>
          </button>
          
          <AnimatePresence>
            {payrollOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="pl-4 mt-2 space-y-3 overflow-hidden"
              >
                <NavLink 
                  to="/Services/HR_Payroll" 
                  onClick={() => setOpen(false)} 
                  className="block text-black py-2 hover:text-[#062925] text-md"
                >
                  HR Payroll Management
                </NavLink>
                <NavLink 
                  to="/Services/Payroll_Outsourcing" 
                  onClick={() => setOpen(false)} 
                  className="block text-black py-2 hover:text-[#062925] text-md"
                >
                  Payroll Outsourcing
                </NavLink>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>

<NavLink 
  to="/Job-seeker" 
  onClick={() => setOpen(false)} 
  className="block text-black py-3 text-lg hover:text-[#062925] border-b border-gray-300"
>
  Job Seeker
</NavLink>

<NavLink 
  to="/Career" 
  onClick={() => setOpen(false)} 
  className="block text-black py-3 text-lg hover:text-[#062925] border-b border-gray-300"
>
  Career
</NavLink>

<NavLink 
  to="/Testimonial" 
  onClick={() => setOpen(false)} 
  className="block text-black py-3 text-lg hover:text-[#062925] border-b border-gray-300"
>
  Testimonial
</NavLink>

<NavLink 
  to="/Contact" 
  onClick={() => setOpen(false)} 
  className="block text-black py-3 text-lg hover:text-[#062925] border-b border-gray-300"
>
  Contact
</NavLink>
</div>
</motion.div>
)}
</AnimatePresence>

{/* Desktop Menu - unchanged */}
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
                Website Development 
              </NavLink>
              <NavLink
                to="/Services/Development"
                className="block py-2 hover:bg-gray-100"
              >
                Web Application Development
              </NavLink>
              <NavLink
                to="/Services/Development"
                className="block py-2 hover:bg-gray-100"
              >
                Mobile Application (iOS & Android)
              </NavLink>
            </div>
          )}
        </div>

        {/* Digital Marketing */}
        <div
          className="relative"
          onMouseEnter={() => setDigitalOpen(true)}
          onMouseLeave={() => setDigitalOpen(false)}
        >
          <NavLink
            to="/Services/Digital_Marketing"
            className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Digital Marketing ▸
          </NavLink>

          {digitalOpen && (
            <div className="absolute left-full top-0 bg-white shadow-lg rounded-md w-64 px-4 py-2">
              <NavLink
                to="/Services/Digital_Marketing/SEO"
                className="block py-1 hover:bg-gray-100"
              >
                Search Engine Optimization
              </NavLink>
             
              <NavLink
                to="/Services/Digital_Marketing/Social"
                className="block py-1 hover:bg-gray-100"
              >
                Social Media Marketing
              </NavLink>
              <NavLink
                to="/Services/Digital_Marketing/SEM"
                className="block py-1 hover:bg-gray-100"
              >
                Search Engine Marketing
              </NavLink>
               <NavLink
                to="/Services/Digital_Marketing/Content"
                className="block py-1 hover:bg-gray-100"
              >
                Content writing
              </NavLink>
            </div>
          )}
        </div>

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
                Global recruitment
              </NavLink>
              <NavLink
                to="/Services/HR_consulting"
                className="block py-1 hover:bg-gray-100"
              >
                Staffing service
              </NavLink>
              <NavLink
                to="/Services/HR_consulting"
                className="block py-1 hover:bg-gray-100"
              >
                Contract staffing
              </NavLink>
            </div>
          )}
        </div>

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
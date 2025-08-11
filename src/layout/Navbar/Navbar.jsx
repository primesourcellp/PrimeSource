import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  // Text color for mobile & desktop
  const textColorStyle = isMobile
    ? { color: scrolled ? "black" : "white" } // mobile
    : { color: scrolled ? "rgba(0,0,0,0.9)" : "white" }; // desktop

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-transparent backdrop-blur" : "bg-[#062925]"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/Home" className="flex items-center gap-2" style={textColorStyle}>
          <img src={logo} alt="PrimeSource Logo" className="w-30 mb-0" />
        </Link>

        {/* Desktop contact */}
        <div className="hidden md:flex items-center space-x-15 text-sm" style={textColorStyle}>
          <a href="tel:8189991250" className="flex items-center gap-1 hover:underline">
            <FaPhoneAlt />
            <span>818-999-1250</span>
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

        {/* Menu */}
        <div
          className={`md:flex ${open ? "block" : "hidden"} 
            absolute md:static top-16 space-x-8 left-0 w-full 
            ${scrolled ? "bg-transparent backdrop-blur" : "bg-[#062925]"} 
            md:bg-transparent md:w-auto p-4 md:p-0 z-10`}
        >
          {["Home", "About", "Services", "Career", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              onClick={() => setOpen(false)}
              className="block md:inline mb-2 md:mb-0 hover:text-[#b8e1dd]"
              style={textColorStyle}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

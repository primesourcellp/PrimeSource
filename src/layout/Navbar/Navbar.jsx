import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColorStyle = scrolled
    ? { color: "rgba(0, 0, 0, 0.9)" }
    : { color: "white" };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "md:bg-transparent" : "md:bg-[#062925]"} 
        bg-[#062925] md:bg-opacity-100 md:backdrop-blur`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/Home" className="flex items-center gap-2" style={textColorStyle}>
          <img src={logo} alt="PrimeSource Logo" className="w-30 mb-0" />
        </Link>

        {/* Contact info: visible on md and larger screens */}
        <div className="hidden md:flex items-center space-x-45 text-sm" style={textColorStyle}>
          <a href="tel:8189991250" className="flex items-center space-x-1 hover:underline">
            <FaPhoneAlt />
            <span>818-999-1250</span>
          </a>
          <a href="mailto:recruit@primesourcellp.com" className="flex items-center space-x-1 hover:underline">
            <FaEnvelope />
            <span>recruit@primesourcellp.com</span>
          </a>
        </div>

        {/* Mobile menu button */}
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

        {/* Mobile & Desktop Menu */}
        <div
          className={`space-x-5 md:flex ${open ? "block" : "hidden"} 
            absolute md:static top-16 left-0 w-full 
            bg-[#044A42] md:${scrolled ? "bg-transparent" : "bg-[#062925]"} 
            md:w-auto p-4 md:p-0 z-10`}
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

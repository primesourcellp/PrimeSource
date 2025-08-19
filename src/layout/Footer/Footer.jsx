import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#062925] text-[#B8E1DD] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={logo} alt="PrimeSource Logo" className="w-40 mb-4" />
            <p className="text-sm mb-4 leading-relaxed">
              Driven by our proactive mindset and purposeful actions, we consistently turn vision into impact.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1aAzHJ9v5f/" className="hover:text-[#3A9188] transition-colors duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="https://wa.me/918190901250" target="_blank" rel="noopener noreferrer" className="hover:text-[#3A9188] transition-colors duration-300">
                <FaWhatsapp size={18} />
              </a>
              <a href="https://www.instagram.com/primesource_consulting_llp?utm_source=ig_web_button_share_sheet&igsh=M3cxczAwaGFlN29z" className="hover:text-[#3A9188] transition-colors duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/primesourceconsulting/" className="hover:text-[#3A9188] transition-colors duration-300">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h5 className="font-bold mb-5 text-[#3A9188] text-lg border-b border-[#0a3d38] pb-2">Contact Us</h5>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#3A9188]" />
                <div>
                  <p className="text-sm mb-1">Primesource Consulting LLP</p>
                  <p className="text-sm mb-1">10/91/K6, Nehru Nager,</p>
                  <p className="text-sm mb-1">Surandai Road, Pavoorchatram,</p>
                  <p className="text-sm">Tenkasi District - 627806</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-[#3A9188]" />
                <a href="mailto:connect@primesourcellp.com" className="text-sm hover:text-[#3A9188] transition-colors duration-300">
                  connect@primesourcellp.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-3 text-[#3A9188]" />
                <a href="tel:+918190901250" className="text-sm hover:text-[#3A9188] transition-colors duration-300">
                  +91 8190901250
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h5 className="font-bold mb-5 text-[#3A9188] text-lg border-b border-[#0a3d38] pb-2">Useful Links</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/Home" className="text-sm hover:text-[#3A9188] transition-colors duration-300 block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="text-sm hover:text-[#3A9188] transition-colors duration-300 block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Services" className="text-sm hover:text-[#3A9188] transition-colors duration-300 block py-1">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/Career" className="text-sm hover:text-[#3A9188] transition-colors duration-300 block py-1">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/Job-seeker" className="text-sm hover:text-[#3A9188] transition-colors duration-300 block py-1">
                  Job Seeker
                </Link>
              </li>
              <li>
                <Link to="/Testimonial" className="text-sm hover:text-[#3A9188] transition-colors duration-300 block py-1">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="text-sm hover:text-[#3A9188] transition-colors duration-300 block py-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h5 className="font-bold mb-5 text-[#3A9188] text-lg border-b border-[#0a3d38] pb-2">Our Services</h5>
            
            {/* Software Development Services */}
            <div className="mb-4">
              <Link to="/Services/Development" className="font-semibold text-[#B8E1DD] text-sm mb-2">Software Development</Link>
              <ul className="space-y-2 pl-2">
                <li>
                  <Link to="/Services/Web_Development" className="text-xs hover:text-[#3A9188] transition-colors duration-300 block py-3">
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link to="/Services/Development" className="text-xs hover:text-[#3A9188] transition-colors duration-300 block py-1">
                    Web Application
                  </Link>
                </li>
                <li>
                  <Link to="/Services/Development" className="text-xs hover:text-[#3A9188] transition-colors duration-300 block py-1">
                    Mobile Application (iOS & Android)
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Digital Marketing Services */}
            <div className="mb-4">
              <Link to="/Services/Digital_Marketing"className="font-semibold text-[#B8E1DD] text-sm mb-2">Digital Marketing</Link>
              <ul className="space-y-2 pl-2">
                <li>
                  <Link to="/Services/Digital_Marketing/SEO" className="text-xs hover:text-[#3A9188] transition-colors duration-300 block py-3">
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link to="/Services/Digital_Marketing/Content" className="text-xs hover:text-[#3A9188] transition-colors duration-300 block py-1">
                    Content Writing
                  </Link>
                </li>
                <li>
                  <Link to="/Services/Digital_Marketing/Social" className="text-xs hover:text-[#3A9188] transition-colors duration-300 block py-1">
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/Services/Digital_Marketing/SEM" className="text-xs hover:text-[#3A9188] transition-colors duration-300 block py-1">
                    Search Engine Marketing
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* HR Consulting Services */}
            <div className="mb-4">
              <Link to ="/Services/HR_consulting" className="font-semibold text-[#B8E1DD] text-sm mb-2">HR Consulting</Link>
              <ul className="space-y-2 pl-2">
                <li>
                  <Link to="/Services/Global" className="text-xs hover:text-[#3A9188] transition-colors duration-300 block py-3">
                    Global Recruitment
                  </Link>
                </li>
                <li>
                  <Link to="/Services/Staffing" className="text-xs hover:text-[#3A9188] transition-colors duration-300 block py-1">
                    Staffing Service
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Payroll Services */}
            <div>
              <Link to="/Services/PayRoll" className="font-semibold text-[#B8E1DD] text-sm mb-2">Payroll Services</Link>
              <ul className="space-y-2 pl-2">
                <li>
                  <Link to="/Services/HR_Payroll" className="text-xs hover:text-[#3A9188] transition-colors duration-300 block py-3">
                    HR Payroll Management
                  </Link>
                </li>
                <li>
                  <Link to="/Services/Payroll_Outsourcing" className="text-xs hover:text-[#3A9188] transition-colors duration-300 block py-1">
                    Payroll Outsourcing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

     
      </div>
    </footer>
  );
}
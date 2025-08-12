import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // Update path if needed

export default function Footer() {
  return (
    <footer className="bg-[#062925] text-[#B8E1DD] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-15">
          <div>
            <img src={logo} alt="PrimeSource Logo" className="w-35 mb-2" />
            <p className="text-s">Driven by our proactive mindset and purposeful actions, we consistently turn vision into impact.</p>
          </div>
          <div>
            <h5 className="font-bold mb-2 text-[#3A9188]">Contact Us</h5>
            <p className="text-s mb-1">10/91/K6,Nehru Nager,Surandai  Road, Pavoorchatram, Kulasekarapatti, Tenkasi Tk, Tenkasi District - 627808.</p>
            <p className="text-s mb-1">recruit@primesourcellp.com</p>
            <p className="text-s"> 819-090-1250</p>
          </div>
          <div>
            <h5 className="font-bold mb-2 text-[#3A9188]">Useful Links</h5>
            <ul>
              <li className="mb-2"><a href="/Home" className="hover:text-[#3A9188]">Home</a></li>
               <li className="mb-2"><a href="/About" className="hover:text-[#3A9188]">About Us</a></li>
              <li className="mb-2"><a href="/Services" className="hover:text-[#3A9188]">Our Services</a></li>
              <li className="mb-2"><a href="/Career" className="hover:text-[#3A9188]">Career</a></li>
              <li><a href="/Contact" className="hover:text-[#3A9188]">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-3 text-[#3A9188]">Social Media</h5>
            <div className="flex space-x-5">
              <a href="/" className="hover:text-[#3A9188]"><FaFacebookF /></a>
              <a href="/" className="hover:text-[#3A9188]"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/primesource_consulting_llp?utm_source=ig_web_button_share_sheet&igsh=M3cxczAwaGFlN29z" className="hover:text-[#3A9188]"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/primesourceconsulting/" className="hover:text-[#3A9188]"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
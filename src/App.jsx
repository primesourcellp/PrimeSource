import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/About/About.jsx';
import Career from './component/Career/Career.jsx';
import Contact from './component/Contact_us/Contact.jsx';
import Home from './component/Home/Home.jsx';
import Services from './component/Services/Service.jsx';
import Copy from './layout/Copywrite/Copy.jsx';
import Footer from './layout/Footer/Footer.jsx';
import Navbar from './layout/Navbar/Navbar.jsx';
import Testimonial from './component/Testimonial/Testimonial';
import JobOpening from './component/Job/Job-seeker';
import Development from './component/Services/Development';
import HR_consulting from './component/Services/HR_consulting';
import PayRoll from './component/Services/PayRoll';
import Global from './component/Services/Global';
import Staffing from './component/Services/Staffing';
import Digital_Marketing from './component/Services/Digital_Marketing';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Services/Development" element={<Development />} />
        <Route path="/Services/HR_consulting" element={<HR_consulting />} />
        <Route path="/Services/PayRoll" element={<PayRoll />} />
        <Route path="/Services/Global" element={<Global />} />
        <Route path="/Services/Staffing" element={<Staffing />} />
        <Route path="/Services/Digital_Marketing" element={<Digital_Marketing />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/Job-seeker" element={<JobOpening />} />
      </Routes>
      <Footer />
      <Copy />
    </Router>
  );
}

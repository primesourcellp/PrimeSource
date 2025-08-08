import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './component/About/About.jsx';
import Career from './component/Career/Career.jsx';
import Contact from './component/Contact_us/Contact.jsx';
import Home from './component/Home/Home.jsx';
import Services from './component/Services/Service.jsx';
import Copy from './layout/Copywrite/Copy.jsx';
import Footer from './layout/Footer/Footer.jsx';
import Navbar from './layout/Navbar/Navbar.jsx';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Copy />
    </Router>
  );
}

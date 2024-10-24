import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/index';
import Footer from './components/Footer/index';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Damafon from './pages/Damafon';
import Alarm from './pages/Alarm';
import Camera from './pages/Camera';
import Cable from './pages/Cable';
import Switch from './pages/Switch';





function App() {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Products',options:[{label: 'Video Intercom', href: '/damafon'},{label: 'Camera', href: '/camera'},{label: 'Alarm System', href: '/alarm' },{label: 'Cable', href: '/cable' },{label: 'Switch', href: '/Switch' }]},
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },

  ];

  return (
    <Router>
      <Nav links={links} phone="+(374) 44 040-405"logo={<a href='/'><img src="/logo.webp" alt="logo" /></a>} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/damafon" element={<Damafon />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/alarm" element={<Alarm />} /> 
        <Route path="/camera" element={<Camera />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/cable" element={<Cable />} /> 
        <Route path="/switch" element={<Switch />} /> 

      </Routes>
      <Footer links={links} logo={<a href='/'><img src="/logo.webp" alt="logo" /></a>} />
    </Router>
  );
}

export default App;

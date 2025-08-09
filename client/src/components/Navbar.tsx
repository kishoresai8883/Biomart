import { useEffect, useState } from 'react';
import { Button } from "../components/ui/button";
import { NavLink } from 'react-router-dom'
import Logo from '../assets/BiomartLogo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b shadow-sm border-white/20 ${scrolled ? 'bg-white border-slate-100' : 'bg-white/10 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
              <img src={Logo} alt="Logo" className="w-44" />          
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={`${scrolled ? "text-slate-700" : "text-white hover:text-green-light transition-colors"}`}>Home</NavLink>
            <NavLink to="/about" className={`${scrolled ? "text-slate-700" : "text-white hover:text-green-light transition-colors"}`}>About Us</NavLink>
            <NavLink to="/services" className={`${scrolled ? "text-slate-700" : "text-white hover:text-green-light transition-colors"}`}>Services</NavLink>
            <NavLink to="/why" className={`${scrolled ? "text-slate-700" : "text-white hover:text-green-light transition-colors"}`}>Contact</NavLink>
          </div>
          
          <Button variant="cta" size="lg">
            Admin
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
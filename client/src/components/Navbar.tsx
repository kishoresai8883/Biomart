import { Button } from "../components/ui/Button";
import { Leaf } from "lucide-react";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Biomart</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className="text-white hover:text-green-light transition-colors">Home</NavLink>
            <NavLink to="/about" className="text-white hover:text-green-light transition-colors">About Us</NavLink>
            <NavLink to="/services" className="text-white hover:text-green-light transition-colors">Services</NavLink>
            <NavLink to="/why" className="text-white hover:text-green-light transition-colors">Contact</NavLink>
          </div>
          
          <Button variant="cta" size="lg">
            CONTACT US
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
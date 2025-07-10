
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-4xl font-light text-yellow-400 tracking-widest">
      <img 
        src="/images/bee logo.png" // 
        className="w-12 h-12" // Adjust size to match text
      />
      <span>WellBee</span>
      </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><a href="#" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" target='blank' className="hover:text-yellow-400">About Us</a></li>
          <li><a href="#" className="hover:text-yellow-400">Services</a></li>
          <li><Link to="/contact" className='hover:text-yellow-400'>Contact</Link>
        </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-purple-700" /> : <Menu className="h-6 w-6 text-purple-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-4 text-gray-700 font-medium">
          <li><a href="#" className="block hover:text-purple-700">Home</a></li>
          <li><a href="#" className="block hover:text-purple-700">About</a></li>
          <li><a href="#" className="block hover:text-purple-700">Services</a></li>
          <li><a href="#" className="block hover:text-purple-700">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

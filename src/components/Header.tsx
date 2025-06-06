
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      {/* Top contact bar */}
      <div className="bg-pharma-blue text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@Traverseplatform.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Global Pharmaceutical Raw Materials Supplier</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl lg:text-3xl font-bold">
          <img src="https://i.ibb.co/vC0MwJZg/assets-task-01jwv0dnv9eak97c3vrdj8vd66-1748958169-img-0-removebg-preview.png" width="200px" alt="" />
        </div>
          {/* Logo */}
          {/* <div className="flex items-center">
            <div className="bg-gradient-to-r from-pharma-blue to-pharma-green p-2 rounded-lg mr-3">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-pharma-blue font-bold text-lg">L</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-pharma-blue">Traverse Platform</h1>
              <p className="text-xs text-pharma-grey">Pharmaceutical Solutions</p>
            </div>
          </div> */}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium">Home</a>
            <a href="#products" className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium">Products</a>
            <a href="#services" className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium">Services</a>
            <a href="#quality" className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium">Quality</a>
            <a href="#about" className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium">About</a>
            <button className="bg-pharma-green hover:bg-pharma-green-dark text-white px-6 py-2 rounded-lg transition-colors font-medium">
              <a href="#contact">Contact Us</a>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-pharma-grey hover:text-pharma-blue"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium">Home</a>
              <a href="#products" className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium">Products</a>
              <a href="#services" className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium">Services</a>
              <a href="#quality" className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium">Quality</a>
              <a href="#about" className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium">About</a>
              <a href="#contact" className="text-pharma-grey hover:text-pharma-blue transition-colors font-medium">Contact</a>
              <button className="bg-pharma-green hover:bg-pharma-green-dark text-white px-6 py-2 rounded-lg transition-colors font-medium w-fit">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

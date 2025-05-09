import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-900 shadow-md py-2' : 'bg-blue-900/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-white">
              First Choices Insurance
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('personal')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Personal
            </button>
            <button 
              onClick={() => scrollToSection('business')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Business
            </button>
            <button 
              onClick={() => scrollToSection('quote')}
              className="bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
            >
              Get a Quote
            </button>
            <a 
              href="tel:2105909955" 
              className="flex items-center text-white hover:text-blue-200 transition-colors"
            >
              <Phone size={18} className="mr-2" />
              (210) 590-9955
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <a 
              href="tel:2105909955" 
              className="mr-4 text-white hover:text-blue-200"
              aria-label="Call us"
            >
              <Phone size={24} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 shadow-xl">
          <div className="px-4 py-3 space-y-4">
            <button 
              onClick={() => scrollToSection('personal')}
              className="block w-full text-left text-white hover:text-blue-200 py-2"
            >
              Personal Insurance
            </button>
            <button 
              onClick={() => scrollToSection('business')}
              className="block w-full text-left text-white hover:text-blue-200 py-2"
            >
              Business Insurance
            </button>
            <button 
              onClick={() => scrollToSection('quote')}
              className="block w-full text-center bg-white text-blue-900 px-4 py-2 rounded-md hover:bg-blue-100"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
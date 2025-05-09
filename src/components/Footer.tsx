import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">First Choice Insurance Services</h3>
            <p className="text-blue-200 mb-6">
              Your local independent insurance agency serving the San Antonio area since 1989.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Insurance Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#personal" className="text-blue-200 hover:text-white transition-colors">Personal Insurance</a>
              </li>
              <li>
                <a href="#business" className="text-blue-200 hover:text-white transition-colors">Business Insurance</a>
              </li>
              <li>
                <a href="#quote" className="text-blue-200 hover:text-white transition-colors">Get a Quote</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-blue-300 flex-shrink-0" />
                <span>8526 Tuxford<br />San Antonio, TX 78239</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-blue-300 flex-shrink-0" />
                <a href="tel:2105909955" className="hover:text-blue-200 transition-colors">(210) 590-9955</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-blue-300 flex-shrink-0" />
                <a href="mailto:info@firstchoicesa.com" className="hover:text-blue-200 transition-colors">info@firstchoicesa.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock size={20} className="mr-3 mt-1 text-blue-300 flex-shrink-0" />
                <div>
                  <p>Monday - Friday</p>
                  <p className="text-blue-200">9:00 AM - 5:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 mt-1 text-blue-300 flex-shrink-0" />
                <div>
                  <p>Saturday</p>
                  <p className="text-blue-200">By Appointment</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 mt-1 text-blue-300 flex-shrink-0" />
                <div>
                  <p>Sunday</p>
                  <p className="text-blue-200">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-800 text-center">
          <p className="text-blue-200">
            &copy; {year} First Choice Insurance Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
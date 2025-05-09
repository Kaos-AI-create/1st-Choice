import React from 'react';
import { Shield, Check } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Buy Insurance the Smart Way
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100">
              Let your local independent agent do the work for you.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <Check className="text-blue-300 mr-2" size={20} />
                <span>Compare multiple carriers for the best rates</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Check className="text-blue-300 mr-2" size={20} />
                <span>Local, personalized customer service</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Check className="text-blue-300 mr-2" size={20} />
                <span>Find the right coverage for your needs</span>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => document.getElementById('personal')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors shadow-md"
              >
                Personal
              </button>
              <button 
                onClick={() => document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-800 text-white border border-blue-400 px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors shadow-md"
              >
                Business
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="w-60 h-60 lg:w-72 lg:h-72 relative">
              <Shield size={260} strokeWidth={1} className="text-blue-400 opacity-20 absolute -top-4 -left-4" />
              <div className="bg-white text-blue-900 p-6 rounded-lg shadow-xl relative z-10">
                <h3 className="text-2xl font-bold mb-4">Local Since 1989</h3>
                <p className="text-gray-700 mb-4">Serving San Antonio and surrounding areas with personalized insurance solutions.</p>
                <div className="text-sm text-gray-500">
                  <p>8526 Tuxford</p>
                  <p>San Antonio, TX 78239</p>
                  <p className="font-medium mt-2">(210) 590-9955</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
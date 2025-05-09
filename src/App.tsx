import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InsuranceSection from './components/InsuranceSection';
import QuoteForm from './components/QuoteForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { personalInsurance, businessInsurance } from './data/insuranceData';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <SEO />
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <InsuranceSection 
          id="personal" 
          title="Personal Insurance" 
          items={personalInsurance} 
        />
        <InsuranceSection 
          id="business" 
          title="Business Insurance" 
          items={businessInsurance} 
        />
        <QuoteForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
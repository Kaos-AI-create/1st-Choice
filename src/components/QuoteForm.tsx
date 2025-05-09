import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    insuranceType: 'Auto',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid';
    }
    if (!formData.zip.trim()) {
      errors.zip = 'ZIP code is required';
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zip)) {
      errors.zip = 'ZIP code is invalid';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send the form data to a server
      // This is a simulation of form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        zip: '',
        insuranceType: 'Auto',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-16 scroll-mt-20">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Request a Free Quote</h2>
            <p className="text-blue-100 mb-6">
              Our team of insurance experts will help you find the best coverage at the most competitive rates.
            </p>
            
            <div className="space-y-4 text-blue-100">
              <div className="flex items-start">
                <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={20} />
                <p>Compare multiple insurance carriers with one quick form</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={20} />
                <p>Get personalized recommendations from a local agent</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-3 mt-1 flex-shrink-0" size={20} />
                <p>No obligation and completely free service</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-white p-8 md:p-12">
            {isSubmitted ? (
              <motion.div 
                className="h-full flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle className="text-green-500 mb-4" size={64} />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Quote Request Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. One of our insurance experts will contact you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Your full name"
                  />
                  {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="your@email.com"
                  />
                  {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md ${formErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="(210) 555-1234"
                    />
                    {formErrors.phone && <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      value={formData.zip}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-md ${formErrors.zip ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="78239"
                    />
                    {formErrors.zip && <p className="mt-1 text-sm text-red-600">{formErrors.zip}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700 mb-1">Insurance Type</label>
                  <select
                    id="insuranceType"
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md bg-white"
                  >
                    <option value="Auto">Auto Insurance</option>
                    <option value="Home">Home Insurance</option>
                    <option value="Renters">Renters Insurance</option>
                    <option value="Business">Business Insurance</option>
                    <option value="SR-22">SR-22 Insurance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    placeholder="Tell us more about what you're looking for..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 px-4 rounded-md hover:bg-blue-800 transition-colors flex items-center justify-center"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span>Get My Free Quote</span>
                      <Send size={18} className="ml-2" />
                    </div>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
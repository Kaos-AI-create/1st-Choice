import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Best and most convenient insurance company I have ever had! Been with them for over 4 years along with all my siblings and friends — we all get the same great service. Wouldn't change a thing about the people or the rates!",
    author: "Queen F.",
    location: "San Antonio, TX",
    rating: 5
  },
  {
    quote: "I've been a customer for 6 years now. They always find me the best rates and provide exceptional service. Their team really takes the time to understand my needs.",
    author: "Michael R.",
    location: "San Antonio, TX",
    rating: 5
  },
  {
    quote: "After shopping around for months, First Choice found me coverage that was affordable and comprehensive. The staff is friendly and very knowledgeable.",
    author: "Sarah T.",
    location: "New Braunfels, TX",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Trusted by the Community</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say about working with First Choices Insurance Services.
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <Quote size={120} className="text-blue-100 absolute -top-10 -left-4 sm:left-10 opacity-70 z-0" />
        
        <div className="relative z-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 sm:p-10"
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: index === activeIndex ? 1 : 0,
                x: index === activeIndex ? 0 : 100,
                position: index === activeIndex ? 'relative' : 'absolute',
              }}
              transition={{ duration: 0.5 }}
              style={{ 
                display: Math.abs(index - activeIndex) <= 1 ? 'block' : 'none',
                top: 0,
                left: 0,
                width: '100%'
              }}
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-blue-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      className={`w-3 h-3 rounded-full ${i === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                      onClick={() => setActiveIndex(i)}
                      aria-label={`View testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
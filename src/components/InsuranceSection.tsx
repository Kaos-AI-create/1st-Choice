import React from 'react';
import { motion } from 'framer-motion';
import { InsuranceItem } from '../data/insuranceData';

interface InsuranceSectionProps {
  id: string;
  title: string;
  items: InsuranceItem[];
}

const InsuranceSection: React.FC<InsuranceSectionProps> = ({ id, title, items }) => {
  return (
    <section id={id} className="py-16 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-800 mr-4">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InsuranceSection;
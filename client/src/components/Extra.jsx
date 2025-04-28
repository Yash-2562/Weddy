import React from 'react';
import { FaHandshake, FaCity, FaHeart, FaSmile } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Extra() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Why Weddy?
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-pink-100 rounded-xl p-6 flex flex-col items-center text-center"
        >
          <FaHandshake size={40} className="text-pink-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Trusted Marketplace</h3>
          <p className="text-gray-600 text-sm">Partnered with Matrimony.com Group for reliability.</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-blue-100 rounded-xl p-6 flex flex-col items-center text-center"
        >
          <FaCity size={40} className="text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Vendors Across 40+ Cities</h3>
          <p className="text-gray-600 text-sm">Find top-rated vendors in multiple cities easily.</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-purple-100 rounded-xl p-6 flex flex-col items-center text-center"
        >
          <FaHeart size={40} className="text-purple-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">2.3 Million Connections</h3>
          <p className="text-gray-600 text-sm">Connecting happy couples with the best services.</p>
        </motion.div>

        {/* Card 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-indigo-100 rounded-xl p-6 flex flex-col items-center text-center"
        >
          <FaSmile size={40} className="text-indigo-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">20 Lakh+ Happy Customers</h3>
          <p className="text-gray-600 text-sm">Trusted by millions across the country.</p>
        </motion.div>

      </div>
    </section>
  );
}

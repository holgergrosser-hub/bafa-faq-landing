import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { trustIndicators } from '../data/faqData';

const TrustIndicators = () => {
  return (
    <section className="py-16 bg-white border-y border-neutral-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustIndicators.map((item, index) => {
            const Icon = Icons[item.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {item.number}
                </div>
                <div className="text-sm md:text-base text-neutral-600 font-medium">
                  {item.text}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;

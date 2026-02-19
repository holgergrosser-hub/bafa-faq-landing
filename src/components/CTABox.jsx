import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTABox = ({ title, description, primaryCTA, secondaryCTA, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-10 text-white shadow-2xl"
    >
      <div className="max-w-3xl mx-auto text-center">
        {Icon && (
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <Icon className="w-8 h-8" />
            </div>
          </div>
        )}
        
        <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
          {title}
        </h3>
        
        <p className="text-lg text-white/90 mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCTA && (
            <a
              href={primaryCTA.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary text-lg font-semibold rounded-xl hover:bg-neutral-50 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              {primaryCTA.text}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          )}
          
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white text-lg font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-200"
            >
              {secondaryCTA.text}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CTABox;

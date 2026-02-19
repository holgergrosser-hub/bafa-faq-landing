import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { faqData } from '../data/faqData';

const CategoryCards = ({ onCategoryClick }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-display font-display font-bold text-neutral-900 mb-4">
            FAQ Kategorien
          </h2>
          <p className="text-xl text-neutral-600">
            Wählen Sie eine Kategorie, um direkt zu den relevanten Fragen zu springen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqData.map((category, index) => {
            const Icon = Icons[category.icon];
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => onCategoryClick(category.id)}
                className="group bg-white rounded-2xl p-6 border-2 border-neutral-200 hover:border-primary transition-all duration-300 hover:shadow-xl text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {category.questions.length}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                  {category.category}
                </h3>
                <p className="text-sm text-neutral-600">
                  {category.description}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;

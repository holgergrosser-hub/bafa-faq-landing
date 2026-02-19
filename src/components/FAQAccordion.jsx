import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Link2 } from 'lucide-react';

const FAQItem = ({ faq, isOpen, onToggle }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    const url = `${window.location.origin}#${faq.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      id={faq.id}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl border-2 border-neutral-200 hover:border-primary/30 transition-all duration-300 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-neutral-900 pr-8 group-hover:text-primary transition-colors">
          {faq.question}
        </span>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              copyLink();
            }}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            title="Link kopieren"
          >
            <Link2 className={`w-4 h-4 ${copied ? 'text-green-500' : 'text-neutral-400'}`} />
          </button>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 border-t border-neutral-200">
              <p className="text-base text-neutral-700 leading-relaxed mt-4">
                {faq.answer}
              </p>
              {faq.cta && (
                <div className="mt-4 text-sm text-primary font-medium italic">
                  → {faq.cta}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQAccordion = ({ category, searchTerm }) => {
  const [openItems, setOpenItems] = useState([]);

  // Filter questions based on search term
  const filteredQuestions = category.questions.filter(
    (q) =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredQuestions.length === 0) return null;

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div id={category.id} className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h3 className="text-3xl font-display font-bold text-neutral-900 mb-3">
          {category.category}
        </h3>
        <p className="text-lg text-neutral-600 mb-6">
          {category.description}
        </p>
      </motion.div>

      <div className="space-y-4">
        {filteredQuestions.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openItems.includes(faq.id)}
            onToggle={() => toggleItem(faq.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;

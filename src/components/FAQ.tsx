import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { atlasData } from '../data/atlasData';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[var(--color-atlas-bg)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-400">Tire suas dúvidas sobre a gestão e o evento.</p>
        </div>

        <div className="space-y-4">
          {atlasData.faq.map((item, index) => (
            <div 
              key={index} 
              className={`border border-[var(--color-atlas-border)] rounded-lg overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'border-[var(--color-atlas-copper)] bg-[var(--color-atlas-card)]' : 'bg-[var(--color-atlas-card)]/50 hover:border-[var(--color-atlas-copper)]/50'
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-medium text-lg ${activeIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {item.question}
                </span>
                <span className={`ml-4 flex-shrink-0 text-[var(--color-atlas-copper)] transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-[var(--color-atlas-border)]/50 pt-4 whitespace-pre-line text-justify">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

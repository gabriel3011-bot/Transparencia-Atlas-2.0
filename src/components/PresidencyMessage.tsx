import { motion } from 'framer-motion';
import { atlasData } from '../data/atlasData';
import { Quote } from 'lucide-react';

export function PresidencyMessage() {
  return (
    <section className="py-24 bg-[var(--color-atlas-card)] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-[var(--color-atlas-copper)] rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-[var(--color-atlas-copper)] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 flex justify-center">
            <div className="p-4 bg-[var(--color-atlas-copper)]/10 rounded-full">
              <Quote size={32} className="text-[var(--color-atlas-copper)]" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 leading-snug">
            {atlasData.presidency.title}
          </h2>
          
          <blockquote className="text-xl md:text-2xl text-gray-300 font-light italic leading-relaxed mb-8">
            "{atlasData.presidency.message}"
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[var(--color-atlas-copper)]" />
            <cite className="text-[var(--color-atlas-copper)] font-medium not-italic tracking-wider uppercase text-sm">
              {atlasData.presidency.author}
            </cite>
            <div className="h-px w-12 bg-[var(--color-atlas-copper)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

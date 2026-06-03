import { motion } from 'framer-motion';
import { atlasData } from '../data/atlasData';
import { Quote } from 'lucide-react';

export function PresidencyMessage() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-atlas-card)] relative overflow-hidden">
      {/* Decorative background - Minimalist */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="mb-10 flex justify-center">
            <div className="p-4 bg-[var(--color-atlas-copper)]/5 rounded-full border border-[var(--color-atlas-copper)]/10">
              <Quote size={24} className="text-[var(--color-atlas-copper)]" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-serif font-medium text-white mb-10 leading-snug tracking-tight">
            {atlasData.presidency.title}
          </h2>
          
          <blockquote className="text-lg md:text-2xl text-gray-300 font-light italic leading-relaxed mb-10 tracking-wide text-justify">
            "{atlasData.presidency.message}"
          </blockquote>
          
          <div className="flex flex-col items-center gap-4">
            <div className="h-8 w-px bg-[var(--color-atlas-copper)]/30" />
            <cite className="text-[var(--color-atlas-copper)] font-medium not-italic tracking-[0.2em] uppercase text-xs">
              {atlasData.presidency.author}
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

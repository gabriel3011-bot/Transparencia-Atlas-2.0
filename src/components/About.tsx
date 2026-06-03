import { motion } from 'framer-motion';
import { atlasData } from '../data/atlasData';
import { Card } from './ui/Card';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[var(--color-atlas-bg)] min-h-[80vh] flex items-center scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8 order-2 md:order-1">
            <div>
              <span className="text-[var(--color-atlas-copper)] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">Quem Somos</span>
              <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-6 leading-tight">
                {atlasData.about.title}
              </h2>
            </div>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light text-justify tracking-wide">
              {atlasData.about.description}
            </p>
            <div className="w-16 h-px bg-[var(--color-atlas-copper)]/50" />
          </div>

          {/* Image Content */}
          <div className="relative order-1 md:order-2">
            <div className="absolute inset-0 bg-[var(--color-atlas-copper)]/5 rounded-2xl transform translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 transition-transform duration-500" />
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src={atlasData.about.imageUrl}
                alt="About us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-40" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

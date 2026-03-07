import { motion } from 'framer-motion';
import { atlasData } from '../data/atlasData';
import { Card } from './ui/Card';

export function About() {
  return (
    <section id="about" className="py-24 bg-[var(--color-atlas-bg)] min-h-screen flex items-center scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              {atlasData.about.title}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-light text-justify">
              {atlasData.about.description}
            </p>
            <div className="w-24 h-1 bg-[var(--color-atlas-copper)] mt-8" />
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="absolute inset-0 bg-[var(--color-atlas-copper)]/10 rounded-2xl transform translate-x-4 translate-y-4" />
            <Card className="relative overflow-hidden aspect-[4/3] p-0 border-none">
              <img
                src={atlasData.about.imageUrl}
                alt="About us"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

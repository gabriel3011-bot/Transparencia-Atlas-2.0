import { motion } from 'framer-motion';
import { atlasData } from '../data/atlasData';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-atlas-copper)]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-atlas-copper)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-atlas-copper)]/10 border border-[var(--color-atlas-copper)]/20 text-[var(--color-atlas-copper)] text-xs font-medium tracking-wider mb-6">
            Última atualização: {atlasData.hero.lastUpdate}
          </span>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            {atlasData.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            {atlasData.hero.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12"
        >
          <div className="w-px h-24 bg-gradient-to-b from-[var(--color-atlas-copper)] to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}

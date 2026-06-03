import { motion } from 'framer-motion';
import { atlasData } from '../data/atlasData';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements - Subtle Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[radial-gradient(circle_at_center,rgba(197,148,119,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-[var(--color-atlas-copper)]/5 border border-[var(--color-atlas-copper)]/20 text-[var(--color-atlas-copper)] text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
            Última atualização: {atlasData.hero.lastUpdate}
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-8 leading-[1.1] tracking-tight">
            {atlasData.hero.title}
          </h1>
          
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed font-light tracking-wide">
            {atlasData.hero.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: '6rem' }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="mt-16 md:mt-24 flex justify-center"
        >
          <div className="w-px bg-gradient-to-b from-[var(--color-atlas-copper)]/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

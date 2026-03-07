import { motion } from 'framer-motion';
import { atlasData } from '../data/atlasData';

export function Partners() {
  return (
    <section id="partners" className="py-20 md:py-32 bg-[var(--color-atlas-card)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[var(--color-atlas-copper)] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">Parcerias</span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6 tracking-tight">Empresas Parceiras</h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto">
            Contamos com o apoio de empresas que compartilham nosso compromisso com a excelência e transparência.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
          {atlasData.partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex items-center justify-center p-10 w-full aspect-square md:aspect-[1.2/1] bg-[var(--color-atlas-bg)]/50 border border-[var(--color-atlas-border)]/50 rounded-2xl hover:border-[var(--color-atlas-copper)]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-[var(--color-atlas-copper)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <img
                src={partner.logoUrl}
                alt={partner.name}
                referrerPolicy="no-referrer"
                className="w-4/5 h-4/5 object-contain grayscale-0 opacity-100 md:grayscale md:opacity-60 md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"
              />
              
              {/* Tooltip-like name on hover */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] text-[var(--color-atlas-copper)] uppercase tracking-widest font-medium">
                  {partner.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

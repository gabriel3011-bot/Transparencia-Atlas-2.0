import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Quem Somos', href: '#about' },
    { name: 'Transparência', href: '#dashboard' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Parceiros', href: '#partners' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[var(--color-atlas-bg)]/90 backdrop-blur-xl border-b border-[var(--color-atlas-border)]/50 py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 z-50 relative">
            <a href="#" className="text-2xl font-serif font-bold text-[var(--color-atlas-copper)] tracking-[0.15em] hover:opacity-80 transition-opacity">
              ATLAS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-gray-400 hover:text-[var(--color-atlas-copper)] transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="https://linktr.ee/ibmec2026?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAQV2LZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaeFKI8o4TI-RugTHR-vSY4D6meYcDpZxDx7AeFuPnrDBewXm2_AGkRSqlRKLQ_aem_b6EDbDzV4-wY_DRV_zl5jA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-xs font-medium text-[var(--color-atlas-copper)] border border-[var(--color-atlas-copper)]/30 rounded-full hover:bg-[var(--color-atlas-copper)] hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              Linktree <ExternalLink size={12} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden z-50 relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/5 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[var(--color-atlas-bg)]/98 backdrop-blur-xl z-40 flex flex-col items-center md:hidden overflow-y-auto pt-20 pb-8"
          >
            <div className="flex flex-col items-center space-y-4 sm:space-y-6 p-6 w-full max-w-sm">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  className="text-lg sm:text-xl font-serif text-gray-300 hover:text-[var(--color-atlas-copper)] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4 w-full flex justify-center"
              >
                <a
                  href="https://linktr.ee/ibmec2026?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAQV2LZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaeFKI8o4TI-RugTHR-vSY4D6meYcDpZxDx7AeFuPnrDBewXm2_AGkRSqlRKLQ_aem_b6EDbDzV4-wY_DRV_zl5jA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 text-xs font-medium text-[var(--color-atlas-copper)] border border-[var(--color-atlas-copper)]/50 rounded-full hover:bg-[var(--color-atlas-copper)] hover:text-black transition-all w-full text-center flex items-center justify-center gap-2"
                >
                  Acessar Linktree <ExternalLink size={12} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

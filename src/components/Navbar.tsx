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

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Quem Somos', href: '#about' },
    { name: 'Transparência', href: '#dashboard' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[var(--color-atlas-bg)]/80 backdrop-blur-md border-b border-[var(--color-atlas-border)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[var(--color-atlas-copper)] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Left Links (Desktop) */}
          <div className="hidden md:flex space-x-8 w-1/3 justify-end pr-8">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[var(--color-atlas-copper)] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center w-1/3">
            <a href="#" className="text-2xl font-serif font-bold text-[var(--color-atlas-copper)] tracking-[0.2em]">
              ATLAS
            </a>
          </div>

          {/* Right Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 w-1/3 justify-start pl-8">
            {navLinks.slice(2, 4).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[var(--color-atlas-copper)] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="https://linktr.ee/ibmec2026?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAQV2LZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaeFKI8o4TI-RugTHR-vSY4D6meYcDpZxDx7AeFuPnrDBewXm2_AGkRSqlRKLQ_aem_b6EDbDzV4-wY_DRV_zl5jA"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 text-xs font-medium text-[var(--color-atlas-copper)] border border-[var(--color-atlas-copper)]/50 rounded-full hover:bg-[var(--color-atlas-copper)]/10 transition-all backdrop-blur-sm flex items-center gap-2"
            >
              Linktree <ExternalLink size={12} />
            </a>
          </div>

          {/* Mobile Linktree Button */}
          <div className="flex md:hidden">
             <a
              href="https://linktr.ee/ibmec2026?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAQV2LZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaeFKI8o4TI-RugTHR-vSY4D6meYcDpZxDx7AeFuPnrDBewXm2_AGkRSqlRKLQ_aem_b6EDbDzV4-wY_DRV_zl5jA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-atlas-copper)]"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--color-atlas-card)] border-b border-[var(--color-atlas-border)] overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-[var(--color-atlas-copper)] hover:bg-[var(--color-atlas-bg)] rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { Instagram, Mail, Globe } from 'lucide-react';
import { atlasData } from '../data/atlasData';

export function Footer() {
  return (
    <footer className="bg-[var(--color-atlas-bg)] border-t border-[var(--color-atlas-border)]/30 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-xl font-serif font-bold text-[var(--color-atlas-copper)] tracking-[0.2em]">
              ATLAS
            </h2>
            <p className="text-xs text-gray-600 font-light tracking-wide">
              &copy; {new Date().getFullYear()} Comissão de Formatura Ibmec 26.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href={atlasData.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 text-gray-500 hover:text-[var(--color-atlas-copper)] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href={atlasData.social.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-500 hover:text-[var(--color-atlas-copper)] transition-colors"
              aria-label="Linktree"
            >
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

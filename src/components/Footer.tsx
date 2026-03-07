import { Instagram, Mail, Globe } from 'lucide-react';
import { atlasData } from '../data/atlasData';

export function Footer() {
  return (
    <footer className="bg-[var(--color-atlas-card)] border-t border-[var(--color-atlas-border)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold text-[var(--color-atlas-copper)] tracking-[0.2em] mb-2">
              ATLAS
            </h2>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Comissão de Formatura Ibmec 26. Todos os direitos reservados.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href={atlasData.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[var(--color-atlas-bg)] rounded-full text-gray-400 hover:text-[var(--color-atlas-copper)] hover:bg-[var(--color-atlas-copper)]/10 transition-all border border-[var(--color-atlas-border)] hover:border-[var(--color-atlas-copper)]"
            >
              <Instagram size={20} />
            </a>
            <a 
              href={atlasData.social.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[var(--color-atlas-bg)] rounded-full text-gray-400 hover:text-[var(--color-atlas-copper)] hover:bg-[var(--color-atlas-copper)]/10 transition-all border border-[var(--color-atlas-border)] hover:border-[var(--color-atlas-copper)]"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

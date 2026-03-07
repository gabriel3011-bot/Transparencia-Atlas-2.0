/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Dashboard } from './components/Dashboard';
import { PresidencyMessage } from './components/PresidencyMessage';
import { FAQ } from './components/FAQ';
import { Partners } from './components/Partners';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-atlas-bg)] text-white font-sans selection:bg-[var(--color-atlas-copper)] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Dashboard />
        <PresidencyMessage />
        <FAQ />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

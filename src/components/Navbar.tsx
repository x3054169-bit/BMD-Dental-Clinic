import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { getWhatsAppLink } from '@/src/constants';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Info Bar */}
      <div className="bg-teal-50 py-2 px-6 text-center border-b border-teal-100">
        <p className="text-xs font-bold text-primary uppercase tracking-widest">
          BMD Dental Clinic | Indore
        </p>
      </div>

      <nav
        className={cn(
          'transition-all duration-500 px-6 py-5',
          scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/20 py-4' : 'bg-white'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 lg:w-11 lg:h-11 bg-primary rounded-xl lg:rounded-2xl flex items-center justify-center text-white font-bold text-xl lg:text-2xl shadow-xl shadow-teal-500/30 group-hover:rotate-12 transition-transform duration-500">
              B
            </div>
            <span className="font-display font-bold text-lg lg:text-2xl tracking-tight text-slate-900">
              BMD <span className="text-primary">Dental</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-slate-500 hover:text-primary transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <a
                href="tel:+919752698279"
                className="text-slate-900 font-bold text-sm flex items-center gap-2 hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-primary">
                  <Phone size={14} />
                </div>
                Call Now
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-sm font-bold transition-all flex items-center gap-2 shadow-xl shadow-teal-500/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar size={18} />
                Book Appointment
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-slate-900 p-2 active:scale-90 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-50 p-6 flex flex-col gap-2 lg:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-900 py-3 border-b border-slate-50 last:border-0 active:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

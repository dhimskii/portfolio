import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Layanan', href: '#services' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Tentang', href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-morphism py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <span className="text-2xl font-display font-bold tracking-tighter text-slate-900">
              KREATIF<span className="text-blue-600">.</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-slate-200">
              <a href="#" className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><Github size={20} /></a>
              <a href="#" className="p-2 text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
              <button id="cta-button-nav" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                Hubungi Saya
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-morphism absolute top-full left-0 w-full p-4 shadow-xl"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-700 hover:text-blue-600 py-2 border-b border-slate-100 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 bg-slate-900 text-white font-medium rounded-xl">
              Hubungi Saya
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Sparkles } from 'lucide-react';
import metrics from '../data/metrics';
import log from '../ICONS/ICON.png';
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = metrics.navigation;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-slate-200/50 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-400 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="bg-gradient-to-br from-brand-500 to-brand-700 p-2.5 rounded-xl shadow-lg relative group-hover:scale-105 transition-transform duration-300">
          
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-xl leading-none tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
              {metrics.company.name}
            </span>
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isScrolled ? 'text-brand-600' : 'text-brand-400 md:text-brand-300'}`}>
              {metrics.company.suffix}
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full mr-4 ${isScrolled ? 'bg-slate-100/50' : 'bg-white/10 backdrop-blur-md border border-white/10'}`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-slate-600 hover:text-brand-700 hover:bg-white shadow-none hover:shadow-sm' 
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <a
            href="#contact"
            className={`group relative flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all overflow-hidden ${
                isScrolled 
                ? 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg' 
                : 'bg-white text-brand-900 hover:bg-brand-50'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Talk
              <Sparkles className="w-4 h-4" />
            </span>
            {/* Hover shine effect */}
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shine_1s_ease-in-out]"></div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg active:scale-95 transition-transform"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-900' : 'text-slate-900'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl flex flex-col animate-in slide-in-from-top-5 duration-300">
          <div className="p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-slate-600 font-medium rounded-xl hover:bg-brand-50 hover:text-brand-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center bg-brand-600 text-white py-3 rounded-xl font-semibold mt-4 shadow-lg shadow-brand-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
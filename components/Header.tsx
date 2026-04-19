
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: 'home' | 'merch' | 'sedes' | 'academia-online' | 'novedades') => void;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, isMenuOpen, onToggleMenu }) => {

  const handleNavClick = (href: string) => {
    if (isMenuOpen) onToggleMenu(); // Close menu if open
    if (href === '#merch') {
      onNavigate('merch');
    } else if (href === '#sedes') {
      onNavigate('sedes');
    } else if (href === '#academia-online') {
      onNavigate('academia-online');
    } else if (href === '#novedades') {
      onNavigate('novedades');
    } else {
      onNavigate('home');
      // Small timeout to allow view change before scrolling if needed
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#inicio') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navItems = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'NOSOTROS', href: '#nosotros' },
    { name: 'HISTORIA', href: '#historia' },
    { name: 'CLASES', href: '#clases' },
    { name: 'SEDES', href: '#sedes' },
    { name: 'ACADEMIA ONLINE', href: '#academia-online' },
    { name: 'NOVEDADES', href: '#novedades' },
    { name: 'TIENDA', href: '#merch', highlight: true },
  ];

  return (
    <header className="fixed w-full z-50 bg-void/90 backdrop-blur-xl border-b border-gold/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 flex items-center group cursor-pointer" 
            onClick={() => handleNavClick('#inicio')}
          >
            <img 
               src="https://i.imgur.com/cbCrHDB.png" 
               className="w-12 h-12 md:w-16 md:h-16 mr-3 md:mr-4 logo-glow opacity-90 group-hover:opacity-100 transition-opacity"
               alt="Logo Nav"
             />
            <div className="flex flex-col">
              <span className="font-display font-bold text-stone-200 tracking-[0.1em] md:tracking-[0.2em] text-[0.7rem] sm:text-sm md:text-base group-hover:text-gold transition-colors uppercase whitespace-nowrap text-glow-white">ESGRIMA CRIOLLA</span>
              <span className="font-display text-[0.45rem] md:text-[0.5rem] text-gold tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-80 font-bold whitespace-nowrap text-glow-gold">Arte Marcial Argentino</span>
            </div>
          </motion.div>
          
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item, idx) => (
              <motion.button 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className={`font-display text-[0.55rem] xl:text-[0.6rem] tracking-[0.15em] xl:tracking-[0.2em] transition-all duration-300 font-bold uppercase whitespace-nowrap ${
                  item.highlight ? 'text-gold border-b-2 border-gold' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={onToggleMenu}
              className="text-stone-300 hover:text-gold p-2 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-void/98 border-b border-gold/10 backdrop-blur-md absolute w-full top-20 left-0 overflow-hidden"
          >
            <div className="px-6 pt-10 pb-12 space-y-6 flex flex-col items-center">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
                  className={`block font-display text-sm tracking-[0.4em] py-4 border-b border-gold/5 font-bold uppercase transition-colors w-full text-center hover:bg-gold/5 ${
                      item.highlight ? 'text-gold' : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

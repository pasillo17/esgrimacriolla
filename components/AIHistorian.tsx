
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HelpWidgetProps {
  onNavigate?: (view: 'home' | 'merch' | 'sedes' | 'academia-online' | 'novedades', hash?: string) => void;
}

const AIHistorian: React.FC<HelpWidgetProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleAction = (target: 'sedes' | 'academia-online' | 'merch') => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(target);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[#F5DEB3] border border-divider w-72 md:w-80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden mb-4 rounded-sm"
          >
            <div className="p-4 border-b border-stone-900/10 bg-[#E8DCC5] flex justify-between items-center relative">
              <div className="flex items-center gap-3">
                <span className="material-icons-outlined text-stone-900 text-lg">support_agent</span>
                <div className="flex flex-col">
                  <span className="font-display text-[0.7rem] tracking-[0.3em] text-stone-900 font-bold">ASISTENCIA</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-stone-600 hover:text-stone-900 transition-colors">
                <span className="material-icons-outlined text-base">close</span>
              </button>
            </div>
            
            <div className="p-6 space-y-6 relative border-t border-stone-100/50">
              <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>
              
              <div className="relative z-10 text-center mb-6">
                <p className="text-[0.8rem] text-stone-800 leading-relaxed font-serif font-medium mb-2">
                  Buenas y santas. 
                </p>
                <p className="text-[0.75rem] text-stone-700 leading-relaxed font-medium italic">
                  ¿En qué podemos ayudarlo hoy? Elija una opción:
                </p>
              </div>

              <div className="flex flex-col gap-3 relative z-10">
                <button 
                  onClick={() => handleAction('sedes')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white/60 hover:bg-white border border-stone-900/10 hover:border-stone-900/30 text-stone-900 transition-all font-display text-[0.65rem] uppercase tracking-[0.2em] shadow-sm rounded-sm"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-icons-outlined text-base">location_on</span>
                    Clases Presenciales
                  </span>
                  <span className="material-icons-outlined text-sm">arrow_forward</span>
                </button>

                <button 
                  onClick={() => handleAction('academia-online')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white/60 hover:bg-white border border-stone-900/10 hover:border-stone-900/30 text-stone-900 transition-all font-display text-[0.65rem] uppercase tracking-[0.2em] shadow-sm rounded-sm"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-icons-outlined text-base">computer</span>
                    Academia Online
                  </span>
                  <span className="material-icons-outlined text-sm">arrow_forward</span>
                </button>

                <button 
                  onClick={() => handleAction('merch')}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white/60 hover:bg-white border border-stone-900/10 hover:border-stone-900/30 text-stone-900 transition-all font-display text-[0.65rem] uppercase tracking-[0.2em] shadow-sm rounded-sm"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-icons-outlined text-base">storefront</span>
                    Nuestra Tienda
                  </span>
                  <span className="material-icons-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        ref={buttonRef}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-[#E8DCC5] border-2 border-stone-900/10 flex items-center justify-center text-stone-900 shadow-lg hover:border-stone-900/30 hover:shadow-xl transition-all group relative overflow-hidden shine-effect"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span className="material-icons-outlined group-hover:rotate-12 transition-transform relative z-10 text-2xl">help_outline</span>
      </motion.button>
    </div>
  );
};

export default AIHistorian;

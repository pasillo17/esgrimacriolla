
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-[100dvh] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      <motion.div 
        style={{ y: y1, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <img 
          alt="Antique Paper" 
          className="w-full h-full object-cover opacity-[0.08] mix-blend-overlay grayscale contrast-150" 
          src="https://images.unsplash.com/photo-1599408162172-ef06132d436a?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void"></div>
      </motion.div>
      
      {/* --- UNIFIED LAYOUT (Responsive) --- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center h-full justify-center">
        {/* LOGO */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            filter: ["drop-shadow(0 0 10px rgba(197, 160, 101, 0.2))", "drop-shadow(0 0 30px rgba(197, 160, 101, 0.5))", "drop-shadow(0 0 10px rgba(197, 160, 101, 0.2))"]
          }}
          transition={{ 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1],
            filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="mb-4 md:mb-6 mt-12 md:mt-0"
        >
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-auto md:h-[30vh] lg:h-[35vh] aspect-square flex items-center justify-center mx-auto">
            <img 
              src="https://i.imgur.com/cbCrHDB.png" 
              alt="Buenas y Santas Logo" 
              className="w-full h-full object-contain logo-glow"
            />
          </div>
        </motion.div>
        
        {/* TÍTULO */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-stone-100 font-bold tracking-[0.15em] sm:tracking-[0.2em] mb-6 md:mb-10 uppercase leading-tight w-full text-center drop-shadow-sm text-glow-white"
        >
          <span className="block sm:inline">BUENAS Y </span>
          <span className="block sm:inline">SANTAS</span>
        </motion.h1>
        
        {/* SUBTÍTULO */}
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 0.8, width: '100%' }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 md:gap-10 mb-8 md:mb-12 animate-reveal w-full px-4 mx-auto overflow-hidden"
        >
          <div className="h-px flex-1 max-w-[60px] md:max-w-[120px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
          <p className="font-display text-gold text-xs md:text-lg tracking-[0.3em] md:tracking-[0.6em] uppercase whitespace-nowrap font-semibold text-center text-glow-gold">
            ESGRIMA CRIOLLA
          </p>
          <div className="h-px flex-1 max-w-[60px] md:max-w-[120px] bg-gradient-to-r from-gold/50 via-gold/50 to-transparent"></div>
        </motion.div>

        {/* QUOTE */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-stone-400 max-w-xs md:max-w-xl mx-auto mb-8 md:mb-12 font-serif italic text-xs md:text-base leading-relaxed px-4 text-center font-medium"
        >
          "En el filo se encuentra la verdad, y en la guarda el destino de un hombre."
        </motion.p>

        {/* CTA BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const el = document.querySelector('#estructura');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 py-4 bg-gold text-void font-display text-xs md:text-sm tracking-[0.3em] uppercase font-bold rounded-sm shadow-2xl hover:shadow-gold/20 transition-all shine-effect mb-12"
        >
          Explorar la Academia
        </motion.button>
        
        {/* SCROLL INDICATOR */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="animate-bounce opacity-40 mt-2 absolute bottom-8"
        >
          <ChevronDown className="text-gold w-8 h-8 md:w-10 md:h-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

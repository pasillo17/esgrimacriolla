
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin, Dumbbell, Trees, Landmark, Globe } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import AIHistorian from './components/AIHistorian';
import RevealOnScroll from './components/RevealOnScroll';
import Merch from './components/Merch';
import Sedes from './components/Sedes';
import AcademiaOnline from './components/AcademiaOnline';
import Novedades from './components/Novedades';
import { FEATURES, INSTRUCTORS } from './constants';

const DustParticles: React.FC = () => {
  return (
    <div className="dust-container">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="dust-particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            background: `rgba(197, 160, 101, ${Math.random() * 0.2 + 0.15})`,
            '--duration': `${Math.random() * 15 + 10}s`,
            '--drift': `${Math.random() * 100 - 50}px`,
            animationDelay: `${Math.random() * 10}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 border border-gold/50 rounded-full pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? 'rgba(197, 160, 101, 0.1)' : 'transparent',
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
    />
  );
};

const App: React.FC = () => {
  const [isLoadingApp, setIsLoadingApp] = useState(true);
  const [currentView, setCurrentView] = useState<'home' | 'merch' | 'sedes' | 'academia-online' | 'novedades'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [currentInstructor, setCurrentInstructor] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  React.useEffect(() => {
    // Simulate loading for professional feel
    const loadTimer = setTimeout(() => setIsLoadingApp(false), 2000);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loadTimer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-void text-stone-300 selection:bg-gold selection:text-void paper-texture overflow-x-hidden">
      <AnimatePresence>
        {isLoadingApp && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="fixed inset-0 z-[1000] bg-void flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background Decorative Panels */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '-100%' }}
              exit={{ x: '-110%' }}
              transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
              className="absolute inset-y-0 left-0 w-1/2 bg-card-depth border-r border-gold/10 z-0"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: '100%' }}
              exit={{ x: '110%' }}
              transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
              className="absolute inset-y-0 right-0 w-1/2 bg-card-depth border-l border-gold/10 z-0"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                filter: ["drop-shadow(0 0 10px rgba(197, 160, 101, 0.2))", "drop-shadow(0 0 30px rgba(197, 160, 101, 0.5))", "drop-shadow(0 0 10px rgba(197, 160, 101, 0.2))"]
              }}
              transition={{ 
                scale: { duration: 1.5, ease: "easeOut" },
                opacity: { duration: 1 },
                filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative z-10"
            >
              <img 
                src="https://i.imgur.com/cbCrHDB.png" 
                alt="Logo Loading" 
                className="w-32 h-32 md:w-48 md:h-48"
              />
            </motion.div>

            <div className="relative z-10 mt-12 flex flex-col items-center">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 160 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent"
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-6 font-display text-[0.6rem] tracking-[0.6em] text-gold uppercase font-bold"
              >
                Arte Marcial Argentino
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />
      <DustParticles />
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[100] pointer-events-none">
        <motion.div 
          className="h-full bg-gold shadow-[0_0_10px_rgba(197,160,101,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 z-[60] w-12 h-12 rounded-full bg-gold text-void flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform shine-effect"
          >
            <ChevronLeft className="rotate-90" size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Vignette Overlay - Hidden on mobile as requested */}
      <div className="fixed inset-0 pointer-events-none z-50 vignette-overlay opacity-60 hidden md:block"></div>
      
      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-grain opacity-5 mix-blend-overlay"></div>
      
      <Header 
        onNavigate={(view) => {
          setCurrentView(view);
          setIsMenuOpen(false);
        }} 
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
      
      <div className={`transition-opacity duration-300 ${isMenuOpen ? 'opacity-10 pointer-events-none blur-sm' : 'opacity-100'}`}>
        {currentView === 'home' ? (
        <>
          <main className="relative z-20">
            <div id="inicio">
              <Hero />
            </div>

            {/* Core Pillars - Nuestra Estructura */}
            <section id="estructura" className="py-10 md:py-24 bg-void relative overflow-hidden border-b border-gold/5">
              <div className="absolute inset-0 bg-paper-texture opacity-5 pointer-events-none"></div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <RevealOnScroll direction="down">
                  <div className="flex flex-col items-center mb-16 md:mb-20 text-center mx-auto">
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-stone-100 tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 text-center w-full text-glow-white">Nuestra Estructura</h2>
                    <div className="flex items-center justify-center gap-4 w-full">
                      <div className="h-px bg-gold/30 w-8 md:w-12"></div>
                      <p className="text-[0.5rem] md:text-[0.6rem] text-gold tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold text-center text-glow-gold">Pilares Fundamentales</p>
                      <div className="h-px bg-gold/30 w-8 md:w-12"></div>
                    </div>
                  </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
                  {FEATURES.map((feature, idx) => (
                    <RevealOnScroll key={feature.id} delay={idx * 150} direction={idx % 2 === 0 ? 'left' : 'right'}>
                      <FeatureCard feature={feature} />
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </section>

            {/* Nosotros Section (formerly Los Maestros) - Scrolling Marquee */}
            <section id="nosotros" className="py-24 md:py-32 bg-card-depth relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] pointer-events-none"></div>
              <div className="relative z-10 w-full">
                <RevealOnScroll direction="down">
                  <div className="flex flex-col items-center mb-16 md:mb-24 text-center mx-auto px-4">
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-stone-100 tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 text-center w-full text-glow-white">Nosotros</h2>
                    <div className="flex items-center justify-center gap-4 w-full">
                      <div className="h-px bg-gold/30 w-8 md:w-12"></div>
                      <p className="text-[0.5rem] md:text-[0.6rem] text-gold tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold text-center text-glow-gold">Custodios de la Tradición</p>
                      <div className="h-px bg-gold/30 w-8 md:w-12"></div>
                    </div>
                  </div>
                </RevealOnScroll>
                
                {/* Desktop Marquee Container - Hidden on Mobile */}
                <div className="w-full overflow-hidden hidden md:block">
                  <div className="flex w-max animate-scroll hover:pause">
                    {[...INSTRUCTORS, ...INSTRUCTORS].map((instructor, idx) => (
                      <div key={`${instructor.id}-${idx}`} className="w-[300px] md:w-[350px] mx-6 md:mx-8 flex-shrink-0 group relative flex flex-col items-center">
                        {/* Instructor Image with Frame */}
                        <div className="relative w-full aspect-[4/5] mb-8 md:mb-10 p-3 bg-[#2A1C11] border border-[#4A3219] shadow-2xl rounded-sm">
                          {/* Inner decorative frame */}
                          <div className="absolute inset-2 border border-gold/20 z-20 pointer-events-none"></div>
                          
                          <div className="relative w-full h-full overflow-hidden bg-void">
                            <img 
                              alt={instructor.name} 
                              className={`absolute inset-0 w-full h-full object-cover ${instructor.objectPosition || 'object-top'} filter sepia-[0.2] contrast-110 opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105`}
                              src={instructor.image}
                            />
                            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] z-10 pointer-events-none"></div>
                          </div>
                        </div>
                        
                        <div className="text-center max-w-xs flex flex-col items-center mx-auto">
                          <h3 className="font-display text-lg md:text-xl text-stone-200 uppercase tracking-[0.2em] mb-2 group-hover:text-gold transition-colors text-center w-full">{instructor.name}</h3>
                          <p className="font-display text-gold text-[0.6rem] md:text-[0.65rem] tracking-[0.3em] uppercase mb-6 opacity-60 font-bold text-center w-full">{instructor.role}</p>
                          <p className="text-stone-400 text-sm leading-relaxed italic border-t border-gold/10 pt-6 mt-2 font-serif text-center w-full">
                            {instructor.quote}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Slider Container - Visible only on Mobile */}
                <div className="md:hidden px-4 relative">
                  <div className="relative h-[520px] flex items-center justify-center">
                    {/* Navigation Buttons - Side Positioned */}
                    <button 
                      onClick={() => setCurrentInstructor((prev) => (prev - 1 + INSTRUCTORS.length) % INSTRUCTORS.length)}
                      className="absolute left-0 top-[40%] -translate-y-1/2 z-50 w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold bg-void/80 backdrop-blur-sm shadow-xl active:scale-95 transition-transform"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    
                    <button 
                      onClick={() => setCurrentInstructor((prev) => (prev + 1) % INSTRUCTORS.length)}
                      className="absolute right-0 top-[40%] -translate-y-1/2 z-50 w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold bg-void/80 backdrop-blur-sm shadow-xl active:scale-95 transition-transform"
                    >
                      <ChevronRight size={24} />
                    </button>

                    <div className="relative w-full max-w-[260px] h-full flex items-center justify-center">
                      <AnimatePresence initial={false}>
                        {[...Array(3)].map((_, i) => {
                          const index = (currentInstructor + i) % INSTRUCTORS.length;
                          const instructor = INSTRUCTORS[index];
                          
                          return (
                            <motion.div
                              key={instructor.id}
                              style={{
                                zIndex: 30 - i,
                              }}
                              initial={{ opacity: 0, scale: 0.8, y: 20 }}
                              animate={{ 
                                opacity: 1 - i * 0.2, 
                                scale: 1 - i * 0.05, 
                                y: i * 15,
                                rotate: i * 2
                              }}
                              exit={{ 
                                opacity: 0, 
                                x: -200, 
                                rotate: -20,
                                transition: { duration: 0.4 } 
                              }}
                              className="absolute inset-0 flex flex-col items-center"
                            >
                              {/* Instructor Image with Frame */}
                              <div className="relative w-full aspect-[4/5] mb-6 p-3 bg-[#2A1C11] border border-[#4A3219] shadow-2xl rounded-sm">
                                <div className="absolute inset-2 border border-gold/20 z-20 pointer-events-none"></div>
                                <div className="relative w-full h-full overflow-hidden bg-void">
                                  <img 
                                    alt={instructor.name} 
                                    className={`absolute inset-0 w-full h-full object-cover ${instructor.objectPosition || 'object-top'} filter sepia-[0.2] contrast-110 opacity-90`}
                                    src={instructor.image}
                                  />
                                  <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] z-10 pointer-events-none"></div>
                                </div>
                              </div>
                              
                              {i === 0 && (
                                <motion.div 
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="text-center max-w-xs flex flex-col items-center mx-auto"
                                >
                                  <h3 className="font-display text-xl text-stone-200 uppercase tracking-[0.2em] mb-1 text-center w-full">{instructor.name}</h3>
                                  <p className="font-display text-gold text-[0.6rem] tracking-[0.3em] uppercase mb-2 opacity-60 font-bold text-center w-full">{instructor.role}</p>
                                </motion.div>
                              )}
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Pagination Dots */}
                  <div className="flex justify-center gap-2 mt-4">
                    {INSTRUCTORS.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentInstructor ? 'bg-gold w-4' : 'bg-gold/20'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Historia Section */}
            <section id="historia" className="py-24 md:py-40 bg-void relative border-t border-gold/5 overflow-hidden">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealOnScroll direction="up">
                  <div className="text-center mb-20 md:mb-32 flex flex-col items-center">
                    <span className="material-icons-outlined text-gold/20 text-5xl md:text-6xl mb-6 md:mb-8 text-glow-gold">history_edu</span>
                    <h2 className="font-display text-3xl md:text-5xl text-stone-100 tracking-[0.3em] md:tracking-[0.4em] uppercase mb-8 md:mb-10 text-center text-glow-white">Nuestra Historia</h2>
                    <div className="w-16 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto"></div>
                  </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                  <RevealOnScroll delay={100} direction="left">
                    <div className="space-y-8 md:space-y-10 font-serif text-stone-400 text-base md:text-lg leading-relaxed text-center md:text-left mx-auto">
                      <p>
                        El inicio real de la esgrima criolla se remonta a los duelos de honor en las pulperías y los campos de batalla de nuestra independencia. Una técnica forjada en la necesidad y templada en el coraje.
                      </p>
                      <p>
                        Hoy, en nuestra academia, mantenemos viva esa llama. No solo enseñamos a combatir, sino a comprender la filosofía de vida de quienes nos precedieron, adaptando su legado a los tiempos modernos sin perder su esencia.
                      </p>
                    </div>
                  </RevealOnScroll>
                  <RevealOnScroll delay={300} direction="right">
                    <div className="relative group p-1 bg-gold/5 border border-gold/10 shadow-2xl mx-auto w-full max-w-md md:max-w-none">
                      <div className="relative h-72 md:h-96 overflow-hidden">
                         <img 
                          alt="Manuscrito antiguo" 
                          className="w-full h-full object-cover filter sepia contrast-125 opacity-60 group-hover:scale-105 transition-transform duration-[4s]" 
                          src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop"
                        />
                        <div className="absolute inset-0 bg-void/40"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center border border-gold/10 m-4 bg-void/40 backdrop-blur-sm">
                          <p className="font-display text-[0.5rem] md:text-[0.6rem] tracking-[0.5em] md:tracking-[0.6em] text-gold uppercase mb-4 md:mb-6">Registro de Honor</p>
                          <h4 className="text-stone-200 text-xl md:text-2xl font-display tracking-[0.2em] mb-4">EL DUELO CRIOLLO</h4>
                          <p className="text-stone-400 text-[0.65rem] md:text-xs italic leading-loose">"El que sabe de quites, sabe de perdones. El que sabe de ataques, sabe de razones."</p>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>
              </div>
              <div className="guardapampa-divider mt-24 md:mt-40 opacity-40 animate-guardapampa"></div>
            </section>

            {/* Classes Section - INNOVATIVE BENTO DESIGN */}
            <section id="clases" className="py-24 md:py-40 bg-void relative border-t border-gold/5 overflow-hidden">
              <div className="absolute inset-0 bg-paper-texture opacity-5 pointer-events-none"></div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <RevealOnScroll direction="down">
                  <div className="flex flex-col items-center mb-24 md:mb-40 text-center mx-auto relative">
                    {/* New Title Design: Gaucho Monumental */}
                    <div className="w-full max-w-4xl flex flex-col items-center">
                      <div className="guardapampa-divider w-full h-8 opacity-40 mb-12 animate-guardapampa"></div>
                      
                      <h2 className="font-display text-6xl sm:text-7xl md:text-9xl text-stone-100 tracking-[0.1em] uppercase text-glow-white relative z-10">CLASES</h2>
                      
                      <div className="guardapampa-divider w-full h-8 opacity-40 mt-12 animate-guardapampa"></div>
                    </div>
                    
                    <div className="mt-12 flex items-center justify-center gap-6 relative z-10">
                      <div className="h-[1px] bg-gold/30 w-12 md:w-20"></div>
                      <p className="text-[0.7rem] md:text-sm text-gold tracking-[0.6em] uppercase font-bold text-glow-gold">Programa de Estudio</p>
                      <div className="h-[1px] bg-gold/30 w-12 md:w-20"></div>
                    </div>
                  </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 h-auto md:h-[900px]">
                  {/* Class 1: Large Feature */}
                  <div className="md:col-span-8 md:row-span-2">
                    <RevealOnScroll direction="left" className="h-full">
                      <div className="group relative h-full min-h-[400px] overflow-hidden border border-gold/10 rounded-sm bg-card-depth flex flex-col justify-end p-10 hover:border-gold/30 transition-all duration-700">
                        <div className="absolute inset-0 z-0">
                          <img 
                            src="https://i.imgur.com/s65N47d.jpeg" 
                            alt="Esgrima de Duelo" 
                            className="w-full h-full object-cover filter sepia-[0.2] contrast-125 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent"></div>
                        </div>
                        <div className="relative z-10 max-w-lg">
                          <span className="material-icons-outlined text-gold text-4xl mb-8 block">gps_fixed</span>
                          <h3 className="font-display text-stone-100 text-3xl md:text-4xl uppercase tracking-[0.1em] mb-6">Esgrima de Duelo</h3>
                          <p className="text-stone-400 text-lg font-serif italic leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">Técnica pura de combate singular. Geometría y distancia en el arte del acero.</p>
                        </div>
                        <div className="absolute top-10 right-10 text-gold/20 font-display text-8xl select-none">01</div>
                      </div>
                    </RevealOnScroll>
                  </div>

                  {/* Class 2: Tall Side */}
                  <div className="md:col-span-4 md:row-span-3">
                    <RevealOnScroll direction="right" className="h-full">
                      <div className="group relative h-full min-h-[400px] overflow-hidden border border-gold/10 rounded-sm bg-card-depth flex flex-col justify-end p-10 hover:border-gold/30 transition-all duration-700">
                        <div className="absolute inset-0 z-0">
                          <img 
                            src="https://i.imgur.com/tQQRD6x.jpeg" 
                            alt="El Uso del Poncho" 
                            className="w-full h-full object-cover filter sepia-[0.2] contrast-125 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent"></div>
                        </div>
                        <div className="relative z-10">
                          <span className="material-icons-outlined text-gold text-4xl mb-8 block">waves</span>
                          <h3 className="font-display text-stone-100 text-2xl md:text-3xl uppercase tracking-[0.1em] mb-6">El Uso del Poncho</h3>
                          <p className="text-stone-400 text-base font-serif italic leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">Engaño, defensa y control de la visión enemiga. El escudo del gaucho.</p>
                        </div>
                        <div className="absolute top-10 right-10 text-gold/20 font-display text-8xl select-none">02</div>
                      </div>
                    </RevealOnScroll>
                  </div>

                  {/* Class 3: Bottom Left */}
                  <div className="md:col-span-4 md:row-span-2">
                    <RevealOnScroll direction="up" className="h-full">
                      <div className="group relative h-full min-h-[300px] overflow-hidden border border-gold/10 rounded-sm bg-card-depth flex flex-col justify-end p-10 hover:border-gold/30 transition-all duration-700">
                        <div className="absolute inset-0 z-0">
                          <img 
                            src="https://i.imgur.com/d8AbAg9.jpeg" 
                            alt="Táctica Criolla" 
                            className="w-full h-full object-cover filter sepia-[0.2] contrast-125 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent"></div>
                        </div>
                        <div className="relative z-10">
                          <span className="material-icons-outlined text-gold text-4xl mb-8 block">shield</span>
                          <h3 className="font-display text-stone-100 text-2xl uppercase tracking-[0.1em] mb-4">Táctica Criolla</h3>
                          <p className="text-stone-400 text-sm font-serif italic leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">Sistemas de defensa personal en situaciones reales.</p>
                        </div>
                        <div className="absolute top-10 right-10 text-gold/20 font-display text-7xl select-none">03</div>
                      </div>
                    </RevealOnScroll>
                  </div>

                  {/* Class 4: Bottom Center */}
                  <div className="md:col-span-4 md:row-span-2">
                    <RevealOnScroll direction="up" className="h-full">
                      <div className="group relative h-full min-h-[300px] overflow-hidden border border-gold/10 rounded-sm bg-card-depth flex flex-col justify-end p-10 hover:border-gold/30 transition-all duration-700">
                        <div className="absolute inset-0 z-0">
                          <img 
                            src="https://i.imgur.com/0xAYDbQ.jpeg" 
                            alt="Cultura e Historia" 
                            className="w-full h-full object-cover filter sepia-[0.2] contrast-125 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent"></div>
                        </div>
                        <div className="relative z-10">
                          <span className="material-icons-outlined text-gold text-4xl mb-8 block">auto_stories</span>
                          <h3 className="font-display text-stone-100 text-2xl uppercase tracking-[0.1em] mb-4">Cultura e Historia</h3>
                          <p className="text-stone-400 text-sm font-serif italic leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">Tradición, historia y cultura del arte marcial argentino.</p>
                        </div>
                        <div className="absolute top-10 right-10 text-gold/20 font-display text-7xl select-none">04</div>
                      </div>
                    </RevealOnScroll>
                  </div>
                </div>

                <RevealOnScroll delay={600} direction="up">
                  <div className="mt-24 md:mt-40 flex flex-col items-center">
                    <div className="relative group">
                      {/* Decorative outer frame for the button */}
                      <div className="absolute -inset-4 border border-gold/20 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      <button 
                        onClick={() => setIsAdmissionModalOpen(true)}
                        className="relative px-20 py-8 bg-[#F5F5DC] text-void font-display font-black text-sm md:text-base uppercase tracking-[0.6em] hover:scale-105 transition-all shadow-[0_0_60px_rgba(245,245,220,0.2)] overflow-hidden group border-b-4 border-gold/40"
                      >
                        {/* Guardapampa detail on button - Top and Bottom */}
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-void/5 overflow-hidden">
                          <div className="guardapampa-divider h-full opacity-30 scale-y-50"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-void/5 overflow-hidden">
                          <div className="guardapampa-divider h-full opacity-30 scale-y-50"></div>
                        </div>
                        
                        {/* Subtle Guardapampa Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.04] pointer-events-none guardapampa-divider scale-125 -rotate-6"></div>
                        
                        <span className="relative z-10 flex items-center gap-6">
                          <div className="w-8 h-px bg-void/20 group-hover:w-12 transition-all duration-500"></div>
                          QUIERO APRENDER
                          <div className="w-8 h-px bg-void/20 group-hover:w-12 transition-all duration-500"></div>
                        </span>
                        
                        {/* Hover shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </button>
                    </div>
                    <p className="mt-12 text-[0.6rem] md:text-[0.7rem] text-stone-600 tracking-[0.5em] uppercase italic font-bold">Admisión bajo estricto código de conducta.</p>
                  </div>
                </RevealOnScroll>
              </div>
            </section>

            {/* Blog/Novedades/Tienda Section */}
            <section id="novedades" className="py-24 md:py-32 bg-void border-t border-gold/5 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  {/* Academia Online Card */}
                  <RevealOnScroll delay={0} direction="left">
                    <div 
                      onClick={() => setCurrentView('academia-online')}
                      className="bg-card-depth p-10 md:p-12 shadow-2xl relative overflow-hidden group border border-gold/5 rounded-sm mx-auto w-full max-w-lg md:max-w-none cursor-pointer hover:border-gold/30 transition-all h-full flex flex-col"
                    >
                       <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-icons-outlined text-7xl md:text-8xl text-gold">menu_book</span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl text-stone-200 mb-6 tracking-[0.3em] md:tracking-[0.4em] uppercase text-center md:text-left group-hover:text-gold transition-colors">Academia Online</h3>
                      <p className="text-stone-500 mb-10 font-serif text-sm md:text-base leading-relaxed max-w-sm italic mx-auto md:mx-0 text-center md:text-left flex-grow">
                        Acceso a los tratados digitalizados y lecciones en video para el mundo.
                      </p>
                      <div className="flex justify-center md:justify-start">
                        <span className="inline-flex items-center text-gold font-display uppercase tracking-[0.4em] text-[0.6rem] md:text-[0.65rem] group-hover:text-white transition-all group-hover:gap-6 gap-3 font-bold">
                            ENTRAR <span className="material-icons-outlined text-xs">east</span>
                        </span>
                      </div>
                    </div>
                  </RevealOnScroll>

                  {/* Novedades Card */}
                  <RevealOnScroll delay={150} direction="up">
                    <div 
                      onClick={() => setCurrentView('novedades')}
                      className="bg-card-depth p-10 md:p-12 shadow-2xl relative overflow-hidden group border border-gold/5 rounded-sm mx-auto w-full max-w-lg md:max-w-none cursor-pointer hover:border-gold/30 transition-all h-full flex flex-col"
                    >
                       <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-icons-outlined text-7xl md:text-8xl text-gold">newspaper</span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl text-stone-200 mb-6 tracking-[0.3em] md:tracking-[0.4em] uppercase text-center md:text-left group-hover:text-gold transition-colors">Novedades</h3>
                      <p className="text-stone-500 mb-10 font-serif text-sm md:text-base leading-relaxed max-w-sm italic mx-auto md:mx-0 text-center md:text-left flex-grow">
                        Próximas exhibiciones, encuentros y crónicas de investigación.
                      </p>
                      <div className="flex justify-center md:justify-start">
                        <span className="inline-flex items-center text-gold font-display uppercase tracking-[0.4em] text-[0.6rem] md:text-[0.65rem] group-hover:text-white transition-all group-hover:gap-6 gap-3 font-bold">
                            ENTRAR <span className="material-icons-outlined text-xs">east</span>
                        </span>
                      </div>
                    </div>
                  </RevealOnScroll>

                  {/* Tienda Card */}
                  <RevealOnScroll delay={300} direction="right">
                    <div 
                      onClick={() => setCurrentView('merch')}
                      className="bg-card-depth p-10 md:p-12 shadow-2xl relative overflow-hidden group border border-gold/5 rounded-sm mx-auto w-full max-w-lg md:max-w-none cursor-pointer hover:border-gold/30 transition-all h-full flex flex-col"
                    >
                       <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-icons-outlined text-7xl md:text-8xl text-gold">shopping_bag</span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl text-stone-200 mb-6 tracking-[0.3em] md:tracking-[0.4em] uppercase text-center md:text-left group-hover:text-gold transition-colors">El Arsenal</h3>
                      <p className="text-stone-500 mb-10 font-serif text-sm md:text-base leading-relaxed max-w-sm italic mx-auto md:mx-0 text-center md:text-left flex-grow">
                        Equipamiento oficial, libros y vestimenta de nuestra academia.
                      </p>
                      <div className="flex justify-center md:justify-start">
                        <span className="inline-flex items-center text-gold font-display uppercase tracking-[0.4em] text-[0.6rem] md:text-[0.65rem] group-hover:text-white transition-all group-hover:gap-6 gap-3 font-bold">
                            ENTRAR <span className="material-icons-outlined text-xs">east</span>
                        </span>
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>
              </div>
            </section>
          </main>

          <footer className="bg-card-depth text-stone-500 py-16 md:py-24 relative z-10 overflow-hidden">
            <div className="guardapampa-divider absolute top-0 left-0 w-full animate-guardapampa"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center w-full mt-12 md:mt-16">
              <RevealOnScroll className="w-full flex flex-col items-center">
                <div className="mb-12 md:mb-16 flex justify-center w-full">
                   <img 
                     src="https://i.imgur.com/cbCrHDB.png" 
                     className="w-24 h-24 md:w-32 md:h-32 opacity-60 grayscale mx-auto"
                     alt="Footer Logo"
                   />
                </div>
                <h2 className="font-display text-xl md:text-2xl text-stone-300 tracking-[0.4em] md:tracking-[0.5em] uppercase mb-6 text-center w-full">Esgrima Criolla</h2>
                <p className="font-serif text-xs md:text-sm italic text-stone-600 mb-16 md:mb-20 tracking-[0.2em] md:tracking-[0.3em] uppercase text-center font-bold w-full">Buenas y Santas • Arte Marcial Argentino</p>
                
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16 md:mb-20 w-full">
                  {[
                    { name: 'INSTAGRAM', url: 'https://www.instagram.com/esgrima_criolla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
                    { name: 'YOUTUBE', url: 'https://www.youtube.com/c/esgrimacriolla' },
                    { name: 'TIKTOK', url: 'https://www.tiktok.com/@esgrimacriolla?is_from_webapp=1&sender_device=pc' },
                    { name: 'FACEBOOK', url: 'https://www.facebook.com/esgrimacriolla' },
                    { name: 'BIBLIOTECA', url: 'https://esgrimacriolla.blogspot.com/?zx=47e698f86cb74a4e' }
                  ].map((social) => (
                    <a 
                      key={social.name} 
                      className="hover:text-gold transition-colors text-xs md:text-sm font-display tracking-[0.3em] md:tracking-[0.4em] cursor-pointer opacity-60 hover:opacity-100 font-bold text-stone-400" 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
                
                <div className="text-xs md:text-sm text-stone-700 font-display tracking-[0.2em] md:tracking-[0.3em] text-center uppercase space-y-4 font-bold">
                  <p className="mb-4 text-gold/40 text-glow-gold">"LA TECNOLOGIA DEL ARTE AL SERVICIO DEL ARTE DEL AYER"</p>
                  <p>© 2026 Esgrima Criolla.</p>
                  <p className="opacity-40 italic">"Fundada sobre principios gauchos"</p>
                </div>
              </RevealOnScroll>
            </div>
            <div className="guardapampa-divider absolute bottom-0 left-0 w-full opacity-20 animate-guardapampa"></div>
          </footer>
        </>
      ) : currentView === 'merch' ? (
        <Merch onBack={() => setCurrentView('home')} />
      ) : currentView === 'sedes' ? (
        <Sedes onBack={() => setCurrentView('home')} />
      ) : currentView === 'academia-online' ? (
        <AcademiaOnline onBack={() => setCurrentView('home')} />
      ) : (
        <Novedades onBack={() => setCurrentView('home')} />
      )}

      {/* Admission Modal - NEW ELEGANT INTERFACE */}
      {isAdmissionModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-void/95 backdrop-blur-xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full h-full md:h-auto md:max-w-6xl md:aspect-[16/10] bg-card-depth border-y md:border border-gold/20 relative flex flex-col md:flex-row overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
          >
            {/* Close Button - Prominent */}
            <button 
              onClick={() => setIsAdmissionModalOpen(false)}
              className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-void border border-gold/20 text-gold hover:bg-gold hover:text-void transition-all duration-300 group"
            >
              <span className="material-icons-outlined group-hover:rotate-90 transition-transform">close</span>
            </button>

            {/* Left Side: Visual & Context */}
            <div className="hidden md:flex md:w-2/5 relative bg-void border-r border-gold/10 overflow-hidden p-12 flex-col justify-between">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale"
                  alt="Background"
                />
              </div>
              <div className="relative z-10">
                <img src="https://i.imgur.com/cbCrHDB.png" className="w-16 h-16 mb-8 opacity-80" alt="Logo" />
                <h3 className="font-display text-4xl text-stone-100 tracking-widest uppercase mb-6">Nuestras Sedes</h3>
                <div className="w-12 h-1 bg-gold mb-8"></div>
                <p className="text-stone-400 font-serif italic text-lg leading-relaxed">
                  "Donde el acero encuentra su camino y la tradición su morada."
                </p>
              </div>
              <div className="relative z-10">
                <div className="guardapampa-divider h-4 opacity-20 mb-4"></div>
                <p className="text-[0.6rem] text-stone-600 tracking-[0.4em] uppercase font-bold">Esgrima Criolla • Buenas y Santas</p>
              </div>
            </div>

            {/* Right Side: Selection List */}
            <div className="flex-1 flex flex-col p-8 md:p-16 overflow-y-auto custom-scrollbar bg-paper-texture bg-opacity-5">
              <div className="md:hidden text-center mb-12">
                <h3 className="font-display text-2xl text-stone-100 tracking-widest uppercase mb-4">Nuestras Sedes</h3>
                <div className="w-12 h-0.5 bg-gold mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: 'SEDE CABA (CENTRAL)', location: 'Mitre 1851, CABA', schedule: 'Sábados 10:00 - 12:00', icon: MapPin },
                  { name: 'SEDE LANÚS', location: 'Gym ESN, Enrique Fernandez 2066', schedule: 'Mar y Jue 8:30hs • Lun y Vie 19:00hs', icon: Dumbbell },
                  { name: 'SEDE BELGRANO', location: 'Plaza Juan Jose Paso, Moldes 1300', schedule: 'Jueves 19:00 - 21:00', icon: Trees },
                  { name: 'SEDE CABALLITO', location: 'Parque Rivadavia, CABA', schedule: 'Miércoles 19:00 - 20:00', icon: MapPin },
                  { name: 'SEDE LA PLATA', location: 'Casa Pulsar / Plaza Malvinas', schedule: 'Lun 20:30hs • Mar 15:00hs', icon: Landmark },
                  { name: 'VIRTUAL', location: 'Online (Zoom/Meet)', schedule: 'A coordinar', icon: Globe }
                ].map((sede) => (
                  <button
                    key={sede.name}
                    onClick={() => {
                      const message = `Buenas y santas quiero entrenar en ${sede.name}`;
                      const whatsappUrl = `https://api.whatsapp.com/send?phone=5492216246179&text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                      setIsAdmissionModalOpen(false);
                    }}
                    className="group relative flex items-center gap-6 p-6 border border-gold/5 bg-void/30 hover:bg-gold/5 transition-all duration-500 text-left"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-gold/5 border border-gold/10 group-hover:bg-gold group-hover:text-void transition-all duration-500">
                      <sede.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-stone-200 font-display text-sm uppercase tracking-[0.2em] mb-1 group-hover:text-gold transition-colors">{sede.name}</h4>
                      <p className="text-stone-500 text-[0.65rem] uppercase tracking-widest font-bold">{sede.location}</p>
                    </div>
                    <span className="material-icons-outlined text-gold opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">arrow_forward</span>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-700"></div>
                  </button>
                ))}
              </div>

              <div className="mt-12 text-center md:text-left">
                <button 
                  onClick={() => setIsAdmissionModalOpen(false)}
                  className="text-stone-600 hover:text-gold transition-colors font-display text-[0.6rem] tracking-[0.4em] uppercase flex items-center gap-2 justify-center md:justify-start"
                >
                  <span className="material-icons-outlined text-sm">west</span>
                  Volver al sitio
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <AIHistorian />
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import RevealOnScroll from './RevealOnScroll';

interface NovedadesProps {
  onBack: () => void;
}

const NEWS = [
  {
    id: 1,
    title: 'Exhibición en la Rural',
    date: '15 MAYO 2026',
    category: 'RECREACIÓN',
    image: 'https://images.unsplash.com/photo-1549416800-47b29e001f3f?q=80&w=1974&auto=format&fit=crop',
    description: 'Gran demostración de destreza criolla en el predio ferial de Palermo. Nuestros instructores recrearán duelos históricos del siglo XIX.'
  },
  {
    id: 2,
    title: 'Seminario de Facón',
    date: '02 JUNIO 2026',
    category: 'CLASE ABIERTA',
    image: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop',
    description: 'Jornada intensiva de técnica y práctica en nuestra sede central. Abierto a todo público con inscripción previa.'
  },
  {
    id: 3,
    title: 'Lanzamiento Libro',
    date: '20 JUNIO 2026',
    category: 'PUBLICACIÓN',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop',
    description: 'Presentación de "El Legado del Acero", la nueva obra de investigación sobre las raíces de nuestra esgrima.'
  },
  {
    id: 4,
    title: 'Encuentro Nacional',
    date: '09 JULIO 2026',
    category: 'EVENTO',
    image: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069&auto=format&fit=crop',
    description: 'Reunión de todas las sedes en Córdoba para celebrar el Día de la Independencia con torneos y camaradería.'
  }
];

const Novedades: React.FC<NovedadesProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-void text-stone-300 selection:bg-gold selection:text-void paper-texture pt-24 pb-12 overflow-x-hidden">
      {/* Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 vignette-overlay opacity-60"></div>
      
      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-grain opacity-5 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <RevealOnScroll>
          <div className="flex flex-col items-center mb-16 md:mb-24 text-center mx-auto">
            <button 
              onClick={onBack} 
              className="mb-8 group flex items-center gap-2 text-stone-500 hover:text-gold transition-colors"
            >
              <span className="material-icons-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
              <span className="text-xs font-display font-bold uppercase tracking-[0.2em]">Volver al Inicio</span>
            </button>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-stone-100 tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 text-center w-full">Novedades</h2>
            <div className="flex items-center justify-center gap-4 w-full">
              <div className="h-px bg-gold/30 w-8 md:w-12"></div>
              <p className="text-[0.5rem] md:text-[0.6rem] text-gold tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold text-center">Crónicas y Anuncios</p>
              <div className="h-px bg-gold/30 w-8 md:w-12"></div>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {NEWS.map((item, idx) => (
            <RevealOnScroll key={item.id} delay={idx * 150}>
              <div className="group relative bg-card-depth border border-gold/10 p-1 shadow-2xl hover:border-gold/30 transition-all duration-500 flex flex-col md:flex-row h-full">
                
                {/* Image Section */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover filter sepia-[0.2] contrast-110 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-void/10 group-hover:bg-void/0 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                     <span className="bg-gold/90 text-void text-[0.5rem] font-display font-bold px-2 py-1 uppercase tracking-widest border border-void/20">
                       {item.category}
                     </span>
                  </div>
                </div>
                
                {/* Info Section */}
                <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-3/5">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-gold/60 text-[0.6rem] font-display tracking-widest uppercase">
                       <span className="material-icons-outlined text-sm">calendar_today</span>
                       <span>{item.date}</span>
                    </div>
                    
                    <h3 className="font-display text-xl text-stone-100 uppercase tracking-[0.2em] mb-4 group-hover:text-gold transition-colors leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="font-serif text-stone-500 text-sm italic mb-6 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <button className="self-start text-gold font-display text-[0.6rem] uppercase tracking-[0.3em] hover:text-white transition-colors flex items-center gap-2 group/btn">
                    Leer Más <span className="material-icons-outlined text-sm group-hover/btn:translate-x-1 transition-transform">east</span>
                  </button>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Novedades;

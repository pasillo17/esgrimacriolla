import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

interface NovedadesProps {
  onBack: () => void;
}

const NEWS = [
  {
    id: 1,
    title: 'Olimpiadas Gauchas',
    date: 'OCTUBRE 2026',
    category: 'EVENTO',
    image: 'https://i.imgur.com/RzVG7xU.jpeg',
    description: 'Participaremos en la nueva edición de las Olimpiadas Gauchas. Un gran evento lleno de tradición y destreza.',
    expandedContent: 'Estaremos compitiendo en diversas categorías de nuestra disciplina, demostrando el aprendizaje de todos nuestros estudiantes. Se llevarán a cabo torneos amistosos, demostraciones formales y charlas con maestros invitados. ¡Una oportunidad única para empaparse de nuestra cultura y tradición!'
  },
  {
    id: 2,
    title: 'Recreación Histórica en Luján',
    date: '25 MAYO 2026',
    category: 'RECREACIÓN',
    image: 'https://i.imgur.com/Ml54xka.jpeg',
    description: 'Conmemoración del 25 de mayo con una gran recreación histórica en la ciudad de Luján.',
    expandedContent: 'Acompañaremos los festejos patrios del 25 de mayo vistiendo a la usanza tradicional y realizando combates de exhibición en los alrededores del cabildo de Luján. Habrá desfiles, muestra de armamento de época y explicaciones pedagógicas sobre los duelos históricos.'
  },
  {
    id: 3,
    title: 'Lanzamiento de Libro',
    date: 'DICIEMBRE 2026',
    category: 'PUBLICACIÓN',
    image: 'https://i.imgur.com/xzi5sUa.jpeg',
    description: 'Presentación del libro "Tratado de el antiguo arte de pelear con facón y poncho" del Maestro Jorge Prina.',
    expandedContent: 'Un trabajo de investigación profunda que rescata y sistematiza los principios técnicos, tácticos e históricos del combate con facón y poncho. La presentación contará con una firma de ejemplares, una charla introductoria y, por supuesto, demostraciones en vivo de las técnicas abordadas en el ejemplar.'
  },
  {
    id: 4,
    title: 'Esgrima Criolla Stream',
    date: '09 ABRIL 2026',
    category: 'MULTIMEDIA',
    image: 'https://i.imgur.com/z6Fdi0X.jpeg',
    description: 'Nuevo capítulo en vivo de nuestro stream oficial. ¡Los esperamos para charlar sobre la historia de nuestra disciplina!',
    expandedContent: 'No se pierdan nuestra transmisión en vivo. Estaremos repasando las últimas novedades de todas las sedes, analizando técnicas complejas, compartiendo material audiovisual inédito y respondiendo e-mails y el chat en el momento.'
  }
];

const Novedades: React.FC<NovedadesProps> = ({ onBack }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

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
                    
                    <p className="font-serif text-stone-500 text-sm italic mb-6 leading-relaxed flex-1">
                      {item.description}
                      <span className={`block mt-4 text-stone-400 overflow-hidden transition-all duration-500 ease-in-out ${expandedId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {item.expandedContent}
                      </span>
                    </p>
                  </div>

                  <button 
                    onClick={() => toggleExpand(item.id)}
                    className="self-start text-gold font-display text-[0.6rem] uppercase tracking-[0.3em] hover:text-white transition-colors flex items-center gap-2 group/btn"
                  >
                    {expandedId === item.id ? 'Ver Menos' : 'Leer Más'}
                    <span className={`material-icons-outlined text-sm transition-transform ${expandedId === item.id ? '' : 'group-hover/btn:translate-x-1'}`}>
                      {expandedId === item.id ? 'keyboard_arrow_up' : 'east'}
                    </span>
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

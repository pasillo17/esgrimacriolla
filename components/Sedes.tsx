import React from 'react';
import RevealOnScroll from './RevealOnScroll';

interface SedesProps {
  onBack: () => void;
}

const LOCATIONS = [
  {
    id: 1,
    city: 'Buenos Aires',
    name: 'Sede Central (Montal Gym)',
    address: 'Mitre 1851, CABA',
    schedule: 'Sábados 10:00 - 12:00',
    image: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?q=80&w=2070&auto=format&fit=crop',
    instructor: 'Maestro Jorge Prina',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mitre+1851,+CABA',
    instagramUrl: 'https://www.instagram.com/esgrima_criolla' // Cambiar por el Instagram específico de la sede
  },
  {
    id: 4,
    city: 'Lanus',
    name: 'Sede Zona Sur',
    address: 'Gym ESN, Enrique Fernandez 2066',
    schedule: 'Mar y Jue 8:30hs • Lun y Vie 19:00hs',
    image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=1935&auto=format&fit=crop',
    instructor: 'Inst. Augusto Miranda',
    mapUrl: 'https://maps.app.goo.gl/vQTk5ugv5eXhjrMt9',
    instagramUrl: 'https://www.instagram.com/agus_esgrimacriolla/' // Cambiar por el Instagram específico de la sede
  },
  {
    id: 3,
    city: 'Belgrano',
    name: 'Sede Belgrano',
    address: 'Plaza Juan Jose Paso, Moldes 1300',
    schedule: 'Jueves 19:00 - 21:00',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Plaza_Juan_Jos%C3%A9_Paso.jpg',
    instructor: 'Inst. Eliseo Dulon',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Plaza+Juan+Jose+Paso,+Moldes+1300',
    instagramUrl: 'https://www.instagram.com/esgrima_criolla_belgrano/' // Cambiar por el Instagram específico de la sede
  },
  {
    id: 2,
    city: 'Caballito',
    name: 'Sede Caballito',
    address: 'Parque Rivadavia, CABA ',
    schedule: 'Miercoles 19:00 - 20:00',
    image: 'https://turismo.buenosaires.gob.ar/sites/turismo/files/parque_rivadavia_1200_0.jpg',
    instructor: 'Inst. Luisina Montero',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Parque+Rivadavia,+CABA',
    instagramUrl: 'https://www.instagram.com/esgrimacriolla.caballito/' // Cambiar por el Instagram específico de la sede
  }
];

const Sedes: React.FC<SedesProps> = ({ onBack }) => {
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
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-stone-100 tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 text-center w-full">Nuestras Sedes</h2>
            <div className="flex items-center justify-center gap-4 w-full">
              <div className="h-px bg-gold/30 w-8 md:w-12"></div>
              <p className="text-[0.5rem] md:text-[0.6rem] text-gold tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold text-center">Donde vive la tradición</p>
              <div className="h-px bg-gold/30 w-8 md:w-12"></div>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {LOCATIONS.map((sede, idx) => (
            <RevealOnScroll key={sede.id} delay={idx * 150}>
              <div className="group relative bg-card-depth border border-gold/10 p-1 shadow-2xl hover:border-gold/30 transition-all duration-500">
                <div className="relative h-64 overflow-hidden mb-6">
                  <img 
                    src={sede.image} 
                    alt={sede.name}
                    className="w-full h-full object-cover filter sepia-[0.3] contrast-110 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-void/20 group-hover:bg-void/0 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-void to-transparent">
                    <span className="text-gold font-display text-xs tracking-[0.2em] uppercase font-bold">{sede.city}</span>
                  </div>
                </div>
                
                <div className="px-6 pb-8 text-center">
                  <h3 className="font-display text-xl text-stone-200 uppercase tracking-[0.2em] mb-2 group-hover:text-gold transition-colors">{sede.name}</h3>
                  <p className="font-serif text-stone-500 text-sm italic mb-6">{sede.instructor}</p>
                  
                  <div className="space-y-3 border-t border-gold/10 pt-6">
                    <div className="flex items-center justify-center gap-3 text-stone-400">
                      <span className="material-icons-outlined text-gold/60 text-sm">location_on</span>
                      <span className="font-display text-xs tracking-widest uppercase">{sede.address}</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-stone-400">
                      <span className="material-icons-outlined text-gold/60 text-sm">schedule</span>
                      <span className="font-display text-xs tracking-widest uppercase">{sede.schedule}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-4">
                    <a 
                      href={sede.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 border border-gold/20 text-stone-400 font-display text-[0.6rem] uppercase tracking-[0.3em] hover:bg-gold/5 hover:border-gold/40 hover:text-gold transition-all flex items-center justify-center gap-2"
                    >
                      <span className="material-icons-outlined text-sm">map</span>
                      Ver en Mapa
                    </a>
                    <a 
                      href={sede.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-gold/10 border border-gold/20 text-gold font-display text-[0.6rem] uppercase tracking-[0.3em] hover:bg-gold/20 hover:border-gold/60 transition-all flex items-center justify-center gap-2"
                    >
                      <span className="material-icons-outlined text-sm">camera_alt</span>
                      Contactar
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sedes;

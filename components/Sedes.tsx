import React, { useState, useEffect } from 'react';
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
    schedule: 'Sábados 10:00-12:00',
    image: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?q=80&w=2070&auto=format&fit=crop',
    instructor: 'Maestro Jorge Prina',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Mitre+1851,+CABA',
    contactUrl: 'https://www.instagram.com/esgrima_criolla',
    contactIcon: 'chat',
    contactText: 'Contactar'
  },
  {
    id: 4,
    city: 'Lanus',
    name: 'Sede Zona Sur',
    address: 'Gym ESN, Enrique Fernandez 2066',
    schedule: 'Mar y Jue 08:30-10:00 • Lun 19:00-20:30',
    image: 'https://www.lanus.gob.ar/storage/fichas/multimedia/dji-0046-0dcHp.JPG',
    instructor: 'Inst. Augusto Miranda',
    mapUrl: 'https://maps.app.goo.gl/vQTk5ugv5eXhjrMt9',
    contactUrl: 'https://wa.me/5491162086574?text=Buenas%20y%20santas%2C%20quiero%20solicitar%20informaci%C3%B3n%20sobre%20la%20Sede%20Lanus',
    contactIcon: 'chat',
    contactText: 'Contactar'
  },
  {
    id: 3,
    city: 'Belgrano',
    name: 'Sede Belgrano',
    address: 'Plaza Juan Jose Paso, Moldes 1300',
    schedule: 'Jueves 19:00-21:00',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Plaza_Juan_Jos%C3%A9_Paso.jpg',
    instructor: 'Inst. Eliseo Dulon',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Plaza+Juan+Jose+Paso,+Moldes+1300',
    contactUrl: 'https://wa.me/5491135197663?text=Buenas%20y%20santas%2C%20quiero%20solicitar%20informaci%C3%B3n%20sobre%20la%20Sede%20Belgrano',
    contactIcon: 'chat',
    contactText: 'Contactar'
  },
  {
    id: 2,
    city: 'Caballito',
    name: 'Sede Caballito',
    address: 'Parque Rivadavia, CABA ',
    schedule: 'Miércoles 19:00-20:00',
    image: 'https://turismo.buenosaires.gob.ar/sites/turismo/files/parque_rivadavia_1200_0.jpg',
    instructor: 'Inst. Luisina Montero',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Parque+Rivadavia,+CABA',
    contactUrl: 'https://www.instagram.com/esgrimacriolla.caballito/',
    contactIcon: 'chat',
    contactText: 'Contactar'
  },
  {
    id: 5,
    city: 'La Plata',
    name: 'Sede La Plata',
    address: 'Sindicato Gráfico',
    schedule: 'Jueves 19:00-20:30',
    image: 'https://turismo.laplata.gob.ar/img/la-ciudad/plaza_morenocatedral-1024x684.jpg',
    instructor: 'Maestro Jorge Prina',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sindicato+Grafico,+La+Plata',
    contactUrl: 'https://wa.me/5492216246179?text=Buenas%20y%20santas%20quiero%20entrenar%20en%20Sede%20La%20Plata',
    contactIcon: 'chat',
    contactText: 'Contactar'
  },
  {
    id: 6,
    city: 'Mar del Plata',
    name: 'Sede Mar del Plata',
    address: 'Plaza Mitre',
    schedule: 'Miércoles 19:00-20:30',
    image: 'https://cdn-italiani-media.italiani.it/site-mardelplata/2019/09/Plaza-Mitre-Mar-del-Plata-1000x600.jpg',
    instructor: 'Inst. Sebastián Javier Chehin',
    mapUrl: 'https://maps.app.goo.gl/yaw1XNoqz1APWRgz6',
    contactUrl: 'https://www.instagram.com/esgrimacriollamdp/',
    contactIcon: 'chat',
    contactText: 'Contactar'
  },
  {
    id: 7,
    city: 'Bariloche',
    name: 'Sede Bariloche',
    address: 'Bomberos voluntarios',
    schedule: 'Lunes y Miércoles 18:30-20:00',
    image: 'https://www.latamairlines.com/content/dam/latamxp/sites/vamos-latam/news-nieve-sudam%C3%A9rica-may25/bariloche/Modelo-1.png',
    instructor: 'Inst. Walter Medel e Ismael De Valle',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bomberos+voluntarios,+Bariloche',
    contactUrl: 'https://www.instagram.com/esgrimabariloche/',
    contactIcon: 'chat',
    contactText: 'Contactar'
  }
];

const SedeCard = ({ sede }: { sede: typeof LOCATIONS[0] }) => (
  <div className="group relative bg-gradient-to-b from-[#2A1D13] to-card-depth border border-gold/10 p-1 shadow-2xl hover:border-gold/30 transition-all duration-500 rounded-sm">
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
        <div className="flex items-center justify-center gap-3 text-stone-400 mt-2">
          <span className="material-icons-outlined text-gold/60 text-sm">schedule</span>
          <span className="font-display text-[0.6rem] sm:text-[0.65rem] xl:text-[0.7rem] tracking-wider md:tracking-widest uppercase whitespace-nowrap">{sede.schedule}</span>
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
          href={sede.contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-gold/10 border border-gold/20 text-gold font-display text-[0.6rem] uppercase tracking-[0.3em] hover:bg-gold/20 hover:border-gold/60 transition-all flex items-center justify-center gap-2"
        >
          <span className="material-icons-outlined text-sm">{sede.contactIcon}</span>
          {sede.contactText}
        </a>
      </div>
    </div>
  </div>
);

const Sedes: React.FC<SedesProps> = ({ onBack }) => {
  const [mobileIndex, setMobileIndex] = useState(0);
  const otherLocations = LOCATIONS.filter(l => l.id !== 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % otherLocations.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [otherLocations.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0a05] to-[#1a1108] text-stone-300 selection:bg-gold selection:text-void pt-24 pb-12 overflow-x-hidden">
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

        <div className="mb-16 md:mb-24">
          <RevealOnScroll delay={0}>
            <div className="group relative bg-gradient-to-b from-[#2A1D13] to-card-depth border border-gold/30 p-1 shadow-[0_0_30px_rgba(197,160,101,0.15)] hover:border-gold/50 hover:shadow-[0_0_40px_rgba(197,160,101,0.25)] transition-all duration-500 max-w-xl mx-auto rounded-sm mt-8 sm:mt-0">
              <div className="absolute -top-4 sm:-top-4 left-1/2 -translate-x-1/2 bg-void border border-gold/40 px-6 py-1.5 z-10 whitespace-nowrap flex items-center justify-center">
                <span className="font-display text-gold text-[0.6rem] uppercase tracking-[0.4em] pl-[0.4em] font-bold text-center">Sede Principal</span>
              </div>
              <div className="relative h-72 md:h-80 overflow-hidden mb-6 group/video">
                {/* Image Placeholder that transitions out when hovered, or just replace with video */}
                <iframe 
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/p_MVjDzK4v8?autoplay=1&mute=1&controls=0&loop=1&playlist=p_MVjDzK4v8&vq=hd1080" 
                  title="Esgrima Criolla Sede Central" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-void to-transparent pointer-events-none">
                  <span className="text-gold font-display text-sm tracking-[0.2em] uppercase font-bold">{LOCATIONS.find(l => l.id === 1)?.city}</span>
                </div>
              </div>
              
              <div className="px-8 pb-10 text-center">
                <h3 className="font-display text-2xl text-stone-200 uppercase tracking-[0.2em] mb-2 group-hover:text-gold transition-colors">{LOCATIONS.find(l => l.id === 1)?.name}</h3>
                <p className="font-serif text-stone-500 text-base italic mb-6">{LOCATIONS.find(l => l.id === 1)?.instructor}</p>
                
                <div className="space-y-3 border-t border-gold/10 pt-6">
                  <div className="flex items-center justify-center gap-3 text-stone-400">
                    <span className="material-icons-outlined text-gold/60 text-base">location_on</span>
                    <span className="font-display text-sm tracking-widest uppercase">{LOCATIONS.find(l => l.id === 1)?.address}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-stone-400">
                    <span className="material-icons-outlined text-gold/60 text-base">schedule</span>
                    <span className="font-display text-sm tracking-widest uppercase">{LOCATIONS.find(l => l.id === 1)?.schedule}</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a 
                    href={LOCATIONS.find(l => l.id === 1)?.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 border border-gold/20 text-stone-400 font-display text-[0.7rem] uppercase tracking-[0.3em] hover:bg-gold/5 hover:border-gold/40 hover:text-gold transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-icons-outlined text-sm">map</span>
                    Ver en Mapa
                  </a>
                  <a 
                    href={LOCATIONS.find(l => l.id === 1)?.contactUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-gold/10 border border-gold/20 text-gold font-display text-[0.7rem] uppercase tracking-[0.3em] hover:bg-gold/20 hover:border-gold/60 transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-icons-outlined text-sm">{LOCATIONS.find(l => l.id === 1)?.contactIcon}</span>
                    {LOCATIONS.find(l => l.id === 1)?.contactText}
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 pb-12">
          {otherLocations.map((sede, idx) => (
            <RevealOnScroll key={sede.id} delay={idx * 150}>
              <SedeCard sede={sede} />
            </RevealOnScroll>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative overflow-hidden pb-12 pt-4 px-2">
          <div 
            className="flex transition-transform duration-700 ease-in-out" 
            style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
          >
            {otherLocations.map((sede) => (
              <div key={sede.id} className="w-full flex-shrink-0 px-2 box-border">
                <SedeCard sede={sede} />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-3 mt-8">
            {otherLocations.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setMobileIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${mobileIndex === idx ? 'bg-gold w-6' : 'bg-gold/30'}`}
                aria-label={`Ir a sede ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sedes;

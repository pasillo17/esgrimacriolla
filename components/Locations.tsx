import React from 'react';
import RevealOnScroll from './RevealOnScroll';

interface LocationsProps {
  onBack: () => void;
}

const LOCATIONS = [
  {
    id: 1,
    city: 'Buenos Aires',
    zone: 'CABA - Palermo',
    address: 'Parque Las Heras',
    schedule: 'Sábados 10:00 - 12:00 hs',
    instructor: 'Inst. Jorge Prina',
    mapLink: 'https://maps.google.com'
  },
  {
    id: 2,
    city: 'Buenos Aires',
    zone: 'Zona Norte - Olivos',
    address: 'Plaza Vicente López',
    schedule: 'Domingos 09:00 - 11:00 hs',
    instructor: 'Inst. Martín Gomez',
    mapLink: 'https://maps.google.com'
  },
  {
    id: 3,
    city: 'Buenos Aires',
    zone: 'Zona Sur - Lanús',
    address: 'Velódromo de Lanús',
    schedule: 'Sábados 15:00 - 17:00 hs',
    instructor: 'Inst. Roberto Diaz',
    mapLink: 'https://maps.google.com'
  },
  {
    id: 4,
    city: 'La Plata',
    zone: 'Centro',
    address: 'Plaza Moreno',
    schedule: 'Sábados 10:00 - 12:00 hs',
    instructor: 'Inst. Carlos Ruiz',
    mapLink: 'https://maps.google.com'
  },
  {
    id: 5,
    city: 'Córdoba',
    zone: 'Capital',
    address: 'Parque Sarmiento',
    schedule: 'Consultar Horarios',
    instructor: 'Grupo de Estudio',
    mapLink: 'https://maps.google.com'
  },
  {
    id: 6,
    city: 'Santa Fe',
    zone: 'Rosario',
    address: 'Parque de la Independencia',
    schedule: 'Domingos 10:00 hs',
    instructor: 'Grupo de Estudio',
    mapLink: 'https://maps.google.com'
  }
];

const Locations: React.FC<LocationsProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-900 selection:text-white pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 border-b border-white/10 pb-8 animate-reveal">
           <button 
             onClick={onBack} 
             className="group flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-8"
           >
             <span className="material-icons-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
             <span className="text-xs font-bold uppercase tracking-widest">Volver</span>
           </button>
           <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
             SEDES Y<br/>HORARIOS<span className="text-red-600">.</span>
           </h1>
           <p className="text-neutral-400 text-sm max-w-lg leading-relaxed">
             Encontrá tu lugar de entrenamiento más cercano. La práctica de Esgrima Criolla se realiza al aire libre o en centros culturales habilitados.
           </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LOCATIONS.map((loc, idx) => (
            <RevealOnScroll key={loc.id} delay={idx * 100}>
              <div className="group border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/50 hover:border-white/30 transition-all duration-300 p-8 relative overflow-hidden">
                
                {/* Hover Accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

                <div className="flex justify-between items-start mb-6">
                   <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 mb-1 block">{loc.city}</span>
                      <h3 className="text-2xl font-bold text-white">{loc.zone}</h3>
                   </div>
                   <span className="material-icons-outlined text-neutral-600 group-hover:text-white transition-colors">place</span>
                </div>

                <div className="space-y-4">
                   <div className="flex items-start gap-3">
                      <span className="material-icons-outlined text-sm text-neutral-500 mt-0.5">location_on</span>
                      <p className="text-sm text-neutral-300">{loc.address}</p>
                   </div>
                   <div className="flex items-start gap-3">
                      <span className="material-icons-outlined text-sm text-neutral-500 mt-0.5">schedule</span>
                      <p className="text-sm text-neutral-300">{loc.schedule}</p>
                   </div>
                   <div className="flex items-start gap-3">
                      <span className="material-icons-outlined text-sm text-neutral-500 mt-0.5">person</span>
                      <p className="text-sm text-neutral-300">{loc.instructor}</p>
                   </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                   <a 
                     href={loc.mapLink} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                   >
                     <span>Ver en Mapa</span>
                     <span className="material-icons-outlined text-xs">arrow_outward</span>
                   </a>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 p-8 md:p-12 border border-white/10 bg-neutral-900/30 text-center">
           <h3 className="text-2xl font-bold mb-4">¿Querés abrir una sede en tu zona?</h3>
           <p className="text-neutral-400 text-sm mb-8 max-w-xl mx-auto">
             Buscamos instructores y grupos de estudio en todo el país. Contactanos para recibir los requisitos y el programa oficial de formación.
           </p>
           <button className="bg-white text-black px-8 py-3 font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors">
             Contactar
           </button>
        </div>

      </div>
    </div>
  );
};

export default Locations;

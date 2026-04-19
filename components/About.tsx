import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const INSTRUCTORS = [
  {
    name: 'Jorge Prina',
    role: 'Maestro Principal',
    image: 'https://i.imgur.com/5y0y0y0.jpg', // Placeholder, using a generic one if specific isn't known, or I'll use a text placeholder
    bio: 'Investigador y reconstructor de la Esgrima Criolla. Más de 20 años de experiencia en artes marciales históricas.',
  },
  {
    name: 'Martín Gomez',
    role: 'Instructor',
    image: 'https://i.imgur.com/5y0y0y0.jpg',
    bio: 'Especialista en facón y boleadoras. Dedicado a la preservación de las técnicas tradicionales.',
  }
];

const About: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 text-white">
            LOS <span className="text-red-600">MAESTROS</span>.
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {INSTRUCTORS.map((instructor, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <div className="group relative overflow-hidden border border-white/10 bg-neutral-900/20 hover:border-white/30 transition-all duration-500">
                <div className="aspect-[4/3] bg-neutral-800 relative overflow-hidden">
                   {/* Placeholder for instructor image since we don't have real URLs yet */}
                   <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-600">
                      <span className="material-icons-outlined text-6xl">person</span>
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                </div>
                
                <div className="p-8 relative">
                   <h3 className="text-2xl font-bold text-white mb-1">{instructor.name}</h3>
                   <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">{instructor.role}</p>
                   <p className="text-neutral-400 text-sm leading-relaxed">
                     {instructor.bio}
                   </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

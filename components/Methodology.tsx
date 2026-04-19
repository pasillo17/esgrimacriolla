import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Methodology: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
               EL <span className="text-red-600">MÉTODO</span>.
             </h2>
             <p className="text-neutral-500 text-sm max-w-sm leading-relaxed mt-4 md:mt-0">
               Un sistema de combate basado en la realidad histórica, adaptado para la práctica moderna segura y efectiva.
             </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <RevealOnScroll delay={100}>
             <div className="p-8 border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-300">
                <span className="text-4xl font-black text-white/10 mb-6 block">01</span>
                <h3 className="text-xl font-bold text-white mb-4">Manejo del Facón</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Técnicas de corte, estocada y defensa con el arma tradicional del gaucho. Uso del poncho como escudo.
                </p>
             </div>
           </RevealOnScroll>

           <RevealOnScroll delay={200}>
             <div className="p-8 border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-300">
                <span className="text-4xl font-black text-white/10 mb-6 block">02</span>
                <h3 className="text-xl font-bold text-white mb-4">Boleadoras</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  El arte de la distancia y el control. Lanzamiento, recuperación y uso defensivo en combate cercano.
                </p>
             </div>
           </RevealOnScroll>

           <RevealOnScroll delay={300}>
             <div className="p-8 border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-all duration-300">
                <span className="text-4xl font-black text-white/10 mb-6 block">03</span>
                <h3 className="text-xl font-bold text-white mb-4">Combate Desarmado</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Defensa personal criolla. Agarres, derribos y golpes inspirados en la lucha tradicional.
                </p>
             </div>
           </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Methodology;

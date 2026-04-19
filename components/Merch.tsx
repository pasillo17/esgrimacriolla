import React from 'react';
import RevealOnScroll from './RevealOnScroll';

interface MerchProps {
  onBack: () => void;
}

const PRODUCTS = [
  {
    id: 1,
    name: 'Remera "Facón"',
    price: '$45.000',
    image: 'https://i.imgur.com/k42sH57.jpeg',
    description: 'Algodón 100% peinado. Estampa frontal con diseño de facón cruzado. Ideal para entrenamiento ligero o uso casual.',
    sizes: ['S', 'M', 'L', 'XL'],
    link: 'https://www.mercadolibre.com.ar',
    code: 'IND-001',
    specs: ['Algodón 24/1', 'Estampa Serigrafía', 'Corte Regular'],
    stockLabel: '12 UNIDADES'
  },
  {
    id: 2,
    name: 'Cuchillo de Entrenamiento',
    price: '$18.000',
    image: 'https://i.imgur.com/rVLB4gA.png',
    description: 'Réplica segura para práctica de esgrima. Balance realista y flexibilidad justa para evitar lesiones.',
    sizes: ['Único'],
    link: 'https://www.mercadolibre.com.ar/cuchillo-de-entrenamiento-de-goma/up/MLAU280872695?pdp_filters=item_id%3AMLA792587596&matt_tool=89488245#origin=share&sid=share&wid=MLA792587596',
    code: 'EQP-001',
    specs: ['Polímero Flexible', 'Peso Realista', 'Punta Redondeada']
  },
  {
    id: 3,
    name: 'Libro "Duelos Criollos"',
    price: '$33.500',
    image: 'https://i.imgur.com/CitKOon.png',
    description: 'Una investigación profunda sobre la historia y técnica del duelo a cuchillo en el Río de la Plata.',
    sizes: ['Físico'],
    link: 'https://www.mercadolibre.com.ar/duelos-criollos--jorge-prina/up/MLAU313909352?pdp_filters=item_id%3AMLA936008255&matt_tool=89488245#origin=share&sid=share&wid=MLA936008255',
    code: 'LIB-001',
    specs: ['Tapa Blanda', '250 Páginas', 'Edición 2024']
  },
  {
    id: 4,
    name: 'Libro "Defensa Personal"',
    price: '$20.000',
    image: 'https://i.imgur.com/NyQh1q1.jpeg',
    description: 'Manual práctico de defensa personal basado en las técnicas de la esgrima criolla adaptadas al contexto moderno.',
    sizes: ['Físico'],
    link: 'https://www.amazon.com/-/es/Treatise-Ancient-Fighting-Esgrima-Criolla/dp/B099C47LW4/ref=tmm_pap_swatch_0',
    code: 'LIB-002',
    specs: ['Tapa Blanda', '180 Páginas', 'Ilustrado']
  }
];

const Merch: React.FC<MerchProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-void text-stone-300 selection:bg-gold selection:text-void paper-texture pt-24 pb-12 overflow-x-hidden">
      {/* Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 vignette-overlay opacity-60"></div>
      
      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-grain opacity-5 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <RevealOnScroll>
          <div className="flex flex-col items-center mb-10 md:mb-16 text-center mx-auto">
            <button 
              onClick={onBack} 
              className="mb-8 group flex items-center gap-2 text-stone-500 hover:text-gold transition-colors"
            >
              <span className="material-icons-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
              <span className="text-xs font-display font-bold uppercase tracking-[0.2em]">Volver al Inicio</span>
            </button>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-stone-100 tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 text-center w-full text-glow-white">El Arsenal</h2>
            <div className="flex items-center justify-center gap-4 w-full mb-12">
              <div className="h-px bg-gold/30 w-8 md:w-12"></div>
              <p className="text-[0.5rem] md:text-[0.6rem] text-gold tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold text-center text-glow-gold">Equipamiento Oficial</p>
              <div className="h-px bg-gold/30 w-8 md:w-12"></div>
            </div>
          </div>
        </RevealOnScroll>
        
        <div className="relative w-[100vw] left-1/2 -translate-x-1/2 mb-12 md:mb-16">
          <div className="guardapampa-divider opacity-80 animate-guardapampa"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {PRODUCTS.map((product, idx) => (
            <RevealOnScroll key={product.id} delay={idx * 100}>
              <div className="group relative bg-[#2A1C11] border border-[#4A3219] p-1 shadow-2xl hover:border-gold/40 transition-all duration-500 flex flex-col h-full rounded-sm">
                
                {/* Image Section */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-void/50">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover filter sepia-[0.2] contrast-110 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-void/10 group-hover:bg-void/0 transition-colors pointer-events-none"></div>
                  
                  {product.stockLabel && (
                     <div className="absolute top-3 left-3">
                        <span className="bg-gold/90 text-void text-[0.45rem] font-display font-bold px-2 py-1 uppercase tracking-widest border border-void/20">
                          {product.stockLabel}
                        </span>
                     </div>
                  )}
                </div>
                
                {/* Info Section */}
                <div className="p-4 md:p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                       <span className="font-display text-[0.55rem] tracking-[0.2em] text-gold/60 uppercase">{product.code}</span>
                       <span className="font-display text-sm md:text-base text-stone-200 tracking-widest font-bold">{product.price}</span>
                    </div>
                    
                    <h3 className="font-display text-sm md:text-base text-stone-100 uppercase tracking-[0.15em] mb-3 group-hover:text-gold transition-colors leading-snug line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="font-serif text-stone-400 text-xs italic mb-4 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 border border-gold/20 text-gold font-display text-[0.55rem] uppercase tracking-[0.3em] hover:bg-gold/10 hover:border-gold/50 transition-all flex items-center justify-center gap-2 group/btn mt-auto bg-void/30"
                  >
                    <span>Adquirir</span>
                    {product.id === 4 ? (
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-2 w-auto filter invert opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                    ) : (
                        <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/logo__small.png" alt="Mercado Libre" className="h-2.5 w-auto filter grayscale opacity-60 group-hover/btn:opacity-100 group-hover/btn:filter-none transition-all" />
                    )}
                  </a>
                </div>

              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Merch;

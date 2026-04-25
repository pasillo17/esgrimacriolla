import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, KeyRound } from 'lucide-react';

interface AcademiaOnlineProps {
  onBack: () => void;
}

const COURSES = [
  {
    id: 1,
    title: 'Curso de Monitor Esgrima Criolla',
    level: 'Certificación',
    duration: '8 Meses',
    image: 'https://i.imgur.com/lMqX3D7.jpeg',
    description: 'Formación integral para instructores. Un recorrido profundo por la técnica, pedagogía y filosofía de la esgrima criolla.',
    modules: ['64 Módulos', 'Formato Online', 'Vínculo de Respuesta Rápida', 'Exámenes Parciales']
  },
  {
    id: 2,
    title: 'Clases Personalizadas Online',
    level: 'A Medida',
    duration: 'Continuo',
    image: 'https://i.imgur.com/UbFcZJ8.jpeg',
    description: 'Seguimiento individualizado con un programa evolutivo adaptado a tu nivel. Acceso a material de respaldo y bibliografía exclusiva.',
    modules: ['Programa Evolutivo', 'Material de Respaldo', 'Bibliografía Digital', 'Corrección por Video']
  },
  {
    id: 3,
    title: 'Curso de Cultura Gaucha',
    level: 'Universitario',
    duration: '2 Meses',
    image: 'https://i.imgur.com/alnT1W5.jpeg',
    description: 'Inmersión en la historia y costumbres. Certificación Oficial de la Universidad de Catamarca.',
    modules: ['8 Módulos', 'Clases por Videollamada', 'Historia y Tradición', 'Certificado Oficial']
  }
];

const AcademiaOnline: React.FC<AcademiaOnlineProps> = ({ onBack }) => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEnrollClick = (course: typeof COURSES[0]) => {
    if (course.id === 1) {
      // Abre el modal para el curso de monitor
      setShowPasswordModal(true);
      setPassword('');
      setPasswordError('');
    } else if (course.id === 2) {
      // Redirige a WhatsApp con un mensaje personalizado
      const message = `Buenas y santas, quiero solicitar información sobre las Clases Personalizadas Online de Esgrima Criolla.`;
      const phoneNumber = '5492216246179'; // Tu número de WhatsApp
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else if (course.id === 3) {
      window.open('https://www.unca.edu.ar/cursosextension', '_blank');
    } else {
      const message = `Buenas quiero consultar por ${course.title}`;
      navigator.clipboard.writeText(message).then(() => {
        window.open('https://ig.me/m/esgrima_criolla', '_blank');
      }).catch(() => {
        window.open('https://ig.me/m/esgrima_criolla', '_blank');
      });
    }
  };

  const handleAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Contraseña estática predefinida para el curso
    if (password === 'facon2024') {
      setPasswordError('');
      // Si la contraseña es correcta, abrir la URL del contenido del curso
      // Aquí puedes colocar el enlace de Drive, YouTube Privado, etc.
      window.open('https://www.youtube.com/playlist?list=PLpTBbyvUiihsBfP0hfCPw7pZNdcLMXbrC', '_blank');
      setShowPasswordModal(false);
    } else {
      setPasswordError('Contraseña incorrecta. El acero rechaza tu entrada.');
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
          <div className="flex flex-col items-center mb-12 md:mb-16 text-center mx-auto">
            <button 
              onClick={onBack} 
              className="mb-8 group flex items-center gap-2 text-stone-500 hover:text-gold transition-colors"
            >
              <span className="material-icons-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
              <span className="text-xs font-display font-bold uppercase tracking-[0.2em]">Volver al Inicio</span>
            </button>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-stone-100 tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 text-center w-full">Academia Online</h2>
            <div className="flex items-center justify-center gap-4 w-full">
              <div className="h-px bg-gold/30 w-8 md:w-12"></div>
              <p className="text-[0.5rem] md:text-[0.6rem] text-gold tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold text-center">Formación a Distancia</p>
              <div className="h-px bg-gold/30 w-8 md:w-12"></div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Video Section */}
        <RevealOnScroll delay={100}>
          <div className="mb-20 md:mb-24 relative w-full max-w-4xl mx-auto">
            <div className="aspect-video w-full bg-black border border-gold/20 shadow-2xl relative overflow-hidden group">
               {/* Placeholder for Video - In a real app, use an iframe or video tag */}
               <div className="absolute inset-0 flex items-center justify-center bg-card-depth">
                  <img 
                    src="https://images.unsplash.com/photo-1533552352378-0234b6734104?q=80&w=2070&auto=format&fit=crop" 
                    alt="Video Cover" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity"
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gold/50 flex items-center justify-center mb-4 cursor-pointer hover:bg-gold/10 hover:scale-110 transition-all backdrop-blur-sm">
                       <span className="material-icons-outlined text-4xl md:text-5xl text-gold ml-1">play_arrow</span>
                    </div>
                    <p className="font-display text-stone-200 tracking-[0.2em] uppercase text-sm md:text-base text-shadow">Descubre tu Legado</p>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r border-b border-gold/20 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-l border-t border-gold/20 hidden md:block"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {COURSES.map((course, idx) => (
            <RevealOnScroll key={course.id} delay={idx * 150 + 200}>
              <div className="group relative bg-[#2A1C11] border border-[#4A3219] hover:border-gold/40 p-1 shadow-2xl transition-all duration-500 flex flex-col h-full">
                <div className="relative h-56 overflow-hidden mb-6">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-void/90 text-gold text-[0.5rem] font-display font-bold px-2 py-1 uppercase tracking-widest border border-gold/20">
                      {course.level}
                    </span>
                  </div>
                </div>
                
                <div className="px-6 pb-8 flex flex-col flex-grow">
                  <h3 className="font-display text-lg text-stone-200 uppercase tracking-[0.2em] mb-4 group-hover:text-gold transition-colors min-h-[3.5rem]">{course.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-4 text-stone-500 text-xs font-display tracking-widest uppercase">
                    <span className="material-icons-outlined text-gold/60 text-sm">schedule</span>
                    <span>{course.duration}</span>
                  </div>

                  <p className="font-serif text-stone-500 text-sm italic mb-6 flex-grow">{course.description}</p>
                  
                  <div className="border-t border-gold/10 pt-6 mb-8">
                    <h4 className="font-display text-[0.6rem] text-stone-400 uppercase tracking-widest mb-3">Incluye:</h4>
                    <ul className="space-y-2">
                      {course.modules.map((mod, i) => (
                        <li key={i} className="flex items-start gap-2 text-stone-500 text-xs font-serif">
                          <span className="text-gold/60">•</span>
                          {mod}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => handleEnrollClick(course)}
                    className="relative w-full py-4 bg-void border border-gold/40 text-gold font-display font-bold text-[0.7rem] uppercase tracking-[0.3em] overflow-hidden group/signup transition-all duration-300 hover:scale-[1.02] hover:border-gold hover:bg-gold/5 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] mt-auto"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                       {course.id === 1 ? 'ACCEDER' : 'INSCRIBIRSE'}
                      {course.id === 1 ? <Lock className="w-4 h-4" /> : <span className="material-icons-outlined text-sm group-hover/signup:translate-x-1 transition-transform duration-300">east</span>}
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover/signup:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={400}>
          <div className="mt-20 md:mt-32 p-10 md:p-16 border border-gold/30 bg-gradient-to-b from-[#1A150B] to-void text-center max-w-4xl mx-auto relative overflow-hidden shadow-[0_0_40px_rgba(197,160,101,0.08)] rounded-sm group">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-gold/40 opacity-50"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/40 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-gold/40 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-gold/40 opacity-50"></div>
            
            <div className="absolute inset-0 bg-paper-texture opacity-10 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-gold/20 flex items-center justify-center mb-8 bg-gold/5 group-hover:bg-gold/10 transition-colors duration-500">
                <span className="material-icons-outlined text-4xl md:text-5xl text-gold">school</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-gold uppercase tracking-[0.3em] mb-6 text-shadow">Certificación Oficial</h3>
              <p className="font-serif text-stone-300 text-sm md:text-base italic max-w-2xl mx-auto mb-10 leading-relaxed">
                Nuestros cursos cuentan con el aval académico de la Universidad de Catamarca, garantizando la excelencia educativa en la preservación de nuestra cultura.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Curso Password Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-card-depth border border-gold/30 p-8 md:p-12 max-w-md w-full relative shadow-[0_0_50px_rgba(197,160,101,0.15)]"
            >
              <button 
                onClick={() => setShowPasswordModal(false)}
                className="absolute top-4 right-4 text-stone-500 hover:text-gold transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-6 bg-[#1A1108]">
                   <KeyRound className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-stone-100 uppercase tracking-widest mb-2">Área Restringida</h3>
                <p className="font-serif text-sm text-stone-400 italic">
                  Ingrese la contraseña para acceder al contenido del Curso de Monitor de Esgrima Criolla.
                </p>
              </div>

              <form onSubmit={handleAccessSubmit} className="space-y-6">
                <div>
                  <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña secreta"
                    className="w-full bg-[#1A1108] border border-stone-800 text-stone-200 px-4 py-3 font-serif focus:outline-none focus:border-gold/50 transition-colors text-center"
                    autoFocus
                  />
                  {passwordError && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                      className="text-red-400/90 text-xs text-center mt-3 font-serif"
                    >
                      {passwordError}
                    </motion.p>
                  )}
                </div>

                <button 
                  type="submit"
                  className="w-full relative py-4 bg-void border border-gold/50 text-gold font-display font-bold text-xs uppercase tracking-[0.2em] overflow-hidden group transition-all duration-300 hover:bg-gold hover:text-void shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                >
                  <span className="relative z-10">Ingresar al Recinto</span>
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default AcademiaOnline;

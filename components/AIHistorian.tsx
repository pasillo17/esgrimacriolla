
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { historianService } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIHistorianProps {
  onNavigate?: (view: 'home' | 'merch' | 'sedes' | 'academia-online' | 'novedades', hash?: string) => void;
}

const AIHistorian: React.FC<AIHistorianProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await historianService.askHistorian(userMsg, messages);
    
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  const renderMessageContent = (content: string) => {
    // Parser for [ACTION:text|href] syntax
    const regex = /\[ACTION:([^\|]+)\|([^\]]+)\]/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index));
      }
      
      const buttonText = match[1];
      const link = match[2];
      
      parts.push(
        <div key={`action-${match.index}`} className="block mt-3 mb-1">
          <button 
            type="button"
            onClick={() => {
               setIsOpen(false);
               if (onNavigate) {
                 if (link === '#merch') onNavigate('merch');
                 else if (link === '#sedes') onNavigate('sedes');
                 else if (link === '#academia-online') onNavigate('academia-online');
                 else if (link === '#novedades') onNavigate('novedades');
                 else {
                   onNavigate('home', link);
                 }
               }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 border border-stone-800 text-[#E8DCC5] font-display text-[0.65rem] uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors shadow-sm"
          >
            {buttonText}
            <span className="material-icons-outlined text-[0.8rem]">arrow_forward</span>
          </button>
        </div>
      );
      lastIndex = regex.lastIndex;
    }
    
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    return <>{parts.map((part, i) => <React.Fragment key={i}>{typeof part === 'string' ? part : part}</React.Fragment>)}</>;
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-card-depth border border-divider w-80 md:w-[400px] h-[550px] flex flex-col shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] rounded-sm overflow-hidden ring-1 ring-white/5 mb-4"
          >
            <div className="p-5 border-b border-stone-900/10 bg-[#E8DCC5] flex justify-between items-center relative">
              <div className="flex items-center gap-3">
                <span className="material-icons-outlined text-stone-900 text-lg">support_agent</span>
                <div className="flex flex-col">
                  <span className="font-display text-[0.7rem] tracking-[0.3em] text-stone-900 font-bold">PREGUNTAS FRECUENTES</span>
                  <span className="text-[0.5rem] tracking-widest text-stone-700 uppercase font-bold">Asistente Virtual</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-stone-600 hover:text-stone-900 transition-colors">
                <span className="material-icons-outlined text-base">close</span>
              </button>
            </div>
            
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#F5DEB3] relative">
              <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>
              {messages.length === 0 && (
                <div className="text-center py-20 px-8 relative z-10">
                  <span className="material-icons-outlined text-stone-800/50 text-5xl mb-6">live_help</span>
                  <p className="text-xs italic text-stone-700 leading-relaxed font-medium">
                    "Buenas y santas. Estoy aquí para responder sus consultas sobre nuestras sedes, horarios y modalidades de entrenamiento."
                  </p>
                </div>
              )}
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[90%] p-4 text-[0.75rem] leading-relaxed relative shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-white/80 border border-stone-900/10 text-stone-900 rounded-sm italic font-medium' 
                      : 'bg-[#E8DCC5] border-l-2 border-stone-900/40 text-stone-800 font-serif font-medium whitespace-pre-wrap'
                  }`}>
                    {msg.role === 'user' ? msg.content : renderMessageContent(msg.content)}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#E8DCC5] border-l-2 border-stone-900/20 p-4 w-12 flex space-x-1">
                    <div className="w-1 h-1 bg-stone-900/40 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-stone-900/40 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1 h-1 bg-stone-900/40 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 border-t border-stone-900/10 bg-[#E8DCC5]">
              <div className="relative group">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Consulte sobre sedes y horarios..."
                  className="w-full bg-white/50 border border-stone-900/10 py-3 px-4 pr-12 text-xs text-stone-900 focus:outline-none focus:border-stone-900/30 placeholder:text-stone-500 rounded-sm transition-all font-medium"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-900 transition-colors disabled:opacity-30"
                >
                  <span className="material-icons-outlined text-xl">send</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        ref={buttonRef}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-[#E8DCC5] border-2 border-stone-900/10 flex items-center justify-center text-stone-900 shadow-lg hover:border-stone-900/30 hover:shadow-xl transition-all group relative overflow-hidden shine-effect"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span className="material-icons-outlined group-hover:rotate-12 transition-transform relative z-10 text-2xl">support_agent</span>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-800 rounded-full animate-pulse shadow-sm"></div>
      </motion.button>
    </div>
  );
};

export default AIHistorian;

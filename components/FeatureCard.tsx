
import React from 'react';
import { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-8 md:px-8 md:py-16 bg-[#2A1C11] border border-[#4A3219] group hover:border-gold/40 transition-all duration-700 rounded-sm relative overflow-hidden shadow-2xl h-full border-glow-hover shine-effect">
      {/* Adornos de esquina sutiles */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/20 group-hover:border-gold/50 transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/20 group-hover:border-gold/50 transition-colors"></div>
      
      <div className="mb-4 p-4 md:mb-10 md:p-7 rounded-full bg-void/50 shadow-inner text-gold/60 group-hover:text-gold group-hover:shadow-md transition-all duration-500 border border-gold/10">
        <span className="material-icons-outlined text-2xl md:text-4xl">{feature.icon}</span>
      </div>
      
      <h3 className="font-display text-base md:text-lg text-stone-200 mb-3 md:mb-6 tracking-[0.4em] uppercase group-hover:text-gold transition-colors duration-500 font-bold">
        {feature.title}
      </h3>
      
      <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-4 md:mb-8 group-hover:w-20 transition-all duration-500"></div>
      
      <p className="text-xs md:text-[0.85rem] font-serif text-stone-400 leading-relaxed max-w-xs mx-auto group-hover:text-stone-300 transition-colors italic font-medium">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard;

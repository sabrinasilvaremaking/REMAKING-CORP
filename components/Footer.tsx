'use client';

import { Earth } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-8 pb-6 md:pt-10 md:pb-8 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-900/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex justify-center items-center mb-6 relative h-[256px]">
          {/* Tech Effect Rings / Circles and Globe Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-purple-600/10 rounded-full blur-[40px] pointer-events-none" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] opacity-80 pointer-events-none flex items-center justify-center mix-blend-screen">
            <img 
              src="https://i.imgur.com/xt8jUuu.png" 
              alt="Globe"
              className="w-full h-full object-contain"
              style={{ filter: "invert(1) sepia(1) saturate(100) hue-rotate(240deg) brightness(1.2)" }}
            />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] border-[0.5px] border-purple-500/20 rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] pointer-events-none">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="w-full h-full border-[0.5px] border-purple-500/40 rounded-full"
            >
               <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-purple-400 rounded-full shadow-[0_0_12px_rgba(168,85,247,1)] -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          </div>
          
          <a href="#" className="flex items-center justify-center relative z-10 group w-32 h-32">
            <img 
              src="https://i.imgur.com/XaOds9L.png" 
              alt="remaking." 
              className="h-8 md:h-12 object-contain filter group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-500 relative z-10" 
              referrerPolicy="no-referrer" 
            />
          </a>
        </div>
        
        <div className="w-full h-px bg-slate-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-slate-500">
          <p className="mb-4 md:mb-0 text-center md:text-left">Remaking desde 2019. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Termos</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

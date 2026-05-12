'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Instagram } from 'lucide-react';
import InteractiveParticles from './InteractiveParticles';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden text-white border-t border-slate-900">
      {/* Decorative effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-950 to-slate-950 pointer-events-none" />
      
      {/* Interactive Particles using dark theme (light particles) */}
      <InteractiveParticles theme="dark" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-800/40 rounded-full blur-[80px] opacity-40 pointer-events-none transform-gpu will-change-transform" />
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 md:mb-8 leading-[1.0] md:leading-[0.9] text-center">
            Holding<br />
            <span className="text-slate-500">Multinacional.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light mb-12 md:mb-16 max-w-4xl text-center leading-relaxed px-4 md:px-0">
            Somos uma empresa a atuar nas áreas da inteligência artificial e multimédia, operando como um grupo empresarial especializado em inovação e expansão agressiva em variados setores. A nossa estrutura assume um papel basilar nesta holding multinacional, vocacionada para a condução de operações de elevado crescimento e alto&nbsp;impacto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mt-4">
            <a href="mailto:remakingcorp@gmail.com" className="flex flex-col items-center text-center group cursor-pointer p-8 rounded-none border border-slate-800 bg-slate-900/20 backdrop-blur-sm hover:bg-slate-800/40 hover:border-slate-600 hover:shadow-[0_0_30px_rgba(186,230,253,0.1)] transition-all duration-500">
              <div className="w-14 h-14 rounded-none bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:border-sky-500/50 transition-all duration-500">
                <Mail size={22} className="text-slate-400 group-hover:text-sky-300 transition-colors duration-500" />
              </div>
              <div className="text-xs text-slate-500 font-medium tracking-widest uppercase mb-3">Email Corporativo</div>
              <div className="text-base font-medium text-slate-200 group-hover:text-white transition-colors duration-500">
                remakingcorp@gmail.com
              </div>
            </a>

            <div className="flex flex-col items-center text-center group p-8 rounded-none border border-slate-800 bg-slate-900/20 backdrop-blur-sm hover:bg-slate-800/40 hover:border-slate-600 hover:shadow-[0_0_30px_rgba(216,180,254,0.1)] transition-all duration-500">
              <div className="w-14 h-14 rounded-none bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:border-purple-500/50 transition-all duration-500">
                <MapPin size={22} className="text-slate-400 group-hover:text-purple-300 transition-colors duration-500" />
              </div>
              <div className="text-xs text-slate-500 font-medium tracking-widest uppercase mb-3">Operação</div>
              <div className="text-base font-medium text-slate-200 group-hover:text-white transition-colors duration-500">
                Sem Fronteiras
              </div>
            </div>

            <a href="https://instagram.com/remakingcorp" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center group cursor-pointer p-8 rounded-none border border-slate-800 bg-slate-900/20 backdrop-blur-sm hover:bg-slate-800/40 hover:border-slate-600 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500">
              <div className="w-14 h-14 rounded-none bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 shadow-sm group-hover:border-white/50 transition-all duration-500">
                <Instagram size={22} className="text-slate-400 group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="text-xs text-slate-500 font-medium tracking-widest uppercase mb-3">Instagram</div>
              <div className="text-base font-medium text-slate-200 group-hover:text-white transition-colors duration-500">
                @remakingcorp
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

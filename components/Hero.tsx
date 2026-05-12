'use client';

import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import InteractiveParticles from './InteractiveParticles';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-20 md:pb-0 bg-[#F8FAFC]">
      {/* AI Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]" />
      
      {/* Particle Effect */}
      <InteractiveParticles />
      
      {/* Animated Hex/Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-slate-200/50 rounded-full blur-[60px] md:blur-[80px] animate-blob transform-gpu will-change-transform" />
      <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gray-200/50 rounded-full blur-[60px] md:blur-[80px] animate-blob animation-delay-2000 transform-gpu will-change-transform" />
      <div className="absolute -bottom-16 md:-bottom-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-zinc-200/40 rounded-full blur-[60px] md:blur-[80px] animate-blob animation-delay-4000 transform-gpu will-change-transform" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-1.5 md:space-x-2 bg-white/80 backdrop-blur-md border border-slate-200 px-4 py-1.5 rounded-full mb-6 md:mb-8 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-800" />
          <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-slate-600 tracking-wider md:tracking-wide uppercase">O FUTURO DA TECNOLOGIA NA EUROPA</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[2.75rem] leading-[1.05] sm:text-[3.5rem] md:text-7xl lg:text-8xl font-bold tracking-tighter md:leading-[0.95] mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-b from-slate-500 via-slate-700 to-slate-800"
        >
           Elevando o seu <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-slate-400 to-slate-700">potencial digital</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[17px] sm:text-lg md:text-xl text-slate-600 max-w-[340px] sm:max-w-xl md:max-w-2xl mb-10 md:mb-12 font-light leading-[1.6] md:leading-relaxed"
        >
          Transformamos a visão da sua empresa através da intersecção perfeita entre inteligência artificial, engenharia de software avançada e produção audiovisual premium.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#contact"
            className="group w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-semibold text-white transition-all duration-200 bg-[#015C81] border border-transparent rounded-full hover:bg-[#014A68] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#015C81] shadow-md hover:shadow-lg overflow-hidden"
          >
            <span className="relative flex items-center">
              Conhecer a Empresa
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-semibold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-full hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200 shadow-sm"
          >
            Explorar Serviços
          </a>
        </motion.div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}

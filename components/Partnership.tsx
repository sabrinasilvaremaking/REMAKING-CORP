'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Sparkles, Code, Play } from 'lucide-react';

function PartnerCard({ partner }: { partner: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="group relative bg-[#0A0B10] border border-white/10 hover:border-white/20 rounded-[2.5rem] overflow-hidden transition-all duration-700 cursor-pointer w-full aspect-[9/16] shadow-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(`https://instagram.com/${partner.user.replace('@', '')}`, '_blank')}
    >
      {/* Base Image Container for framing/cropping */}
      <div className={`absolute inset-0 z-0 transition-all duration-1000 ${isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-70'}`}>
        <img 
          src={partner.feedImg} 
          alt={`Feed de ${partner.name}`}
          className={`w-full h-full object-cover ${partner.imgClass || ''}`}
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Video Content */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <video 
          ref={videoRef}
          src={partner.videoSrc || "https://i.imgur.com/dKmXEmR.mp4"}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-[1.02]"
          onCanPlay={(e) => { (e.target as HTMLVideoElement).playbackRate = 0.4; }}
        />
        {/* Dark overlay for video legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90 pointer-events-none" />
      </div>

      {/* Persistent Base Overlay (Dark gradient) - only when not hovered */}
      <div className={`absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-[#0A0B10]/60 to-transparent transition-opacity duration-700 z-10 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />

      {/* Dynamic Island (Smartphone effect) */}
      <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-full z-30 flex items-center justify-between px-2.5 transition-all duration-500 shadow-xl border border-white/5 ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <div className="w-2.5 h-2.5 rounded-full bg-[#111] shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#111]" />
      </div>

      {/* Top Bar (Reels style) - Appears on hover */}
      <div className={`absolute top-12 left-5 right-5 flex justify-between items-center z-20 transition-all duration-500 delay-100 ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <div className="flex items-center space-x-2">
           <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 p-[1.5px] shadow-lg">
             <img src={partner.img} alt="Avatar" className="w-full h-full rounded-full object-cover border border-black/50" />
           </div>
           <span className="text-xs font-semibold text-white drop-shadow-md">{partner.user.replace('@', '')}</span>
        </div>
        <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center pointer-events-auto hover:bg-white/30 transition-colors border border-white/10 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-white mr-1.5" />
          <span className="text-[10px] font-medium text-white tracking-wide">Seguir</span>
        </div>
      </div>

      {/* Info Content - Matches hover vs non-hover states */}
      <div className={`absolute bottom-8 left-5 right-16 z-20 text-left transition-all duration-700 ${isHovered ? 'translate-y-0' : 'translate-y-4'}`}>
        
        {/* Base state avatar / title */}
        <div className={`flex items-center space-x-4 mb-4 transition-all duration-500 ${isHovered ? 'opacity-0 h-0 w-0 overflow-hidden mb-0' : 'opacity-100'}`}>
          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/10 bg-slate-900 shadow-xl shrink-0">
            <img 
              src={partner.img} 
              alt={partner.user} 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${partner.name.replace(' ', '+')}&background=random&color=fff`;
              }}
            />
          </div>
          <div>
            <div className="text-xl font-medium text-white mb-0.5">{partner.name}</div>
            <div className="text-sm text-primary-light/80 font-mono">{partner.user}</div>
          </div>
        </div>

        {/* Hover state content */}
        <div className={`transition-all duration-500 delay-100 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute bottom-0'}`}>
          <div className="flex items-center space-x-2 mb-3">
            <Code className="w-4 h-4 text-primary-light" />
            <div className="text-[11px] font-bold text-white uppercase tracking-wider truncate">{partner.name}</div>
          </div>
          <div className="flex space-x-2">
            <span className="text-[9px] text-primary-light font-medium bg-primary/20 px-2 py-1 rounded-md backdrop-blur-md border border-primary/20">{partner.tag1 || '#Tecnologia'}</span>
            <span className="text-[9px] text-primary-light font-medium bg-primary/20 px-2 py-1 rounded-md backdrop-blur-md border border-primary/20">{partner.tag2 || '#Portugal'}</span>
          </div>
        </div>
      </div>

      {/* Home indicator (Smartphone) */}
      <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 w-[35%] h-[4px] bg-white/80 rounded-full z-30 transition-all duration-500 shadow-lg ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} />
    </div>
  );
}

export default function Partnership() {
  return (
    <section id="partnership" className="relative bg-white text-slate-900">
      
      {/* Ecosystem Section with Ria de Aveiro background */}
      <div className="relative py-24 md:py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/iYC1g2I.jpeg" 
            alt="Ria de Aveiro" 
            className="w-full h-full object-cover blur-[12px] scale-110 opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950/95" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl md:text-center md:mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] text-white">
                Um ecossistema de <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8E8] to-[#015C81]">
                  alta performance
                </span>
              </h2>
              
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-12 md:mb-16 md:mx-auto max-w-2xl px-4 md:px-0">
                Somos movidos pela verdadeira sinergia de um grupo estruturado e coeso. Esta forte união confere a cada empresa da nossa operação o acesso a tecnologias de ponta, metodologias validadas e uma visão global inigualável.
              </p>

              <motion.img 
                src="https://i.imgur.com/GNRzwtE.png" 
                alt="Ecosystem Logos" 
                className="mx-auto w-full max-w-4xl object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_20px_rgba(0,168,232,0.3)] cursor-pointer"
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  filter: "drop-shadow(0 0 40px rgba(0,168,232,0.6)) grayscale(0%)" 
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Group Companies Section */}
      <div className="relative py-24 lg:py-32 overflow-hidden">
        {/* Decorative gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-100/50 rounded-full blur-[150px] mix-blend-multiply opacity-50 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[150px] mix-blend-multiply opacity-40 -translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-center text-center justify-center mb-12">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-[#015C81] mb-4">Empresas do Grupo</h3>
              <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Conheça as subsidiárias que integram a nossa holding,<br className="hidden md:block" /> unidas pela forte estrutura corporativa e total confiança operacional.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                user: '@fadastudio.pt',
                name: 'Fada Studio',
                img: 'https://i.imgur.com/3kxORIj.jpeg',
                feedImg: 'https://i.imgur.com/KoDITTU.png',
                imgClass: 'transform scale-[1.15] object-center',
                videoSrc: 'https://i.imgur.com/dKmXEmR.mp4',
                description: 'Construindo ecossistemas digitais que perpetuam. Inovação e visão de Portugal 🚀',
                tag1: '#Tecnologia',
                tag2: '#Portugal'
              },
              {
                user: '@idealcasanova.aveiro',
                name: 'Ideal Casa Nova',
                img: 'https://i.imgur.com/sWty6Di.jpeg',
                feedImg: 'https://i.imgur.com/hJuqomr.png',
                imgClass: 'transform scale-[1.15] object-center',
                videoSrc: 'https://i.imgur.com/tcbKEoh.mp4',
                description: 'Encontre a casa dos seus sonhos em Aveiro. Exclusividade, requinte e o melhor do mercado imobiliário 🗝️🏡',
                tag1: '#Imóveis',
                tag2: '#Aveiro'
              },
              {
                user: '@reduzacustos.pt',
                name: 'Reduza Custos',
                img: 'https://i.imgur.com/lbokrHa.jpeg',
                feedImg: 'https://i.imgur.com/GhXnQ1w.png',
                imgClass: 'transform scale-[1.12] object-center',
                videoSrc: 'https://i.imgur.com/xAiXHNg.mp4',
                description: 'Otimizamos os custos do seu negócio com eficiência e inteligência financeira 💡📊',
                tag1: '#Economia',
                tag2: '#Gestão'
              }
            ].map((partner) => (
              <PartnerCard key={partner.user} partner={partner} />
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

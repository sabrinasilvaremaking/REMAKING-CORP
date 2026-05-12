'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrainCircuit, Code2, Camera, Film, X, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Automação e IA',
    description: 'Soluções inovadoras que simplificam o dia a dia e otimizam processos essenciais.',
    details: 'Somos especialistas em simplificar a forma como as empresas operam. Através da inteligência artificial e automação, criamos sistemas otimizados que desempenham o trabalho complexo e repetitivo. O grande objetivo passa por otimizar o tempo e entregar resultados mensuráveis, refletindo o nosso rigor tecnológico.',
    icon: BrainCircuit,
    color: 'from-slate-700/30 to-slate-800/30',
    iconColor: 'text-purple-500',
    delay: 0.1,
  },
  {
    title: 'Tecnologia Avançada',
    description: 'Companhia de tecnologia avançada preparada para revolucionar as metodologias de mercado.',
    details: 'A nossa plataforma reflete diretamente a solidez e a forma de atuar da nossa organização. Focados no panorama das tecnologias de ponta, operamos como um parceiro estratégico que garante uma infraestrutura de excelência para todas as necessidades corporativas.',
    icon: Code2,
    color: 'from-zinc-700/30 to-zinc-800/30',
    iconColor: 'text-purple-500',
    delay: 0.2,
  },
  {
    title: 'Fotografia de Perfil',
    description: 'Imagens de alto impacto criadas para a evolução e consolidação da autoridade visual.',
    details: 'A imagem corporativa é elevada a uma estética irrepreensível. Mais do que fotografias convencionais, oferecemos retratos de alto nível. Cada detalhe é estrategicamente desenhado para favorecer uma expansão da perceção de valor em posições de liderança e na empresa em geral.',
    icon: Camera,
    color: 'from-gray-700/30 to-gray-800/30',
    iconColor: 'text-purple-500',
    delay: 0.3,
  },
  {
    title: 'Captação de Vídeos',
    description: 'Produções audiovisuais cinematográficas perspetivadas para impulsionar e liderar o setor.',
    details: 'Desenvolvemos abordagens audiovisuais focadas na afirmação do seu prestígio. Com um domínio total da videografia de topo, os materiais gerados atuam como ferramentas fundamentais para construir narrativas corporativas marcantes, que evidenciam o nível de autoridade e fomentam a expansão.',
    icon: Film,
    color: 'from-neutral-700/30 to-neutral-800/30',
    iconColor: 'text-purple-500',
    delay: 0.4,
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService]);

  return (
    <section id="services" className="py-24 md:py-32 relative bg-slate-950 overflow-hidden">
      {/* Elegant Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/80 to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-center md:text-left mx-auto md:mx-0"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              A nossa especialização
            </h2>
            <p className="text-base sm:text-lg text-blue-100/80 font-light leading-relaxed">
              Combinamos tecnologia profunda com sensibilidade estética para entregar produtos digitais e campanhas que redefinem mercados.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: service.delay }}
              onClick={() => setSelectedService(service)}
              className="group relative p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -mr-10 -mt-10 mix-blend-screen pointer-events-none transform-gpu`}
              />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 w-fit mb-8 group-hover:scale-110 transition-transform duration-500 ${service.iconColor}`}>
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="font-display text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-blue-100/70 leading-relaxed font-light mt-auto group-hover:text-blue-100/90 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/60 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 p-8 md:p-12"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-slate-50 hover:bg-slate-100 rounded-full flex items-center justify-center text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>

              <div className={`p-5 rounded-2xl bg-slate-50 border border-slate-100 w-fit mb-8 ${selectedService.iconColor}`}>
                <selectedService.icon size={40} strokeWidth={1.5} />
              </div>
              
              <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {selectedService.title}
              </h3>
              
              <p className="text-lg text-slate-500 leading-relaxed font-light mb-10">
                {selectedService.details}
              </p>

              <a href="#contact" onClick={() => setSelectedService(null)} className="inline-flex items-center text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 transition-colors px-6 py-3 rounded-full font-medium shadow-sm hover:shadow hover:-translate-y-0.5 duration-200">
                Falar sobre isso
                <ArrowRight size={18} className="ml-2" />
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

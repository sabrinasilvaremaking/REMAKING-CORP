'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery & Estratégia',
    description: 'Imersão profunda no ecossistema de negócio e mercado. Definição precisa e estratégica da arquitetura da solução.',
  },
  {
    num: '02',
    title: 'Design & UX',
    description: 'Prototipagem de alta fidelidade e direção de arte focada em assegurar uma experiência de utilizador impecável e visualmente impactante.',
  },
  {
    num: '03',
    title: 'Engenharia & Produção',
    description: 'Desenvolvimento tecnológico robusto e processos de produção de elevada qualidade. A visão ganha forma através de maestria técnica e rigor em cada detalhe.',
  },
  {
    num: '04',
    title: 'Lançamento & Crescimento',
    description: 'Entrega estruturada aliada a uma rigorosa monitorização de desempenho e a evoluções contínuas alavancadas por análise de dados.',
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 md:py-32 bg-white relative" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] to-white pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#015C81] mb-6">
            A Nossa Metodologia
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto px-4 md:px-0">
            Um processo refinado e comprovado, projetado para transformar ideias complexas em produtos digitais e peças criativas de excelência.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-6 md:left-[50%] top-0 bottom-0 w-px bg-gray-200 rounded-full md:-translate-x-1/2" />
          <motion.div 
            className="absolute left-6 md:left-[50%] top-0 bottom-0 w-[2px] bg-primary rounded-full md:-translate-x-1/2 origin-top"
            style={{ scaleY: lineHeight }}
          />

          <div className="space-y-16 md:space-y-32">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.num} className="relative flex flex-col md:flex-row items-center w-full">
                  
                  {/* Content Left (for even) / Empty Right (for odd) on Desktop */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'md:text-right md:pr-16 md:pl-0' : 'md:order-2 md:pl-16'}`}
                  >
                    <div className="text-primary font-display font-bold text-xl mb-2">{step.num}.</div>
                    <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed">{step.description}</p>
                  </motion.div>

                  {/* Center Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-20%' }}
                    transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                    className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary z-10 -translate-x-1/2 mt-1 md:mt-0 ${isEven ? 'md:order-1' : 'md:order-1'}`}
                  />
                  
                  {/* Empty matching div for Desktop Layout */}
                  <div className={`hidden md:block w-[45%] ${isEven ? 'md:order-2' : ''}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

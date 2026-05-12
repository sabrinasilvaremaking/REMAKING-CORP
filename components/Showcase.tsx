'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';

const cases = [
  {
    title: 'Automação e IA',
    category: 'Inteligência Artificial',
    image: 'https://i.pinimg.com/736x/4f/4a/11/4f4a1110573077a5ed78066f7dc10b4d.jpg',
    color: 'bg-violet-100',
    description: 'Soluções inovadoras que simplificam o dia a dia e executam o trabalho pesado por si. Recorrendo à inteligência artificial e automação, criamos ferramentas práticas que assumem as tarefas repetitivas, poupando o seu tempo e gerando resultados concretos de forma objetiva.',
  },
  {
    title: 'Tecnologia Avançada',
    category: 'Engenharia Web',
    image: 'https://i.pinimg.com/736x/f5/e8/72/f5e87230f73c9811d9f9a69feb392b5a.jpg',
    color: 'bg-blue-100',
    description: 'Companhia de tecnologia avançada preparada para revolucionar o ecossistema digital. A plataforma foi meticulosamente concebida para ilustrar a nossa infraestrutura corporativa, garantindo a entrega de tecnologia de ponta e reforçando o nosso posicionamento.',
  },
  {
    title: 'Fotografia & Vídeos',
    category: 'Filmagem & Fotografia',
    image: 'https://i.pinimg.com/736x/79/3e/3e/793e3e6a5e8c57f83464889afece04a9.jpg',
    color: 'bg-stone-100',
    description: 'Elevamos a sua autoridade ao máximo nível. Transformamos a perceção visual da sua marca e dos seus líderes através de fotografia e videografia de excelência, estratégias desenhadas rigorosamente para proporcionar um crescimento agressivo e domínio de mercado.',
  }
];

export default function Showcase() {
  const [selectedProject, setSelectedProject] = useState<typeof cases[0] | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="cases" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Elegant Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/80 to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Projetos <br className="hidden md:block" /> em destaque
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group block relative cursor-pointer hover:-translate-y-2 transition-transform duration-500"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-slate-800 border border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.2)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] transition-all duration-500`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full mix-blend-overlay opacity-80 group-hover:opacity-100 group-hover:scale-105 group-hover:mix-blend-normal transition-all duration-700 ease-[0.16,1,0.3,1]"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[0.16,1,0.3,1] border border-white/20 text-white">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-100/70">
                  {project.category}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white/90 group-hover:text-white transition-colors">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-slate-50 hover:bg-slate-100 rounded-full flex items-center justify-center text-slate-600 transition-colors shadow-sm"
              >
                <X size={20} />
              </button>

              <div className={`w-full md:w-1/2 aspect-square md:aspect-auto relative ${selectedProject.color}`}>
                <img 
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    {selectedProject.category}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                  <span className="text-sm font-medium text-slate-400">Projeto</span>
                </div>
                
                <h3 className="font-display text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                  {selectedProject.title}
                </h3>
                
                <p className="text-lg text-slate-500 leading-relaxed font-light">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';

const words = [
  "Inteligência Artificial",
  "•",
  "Engenharia de Software",
  "•",
  "Motion Graphics",
  "•",
  "Fotografia Premium",
  "•",
  "Soluções Escaláveis",
  "•",
  "Agentes Autônomos",
  "•",
  "Web3",
  "•",
  "UI/UX Design Avançado",
  "•",
];

export default function Marquee() {
  return (
    <div className="bg-slate-950 border-y border-slate-900/50 py-8 overflow-hidden relative flex selection:bg-white/30">
      <motion.div
        animate={{ x: [0, -1035] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        className="flex whitespace-nowrap"
      >
        {[...words, ...words, ...words].map((word, i) => (
          <span 
            key={i} 
            className={`text-2xl md:text-3xl font-display font-medium uppercase tracking-wider mx-6 ${word === '•' ? 'text-purple-500' : 'text-white'}`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

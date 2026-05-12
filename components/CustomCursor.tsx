'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    // Only activate if the device has a fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    document.body.classList.add('custom-cursor-active');

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target is interactive
      const isInteractable = 
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;
        
      setIsHovering(isInteractable);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isMounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000] overflow-hidden">
      {/* Large Blue Tint Circle */}
      <motion.div
        className="absolute top-0 left-0 w-16 h-16 bg-sky-400/40 backdrop-invert backdrop-saturate-150 shadow-[0_0_20px_rgba(56,189,248,0.2)] pointer-events-none rounded-full flex items-center justify-center"
        animate={{
          x: mousePosition.x - 32, // 64 / 2 = 32
          y: mousePosition.y - 32,
          scale: isHovering ? 1.2 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.6 }}
      >
        <motion.div 
          className="w-2 h-2 bg-sky-300 rounded-full shadow-[0_0_10px_rgba(125,211,252,0.8)]"
          animate={{
            scale: isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  );
}

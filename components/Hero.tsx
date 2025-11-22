import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image - Using '2.jpg' (Adventure of Swallow) as hero background suggestion */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background z-10"></div>
        <img 
          src="/images/2.jpg" 
          alt="Stage Background" 
          className="w-full h-full object-cover opacity-50"
          onError={(e) => {
            // Fallback if image not found
            (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/theatre_dark/1920/1080';
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-accent font-bold tracking-[0.3em] uppercase mb-6 text-sm md:text-base">
            The Story Weaver
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight text-primary">
            Kin Kong Lam
          </h1>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-lg md:text-xl text-secondary font-light leading-relaxed">
            <span>Screenwriter</span>
            <span className="text-accent hidden md:inline">•</span>
            <span>Drama Educator</span>
            <span className="text-accent hidden md:inline">•</span>
            <span>Developer</span>
          </div>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
           <a 
            href="#featured" 
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium tracking-tighter text-white bg-transparent border border-accent rounded-sm transition-all duration-300 hover:bg-accent"
           >
             <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
             <span className="relative">Explore Works</span>
           </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-secondary/50 w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
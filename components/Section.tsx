import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  background?: 'dark' | 'darker';
}

const Section: React.FC<SectionProps> = ({ id, className = "", children, title, subtitle, background = 'dark' }) => {
  const bgClass = background === 'darker' ? 'bg-background' : 'bg-surface';
  
  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 px-6 md:px-12 ${bgClass} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            {subtitle && (
              <span className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-2 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary leading-tight">
                {title}
              </h2>
            )}
            <div className="w-24 h-1 bg-accent mt-6 rounded-full"></div>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
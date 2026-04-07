import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'cream' | 'dark' | 'transparent';
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '', background = 'transparent' }) => {
  const bgClasses = {
    white: 'bg-white/90 backdrop-blur-sm', // Updated to allow watermark to show
    cream: 'bg-stone-50/80 backdrop-blur-sm',
    dark: 'bg-sunset-purple/95 text-white backdrop-blur-sm',
    transparent: 'bg-transparent',
  };

  return (
    <section id={id} className={`py-10 md:py-16 relative scroll-mt-28 ${bgClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className={`text-3xl md:text-5xl font-serif font-bold mb-3 ${background === 'dark' ? 'text-sunset-gold' : 'text-slate-900'}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-base md:text-xl max-w-2xl mx-auto font-light ${background === 'dark' ? 'text-white/80' : 'text-slate-600'}`}>
              {subtitle}
            </p>
          )}
          <div className="w-20 h-1 bg-gradient-to-r from-sunset-orange via-sunset-gold to-sunset-purple mx-auto mt-6 rounded-full opacity-80"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
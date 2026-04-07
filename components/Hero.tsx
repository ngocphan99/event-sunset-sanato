import React, { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleScrollToProcess = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <img 
          src="/images/sunset-sanato-overview.webp" 
          alt="Sunset Sanato Resort - Elephants on beach" 
          className="w-full h-full object-cover scale-110"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-sunset-purple/40 to-sunset-orange/30 mix-blend-overlay"></div>
      </motion.div>

      <motion.div 
        style={{ y: yText }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1.5 px-5 border border-white/40 bg-white/10 backdrop-blur-md rounded-full text-white/95 text-xs md:text-sm font-semibold tracking-[0.2em] mb-8 uppercase shadow-lg">
            HƯỚNG DẪN ĐẶT TIỆC 2026
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-2xl"
        >
          Tinh Hoa Sự Kiện <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-sunset-gold to-orange-200" style={{ textShadow: '0 0 40px rgba(212, 175, 55, 0.4)' }}>
            Tại Đảo Ngọc
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md"
        >
          Khám phá không gian tiệc tối lãng mạn dưới ánh hoàng hôn đẹp nhất Phú Quốc cùng quy trình báo giá chuyên nghiệp cho đối tác.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a 
            href="#process"
            onClick={handleScrollToProcess}
            className="group bg-white/90 hover:bg-white text-sunset-purple px-10 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-black/20 flex items-center justify-center gap-3"
          >
            <span>Quy Trình Báo Giá</span>
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform"/>
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-sunset-sand/30 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
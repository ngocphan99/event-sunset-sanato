import React from 'react';
import Section from './ui/Section';
import { SOUND_PACKAGES, SOUND_ADDONS } from '../constants';
import { Music, Zap, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface PackageCardProps {
  item: typeof SOUND_PACKAGES[number];
  index: number;
}

const PackageCard: React.FC<PackageCardProps> = ({ item, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100 flex flex-col h-full hover:shadow-2xl hover:border-sunset-orange/20 transition-all duration-300 group relative overflow-hidden"
  >
    {/* Decorative gradient blob */}
    <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

    <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-orange-50 text-sunset-orange rounded-2xl flex items-center justify-center mb-2 shadow-sm group-hover:bg-sunset-orange group-hover:text-white transition-colors">
              <Music size={24} />
            </div>
            <div className="text-right">
                <div className="text-2xl font-serif text-sunset-orange font-bold leading-none">{item.price}</div>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">VNĐ / Gói</span>
            </div>
        </div>

        <h4 className="font-bold text-xl text-slate-800 leading-tight mb-1 font-serif group-hover:text-sunset-orange transition-colors">{item.title}</h4>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-6 bg-slate-50 inline-block py-1 px-2 rounded w-fit border border-slate-100">
            {item.capacity}
        </p>
        
        <div className="w-full border-t border-dashed border-slate-200 my-2"></div>
        
        {/* Equipment List - Always Visible */}
        <ul className="space-y-3 mt-4 flex-grow">
            {item.equipment.map((eq, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <div className="mt-1 shrink-0 text-sunset-gold">
                        <Check size={14} strokeWidth={3} />
                    </div>
                    <span>{eq}</span>
                </li>
            ))}
        </ul>
    </div>
  </motion.div>
);

const SoundLighting = () => {
  return (
    <Section id="sound" title="Âm thanh & Ánh sáng" subtitle="Hệ thống ATAS chuyên nghiệp cho sự kiện thăng hoa" background="white">
      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16 items-stretch">
        {SOUND_PACKAGES.map((pkg, idx) => (
          <PackageCard key={idx} item={pkg} index={idx} />
        ))}
      </div>

      {/* Add-ons Section - Light & Luxurious */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-[24px] p-8 md:p-10 border border-sunset-gold/30 shadow-2xl relative overflow-hidden">
           {/* Background Texture */}
           <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sunset-orange via-sunset-gold to-sunset-orange"></div>

           <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              
              {/* Header */}
              <div className="md:w-1/3 flex flex-col gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-sunset-gold to-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                  <Zap size={28} fill="currentColor" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-serif">Dịch vụ cộng thêm</h3>
                  <p className="text-slate-500 text-sm mt-1">Nâng cấp trải nghiệm sự kiện với các hạng mục giải trí và kỹ thuật chuyên sâu.</p>
                </div>
              </div>

              {/* List */}
              <div className="md:w-2/3 w-full bg-slate-50/80 rounded-2xl p-6 border border-slate-100">
                <div className="space-y-4">
                  {SOUND_ADDONS.map((addon, idx) => (
                    <div key={idx} className="flex justify-between items-center pb-3 border-b border-slate-200/60 last:border-0 last:pb-0 group">
                      <span className="text-slate-700 font-medium text-sm group-hover:text-sunset-orange transition-colors flex items-center gap-2">
                         <Sparkles size={12} className="text-slate-300 group-hover:text-sunset-gold" />
                         {addon.name}
                      </span>
                      <span className="text-slate-900 font-bold font-serif text-sm whitespace-nowrap">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>

           </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default SoundLighting;
import React from 'react';
import Section from './ui/Section';
import { MapPin, Utensils, Music, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const StepCard = ({ number, icon: Icon, title, desc, delay }: { number: string, icon: any, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative flex-1 glass-card p-8 rounded-3xl hover:bg-white/80 transition-all duration-300 group"
  >
    <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-sunset-orange to-red-500 text-white rounded-2xl rotate-3 group-hover:rotate-12 transition-transform flex items-center justify-center text-2xl font-serif font-bold shadow-lg shadow-orange-500/30">
      {number}
    </div>
    <div className="mb-6 text-sunset-purple group-hover:scale-110 transition-transform duration-500 origin-left">
      <Icon size={48} strokeWidth={1.2} />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">{title}</h3>
    <p className="text-slate-600 text-base leading-relaxed">{desc}</p>
  </motion.div>
);

const Process = () => {
  return (
    <Section id="process" title="Quy trình chuẩn hóa" subtitle="3 Bước đơn giản để xây dựng báo giá hoàn chỉnh cho khách hàng">
      <div className="flex flex-col md:flex-row gap-12 relative px-4">
        <StepCard 
          number="01"
          icon={MapPin}
          title="Chọn Địa Điểm"
          desc="Xác định số lượng khách để lựa chọn không gian tiệc ngoài trời hoặc trong nhà. Kiểm tra phí địa điểm tương ứng."
          delay={0}
        />
        <StepCard 
          number="02"
          icon={Utensils}
          title="Tiệc & Đồ uống"
          desc="Lựa chọn thực đơn (Set/Buffet/BBQ) và gói đồ uống (Free-flow). Lưu ý phí phục vụ và thuế."
          delay={0.2}
        />
        <StepCard 
          number="03"
          icon={Music}
          title="Âm thanh & Ánh sáng"
          desc="Chọn gói ATAS cơ bản hoặc nâng cao. Bổ sung các hạng mục giải trí như DJ, Múa lửa, LED."
          delay={0.4}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 bg-white/50 backdrop-blur-sm border border-white/60 rounded-xl p-6 flex items-start gap-4 max-w-3xl mx-auto shadow-sm"
      >
        <CheckCircle className="text-sunset-orange flex-shrink-0 mt-1" size={24} />
        <p className="text-slate-700 text-sm md:text-base leading-relaxed">
          <strong className="text-sunset-purple">Lưu ý quan trọng:</strong> Hướng dẫn này giúp đại lý tự tính toán chi phí ước tính (Estimate). Để có báo giá chính xác và kiểm tra tình trạng trống của sảnh tiệc, vui lòng liên hệ bộ phận Sales trước khi chốt với khách hàng.
        </p>
      </motion.div>
    </Section>
  );
};

export default Process;
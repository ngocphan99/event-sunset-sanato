import React from 'react';
import Section from './ui/Section';
import { TEAM_BUILDING, MEETING } from '../constants';
import { Users, Briefcase, Flame, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const Addons = () => {
  return (
    <Section id="addons" title="Dịch vụ mở rộng" background="transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto px-4">
        
        {/* Team Building */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="glass-card p-8 md:p-10 rounded-3xl border border-white/60 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-2xl shadow-lg shadow-orange-500/20">
              <Users size={32} />
            </div>
            <div>
               <h3 className="text-2xl font-bold text-slate-900 font-serif">Team Building</h3>
               <p className="text-slate-500 text-sm">Hoạt động gắn kết đội ngũ</p>
            </div>
          </div>
          <ul className="space-y-5 flex-grow">
            {TEAM_BUILDING.map((item, idx) => (
              <li key={idx} className="flex justify-between items-start pb-4 border-b border-slate-100 last:border-0 last:pb-0 gap-4">
                <span className="text-slate-700 font-medium text-sm md:text-base leading-tight">{item.name}</span>
                <span className="font-bold text-sunset-orange whitespace-nowrap">{item.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Meeting */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="glass-card p-8 md:p-10 rounded-3xl border border-white/60 flex flex-col"
        >
           <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg shadow-blue-500/20">
              <Briefcase size={32} />
            </div>
            <div>
               <h3 className="text-2xl font-bold text-slate-900 font-serif">Hội Nghị (Meeting)</h3>
               <p className="text-slate-500 text-sm">Không gian họp chuyên nghiệp</p>
            </div>
          </div>
          <ul className="space-y-5 mb-8">
            {MEETING.map((item, idx) => (
              <li key={idx} className="flex justify-between items-center pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                <span className="text-slate-700 font-medium">{item.name}</span>
                <span className="font-bold text-sunset-orange">{item.price}</span>
              </li>
            ))}
          </ul>

          <div className="bg-slate-50/80 p-5 rounded-xl border border-slate-100 mt-auto">
              <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                Quyền lợi gói họp (Standard)
              </h4>
              <div className="text-sm text-slate-600 space-y-2 pl-2 border-l-2 border-slate-200">
                <p>• Phòng họp setup theo tiêu chuẩn (Classroom/Theatre)</p>
                <p>• Âm thanh, ánh sáng thuyết trình cơ bản</p>
                <p>• Giấy, bút, nước suối, kẹo bạc hà</p>
                <p>• 01 Màn chiếu & Máy chiếu</p>
                <p>• Flipchart, bút viết bảng</p>
              </div>
              
              <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-start gap-2">
                <Info size={14} className="text-slate-400 mt-0.5 shrink-0" />
                <p className="text-xs text-slate-500 italic">
                  Số lượng áp dụng phòng họp tối thiểu là từ 30 khách trở lên.
                </p>
              </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
};

export default Addons;
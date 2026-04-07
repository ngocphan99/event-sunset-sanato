import React, { useState } from 'react';
import Section from './ui/Section';
import { MENUS, DRINK_ALACARTE, DRINK_FREEFLOW, DRINK_CORKAGE } from '../constants';
import { FileText, ChevronRight, Info, Users, Utensils, GlassWater, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuLinkProps {
  name: string;
  link: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ name, link }) => (
  <motion.a 
    whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.9)' }}
    href={link} 
    target="_blank"
    rel="noreferrer" 
    className="group flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white shadow-sm hover:shadow-md transition-all cursor-pointer"
  >
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-orange-100 text-sunset-orange flex items-center justify-center group-hover:bg-sunset-orange group-hover:text-white transition-colors shadow-inner">
        <FileText size={18} />
      </div>
      <span className="font-medium text-slate-800 group-hover:text-sunset-orange transition-colors">{name}</span>
    </div>
    <ChevronRight size={18} className="text-slate-400 group-hover:text-sunset-orange" />
  </motion.a>
);

const Banquet = () => {
  const [drinkTab, setDrinkTab] = useState<'alacarte' | 'freeflow' | 'corkage'>('freeflow');

  return (
    <Section id="banquet" title="Tinh hoa Ẩm thực" subtitle="Thực đơn phong phú từ Á sang Âu, phục vụ chu đáo" background="cream">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* Left Column: Menus & Policies (Span 7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Menus Grid */}
          <div className="glass-card p-8 rounded-2xl relative flex-grow">
            <h3 className="font-bold text-2xl text-slate-900 mb-6 font-serif flex items-center gap-3">
              <span className="w-8 h-1 bg-sunset-orange rounded-full"></span>
              Menu Tham Khảo
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MENUS.map((menu, idx) => (
                <MenuLink key={idx} name={menu.name} link={menu.link} />
              ))}
            </div>
          </div>

          {/* Internal Policy Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-sunset-orange/20 rounded-2xl p-6 flex flex-col md:flex-row gap-6 shadow-sm"
          >
            {/* Visual/Icon Area */}
            <div className="flex-shrink-0 flex md:flex-col items-center gap-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-sunset-orange shadow-inner">
                    <Users size={24} />
                </div>
                <span className="text-[10px] font-bold text-sunset-orange uppercase tracking-wider text-center hidden md:block bg-orange-50 px-2 py-1 rounded-full">Staff Policy</span>
            </div>

            {/* Text Area */}
            <div className="flex-grow">
                <h4 className="font-serif font-bold text-lg text-slate-900 mb-3 border-b border-dashed border-slate-200 pb-2 flex items-center justify-between">
                  Chính sách hỗ trợ nội bộ
                  <span className="md:hidden text-[10px] font-bold text-sunset-orange uppercase tracking-wider bg-orange-50 px-2 py-1 rounded-full">Staff Policy</span>
                </h4>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <div className="mt-0.5 bg-green-100 text-green-600 rounded-full p-0.5 shrink-0">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-sm text-slate-700">
                            <strong className="text-slate-900">Suất ăn nội bộ miễn phí:</strong> Cứ <strong>10</strong> khách = <strong>01</strong> suất ăn theo tiêu chuẩn nội bộ.
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-0.5 bg-orange-100 text-sunset-orange rounded-full p-0.5 shrink-0">
                           <Utensils size={14} strokeWidth={2.5} />
                        </div>
                        <div className="text-sm text-slate-700">
                            <strong className="text-slate-900">Suất đặt thêm:</strong> <span className="text-sunset-orange font-bold text-base">80,000 VNĐ</span> / suất.
                        </div>
                    </li>
                </ul>
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 italic bg-slate-50/80 p-2.5 rounded-lg border border-slate-100">
                    <Info size={14} className="shrink-0" /> Chỉ áp dụng cùng ngày đoàn có đặt dịch vụ ăn uống.
                </div>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Drinks (Span 5) - REDESIGNED 3-Col Layout */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 h-full flex flex-col">
            
            {/* Header */}
            <div className="p-8 bg-slate-900 relative overflow-hidden flex-shrink-0">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-sunset-orange/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>
               
               <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-3xl font-serif mb-1 text-sunset-gold">Bar & Drinks</h3>
                    <p className="text-slate-400 text-sm font-light">Gói đồ uống & phí phục vụ</p>
                  </div>
                  <GlassWater className="text-white/20" size={48} />
               </div>
            </div>
            
            {/* Tabs */}
            <div className="px-6 pt-6 pb-2 bg-white flex-shrink-0">
              <div className="flex p-1 bg-stone-100 rounded-xl gap-1">
                {[
                  { id: 'freeflow', label: 'Free-flow' },
                  { id: 'alacarte', label: 'A-la-carte' },
                  { id: 'corkage', label: 'Phí mang vào' }
                ].map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setDrinkTab(tab.id as any)}
                    className={`flex-1 py-2 rounded-lg text-xs md:text-sm font-bold transition-all shadow-sm ${drinkTab === tab.id ? 'bg-white text-sunset-orange shadow-md ring-1 ring-black/5' : 'text-slate-500 hover:bg-white/50 hover:text-slate-700 shadow-transparent'}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 bg-white flex-grow flex flex-col">
              <AnimatePresence mode="wait">
                {drinkTab === 'freeflow' && (
                  <motion.div 
                    key="freeflow"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col h-full"
                  >
                    <div className="flex items-center gap-2 mb-6 text-xs text-slate-500 bg-stone-50 p-3 rounded-lg border border-stone-200">
                      <Info size={14} className="text-sunset-orange"/>
                      <span>Giá chưa bao gồm thuế phí (++). Tính theo đầu người.</span>
                    </div>
                    
                    {/* Header Row for 3 Columns */}
                    <div className="hidden md:grid grid-cols-10 gap-2 mb-2 px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        <div className="col-span-5">Gói đồ uống</div>
                        <div className="col-span-3 text-right">Giá / Pax</div>
                        <div className="col-span-2 text-right">Thêm giờ</div>
                    </div>

                    <div className="space-y-4 md:space-y-0">
                      {DRINK_FREEFLOW.map((item, idx) => (
                        <div key={idx} className="group md:grid md:grid-cols-10 md:gap-2 md:items-start py-4 border-b border-dashed border-stone-100 last:border-0 hover:bg-stone-50 md:px-2 rounded-lg transition-colors">
                          
                          {/* Col 1: Name & Desc */}
                          <div className="col-span-5 mb-2 md:mb-0 pr-2">
                             <div className="font-bold text-slate-800 text-base font-serif group-hover:text-sunset-orange transition-colors">{item.name}</div>
                             <div className="text-xs text-slate-500 font-light mt-1 leading-relaxed line-clamp-3">
                                {item.description}
                             </div>
                          </div>

                          {/* Col 2: Price */}
                          <div className="col-span-3 flex justify-between md:block md:text-right mb-1 md:mb-0">
                             <span className="md:hidden text-xs font-bold text-slate-400">Giá:</span>
                             <span className="text-sunset-orange font-bold text-base">{item.price}</span>
                          </div>

                          {/* Col 3: Extra */}
                          <div className="col-span-2 flex justify-between md:block md:text-right">
                             <span className="md:hidden text-xs font-bold text-slate-400">Thêm giờ:</span>
                             {item.extra ? (
                               <span className="text-xs font-medium text-slate-600 bg-stone-100 px-1.5 py-0.5 rounded">{item.extra}</span>
                             ) : (
                               <span>-</span>
                             )}
                          </div>

                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {drinkTab === 'alacarte' && (
                  <motion.div 
                    key="alacarte"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                     <div className="space-y-5">
                      {DRINK_ALACARTE.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-end group">
                          <span className="font-medium text-slate-700 text-base">{item.name}</span>
                          <span className="flex-grow border-b-2 border-dotted border-slate-300 mx-3 mb-1.5 opacity-40"></span>
                          <span className="text-slate-900 font-bold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {drinkTab === 'corkage' && (
                  <motion.div 
                    key="corkage"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="space-y-5">
                      {DRINK_CORKAGE.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-end group hover:bg-stone-50 p-1 rounded transition-colors -mx-1 px-1">
                          <span className="font-medium text-slate-700 text-base">{item.name}</span>
                          <span className="flex-grow border-b-2 border-dotted border-slate-300 mx-3 mb-1.5 opacity-40"></span>
                          <span className="text-slate-900 font-bold whitespace-nowrap">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-8 text-[10px] text-center text-slate-400 italic">
                        * Phí phục vụ áp dụng khi khách mang đồ uống từ bên ngoài vào.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Banquet;
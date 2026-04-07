import React, { useState } from 'react';
import Section from './ui/Section';
import { WEDDING_PACKAGES, WEDDING_INCLUSIONS, WEDDING_AV, MENUS, DRINK_ALACARTE, DRINK_FREEFLOW } from '../constants';
import { Check, Star, Heart, Music2, Flower2, ArrowDown, FileText, ChevronRight, Info, GlassWater, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MenuLink: React.FC<{ name: string; link: string }> = ({ name, link }) => (
  <motion.a 
    whileHover={{ x: 5 }}
    href={link} 
    target="_blank"
    rel="noreferrer" 
    className="flex items-center justify-between p-4 bg-stone-50 rounded-xl border border-stone-100 hover:bg-white hover:border-sunset-orange/30 hover:shadow-md transition-all cursor-pointer group"
  >
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-white text-sunset-orange flex items-center justify-center border border-stone-100 group-hover:bg-sunset-orange group-hover:text-white transition-colors">
        <FileText size={18} />
      </div>
      <span className="font-medium text-slate-800 group-hover:text-sunset-orange transition-colors">{name}</span>
    </div>
    <ChevronRight size={18} className="text-slate-400 group-hover:text-sunset-orange" />
  </motion.a>
);

const Wedding = () => {
  const [drinkTab, setDrinkTab] = useState<'alacarte' | 'freeflow'>('freeflow');

  const handleScrollToPackages = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('wedding-packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const foodMenus = MENUS.filter(m => m.name === "Menu Gala tiệc" || m.name === "BBQ Buffet");

  return (
    <div className="pt-20">
      {/* Wedding Hero */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* 
            User should place their hero image at /public/images/wedding-hero.webp 
            Fallback to Unsplash if missing 
          */}
          <img 
            src="/images/wedding-hero.jpg" 
            alt="Wedding at Sunset Sanato" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519225468359-2996bc01c32c?q=80&w=2070&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-sunset-gold drop-shadow-lg">Wedding</h1>
            <p className="text-2xl md:text-4xl font-light italic font-serif mb-10">Packages</p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a 
                href="#wedding-packages"
                onClick={handleScrollToPackages}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/50 rounded-full text-white font-medium tracking-wide transition-all group"
              >
                Xem chi tiết gói
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Section id="wedding-packages" title="Gói Tiệc Cưới | Wedding Packages" subtitle="Say ‘I do’ dưới ánh hoàng hôn nơi biển cả." background="cream">
        
        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 px-4 mb-20 relative z-10">
          {WEDDING_PACKAGES.map((pkg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative bg-white rounded-3xl shadow-xl flex flex-col items-center text-center p-8 pt-24 mt-20 border transition-all hover:-translate-y-2 hover:shadow-2xl ${pkg.highlight ? 'border-amber-300 ring-4 ring-amber-100' : 'border-stone-100'}`}
            >
              {/* Circular Image Overlay */}
              <div className="absolute -top-20 w-40 h-40 rounded-full p-2 bg-white shadow-xl">
                 <div className="w-full h-full rounded-full overflow-hidden">
                    <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"/>
                 </div>
                 {pkg.highlight && (
                   <div className="absolute -right-2 top-0 bg-sunset-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                     <Star size={12} fill="currentColor" /> Best Choice
                   </div>
                 )}
              </div>

              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">{pkg.name}</h3>
              
              <div className="text-3xl md:text-4xl font-bold text-sunset-orange font-serif mb-6 flex items-start justify-center gap-1">
                <span className="text-sm text-slate-400 mt-2 font-sans font-normal">VND</span>
                {pkg.price}
              </div>

              <div className="w-full h-px bg-slate-100 mb-6"></div>

              <div className="space-y-2 mb-8 flex-grow">
                <p className="text-sm font-bold text-slate-800 uppercase tracking-wide">{pkg.desc}</p>
                <p className="text-xs text-slate-500 italic">{pkg.subDesc}</p>
              </div>

              <button className={`w-full py-3 rounded-xl font-bold transition-all ${pkg.highlight ? 'bg-gradient-to-r from-sunset-gold to-amber-600 text-white shadow-lg shadow-amber-500/30' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                Liên hệ đặt gói | Contact Us
              </button>
            </motion.div>
          ))}
        </div>

        {/* Inclusions Detail */}
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative overflow-hidden mb-24">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sunset-orange via-sunset-gold to-sunset-purple"></div>
          
          <div className="text-center mb-10">
             <h3 className="text-3xl font-serif font-bold text-slate-800 mb-2 uppercase tracking-widest">Bao Gồm | Include</h3>
             <div className="w-12 h-1 bg-sunset-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
            {WEDDING_INCLUSIONS.map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.05 }}
                 className="flex items-start gap-3 p-3 hover:bg-orange-50/50 rounded-lg transition-colors"
               >
                  <div className="mt-1 text-sunset-gold shrink-0">
                    {item.toLowerCase().includes("âm thanh") ? <Music2 size={18} /> : 
                     item.toLowerCase().includes("hoa") ? <Flower2 size={18} /> : 
                     <Check size={18} strokeWidth={3} />}
                  </div>
                  <span className="text-slate-700 text-sm md:text-base leading-relaxed">{item}</span>
               </motion.div>
            ))}
          </div>

          <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
             <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Music2 size={20} className="text-sunset-orange" />
                Hệ thống âm thanh, ánh sáng tiêu chuẩn (Standard AV system):
             </h4>
             <div className="flex flex-wrap gap-3">
                {WEDDING_AV.map((item, idx) => (
                  <span key={idx} className="bg-white px-3 py-1.5 rounded-full border border-stone-200 text-xs md:text-sm text-slate-600 shadow-sm">
                    {item}
                  </span>
                ))}
             </div>
          </div>
        </div>

        {/* F&B Section */}
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-3">Dịch Vụ F&B (Chưa Bao Gồm) | F&B Services (Excluded)</h3>
                <p className="text-slate-500 text-lg">Lựa chọn thực đơn tiệc và gói đồ uống phù hợp | Select your dining menu and beverage package</p>
                <div className="w-20 h-1 bg-stone-200 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                
                {/* Left: Food Menu - Light Card */}
                <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-xl flex flex-col h-full hover:shadow-2xl transition-all duration-300">
                     <div className="flex items-center gap-5 mb-8 pb-6 border-b border-stone-100">
                        <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-sunset-orange shadow-inner">
                            <Utensils size={28} />
                        </div>
                        <div>
                            <h4 className="font-bold text-2xl text-slate-900 font-serif">Thực Đơn Tiệc | Dining Menu</h4>
                            <p className="text-slate-400 mt-1 text-sm">Most popular menu selections for weddings</p>
                        </div>
                     </div>
                     
                     <div className="space-y-4 flex-grow">
                        {foodMenus.map((menu, idx) => (
                            <MenuLink key={idx} name={menu.name} link={menu.link} />
                        ))}
                     </div>

                     <div className="mt-8 pt-6 border-t border-dashed border-stone-200">
                        <div className="flex gap-3">
                            <Info size={20} className="text-sunset-gold shrink-0 mt-1" />
                            <p className="text-sm text-slate-500 leading-relaxed italic">
                                Giá menu chưa bao gồm đồ uống.<br/>
                                <span className="opacity-80">Menu price excludes beverages.</span>
                            </p>
                        </div>
                     </div>
                </div>

                {/* Right: Drinks - Light Card (Consistent Design) */}
                <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-xl flex flex-col h-full hover:shadow-2xl transition-all duration-300">
                    
                    {/* Header */}
                    <div className="flex items-center gap-5 mb-8 pb-6 border-b border-stone-100">
                       <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shadow-inner">
                            <GlassWater size={28} />
                       </div>
                       <div>
                            <h4 className="font-bold text-2xl text-slate-900 font-serif">Đồ Uống | Beverage</h4>
                            <p className="text-slate-400 mt-1 text-sm">Beverage Packages & Service Charges</p>
                       </div>
                    </div>
                    
                    {/* Tabs */}
                    <div className="mb-6">
                      <div className="flex p-1 bg-stone-50 rounded-xl gap-1 border border-stone-100">
                        {[
                          { id: 'freeflow', label: 'Free-flow Package' },
                          { id: 'alacarte', label: 'A-la-carte Menu' }
                        ].map((tab) => (
                          <button 
                            key={tab.id}
                            onClick={() => setDrinkTab(tab.id as any)}
                            className={`flex-1 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all shadow-sm ${drinkTab === tab.id ? 'bg-white text-sunset-orange shadow-md ring-1 ring-black/5' : 'text-slate-500 hover:bg-white/50 hover:text-slate-700 shadow-transparent'}`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-grow flex flex-col">
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
                            <div className="flex items-start gap-2 mb-6 text-xs text-slate-500 bg-stone-50 p-3 rounded-lg border border-stone-100 italic">
                              <Info size={14} className="text-sunset-orange shrink-0 mt-0.5"/>
                              <span>Giá chưa bao gồm thuế phí (++). Tính theo đầu người.<br/>Prices exclude taxes and fees (++). Per person calculation.</span>
                            </div>
                            
                            <div className="hidden md:grid grid-cols-10 gap-2 mb-3 px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-stone-100 pb-2">
                                <div className="col-span-5">Gói | Package</div>
                                <div className="col-span-3 text-right">Giá | Price</div>
                                <div className="col-span-2 text-right">Thêm giờ | Extra Hr</div>
                            </div>

                            <div className="space-y-4 md:space-y-0">
                              {DRINK_FREEFLOW.map((item, idx) => (
                                <div key={idx} className="group md:grid md:grid-cols-10 md:gap-2 md:items-start py-4 border-b border-dashed border-stone-100 last:border-0 hover:bg-stone-50 md:px-2 rounded-lg transition-colors">
                                  <div className="col-span-5 mb-2 md:mb-0 pr-2">
                                     <div className="font-bold text-slate-800 text-base font-serif group-hover:text-sunset-orange transition-colors">{item.name}</div>
                                     <div className="text-xs text-slate-500 font-light mt-1 leading-relaxed line-clamp-3">
                                        {item.description}
                                     </div>
                                  </div>
                                  <div className="col-span-3 flex justify-between md:block md:text-right mb-1 md:mb-0">
                                     <span className="md:hidden text-xs font-bold text-slate-400">Giá | Price:</span>
                                     <span className="text-sunset-orange font-bold text-base">{item.price}</span>
                                  </div>
                                  <div className="col-span-2 flex justify-between md:block md:text-right">
                                     <span className="md:hidden text-xs font-bold text-slate-400">Thêm giờ | Extra:</span>
                                     {item.extra ? (
                                       <span className="text-xs font-medium text-slate-600 bg-white border border-stone-200 px-1.5 py-0.5 rounded">{item.extra}</span>
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
                             <div className="space-y-5 mt-2">
                              {DRINK_ALACARTE.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-end group">
                                  <span className="font-medium text-slate-700 text-base">{item.name}</span>
                                  <span className="flex-grow border-b-2 border-dotted border-slate-300 mx-3 mb-1.5 opacity-40"></span>
                                  <span className="text-slate-900 font-bold">{item.price}</span>
                                </div>
                              ))}
                            </div>
                             <div className="mt-8 pt-4 border-t border-dashed border-stone-200 text-center">
                                <p className="text-xs text-slate-400 italic">Giá tính theo đơn vị ly/lon/chai.<br/>Price per glass/can/bottle.</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>

      </Section>
    </div>
  );
};

export default Wedding;
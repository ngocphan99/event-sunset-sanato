import React from 'react';
import Section from './ui/Section';
import { VENUES } from '../constants';
import { Maximize2, Users, Monitor, ArrowRight, Star, Sunset, Info, CheckCircle2, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

interface VenueCardProps {
  venue: typeof VENUES[number];
  index: number;
  isFeatured?: boolean;
}

const VenueCard: React.FC<VenueCardProps> = ({ venue, index, isFeatured = false }) => {
  if (isFeatured) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="col-span-1 md:col-span-2 lg:col-span-3 mb-8 md:mb-12"
      >
        <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 border border-stone-100 flex flex-col md:flex-row relative min-h-[550px]">
            {/* Special Badge */}
            <div className="absolute top-0 left-0 bg-sunset-orange text-white text-xs font-bold px-4 py-2 rounded-br-2xl z-20 shadow-md flex items-center gap-2">
                <Star size={14} fill="currentColor" /> SIGNATURE VENUE
            </div>

            {/* Image Section - Larger & Landscape - Perfect for Panorama */}
            {/* Added md:min-h-full to ensure it stretches to match content, and h-80 on mobile for better view */}
            <div className="md:w-3/5 relative h-80 md:h-auto md:min-h-full overflow-hidden bg-slate-100">
                <div className="absolute top-4 right-4 z-10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md bg-sunset-orange/90 flex items-center gap-1">
                    <Sunset size={14} /> Best Sunset View
                </div>
                <img 
                    src={venue.image} 
                    alt={venue.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to a Beach Sunset image if the main image fails (CORS or 404)
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1616054832561-c89e7c3b0632?q=80&w=2070&auto=format&fit=crop"; 
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="md:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-orange-50/50 to-white relative">
                <div className="mb-8">
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 font-serif mb-4 leading-tight">{venue.name}</h3>
                    <div className="w-24 h-1.5 bg-sunset-orange rounded-full mb-6"></div>
                    <p className="text-slate-600 italic text-lg leading-relaxed">"Tuyệt tác bên bờ biển với sức chứa lớn, nơi hoàng hôn buông xuống làm nền cho những sự kiện đẳng cấp."</p>
                </div>

                <div className="space-y-5 text-slate-700 mb-10">
                    <div className="flex justify-between items-center pb-3 border-b border-orange-100/50">
                        <span className="flex items-center gap-3 text-slate-500 text-base"><Users size={22} className="text-sunset-orange"/> Sức chứa</span>
                        <span className="font-bold text-2xl">{venue.capacity} pax</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-orange-100/50">
                        <span className="flex items-center gap-3 text-slate-500 text-base"><Maximize2 size={22} className="text-sunset-orange"/> Sân khấu</span>
                        <span className="font-medium text-lg text-right">{venue.stage}</span>
                    </div>
                    {/* Added Backdrop Row for Featured Card */}
                    <div className="flex justify-between items-center pb-3 border-b border-orange-100/50">
                        <span className="flex items-center gap-3 text-slate-500 text-base"><Monitor size={22} className="text-sunset-orange"/> Backdrop</span>
                        <span className="font-medium text-lg text-right">{venue.backdrop}</span>
                    </div>
                </div>

                <a 
                    href={venue.link} 
                    target="_blank" 
                    rel="noreferrer"
                    onClick={(e) => venue.link === '#' && e.preventDefault()}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-sunset-orange to-red-500 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all transform hover:-translate-y-1 group-hover:scale-[1.02]"
                >
                    Xem hình ảnh thực tế <ArrowRight size={20} />
                </a>
            </div>
        </div>
      </motion.div>
    );
  }

  // Standard Card
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-stone-100 flex flex-col h-full"
    >
      <div className="relative h-60 overflow-hidden bg-slate-100">
        <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-md ${venue.type === 'Indoor' ? 'bg-sunset-purple/90' : 'bg-slate-700/80'}`}>
          {venue.type}
        </div>
        <img 
          src={venue.image} 
          alt={venue.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white font-serif mb-1 leading-tight">{venue.name}</h3>
          <div className="w-8 h-1 bg-sunset-orange rounded-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col bg-white">
        <div className="space-y-3 text-sm text-slate-600 mb-6 flex-grow">
          <div className="flex justify-between items-center pb-2 border-b border-slate-50">
            <span className="flex items-center gap-2 text-slate-400 text-xs"><Users size={16} className="text-sunset-gold"/> Sức chứa</span>
            <span className="font-bold text-slate-800">{venue.capacity} pax</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-slate-50">
            <span className="flex items-center gap-2 text-slate-400 text-xs"><Maximize2 size={16} className="text-sunset-gold"/> Sân khấu</span>
            <span className="font-medium text-slate-800 text-right text-xs">{venue.stage}</span>
          </div>
          {/* Added Backdrop Row for Standard Card */}
          <div className="flex justify-between items-center pb-2 border-b border-slate-50">
            <span className="flex items-center gap-2 text-slate-400 text-xs"><Monitor size={16} className="text-sunset-gold"/> Backdrop</span>
            <span className="font-medium text-slate-800 text-right text-xs">{venue.backdrop}</span>
          </div>
        </div>

        <a 
          href={venue.link} 
          target="_blank" 
          rel="noreferrer"
          onClick={(e) => venue.link === '#' && e.preventDefault()}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs md:text-sm font-bold transition-all transform active:scale-95 ${venue.link === '#' ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-sunset-orange hover:shadow-lg hover:shadow-orange-500/20'}`}
        >
          {venue.isDriveId ? 'Google Drive Folder' : 'Xem thư viện ảnh'} <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
};

// Venue Fee Card Component
const VenueFeeCard = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="col-span-1 md:col-span-2 lg:col-span-2 h-full"
  >
    <div className="h-full bg-gradient-to-br from-stone-50 to-orange-50/50 rounded-2xl border-2 border-dashed border-sunset-orange/20 p-6 md:p-8 flex flex-col relative overflow-hidden group hover:border-sunset-orange/40 transition-colors">
      
      {/* Background Icon */}
      <div className="absolute -right-6 -bottom-6 text-sunset-orange/5 group-hover:text-sunset-orange/10 transition-colors">
        <Info size={150} />
      </div>

      {/* Moved Info Text */}
      <div className="mb-6 bg-white/60 p-3 rounded-xl border border-white/50 inline-flex items-center gap-2 relative z-10 backdrop-blur-sm shadow-sm">
        <Info size={16} className="text-sunset-gold flex-shrink-0"/>
        <span className="text-sm text-slate-600">Khu vực <strong>Poseidon</strong> và <strong>Eden Garden</strong> là địa điểm ngắm hoàng hôn đẹp nhất.</span>
      </div>

      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="w-10 h-10 rounded-full bg-sunset-orange/10 text-sunset-orange flex items-center justify-center">
            <Info size={24} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 font-serif">Chính sách phí địa điểm</h3>
      </div>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <div className="space-y-4">
             <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
                <div className="flex items-center gap-2 mb-1 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                    <CheckCircle2 size={14} className="text-green-500"/> Khách lưu trú
                </div>
                <div className="text-2xl font-bold text-slate-900">50,000 <span className="text-sm font-normal text-slate-500">VNĐ/pax</span></div>
             </div>
             
             <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
                <div className="flex items-center gap-2 mb-1 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                    <Users size={14} className="text-blue-500"/> Khách vãng lai
                </div>
                <div className="text-2xl font-bold text-slate-900">50,000 <span className="text-sm font-normal text-slate-500">VNĐ/pax</span></div>
                <div className="mt-2 space-y-1">
                  <div className="text-xs text-sunset-orange font-medium">+ 10,000,000 VNĐ phí sàn</div>
                </div>
             </div>
        </div>

        <div className="flex flex-col justify-between space-y-4">
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                <div className="flex items-center gap-2 mb-1 text-red-800 text-xs font-semibold uppercase tracking-wider">
                    <ShieldAlert size={14} className="text-red-500"/> Phí Backup Mưa Bão
                </div>
                <div className="text-xl font-bold text-red-600">10,000,000 <span className="text-sm font-normal">VNĐ</span></div>
                <p className="text-[10px] text-red-700/70 mt-1 leading-tight">Phí chuẩn bị sẵn địa điểm dự phòng & nhân sự setup.</p>
            </div>
            
            <div className="text-[10px] text-slate-400 italic text-right px-2">
                * Giá chưa bao gồm VAT. Áp dụng cho setup, dọn dẹp và không gian riêng tư.
            </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Venues = () => {
  // Separate Poseidon from the rest
  const featuredVenue = VENUES.find(v => v.name.includes("Poseidon"));
  const otherVenues = VENUES.filter(v => !v.name.includes("Poseidon"));

  return (
    <Section id="venues" title="Không gian sự kiện" subtitle="Nơi giao thoa giữa kiến trúc nghệ thuật và thiên nhiên tuyệt mỹ" background="transparent">
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
        
        {/* Row 1: Signature Venue (Poseidon) - Full Width */}
        {featuredVenue && (
            <VenueCard venue={featuredVenue} index={0} isFeatured={true} />
        )}

        {/* Row 2 & 3: Other Venues & Fee Policy */}
        {otherVenues.map((venue, idx) => (
          <VenueCard key={idx} venue={venue} index={idx + 1} />
        ))}

        {/* Last Item: Fee Policy (Spans 2 columns) */}
        <VenueFeeCard />
        
      </div>
      
      {/* Removed the bottom Info block as it's now moved into the card */}
    </Section>
  );
};

export default Venues;
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sunset-orange via-sunset-purple to-blue-500"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-sunset-purple/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          <div>
            <h2 className="text-4xl font-serif font-bold text-white mb-2">Sunset Sanato</h2>
            <p className="text-sunset-gold uppercase tracking-[0.3em] text-xs font-bold mb-8">Resort & Villas • Phu Quoc</p>
            
            <p className="text-slate-400 mb-10 max-w-md leading-relaxed">
              Điểm đến sự kiện hàng đầu tại Đảo Ngọc với không gian hoàng hôn độc bản. Liên hệ ngay để nhận ưu đãi dành riêng cho đại lý.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-white/5 rounded-lg text-sunset-orange group-hover:bg-sunset-orange group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <span className="text-slate-300 text-sm leading-relaxed mt-1">
                  Bắc Bãi Trường, Tổ 3, Ấp Đường Bào, Xã Dương Tơ,<br/> TP. Phú Quốc, Tỉnh Kiên Giang
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                 <div className="p-2 bg-white/5 rounded-lg text-sunset-orange group-hover:bg-sunset-orange group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                   <a href="tel:+842976266662" className="text-slate-300 hover:text-white font-medium transition-colors">(+84) 297 6266 662</a>
                   <a href="tel:+84778602953" className="text-slate-300 hover:text-white font-medium transition-colors">(+84) 778 602 953</a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 bg-white/5 rounded-lg text-sunset-orange group-hover:bg-sunset-orange group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <a href="mailto:info@sunsetsanato.com" className="text-slate-300 hover:text-white font-medium transition-colors">info@sunsetsanato.com</a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 flex flex-col justify-center items-center text-center">
             <h3 className="text-2xl font-bold mb-2">Yêu cầu báo giá chi tiết?</h3>
             <p className="text-slate-400 mb-8 text-sm">Đội ngũ Sales sẽ phản hồi trong vòng 30 phút</p>
             
             <div className="flex flex-col w-full max-w-sm gap-4">
                <a href="tel:+84778602953" className="bg-gradient-to-r from-sunset-orange to-red-500 text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-orange-500/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <Phone size={18} /> Gọi Hotline Sales
                </a>
                <a href="mailto:info@sunsetsanato.com" className="bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                  <Mail size={18} /> Gửi Email
                </a>
             </div>
             <p className="mt-6 text-xs text-slate-500">Giờ làm việc: 08:00 - 17:30 (T2 - T7)</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs md:text-sm">
          <p>© {new Date().getFullYear()} Sunset Sanato Resort & Villas.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
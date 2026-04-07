import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  currentPage: 'home' | 'wedding';
  onNavigate: (page: 'home' | 'wedding', sectionId?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, targetPage: 'home' | 'wedding', targetId?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(targetPage, targetId);
  };

  const homeLinks = [
    { name: 'Quy trình', id: 'process' },
    { name: 'Địa điểm', id: 'venues' },
    { name: 'Tiệc & Drink', id: 'banquet' },
    { name: 'Âm thanh', id: 'sound' },
    { name: 'Khác', id: 'addons' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-100 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 z-50">
             <div className="flex flex-col cursor-pointer" onClick={(e) => handleLinkClick(e, 'home')}>
                <a href="#" className={`font-serif text-2xl md:text-3xl font-bold tracking-tight leading-none ${isScrolled ? 'text-sunset-orange' : (currentPage === 'wedding' ? 'text-sunset-gold' : 'text-white drop-shadow-md')}`}>
                  SUNSET SANATO
                </a>
                <span className={`text-[10px] uppercase tracking-[0.2em] font-medium ${isScrolled ? 'text-slate-600' : 'text-white/90 drop-shadow-sm'}`}>
                  Resort & Villas
                </span>
             </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Always show Wedding Link */}
            <a 
                href="#wedding"
                onClick={(e) => handleLinkClick(e, 'wedding')}
                className={`text-sm font-bold tracking-wide transition-all relative group flex items-center gap-2 ${
                  currentPage === 'wedding' 
                    ? 'text-sunset-orange' 
                    : (isScrolled ? 'text-slate-700 hover:text-sunset-orange' : 'text-white/90 hover:text-white drop-shadow-md')
                }`}
            >
               <Heart size={16} className={currentPage === 'wedding' ? 'fill-current' : ''} />
               Wedding
            </a>

            {/* Show Home Links */}
            {homeLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, 'home', link.id)}
                className={`text-sm font-medium tracking-wide hover:text-sunset-orange transition-colors relative group ${
                  currentPage === 'home' 
                    ? (isScrolled ? 'text-slate-700' : 'text-white/90 drop-shadow-md')
                    : 'text-slate-400' 
                }`}
              >
                {link.name}
                {currentPage === 'home' && (
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${isScrolled ? 'bg-sunset-orange' : 'bg-white'}`}></span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+842976266662"
              className={`p-2.5 rounded-full transition-all ${isScrolled ? 'bg-orange-50 text-sunset-orange hover:bg-orange-100' : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'}`}
            >
              <Phone size={20} />
            </a>
            <a 
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'home', 'contact')}
              className="bg-gradient-to-r from-sunset-orange to-red-500 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Liên hệ ngay
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${isScrolled || currentPage === 'wedding' ? 'text-slate-900' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-slate-100 overflow-hidden"
          >
            <div className="p-4 flex flex-col space-y-4">
               <a 
                  href="#wedding"
                  onClick={(e) => handleLinkClick(e, 'wedding')}
                  className={`text-lg font-bold py-2 border-b border-slate-100 flex items-center gap-2 ${currentPage === 'wedding' ? 'text-sunset-orange' : 'text-slate-800'}`}
                >
                  <Heart size={18} /> Wedding Packages
                </a>
              {homeLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, 'home', link.id)}
                  className="text-slate-800 font-medium text-lg py-2 border-b border-slate-100 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => handleLinkClick(e, 'home', 'contact')}
                className="text-center bg-sunset-orange text-white py-3 rounded-lg font-bold"
              >
                Nhận báo giá
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Venues from './components/Venues';
import Banquet from './components/Banquet';
import SoundLighting from './components/SoundLighting';
import Addons from './components/Addons';
import Footer from './components/Footer';
import Wedding from './components/Wedding';

function App() {
  const [page, setPage] = useState<'home' | 'wedding'>('home');

  // Helper to handle navigation and scrolling
  const handleNavigate = (targetPage: 'home' | 'wedding', sectionId?: string) => {
    setPage(targetPage);
    
    if (targetPage === 'home') {
      if (sectionId) {
        // Wait for render cycle then scroll
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-800 selection:bg-sunset-gold selection:text-white relative">
      {/* Watermark Background - Fixed */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="w-[50vh] md:w-[70vh] aspect-square opacity-[0.03]">
            {/* 
               User should place their watermark image at /public/images/watermark.png
               Fallback to favicon if missing 
            */}
            <img 
              src="/images/watermark.png" 
              alt="Sunset Sanato Watermark" 
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://www.google.com/s2/favicons?domain=sunsetsanato.com&sz=128";
                target.style.opacity = "0.1";
                target.style.filter = "grayscale(100%)";
              }}
            />
        </div>
      </div>

      <Header currentPage={page} onNavigate={handleNavigate} />
      
      <main className="relative z-10">
        {page === 'home' ? (
          <>
            <Hero />
            <Process />
            <Venues />
            <Banquet />
            <SoundLighting />
            <Addons />
          </>
        ) : (
          <Wedding />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Image filenames from the designs folder
const designImages = [
  '/designs/Go58J1WaIAAky-K.jfif',
  '/designs/Gw9jauSboAAWudw.jfif',
  '/designs/Gw9jaufaYAAI-jn.jfif',
  '/designs/Gw9javKbUAAqGV8.jfif',
  '/designs/GxB9gx_bUAALx8B.jfif',
  '/designs/GxB9i1maIAAQudZ.jfif',
  '/designs/GxMmMVbWYAAxrbK.jfif',
];

function ScrollingGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollSpeed = 1; // Pixels per frame
  const [isMounted, setIsMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Disable horizontal scroll on mount
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    setIsMounted(true);
    
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (!isMounted) return;
    
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex(prev => (prev + 1) % designImages.length);
      }
    }, 3000); // Change slide every 3 seconds
    
    return () => clearInterval(interval);
  }, [isMounted, isPaused]);
  
  // Handle touch events for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setCurrentIndex(prev => (prev + 1) % designImages.length);
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right
      setCurrentIndex(prev => (prev - 1 + designImages.length) % designImages.length);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="w-full overflow-hidden">
      <div 
        className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] max-h-[90vh] mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Current Image */}
        <div className="relative w-full h-full">
          <Image
            src={designImages[currentIndex]}
            alt={`Design ${currentIndex + 1}`}
            fill
            className="object-cover transition-all duration-500 ease-in-out"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
          />
          
          {/* Navigation Arrows - Hidden on mobile, shown on md and up */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(prev => (prev - 1 + designImages.length) % designImages.length);
            }}
            className="hidden md:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 md:p-3 rounded-full hover:bg-black/70 transition-colors z-10"
            aria-label="Previous image"
          >
            <span className="text-xl">←</span>
          </button>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(prev => (prev + 1) % designImages.length);
            }}
            className="hidden md:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 md:p-3 rounded-full hover:bg-black/70 transition-colors z-10"
            aria-label="Next image"
          >
            <span className="text-xl">→</span>
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
            {designImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                aria-label={`View image ${index + 1} of ${designImages.length}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
          
          {/* Image Counter */}
          <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md z-10">
            {currentIndex + 1} / {designImages.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollingGallery;

'use client';

import { useState, useEffect } from 'react';
import { FaRocket, FaVideo, FaNewspaper, FaGlobe, FaStar } from 'react-icons/fa';

const upcomingFeatures = [
  { 
    icon: <FaVideo className="w-5 h-5" />, 
    title: 'Video Showcase', 
    description: 'Show off your work with our new video uploads' 
  },
  { 
    icon: <FaNewspaper className="w-5 h-5" />, 
    title: 'News Section', 
    description: 'Stay updated with the latest design trends' 
  },
  { 
    icon: <FaGlobe className="w-5 h-5" />, 
    title: 'Website Submissions', 
    description: 'Submit and get featured on our platform' 
  },
  { 
    icon: <FaStar className="w-5 h-5" />, 
    title: 'Premium Features', 
    description: 'Exclusive tools for professional designers' 
  },
];

export default function TopBanner() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % upcomingFeatures.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const feature = upcomingFeatures[currentFeature];

  return (
    <div 
      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black py-3 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2 sm:space-x-3 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <FaRocket className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="text-center sm:text-left overflow-hidden">
              <div className="text-sm sm:text-base font-bold truncate">{feature.title}</div>
              <div className="text-xs sm:text-sm opacity-90 truncate">{feature.description}</div>
            </div>
            
            {/* Mobile indicators */}
            <div className="sm:hidden flex items-center space-x-1 ml-2">
              {upcomingFeatures.map((_, index) => (
                <span 
                  key={index}
                  className={`block w-1.5 h-1.5 rounded-full ${index === currentFeature ? 'bg-black' : 'bg-black/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-black/10">
        <div 
          className="h-full bg-black/30 transition-all duration-1000 ease-linear"
          style={{
            width: isHovered ? '100%' : '0%',
            transition: isHovered ? 'none' : 'width 3s linear',
          }}
        />
      </div>
    </div>
  );
}

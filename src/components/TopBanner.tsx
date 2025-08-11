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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center space-x-3">
          <div className="flex-shrink-0 flex items-center">
            <FaRocket className="w-5 h-5 mr-2" />
            <span className="font-bold">COMING SOON:</span>
          </div>
          
          <div className="flex-1 text-center">
            <div className="inline-flex items-center space-x-3">
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <div className="text-left">
                <div className="font-bold">{feature.title}</div>
                <div className="text-sm opacity-90">{feature.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10">
        <div 
          className="h-full bg-black/30 transition-all duration-1000 ease-linear"
          style={{
            width: isHovered ? '100%' : '0%',
            transition: isHovered ? 'none' : 'width 3s linear'
          }}
        />
      </div>
    </div>
  );
}

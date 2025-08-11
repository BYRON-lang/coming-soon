"use client";

import { motion } from "framer-motion";

const RotatingText = () => {
  const text = "• SCROLL TO EXPLORE • ";
  const radius = 90; // Increased radius for better spacing
  
  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mt-12 sm:mt-16 md:mt-20 mx-auto">
      <motion.div
        className="absolute inset-0 m-auto w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {text.repeat(3).split("").map((char, i) => (
          <span
            key={i}
            className="text-white font-medium absolute left-1/2 top-1/2 origin-left"
            style={{
              fontSize: 'clamp(12px, 1vw, 16px)',
              color: '#ffffff',
              transform: `rotate(${(i * 360) / (text.length * 3)}deg) translateY(-${radius}px) rotate(90deg)`,
              transformOrigin: 'center',
              position: 'absolute',
              display: 'inline-block',
              width: 'auto',
              textAlign: 'center',
              lineHeight: '1.5',
              whiteSpace: 'nowrap',
              textShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
              backfaceVisibility: 'hidden',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            {char}
          </span>
        ))}
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center group">
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white transition-all duration-300 ease-in-out transform group-hover:scale-110 w-8 h-8 sm:w-10 sm:h-10"
          aria-label="Explore more"
        >
          <path 
            d="M5 19L19 5M19 5H5M19 5V19" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default RotatingText;

'use client';

import { useEffect, useRef } from 'react';

const TAGS = [
  'Web Design', 'Mobile Apps', 'UI/UX', 'Branding', 'Development',
  'Animation', '3D Design', 'Illustration', 'Product Design', 'Motion Graphics',
  'Frontend', 'Backend', 'Full Stack', 'React', 'Next.js', 'TypeScript'
];

export default function ScrollingTags() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Duplicate the tags to create a seamless loop
  const duplicatedTags = [...TAGS, ...TAGS];

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const scrollerContent = Array.from(scroller.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scroller.appendChild(duplicatedItem);
    });

    let scrollerWidth = 0;
    scrollerContent.forEach((item) => {
      scrollerWidth += item.getBoundingClientRect().width + 20; // 20px gap
    });

    // Set the width to double to accommodate the duplicated content
    scroller.style.width = `${scrollerWidth}px`;

    let animationFrame: number;
    let scrollPosition = 0;
    const speed = 1; // pixels per frame

    const scroll = () => {
      if (!scrollerRef.current) return;
      
      scrollPosition += speed;
      
      // Reset the scroll position when we've scrolled the width of the original content
      if (scrollPosition >= scrollerWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollerRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      animationFrame = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationFrame = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="w-full bg-yellow-400 py-3 sm:py-4 overflow-hidden" ref={containerRef}>
      <div 
        ref={scrollerRef}
        className="flex items-center"
        style={{
          display: 'inline-flex',
          whiteSpace: 'nowrap',
        }}
      >
        {duplicatedTags.map((tag, index) => (
          <div 
            key={index}
            className="mx-1 sm:mx-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium whitespace-nowrap"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';

export default function Magnet({ 
  children, 
  padding = 150, 
  strength = 3, 
  activeTransition = "transform 0.3s ease-out", 
  inactiveTransition = "transform 0.6s ease-in-out" 
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      
      // Calculate distance to the center of the element
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Bounding box size + padding boundary check
      const maxDistance = Math.max(rect.width, rect.height) / 2 + padding;

      if (distance < maxDistance) {
        setIsActive(true);
        // Translate child element relative to distance divided by strength
        setPosition({ 
          x: dx / strength, 
          y: dy / strength 
        });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength]);

  return (
    <div
      ref={elementRef}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
      className="inline-block"
    >
      {children}
    </div>
  );
}

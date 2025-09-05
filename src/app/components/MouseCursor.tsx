'use client';

import { useEffect, useState } from 'react';

export default function MouseCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer, [data-cursor="pointer"]');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        setIsHovering(true);
        element.classList.add('cursor-hover');
      });
      
      element.addEventListener('mouseleave', () => {
        setIsHovering(false);
        element.classList.remove('cursor-hover');
      });
    });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Outer cursor ring */}
      <div 
        className={`mouseCursor cursor-outer ${isHovering ? 'cursor-hover' : ''} ${isClicking ? 'cursor-click' : ''}`}
        style={{
          transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
        }}
      ></div>
      
      {/* Inner cursor dot */}
      <div 
        className={`mouseCursor cursor-inner ${isHovering ? 'cursor-hover' : ''} ${isClicking ? 'cursor-click' : ''}`}
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
        }}
      >
        {isHovering && (
          <span className="cursor-text">
            <i className="tji-angle-left"></i>
            {isClicking ? 'Click' : 'Hover'}
            <i className="tji-angle-right"></i>
          </span>
        )}
      </div>
    </>
  );
}

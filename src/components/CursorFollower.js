import React, { useState, useEffect } from 'react';

export default function CursorFollower({ cursorImage }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isVisible]);

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.1s ease-out, top 0.1s ease-out',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <img
        src={cursorImage}
        alt="Custom cursor"
        style={{
          width: '50px',
          height: 'auto',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
        }}
      />
    </div>
  );
}
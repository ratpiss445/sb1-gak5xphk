import React from 'react';

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 bg-black -z-10">
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-float"
              style={{
                width: Math.random() * 3 + 'px',
                height: Math.random() * 3 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 10 + 10 + 's',
                opacity: Math.random() * 0.5
              }}
            />
          ))}
        </div>

        {/* Animated waves */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent animate-wave"
              style={{
                animationDelay: i * 2 + 's',
                transform: `translateY(${i * 25}%)`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
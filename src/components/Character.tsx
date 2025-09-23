import React from 'react';

interface CharacterProps {
  position: 'left' | 'right' | 'top';
  delay?: number;
}

export const Character: React.FC<CharacterProps> = ({ position, delay = 0 }) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return 'absolute left-8 top-1/2 -translate-y-1/2 md:left-16';
      case 'right':
        return 'absolute right-8 top-1/2 -translate-y-1/2 md:right-16';
      case 'top':
        return 'absolute left-1/2 -translate-x-1/2 top-20 md:top-16';
      default:
        return '';
    }
  };

  const getAnimation = () => {
    return `animate-bounce`;
  };

  return (
    <div 
      className={`${getPositionClasses()} transition-all duration-500`}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 1,
        transform: `scale(1) ${position === 'left' ? 'translateX(0)' : position === 'right' ? 'translateX(0)' : 'translateY(0)'}`
      }}
    >
      <div className={`w-16 h-20 relative ${getAnimation()}`}>
        {/* Character body */}
        <div className="w-12 h-16 bg-green-400 rounded-full mx-auto relative">
          {/* Eyes */}
          <div className="absolute top-3 left-2 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-3 right-2 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-3.5 left-2.5 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute top-3.5 right-2.5 w-1 h-1 bg-black rounded-full"></div>
          
          {/* Mouth */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full"></div>
        </div>
        
        {/* Arms */}
        <div className="absolute top-8 -left-1 w-3 h-1 bg-green-400 rounded-full rotate-45"></div>
        <div className="absolute top-8 -right-1 w-3 h-1 bg-green-400 rounded-full -rotate-45"></div>
        
        {/* Tool/Object */}
        {position === 'left' && (
          <div className="absolute top-6 -right-2 w-2 h-4 bg-orange-400 rounded-sm rotate-12"></div>
        )}
        {position === 'top' && (
          <div className="absolute top-4 -right-3 w-3 h-1 bg-yellow-500 rounded-full"></div>
        )}
      </div>
    </div>
  );
};
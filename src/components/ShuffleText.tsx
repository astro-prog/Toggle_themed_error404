import React, { useState, useEffect } from 'react';

interface ShuffleTextProps {
  children: string;
  className?: string;
  speed?: number;
  duration?: number;
}

export const ShuffleText: React.FC<ShuffleTextProps> = ({
  children,
  className = '',
  speed = 50,
  duration = 2000
}) => {
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);

  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

  const shuffle = () => {
    setIsAnimating(true);
    const targetText = children;
    const iterations = Math.floor(duration / speed);
    let currentIteration = 0;

    const intervalId = setInterval(() => {
      const progress = currentIteration / iterations;
      const revealCount = Math.floor(progress * targetText.length);

      const newText = targetText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < revealCount) return targetText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      setDisplayText(newText);
      currentIteration++;

      if (currentIteration >= iterations) {
        clearInterval(intervalId);
        setDisplayText(targetText);
        setIsAnimating(false);
      }
    }, speed);

    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      shuffle();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <span 
      className={`${className} ${isAnimating ? 'font-mono' : ''}`}
      onMouseEnter={shuffle}
    >
      {displayText}
    </span>
  );
};
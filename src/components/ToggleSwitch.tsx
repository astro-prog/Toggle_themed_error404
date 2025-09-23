import React from 'react';

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
  onText: string;
  offText: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isOn,
  onToggle,
  onText,
  offText
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-end">
        <span className={`text-sm font-medium transition-colors duration-300 ${
          isOn ? 'text-gray-700' : 'text-blue-300'
        }`}>
          {isOn ? onText : offText}
        </span>
        <svg 
          className={`w-6 h-4 mt-1 transition-colors duration-300 ${
            isOn ? 'text-gray-600' : 'text-blue-400'
          }`} 
          viewBox="0 0 24 16" 
          fill="currentColor"
        >
          <path d="M2 8L8 2L7 1L0 8L7 15L8 14L2 8Z" />
        </svg>
      </div>
      <button
        onClick={onToggle}
        className={`relative w-16 h-8 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 ${
          isOn 
            ? 'bg-gray-200 focus:ring-yellow-200' 
            : 'bg-gray-800 focus:ring-blue-200'
        }`}
      >
        <div className={`absolute w-6 h-6 bg-red-500 rounded-full top-1 transition-all duration-300 shadow-lg ${
          isOn ? 'translate-x-9' : 'translate-x-1'
        }`} />
      </button>
    </div>
  );
};
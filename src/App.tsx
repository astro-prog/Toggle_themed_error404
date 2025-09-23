import React, { useState } from 'react';
import { ToggleSwitch } from './components/ToggleSwitch';
import { Character } from './components/Character';
import { ShuffleText } from './components/ShuffleText';

function App() {
  const [lightOn, setLightOn] = useState(false);

  const toggleLight = () => {
    setLightOn(!lightOn);
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ease-in-out relative overflow-hidden ${
      lightOn 
        ? 'bg-gradient-to-br from-lime-200 to-yellow-200' 
        : 'bg-gradient-to-br from-black via-gray-900 to-purple-900'
    }`}>
      {/* Toggle Switch */}
      <div className="absolute top-8 left-8 z-10">
        <ToggleSwitch
          isOn={lightOn}
          onToggle={toggleLight}
          onText="Turn off the light"
          offText="Turn on the light"
        />
      </div>

      {/* Characters - only show when light is on */}
      {lightOn && (
        <>
          <Character position="left" delay={200} />
          <Character position="right" delay={400} />
          <Character position="top" delay={600} />
        </>
      )}

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        {/* 404 Text */}
        <div className="text-center mb-8 relative">
          <h1 className={`text-[12rem] md:text-[16rem] font-bold leading-none transition-all duration-700 ${
            lightOn 
              ? 'text-slate-800 drop-shadow-lg' 
              : 'text-slate-500 text-opacity-90'
          }`}>
            404
          </h1>

          {/* Spider Web and Spider - only show in dark mode */}
          {!lightOn && (
            <div className="absolute inset-0 flex items-start justify-center pointer-events-none z-10">
              <div className="relative mt-12">
                {/* Spider Web */}
                <svg 
                  width="80" 
                  height="120" 
                  viewBox="0 0 80 120" 
                  className="relative"
                >
                  {/* Realistic spider web structure */}
                  {/* Anchor lines - main structural threads */}
                  <line x1="40" y1="10" x2="5" y2="25" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.8" />
                  <line x1="40" y1="10" x2="75" y2="25" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.8" />
                  <line x1="40" y1="10" x2="20" y2="50" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.8" />
                  <line x1="40" y1="10" x2="60" y2="50" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="0.8" />
                  
                  {/* Spiral capture threads */}
                  <path d="M 15,30 Q 25,25 35,30 Q 45,35 55,30 Q 65,25 70,35" 
                        fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.6" />
                  <path d="M 18,35 Q 28,32 38,37 Q 48,42 58,37 Q 62,32 67,40" 
                        fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.6" />
                  <path d="M 22,40 Q 32,38 42,43 Q 52,48 58,43" 
                        fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.6" />
                  
                  {/* Radial threads */}
                  <line x1="40" y1="10" x2="30" y2="40" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="0.6" />
                  <line x1="40" y1="10" x2="50" y2="40" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="0.6" />
                  
                  {/* Hanging thread for spider */}
                  <line x1="40" y1="10" x2="40" y2="100" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" />
                  
                  {/* Web dewdrops for realism */}
                  <circle cx="25" cy="32" r="0.8" fill="rgba(191, 219, 254, 0.6)" />
                  <circle cx="55" cy="35" r="0.6" fill="rgba(191, 219, 254, 0.4)" />
                  <circle cx="35" cy="25" r="0.5" fill="rgba(191, 219, 254, 0.3)" />
                  
                  {/* Spider at the end of hanging thread */}
                  <g>
                    {/* Spider body - abdomen */}
                    <ellipse cx="40" cy="95" rx="4" ry="6" fill="rgba(25, 25, 25, 0.9)" />
                    {/* Spider body - cephalothorax */}
                    <ellipse cx="40" cy="90" rx="3" ry="4" fill="rgba(30, 30, 30, 0.9)" />
                    
                    {/* Four limbs as requested */}
                    {/* Upper left limb */}
                    <path d="M 37,88 Q 32,85 28,87" stroke="rgba(20, 20, 20, 0.9)" strokeWidth="1" fill="none" />
                    {/* Upper right limb */}
                    <path d="M 43,88 Q 48,85 52,87" stroke="rgba(20, 20, 20, 0.9)" strokeWidth="1" fill="none" />
                    {/* Lower left limb */}
                    <path d="M 37,92 Q 32,95 28,97" stroke="rgba(20, 20, 20, 0.9)" strokeWidth="1" fill="none" />
                    {/* Lower right limb */}
                    <path d="M 43,92 Q 48,95 52,97" stroke="rgba(20, 20, 20, 0.9)" strokeWidth="1" fill="none" />
                    
                    {/* Spider eyes - small red dots */}
                    <circle cx="39" cy="89" r="0.5" fill="rgba(200, 50, 50, 0.8)" />
                    <circle cx="41" cy="89" r="0.5" fill="rgba(200, 50, 50, 0.8)" />
                  </g>
                </svg>

              </div>
            </div>
          )}
          
          <h2 className={`text-2xl md:text-3xl font-semibold tracking-wider transition-all duration-700 ${
            lightOn 
              ? 'text-slate-700' 
              : 'text-slate-500'
          }`}>
            <ShuffleText>PAGE NOT FOUND</ShuffleText>
          </h2>
        </div>

        {/* Go Home Button - only show when light is on */}
        {lightOn && (
          <button
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg 
                     transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                     focus:outline-none focus:ring-4 focus:ring-orange-200"
            onClick={() => window.location.href = '/'}
          >
            GO HOME
          </button>
        )}
      </div>

      {/* Ambient lighting effects */}
      {lightOn && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-lime-300 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-300 rounded-full opacity-10 blur-2xl animate-pulse delay-500"></div>
        </div>
      )}

      {/* Dark mode ambient effects */}
      {!lightOn && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-700 rounded-full opacity-5 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-800 rounded-full opacity-3 blur-3xl animate-pulse delay-1500"></div>
        </div>
      )}
    </div>
  );
}

export default App;

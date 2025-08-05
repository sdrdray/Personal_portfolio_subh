import React, { useEffect, useState } from 'react';

export const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  // Calculate the rotation for clock hands
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;
  
  const secondsDegrees = ((seconds / 60) * 360);
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);
  
  // Format date
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const formattedDate = time.toLocaleDateString('en-US', options);
  
  // Format time
  const formattedTime = time.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true 
  });
  
  return (
    <div className="flex flex-col items-center justify-center p-8 halo-glow rounded-xl glass mx-auto max-w-sm">
      {/* Analog Clock */}
      <div className="relative w-48 h-48 rounded-full bg-slate-800/30 border border-slate-700 mb-6">
        {/* Clock numbers */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-full h-full"
            style={{ transform: `rotate(${i * 30}deg)` }}
          >
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-2 bg-slate-300"
              style={{ transform: 'translateY(5px)' }}
            ></div>
          </div>
        ))}
        
        {/* Hour Hand */}
        <div 
          className="absolute top-1/2 left-1/2 w-1 h-16 bg-primary-400 rounded-full origin-bottom"
          style={{ transform: `translate(-50%, -100%) rotate(${hoursDegrees}deg)` }}
        ></div>
        
        {/* Minute Hand */}
        <div 
          className="absolute top-1/2 left-1/2 w-0.5 h-20 bg-primary-300 rounded-full origin-bottom"
          style={{ transform: `translate(-50%, -100%) rotate(${minutesDegrees}deg)` }}
        ></div>
        
        {/* Second Hand */}
        <div 
          className="absolute top-1/2 left-1/2 w-0.5 h-22 bg-secondary-400 rounded-full origin-bottom"
          style={{ transform: `translate(-50%, -100%) rotate(${secondsDegrees}deg)` }}
        ></div>
        
        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-primary-500 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Digital Time */}
      <div className="text-2xl font-mono font-bold text-slate-100 mb-1">
        {formattedTime}
      </div>
      
      {/* Date */}
      <div className="text-sm text-slate-300">
        {formattedDate}
      </div>
      
      {/* Time Zone */}
      <div className="mt-3 text-xs text-slate-400">
        IST (GMT +5:30)
      </div>
    </div>
  );
};

export default Clock;
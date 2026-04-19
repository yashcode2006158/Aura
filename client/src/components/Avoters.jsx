import React from 'react';
import { Aperture, Command, Hexagon, Infinity as InfinityIcon, Target, Triangle, Zap } from 'lucide-react';

const Avoters = () => {
  const logos = [
    { name: "Acme Corp", icon: <Aperture className="w-6 h-6" /> },
    { name: "Globex", icon: <Command className="w-6 h-6" /> },
    { name: "Soylent", icon: <Hexagon className="w-6 h-6" /> },
    { name: "Initech", icon: <InfinityIcon className="w-6 h-6" /> },
    { name: "Umbrella", icon: <Target className="w-6 h-6" /> },
    { name: "Stark Ind.", icon: <Triangle className="w-6 h-6" /> },
    { name: "Wayne Ent.", icon: <Zap className="w-6 h-6" /> },
  ];

  // Duplicate the array for a seamless infinite loop
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section id="avoters" className="py-12 border-y border-border overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium text-text-muted uppercase tracking-wider">Trusted by leading brands</p>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeLogos.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-3 mx-12 text-text-muted hover:text-text transition-colors duration-300 grayscale hover:grayscale-0"
            >
              {brand.icon}
              <span className="font-serif text-2xl">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Avoters;

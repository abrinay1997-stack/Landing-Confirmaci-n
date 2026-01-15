
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Ícono con imagen externa y glow */}
      <div className="relative w-20 h-20 mb-4 group">
        <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <img 
          src="https://hostedimages-cdn.aweber-static.com/MjM0MTQ0NQ==/optimized/20657f92efa544489526caee3beef9d2.png" 
          alt="LiveSync Pro Logo" 
          className="relative w-full h-full object-contain opacity-95"
        />
      </div>
      
      {/* Texto con "PRO" en gradiente y el resto en blanco */}
      <h1 className="text-xl font-bold tracking-[0.2em] whitespace-nowrap">
        <span className="text-white">LIVESYNC </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">PRO</span>
      </h1>
      
      {/* Subtítulo en blanco */}
      <p className="text-white text-[10px] uppercase tracking-widest mt-1 opacity-80">
        System Engineering Suite
      </p>
    </div>
  );
};

export default Logo;

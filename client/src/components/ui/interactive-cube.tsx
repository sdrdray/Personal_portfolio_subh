import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface InteractiveCubeProps {
  className?: string;
  size?: number;
  images?: string[];
  colors?: string[];
}

const defaultColors = [
  "bg-gradient-to-r from-blue-500 to-cyan-500",
  "bg-gradient-to-r from-purple-500 to-pink-500",
  "bg-gradient-to-r from-green-400 to-cyan-500",
  "bg-gradient-to-r from-yellow-400 to-orange-500",
  "bg-gradient-to-r from-indigo-500 to-purple-600",
  "bg-gradient-to-r from-red-500 to-orange-500",
];

/**
 * An interactive 3D cube that rotates on hover or touch
 */
export const InteractiveCube: React.FC<InteractiveCubeProps> = ({
  className = "",
  size = 200,
  images,
  colors = defaultColors,
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current || !isHovering) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate rotation based on mouse position relative to center
    const newRotateY = ((e.clientX - centerX) / (rect.width / 2)) * 30;
    const newRotateX = ((e.clientY - centerY) / (rect.height / 2)) * -30;
    
    setRotateX(newRotateX);
    setRotateY(newRotateY);
  };

  // Start automatic rotation when not hovering
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setRotateY(prev => (prev + 0.2) % 360);
        setRotateX(prev => Math.sin(Date.now() / 2000) * 15);
      }, 16);
      return () => clearInterval(interval);
    }
    
    // Add mousemove event when hovering
    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isHovering]);

  const cubeSize = `${size}px`;
  const faceSize = `${size}px`;
  const translateZ = `${size / 2}px`;

  return (
    <motion.div 
      ref={containerRef}
      className={`perspective-${size * 2} ${className}`}
      style={{ 
        perspective: `${size * 2}px`,
        width: cubeSize, 
        height: cubeSize
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="w-full h-full relative transform-style-3d"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isHovering ? 'transform 0.1s ease' : 'transform 0.5s ease',
        }}
      >
        {/* Front face */}
        <div
          className={`absolute ${images ? '' : colors[0]} rounded-lg shadow-lg flex items-center justify-center text-white font-bold border border-slate-700/50`}
          style={{
            width: faceSize,
            height: faceSize,
            transform: `translateZ(${translateZ})`,
            backfaceVisibility: 'hidden',
          }}
        >
          {images ? (
            <img 
              src={images[0]} 
              alt="Front face" 
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <span className="text-3xl">Front</span>
          )}
        </div>

        {/* Back face */}
        <div
          className={`absolute ${images ? '' : colors[1]} rounded-lg shadow-lg flex items-center justify-center text-white font-bold border border-slate-700/50`}
          style={{
            width: faceSize,
            height: faceSize,
            transform: `rotateY(180deg) translateZ(${translateZ})`,
            backfaceVisibility: 'hidden',
          }}
        >
          {images ? (
            <img 
              src={images[1] || images[0]} 
              alt="Back face" 
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <span className="text-3xl">Back</span>
          )}
        </div>

        {/* Right face */}
        <div
          className={`absolute ${images ? '' : colors[2]} rounded-lg shadow-lg flex items-center justify-center text-white font-bold border border-slate-700/50`}
          style={{
            width: faceSize,
            height: faceSize,
            transform: `rotateY(90deg) translateZ(${translateZ})`,
            backfaceVisibility: 'hidden',
          }}
        >
          {images ? (
            <img 
              src={images[2] || images[0]} 
              alt="Right face" 
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <span className="text-3xl">Right</span>
          )}
        </div>

        {/* Left face */}
        <div
          className={`absolute ${images ? '' : colors[3]} rounded-lg shadow-lg flex items-center justify-center text-white font-bold border border-slate-700/50`}
          style={{
            width: faceSize,
            height: faceSize,
            transform: `rotateY(-90deg) translateZ(${translateZ})`,
            backfaceVisibility: 'hidden',
          }}
        >
          {images ? (
            <img 
              src={images[3] || images[0]} 
              alt="Left face" 
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <span className="text-3xl">Left</span>
          )}
        </div>

        {/* Top face */}
        <div
          className={`absolute ${images ? '' : colors[4]} rounded-lg shadow-lg flex items-center justify-center text-white font-bold border border-slate-700/50`}
          style={{
            width: faceSize,
            height: faceSize,
            transform: `rotateX(90deg) translateZ(${translateZ})`,
            backfaceVisibility: 'hidden',
          }}
        >
          {images ? (
            <img 
              src={images[4] || images[0]} 
              alt="Top face" 
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <span className="text-3xl">Top</span>
          )}
        </div>

        {/* Bottom face */}
        <div
          className={`absolute ${images ? '' : colors[5]} rounded-lg shadow-lg flex items-center justify-center text-white font-bold border border-slate-700/50`}
          style={{
            width: faceSize,
            height: faceSize,
            transform: `rotateX(-90deg) translateZ(${translateZ})`,
            backfaceVisibility: 'hidden',
          }}
        >
          {images ? (
            <img 
              src={images[5] || images[0]} 
              alt="Bottom face" 
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <span className="text-3xl">Bottom</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InteractiveCube;
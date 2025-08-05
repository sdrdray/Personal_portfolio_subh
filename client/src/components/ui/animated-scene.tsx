import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSceneProps {
  className?: string;
}

/**
 * An animated futuristic 3D scene that appears at the bottom of the website
 */
export const AnimatedScene: React.FC<AnimatedSceneProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = 300; // Fixed height for the scene
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Grid parameters
    const gridSize = 40;
    const horizonY = canvas.height / 2;
    const vanishingPointX = canvas.width / 2;
    const gridDepth = 20;
    
    // Grid points positions
    let gridPoints: { x: number; y: number; z: number }[] = [];
    
    // Generate 3D grid points
    const generateGridPoints = () => {
      gridPoints = [];
      const gridWidth = Math.ceil(canvas.width / gridSize) + 2;
      
      for (let z = 1; z <= gridDepth; z++) {
        const scale = 1 - z / (gridDepth + 10);
        const scaledGridSize = gridSize * scale;
        const rowWidth = gridWidth * scaledGridSize;
        const startX = vanishingPointX - rowWidth / 2;
        
        for (let x = 0; x <= gridWidth; x++) {
          const pointX = startX + x * scaledGridSize;
          const pointY = horizonY + (z * 5);
          gridPoints.push({ x: pointX, y: pointY, z });
        }
      }
    };
    
    // Draw the scene
    const drawScene = (time: number) => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      for (let i = 0; i < 100; i++) {
        const x = Math.sin(i * 0.1 + time * 0.001) * canvas.width / 2 + canvas.width / 2;
        const y = Math.random() * horizonY;
        const size = Math.random() * 2;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Draw horizon glow
      const gradient = ctx.createLinearGradient(0, horizonY - 50, 0, horizonY + 80);
      gradient.addColorStop(0, 'rgba(51, 154, 240, 0)');
      gradient.addColorStop(0.5, 'rgba(51, 154, 240, 0.2)');
      gradient.addColorStop(1, 'rgba(51, 154, 240, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, horizonY - 50, canvas.width, 130);
      
      // Draw grid lines
      ctx.strokeStyle = 'rgba(51, 154, 240, 0.5)';
      ctx.lineWidth = 1;
      
      // Horizontal grid lines
      for (let z = 1; z <= gridDepth; z++) {
        const rowPoints = gridPoints.filter(p => p.z === z);
        if (rowPoints.length > 1) {
          ctx.beginPath();
          rowPoints.forEach((point, index) => {
            if (index === 0) {
              ctx.moveTo(point.x, point.y);
            } else {
              ctx.lineTo(point.x, point.y);
            }
          });
          ctx.stroke();
        }
      }
      
      // Animate sun/moon
      const sunRadius = 30;
      const sunX = vanishingPointX;
      const sunY = horizonY - 20 - Math.sin(time * 0.001) * 10;
      
      // Draw sun/moon glow
      const sunGlow = ctx.createRadialGradient(
        sunX, sunY, 0,
        sunX, sunY, sunRadius * 3
      );
      sunGlow.addColorStop(0, 'rgba(51, 154, 240, 0.4)');
      sunGlow.addColorStop(1, 'rgba(51, 154, 240, 0)');
      
      ctx.fillStyle = sunGlow;
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunRadius * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw sun/moon
      ctx.fillStyle = 'rgba(51, 154, 240, 0.8)';
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw grid dots
      ctx.fillStyle = 'rgba(51, 154, 240, 0.8)';
      gridPoints.forEach(point => {
        const size = (gridDepth - point.z + 1) * 0.3;
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    
    // Animation frame with floating effect
    let animationFrame: number;
    let lastTime = 0;
    
    const animate = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const elapsed = timestamp - lastTime;
      
      // Regenerate grid points for wave effect
      generateGridPoints();
      
      // Apply wave effect to grid
      gridPoints.forEach(point => {
        point.y += Math.sin((point.x + timestamp * 0.05) * 0.01) * 2;
      });
      
      drawScene(timestamp);
      animationFrame = requestAnimationFrame(animate);
    };
    
    generateGridPoints();
    animationFrame = requestAnimationFrame(animate);
    
    // Observe when element is in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(canvas);
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className={`w-full relative overflow-hidden ${className}`}>
      <motion.canvas
        ref={canvasRef}
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default AnimatedScene;
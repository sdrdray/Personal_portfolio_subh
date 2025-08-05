import React, { useEffect, useRef } from 'react';

interface GlitterParticle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
}

export const GlitterEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<GlitterParticle[]>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY
      };
      
      // Add new particles on mouse move
      createParticles(5);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const createParticles = (count: number) => {
      const { x, y } = mousePositionRef.current;
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 3 + 1;
        const hue = Math.floor(Math.random() * 60) + 180; // Blue to pink range
        const color = `hsla(${hue}, 100%, 70%, ${Math.random() * 0.5 + 0.5})`;
        
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 20,
          y: y + (Math.random() - 0.5) * 20,
          size,
          color,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2 - 1, // Slightly upward bias
          life: 0,
          maxLife: 30 + Math.random() * 60
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life++;
        
        // Fade out as life progresses
        const opacity = 1 - (particle.life / particle.maxLife);
        const size = particle.size * (1 - (particle.life / particle.maxLife) * 0.5);
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/, `${opacity})`);
        ctx.fill();
        
        // Remove dead particles
        if (particle.life >= particle.maxLife) {
          particlesRef.current.splice(index, 1);
        }
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-10" 
      style={{ opacity: 0.8 }}
    />
  );
};

export default GlitterEffect;
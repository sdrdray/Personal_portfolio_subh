import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import ChibiImage from "../../assets/IMG-20250501-WA0002.jpg";

interface InteractiveChibiProps {
  className?: string;
}

export const InteractiveChibi: React.FC<InteractiveChibiProps> = ({ className = "" }) => {
  const [isWaving, setIsWaving] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [lookDirection, setLookDirection] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isBreathing, setIsBreathing] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [showEyeHighlight, setShowEyeHighlight] = useState(false);
  
  const characterRef = useRef<HTMLDivElement>(null);
  const eyesRef = useRef<HTMLDivElement>(null);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const blinkTimerRef = useRef<NodeJS.Timeout | null>(null);
  const breathingControls = useAnimation();

  // Set up breathing animation
  useEffect(() => {
    if (isBreathing) {
      breathingControls.start({
        scale: [1, 1.02, 1],
        y: [0, -2, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      });
    } else {
      breathingControls.stop();
    }
  }, [isBreathing, breathingControls]);

  // Handle hover animation
  const handleHover = () => {
    setIsWaving(true);
    setIsHovered(true);
    resetIdleTimer();
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    setTimeout(() => {
      setIsWaving(false);
    }, 1500);
  };

  // Handle click on eyes
  const handleEyeClick = () => {
    setIsBlinking(true);
    setShowEyeHighlight(true);
    
    setTimeout(() => {
      setIsBlinking(false);
      setTimeout(() => {
        setShowEyeHighlight(false);
      }, 500);
    }, 200);
    
    resetIdleTimer();
  };

  // Setup random blinking
  useEffect(() => {
    const setupBlinking = () => {
      blinkTimerRef.current = setTimeout(() => {
        if (Math.random() > 0.6) {
          setIsBlinking(true);
          setTimeout(() => {
            setIsBlinking(false);
          }, 180);
        }
        setupBlinking();
      }, 3000 + Math.random() * 2000);
    };
    
    setupBlinking();
    
    return () => {
      if (blinkTimerRef.current) {
        clearTimeout(blinkTimerRef.current);
      }
    };
  }, []);

  // Occasional looking around when idle
  const resetIdleTimer = () => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }
    
    idleTimerRef.current = setTimeout(() => {
      // Random look direction
      const randomLook = {
        x: Math.random() * 10 - 5,
        y: Math.random() * 6 - 3
      };
      
      setLookDirection(randomLook);
      
      // Schedule next random look
      resetIdleTimer();
    }, 3000 + Math.random() * 2000); // Random interval between 3-5 seconds
  };

  // Setup mouse tracking for eye movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!characterRef.current) return;
      
      const containerRect = characterRef.current.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const centerY = containerRect.top + containerRect.height / 2;
      
      // Calculate distance from center, max 8px movement
      const maxMovement = 8;
      const moveX = ((e.clientX - centerX) / window.innerWidth) * maxMovement * 3;
      const moveY = ((e.clientY - centerY) / window.innerHeight) * maxMovement * 2;
      
      setLookDirection({ 
        x: Math.min(Math.max(moveX, -maxMovement), maxMovement),
        y: Math.min(Math.max(moveY, -maxMovement), maxMovement)
      });
      
      // Reset idle timer on mouse move
      resetIdleTimer();
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Start idle animations on component mount
  useEffect(() => {
    resetIdleTimer();
    
    return () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`relative ${className} perspective-[800px]`}
      ref={characterRef}
      onMouseEnter={() => setIsBreathing(false)}
      onMouseLeave={() => setIsBreathing(true)}
    >
      <motion.div 
        className="relative transform-gpu"
        animate={breathingControls}
        style={{ transformOrigin: "center bottom" }}
      >
        {/* 3D-like container */}
        <motion.div 
          className="relative overflow-hidden rounded-xl border border-slate-700"
          animate={{
            rotateY: lookDirection.x * 2,
            rotateX: -lookDirection.y * 1.5
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
          style={{ transformStyle: "preserve-3d", perspective: "800px" }}
        >
          {/* Base image layer */}
          <motion.img 
            src={ChibiImage} 
            alt="Chibi Character" 
            className="w-full h-auto max-w-[280px]"
            style={{ transformStyle: "preserve-3d" }}
          />
          
          {/* 3D lighting effects */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
            animate={{
              x: lookDirection.x * 15,
              opacity: 0.3 + (lookDirection.x * 0.05)
            }}
            transition={{ type: "spring", stiffness: 100 }}
          />
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"
            animate={{
              opacity: isHovered ? 0.3 : 0.15
            }}
          />

          {/* Eyes overlay - with better positioning for the chibi image */}
          <motion.div 
            ref={eyesRef}
            className="absolute top-[34%] left-[50%] transform -translate-x-1/2 w-[65%] h-[10%] cursor-pointer z-20 flex justify-between"
            onClick={handleEyeClick}
            animate={{
              x: lookDirection.x * 1.5,
              y: lookDirection.y * 1.2
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {/* Left eye */}
            <div className="w-[48%] h-full relative">
              {isBlinking && (
                <motion.div 
                  className="absolute inset-0 bg-black/80 rounded-full" 
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.1 }}
                />
              )}
              
              {/* Eye highlight */}
              {showEyeHighlight && (
                <motion.div 
                  className="absolute inset-0 bg-primary-500/30 rounded-full" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
            
            {/* Right eye */}
            <div className="w-[48%] h-full relative">
              {isBlinking && (
                <motion.div 
                  className="absolute inset-0 bg-black/80 rounded-full" 
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.1 }}
                />
              )}
              
              {/* Eye highlight */}
              {showEyeHighlight && (
                <motion.div 
                  className="absolute inset-0 bg-primary-500/30 rounded-full" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </motion.div>
          
          {/* Glasses - properly aligned with eye positions */}
          <motion.div 
            className="absolute top-[34%] left-[50%] transform -translate-x-1/2 w-[70%] h-[12%] pointer-events-none z-30"
            animate={{
              rotateY: lookDirection.x * 2.5,
              rotateX: -lookDirection.y * 2,
              x: lookDirection.x * 1.8,
              y: lookDirection.y * 1.5,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative w-full h-full">
              {/* Left glass frame */}
              <div className="absolute left-[10%] top-0 w-[36%] h-full border-2 border-black/80 rounded-full bg-black/5"></div>
              
              {/* Right glass frame */}
              <div className="absolute right-[10%] top-0 w-[36%] h-full border-2 border-black/80 rounded-full bg-black/5"></div>
              
              {/* Bridge of glasses */}
              <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[20%] h-[15%] border-t-2 border-black/80"></div>
              
              {/* Left temple */}
              <div className="absolute top-[50%] left-[5%] w-[5%] h-[2px] bg-black/80 transform -translate-y-1/2 rotate-[15deg]"></div>
              
              {/* Right temple */}
              <div className="absolute top-[50%] right-[5%] w-[5%] h-[2px] bg-black/80 transform -translate-y-1/2 rotate-[-15deg]"></div>
              
              {/* Glass reflection */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
                animate={{
                  opacity: 0.3 + (lookDirection.x * 0.05),
                  x: -lookDirection.x * 5
                }}
              />
            </div>
          </motion.div>
          
          {/* Face subtle expressions - more responsive to interactions */}
          <motion.div 
            className="absolute bottom-[40%] left-[50%] transform -translate-x-1/2 pointer-events-none"
            animate={{
              scale: isHovered ? 1.1 : 1,
              y: isHovered ? 2 : 0
            }}
          >
            {/* The actual face expression is in the image, this just adds subtle dimension */}
            <motion.div 
              className="bg-gradient-to-b from-transparent to-black/5 w-16 h-8 rounded-full"
              animate={{
                width: isHovered ? "5rem" : "4rem",
                opacity: isHovered ? 0.2 : 0.1
              }}
            />
          </motion.div>
        </motion.div>

        {/* Hand with improved 3D effect and interaction */}
        <motion.div 
          className="absolute bottom-1 right-2 z-10 cursor-pointer"
          style={{ 
            transformStyle: "preserve-3d", 
            perspective: "400px",
            transformOrigin: "bottom right" 
          }}
          onHoverStart={handleHover}
          onHoverEnd={handleHoverEnd}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-14 h-14 bg-transparent rounded-full flex items-center justify-center relative"
            animate={isWaving ? {
              rotateZ: [0, 15, 0, 15, 0, 15, 0],
              y: [0, -5, 0, -5, 0, -5, 0]
            } : {}}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            {/* Visual cue for the hand interaction */}
            <div className="absolute inset-0 rounded-full bg-primary-500/10 opacity-0 hover:opacity-60 transition-opacity duration-300" />
            
            {/* Hand shadow for 3D effect */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-2 bg-black/20 blur-sm rounded-full"
              animate={isWaving ? {
                width: ["60%", "50%", "60%", "50%", "60%", "50%", "60%"],
                x: [0, 5, 0, 5, 0, 5, 0]
              } : {}}
              transition={{
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InteractiveChibi;
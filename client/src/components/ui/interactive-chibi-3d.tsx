import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

interface InteractiveChibi3DProps {
  className?: string;
}

export const InteractiveChibi3D: React.FC<InteractiveChibi3DProps> = ({ className = "" }) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [lookDirection, setLookDirection] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mood, setMood] = useState<"neutral" | "happy" | "surprised" | "thinking">("neutral");
  const [animationState, setAnimationState] = useState<"idle" | "wave" | "jump" | "spin">("idle");
  
  const chibiRef = useRef<HTMLDivElement>(null);
  const blinkTimerRef = useRef<NodeJS.Timeout | null>(null);
  const moodTimerRef = useRef<NodeJS.Timeout | null>(null);
  const idleAnimationTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Parts that make up the 3D chibi
  const parts = {
    head: useAnimation(),
    body: useAnimation(),
    leftArm: useAnimation(),
    rightArm: useAnimation(),
    leftLeg: useAnimation(),
    rightLeg: useAnimation(),
    face: useAnimation(),
    hair: useAnimation(),
  };

  // Set up blinking animation
  useEffect(() => {
    const startBlinking = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
        scheduleNextBlink();
      }, 150);
    };
    
    const scheduleNextBlink = () => {
      const nextBlinkTime = 2000 + Math.random() * 4000; // Random time between 2-6 seconds
      blinkTimerRef.current = setTimeout(startBlinking, nextBlinkTime);
    };
    
    scheduleNextBlink(); // Start the cycle
    
    return () => {
      if (blinkTimerRef.current) clearTimeout(blinkTimerRef.current);
    };
  }, []);

  // Handle mouse movement to track eye direction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!chibiRef.current) return;
      
      const rect = chibiRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate direction from -1 to 1 in both axes
      const x = Math.min(Math.max((e.clientX - centerX) / (window.innerWidth / 3), -1), 1);
      const y = Math.min(Math.max((e.clientY - centerY) / (window.innerHeight / 3), -1), 1);
      
      setLookDirection({ x, y });
      
      // Update head and body rotation based on mouse position
      parts.head.start({
        rotateY: x * 15,
        rotateX: -y * 5,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 30 
        }
      });
      
      parts.body.start({
        rotateY: x * 10,
        transition: { 
          type: "spring", 
          stiffness: 200, 
          damping: 20 
        }
      });
      
      // Subtle hair movement
      parts.hair.start({
        rotateZ: x * 2,
        transition: { 
          type: "spring", 
          stiffness: 150, 
          damping: 15 
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Random mood changes
  useEffect(() => {
    const changeMood = () => {
      const moods: Array<"neutral" | "happy" | "surprised" | "thinking"> = ["neutral", "happy", "surprised", "thinking"];
      const newMood = moods[Math.floor(Math.random() * moods.length)];
      setMood(newMood);
      
      const nextMoodChange = 5000 + Math.random() * 10000;
      moodTimerRef.current = setTimeout(changeMood, nextMoodChange);
    };
    
    moodTimerRef.current = setTimeout(changeMood, 5000);
    
    return () => {
      if (moodTimerRef.current) clearTimeout(moodTimerRef.current);
    };
  }, []);

  // Idle animations
  useEffect(() => {
    if (isHovering) {
      if (idleAnimationTimerRef.current) clearTimeout(idleAnimationTimerRef.current);
      return;
    }

    const startIdleAnimation = () => {
      const animations = ["idle", "wave", "jump", "spin"];
      const randomAnimation = animations[Math.floor(Math.random() * animations.length)] as "idle" | "wave" | "jump" | "spin";
      setAnimationState(randomAnimation);
      
      // Reset after animation completes
      const animationDuration = randomAnimation === "idle" ? 0 : 2000;
      setTimeout(() => {
        setAnimationState("idle");
        scheduleNextAnimation();
      }, animationDuration);
    };
    
    const scheduleNextAnimation = () => {
      const nextAnimationTime = 8000 + Math.random() * 10000;
      idleAnimationTimerRef.current = setTimeout(startIdleAnimation, nextAnimationTime);
    };
    
    scheduleNextAnimation();
    
    return () => {
      if (idleAnimationTimerRef.current) clearTimeout(idleAnimationTimerRef.current);
    };
  }, [isHovering]);

  // Animation updates based on animation state
  useEffect(() => {
    switch (animationState) {
      case "wave":
        parts.rightArm.start({
          rotate: [0, 45, 0, 45, 0],
          transition: {
            duration: 1.5,
            ease: "easeInOut",
          }
        });
        break;
      case "jump":
        // Jump animation for the whole body
        parts.body.start({
          y: [0, -20, 0],
          transition: { 
            duration: 0.5,
            ease: "easeOut" 
          }
        });
        parts.leftLeg.start({
          rotate: [0, -10, 0],
          transition: { 
            duration: 0.5,
            ease: "easeOut" 
          }
        });
        parts.rightLeg.start({
          rotate: [0, -10, 0],
          transition: { 
            duration: 0.5,
            ease: "easeOut" 
          }
        });
        break;
      case "spin":
        parts.body.start({
          rotateY: [0, 360],
          transition: { 
            duration: 1.5,
            ease: "easeInOut" 
          }
        });
        break;
      case "idle":
        // Subtle breathing animation
        parts.body.start({
          y: [0, -2, 0],
          scale: [1, 1.01, 1],
          transition: { 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        });
        break;
    }
  }, [animationState]);

  // Handle interaction animations
  const handleInteraction = () => {
    // Random reactions when clicked
    const reactions = ["wave", "jump", "spin"];
    const randomReaction = reactions[Math.floor(Math.random() * reactions.length)] as "wave" | "jump" | "spin";
    setAnimationState(randomReaction);
    
    // Set happy mood when interacted with
    setMood("happy");
    
    // Reset animation after it completes
    setTimeout(() => {
      setAnimationState("idle");
    }, 2000);
  };

  return (
    <div 
      className={`relative ${className} w-full max-w-[300px] h-[400px] mx-auto select-none`}
      ref={chibiRef}
      onClick={handleInteraction}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ 
        perspective: "1000px",
        transformStyle: "preserve-3d",
        cursor: "pointer"
      }}
    >
      {/* 3D Chibi Character */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Body - main part of the chibi */}
        <motion.div 
          className="relative w-48 h-60"
          animate={parts.body}
          style={{ 
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
            zIndex: 10
          }}
        >
          {/* Base body shape */}
          <div className="absolute inset-0 bg-[#2c2c2c] rounded-3xl shadow-lg z-10 transform-gpu -translate-y-4"></div>
          
          {/* T-shirt */}
          <div className="absolute inset-x-0 bottom-0 top-12 bg-[#212121] rounded-2xl shadow-inner z-20 transform-gpu"></div>
          
          {/* Neck */}
          <div className="absolute top-0 left-1/2 w-10 h-5 -ml-5 bg-[#ffbd95] rounded-b-lg z-30 transform-gpu"></div>
          
          {/* Left arm */}
          <motion.div 
            className="absolute top-16 left-0 w-10 h-32 z-0"
            animate={parts.leftArm}
            style={{ 
              transformOrigin: "top center",
              zIndex: 5
            }}
          >
            <div className="absolute inset-0 bg-[#212121] rounded-2xl shadow-lg transform-gpu"></div>
            {/* Hand */}
            <div className="absolute bottom-0 left-1/2 -ml-5 w-10 h-10 bg-[#ffbd95] rounded-full transform-gpu"></div>
          </motion.div>
          
          {/* Right arm */}
          <motion.div 
            className="absolute top-16 right-0 w-10 h-32 z-0"
            animate={parts.rightArm}
            style={{ 
              transformOrigin: "top center",
              zIndex: 5
            }}
          >
            <div className="absolute inset-0 bg-[#212121] rounded-2xl shadow-lg transform-gpu"></div>
            {/* Hand */}
            <div className="absolute bottom-0 left-1/2 -ml-5 w-10 h-10 bg-[#ffbd95] rounded-full transform-gpu"></div>
          </motion.div>
          
          {/* Left leg */}
          <motion.div 
            className="absolute bottom-0 left-1/4 -ml-5 w-10 h-20 z-0"
            animate={parts.leftLeg}
            style={{ 
              transformOrigin: "top center",
              zIndex: 0
            }}
          >
            <div className="absolute inset-0 bg-[#1a1a1a] rounded-2xl shadow-lg transform-gpu"></div>
            {/* Foot */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#0f0f0f] rounded-b-xl transform-gpu"></div>
          </motion.div>
          
          {/* Right leg */}
          <motion.div 
            className="absolute bottom-0 right-1/4 -mr-5 w-10 h-20 z-0"
            animate={parts.rightLeg}
            style={{ 
              transformOrigin: "top center",
              zIndex: 0
            }}
          >
            <div className="absolute inset-0 bg-[#1a1a1a] rounded-2xl shadow-lg transform-gpu"></div>
            {/* Foot */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#0f0f0f] rounded-b-xl transform-gpu"></div>
          </motion.div>
        </motion.div>
        
        {/* Head */}
        <motion.div 
          className="absolute top-8 w-44 h-44"
          animate={parts.head}
          style={{ 
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
            zIndex: 20
          }}
        >
          {/* Base head shape */}
          <div className="absolute inset-0 bg-[#ffbd95] rounded-3xl shadow-lg transform-gpu"></div>
          
          {/* Hair */}
          <motion.div 
            className="absolute -top-4 -left-4 -right-4 h-28 bg-[#1a1a1a] rounded-t-3xl transform-gpu z-10"
            animate={parts.hair}
            style={{ transformOrigin: "center top" }}
          ></motion.div>
          
          {/* Hair sides */}
          <div className="absolute top-10 left-0 w-6 h-20 bg-[#1a1a1a] rounded-l-lg transform-gpu z-10"></div>
          <div className="absolute top-10 right-0 w-6 h-20 bg-[#1a1a1a] rounded-r-lg transform-gpu z-10"></div>
          
          {/* Hair tuft */}
          <div className="absolute -top-6 left-1/2 -ml-4 w-8 h-10 bg-[#1a1a1a] rounded-t-full transform-gpu rotate-12 z-5"></div>
          <div className="absolute -top-4 right-1/3 w-8 h-8 bg-[#1a1a1a] rounded-full transform-gpu rotate-12 z-5"></div>

          {/* Face */}
          <motion.div 
            className="absolute top-14 left-1/2 -ml-16 w-32 h-24"
            animate={parts.face}
            style={{ zIndex: 20 }}
          >
            {/* Eyes container */}
            <div className="relative flex justify-between items-center w-full">
              {/* Left eye */}
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-white rounded-full transform-gpu"></div>
                <motion.div 
                  className="absolute top-1/2 left-1/2 w-5 h-5 bg-[#222] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"
                  animate={{
                    x: lookDirection.x * 3,
                    y: lookDirection.y * 2
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                ></motion.div>
                {isBlinking && (
                  <motion.div
                    className="absolute inset-0 bg-[#ffbd95] rounded-full transform-gpu z-20"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 0.1 }}
                  ></motion.div>
                )}
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full z-20"></div>
              </div>
              
              {/* Right eye */}
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-white rounded-full transform-gpu"></div>
                <motion.div 
                  className="absolute top-1/2 left-1/2 w-5 h-5 bg-[#222] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"
                  animate={{
                    x: lookDirection.x * 3,
                    y: lookDirection.y * 2
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                ></motion.div>
                {isBlinking && (
                  <motion.div
                    className="absolute inset-0 bg-[#ffbd95] rounded-full transform-gpu z-20"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 0.1 }}
                  ></motion.div>
                )}
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full z-20"></div>
              </div>
            </div>
            
            {/* Nose */}
            <div className="absolute top-14 left-1/2 -ml-1 w-2 h-3 bg-[#ffac83] rounded-full transform-gpu z-20"></div>
            
            {/* Mouth - changes based on mood */}
            <AnimatePresence mode="wait">
              {mood === "neutral" && (
                <motion.div
                  key="neutral"
                  className="absolute top-20 left-1/2 -ml-4 w-8 h-1 bg-[#333] rounded-full transform-gpu z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
              )}
              
              {mood === "happy" && (
                <motion.div
                  key="happy"
                  className="absolute top-18 left-1/2 -ml-6 w-12 h-6 border-b-2 border-[#333] rounded-b-full transform-gpu z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
              )}
              
              {mood === "surprised" && (
                <motion.div
                  key="surprised"
                  className="absolute top-18 left-1/2 -ml-3 w-6 h-6 bg-transparent border-2 border-[#333] rounded-full transform-gpu z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
              )}
              
              {mood === "thinking" && (
                <motion.div
                  key="thinking"
                  className="absolute top-18 left-1/2 -ml-6 w-8 h-1 bg-[#333] rounded-full skew-x-12 transform-gpu z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
      
      {/* 3D shadow effect */}
      <div className="absolute bottom-0 left-1/2 -ml-20 w-40 h-4 bg-black/20 rounded-full blur-md"></div>
      
      {/* Reflection and highlights for 3D effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none rounded-3xl"></div>
      
      {/* Interactive glowing effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-primary-500/0 rounded-3xl pointer-events-none"
        animate={{ 
          boxShadow: isHovering 
            ? "0 0 20px 2px rgba(99, 102, 241, 0.3)" 
            : "0 0 0px 0px rgba(99, 102, 241, 0)" 
        }}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </div>
  );
};

export default InteractiveChibi3D;
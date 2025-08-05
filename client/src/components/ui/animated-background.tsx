import React, { useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className = "" }) => {
  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg opacity-10"></div>
      
      {/* Gradient blobs */}
      <motion.div 
        className="absolute -top-32 -left-32 w-96 h-96 bg-primary-500 rounded-full opacity-10 blur-3xl"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 -right-32 w-96 h-96 bg-secondary-500 rounded-full opacity-10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div 
        className="absolute -bottom-32 left-1/2 w-96 h-96 bg-accent-500 rounded-full opacity-10 blur-3xl"
        animate={{
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 opacity-20">
        <FloatingShape />
      </div>
      
      <div className="absolute bottom-1/3 left-1/5 opacity-20">
        <FloatingShape type="circle" />
      </div>
      
      <div className="absolute top-2/3 right-1/3 opacity-20">
        <FloatingShape type="diamond" />
      </div>
    </div>
  );
};

interface FloatingShapeProps {
  type?: "square" | "circle" | "diamond";
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ type = "square" }) => {
  const randomDuration = useRef(Math.random() * 8 + 8); // Between 8-16s
  
  let shapeClass = "w-8 h-8 border border-primary-500/30";
  
  if (type === "square") {
    shapeClass += " rounded-md";
  } else if (type === "circle") {
    shapeClass += " rounded-full";
  } else if (type === "diamond") {
    shapeClass += " rotate-45";
  }
  
  return (
    <motion.div
      className={shapeClass}
      animate={{
        y: [0, -20, 0],
        opacity: [0.4, 0.7, 0.4],
        rotate: type === "diamond" ? [45, 90, 45] : [0, 45, 0],
      }}
      transition={{
        duration: randomDuration.current,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

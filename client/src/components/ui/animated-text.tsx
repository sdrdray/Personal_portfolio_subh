import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  texts: string[];
  speed?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  speed = 100,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isTyping) {
      if (!isDeleting && displayText === texts[currentIndex]) {
        // Pause at full text before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else if (isDeleting && displayText === "") {
        // Move to next text after fully deleted
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        // Handle typing or deleting
        timer = setTimeout(() => {
          if (isDeleting) {
            setDisplayText(texts[currentIndex].substring(0, displayText.length - 1));
          } else {
            setDisplayText(texts[currentIndex].substring(0, displayText.length + 1));
          }
        }, isDeleting ? speed / 2 : speed);
      }
    }
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, isTyping, texts, speed]);
  
  return (
    <span className={`${className} typing`}>
      {displayText}
    </span>
  );
};

interface FadeInTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeInText: React.FC<FadeInTextProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
}) => {
  return (
    <span className={`gradient-text ${className}`}>
      {children}
    </span>
  );
};

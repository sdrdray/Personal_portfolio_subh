import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [cursorSize, setCursorSize] = useState({ width: 20, height: 20 });
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smoothly animate cursor position
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Handle cursor over interactive elements
    const handleInteractiveEnter = () => {
      setCursorSize({ width: 40, height: 40 });
    };

    const handleInteractiveLeave = () => {
      setCursorSize({ width: 20, height: 20 });
    };

    window.addEventListener("mousemove", moveCursor);

    // Add event listeners to all interactive elements
    const interactiveElements = document.querySelectorAll("a, button, input, textarea, select");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleInteractiveEnter);
      el.addEventListener("mouseleave", handleInteractiveLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractiveEnter);
        el.removeEventListener("mouseleave", handleInteractiveLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 mix-blend-difference"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: cursorSize.width,
        height: cursorSize.height,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <motion.div
        className="rounded-full bg-primary-500 bg-opacity-50"
        style={{ width: "100%", height: "100%" }}
      />
    </motion.div>
  );
};

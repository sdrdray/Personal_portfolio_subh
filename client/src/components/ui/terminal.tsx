import React from "react";
import { motion } from "framer-motion";

interface TerminalProps {
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ className = "" }) => {
  return (
    <motion.div 
      className={`relative w-full h-full bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-2xl glow ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="bg-slate-900 px-4 py-2 flex items-center space-x-1">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-4 font-mono text-xs text-slate-400">~/portfolio</div>
      </div>
      
      <div className="p-4 font-mono text-sm h-full overflow-hidden">
        <div className="mb-2">
          <span className="text-green-400">➜</span>
          <span className="text-primary-400"> ~/portfolio</span>
          <span className="text-white"> ls -la</span>
        </div>
        
        <div className="mb-2 text-slate-300">
          <span>total 16</span>
        </div>
        
        <div className="text-xs">
          <div className="flex mb-1">
            <span className="text-blue-400 w-10">drwxr-xr-x</span>
            <span className="text-slate-500 w-14">subhradip</span>
            <span className="text-slate-500 w-14">staff</span>
            <span className="text-slate-500 w-10">4096</span>
            <span className="text-slate-500 w-16">Jun 12 12:30</span>
            <span className="text-primary-300">projects/</span>
          </div>
          <div className="flex mb-1">
            <span className="text-blue-400 w-10">drwxr-xr-x</span>
            <span className="text-slate-500 w-14">subhradip</span>
            <span className="text-slate-500 w-14">staff</span>
            <span className="text-slate-500 w-10">4096</span>
            <span className="text-slate-500 w-16">Jun 10 15:45</span>
            <span className="text-primary-300">skills/</span>
          </div>
          <div className="flex mb-1">
            <span className="text-blue-400 w-10">drwxr-xr-x</span>
            <span className="text-slate-500 w-14">subhradip</span>
            <span className="text-slate-500 w-14">staff</span>
            <span className="text-slate-500 w-10">4096</span>
            <span className="text-slate-500 w-16">Jun 05 09:12</span>
            <span className="text-primary-300">experience/</span>
          </div>
          <div className="flex mb-1">
            <span className="text-slate-400 w-10">-rw-r--r--</span>
            <span className="text-slate-500 w-14">subhradip</span>
            <span className="text-slate-500 w-14">staff</span>
            <span className="text-slate-500 w-10">2048</span>
            <span className="text-slate-500 w-16">Jun 01 10:00</span>
            <span className="text-yellow-300">README.md</span>
          </div>
          <div className="flex mb-1">
            <span className="text-slate-400 w-10">-rw-r--r--</span>
            <span className="text-slate-500 w-14">subhradip</span>
            <span className="text-slate-500 w-14">staff</span>
            <span className="text-slate-500 w-10">1024</span>
            <span className="text-slate-500 w-16">May 28 14:20</span>
            <span className="text-green-300">resume.pdf</span>
          </div>
        </div>
        
        <div className="mt-4">
          <span className="text-green-400">➜</span>
          <span className="text-primary-400"> ~/portfolio</span>
          <span className="text-white"> cat README.md</span>
        </div>
        
        <div className="mt-2 text-yellow-300">
          # Subhradip's Portfolio
          <div className="text-slate-300 mt-1">
            A passionate developer specializing in ML & Web Development.<br />
            Explore my projects, skills, and experience below.<br />
            <span className="text-primary-300">&gt; Scroll down to learn more...</span>
          </div>
        </div>
        
        <div className="mt-4">
          <span className="text-green-400">➜</span>
          <span className="text-primary-400"> ~/portfolio</span>
          <span className="text-white"> _</span>
          <span className="typing-cursor"></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;

import React from "react";
import { motion } from "framer-motion";
import { Typewriter, GradientText } from "@/components/ui/animated-text";
import CliTerminal from "@/components/ui/cli-terminal";
import { typingTexts, socialLinks } from "@/data";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/80 to-slate-900"></div>
      
      <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-2 inline-block px-3 py-1 rounded-full bg-slate-800 bg-opacity-50 text-sm font-medium text-primary-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="mr-1">👋</span> Hi there, I'm
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold font-heading mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block">Subhradip</span>
              <span className="text-3xl md:text-5xl text-slate-400">
                I am a/an <Typewriter texts={typingTexts} className="text-primary-400" />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              A passionate <strong className="text-primary-300">Machine Learning Engineer</strong> and <strong className="text-primary-300">Web Developer</strong> creating intuitive, responsive applications and data-driven solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.a 
                href="#projects" 
                className="px-6 py-3 rounded-full bg-primary-500 hover:bg-primary-600 transition-all text-white font-medium flex items-center group"
                whileHover={{ 
                  scale: 1.05, 
                  x: 5
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <motion.i 
                  className="ri-arrow-right-line ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                ></motion.i>
              </motion.a>
              
              <motion.a 
                href="https://drive.google.com/drive/folders/1O7aqGpNvdC8ZKO_IaDD2-oaUx3rboP3E" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-slate-700 bg-slate-800/80 hover:border-primary-400 transition-all font-medium flex items-center group hover:bg-slate-800/50"
                whileHover={{ 
                  scale: 1.05, 
                  x: 5
                }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
                <motion.i 
                  className="ri-download-line ml-2"
                  whileHover={{ y: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                ></motion.i>
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center space-x-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="text-sm text-slate-500">Connect with me:</div>
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <i className={`${link.icon} text-xl`}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <div className="order-1 lg:order-2 flex justify-center relative">
            <motion.div 
              className="w-full max-w-md relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* CLI Terminal */}
              <CliTerminal />
              
              {/* Removed floating shapes */}
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <a 
            href="#about" 
            className="p-2 rounded-full border border-slate-700 bg-slate-800/80 border-glow"
          >
            <i className="ri-arrow-down-line text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { motion } from "framer-motion";
import { GradientText } from "./ui/animated-text";
import { socialLinks, personalInfo } from "@/data";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-slate-800 relative">
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a href="#hero" className="text-2xl font-heading font-bold tracking-tighter">
              <GradientText>Subhradip</GradientText>
            </a>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              A passionate Machine Learning Engineer and Web Developer creating intuitive solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-bold mb-4">Let's Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.slice(0, 4).map((link, index) => (
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
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-sm text-slate-500 mb-4 md:mb-0">
            &copy; {currentYear} Subhradip. All rights reserved.
          </div>

          <div className="flex items-center text-sm text-slate-500">
            <span>Built with</span>
            <i className="ri-heart-fill text-red-500 mx-1"></i>
            <span>using React, Tailwind & Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { useTheme } from "@/hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";
import { GradientText } from "./ui/animated-text";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <motion.nav
        id="navbar"
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2 bg-slate-900/80 backdrop-blur-lg shadow-md" : "py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="glass mx-auto px-6 py-4 flex items-center justify-between transition-all duration-300">
          <div className="flex items-center">
            <a href="#hero" className="text-2xl font-heading font-bold tracking-tighter">
              <GradientText>Subhradip</GradientText>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary-300 transition-colors duration-300">About</a>
            <a href="#projects" className="hover:text-primary-300 transition-colors duration-300">Projects</a>
            <a href="#experience" className="hover:text-primary-300 transition-colors duration-300">Experience</a>
            <a href="#skills" className="hover:text-primary-300 transition-colors duration-300">Skills</a>
            <a href="#researchpapers" className="hover:text-primary-300 transition-colors duration-300">Research</a>
            <a href="#contact" className="hover:text-primary-300 transition-colors duration-300">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              <i className={`text-xl ${theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'}`}></i>
            </button>

            <a 
              href="#contact" 
              className="hidden md:block px-5 py-2 rounded-full bg-primary-500 hover:bg-primary-600 transition-colors text-white font-medium"
            >
              Get in touch
            </a>

            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full hover:bg-slate-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <i className={`text-xl ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 bg-slate-900 bg-opacity-95 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-8 text-2xl font-heading"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              onClick={closeMobileMenu}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <i className="ri-close-line text-xl"></i>
            </button>

            <a href="#hero" onClick={closeMobileMenu} className="hover:text-primary-400 transition-colors">Home</a>
            <a href="#about" onClick={closeMobileMenu} className="hover:text-primary-400 transition-colors">About</a>
            <a href="#projects" onClick={closeMobileMenu} className="hover:text-primary-400 transition-colors">Projects</a>
            <a href="#experience" onClick={closeMobileMenu} className="hover:text-primary-400 transition-colors">Experience</a>
            <a href="#skills" onClick={closeMobileMenu} className="hover:text-primary-400 transition-colors">Skills</a>
            <a href="#researchpapers" onClick={closeMobileMenu} className="hover:text-primary-400 transition-colors">Research</a>
            <a href="#contact" onClick={closeMobileMenu} className="hover:text-primary-400 transition-colors">Contact</a>

            <div className="flex items-center space-x-4 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-slate-700 hover:border-primary-500 transition-all">
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-slate-700 hover:border-primary-500 transition-all">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="mailto:example@email.com" className="p-2 rounded-full border border-slate-700 hover:border-primary-500 transition-all">
                <i className="ri-mail-fill text-xl"></i>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

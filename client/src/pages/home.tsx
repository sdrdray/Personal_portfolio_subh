import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { GlitterEffect } from "@/components/ui/glitter-effect";

const HomePage: React.FC = () => {
  return (
    <div className="dark:bg-slate-900 text-slate-200 font-sans overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;

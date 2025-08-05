import React from "react";
import { motion } from "framer-motion";
import { useSectionVisibility } from "@/hooks/use-section-visibility";
import { personalInfo } from "@/data";
// Import the profile image from assets 
import profileImage from "../assets/profile-image.png";

const About: React.FC = () => {
  const [ref, isVisible] = useSectionVisibility<HTMLElement>();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      ref={ref}
      className="py-20 post-cli-section"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            About <span className="text-primary-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-5 order-2 lg:order-1"
            variants={itemVariants}
          >
            <div className="relative flex justify-center">
              <div className="w-full flex justify-center">
                <div className="rounded-xl overflow-hidden border border-slate-700 shadow-lg p-4" style={{ boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" }}>
                  {/* AI-generated Character Image */}
                  <motion.div 
                    className="w-full h-[400px] relative cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img 
                      src={profileImage} 
                      alt="Developer Profile" 
                      className="rounded-2xl object-contain h-full w-full"
                      style={{
                        boxShadow: "0 0 10px 2px rgba(59, 130, 246, 0.3)"
                      }}
                    />
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 border-glow"
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-3xl">👨‍💻</span>
              </motion.div>

              <motion.div
                className="absolute -top-6 -left-6 p-3 rounded-xl border border-slate-700 bg-slate-800/80 border-glow"
                variants={itemVariants}
              >
                <div className="text-sm flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <span>Available for work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 order-1 lg:order-2"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              {personalInfo.title}
            </h3>

            <p className="text-slate-300 mb-6">
              {personalInfo.bio}
            </p>

            <p className="text-slate-300 mb-6">
              {personalInfo.bio2}
            </p>

            <p className="text-slate-300 mb-6">
              {personalInfo.bio3}
            </p>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
              variants={containerVariants}
            >
              <motion.div className="flex items-center space-x-3" variants={itemVariants}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <i className="ri-graduation-cap-fill text-primary-400"></i>
                </div>
                <div>
                  <h4 className="font-medium">Education</h4>
                  <p className="text-sm text-slate-400">{personalInfo.education}</p>
                </div>
              </motion.div>

              <motion.div className="flex items-center space-x-3" variants={itemVariants}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <i className="ri-map-pin-fill text-primary-400"></i>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-slate-400">{personalInfo.location}</p>
                </div>
              </motion.div>

              <motion.div className="flex items-center space-x-3" variants={itemVariants}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <i className="ri-briefcase-fill text-primary-400"></i>
                </div>
                <div>
                  <h4 className="font-medium">Experience</h4>
                  <p className="text-sm text-slate-400">{personalInfo.experience}</p>
                </div>
              </motion.div>

              <motion.div className="flex items-center space-x-3" variants={itemVariants}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <i className="ri-translate-2 text-primary-400"></i>
                </div>
                <div>
                  <h4 className="font-medium">Languages</h4>
                  <p className="text-sm text-slate-400">{personalInfo.languages}</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              variants={containerVariants}
            >
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-primary-500 hover:bg-primary-600 transition-all text-white font-medium flex items-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                Download Resume
                <motion.i
                  className="ri-download-line ml-2"
                  animate={{ y: 0 }}
                  whileHover={{ y: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                ></motion.i>
              </motion.a>

              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-full border border-slate-700 hover:border-primary-400 transition-all font-medium flex items-center group hover:bg-slate-800/50"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                Get in Touch
                <motion.i
                  className="ri-arrow-right-line ml-2"
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                ></motion.i>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import { useSectionVisibility } from "@/hooks/use-section-visibility";
import { skillCategories } from "@/data";

const Skills: React.FC = () => {
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
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="py-20 post-cli-section"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Technical <span className="text-primary-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-slate-400">
            The technologies, languages, and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl border border-slate-700 shadow-lg bg-slate-800/80"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <i className={`${category.icon} text-primary-400 mr-2`}></i> {category.title}
              </h3>

              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 gap-6"
                variants={containerVariants}
              >
                {category.skills.map((skill, i) => (
                  <motion.div 
                    key={i} 
                    className="flex flex-col items-center"
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="w-16 h-16 flex items-center justify-center bg-slate-800 rounded-full mb-3 relative overflow-hidden border border-slate-700 border-glow"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      {skill.icon ? (
                        <i className={`${skill.icon} text-3xl text-${skill.name === 'Python' ? 'blue' : skill.name === 'JavaScript' ? 'yellow' : 'primary'}-400`}></i>
                      ) : (
                        <span className="text-2xl font-bold text-primary-500">{skill.name.substring(0, 2)}</span>
                      )}
                    </motion.div>
                    <span className="text-sm font-medium">{skill.name}</span>
                    <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
                      <motion.div 
                        className="bg-primary-500 h-1.5 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;

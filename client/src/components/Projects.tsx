import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionVisibility } from "@/hooks/use-section-visibility";
import { projects } from "@/data";

const Projects: React.FC = () => {
  const [ref, isVisible] = useSectionVisibility<HTMLElement>();
  const [filter, setFilter] = useState<string>("All");
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <motion.section
      id="projects"
      ref={ref}
      className="py-20 post-cli-section"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <motion.div className="text-center md:text-left" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              My <span className="text-primary-400">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto md:mx-0 rounded-full mb-4"></div>
            <p className="max-w-2xl text-slate-400">
              A showcase of my recent work spanning machine learning, web development, and data science.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center mb-8"
          variants={itemVariants}
        >
          <div className="flex flex-wrap gap-2 bg-slate-800/80 border border-slate-700 px-2 py-1 rounded-full">
            <motion.button
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === "All" ? "bg-primary-500 text-white" : "hover:bg-slate-700"
              }`}
              onClick={() => setFilter("All")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === "Machine Learning" ? "bg-primary-500 text-white" : "hover:bg-slate-700"
              }`}
              onClick={() => setFilter("Machine Learning")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Machine Learning
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === "Web Dev" ? "bg-primary-500 text-white" : "hover:bg-slate-700"
              }`}
              onClick={() => setFilter("Web Dev")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Web Dev
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === "Mobile Dev" ? "bg-primary-500 text-white" : "hover:bg-slate-700"
              }`}
              onClick={() => setFilter("Mobile Dev")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mobile Dev
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === "Data Science" ? "bg-primary-500 text-white" : "hover:bg-slate-700"
              }`}
              onClick={() => setFilter("Data Science")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Data Science
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card rounded-xl overflow-hidden border border-slate-700 bg-slate-800/80 border-glow"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium bg-${
                    project.category === "Machine Learning" ? "primary" : 
                    project.category === "Web Dev" ? "secondary" : "accent"
                  }-500 bg-opacity-90`}>
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 rounded-full text-xs font-medium bg-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors flex items-center"
                        whileHover={{ x: 3 }}
                      >
                        View Project <i className="ri-arrow-right-line ml-1"></i>
                      </motion.a>
                    </div>

                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-primary-400 transition-colors"
                          whileHover={{ scale: 1.2 }}
                        >
                          <i className="ri-github-fill"></i>
                        </motion.a>
                      )}
                      {project.demoUrl && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-primary-400 transition-colors"
                          whileHover={{ scale: 1.2 }}
                        >
                          <i className="ri-external-link-line"></i>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com/sdrdray?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full border border-slate-700 hover:border-primary-400 transition-all font-medium"
            whileHover={{ 
              scale: 1.05
            }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;

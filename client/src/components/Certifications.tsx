import React from "react";
import { motion } from "framer-motion";
import { useSectionVisibility } from "@/hooks/use-section-visibility";
import { certifications, researchPapers } from "@/data";

const Certifications: React.FC = () => {
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

  return (
    <motion.section
      id="certifications"
      ref={ref}
      className="py-20 relative post-cli-section"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            <span className="text-primary-400">Certifications</span> & Achievements
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-slate-400">
            Recognized credentials and accomplishments in various technical domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              className="p-6 rounded-xl border border-slate-700 bg-slate-800/80 border-glow"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02
              }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium py-1 px-2 rounded bg-slate-700 text-slate-300">
                      {cert.date}
                    </span>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-500/20 text-primary-400">
                      <i className="ri-medal-line text-xl"></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <p className="text-primary-400 text-sm font-medium mt-1">
                    {cert.issuer}
                  </p>
                </div>
                <p className="text-slate-400 text-sm mt-auto mb-4">
                  {cert.description}
                </p>
                <div className="mt-auto">
                  <a 
                    href={cert.verifyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-1 bg-primary-500/10 hover:bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium transition-colors"
                  >
                    <i className="ri-checkbox-circle-line mr-1"></i>
                    View Credentials
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Papers & Hackathons Section */}
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            <span className="text-secondary-400">Research Papers</span> & Hackathons
          </h3>
          <div className="w-20 h-1 bg-secondary-500 mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-slate-400">
            Research Papers & others participations and research and academic contributions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {researchPapers.map((paper) => (
            <motion.div
              key={paper.id}
              className="p-6 rounded-xl border border-slate-700 bg-slate-800/80 border-glow"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02
              }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium py-1 px-2 rounded bg-secondary-500/20 text-secondary-300">
                      {paper.date}
                    </span>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary-500/20 text-secondary-400">
                      <i className="ri-trophy-line text-xl"></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{paper.title}</h3>
                  <p className="text-secondary-400 text-sm font-medium mt-1">
                    {paper.issuer}
                  </p>
                </div>
                <p className="text-slate-400 text-sm mt-auto mb-4">
                  {paper.description}
                </p>
                <div className="mt-auto">
                  <a 
                    href={paper.verifyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-1 bg-secondary-500/10 hover:bg-secondary-500/20 text-secondary-400 rounded-full text-sm font-medium transition-colors"
                  >
                    <i className="ri-external-link-line mr-1"></i>
                    View Details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
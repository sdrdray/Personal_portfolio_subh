import React from "react";
import { motion } from "framer-motion";
import { useSectionVisibility } from "@/hooks/use-section-visibility";

// Define the Research Paper type
interface ResearchPaper {
  id: number;
  title: string;
  description: string;
  time: string;
  verifyUrl: string;
}

// Sample research paper data
const researchPapers: ResearchPaper[] = [
  {
    id: 1,
    title: "CNN Model Paper",
    description: "By employing convolutional layers to automatically learn spatial hierarchies of features, CNNs have achieved state-of-the-art results in various computer vision tasks.",
    time: "Jul 2024",
    verifyUrl: "#" // This can be updated later
  }
];

const ResearchPapers: React.FC = () => {
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
      id="researchpapers"
      ref={ref}
      className="py-20 post-cli-section"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Research <span className="text-primary-400">Papers</span> & Others
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-slate-400">
            Academic contributions and research work in machine learning and computer vision.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
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
                    <span className="text-xs font-medium py-1 px-2 rounded bg-slate-700 text-slate-300">
                      {paper.time}
                    </span>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-500/20 text-primary-400">
                      <i className="ri-file-paper-2-line text-xl"></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{paper.title}</h3>
                </div>
                
                <p className="text-slate-400 text-sm mt-auto flex-grow">
                  {paper.description}
                </p>
                
                <div className="mt-4">
                  <a 
                    href={paper.verifyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-1 bg-primary-500/10 hover:bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium transition-colors"
                  >
                    <i className="ri-checkbox-circle-line mr-1"></i>
                    Verify Credentials
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ResearchPapers;
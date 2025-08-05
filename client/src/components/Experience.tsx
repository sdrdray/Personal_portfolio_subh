import React from "react";
import { motion } from "framer-motion";
import { useSectionVisibility } from "@/hooks/use-section-visibility";
import { workExperiences, educationExperiences } from "@/data";
import { useIsMobile } from "@/hooks/use-mobile";
import Clock from "./ui/clock";

const Experience: React.FC = () => {
  const [ref, isVisible] = useSectionVisibility<HTMLElement>();
  const isMobile = useIsMobile();

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

  // Helper function to render a timeline item
  const renderTimelineItem = (exp: any, index: number, isWork: boolean = true) => {
    // For left-aligned timeline, all items are on the left side
    return (
      <motion.div
        key={exp.id}
        className="relative"
        variants={itemVariants}
      >
        <div className="absolute top-0 -left-4 md:-left-12 w-8 h-8 bg-primary-500 rounded-full z-10 border-4 border-slate-900"></div>
        
        <motion.div
          className="p-6 rounded-xl ml-8 md:ml-0 relative lifted-card cyan-orange-glow bg-slate-800/90 border border-slate-700"
          whileHover={{ 
            scale: 1.02
          }}
        >
          <span className="absolute -top-3 left-4 px-4 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
            {exp.period}
          </span>
          
          <h3 className="text-xl font-bold mt-4 mb-2">{exp.role}</h3>
          <h4 className="inline-flex items-center justify-center px-4 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium mb-3">{exp.company}</h4>
          <p className="text-sm text-slate-400 mb-4">
            {exp.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag: string, i: number) => (
              <span 
                key={i} 
                className="px-2 py-1 rounded-full text-xs font-medium bg-slate-700 hover:bg-primary-500/30 transition-colors text-white whitespace-nowrap experience-tag"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="py-20 relative post-cli-section"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Work Experience Section - Left Column */}
          <div className="lg:col-span-2">
            <motion.div className="mb-16" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Work <span className="text-primary-400">Experience</span>
              </h2>
              <div className="w-24 h-1 bg-primary-500 rounded-full mb-4"></div>
              <p className="max-w-2xl text-slate-400">
                My professional journey and career highlights in tech and development.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-slate-700 transform -translate-x-1/2"></div>

              {/* Timeline items */}
              <motion.div
                className="space-y-8 pb-8 ml-12"
                variants={containerVariants}
              >
                {workExperiences.map((exp, index) => (
                  renderTimelineItem(exp, index, true)
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Column - Education + Clock */}
          <div>
            <div className="mb-12">
              <motion.div className="mb-8" variants={itemVariants}>
                <h2 className="text-2xl font-bold font-heading mb-4">
                  <span className="text-primary-400">Education</span>
                </h2>
                <div className="w-16 h-1 bg-primary-500 rounded-full mb-4"></div>
              </motion.div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-slate-700 transform -translate-x-1/2"></div>

                {/* Timeline items */}
                <motion.div
                  className="space-y-6 pb-8 ml-12"
                  variants={containerVariants}
                >
                  {educationExperiences.map((exp, index) => (
                    renderTimelineItem(exp, index, false)
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Availability/Clock Section */}
            <motion.div variants={itemVariants} className="mt-16">
              <h3 className="text-xl font-bold mb-4">
                <span className="text-primary-400">Availability</span> (IST +5:30 GMT)
              </h3>
              <div className="mt-4">
                <Clock />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="mt-16 flex justify-center items-center"
          variants={itemVariants}
        >
          <motion.a
            href="https://drive.google.com/drive/folders/1O7aqGpNvdC8ZKO_IaDD2-oaUx3rboP3E"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full border border-slate-700 bg-slate-800/80 hover:border-primary-400 transition-all font-medium"
            whileHover={{ 
              scale: 1.05,
              x: 5
            }}
            whileTap={{ scale: 0.95 }}
          >
            Download Full Resume <i className="ri-download-line ml-2"></i>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;

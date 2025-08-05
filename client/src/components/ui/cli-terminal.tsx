import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, projects, workExperiences, skillCategories, socialLinks } from '@/data';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
  isProcessing?: boolean;
}

const CliTerminal: React.FC = () => {
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Simulate boot sequence
    const bootSequence = async () => {
      setHistory([
        { 
          command: 'boot',
          output: (
            <>
              <span className="text-secondary-400">INITIALIZING SYSTEM...</span><br />
              <span className="text-primary-300">Loading portfolio modules...</span><br/>
              <span className="text-green-500">✓</span> Core modules loaded<br/>
              <span className="text-green-500">✓</span> UI components initialized<br/>
              <span className="text-green-500">✓</span> Data connections established<br/>
              <span className="text-green-500">✓</span> System ready<br/>
            </>
          )
        }
      ]);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Auto execute whoami command
      executeCommand('whoami');
      setIsInitializing(false);
    };
    
    bootSequence();
  }, []);
  
  const executeCommand = (cmd: string) => {
    const commandLower = cmd.toLowerCase().trim();
    let output: React.ReactNode;
    
    // Process the command
    if (commandLower === 'whoami') {
      output = (
        <>
          <span className="text-primary-400 font-bold">
            {personalInfo.name}
          </span><br/>
          <span className="text-slate-300">
            {personalInfo.title}
          </span><br/>
          <span className="text-slate-400">
            {personalInfo.location} • {personalInfo.email}
          </span>
        </>
      );
    } else if (commandLower === 'ls' || commandLower === 'ls -la') {
      output = (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            <span className="text-primary-300">about.md</span>
            <span className="text-primary-300">projects.json</span>
            <span className="text-primary-300">experience.json</span>
            <span className="text-primary-300">education.json</span>
            <span className="text-primary-300">skills.json</span>
            <span className="text-primary-300">contact.sh</span>
            <span className="text-primary-300">resume.pdf</span>
            <span className="text-primary-300">certifications.txt</span>
          </div>
        </>
      );
    } else if (commandLower === 'cat about.md') {
      output = (
        <>
          <span className="text-primary-400 font-bold"># About Me</span><br/><br/>
          <span>{personalInfo.bio}</span><br/><br/>
          <span>{personalInfo.bio2}</span><br/><br/>
          <span>{personalInfo.bio3}</span>
        </>
      );
    } else if (commandLower === 'cat certifications.txt') {
      output = (
        <>
          <span className="text-primary-400 font-bold"># Certifications Portfolio</span><br/><br/>
          <span className="text-secondary-300 font-semibold">MICROSOFT AZURE (5 Certifications)</span><br/>
          <span className="text-slate-300">• Azure AI Document Intelligence (May 2025)</span><br/>
          <span className="text-slate-300">• Build AI Apps Challenge (Jan 2025)</span><br/>
          <span className="text-slate-300">• AI Copilot with Cosmos DB & OpenAI (Nov 2024)</span><br/>
          <span className="text-slate-300">• IoT Data Streaming (Oct 2024)</span><br/>
          <span className="text-slate-300">• Azure Container Apps (Oct 2024)</span><br/><br/>
          
          <span className="text-secondary-300 font-semibold">CISCO NETWORKING ACADEMY (1 Certification)</span><br/>
          <span className="text-slate-300">• CCNAv7: Introduction to Networks (Feb 2025)</span><br/><br/>
          
          <span className="text-secondary-300 font-semibold">FORAGE (1 Certification)</span><br/>
          <span className="text-slate-300">• Accenture North America Coding Simulation (Dec 2024)</span><br/><br/>
          
          <span className="text-secondary-300 font-semibold">SERVICENOW (1 Certification)</span><br/>
          <span className="text-slate-300">• Admin Fundamentals On-Demand (Jun 2025)</span><br/><br/>
          
          <span className="text-secondary-300 font-semibold">NPTEL - IIT MADRAS (2 Certifications)</span><br/>
          <span className="text-slate-300">• Joy of Computing Using Python (Oct 2024)</span><br/>
          <span className="text-slate-300">• Python for Data Science (Feb 2024)</span><br/><br/>
          
          <span className="text-secondary-300 font-semibold">UDEMY (10 Certifications)</span><br/>
          <span className="text-slate-300">• AWS Solutions Architect Associate (Dec 2025)</span><br/>
          <span className="text-slate-300">• AWS Developer Associate (Mar 2025)</span><br/>
          <span className="text-slate-300">• ASP.NET C# Programming (Mar 2025)</span><br/>
          <span className="text-slate-300">• Android App Development Bootcamp (Feb 2025)</span><br/>
          <span className="text-slate-300">• JavaScript & TypeScript Full-Stack (Jan 2025)</span><br/>
          <span className="text-slate-300">• Power BI + Tableau + SQL (Jan 2025)</span><br/>
          <span className="text-slate-300">• Full Stack Web Developer Bootcamp (Dec 2024)</span><br/>
          <span className="text-slate-300">• React with TypeScript (Dec 2024)</span><br/>
          <span className="text-slate-300">• CSS, JavaScript & PHP (Nov 2024)</span><br/>
          <span className="text-slate-300">• Python and Django Framework (Oct 2024)</span><br/><br/>
          
          <span className="text-green-400">Total: 20 Professional Certifications</span><br/>
          <span className="text-blue-400">📝 Type 'view credentials' to visit LinkedIn profile</span>
        </>
      );
    } else if (commandLower === 'cat projects.json') {
      output = (
        <>
          <span className="text-primary-400 font-bold"># Projects Portfolio</span><br/><br/>
          {projects.map((project, index) => (
            <React.Fragment key={project.id}>
              <span className="text-secondary-300 font-semibold">{index + 1}. {project.title}</span><br/>
              <span className="text-slate-300">Category: {project.category}</span><br/>
              <span className="text-slate-400">{project.description}</span><br/>
              <span className="text-primary-300">Technologies: {project.tags.join(', ')}</span><br/>
              <span className="text-blue-400">GitHub: {project.githubUrl}</span><br/><br/>
            </React.Fragment>
          ))}
        </>
      );
    } else if (commandLower === 'cat experience.json') {
      output = (
        <>
          <span className="text-primary-400 font-bold"># Professional Experience</span><br/><br/>
          {workExperiences.map((exp, index) => (
            <React.Fragment key={exp.id}>
              <span className="text-secondary-300 font-semibold">{exp.role}</span><br/>
              <span className="text-primary-300">{exp.company}</span><br/>
              <span className="text-slate-300">{exp.period}</span><br/>
              <span className="text-slate-400">{exp.description}</span><br/>
              <span className="text-blue-400">Skills: {exp.tags.join(', ')}</span><br/><br/>
            </React.Fragment>
          ))}
        </>
      );
    } else if (commandLower === 'cat education.json') {
      output = (
        <>
          <span className="text-primary-400 font-bold"># Education Background</span><br/><br/>
          <span className="text-secondary-300 font-semibold">Amity University, Noida</span><br/>
          <span className="text-primary-300">Bachelor of Technology (BTech) in Computer Science</span><br/>
          <span className="text-slate-300">Aug 2022 - Aug 2026</span><br/>
          <span className="text-slate-400">Relevant Coursework: Data Structures, Python, C++, Java, Software Engineering</span><br/>
          <span className="text-slate-400">Domain Electives: Generative AI, Cisco CCNAV7, Data Mining</span><br/><br/>
          
          <span className="text-secondary-300 font-semibold">BTech Specialization</span><br/>
          <span className="text-primary-300">Computer Science (Hons. Specialization in AI & ML)</span><br/>
          <span className="text-slate-300">Dec 2023 - Jan 2026</span><br/>
          <span className="text-slate-400">Coursework: Intro to AI & ML, Data Analytics, Deep Learning, Neural Networks</span><br/><br/>
          
          <span className="text-secondary-300 font-semibold">Sri Sri Ravishankar Vidyamandir, Agartala</span><br/>
          <span className="text-primary-300">Higher Secondary (12th Science - PCMB) | 88%</span><br/>
          <span className="text-slate-300">May 2020 - Jul 2022</span><br/>
          <span className="text-primary-300">Secondary Level (10th CBSE) | 85.2%</span><br/>
          <span className="text-slate-300">Mar 2018 - Jun 2020</span><br/>
        </>
      );
    } else if (commandLower === 'cat skills.json') {
      output = (
        <>
          <span className="text-primary-400 font-bold"># Technical Skills</span><br/><br/>
          {skillCategories.map((category, index) => (
            <React.Fragment key={index}>
              <span className="text-secondary-300 font-semibold">{category.title}</span><br/>
              {category.skills.map((skill, skillIndex) => (
                <React.Fragment key={skillIndex}>
                  <span className="text-slate-300">• {skill.name} ({skill.level}/5)</span>
                  {skillIndex < category.skills.length - 1 && <br />}
                </React.Fragment>
              ))}
              <br/><br/>
            </React.Fragment>
          ))}
        </>
      );
    } else if (commandLower === 'cat contact.sh') {
      output = (
        <>
          <span className="text-primary-400 font-bold"># Contact Information</span><br/><br/>
          <span className="text-secondary-300 font-semibold">Email:</span> <span className="text-slate-300">{personalInfo.email}</span><br/>
          <span className="text-secondary-300 font-semibold">Location:</span> <span className="text-slate-300">{personalInfo.location}</span><br/>
          <span className="text-secondary-300 font-semibold">Languages:</span> <span className="text-slate-300">{personalInfo.languages}</span><br/><br/>
          
          <span className="text-primary-400 font-bold">Social Links:</span><br/>
          {socialLinks.map((link, index) => (
            <React.Fragment key={index}>
              <span className="text-blue-400">• {link.name}: {link.url}</span>
              {index < socialLinks.length - 1 && <br />}
            </React.Fragment>
          ))}
        </>
      );
    } else if (commandLower === 'cat resume.pdf' || commandLower === 'resume.pdf') {
      // Open Google Drive folder with resume
      window.open('https://drive.google.com/drive/folders/1O7aqGpNvdC8ZKO_IaDD2-oaUx3rboP3E', '_blank');
      
      output = (
        <span className="text-green-400">
          📄 Opening resume from Google Drive...
        </span>
      );
    } else if (commandLower === 'view credentials') {
      window.open('https://www.linkedin.com/in/subhradip-debray200X/', '_blank');
      output = (
        <span className="text-green-400">
          🔗 Opening LinkedIn profile with certification details...
        </span>
      );
    } else if (commandLower === 'help') {
      output = (
        <>
          <span className="text-primary-400 font-bold">Available Commands:</span><br/>
          <span className="text-primary-300">whoami</span> - Display basic information<br/>
          <span className="text-primary-300">ls</span> - List available sections<br/>
          <span className="text-primary-300">cat about.md</span> - View about information<br/>
          <span className="text-primary-300">cat projects.json</span> - View all projects<br/>
          <span className="text-primary-300">cat experience.json</span> - View work experience<br/>
          <span className="text-primary-300">cat education.json</span> - View education background<br/>
          <span className="text-primary-300">cat skills.json</span> - View technical skills<br/>
          <span className="text-primary-300">cat contact.sh</span> - View contact information<br/>
          <span className="text-primary-300">cat resume.pdf</span> - Download resume<br/>
          <span className="text-primary-300">cat certifications.txt</span> - View all certifications<br/>
          <span className="text-primary-300">view credentials</span> - Open LinkedIn profile<br/>
          <span className="text-primary-300">clear</span> - Clear terminal history<br/>
          <span className="text-primary-300">help</span> - Display this help menu
        </>
      );
    } else if (commandLower === 'clear') {
      setHistory([]);
      return;
    } else {
      output = (
        <span className="text-red-400">
          Command not found: {cmd}<br/>
          Type <span className="text-primary-300">help</span> to see available commands
        </span>
      );
    }
    
    setHistory(prev => [...prev, { command: cmd, output }]);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentCommand) {
      executeCommand(currentCommand);
      setCurrentCommand('');
    }
  };
  
  return (
    <motion.div 
      className="relative w-full font-mono text-sm rounded-lg overflow-hidden glass halo-glow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-1.5 bg-slate-800 px-4 py-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-2 text-slate-400 text-xs">portfolio ~ subhradip@terminal</div>
      </div>
      
      {/* Terminal Body */}
      <div className="bg-slate-900/80 p-4 h-64 overflow-y-auto scrollbar-hidden">
        {/* Command History */}
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            {/* Command Prompt */}
            {item.command && (
              <div className="flex">
                <span className="text-green-400">subhradip@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-300">~</span>
                <span className="text-white">$ </span>
                <span className="ml-1">{item.command}</span>
              </div>
            )}
            
            {/* Command Output */}
            <div className="ml-2 mt-1 mb-3">
              {item.output}
            </div>
          </div>
        ))}
        
        {/* Current Command Input */}
        {!isInitializing && (
          <div className="flex">
            <span className="text-green-400">subhradip@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-300">~</span>
            <span className="text-white">$ </span>
            <input
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="ml-1 bg-transparent outline-none flex-grow"
              autoFocus
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CliTerminal;
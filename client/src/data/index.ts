import { Experience, PersonalInfo, Project, SkillCategory, SocialLink, Certification, ResearchPaper } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Weather Image Classification Using Deep Learning",
    description: "Trained a CNN model to classify weather images with 92% accuracy, leveraging data augmentation and transfer learning with EfficientNet architecture for robust weather pattern recognition.",
    image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    category: "Machine Learning",
    tags: ["Python", "TensorFlow", "EfficientNet", "OpenCV"],
    githubUrl: "https://github.com/sdrdray",
    demoUrl: "https://demo.com",
  },
  {
    id: 2,
    title: "UrbanNest: Real Estate WebApp",
    description: "Led end-to-end development of a real estate platform featuring property listings, interactive maps, and role-based authentication using Next.js and Firebase.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    category: "Web Dev",
    tags: ["Next.js", "Firebase", "Leaflet.js", "Tailwind CSS"],
    githubUrl: "https://github.com/sdrdray",
    demoUrl: "https://demo.com",
  },
  {
    id: 3,
    title: "Mall Management WebApp",
    description: "Automated mall operations with centralized shop, event, and parking management, integrated with customer portals for bookings and lost-and-found services.",
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Web Dev",
    tags: ["React", "Next.js", "Firebase", "TypeScript"],
    githubUrl: "https://github.com/sdrdray",
    demoUrl: "https://demo.com",
  },
  {
    id: 4,
    title: "Hospital Management WebApp",
    description: "Designed a role-based system for users, streamlining appointment scheduling, medical records, and billing processes.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Web Dev",
    tags: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/sdrdray",
    demoUrl: "https://demo.com",
  },
  {
    id: 5,
    title: "Advanced Image Analyzer & AI Chat Interface",
    description: "Developed a local AI-powered tool with a browser-based interface for detailed image analysis. Supports chat-based interaction with the AI, mood detection, safety assessment, keyword extraction, and music recommendations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Machine Learning",
    tags: ["Python", "Flask", "Gemini API", "HTML/CSS/JS"],
    githubUrl: "https://github.com/sdrdray",
    demoUrl: "https://demo.com",
  },
  {
    id: 6,
    title: "NutrimeAI: AI-Powered Nutrition & Meal Planning App",
    description: "Designed a full-featured mobile app for AI-based meal planning, nutrition tracking, and recipe generation. Features include food logging, fridge-based suggestions, symptom trackers, and social integrations.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Mobile Dev",
    tags: ["React Native", "TypeScript", "Firebase", "AI APIs"],
    githubUrl: "https://github.com/sdrdray",
    demoUrl: "https://demo.com",
  },
  {
    id: 7,
    title: "Explainable AI for Disaster Image Classification",
    description: "Trained a CNN using disaster datasets (Disaster Image Classification & MEDIC) and integrated XAI visualizations for model interpretability and transparency in disaster response systems.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    category: "Machine Learning",
    tags: ["Python", "TensorFlow", "XAI", "Pretrained CNNs"],
    githubUrl: "https://github.com/sdrdray",
    demoUrl: "https://demo.com",
  },
  {
    id: 8,
    title: "OculusNet: LLM-Powered Network Threat Detection System",
    description: "Built a security platform that detects live threats from PCAP/network data using local LLMs like Gemma/Qwen 4B/1B models. Advanced cybersecurity solution with real-time threat analysis.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    category: "Machine Learning",
    tags: ["Python", "Wireshark", "LM Studio", "Local LLMs", "Flask"],
    githubUrl: "https://github.com/sdrdray",
    demoUrl: "https://demo.com",
  },
];

export const workExperiences: Experience[] = [
  {
    id: 1,
    role: "Frontend & UI/UX Design Intern",
    company: "Winniio Aktiebolag (AB), Gothenburg, Sweden",
    period: "May 2025 - Ongoing",
    description: "Led restructuring and redesign of the LifeAtlas online health portal. Redesigned key webpages using Figma and translated designs into frontend code. Collaborated with global team via Slack; followed structured Git workflows. Built reusable components using Storybook; organized and managed Figma files. Managed GitHub pull requests and contributed to the CI/CD deployment process.",
    tags: ["Figma", "Frontend", "UI/UX Design", "Storybook", "Git", "CI/CD"],
    color: "primary",
  },
  {
    id: 2,
    role: "ServiceNow Certification Program (Industry Training)",
    company: "ServiceNow Training, Bangalore",
    period: "June 2025 - July 2025",
    description: "Enrolled in official ServiceNow CSA training. Learning platform configuration, incident management, and reporting. CSA exam with hands-on labs and guided sessions.",
    tags: ["ServiceNow", "CSA", "Platform Configuration", "Incident Management"],
    color: "primary",
  },
  {
    id: 3,
    role: "React.js Intern – LMS-Based Industry Program",
    company: "Celebal Technologies, Rajasthan",
    period: "May 2025 - July 2025",
    description: "Completed module-based training in web development and UI/UX via the company's LMS. Submitted tasks and mini-projects simulating real-world workflows. Gained hands-on experience with version control, deployment, and modular design. Progress monitored through LMS dashboards with defined weekly milestones.",
    tags: ["React.js", "LMS", "Web Development", "UI/UX", "Version Control"],
    color: "secondary",
  },
  {
    id: 4,
    role: "Web Development Intern",
    company: "Unified Mentor, Gurugram, Haryana",
    period: "Jan 2025 - Mar 2025",
    description: "Developed responsive web applications using Next.js, React, TypeScript, and Firebase, ensuring seamless user authentication and real-time data updates. Collaborated with teams to implement modern UI/UX designs using Tailwind CSS and shadcn/ui.",
    tags: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind CSS", "shadcn/ui"],
    color: "secondary",
  },
  {
    id: 5,
    role: "Machine Learning Intern",
    company: "Unified Mentor, Gurugram, Haryana",
    period: "Nov 2024 - Dec 2024",
    description: "Trained and evaluated ML models for performance metrics such as accuracy, AUC-ROC, MSE, R². Integrated AI components into practical projects, focusing on real-world applicability. Developed prediction-based applications using regression, classification, and deep learning methods.",
    tags: ["Python", "TensorFlow", "Deep Learning", "ML Models", "AUC-ROC", "Regression"],
    color: "accent",
  }
];

export const educationExperiences: Experience[] = [
  {
    id: 1,
    role: "BTech in Computer Science",
    company: "Amity University, Noida",
    period: "Aug 2022 - Aug 2026",
    description: "Bachelor of Technology with Honors specialization in AI & ML. Relevant Coursework: Data Structures, Python, CPP, Java, Compiler Construction, Software Engineering, Database Management, Networking, Operating System, Digital Electronics Engg., Basic Simulation. Domain Electives: Generative AI, Cisco CCNAV7 ITN, Data Mining.",
    tags: ["AI & ML", "Computer Science", "Software Engineering", "Data Structures"],
    color: "primary",
  },
  {
    id: 2,
    role: "BTech in Computer Science (Hons. Specialization in AI & ML)",
    company: "Amity University, Noida",
    period: "Dec 2023 - Jan 2026",
    description: "Honors specialization program focusing on AI & ML. Relevant Coursework: Intro to AI & ML, Data Analytics, Deep Learning, Neural Network, Applied & Advances in AI.",
    tags: ["AI & ML", "Deep Learning", "Neural Networks", "Data Analytics"],
    color: "primary",
  },
  {
    id: 3,
    role: "Higher Secondary Education",
    company: "Sri Sri Ravishankar Vidyamandir, Agartala",
    period: "May 2020 - Jul 2022",
    description: "Completed Higher Secondary (12th Science - PCMB) with 88% marks.",
    tags: ["Science", "PCMB", "Academic"],
    color: "secondary",
  },
  {
    id: 4,
    role: "Secondary Level Education",
    company: "Sri Sri Ravishankar Vidyamandir, Agartala",
    period: "Mar 2018 - Jun 2020",
    description: "Completed Secondary Level (10th CBSE) with 85.2% marks.",
    tags: ["CBSE", "Secondary", "Academic"],
    color: "secondary",
  }
];

export const certifications = [
  // Microsoft Certifications (Latest to Oldest)
  {
    id: 1,
    title: "Develop Solutions with Azure AI Document Intelligence",
    issuer: "Microsoft",
    date: "May 9, 2025",
    description: "Document processing and analysis using Azure AI services",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 2,
    title: "Azure Learn Challenge: Build AI Apps",
    issuer: "Microsoft",
    date: "Jan 17, 2025",
    description: "Building AI applications using Microsoft Azure services",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 3,
    title: "AI Copilot with Azure Cosmos DB & OpenAI",
    issuer: "Microsoft",
    date: "Nov 21, 2024",
    description: "Building AI assistants with database integration",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 4,
    title: "Stream IoT Data with IoT Central",
    issuer: "Microsoft",
    date: "Oct 23, 2024",
    description: "IoT data streaming and management with Azure IoT Central",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 5,
    title: "Deploy Cloud-Native Apps with Azure Container Apps",
    issuer: "Microsoft",
    date: "Oct 20, 2024",
    description: "Container orchestration and cloud deployment strategies",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  // Cisco Certifications
  {
    id: 6,
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "Feb 6, 2025",
    description: "Comprehensive networking fundamentals and protocols",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  // Forage Certifications
  {
    id: 7,
    title: "Accenture North America Coding Simulation",
    issuer: "Forage",
    date: "Dec 2024",
    description: "Completed programming simulation for enterprise applications",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  // ServiceNow Certifications
  {
    id: 8,
    title: "ServiceNow Admin Fundamentals (On-Demand)",
    issuer: "ServiceNow/Xanadu",
    date: "Jun 8, 2025",
    description: "ServiceNow platform administration and configuration",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  // NPTEL Certifications (Latest to Oldest)
  {
    id: 9,
    title: "The Joy of Computing Using Python",
    issuer: "NPTEL (IIT Madras)",
    date: "Oct 2024",
    description: "Advanced Python programming concepts and applications",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 10,
    title: "Python for Data Science",
    issuer: "NPTEL (IIT Madras)",
    date: "Feb 2024",
    description: "Data science programming and analysis with Python",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  // Udemy Certifications (Latest to Oldest)
  {
    id: 11,
    title: "AWS Certified Solutions Architect Associate",
    issuer: "Udemy",
    date: "Dec 5, 2025",
    description: "AWS cloud architecture and solutions design",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 12,
    title: "AWS Certified Developer Associate – Hands-On",
    issuer: "Udemy",
    date: "Mar 24, 2025",
    description: "AWS cloud development and deployment practices",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 13,
    title: "ASP.NET C# Programming with JS and HTML",
    issuer: "Udemy",
    date: "Mar 5, 2025",
    description: "Full-stack development with .NET technologies",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 14,
    title: "Android App Development – 34 Hr Bootcamp",
    issuer: "Udemy",
    date: "Feb 8, 2025",
    description: "Complete Android mobile app development course",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 15,
    title: "JavaScript, jQuery & TypeScript Full-Stack Development",
    issuer: "Udemy",
    date: "Jan 24, 2025",
    description: "Modern JavaScript and TypeScript development",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 16,
    title: "Mastering Data Magic: Power BI + Tableau + SQL",
    issuer: "Udemy",
    date: "Jan 13, 2025",
    description: "Data visualization and business intelligence tools",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 17,
    title: "Full Stack Web Developer Bootcamp",
    issuer: "Udemy",
    date: "Dec 28, 2024",
    description: "Comprehensive full-stack web development training",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 18,
    title: "Hands-On React: Advanced Frontend with TypeScript",
    issuer: "Udemy",
    date: "Dec 19, 2024",
    description: "Advanced React development with TypeScript",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 19,
    title: "CSS, JavaScript & PHP Complete Course",
    issuer: "Udemy",
    date: "Nov 14, 2024",
    description: "Front-end and back-end web development fundamentals",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 20,
    title: "Python and Django Framework for Beginners",
    issuer: "Udemy",
    date: "Oct 29, 2024",
    description: "Web development with Python Django framework",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  }
];

export const researchPapers: ResearchPaper[] = [
  {
    id: 1,
    title: "CNN Models for Weather Pattern Recognition: A Deep Learning Approach",
    issuer: "Academic Research Study",
    date: "2024",
    description: "This study presents a deep learning approach for weather pattern recognition using a CNN model based on the EfficientNet architecture. We leverage transfer learning techniques to achieve state-of-the-art results, reaching an accuracy of 92%.",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 2,
    title: "AICRAFT 2.0 Hackathon Participation",
    issuer: "Hackathon Event",
    date: "2024",
    description: "Participated in AI/ML focused hackathon competition",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  },
  {
    id: 3,
    title: "SBMT Neurotech Hackathon Participation",
    issuer: "Hackathon Event",
    date: "2024",
    description: "Participated in neurotechnology and brain-computer interface hackathon",
    verifyUrl: "https://www.linkedin.com/in/subhradip-debray200X/"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "ri-code-s-slash-line",
    skills: [
      { name: "Python", icon: "ri-code-s-slash-line", level: 95 },
      { name: "JavaScript", icon: "ri-javascript-line", level: 90 },
      { name: "TypeScript", icon: "ri-code-line", level: 85 },
      { name: "Java", icon: "ri-code-box-line", level: 75 },
      { name: "C/C++", icon: "ri-terminal-box-line", level: 80 },
      { name: "MATLAB", icon: "ri-function-line", level: 70 },
      { name: "PHP", icon: "ri-code-s-slash-line", level: 75 },
      { name: "SQL", icon: "ri-database-line", level: 85 },
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: "ri-brain-fill",
    skills: [
      { name: "TensorFlow", icon: "ri-server-line", level: 90 },
      { name: "Keras", icon: "ri-brain-line", level: 85 },
      { name: "Scikit-learn", icon: "ri-tools-line", level: 90 },
      { name: "Deep Learning", icon: "ri-bubble-chart-line", level: 85 },
      { name: "Data Preprocessing", icon: "ri-bubble-chart-line", level: 85 },
      { name: "Gen AI", icon: "ri-sparkling-line", level: 80 },
      { name: "LLM", icon: "ri-chat-4-line", level: 75 },
    ],
  },
  {
    title: "Web Development",
    icon: "ri-code-box-fill",
    skills: [
      { name: "React", icon: "ri-reactjs-line", level: 90 },
      { name: "Next.js", icon: "ri-code-s-slash-line", level: 85 },
      { name: "Firebase", icon: "ri-database-2-line", level: 80 },
      { name: "Flask", icon: "ri-flask-line", level: 75 },
      { name: "Django", icon: "ri-code-s-slash-line", level: 70 },
      { name: "HTML/CSS", icon: "ri-html5-line", level: 90 },
      { name: "Tailwind CSS", icon: "ri-layout-grid-line", level: 85 },
      { name: "jQuery", icon: "ri-javascript-line", level: 75 },
      { name: "API", icon: "ri-links-line", level: 85 },
      { name: "Storybook", icon: "ri-book-line", level: 70 },
    ],
  },
  {
    title: "Analytical Skills",
    icon: "ri-line-chart-fill",
    skills: [
      { name: "Data Analysis", icon: "ri-pie-chart-line", level: 90 },
      { name: "Data Visualization", icon: "ri-bar-chart-line", level: 85 },
      { name: "Process Optimization", icon: "ri-flow-chart", level: 80 },
      { name: "Cost-Benefit Analysis", icon: "ri-funds-line", level: 75 },
      { name: "Agile Development", icon: "ri-sprint-line", level: 85 },
      { name: "Git/GitHub", icon: "ri-git-branch-line", level: 90 },
      { name: "MySQL", icon: "ri-database-line", level: 80 },
      { name: "Version Control", icon: "ri-git-commit-line", level: 85 },
      { name: "OOP", icon: "ri-code-box-line", level: 85 },
      { name: "Refactoring", icon: "ri-tools-line", level: 80 },
    ],
  },
  {
    title: "Data Science & Analytics",
    icon: "ri-bar-chart-2-line",
    skills: [
      { name: "Pandas", icon: "ri-table-line", level: 85 },
      { name: "NumPy", icon: "ri-calculator-line", level: 85 },
      { name: "Data Cleaning", icon: "ri-eraser-line", level: 90 },
      { name: "Data Modeling", icon: "ri-flow-chart", level: 80 },
      { name: "Tableau", icon: "ri-bar-chart-line", level: 75 },
      { name: "Power BI", icon: "ri-pie-chart-line", level: 70 },
    ],
  },
  {
    title: "Mobile Development",
    icon: "ri-smartphone-line",
    skills: [
      { name: "Flutter", icon: "ri-flutter-line", level: 80 },
      { name: "Kotlin", icon: "ri-code-line", level: 75 },
      { name: "Gradle", icon: "ri-settings-line", level: 70 },
      { name: "Jetpack", icon: "ri-android-line", level: 75 },
      { name: "Material Design", icon: "ri-palette-line", level: 80 },
      { name: "Firestore", icon: "ri-database-2-line", level: 75 },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: "ri-github-fill",
    url: "https://github.com/sdrdray?tab=repositories",
  },
  {
    name: "LinkedIn",
    icon: "ri-linkedin-fill",
    url: "https://www.linkedin.com/in/subhradip-debray200X/",
  },
  {
    name: "Email",
    icon: "ri-mail-fill",
    url: "mailto:subhradipdray@gmail.com",
  },
  {
    name: "Twitter",
    icon: "ri-twitter-fill",
    url: "https://x.com/Sdrdrax2xx4",
  },
];

export const personalInfo: PersonalInfo = {
  name: "Subhradip Debray",
  title: "WEB DEVELOPER | AI/ML ENGINEER | UI/UX ENGINEER",
  email: "subhradipdray@gmail.com",
  location: "Kerchowmuhani - Ramnagar, Agartala, Tripura",
  twitter: "x.com/Sdrdrax2xx4",
  languages: "English, Bengali, Hindi, French (slightly)",
  education: "BTech in Computer Science (Hons. Specialization in AI & ML)",
  experience: "BTech CSE (AI/ML) student with hands-on experience in web engineering, AI integration, and UI/UX design",
  bio: "BTech CSE (AI/ML) student with hands-on experience in web engineering, AI integration, and UI/UX design. Built and deployed real-world apps using React, Next.js, Firebase, Python, and TensorFlow.",
  bio2: "Skilled in tools like Figma, LangFlow, and more. Completed multiple internships and certified in ServiceNow, Cisco, Forage, and NPTEL. Expert in Figma, N8n, and LangFlow for design and automation workflows.",
  bio3: "Passionate about building intelligent, user-focused web and AI solutions. I develop AI-powered applications, security systems, and mobile solutions using modern tech stacks.",
  profileImage: "/attached_assets/profile-image.png",
  resumeUrl: "https://drive.google.com/drive/folders/1O7aqGpNvdC8ZKO_IaDD2-oaUx3rboP3E",
  tools: "Figma, Git, GitHub, GitLab, VS Code, Android Studio, Firebase, Postman, Docker, Netlify, Vercel, Render, Node.js, Yarn, NPM, LangFlow, n8n, Google Colab, Kaggle, Jupyter, Hugging Face, TensorBoard, LM Studio, Canva, Storybook, ShadCN/UI",
  expertiseAreas: "Excellent in Figma, N8n, LangFlow",
  hackathons: ["AICRAFT 2.0", "SBMT Neurotech"],
  certifications: [
    "CCNAv7: Introduction to Networks | Cisco Networking Academy | Feb 2025",
    "Azure Learn Challenge: Build AI Apps | Microsoft | Jan 2025",
    "Python for Data Science | NPTEL (IIT Madras) | Feb 2024"
  ]
};

export const typingTexts = ["Web Developer", "ML Engineer", "Data Scientist", "UI/UX Enthusiast"];

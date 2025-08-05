export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "Machine Learning" | "Web Dev" | "Data Science" | "Mobile Dev" | "Other";
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  color: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  verifyUrl: string;
}

export interface ResearchPaper {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  verifyUrl: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  twitter: string;
  languages: string;
  education: string;
  experience: string;
  bio: string;
  bio2: string;
  bio3: string;
  profileImage: string;
  resumeUrl: string;
  certifications: string[];
  tools?: string;
  expertiseAreas?: string;
  hackathons?: string[];
}

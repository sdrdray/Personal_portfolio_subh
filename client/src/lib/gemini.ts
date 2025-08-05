// Gemini AI integration 
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API with the provided key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "YOUR_GEMINI_API_KEY");

// Configure the Gemini model with 1.5 Flash for faster responses
const geminiModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    temperature: 0.8,    // Slightly higher for more creative responses
    topP: 0.95,          // Allow more diverse outputs for general knowledge questions
    topK: 40,            // More token options
    maxOutputTokens: 2048,
  },
});

// Context information for the AI
const contextInfo = `
SUBHRADIP DEBRAY
Kerchowmuhani - Ramnagar, Agartala, Tripura
📧 Gmail - subhradipdray@gmail.com
🔗 LinkedIn - https://www.linkedin.com/in/subhradip-debray200X/
WEB DEVELOPER | AI/ML ENGINEER | UI/UX ENGINEER

SUMMARY
BTech CSE (AI/ML) student with hands-on experience in web engineering, AI integration, and UI/UX design. Built and deployed real-world apps using React, Next.js, Firebase, Python, and TensorFlow. Skilled in tools like Figma, LangFlow, and more. Completed multiple internships and certified in ServiceNow, Cisco, Forage, and NPTEL. Passionate about building intelligent, user-focused web and AI solutions.

Languages: English, Bengali, Hindi, French (slightly).

EDUCATION
Amity University, Noida Aug 2022 - Aug 2026
Bachelor of Technology (BTech) in Computer Science
Relevant Coursework: Data Structures, Python, CPP, Java, Compiler Construction, Software Engineering, Database Management, Networking, Operating System, Digital Electronics Engg., Basic Simulation. Domain Electives: Generative AI, Cisco CCNAV7 ITN, Data Mining.

Amity University, Noida Dec 2023 - Jan 2026
Bachelor of Technology (BTech) in Computer Science (Hons. Specialization in AI & ML)
Relevant Coursework: Intro to AI & ML, Data Analytics, Deep Learning, Neural Network, Applied & Advances in AI.

Sri Sri Ravishankar Vidyamandir, Agartala May 2020 - Jul 2022
Higher Secondary (12th Science - PCMB) | 88%

Sri Sri Ravishankar Vidyamandir, Agartala Mar 2018 - Jun 2020
Secondary Level (10th CBSE) | 85.2%

PROFESSIONAL EXPERIENCE
1. Frontend & UI/UX Design Intern - Winniio Aktiebolag (AB), Gothenburg, Sweden (May 2025 - Ongoing)
   Led restructuring and redesign of the LifeAtlas online health portal. Redesigned key webpages using Figma and translated designs into frontend code. Collaborated with global team via Slack; followed structured Git workflows. Built reusable components using Storybook; organized and managed Figma files. Managed GitHub pull requests and contributed to the CI/CD deployment process.

2. ServiceNow Certification Program (Industry Training) - ServiceNow Training, Bangalore (June 2025 - July 2025)
   Enrolled in official ServiceNow CSA training. Learning platform configuration, incident management, and reporting. CSA exam with hands-on labs and guided sessions.

3. React.js Intern – LMS-Based Industry Program - Celebal Technologies, Rajasthan (May 2025 - July 2025)
   Completed module-based training in web development and UI/UX via the company's LMS. Submitted tasks and mini-projects simulating real-world workflows. Gained hands-on experience with version control, deployment, and modular design. Progress monitored through LMS dashboards with defined weekly milestones.

4. Web Development Intern - Unified Mentor, Gurugram, Haryana (Jan 2025 - Mar 2025)
   Developed responsive web applications using Next.js, React, TypeScript, and Firebase, ensuring seamless user authentication and real-time data updates. Collaborated with teams to implement modern UI/UX designs using Tailwind CSS and shadcn/ui.

5. Machine Learning Intern - Unified Mentor, Gurugram, Haryana (Nov 2024 - Dec 2024)
   Trained and evaluated ML models for performance metrics such as accuracy, AUC-ROC, MSE, R². Integrated AI components into practical projects, focusing on real-world applicability. Developed prediction-based applications using regression, classification, and deep learning methods.

PROJECTS (8 Major Projects)
1. Weather Image Classification Using Deep Learning (Python, TensorFlow, EfficientNet, OpenCV)
   - Trained a CNN model to classify weather images with 92% accuracy, leveraging data augmentation and transfer learning with EfficientNet architecture.

2. UrbanNest: Real Estate WebApp (Next.js, Firebase, Leaflet.js, Tailwind CSS)
   - Led end-to-end development of a real estate platform featuring property listings, interactive maps, role-based authentication, and advanced search filters.

3. Mall Management WebApp (React, Next.js, Firebase, TypeScript)
   - Automated mall operations, centralized shop, event, and parking management. Integrated customer portals for bookings and lost-and-found services.

4. Hospital Management WebApp (React, Next.js, Firebase, Tailwind CSS)
   - Designed a role-based system for users, streamlining appointment scheduling, medical records, and billing.

5. Advanced Image Analyzer & AI Chat Interface (React, OpenAI GPT-4V, Tailwind CSS)
   - Built comprehensive AI-powered image analysis tool with drag-and-drop upload, real-time chat interface, and detailed image insights using OpenAI's vision capabilities.

6. NutrimeAI: AI-Powered Nutrition & Meal Planning App (React Native, Firebase, OpenAI API)
   - Mobile app providing personalized nutrition analysis, meal recommendations, and dietary tracking with AI-powered insights for health optimization.

7. Explainable AI for Disaster Image Classification (Python, TensorFlow, LIME, SHAP)
   - Implemented XAI techniques for disaster response, providing visual explanations for AI decisions in emergency situations with interpretable ML models.

8. OculusNet: LLM-Powered Network Threat Detection System (Python, LangChain, Wireshark)
   - Cybersecurity platform using local LLMs for network traffic analysis, threat detection, and security incident response with PCAP file processing.

TECHNICAL SKILLS
Programming Languages: Python, JavaScript, TypeScript, Java, C/C++, MATLAB, PHP, SQL
ML/AI Technologies: TensorFlow, Keras, PyTorch, Scikit-learn, Deep Learning, Generative AI, LLM, XAI, LIME, SHAP
Web Development: React, Next.js, Firebase, Flask, Django, Node.js, Tailwind CSS, HTML, CSS, jQuery, RESTful APIs
Mobile Development: Flutter, React Native, Kotlin, Android Studio, Gradle, Jetpack Compose, Material Design
Data Science: Pandas, NumPy, Matplotlib, Seaborn, Data Cleaning, Data Visualization, Tableau, Power BI
Design & Tools: Figma, Git/GitHub, VS Code, Android Studio, Docker, LangFlow, n8n, Postman, Netlify, Vercel
Cybersecurity: Wireshark, Network Analysis, Threat Detection, PCAP Analysis

CERTIFICATIONS (22 Total)
Microsoft Azure (5): AI Apps, Container Apps, IoT Central, Cosmos DB, Document Intelligence
Udemy (10): Full Stack Bootcamp, React TypeScript, AWS Developer/Architect, Android Development, Power BI/Tableau, Django, ASP.NET, Modern REST API with PHP 8
Cisco Networking Academy: CCNAv7 Introduction to Networks
NPTEL (IIT Madras) (2): Python for Data Science, Joy of Computing using Python
ServiceNow/Xanadu: Admin Fundamentals
Forage: Accenture North America Coding Simulation
Hackathons (2): AICRAFT 2.0, SBMT Neurotech

TOOLS & EXPERTISE
Expert Tools: Figma, Git, GitHub, VS Code, Android Studio, Firebase, Postman, Docker, LangFlow, n8n
Additional Tools: Google Colab, Kaggle, Jupyter, Hugging Face, TensorBoard, LM Studio, Canva, Storybook, ShadCN/UI
`;

// Function to get AI response using Gemini 1.5 Flash API
export async function getAIResponse(userMessage: string): Promise<string> {
  try {
    // Create a chat session with context information and instructions
    const chat = geminiModel.startChat({
      history: [
        {
          role: "user", 
          parts: [{ text: `You are an AI assistant on Subhradip Debray's personal portfolio website. You serve two purposes:

1. You can answer questions about Subhradip using this information about him:
${contextInfo}

2. You can also answer general knowledge questions about any topic, including technology, science, history, etc.

Important instructions:
- When greeting users, introduce yourself as "Subhradip's AI assistant" and not as Subhradip himself.
- When users ask about Subhradip, use the information provided above to answer accurately.
- When users ask general knowledge questions (like "How does NVIDIA manufacture GPUs?"), answer to the best of your ability without restrictions.
- Always identify yourself as an assistant that's helping visitors learn about Subhradip or other topics.

Examples:
- If user says "hello", respond with "Hello! I'm Subhradip's AI assistant. How can I help you today?"
- If user asks "What are Subhradip's skills?", provide information from his profile.
- If user asks "How does cloud computing work?", provide a general knowledge answer.` }]
        },
        {
          role: "model",
          parts: [{ text: "I understand my role. I'll act as Subhradip's AI assistant on his portfolio website. I'll answer both questions about Subhradip using the provided information and general knowledge questions on any topic without restrictions. I'll make it clear that I'm his assistant helping visitors, not Subhradip himself." }]
        }
      ]
    });

    // Send the user's message and get a response
    const result = await chat.sendMessage(userMessage);
    return result.response.text();
  } catch (error) {
    console.error("Error generating AI response:", error);
    return "Sorry, I encountered an error while processing your request. Please try again later.";
  }
}

// Export context information and model
export { contextInfo, geminiModel };
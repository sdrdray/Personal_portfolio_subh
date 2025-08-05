# Personal Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🚀 Fast performance with Vite
- 📱 Mobile-first approach
- 🎭 Smooth animations with Framer Motion
- 🤖 AI-powered chatbot integration
- 🔥 Firebase integration
- 📊 Interactive project showcase
- 📧 Contact form functionality

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Backend**: Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Ready for Vercel/Netlify

## Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your environment variables in `.env`:
   
   ```env
   # Database (Optional - for contact form)
   DATABASE_URL=postgresql://username:password@localhost:5432/database_name
   
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_DATABASE_URL=https://your_project-default-rtdb.region.firebasedatabase.app
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   
   # Gemini AI (Optional - for chatbot)
   VITE_GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Configuration

### Firebase Setup (Optional)

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Firestore Database
3. Copy your configuration from Project Settings
4. Update the environment variables in `.env`

### Gemini AI Setup (Optional)

1. Get an API key from Google AI Studio
2. Add it to your `.env` file as `VITE_GEMINI_API_KEY`

### Customization

1. **Update personal information** in `client/src/data/index.ts`
2. **Replace images** in `client/src/assets/` and `public/`
3. **Modify colors** in `tailwind.config.ts`
4. **Update content** in component files

## Project Structure

```
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── data/          # Portfolio data
│   │   ├── lib/           # Utilities and configs
│   │   └── assets/        # Images and static files
├── server/                # Backend Express server
├── shared/                # Shared schemas and types
└── public/               # Static assets
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

## Features Overview

- **Hero Section**: Animated introduction with social links
- **About**: Personal information and overview
- **Projects**: Filterable project showcase
- **Experience**: Timeline of work experience
- **Skills**: Technical skills with proficiency levels
- **Certifications**: Professional achievements
- **Contact**: Contact form and social links
- **AI Chatbot**: Interactive assistant (requires Gemini API)

## License

MIT License - feel free to use this project for your own portfolio!

## Support

If you have any questions or need help setting up, please open an issue on GitHub.

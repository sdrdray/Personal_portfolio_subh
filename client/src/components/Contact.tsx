import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionVisibility } from "@/hooks/use-section-visibility";
import { personalInfo, socialLinks } from "@/data";
import { useToast } from "@/hooks/use-toast";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import AIChatbot from "./AIChatbot";

const Contact: React.FC = () => {
  const [ref, isVisible] = useSectionVisibility<HTMLElement>();
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add data to Firestore
      const messagesRef = collection(db, "contactMessages");
      await addDoc(messagesRef, {
        ...formState,
        timestamp: serverTimestamp(),
      });
      
      // Clear form and show success message
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-20 post-cli-section"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Get in <span className="text-primary-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-slate-400">
            Have a project in mind or want to discuss opportunities? I'm always open to new challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="p-8 rounded-xl border border-slate-700 order-2 lg:order-1 shadow-lg bg-slate-800/80"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>

            <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div 
              className="p-8 rounded-xl border border-slate-700 mb-8 shadow-lg bg-slate-800/80"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-4">
                    <i className="ri-mail-fill text-primary-400"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-4">
                    <i className="ri-map-pin-fill text-primary-400"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-sm text-slate-400">
                      {personalInfo.location}
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-4">
                    <i className="ri-twitter-fill text-primary-400"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Twitter</h4>
                    <a 
                      href={`https://${personalInfo.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                    >
                      @{personalInfo.twitter.split('/').pop()}
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center mr-4">
                    <i className="ri-time-fill text-primary-400"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Availability</h4>
                    <p className="text-sm text-slate-400">
                      I am available Monday to Friday, 9:00 AM - 6:00 PM (IST)
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="p-8 rounded-xl border border-slate-700 shadow-lg bg-slate-800/80"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-6">Connect on Social Media</h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                  >
                    <i className={`${link.icon} text-2xl mr-3`}></i>
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* AI Chatbot Section */}
        <motion.div 
          className="mt-20"
          variants={containerVariants}
        >
          <motion.div className="mb-16 text-center" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Ask Me a <span className="text-primary-400">Question</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mb-4"></div>
            <p className="max-w-2xl mx-auto text-slate-400">
              Have a quick question? Chat with my AI assistant powered by Gemini AI.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div variants={itemVariants}>
              <AIChatbot />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;

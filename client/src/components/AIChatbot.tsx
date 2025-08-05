import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

// Types for the chat messages
type MessageRole = "user" | "assistant";

interface ChatMessage {
  role: MessageRole;
  content: string;
  timestamp: Date;
}

const AIChatbot: React.FC = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hello! I'm Subhradip's AI assistant. I can answer questions about Subhradip's skills, education, projects, and experience. I can also answer general knowledge questions about technology or any other topic. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom of the chat when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message to the chat
    const userMessage: ChatMessage = {
      role: "user",
      content: inputMessage,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    
    try {
      // Import the getAIResponse function from the gemini.ts file
      const { getAIResponse } = await import("@/lib/gemini");
      
      // Get response from Gemini AI
      const response = await getAIResponse(inputMessage);
      
      // Add AI response to chat
      const aiResponse: ChatMessage = {
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error communicating with AI:", error);
      
      // Add fallback response if API fails
      const fallbackResponse: ChatMessage = {
        role: "assistant",
        content: "I'm sorry, I encountered an error processing your request. Please try again later.",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, fallbackResponse]);
      
      toast({
        title: "Error",
        description: "Failed to get a response from the AI. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  };

  return (
    <motion.div 
      className="rounded-xl border border-slate-700 p-6 bg-slate-800/80 shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-xl font-bold mb-6">Ask Me Anything</h3>
      
      {/* Chat messages display */}
      <div className="h-[400px] overflow-y-auto mb-4 p-4 bg-slate-900/50 rounded-lg">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${message.role === "user" ? "ml-auto text-right" : ""}`}
          >
            <div 
              className={`inline-block rounded-lg p-3 ${
                message.role === "user" 
                  ? "bg-primary-600 text-white" 
                  : "bg-slate-700 text-slate-100"
              }`}
            >
              {message.content}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center text-slate-400 mb-4">
            <div className="w-2 h-2 bg-primary-500 rounded-full mr-1 animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full mr-1 animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input form */}
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your question here..."
          className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
          disabled={isLoading}
        />
        <motion.button
          type="submit"
          className="px-6 py-3 bg-primary-500 text-white font-medium rounded-r-lg hover:bg-primary-600 transition-colors disabled:bg-slate-700 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isLoading || !inputMessage.trim()}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <span>Send</span>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AIChatbot;
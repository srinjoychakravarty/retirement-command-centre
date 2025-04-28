import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, Shield, LineChart, ArrowRight } from 'lucide-react';

const RoboAdvisorPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="text-accent-cyan" size={32} />,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze your financial data to provide personalized recommendations."
    },
    {
      icon: <Shield className="text-accent-teal" size={32} />,
      title: "Secure Data Processing",
      description: "Your financial information is processed with bank-level security and encryption."
    },
    {
      icon: <LineChart className="text-accent-cyan" size={32} />,
      title: "Real-Time Insights",
      description: "Get instant feedback and advice based on your current financial situation."
    }
  ];

  const handleStartConversation = () => {
    // Create a custom event to trigger the RoboAdvisor
    const event = new CustomEvent('openRoboAdvisor');
    window.dispatchEvent(event);
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 rounded-full bg-accent-cyan/20 flex items-center justify-center mx-auto mb-6">
              <Bot size={40} className="text-accent-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Robo Advisor</h1>
            <p className="text-xl text-white/70">
              Your personal AI-powered financial advisor, available 24/7 to help optimize your retirement strategy.
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card p-8 rounded-xl text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/70 mb-6">
              Click the button below to start a conversation with your AI Robo Advisor and receive personalized guidance.
            </p>
            <button 
              onClick={handleStartConversation}
              className="btn-primary px-8 py-3 text-lg flex items-center gap-2 mx-auto group"
            >
              Start Conversation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoboAdvisorPage;
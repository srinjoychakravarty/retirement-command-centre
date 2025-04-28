import React from 'react';
import { motion, AnimationControls } from 'framer-motion';
import { Link2, ExternalLink, BarChart2, Shield, RefreshCw } from 'lucide-react';

interface PlatformIntegrationSectionProps {
  controls: AnimationControls;
}

const PlatformIntegrationSection: React.FC<PlatformIntegrationSectionProps> = ({ controls }) => {
  const platforms = [
    {
      name: "Fidelity",
      logo: "https://images.pexels.com/photos/6774248/pexels-photo-6774248.jpeg?auto=compress&cs=tinysrgb&h=100",
      features: ["Account Balances", "Investment Data", "Retirement Accounts", "Transaction History"]
    },
    {
      name: "Charles Schwab",
      logo: "https://images.pexels.com/photos/6774931/pexels-photo-6774931.jpeg?auto=compress&cs=tinysrgb&h=100",
      features: ["Portfolio Analysis", "Account Balances", "Investment Performance", "Goal Tracking"]
    },
    {
      name: "Vanguard",
      logo: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&h=100",
      features: ["Fund Performance", "Account Balances", "Retirement Projections", "Asset Allocation"]
    }
  ];

  const integrationSteps = [
    {
      icon: <Link2 className="text-accent-cyan" size={28} />,
      title: "Connect Your Accounts",
      description: "Securely link your existing financial accounts with a few clicks."
    },
    {
      icon: <BarChart2 className="text-accent-teal" size={28} />,
      title: "Analyze Your Data",
      description: "Our AI analyzes your financial data to provide personalized insights."
    },
    {
      icon: <Shield className="text-accent-cyan" size={28} />,
      title: "Protect Your Income",
      description: "Discover tailored income protection solutions based on your needs."
    },
    {
      icon: <RefreshCw className="text-accent-teal" size={28} />,
      title: "Stay Up-to-Date",
      description: "Real-time updates ensure your retirement plan evolves with you."
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Integrate With Your Existing Platforms
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
          }}
          className="text-white/70 text-lg"
        >
          RetirementCOMMAND CENTER seamlessly connects with the financial platforms you already use, giving you a unified view of your retirement readiness.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Integration Steps */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } }
          }}
        >
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="bg-gradient-to-r from-accent-cyan to-accent-teal bg-clip-text text-transparent">How It Works</span>
              <ExternalLink size={20} className="text-accent-cyan" />
            </h3>

            <div className="space-y-8">
              {integrationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { duration: 0.5, delay: 0.4 + (index * 0.15) } 
                    }
                  }}
                  className="flex gap-4"
                >
                  <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">{step.title}</h4>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Platform Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } }
          }}
          className="space-y-6"
        >
          {platforms.map((platform, platformIndex) => (
            <motion.div
              key={platformIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5, delay: 0.6 + (platformIndex * 0.2) } 
                }
              }}
              className="glass-card p-4 rounded-xl flex gap-4"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center bg-white/10">
                <img src={platform.logo} alt={platform.name} className="max-w-full max-h-full object-contain" />
              </div>
              
              <div className="flex-grow">
                <h4 className="font-medium mb-2">{platform.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {platform.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex} 
                      className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="self-center text-accent-cyan hover:text-accent-teal transition-colors">
                <ExternalLink size={18} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PlatformIntegrationSection;
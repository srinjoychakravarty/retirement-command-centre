import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, RefreshCw, Link2, CheckCircle2 } from 'lucide-react';

const IntegrationsPage: React.FC = () => {
  const integrations = [
    {
      name: 'Fidelity',
      logo: 'https://images.pexels.com/photos/6774248/pexels-photo-6774248.jpeg?auto=compress&cs=tinysrgb&h=100',
      status: 'Connected',
      features: ['Account Balances', 'Investment Data', 'Retirement Accounts', 'Transaction History'],
      description: 'Connect your Fidelity accounts to sync your investment data and retirement accounts.',
    },
    {
      name: 'Charles Schwab',
      logo: 'https://images.pexels.com/photos/6774931/pexels-photo-6774931.jpeg?auto=compress&cs=tinysrgb&h=100',
      status: 'Available',
      features: ['Portfolio Analysis', 'Account Balances', 'Investment Performance', 'Goal Tracking'],
      description: 'Integrate with Charles Schwab to track your portfolio performance and investment goals.',
    },
    {
      name: 'Vanguard',
      logo: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&h=100',
      status: 'Available',
      features: ['Fund Performance', 'Account Balances', 'Retirement Projections', 'Asset Allocation'],
      description: 'Link your Vanguard accounts to monitor fund performance and retirement projections.',
    }
  ];

  const securityFeatures = [
    {
      icon: <Shield className="text-accent-cyan" size={32} />,
      title: 'Bank-Level Security',
      description: 'Your data is protected with 256-bit encryption and multi-factor authentication.'
    },
    {
      icon: <RefreshCw className="text-accent-teal" size={32} />,
      title: 'Real-Time Sync',
      description: 'Automatic updates ensure your financial data is always current.'
    },
    {
      icon: <Link2 className="text-accent-cyan" size={32} />,
      title: 'Secure Connections',
      description: 'Direct integration with financial institutions using OAuth 2.0 protocol.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="absolute inset-0 dot-pattern opacity-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Platform Integrations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 mb-8"
            >
              Connect your existing financial accounts to unlock powerful retirement planning insights.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center bg-white/10">
                    <img 
                      src={integration.logo} 
                      alt={integration.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{integration.name}</h3>
                    <span className={`text-sm ${
                      integration.status === 'Connected' 
                        ? 'text-accent-cyan' 
                        : 'text-white/60'
                    }`}>
                      {integration.status}
                    </span>
                  </div>
                </div>

                <p className="text-white/70 mb-4">
                  {integration.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {integration.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button className={`w-full py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                  integration.status === 'Connected'
                    ? 'bg-accent-cyan/20 text-accent-cyan'
                    : 'bg-accent-teal hover:bg-accent-teal/90 text-white'
                }`}>
                  {integration.status === 'Connected' ? (
                    <>
                      <CheckCircle2 size={18} />
                      Connected
                    </>
                  ) : (
                    <>
                      Connect
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-primary-blue/30 relative">
        <div className="absolute inset-0 dot-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Bank-Grade Security
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/70 text-lg"
            >
              Your security is our top priority. We use industry-leading security measures to protect your data.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-xl text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Connect Your Accounts?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Start maximizing your retirement planning potential by connecting your financial accounts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/dashboard"
                className="btn-primary px-8 py-3 text-lg flex items-center justify-center gap-2 group"
              >
                Connect Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="btn-secondary px-8 py-3 text-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationsPage;
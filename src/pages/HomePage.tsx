import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { BarChart3, LineChart, Brain, ArrowRight, PieChart, Layers, Share2, ArrowUpRight, Shield, RefreshCw } from 'lucide-react';
import HeroAnimation from '../components/HeroAnimation';
import PlatformIntegrationSection from '../components/PlatformIntegrationSection';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  const features = [
    {
      icon: <Brain className="text-accent-teal" size={32} />,
      title: "AI-Powered Retirement Calculator",
      description: "Get actuarially accurate retirement projections using advanced artificial intelligence algorithms."
    },
    {
      icon: <LineChart className="text-accent-cyan" size={32} />,
      title: "Real-Time Financial Dashboard",
      description: "Monitor your retirement readiness with interactive dashboards updated in real-time."
    },
    {
      icon: <Layers className="text-accent-teal" size={32} />,
      title: "Platform Integration",
      description: "Seamlessly connect with your existing financial accounts at Fidelity, Schwab, and more."
    },
    {
      icon: <Shield className="text-accent-cyan" size={32} />,
      title: "Income Protection",
      description: "Discover and implement personalized income protection strategies for a secure retirement."
    },
    {
      icon: <PieChart className="text-accent-teal" size={32} />,
      title: "Solutions Marketplace",
      description: "Browse and purchase financial products tailored to your retirement needs with transparent pricing."
    },
    {
      icon: <Share2 className="text-accent-cyan" size={32} />,
      title: "Advisor Collaboration",
      description: "Easily share your retirement plan with financial advisors for professional guidance when needed."
    }
  ];

  const stats = [
    { value: 93, label: "Retirement Readiness", suffix: "%" },
    { value: 42, label: "Time Saved", suffix: "hrs" },
    { value: 3.2, label: "Income Multiple", suffix: "x" },
    { value: 12, label: "Average ROI", suffix: "%" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10 z-0"></div>
        <div className="absolute top-[20%] left-[20%] w-64 h-64 bg-accent-cyan/20 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-accent-teal/10 rounded-full blur-[120px] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-primary-light-blue">Your</span> <br />
                <span className="text-white">Retirement</span><br />
                <span className="text-accent-cyan">COMMAND</span><br />
                <span className="text-white">CENTER</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium mb-8 text-white/80 leading-relaxed">
                <span className="text-white font-semibold">WHAT IF</span> you could fully command your financial future, seamlessly maximizing your income and determining your retirement needs?
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-8 py-3 text-lg flex items-center justify-center gap-2 group"
                >
                  Get Started
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary px-8 py-3 text-lg flex items-center justify-center gap-2"
                >
                  Watch Demo
                </motion.button>
              </div>
              
              <div className="mt-10 flex items-center gap-6">
                <img src="https://images.pexels.com/photos/6774248/pexels-photo-6774248.jpeg?auto=compress&cs=tinysrgb&h=50" alt="Fidelity" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="https://images.pexels.com/photos/6774931/pexels-photo-6774931.jpeg?auto=compress&cs=tinysrgb&h=50" alt="Schwab" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
                <img src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&h=50" alt="Vanguard" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <HeroAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 animated-gradient opacity-5 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Command Your Financial Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/70 text-lg"
            >
              Our AI-powered platform empowers you to take control of your retirement planning with precision and confidence.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUpVariants}
                className="glass-card p-8 rounded-xl hover:shadow-glow-sm transition-all duration-500"
              >
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-blue/30 relative">
        <div className="absolute inset-0 dot-pattern"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent-cyan mb-2 flex items-center justify-center">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Platform Section */}
      <section className="py-20 relative" ref={ref}>
        <PlatformIntegrationSection controls={controls} />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative bg-primary-blue/20">
        <div className="absolute inset-0 dot-pattern"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              What Our Users Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/70 text-lg"
            >
              Discover how RetirementCOMMAND CENTER is transforming retirement planning for our users.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The AI-powered retirement calculator gave me the clarity I needed to make confident decisions about my future."
              name="Sarah J."
              title="Marketing Executive"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
              rating={5}
            />
            <TestimonialCard
              quote="Integrating with my Fidelity account was seamless. I now have a complete picture of my retirement readiness in one place."
              name="Michael T."
              title="Software Engineer"
              image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100"
              rating={4.5}
            />
            <TestimonialCard
              quote="The marketplace helped me find the perfect income protection solution. The transparent pricing was a game-changer."
              name="Elena R."
              title="Small Business Owner"
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-navy opacity-90"></div>
        <div className="absolute inset-0 dot-pattern"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-10 md:p-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Command Your Financial Future?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of users who are taking control of their retirement planning with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-3 text-lg flex items-center justify-center gap-2 group"
              >
                Get Started Now
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary px-8 py-3 text-lg flex items-center justify-center gap-2 group"
              >
                Schedule a Demo
                <RefreshCw size={18} className="group-hover:rotate-45 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
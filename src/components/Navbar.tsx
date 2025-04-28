import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, BarChart3, PieChart, LayoutDashboard, SlidersHorizontal, Menu, X, Bot } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Calculator', path: '/calculator', icon: <BarChart3 size={18} /> },
    { name: 'Integrations', path: '/integrations', icon: <SlidersHorizontal size={18} /> },
    { name: 'Marketplace', path: '/marketplace', icon: <PieChart size={18} /> },
    { name: 'Robo Advisor', path: '/robo-advisor', icon: <Bot size={18} /> },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-navy/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-full">
            <Brain className="text-primary-navy" size={24} />
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ 
                boxShadow: ['0 0 0 0 rgba(167, 199, 231, 0.4)', '0 0 0 10px rgba(167, 199, 231, 0)', '0 0 0 0 rgba(167, 199, 231, 0)'] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="text-white font-semibold text-lg leading-none">
            <span className="text-accent-cyan text-sm">Your</span>
            <br />RetirementCOMMAND
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                location.pathname === link.path
                  ? 'bg-white/10 text-accent-cyan font-medium'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary ml-4"
          >
            Get Started
          </motion.button>
        </nav>

        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-primary-navy/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg flex items-center gap-3 ${
                  location.pathname === link.path
                    ? 'bg-white/10 text-accent-cyan font-medium'
                    : 'text-white/70'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <button className="btn-primary w-full mt-4">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
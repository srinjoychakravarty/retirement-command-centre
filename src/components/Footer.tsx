import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Brain } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-navy/80 backdrop-blur-md border-t border-white/10 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                <Brain className="text-primary-navy" size={18} />
              </div>
              <div className="text-white font-semibold text-sm leading-none">
                <span className="text-accent-cyan text-xs">Your</span>
                <br />RetirementCOMMAND
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Take full command of your financial future with our AI-powered retirement planning solution that integrates with your existing tools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-accent-cyan transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-accent-cyan transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-accent-cyan transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-accent-cyan transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/dashboard" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">Dashboard</Link></li>
              <li><Link to="/calculator" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">AI Calculator</Link></li>
              <li><Link to="/integrations" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">Platform Integrations</Link></li>
              <li><Link to="/marketplace" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">Solutions Marketplace</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">Retirement Guides</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent-cyan transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Your RetirementCOMMAND CENTER. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/50 hover:text-white text-xs">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white text-xs">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-xs">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
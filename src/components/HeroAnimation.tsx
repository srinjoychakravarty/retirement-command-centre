import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, LineChart, TrendingUp, Percent, DollarSign, Clock, Users, Target } from 'lucide-react';

const HeroAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const elements = containerRef.current.querySelectorAll('.hologram-element');
      elements.forEach((el) => {
        const depth = parseFloat((el as HTMLElement).dataset.depth || '5');
        const translateX = x * depth;
        const translateY = y * depth;
        (el as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[500px] md:h-[600px]">
      {/* Main circular dashboard */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-[90%] h-[90%] rounded-full border-2 border-white/20 flex items-center justify-center">
          <div className="absolute inset-2 rounded-full border border-accent-cyan/30"></div>
          <div className="absolute inset-4 rounded-full border border-accent-teal/20"></div>
          <div className="absolute inset-6 rounded-full border border-white/10"></div>
          
          {/* Pulsing core */}
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-accent-cyan to-accent-teal flex items-center justify-center">
            <motion.div
              animate={{ 
                boxShadow: ['0 0 0 0px rgba(34, 211, 238, 0.3)', '0 0 0 20px rgba(34, 211, 238, 0)'] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full"
            />
            <div className="text-white font-bold text-center">
              <div className="text-3xl">93%</div>
              <div className="text-xs">Readiness</div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Floating elements */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hologram-element absolute top-[20%] left-[15%] glass-card p-4 flex items-center gap-3"
        data-depth="10"
      >
        <BarChart3 className="text-accent-cyan" size={24} />
        <div>
          <div className="text-sm font-medium">Retirement Income</div>
          <div className="text-lg font-bold">$8,450<span className="text-xs text-white/60">/mo</span></div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="hologram-element absolute top-[10%] right-[25%] glass-card p-4 rounded-xl"
        data-depth="8"
      >
        <div className="flex items-center gap-2 mb-2">
          <LineChart className="text-accent-teal" size={20} />
          <div className="text-sm font-medium">Growth Trend</div>
        </div>
        <div className="h-12 flex items-end gap-1">
          {[30, 45, 25, 60, 35, 75, 55, 70, 85].map((height, i) => (
            <div 
              key={i} 
              className="w-2 bg-accent-teal/70 rounded-t"
              style={{ height: `${height}%` }}
            ></div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="hologram-element absolute bottom-[25%] right-[10%] glass-card p-3 rounded-xl"
        data-depth="12"
      >
        <div className="flex items-center gap-2">
          <TrendingUp className="text-success" size={18} />
          <div className="text-sm">ROI <span className="text-success font-bold">+12.4%</span></div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="hologram-element absolute bottom-[15%] left-[20%] glass-card p-3 rounded-xl flex items-center gap-2"
        data-depth="10"
      >
        <Percent className="text-accent-cyan" size={18} />
        <div className="text-sm">Savings Rate <span className="text-white font-bold">18%</span></div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hologram-element absolute top-[45%] right-[8%] glass-card p-3 rounded-xl flex items-center gap-2"
        data-depth="9"
      >
        <DollarSign className="text-accent-teal" size={18} />
        <div className="text-sm">Net Worth <span className="text-white font-bold">$1.2M</span></div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="hologram-element absolute top-[60%] left-[5%] glass-card p-3 rounded-xl flex items-center gap-2"
        data-depth="7"
      >
        <Clock className="text-accent-cyan" size={18} />
        <div className="text-sm">Time to Goal <span className="text-white font-bold">8.5 yrs</span></div>
      </motion.div>
      
      {/* Notification dots */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="hologram-element absolute top-[35%] left-[30%] w-4 h-4 rounded-full bg-accent-teal flex items-center justify-center"
        data-depth="14"
      >
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-white"
        />
      </motion.div>
      
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="hologram-element absolute bottom-[40%] right-[28%] w-4 h-4 rounded-full bg-success flex items-center justify-center"
        data-depth="12"
      >
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="w-2 h-2 rounded-full bg-white"
        />
      </motion.div>
      
      {/* Connector lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          d="M250,300 L150,150 M250,300 L380,120 M250,300 L350,450 M250,300 L120,400"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
        />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Scan effect */}
      <motion.div 
        initial={{ opacity: 0, top: 0 }}
        animate={{ opacity: [0, 0.8, 0], top: ['0%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
        className="absolute left-0 right-0 h-1 bg-accent-cyan/40 z-10 blur-[2px]"
      />
    </div>
  );
};

export default HeroAnimation;
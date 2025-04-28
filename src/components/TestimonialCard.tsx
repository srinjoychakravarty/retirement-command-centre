import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, image, rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const isFilled = i < Math.floor(rating);
    const isHalf = !isFilled && i < Math.floor(rating + 0.5);
    
    return (
      <Star
        key={i}
        size={16}
        className={`${isFilled ? 'text-accent-cyan fill-accent-cyan' : 
          isHalf ? 'text-accent-cyan fill-[url(#halfStar)]' : 'text-white/30'}`}
      />
    );
  });
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-xl"
    >
      <div className="flex gap-2 mb-4">
        {stars}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <blockquote className="text-white/80 italic mb-6">"{quote}"</blockquote>
      
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-white/60">{title}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
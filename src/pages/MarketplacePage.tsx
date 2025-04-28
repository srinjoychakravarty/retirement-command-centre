import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Shield, CreditCard, ArrowRight, Star, Clock, DollarSign } from 'lucide-react';

const MarketplacePage: React.FC = () => {
  const products = [
    {
      title: "Income Protection Plus",
      description: "Comprehensive income protection with flexible coverage options",
      price: 49.99,
      rating: 4.8,
      reviews: 128,
      features: [
        "Customizable coverage amounts",
        "90-day waiting period",
        "Coverage until age 65",
        "Own occupation definition"
      ]
    },
    {
      title: "Critical Illness Cover",
      description: "Financial protection against serious health conditions",
      price: 35.99,
      rating: 4.7,
      reviews: 94,
      features: [
        "Lump sum payment",
        "Coverage for major illnesses",
        "No waiting period",
        "Guaranteed premiums"
      ]
    },
    {
      title: "Retirement Income Guard",
      description: "Secure your retirement income with guaranteed returns",
      price: 75.99,
      rating: 4.9,
      reviews: 156,
      features: [
        "Guaranteed income stream",
        "Inflation protection",
        "Flexible payment options",
        "Death benefit included"
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-primary-navy to-primary-blue">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Solutions Marketplace
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Discover tailored financial products to protect and enhance your retirement journey
          </motion.p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <Shield className="text-accent-cyan" size={32} />, text: "Secure Transactions" },
            { icon: <CreditCard className="text-accent-teal" size={32} />, text: "Flexible Payments" },
            { icon: <ShoppingCart className="text-accent-cyan" size={32} />, text: "30-Day Returns" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <p className="text-lg font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 rounded-xl flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
                <p className="text-white/70">{product.description}</p>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="text-accent-cyan" size={16} fill="currentColor" />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <span className="text-white/50">|</span>
                <div className="text-white/70">{product.reviews} reviews</div>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="text-accent-teal" size={20} />
                    <span className="text-2xl font-bold">{product.price}</span>
                    <span className="text-white/70">/month</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <Clock size={16} />
                    <span>2 min setup</span>
                  </div>
                </div>

                <button className="w-full btn-primary flex items-center justify-center gap-2 group">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 text-center rounded-xl mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Our AI-powered recommendation engine can analyze your profile and suggest the perfect products for your needs.
          </p>
          <button className="btn-primary px-8 py-3 text-lg">Get Personalized Recommendations</button>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketplacePage;
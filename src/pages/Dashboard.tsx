import React from 'react';
import { motion } from 'framer-motion';
import UseAnimations from 'react-useanimations';
import infinity from 'react-useanimations/lib/infinity';
import loading from 'react-useanimations/lib/loading';
import activity from 'react-useanimations/lib/activity';
import radioButton from 'react-useanimations/lib/radioButton';
import CountUp from 'react-countup';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: "New Users",
      value: 2345,
      change: "+12.5%",
      animation: infinity,
      color: "text-accent-cyan"
    },
    {
      title: "Total Revenue",
      value: 24560,
      prefix: "$",
      change: "+8.2%",
      animation: loading,
      color: "text-accent-teal"
    },
    {
      title: "Active Users",
      value: 1890,
      change: "+15.3%",
      animation: activity,
      color: "text-accent-cyan"
    },
    {
      title: "Growth Rate",
      value: 12.5,
      suffix: "%",
      change: "+2.4%",
      animation: radioButton,
      color: "text-accent-teal"
    }
  ];

  const recentActivity = [
    {
      title: "New user signed up",
      time: "2 minutes ago",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50"
    },
    {
      title: "Subscription renewed",
      time: "15 minutes ago",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=50"
    },
    {
      title: "Integration connected",
      time: "1 hour ago",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50"
    }
  ];

  return (
    <div className="min-h-screen bg-primary-navy pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
          <p className="text-white/70">Monitor your retirement planning metrics and activities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <UseAnimations
                    animation={stat.animation}
                    size={28}
                    strokeColor="currentColor"
                    className={stat.color}
                  />
                </div>
                <div>
                  <h3 className="text-sm text-white/70 mb-1">{stat.title}</h3>
                  <div className="text-2xl font-bold text-white">
                    {stat.prefix}
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      decimals={stat.suffix === "%" ? 1 : 0}
                    />
                    {stat.suffix}
                  </div>
                  <span className="text-xs text-accent-teal">{stat.change}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-6 rounded-xl"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={activity.image}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">{activity.title}</p>
                    <p className="text-sm text-white/60">{activity.time}</p>
                  </div>
                </div>
                <button className="text-accent-cyan hover:text-accent-teal transition-colors">
                  View
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
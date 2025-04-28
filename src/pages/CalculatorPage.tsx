import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Calendar, TrendingUp, ArrowRight, PieChart } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CalculatorPage: React.FC = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [expectedReturn, setExpectedReturn] = useState(7);

  // Input validation handlers
  const handleCurrentAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setCurrentAge(value);
    }
  };

  const handleRetirementAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= currentAge && value <= 100) {
      setRetirementAge(value);
    }
  };

  const handleCurrentSavingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value.replace(/,/g, ''));
    if (!isNaN(value) && value >= 0) {
      setCurrentSavings(value);
    }
  };

  const handleMonthlyContributionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value.replace(/,/g, ''));
    if (!isNaN(value) && value >= 0) {
      setMonthlyContribution(value);
    }
  };

  const handleExpectedReturnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setExpectedReturn(value);
    }
  };

  const chartData = {
    labels: Array.from({ length: retirementAge - currentAge + 1 }, (_, i) => currentAge + i),
    datasets: [
      {
        label: 'Projected Savings',
        data: Array.from({ length: retirementAge - currentAge + 1 }, (_, i) => {
          const years = i;
          const futureValue = currentSavings * Math.pow(1 + expectedReturn / 100, years) +
            monthlyContribution * 12 * ((Math.pow(1 + expectedReturn / 100, years) - 1) / (expectedReturn / 100));
          return Math.round(futureValue);
        }),
        borderColor: '#22d3ee',
        backgroundColor: 'rgba(34, 211, 238, 0.1)',
        fill: true,
        tension: 0.4,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `$${context.raw.toLocaleString()}`
        }
      }
    },
    scales: {
      y: {
        ticks: {
          callback: (value: any) => `$${value.toLocaleString()}`
        }
      }
    }
  };

  const projectedAmount = chartData.datasets[0].data[chartData.datasets[0].data.length - 1];
  const monthlyRetirementIncome = (projectedAmount * 0.04) / 12;

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">AI-Powered Retirement Calculator</h1>
            <p className="text-white/70 text-lg">
              Get actuarially accurate projections of your retirement needs using advanced AI algorithms.
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Current Age</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={currentAge}
                    onChange={handleCurrentAgeChange}
                    className="input-field w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Retirement Age</label>
                  <input
                    type="number"
                    min={currentAge}
                    max="100"
                    value={retirementAge}
                    onChange={handleRetirementAgeChange}
                    className="input-field w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Current Savings</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                    <input
                      type="number"
                      min="0"
                      value={currentSavings}
                      onChange={handleCurrentSavingsChange}
                      className="input-field w-full pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Monthly Contribution</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                    <input
                      type="number"
                      min="0"
                      value={monthlyContribution}
                      onChange={handleMonthlyContributionChange}
                      className="input-field w-full pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Expected Annual Return (%)</label>
                  <div className="relative">
                    <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                    <input
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      value={expectedReturn}
                      onChange={handleExpectedReturnChange}
                      className="input-field w-full pl-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                  <Calculator size={24} className="text-accent-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Projected Amount</h3>
                  <p className="text-2xl font-bold text-accent-cyan">
                    ${projectedAmount.toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="text-white/70">
                Estimated savings at retirement based on current contributions and market assumptions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-teal/20 flex items-center justify-center">
                  <PieChart size={24} className="text-accent-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Monthly Retirement Income</h3>
                  <p className="text-2xl font-bold text-accent-teal">
                    ${Math.round(monthlyRetirementIncome).toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="text-white/70">
                Estimated monthly income during retirement using the 4% withdrawal rule.
              </p>
            </motion.div>
          </div>

          <div className="glass-card p-6 rounded-xl mb-8">
            <h3 className="text-xl font-semibold mb-6">Retirement Savings Projection</h3>
            <div className="h-[400px]">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 text-lg flex items-center gap-2 mx-auto"
            >
              Get Personalized Recommendations
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CalculatorPage;
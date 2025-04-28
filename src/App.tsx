import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import CalculatorPage from './pages/CalculatorPage';
import IntegrationsPage from './pages/IntegrationsPage';
import MarketplacePage from './pages/MarketplacePage';
import RoboAdvisorPage from './pages/RoboAdvisorPage';
import RoboAdvisor from './components/RoboAdvisor';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/robo-advisor" element={<RoboAdvisorPage />} />
        </Routes>
      </main>
      <Footer />
      <RoboAdvisor />
    </div>
  );
}

export default App;
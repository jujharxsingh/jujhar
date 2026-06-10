import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ScrollToTop from './components/layout/ScrollToTop';

// Pages
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Benefits from './pages/Benefits';
import Proof from './pages/Proof';
import CreatorTips from './pages/CreatorTips';
import ApplyContact from './pages/ApplyContact';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative flex min-h-screen flex-col overflow-x-clip bg-ivory text-espresso selection:bg-gold/30 selection:text-espresso">
        <div className="pointer-events-none fixed inset-0 -z-50 bg-dot-gold opacity-35 [mask-image:radial-gradient(ellipse_60%_45%_at_50%_0%,#000_55%,transparent_100%)]" />
        <Navbar />

        <main className="flex-grow pt-24 sm:pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/proof" element={<Proof />} />
            <Route path="/tips" element={<CreatorTips />} />
            <Route path="/apply" element={<ApplyContact />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  Shield, 
  Award, 
  FileText, 
  UserCheck, 
  Sparkles, 
  Clock 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';
import { site } from '../content/site';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Confident Application',
      description: 'Fill out our 2-minute private registration form. We ask for basic details, age confirmation, experience (if any), and your goals. Your information is 100% encrypted and secure.',
      details: ['Strict 18+ verification', 'No credit checks or upfront fees', 'Confidential submission'],
      icon: <FileText className="h-5 w-5" />
    },
    {
      num: '02',
      title: 'Confident Consultation',
      description: 'We connect via a secure WhatsApp call or meeting. This is a relaxed conversation to review platform options, understand your personal schedule, and discuss your content style, goals, and streaming preferences.',
      details: ['Choose your streaming apps', 'Set your content goals', 'No pressure, informative chat'],
      icon: <MessageCircle className="h-5 w-5" />
    },
    {
      num: '03',
      title: 'Dedicated Account Setup',
      description: 'Our agency guides you through creating professional profiles with custom graphics and unique branding. We consult on optimal lighting configurations, camera angles, and background aesthetics to make your channel stand out.',
      details: ['Custom profile branding', 'Lighting & background styling', 'Platform registration approval'],
      icon: <UserCheck className="h-5 w-5" />
    },
    {
      num: '04',
      title: 'Streaming Onboarding & Tips',
      description: 'Start streaming with confidence! You will receive live tips on planning PK battles, holding conversational bounds, selecting content themes, and building genuine audience connections.',
      details: ['Live PK battle layouts', 'Safety boundary training', 'Viewer retention coaching'],
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      num: '05',
      title: 'Weekly Payouts & Mentor Reviews',
      description: 'Earn safely. Receive comprehensive weekly analytics and performance audits to help increase your platform bonuses. Direct payouts are sent securely to your personal account on-time, every week.',
      details: ['Direct secure transfers', 'Weekly bonus optimization', 'Ongoing daily messaging support'],
      icon: <Award className="h-5 w-5" />
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      let currentActive = 0;
      steps.forEach((_, idx) => {
        const el = document.getElementById(`step-${idx}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Trigger when the element reaches 45% of viewport height
          if (rect.top <= window.innerHeight * 0.45) {
            currentActive = idx;
          }
        }
      });
      setActiveStep(currentActive);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (idx) => {
    const el = document.getElementById(`step-${idx}`);
    if (el) {
      const offset = 140; // Space for the fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Staggered Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 260, damping: 25 }
    }
  };

  return (
    <div className="relative bg-ivory pb-20">
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-dot-gold opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Intro Section */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-16 text-center lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center space-y-4"
        >
          <motion.span variants={itemVariants} className="eyebrow">
            Onboarding Process
          </motion.span>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-espresso leading-[1.08] font-sans"
          >
            A Simple Path To <br /> Guided Success
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mx-auto mt-4 max-w-2xl text-base text-espresso/70 sm:text-lg font-light leading-relaxed"
          >
            Starting your streaming brand doesn't have to be overwhelming. We handle the technical setup, safety safeguards, and platform operations so you can focus on being your authentic self.
          </motion.p>
        </motion.div>
      </section>

      {/* Sticky Timeline & Showcase Layout */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start relative">
          
          {/* LEFT: Sticky Timeline Navigator (Desktop Only) */}
          <div className="hidden md:block md:w-1/3 sticky top-36 h-fit pt-4 pr-6">
            <div className="relative">
              {/* Stepper Vertical Progress Line */}
              <div className="absolute left-[18px] top-[15px] bottom-[15px] w-[2px] bg-espresso/10 rounded-full">
                <motion.div 
                  className="w-full bg-gold rounded-full origin-top"
                  style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              </div>

              <div className="flex flex-col space-y-8 relative">
                {steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  const isCompleted = activeStep > idx;

                  return (
                    <button
                      key={step.num}
                      onClick={() => scrollToStep(idx)}
                      className="relative w-full flex items-start text-left group focus:outline-none cursor-pointer pl-12 py-1"
                    >
                      {/* Node Circle */}
                      <div className="absolute left-2.5 top-[7px] flex items-center justify-center">
                        <motion.div
                          animate={{
                            scale: isActive ? 1.25 : 1,
                            backgroundColor: isActive ? '#C85A3C' : isCompleted ? '#831843' : '#FAFAF9',
                            borderColor: isActive ? '#C85A3C' : isCompleted ? '#831843' : 'rgba(24,24,27,0.15)'
                          }}
                          className="h-4 w-4 rounded-full border-2 flex items-center justify-center text-[8px] font-bold text-white shadow-sm z-10"
                          transition={{ duration: 0.25 }}
                        >
                          {isCompleted && <span className="text-[6px]">✓</span>}
                        </motion.div>
                      </div>

                      {/* Text label */}
                      <div className="flex flex-col">
                        <span className={`font-mono text-[9px] uppercase tracking-wider block transition-colors duration-250 ${
                          isActive ? 'text-gold font-bold' : 'text-espresso/40 group-hover:text-espresso/60'
                        }`}>
                          Step {step.num}
                        </span>
                        <span className={`text-xs font-semibold tracking-tight transition-colors duration-250 ${
                          isActive ? 'text-espresso font-bold' : 'text-espresso/60 group-hover:text-espresso/80'
                        }`}>
                          {step.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Detailed Step Cards Column */}
          <div className="w-full md:w-2/3 flex flex-col space-y-16">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <motion.div
                  id={`step-${idx}`}
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                  className={`step-card group relative p-8 sm:p-10 rounded-[2rem] border bg-white/70 backdrop-blur-md transition-all duration-450 flex flex-col space-y-5 ${
                    idx % 3 === 0 ? 'card-hover-gradient-1' : idx % 3 === 1 ? 'card-hover-gradient-2' : 'card-hover-gradient-3'
                  } ${
                    isActive 
                      ? 'border-gold/30 shadow-premium-card ring-1 ring-gold/10' 
                      : 'border-espresso/[0.04] shadow-depth hover:border-espresso/10 hover:shadow-depth-lg'
                  }`}
                >
                  {/* Floating Graphic Background Seal */}
                  <div className={`absolute top-6 right-6 h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-350 ${
                    isActive 
                      ? 'bg-gold/10 text-gold scale-110 shadow-sm' 
                      : 'bg-espresso/[0.03] text-espresso/40 group-hover:bg-espresso/5 group-hover:text-espresso/60'
                  }`}>
                    {step.icon}
                  </div>

                  {/* Title & Badge */}
                  <div className="flex flex-col space-y-1.5">
                    <span className={`font-mono text-[9px] uppercase tracking-widest font-bold block ${
                      isActive ? 'text-gold' : 'text-espresso/40'
                    }`}>
                      Step {step.num}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-espresso">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-espresso/70 leading-relaxed font-light">
                    {step.description}
                  </p>

                  {/* Badges/Highlights Row */}
                  <div className="pt-5 border-t border-espresso/[0.05] flex flex-wrap gap-2.5">
                    {step.details.map((d, i) => (
                      <span 
                        key={i} 
                        className={`premium-badge border px-3.5 py-1.5 text-[10px] font-semibold rounded-full transition-colors duration-350 ${
                          isActive 
                            ? 'bg-gold/5 text-gold-dark border-gold/15' 
                            : 'bg-espresso/[0.02] text-espresso/60 border-espresso/[0.03]'
                        }`}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Creative Freedom & Lifestyle Highlight Banner */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="premium-card bg-gradient-ivory border border-gold/15 p-8 flex flex-col sm:flex-row gap-6 items-center shadow-depth card-hover-gradient-3"
        >
          <div className="h-12 w-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold shrink-0 shadow-sm">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-espresso">Total Creative Freedom & Flexible Lifestyle</h3>
            <p className="text-xs sm:text-sm text-espresso/70 mt-1 font-light leading-relaxed">
              We believe streaming should fit your lifestyle, not the other way around. Our team helps you structure your hours, choose content themes that you enjoy, and build a brand that feels completely authentic to you.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Final Action CTA Block */}
      <section className="mx-auto max-w-4xl px-6 pt-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-espresso text-cream px-8 py-12 sm:px-12 sm:py-16 shadow-depth-lg text-center"
        >
          <div className="absolute inset-0 -z-10 bg-dot-gold opacity-10" />
          <div className="max-w-2xl mx-auto flex flex-col items-center space-y-5">
            <span className="font-mono text-[9px] uppercase tracking-widest text-gold-light font-bold">Take Action</span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight font-sans">
              Become a Managed Creator Today.
            </h2>
            <p className="text-xs sm:text-sm text-cream/70 font-light max-w-lg leading-relaxed">
              Submit your private application, or jump straight to a secure consultation with an onboarding manager via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center pt-4">
              <Button 
                as="a" 
                href={site.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary"
                className="gap-2 px-8 min-h-11 w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                Chat on WhatsApp
              </Button>
              <Button 
                to="/apply" 
                variant="secondary"
                className="gap-2 px-8 min-h-11 w-full sm:w-auto text-white border-white/20 hover:bg-white/10 hover:text-white"
              >
                Apply as Creator
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

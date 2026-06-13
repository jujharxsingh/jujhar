import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Coins,
  UserCheck,
  Award,
  Radio,
  Gift,
  TrendingUp,
  Video,
  ChevronRight
} from 'lucide-react';
import Button from '../components/ui/Button';
import { site } from '../content/site';

// Section sub-components
import TrustBadge from '../components/sections/how-it-works/TrustBadge';
import InteractiveLiveMockup from '../components/sections/how-it-works/InteractiveLiveMockup';

const stepsData = [
  {
    id: 0,
    title: "Go Live",
    icon: <Radio className="h-4.5 w-4.5" />,
    badge: "Step 01",
    subtitle: "Start your broadcast feed instantly",
    explanation: "Start a live session from your phone and appear in front of viewers in real time. The platform algorithm immediately pushes your stream to matching viewer feeds based on your profile tags.",
    subtopics: [
      {
        title: "What a live session looks like",
        desc: "A clean, bright video feed focusing on you. Ambient ring lighting, an optimized angle, and screen overlay prompts guide your interactions."
      },
      {
        title: "What creators do on stream",
        desc: "You talk, share stories, play music, run mini Q&As, or host fun PK battles. Consistent warm energy is all you need."
      },
      {
        title: "Why this is NOT adult work",
        desc: "Strictly family-friendly platform policies. Nudity, vulgarity, or mature content is forbidden. It is safe, professional live entertainment."
      }
    ]
  },
  {
    id: 1,
    title: "Talk With Viewers",
    icon: <MessageCircle className="h-4.5 w-4.5" />,
    badge: "Step 02",
    subtitle: "Real-time chat and engagement",
    explanation: "Live streaming is about connection. Greet people by name, reply to comment bubbles, answer questions, and build friendly relationships.",
    subtopics: [
      {
        title: "What viewers do",
        desc: "Viewers join, chat, send screen likes, and support creators by sending virtual gifts. They look for welcoming and positive spaces."
      },
      {
        title: "Why people watch creators",
        desc: "To socialize, find entertainment, chat after a long day, and support creators they form positive digital connections with."
      }
    ]
  },
  {
    id: 2,
    title: "Receive Gifts",
    icon: <Gift className="h-4.5 w-4.5" />,
    badge: "Step 03",
    subtitle: "Support via virtual gifting system",
    explanation: "Viewers send interactive digital gifts during your streams to show support. These accumulate as diamonds in your account wallet.",
    subtopics: [
      {
        title: "What makes a good creator",
        desc: "Welcoming returning fans, staying positive, and celebrating gifts with genuine gratitude and fun animations."
      },
      {
        title: "The Virtual Gift System",
        desc: "Gifts appear on-screen as high-end animated graphics. They translate to diamonds, which convert directly to weekly USD payouts."
      }
    ]
  },
  {
    id: 3,
    title: "Grow Your Audience",
    icon: <TrendingUp className="h-4.5 w-4.5" />,
    badge: "Step 04",
    subtitle: "Audience growth & weekly payouts",
    explanation: "Broadcasting consistently builds your recognition, unlocks higher level bonuses, and multiplies your weekly payout potential.",
    subtopics: [
      {
        title: "Confidence & Consistency",
        desc: "Success comes from regular stream hours so fans know when to find you. Your camera confidence grows naturally with each session."
      },
      {
        title: "Agency Setup & Mentorship",
        desc: "IM Models Agency provides profile optimization, live battle setup, payout support, and direct strategy tips to maximize earnings."
      }
    ]
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const subtopicsBoxRef = useRef(null);
  const lastScrollTime = useRef(0);

  // Wheel Listener for scroll-based step navigation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // Only intercept on desktop screen width (lg: breakpoint is 1024px)
      if (window.innerWidth < 1024) return;

      // If wheel event originates from inside the subtopics box, let it scroll naturally
      if (subtopicsBoxRef.current && subtopicsBoxRef.current.contains(e.target)) {
        return;
      }

      const now = Date.now();
      const deltaY = e.deltaY;

      // Cooldown of 900ms to allow animations to settle
      if (now - lastScrollTime.current < 900) {
        // Boundary exceptions: allow scrolling up past Step 0 or down past Step 3
        if (activeStep === 0 && deltaY < 0) return;
        if (activeStep === 3 && deltaY > 0) return;

        e.preventDefault();
        return;
      }

      if (deltaY > 0) {
        // Scroll down: step forward
        if (activeStep < 3) {
          e.preventDefault();
          setActiveStep((prev) => prev + 1);
          lastScrollTime.current = now;
        }
      } else if (deltaY < 0) {
        // Scroll up: step backward
        if (activeStep > 0) {
          e.preventDefault();
          setActiveStep((prev) => prev - 1);
          lastScrollTime.current = now;
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [activeStep]);

  const currentStep = stepsData[activeStep];

  return (
    <div className="relative bg-ivory overflow-hidden select-none">
      {/* Background Dots & Ambient Highlights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-dot-gold opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-burgundy/5 rounded-full blur-[120px]" />
      </div>

      {/* Main Section 1: Full Viewport fold */}
      <section
        ref={containerRef}
        className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col justify-center min-h-[calc(100vh-96px)] lg:h-[calc(100vh-112px)] lg:min-h-[680px] lg:overflow-hidden pt-4 pb-12 lg:py-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full h-full">

          {/* Left Side: Copy + Interactive Cards + Subtopics Panel */}
          <div className="lg:col-span-7 flex flex-col space-y-5 text-left justify-center h-full">

            {/* Header / Eyebrow Area */}
            <div className="space-y-2.5">
              <span className="eyebrow inline-block">
                CREATOR EDUCATION — PART 1
              </span>

              <h1 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight leading-none text-espresso">
                What Is Live Streaming?
              </h1>

              <p className="text-xs sm:text-sm text-espresso/85 leading-relaxed font-light max-w-2xl">
                Live streaming means going live on a video platform where viewers can join, chat, interact, send virtual gifts, and support creators in real time.
              </p>
            </div>

            {/* Trust Badges Bar */}
            <div className="flex flex-wrap gap-2 py-0.5">
              <TrustBadge text="18+ Only" icon={<ShieldCheck className="h-3 w-3" />} />
              <TrustBadge text="Not Adult Work" icon={<UserCheck className="h-3 w-3" />} />
              <TrustBadge text="Agency Support" icon={<Award className="h-3 w-3" />} />
            </div>

            {/* Interactive Cards (2x2 Selector Grid) */}
            <div className="grid grid-cols-2 gap-3.5 w-full">
              {stepsData.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <motion.button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    className={`text-left p-3.5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${isActive
                        ? 'bg-white border-gold/45 shadow-premium-card ring-1 ring-gold/10'
                        : 'bg-white/40 border-espresso/[0.04] hover:bg-white/70 hover:border-espresso/10'
                      }`}
                  >
                    {/* Header: step tag + icon */}
                    <div className="flex justify-between items-center w-full">
                      <span className={`text-[8px] font-mono font-extrabold uppercase tracking-wider ${isActive ? 'text-gold-dark' : 'text-espresso/40'
                        }`}>
                        {step.badge}
                      </span>
                      <div className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 ${isActive ? 'bg-gold/10 text-gold' : 'bg-espresso/5 text-espresso/40'
                        }`}>
                        {step.icon}
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="mt-3">
                      <h4 className="text-xs font-black text-espresso tracking-tight flex items-center gap-1 font-display">
                        {step.title}
                        {isActive && (
                          <motion.span
                            layoutId="activeStepDot"
                            className="h-1.5 w-1.5 rounded-full bg-gold inline-block shrink-0"
                          />
                        )}
                      </h4>
                      <p className="text-[10px] text-espresso/50 font-light mt-0.5 truncate max-w-[160px]">
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Active dynamic accent bottom line */}
                    {isActive && (
                      <motion.div
                        layoutId="activeCardUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-gold via-burgundy to-gold-light"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Detailed Subtopics Display Panel (Explaining details) */}
            <div ref={subtopicsBoxRef} className="relative bg-white/40 border border-espresso/[0.03] backdrop-blur-md p-4 rounded-2xl shadow-depth-sm min-h-[150px] lg:h-[180px] lg:overflow-y-auto flex flex-col justify-start py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="space-y-3"
                >
                  <div className="border-b border-espresso/5 pb-1.5">
                    <span className="text-[10px] uppercase font-mono font-black text-gold-light tracking-widest">
                      {currentStep.badge} — {currentStep.subtitle}
                    </span>
                    <p className="text-[11px] text-espresso/70 mt-0.5 leading-relaxed font-light">
                      {currentStep.explanation}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                    {currentStep.subtopics.map((sub, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col space-y-0.5 text-left ${currentStep.subtopics.length === 3
                            ? 'md:col-span-4'
                            : 'md:col-span-6'
                          }`}
                      >
                        <h5 className="text-[10.5px] font-extrabold uppercase text-espresso tracking-tight flex items-center gap-1 font-sans">
                          <ChevronRight className="h-3 w-3 text-gold shrink-0" />
                          {sub.title}
                        </h5>
                        <p className="text-[10px] text-espresso/65 font-light leading-relaxed pl-4">
                          {sub.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1 w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button
                  as="a"
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="gap-2 px-8 py-2.5 min-h-10 text-xs w-full sm:w-auto shadow-premium-md bg-gradient-to-r from-gold to-burgundy text-white border-0 font-bold"
                >
                  <MessageCircle className="h-4 w-4 fill-white" />
                  CHAT ON WHATSAPP
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button
                  to="/apply"
                  variant="secondary"
                  className="gap-2 px-8 py-2.5 min-h-10 text-xs w-full sm:w-auto border-espresso/10 hover:bg-espresso/5 text-espresso bg-white/20 backdrop-blur-sm font-bold"
                >
                  APPLY AS CREATOR
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </motion.div>
            </div>

          </div>

          {/* Right Side: Sticky 3D Phone Mockup (updates in sync) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center h-full">
            <InteractiveLiveMockup activeStep={activeStep} />
          </div>

        </div>
      </section>
    </div>
  );
}

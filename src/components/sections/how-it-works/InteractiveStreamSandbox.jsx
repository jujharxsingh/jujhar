import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  MessageCircle, 
  Gift, 
  TrendingUp, 
  Video, 
  Users, 
  Award, 
  Sparkles, 
  Zap,
  Send
} from 'lucide-react';

export default function InteractiveStreamSandbox() {
  const [activeStep, setActiveStep] = useState(0);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Mouse tilt calculations for the 3D phone screen simulator
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Limits the tilt angle to a subtle, premium 6 degrees
    const rX = -(mouseY / (height / 2)) * 6;
    const rY = (mouseX / (width / 2)) * 6;
    
    setTilt({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const steps = [
    {
      id: 0,
      badge: "Step 01",
      title: "Go Live",
      summary: "Start broadcast feed",
      description: "Start a live session from your phone and appear in front of viewers in real time. The platform algorithm pushes you to matching feeds immediately.",
      icon: <Smartphone className="h-4 w-4" />
    },
    {
      id: 1,
      badge: "Step 02",
      title: "Talk With Viewers",
      summary: "Engage chat feed",
      description: "Greet people, reply to comments, answer questions, and build audience connection. Genuine conversation is key to viewer retention.",
      icon: <MessageCircle className="h-4 w-4" />
    },
    {
      id: 2,
      badge: "Step 03",
      title: "Receive Virtual Gifts",
      summary: "Get reward tokens",
      description: "Viewers send digital gifts during your live sessions to show support. These gifts accumulate as diamonds that convert into secure weekly USD payouts.",
      icon: <Gift className="h-4 w-4" />
    },
    {
      id: 3,
      badge: "Step 04",
      title: "Grow Your Audience",
      summary: "Raise ranking tiers",
      description: "Consistent daily live sessions help you build recognition, level up your profile, unlock platform bonuses, and scale your weekly earning potential.",
      icon: <TrendingUp className="h-4 w-4" />
    }
  ];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
      
      {/* LEFT COLUMN: Vertical interactive step list selector */}
      <div className="lg:col-span-5 flex flex-col space-y-3 justify-center">
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <motion.button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className={`text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden flex items-start gap-4 select-none ${
                isActive 
                  ? 'bg-white border-gold/30 shadow-premium-sm ring-1 ring-gold/10' 
                  : 'bg-white/40 border-espresso/[0.04] hover:bg-white/75 hover:border-espresso/10'
              }`}
            >
              {/* Active Golden left strip indicator */}
              {isActive && (
                <motion.div 
                  layoutId="activeStepIndicator"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-burgundy to-gold-light" 
                />
              )}

              {/* Icon container */}
              <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${
                isActive ? 'bg-gold/10 text-gold' : 'bg-espresso/5 text-espresso/50'
              }`}>
                {step.icon}
              </div>

              {/* Text content */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[8px] font-bold font-mono uppercase tracking-wider ${
                    isActive ? 'text-gold-dark' : 'text-espresso/45'
                  }`}>
                    {step.badge}
                  </span>
                  {isActive && (
                    <span className="h-1 w-1 rounded-full bg-gold animate-ping" />
                  )}
                </div>
                <h4 className="text-sm font-extrabold text-espresso tracking-tight">{step.title}</h4>
                {isActive && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-2xs sm:text-xs text-espresso/70 leading-relaxed font-light mt-1"
                  >
                    {step.description}
                  </motion.p>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* RIGHT COLUMN: 3D stream simulator screen */}
      <div className="lg:col-span-7 flex justify-center items-center">
        <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[2.2rem] group/sandbox select-none">
          {/* Ambient glow behind device */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 via-burgundy/15 to-gold/10 rounded-[2.5rem] blur-2xl opacity-75 group-hover/sandbox:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Interactive device shell */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full h-full bg-espresso border border-white/10 rounded-[2.2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] overflow-hidden transition-transform duration-200 ease-out flex flex-col justify-between p-4"
          >
            {/* Gloss reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/[0.06] pointer-events-none z-30" />
            
            {/* Base video simulation background */}
            <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/90 to-espresso/95 z-0" />

            {/* SIMULATOR SCREEN CONTENT (Updates based on activeStep) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <AnimatePresence mode="wait">
                {activeStep === 0 && (
                  /* STEP 1: GO LIVE SIMULATOR */
                  <motion.div
                    key="step-live"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white"
                  >
                    {/* Ring light vector outline in background */}
                    <div className="absolute w-44 h-44 rounded-full border border-white/5 flex items-center justify-center animate-pulse">
                      <div className="w-36 h-36 rounded-full border border-white/5" />
                    </div>

                    {/* Camera grid view finder lines */}
                    <div className="absolute inset-8 border border-white/10 opacity-40">
                      <div className="absolute top-0 bottom-0 left-1/3 border-l border-white/5" />
                      <div className="absolute top-0 bottom-0 right-1/3 border-l border-white/5" />
                      <div className="absolute left-0 right-0 top-1/3 border-t border-white/5" />
                      <div className="absolute left-0 right-0 bottom-1/3 border-t border-white/5" />
                    </div>

                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-14 w-14 rounded-full bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 relative mb-4 z-10 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                    >
                      <Video className="h-6 w-6" />
                    </motion.div>
                    
                    <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-white/80 z-10">Status: Connecting</h4>
                    <p className="text-[10px] text-white/55 max-w-[180px] mt-1.5 font-light leading-relaxed z-10">
                      Initializing camera stream feed... Establishing secure connection.
                    </p>
                  </motion.div>
                )}

                {activeStep === 1 && (
                  /* STEP 2: CHAT ENGAGEMENT SIMULATOR */
                  <motion.div
                    key="step-chat"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col justify-end p-4 text-left"
                  >
                    {/* Blurred mock streamer silhouette */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>

                    {/* Chat bubbles container */}
                    <div className="flex flex-col space-y-2 max-h-[220px] overflow-hidden mb-12">
                      <div className="bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/[0.05] flex flex-col self-start max-w-[80%]">
                        <span className="text-[7.5px] font-bold text-gold-light uppercase tracking-wider">User_927</span>
                        <span className="text-[9.5px] text-white/90 font-light mt-0.5">Hi! Live quality looks amazing today ✨</span>
                      </div>
                      <div className="bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/[0.05] flex flex-col self-start max-w-[80%]">
                        <span className="text-[7.5px] font-bold text-gold-light uppercase tracking-wider">MarcusRowe</span>
                        <span className="text-[9.5px] text-white/90 font-light mt-0.5">Loved the Q&A session, thank you! 🙌</span>
                      </div>
                      <div className="bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/[0.05] flex flex-col self-start max-w-[80%]">
                        <span className="text-[7.5px] font-bold text-gold-light uppercase tracking-wider">Elena_Live</span>
                        <span className="text-[9.5px] text-white/90 font-light mt-0.5">Setup tips are incredibly useful.</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  /* STEP 3: VIRTUAL GIFT SIMULATOR */
                  <motion.div
                    key="step-gift"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col justify-end p-4 text-left"
                  >
                    {/* Floating gold shapes/rewards rising up */}
                    {[1, 2, 3].map((num) => (
                      <motion.div
                        key={`float-${num}`}
                        initial={{ opacity: 0, y: 280, x: 100 + num * 25, scale: 0.5 }}
                        animate={{
                          opacity: [0, 1, 1, 0],
                          y: [280, 150, 60],
                          x: [100 + num * 25, 80 + num * 20, 120 + num * 28],
                          scale: [0.5, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 4.5,
                          repeat: Infinity,
                          delay: num * 1.5,
                          ease: "easeInOut"
                        }}
                        className="absolute text-gold-light"
                      >
                        {num === 1 ? (
                          <Heart className="h-6 w-6 fill-red-500 text-red-500 shadow-sm" />
                        ) : num === 2 ? (
                          <Sparkles className="h-6 w-6 text-gold-light" />
                        ) : (
                          <Gift className="h-6 w-6 text-gold-light animate-bounce" />
                        )}
                      </motion.div>
                    ))}

                    {/* Alert Message Banner */}
                    <div className="flex items-center gap-2.5 bg-gradient-to-r from-gold/90 via-burgundy/95 to-gold/90 backdrop-blur-md p-2 rounded-xl border border-white/20 shadow-premium-lg mb-12">
                      <div className="h-6 w-6 rounded-lg bg-white/20 flex items-center justify-center">
                        <Gift className="h-3.5 w-3.5 text-white" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[7.5px] uppercase tracking-wider text-white/80 font-bold font-mono">Gift Received</span>
                        <span className="text-[9.5px] text-white font-extrabold leading-tight">Alex_99 sent Magic Crown 👑</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 3 && (
                  /* STEP 4: AUDIENCE GROWTH ANALYTICS */
                  <motion.div
                    key="step-growth"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col justify-center p-6 text-left"
                  >
                    {/* Glassmorphism growth card overlay */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/15 p-5 rounded-2xl shadow-glass flex flex-col space-y-4">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                        <div className="flex flex-col">
                          <span className="text-[8px] uppercase tracking-wider text-white/60 font-semibold font-mono">MONTHLY AUDIT</span>
                          <h4 className="text-xs font-bold text-white tracking-tight">Broadcaster Progress</h4>
                        </div>
                        <div className="h-7 w-7 rounded-lg bg-gold/10 text-gold-light flex items-center justify-center">
                          <TrendingUp className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Stat items */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-black/30 p-2 rounded-lg border border-white/5 flex flex-col">
                          <span className="text-[7.5px] text-white/55 font-medium uppercase font-mono">Net Payouts</span>
                          <span className="text-xs font-extrabold text-white mt-0.5">$3,420 USD</span>
                        </div>
                        <div className="bg-black/30 p-2 rounded-lg border border-white/5 flex flex-col">
                          <span className="text-[7.5px] text-white/55 font-medium uppercase font-mono">Leaderboard</span>
                          <span className="text-xs font-extrabold text-gold-light mt-0.5">1x Crown 👑</span>
                        </div>
                      </div>

                      {/* Growth chart mini lines */}
                      <div className="flex flex-col space-y-1.5 pt-1">
                        <div className="flex justify-between text-[7px] text-white/50 uppercase font-mono">
                          <span>Growth Performance</span>
                          <span className="text-green-400 font-bold">+290% Rank</span>
                        </div>
                        <div className="flex items-end gap-1.5 h-7 w-full pt-1.5">
                          {[20, 35, 30, 45, 60, 50, 75].map((val, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${val}%` }}
                              transition={{ duration: 0.8, delay: i * 0.05 }}
                              className="flex-grow bg-gradient-to-t from-gold via-burgundy to-gold-light rounded-sm"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* DEVICE MOCKUP TOP HEADER BAR (Constant) */}
            <div className="relative z-20 flex justify-between items-center w-full" style={{ transform: "translateZ(25px)" }}>
              {/* Pulsing Live Badge + Viewer Pill */}
              <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-white">LIVE</span>
                <span className="w-[1px] h-2.5 bg-white/20 mx-0.5" />
                <div className="flex items-center gap-0.5 text-white/95">
                  <Users className="h-2 w-2 text-white/60" />
                  <span className="text-[8px] font-bold">3.4K</span>
                </div>
              </div>

              {/* Status Chips */}
              <div className="flex gap-1.5">
                <span className="flex items-center bg-green-500/10 backdrop-blur-md px-2 py-0.5 rounded-full border border-green-500/20 text-green-400 text-[8px] font-bold uppercase tracking-wider">
                  ● Ready
                </span>
                <span className="flex items-center gap-0.5 bg-gold/85 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 text-white text-[8px] font-bold uppercase tracking-wider shadow-sm">
                  <Award className="h-2 w-2" /> Verified
                </span>
              </div>
            </div>

            {/* DEVICE MOCKUP BOTTOM PANEL BAR (Constant) */}
            <div className="relative z-20 flex flex-col space-y-2.5 w-full mt-auto" style={{ transform: "translateZ(30px)" }}>
              {/* Virtual Target indicator bar */}
              <div className="bg-black/50 backdrop-blur-md p-1.5 rounded-lg border border-white/5 flex flex-col space-y-1">
                <div className="flex justify-between text-[7px] text-white/70 font-semibold font-mono tracking-wider">
                  <span>LIVE TARGET</span>
                  <span className="text-gold-light">8,200 / 10,000 DIAMONDS</span>
                </div>
                <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gold via-burgundy to-gold-light rounded-full w-[82%]" />
                </div>
              </div>

              {/* Message inputs bar */}
              <div className="flex gap-2 items-center p-2 rounded-xl bg-white/5 border border-white/10 text-[9px] text-white/40">
                <span className="flex-grow text-left pl-1">Simulator Chat Feed...</span>
                <div className="flex items-center gap-1.5 text-white/55">
                  <Zap className="h-3 w-3 text-gold-light" />
                  <Send className="h-3 w-3" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

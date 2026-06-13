import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Sparkles, 
  Gift, 
  Award, 
  Zap, 
  Send, 
  Users, 
  Radio, 
  Video, 
  TrendingUp, 
  MessageCircle,
  ShieldCheck,
  Compass,
  Laptop
} from 'lucide-react';

export default function InteractiveLiveMockup({ activeStep = 0 }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Define step-specific video sources
  const videoSources = [
    '/videos/how-it-works/step1-golive.mp4',
    '/videos/how-it-works/step2-talk.mp4',
    '/videos/how-it-works/step3-gifts.mp4',
    '/videos/how-it-works/step4-grow.mp4'
  ];

  const currentVideoSrc = videoSources[activeStep] || videoSources[0];

  // Mouse tilt tracking relative to container center
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Coordinates from -0.5 to 0.5
    const xVal = (e.clientX - rect.left) / width - 0.5;
    const yVal = (e.clientY - rect.top) / height - 0.5;
    
    // Rotates card by max 8 degrees
    const rX = -yVal * 8;
    const rY = xVal * 8;
    
    setTilt({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  useEffect(() => {
    setVideoError(false); // Reset error status on source change
    setIsPlaying(false);
  }, [currentVideoSrc]);

  useEffect(() => {
    if (videoRef.current && !videoError) {
      videoRef.current.load();
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [currentVideoSrc, videoError]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[340px] aspect-[9/16] select-none flex items-center justify-center py-6 h-full min-h-[500px] lg:min-h-[550px]"
    >
      {/* Outer Burgundy/Gold Glow behind mockup */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-burgundy/15 to-gold/10 rounded-[2.5rem] blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Floating 3D Micro Chips around mockup (Drift independently) */}
      
      {/* Top Left: Status / Verification */}
      <motion.div
        animate={isHovered ? { y: -8, scale: 1.05 } : { y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2 -left-8 z-30 bg-white/60 border border-white/20 backdrop-blur-md rounded-full shadow-premium-sm px-3 py-1.5 flex items-center gap-1 text-2xs font-extrabold text-espresso/80 tracking-wide font-sans cursor-default"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-ping" />
        {activeStep === 0 && "Setup Ok"}
        {activeStep === 1 && "1.2K Viewers"}
        {activeStep === 2 && "Gifts Flowing"}
        {activeStep === 3 && "Payout Ready"}
      </motion.div>

      {/* Top Right: Laptop / Training */}
      <motion.div
        animate={isHovered ? { y: -5, scale: 1.05 } : { y: [0, -8, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-10 -right-8 z-30 bg-white/60 border border-white/20 backdrop-blur-md rounded-full shadow-premium-sm px-3 py-1.5 flex items-center gap-1 text-2xs font-extrabold text-espresso/80 tracking-wide font-sans cursor-default"
      >
        <Laptop className="h-3 w-3 text-gold" />
        Safe Portal
      </motion.div>

      {/* Bottom Left: Trust Badge */}
      <motion.div
        animate={isHovered ? { y: 6, scale: 1.05 } : { y: [0, -7, 0] }}
        transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-16 -left-10 z-30 bg-white/60 border border-white/20 backdrop-blur-md rounded-full shadow-premium-sm px-3 py-1.5 flex items-center gap-1 text-2xs font-extrabold text-espresso/80 tracking-wide font-sans cursor-default"
      >
        <ShieldCheck className="h-3 w-3 text-gold" />
        Not Adult Work
      </motion.div>

      {/* Bottom Right: Analytics */}
      <motion.div
        animate={isHovered ? { y: 8, scale: 1.05 } : { y: [0, -9, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-12 -right-8 z-30 bg-white/60 border border-white/20 backdrop-blur-md rounded-full shadow-premium-sm px-3 py-1.5 flex items-center gap-1 text-2xs font-extrabold text-espresso/80 tracking-wide font-sans cursor-default"
      >
        <TrendingUp className="h-3 w-3 text-gold" />
        Weekly USD
      </motion.div>

      {/* MAIN 3D PHONE CARD BODY */}
      <motion.div
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="relative w-full h-full bg-espresso border border-white/10 rounded-[2.2rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.7),_0_0_50px_rgba(135,0,86,0.12)] overflow-hidden transition-transform duration-300 ease-out flex flex-col justify-between p-4"
      >
        {/* Shiny diagonal glass reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/[0.07] pointer-events-none z-30" />

        {/* Video feed simulation gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/35 via-espresso/85 to-espresso/95 z-0" />
        
        {/* Video Background Layer (renders if exists, otherwise fails over to vector backdrop) */}
        {!videoError && (
          <video
            ref={videoRef}
            src={currentVideoSrc}
            onError={handleVideoError}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
          />
        )}

        {/* Vector Backup Background - rendered behind controls */}
        {videoError && (
          <div className="absolute inset-0 z-0 pointer-events-none flex flex-col items-center justify-center">
            {/* Ring light visual mockup */}
            <div className="w-40 h-40 rounded-full border border-gold/15 shadow-[0_0_20px_rgba(135,0,86,0.2)] flex items-center justify-center -translate-y-8 animate-pulse">
              <div className="w-36 h-36 rounded-full border border-gold/5" />
            </div>
            
            {/* Silhouette outline */}
            <svg className="absolute w-32 h-32 text-white/[0.07] -translate-y-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <div className="absolute top-16 left-1/3 w-28 h-28 bg-gold/5 rounded-full blur-xl animate-pulse" />
          </div>
        )}

        {/* DYNAMIC SCREEN OVERLAYS (Synced with activeStep) */}
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-4 pt-12 pb-5">
          
          {/* TOP HEADER CONTROLS (Always visible, text updates per step) */}
          <div className="flex justify-between items-center w-full" style={{ transform: "translateZ(25px)" }}>
            {/* Pulsing LIVE badge + viewer count */}
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-[9px] uppercase tracking-wider font-extrabold text-white">LIVE</span>
              <span className="w-[1px] h-2.5 bg-white/20 mx-0.5" />
              <div className="flex items-center gap-0.5 text-white/95">
                <Users className="h-2 w-2 text-white/60" />
                <span className="text-[8px] font-bold">
                  {activeStep === 0 && "0"}
                  {activeStep === 1 && "1.2K"}
                  {activeStep === 2 && "2.4K"}
                  {activeStep === 3 && "3.8K"}
                </span>
              </div>
            </div>

            {/* Agency Verified badge */}
            <div className="flex items-center gap-0.5 bg-gold/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-white text-[8px] font-bold uppercase tracking-wider shadow-sm">
              <Award className="h-2.5 w-2.5" /> Agency Pro
            </div>
          </div>

          {/* DYNAMIC STEP CONTENT */}
          <div className="flex-grow flex flex-col justify-end w-full pb-1">
            <AnimatePresence mode="wait">
              {activeStep === 0 && (
                /* STEP 0: GO LIVE SCREEN */
                <motion.div
                  key="mockup-golive"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center justify-center text-center px-4 mb-10 w-full"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-14 w-14 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold-light mb-4 shadow-[0_0_20px_rgba(135,0,86,0.3)]"
                  >
                    <Radio className="h-6 w-6 text-gold-light" />
                  </motion.div>
                  
                  <span className="text-[10px] font-mono font-bold tracking-widest text-gold-light uppercase bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
                    Broadcaster Ready
                  </span>
                  <h4 className="text-sm font-extrabold text-white mt-2 font-display">
                    Start Stream
                  </h4>
                  <p className="text-[10.5px] text-white/60 font-light leading-relaxed max-w-[200px] mt-1">
                    Your camera, filter settings, and network speed are optimized.
                  </p>
                  
                  <div className="w-full mt-6 bg-gold/80 hover:bg-gold py-2 rounded-xl text-white text-[10px] font-bold tracking-wider uppercase flex items-center justify-center gap-1 shadow-premium-md border border-white/10">
                    <Video className="h-3.5 w-3.5" /> Start Broadcasting
                  </div>
                </motion.div>
              )}

              {activeStep === 1 && (
                /* STEP 1: TALK WITH VIEWERS SCREEN */
                <motion.div
                  key="mockup-talk"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col space-y-2 mb-2 w-full text-left"
                >
                  {/* Floating Join Pill */}
                  <motion.div 
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: [0, 1, 1, 0], x: [-15, 0, 0, -10] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                    className="bg-gold/20 border border-gold/30 backdrop-blur-md px-2.5 py-1 rounded-lg text-[8.5px] text-white/90 font-medium self-start flex items-center gap-1"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold-light animate-ping" />
                    <span>Lara_99 joined the stream</span>
                  </motion.div>

                  {/* Chat messages */}
                  <div className="flex flex-col space-y-1.5 max-h-[140px] overflow-hidden">
                    <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-white/[0.05] flex flex-col text-left self-start max-w-[85%]">
                      <span className="text-[8px] font-extrabold text-gold-light uppercase tracking-wider">Elena_Live</span>
                      <span className="text-[9.5px] text-white/95 font-light mt-0.5 leading-normal">
                        Your stream quality is crystal clear! ✨
                      </span>
                    </div>
                    <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-white/[0.05] flex flex-col text-left self-start max-w-[85%]">
                      <span className="text-[8px] font-extrabold text-gold-light uppercase tracking-wider">MarcusRowe</span>
                      <span className="text-[9.5px] text-white/95 font-light mt-0.5 leading-normal">
                        How is your training going today? 🚀
                      </span>
                    </div>
                  </div>

                  {/* Reaction Emojis rising on the right */}
                  <div className="absolute right-2 bottom-12 flex flex-col space-y-3 z-20">
                    {[1, 2, 3].map((n) => (
                      <motion.span
                        key={n}
                        initial={{ opacity: 0, y: 30, scale: 0.6 }}
                        animate={{ opacity: [0, 1, 0], y: [-20, -80, -130], x: [0, (n%2===0?15:-15), 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: n * 0.8, ease: "easeOut" }}
                        className="text-sm select-none"
                      >
                        {n === 1 ? "❤️" : n === 2 ? "🔥" : "👍"}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeStep === 2 && (
                /* STEP 2: RECEIVE GIFTS SCREEN */
                <motion.div
                  key="mockup-gifts"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col space-y-2 mb-2 w-full text-left"
                >
                  {/* Dense rising gift icons */}
                  <div className="absolute inset-x-0 bottom-24 top-0 overflow-hidden pointer-events-none z-10">
                    {[1, 2, 3, 4].map((num) => (
                      <motion.div
                        key={`rising-gift-${num}`}
                        initial={{ opacity: 0, y: 280, x: 80 + num * 35, scale: 0.6 }}
                        animate={{
                          opacity: [0, 1, 1, 0],
                          y: [280, 150, 40],
                          x: [80 + num * 35, 60 + num * 30, 95 + num * 40],
                          scale: [0.6, 1.3, 0.8],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: num * 0.8,
                          ease: "easeInOut",
                        }}
                        className="absolute text-gold-light drop-shadow-[0_0_8px_rgba(217,139,188,0.4)]"
                      >
                        {num === 1 ? (
                          <Heart className="h-6 w-6 fill-red-500 text-red-500" />
                        ) : num === 2 ? (
                          <Sparkles className="h-6 w-6 text-gold-light" />
                        ) : num === 3 ? (
                          <Gift className="h-6 w-6 text-white" />
                        ) : (
                          <span className="text-lg">💎</span>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* "Virtual Gift Sent" Alert Banner (Flashy glassmorphism card) */}
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-2.5 bg-gradient-to-r from-gold/90 via-burgundy/95 to-gold/90 border border-white/20 p-2.5 rounded-xl shadow-premium-lg mb-2 z-20"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <div className="h-7 w-7 rounded-lg bg-white/20 flex items-center justify-center animate-bounce">
                      <Gift className="h-4.5 w-4.5 text-white" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[8px] uppercase tracking-wider text-white/80 font-bold font-mono">Virtual Gift Received</span>
                      <span className="text-[10px] text-white font-extrabold leading-tight">Alex_99 sent Magic Crown 👑</span>
                    </div>
                    <div className="ml-auto text-[9px] font-bold text-white bg-black/30 px-1.5 py-0.5 rounded font-mono">
                      +1000 💎
                    </div>
                  </motion.div>

                  {/* Earning tracker banner */}
                  <div className="bg-black/55 backdrop-blur-md px-3 py-2 rounded-xl border border-white/5 flex justify-between items-center z-20">
                    <span className="text-[8px] text-white/60 font-medium font-mono uppercase">Diamond Balance</span>
                    <span className="text-xs font-black text-gold-light font-mono">25,480 💎</span>
                  </div>
                </motion.div>
              )}

              {activeStep === 3 && (
                /* STEP 3: GROW YOUR AUDIENCE SCREEN */
                <motion.div
                  key="mockup-grow"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col justify-center px-2 mb-2 w-full text-left"
                >
                  {/* Creator Analytics Panel overlay */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl shadow-glass flex flex-col space-y-3.5 z-20">
                    
                    {/* Header of analytics */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="flex flex-col">
                        <span className="text-[7.5px] uppercase tracking-wider text-white/50 font-semibold font-mono">WEEKLY SUMMARY</span>
                        <h4 className="text-2xs font-extrabold text-white tracking-tight">Earning Dashboard</h4>
                      </div>
                      <div className="h-6 w-6 rounded-lg bg-gold/10 text-gold-light flex items-center justify-center shadow-inner">
                        <TrendingUp className="h-3.5 w-3.5 text-gold-light" />
                      </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-black/35 p-1.5 rounded-lg border border-white/5 flex flex-col">
                        <span className="text-[7px] text-white/45 font-medium uppercase font-mono">Net Earnings</span>
                        <span className="text-2xs font-black text-white mt-0.5 font-mono">$474.00 USD</span>
                      </div>
                      <div className="bg-black/35 p-1.5 rounded-lg border border-white/5 flex flex-col">
                        <span className="text-[7px] text-white/45 font-medium uppercase font-mono">Level Status</span>
                        <span className="text-2xs font-black text-gold-light mt-0.5 font-mono">Level UP 👑</span>
                      </div>
                    </div>

                    {/* Progress Bar target */}
                    <div className="flex flex-col space-y-1.5">
                      <div className="flex justify-between text-[7px] text-white/50 uppercase font-mono">
                        <span>Target Performance</span>
                        <span className="text-green-400 font-extrabold">100% DONE</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-gold via-burgundy to-gold-light rounded-full w-full" />
                      </div>
                    </div>

                    {/* Growth statement */}
                    <div className="text-[8.5px] text-white/70 font-light leading-relaxed border-t border-white/5 pt-2 flex items-center gap-1">
                      <Award className="h-3 w-3 text-gold-light shrink-0" />
                      <span>Agency Tier 3 bonus achieved. payout secured!</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* BOTTOM NAVIGATION INPUT BAR (Constant, always visible) */}
          <div className="relative z-20 flex flex-col space-y-2 w-full mt-auto" style={{ transform: "translateZ(30px)" }}>
            
            {/* Live bonus tracking indicator */}
            <div className="bg-black/55 backdrop-blur-md p-1.5 rounded-lg border border-white/5 flex flex-col space-y-1">
              <div className="flex justify-between text-[6.5px] text-white/50 font-semibold font-mono tracking-wider">
                <span>DAILY BONUS PROGRESS</span>
                <span className="text-gold-light font-mono">
                  {activeStep === 0 && "0%"}
                  {activeStep === 1 && "24%"}
                  {activeStep === 2 && "82%"}
                  {activeStep === 3 && "100%"}
                </span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-gold via-burgundy to-gold-light rounded-full transition-all duration-500 ease-out" 
                  style={{ 
                    width: activeStep === 0 ? "0%" : activeStep === 1 ? "24%" : activeStep === 2 ? "82%" : "100%" 
                  }}
                />
              </div>
            </div>

            {/* Bottom Message bar */}
            <div className="flex gap-1.5 items-center w-full">
              <div className="flex-grow flex gap-2 items-center p-2 rounded-xl bg-white/5 border border-white/10 text-[9px] text-white/40">
                <span className="text-left pl-1">Send chat...</span>
                <Send className="h-3 w-3 text-white/45 ml-auto" />
              </div>
              {/* Reactions buttons */}
              <div className="flex gap-1 shrink-0">
                <span className="h-6 w-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] hover:bg-white/15 cursor-pointer">❤️</span>
                <span className="h-6 w-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] hover:bg-white/15 cursor-pointer">🔥</span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

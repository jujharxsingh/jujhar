import React, { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle, Shield, Award, Sparkles, CheckCircle2, TrendingUp, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { site } from '../content/site';
import logoImg from '../../assets/agency-logo.png';
import ColorTransition from '../components/ui/ColorTransition';

export default function Home() {
  const videoRef = useRef(null);
  const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isMobile = window.innerWidth < 768;
    
    const playTimer = window.setTimeout(() => {
      if (!videoRef.current) return;

      if (mediaQuery.matches || isMobile) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => {
          console.log("Autoplay prevented or video play failed", err);
        });
      }
    }, 800);

    return () => window.clearTimeout(playTimer);
  }, []);

  // Stagger variants for text/badge/CTA loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94], // clean easeOutCubic
      },
    },
  };

  const cardParentVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
        delay: 0.3,
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-ivory">
      {/* Background Ornaments */}
      <div className="absolute inset-0 -z-10 bg-dot-gold opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* 1. HERO SECTION (Asymmetric grid) */}
      <div className="relative z-0 overflow-hidden w-full -mt-24 sm:-mt-28 pt-24 sm:pt-28">
        {/* Background Wrapper (keeps background layers behind content without negative z-index rendering bugs) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Background Video */}
          <video 
            ref={videoRef}
            src={assetPath('/videos/Animated%20background.webm')}
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Soft white overlay above the video with 70% opacity for more video visibility */}
          <div className="absolute inset-0 bg-white/70" />

          {/* Glassmorphism Blur Overlays */}
          <div className="hero-video-top-fade" />
          <div className="hero-video-bottom-fade" />
          <div className="blur-overlay blur-overlay-top" />
          <div className="blur-overlay blur-overlay-bottom" />
        </div>

        <section className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-20 md:pb-28 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left: Messaging */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Safe Wording Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="premium-badge flex items-center gap-1.5 bg-burgundy/5 text-burgundy border border-burgundy/10 px-4 py-1.5 rounded-full text-[10px]">
                <Shield className="h-3.5 w-3.5 text-burgundy" />
                18+ Creators Only • 100% Safe & Professional Support
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-espresso leading-[1.08] font-sans"
            >
              Launch Your Live <br className="hidden sm:inline" />
              Streaming Career With <br className="hidden sm:inline" />
              <span className="text-shimmer-purple">Professional Support.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-base text-espresso/85 sm:text-lg font-normal leading-relaxed"
            >
              IM Models Agency provides <strong>personal profile management</strong>, <strong>interactive streaming training</strong>, and <strong>weekly account guidance</strong> to help you grow. Earn securely with <strong>zero investment</strong>, <strong>creative scheduling options</strong>, and a dedicated mentoring team behind you.
            </motion.p>

            {/* Core Safe Wording Badges */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 max-w-md pt-2"
            >
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-extrabold text-espresso uppercase tracking-wider">No Investment</h4>
                  <p className="text-[12px] text-espresso/80 mt-0.5">We provide all setups and coaching resources at <strong>zero startup cost</strong>.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-extrabold text-espresso uppercase tracking-wider">Not Adult Work</h4>
                  <p className="text-[12px] text-espresso/80 mt-0.5">Focused strictly on <strong>professional talent</strong>, broadcasting, and lifestyle content hosting.</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.025, y: -2, boxShadow: "0 10px 25px -5px rgba(131, 24, 67, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto rounded-pill"
              >
                <Button
                  as="a"
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="gap-2.5 min-h-12 px-8 w-full shadow-depth hover:shadow-none"
                >
                  <MessageCircle className="h-4.5 w-4.5 fill-white" />
                  Chat on WhatsApp
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.025, y: -2, boxShadow: "0 10px 25px -5px rgba(200, 90, 60, 0.15)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto rounded-pill"
              >
                <Button
                  to="/how-it-works"
                  variant="secondary"
                  className="gap-2 min-h-12 px-8 w-full shadow-depth hover:shadow-none"
                >
                  See How It Works
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Premium 3D Floating Creator Mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Soft decorative background glow pulse */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-burgundy/15 to-gold/15 blur-3xl rounded-3xl -z-10"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.7, 0.9, 0.7]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Subtle floating background shapes */}
            <motion.div
              className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gold/10 blur-md -z-10"
              animate={{
                y: [0, -10, 0],
                x: [0, 8, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-12 -left-12 w-28 h-28 rounded-full bg-burgundy/5 blur-lg -z-10"
              animate={{
                y: [0, 12, 0],
                x: [0, -10, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Parent Perspective Wrapper for staggered entrance */}
            <motion.div
              variants={cardParentVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full max-w-[380px] [perspective:1000px] z-10"
            >
              {/* Secondary floating stats card peeking from top-left */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotateZ: [2, 4, 2]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="absolute -top-6 -left-8 z-20 hidden sm:flex bg-white/95 backdrop-blur-md border border-espresso/[0.04] p-3 rounded-2xl shadow-depth items-center gap-2"
              >
                <div className="h-6 w-6 rounded-lg bg-burgundy/10 flex items-center justify-center text-burgundy">
                  <TrendingUp className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-espresso/40">Weekly growth</span>
                  <span className="font-sans text-[10px] font-bold text-espresso">+340% Rank</span>
                </div>
              </motion.div>

              {/* Third floating badge peeking from bottom-right */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotateZ: [-3, -1, -3]
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="absolute -bottom-6 -right-6 z-20 hidden sm:flex bg-white/95 backdrop-blur-md border border-espresso/[0.04] p-3 rounded-2xl shadow-depth items-center gap-2"
              >
                <div className="h-6 w-6 rounded-lg bg-gold/20 flex items-center justify-center text-gold-dark">
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-espresso/40">Creative</span>
                  <span className="font-sans text-[10px] font-bold text-espresso">Custom Style</span>
                </div>
              </motion.div>

              {/* The Main creator card with slow idle floating motion and 3D hover effects */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotateZ: [-1, 0, -1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.03,
                  y: -12,
                  rotateX: 6,
                  rotateY: -6,
                  rotateZ: 0,
                  boxShadow: "0 30px 60px -15px rgba(24,24,27,0.15), 0 10px 25px -5px rgba(131,24,67,0.08)",
                }}
                className="w-full bg-white rounded-[2.5rem] border border-espresso/[0.04] p-5 shadow-depth-lg transition-shadow duration-350 cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Image Container representing a creator */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-zinc-100">
                  <img
                    src={assetPath('/images/creator-photo-optimized.jpg')}
                    alt="Ăugust Řush"
                    decoding="async"
                    fetchPriority="high"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent z-10" />

                  {/* Overlaid Profile Badges */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-md text-[9px] font-bold text-espresso uppercase px-2.5 py-1 rounded-full shadow-sm tracking-wider">
                      Verified Host
                    </span>
                    <span className="bg-burgundy text-white text-[9px] font-bold uppercase px-2.5 py-1 rounded-full shadow-sm tracking-wider flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      Live Talent
                    </span>
                  </div>

                  {/* Overlaid Profile Description */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 text-white" style={{ transform: "translateZ(30px)" }}>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-gold-light">Managed Creator</span>
                    <h3 className="text-xl font-bold tracking-tight text-white [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)] mt-0.5 flex items-center gap-1.5">
                      Ăugust Řush
                      <span className="h-4 w-4 bg-[#ff4b72] rounded-full inline-flex items-center justify-center p-0.5 text-[8px] text-white font-bold shadow-md">✓</span>
                    </h3>
                    <p className="text-xs text-white/85 font-light mt-1.5 max-w-[260px] leading-relaxed">
                      Just Chatting host & interactive broadcaster. Reached 75M+ earned coins through consistent daily audience engagement.
                    </p>
                  </div>
                </div>

                {/* Card Meta Row (Simulated stats to look premium) */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center border-t border-espresso/[0.04] pt-4 font-sans">
                  <div>
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-espresso/40">Total Earned</span>
                    <span className="block text-sm font-bold text-espresso mt-0.5">75.51M</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-espresso/40">Followers</span>
                    <span className="block text-sm font-bold text-burgundy mt-0.5">75.88K</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-espresso/40">Rank Tier</span>
                    <span className="block text-sm font-bold text-espresso mt-0.5">1x Crown</span>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>
      </div>

      {/* 2. TRUST BADGES ROW */}
      <section className="border-y border-espresso/[0.04] bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 items-center text-center">
            <div className="flex flex-col items-center p-3 border-r border-espresso/[0.03] last:border-none">
              <Shield className="h-6 w-6 text-burgundy mb-2" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-espresso/80">18+ Age Restriction</span>
              <p className="text-[10px] text-espresso/50 mt-0.5">Verified digital safety compliance</p>
            </div>
            <div className="flex flex-col items-center p-3 md:border-r border-espresso/[0.03] last:border-none">
              <Award className="h-6 w-6 text-gold mb-2" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-espresso/80">Zero Upfront Cost</span>
              <p className="text-[10px] text-espresso/50 mt-0.5">No platform fees or start contracts</p>
            </div>
            <div className="flex flex-col items-center p-3 border-r border-espresso/[0.03] last:border-none">
              <Sparkles className="h-6 w-6 text-burgundy mb-2" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-espresso/80">Live Mentoring</span>
              <p className="text-[10px] text-espresso/50 mt-0.5">Dedicated profile manager guidance</p>
            </div>
            <div className="flex flex-col items-center p-3 last:border-none">
              <CheckCircle2 className="h-6 w-6 text-gold mb-2" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-espresso/80">Creative Style</span>
              <p className="text-[10px] text-espresso/50 mt-0.5">Flexible setup & custom branding controls</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES / MANAGEMENT SECTION */}
      <section className="section bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow">Professional Ecosystem</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-espresso mt-3">
              How We Help You Grow Successfully.
            </h2>
            <p className="text-base text-espresso/85 mt-4 leading-relaxed font-normal">
              We specialize in supporting creators to establish a <strong>professional streaming brand</strong>. Our talent managers handle the details so you can focus on building relationships and engaging your audience <strong>safely</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="premium-card card-hover-gradient-1 p-8 flex flex-col space-y-4">
              <div className="h-10 w-10 rounded-xl bg-burgundy/5 flex items-center justify-center text-burgundy">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-extrabold text-espresso">Creative Branding</h3>
              <p className="text-xs text-espresso/80 leading-relaxed font-normal">
                We help you design <strong>custom profiles, backgrounds, and themes</strong> so your stream matches your unique <strong>creative identity and style</strong>.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="premium-card card-hover-gradient-2 p-8 flex flex-col space-y-4">
              <div className="h-10 w-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-extrabold text-espresso">Personal Guidance</h3>
              <p className="text-xs text-espresso/80 leading-relaxed font-normal">
                Receive direct <strong>1-on-1 mentoring</strong> covering professional ring-light settings, audio output, camera angles, and camera-confidence habits.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="premium-card card-hover-gradient-3 p-8 flex flex-col space-y-4">
              <div className="h-10 w-10 rounded-xl bg-burgundy/5 flex items-center justify-center text-burgundy">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-extrabold text-espresso">Audience Strategy</h3>
              <p className="text-xs text-espresso/80 leading-relaxed font-normal">
                Learn to design interactive <strong>PK Battle formats</strong>, manage conversation boundaries gracefully, and establish <strong>loyal fan return patterns</strong>.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="premium-card card-hover-gradient-1 p-8 flex flex-col space-y-4">
              <div className="h-10 w-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-extrabold text-espresso">Weekly Payouts</h3>
              <p className="text-xs text-espresso/80 leading-relaxed font-normal">
                Enjoy complete transparency with detailed <strong>weekly analytics receipts</strong> and secure bank wire transfers paid <strong>on-time, every week</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ColorTransition direction="light-to-dark" variant="warm" />

      {/* 4. STATISTICS / PROOF SECTION */}
      <section className="section bg-espresso text-cream relative">
        <div className="absolute inset-0 -z-10 bg-dot-gold opacity-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gold">Verified Operations</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-cream mt-3">Credibility In Numbers</h2>
            <p className="text-sm text-cream/60 mt-3 font-light">We offer practical account mentoring that converts directly to stability.</p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center">
            <div className="flex flex-col items-center">
              <span className="font-sans text-4xl sm:text-5xl font-bold text-gold">400+</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-cream/50 mt-2">Active Creators</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-sans text-4xl sm:text-5xl font-bold text-cream">24/7</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-cream/50 mt-2">Mentoring Desk</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-sans text-4xl sm:text-5xl font-bold text-gold">Zero</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-cream/50 mt-2">Upfront Costs</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-sans text-4xl sm:text-5xl font-bold text-cream">100%</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-cream/50 mt-2">Privacy Protected</span>
            </div>
          </div>
        </div>
      </section>

      <ColorTransition direction="dark-to-light" variant="warm" />

      {/* 5. MOCK CREATOR GALLERY PREVIEWS (Asymmetric gallery) */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow">Aspirational Success</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-espresso mt-3">
              Independent Creators, Elevated Support.
            </h2>
            <p className="text-base text-espresso/85 mt-4 leading-relaxed font-normal">
              Review these verified, anonymized examples of hosts who built <strong>stable routines</strong> and <strong>secure earnings</strong> through our operational mentoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery Card 1 */}
            <div className="premium-card card-hover-gradient-2 p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 aspect-[4/5] bg-zinc-950 rounded-xl overflow-hidden relative">
                <img
                  src={assetPath('/images/creator-andrea.jpg')}
                  alt="Andrea"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-gold-light [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]">Managed Creator</span>
                  <h4 className="text-sm font-bold text-white [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)] mt-0.5">Andrea 💛</h4>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <div className="flex items-center gap-2">
                  <span className="premium-badge bg-gold/15 text-gold-dark border border-gold/10">Just Chatting Host</span>
                </div>
                <p className="text-xs text-espresso/80 leading-relaxed font-normal">
                  "IM Models helped me set up my custom channel branding and background aesthetic immediately. As a Just Chatting host, I can focus on building my stream and connecting with fans with their expert mentorship."
                </p>
                <div className="pt-2 border-t border-espresso/[0.04] grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-espresso/40 block">Earned</span>
                    <span className="text-xs font-bold text-espresso">65.7K Coins</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-espresso/40 block">Followers</span>
                    <span className="text-xs font-bold text-espresso">267 Fans</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Card 2 */}
            <div className="premium-card card-hover-gradient-3 p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 aspect-[4/5] bg-zinc-950 rounded-xl overflow-hidden relative">
                <img
                  src={assetPath('/images/creator-coco.jpg')}
                  alt="Coco Singh"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-gold-light [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]">Managed Creator</span>
                  <h4 className="text-sm font-bold text-white [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)] mt-0.5 flex items-center gap-1 flex-wrap">
                    Coco Singh
                    <span className="h-3.5 w-3.5 bg-[#ff4b72] rounded-full inline-flex items-center justify-center p-0.5 text-[6px] text-white font-bold shadow-md">✓</span>
                  </h4>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col space-y-4">
                <div className="flex items-center gap-2">
                  <span className="premium-badge bg-gold/15 text-gold-dark border border-gold/10">Verified Partner</span>
                </div>
                <p className="text-xs text-espresso/80 leading-relaxed font-normal">
                  "The dedicated 1-on-1 mentoring and weekly analytics audits made a huge difference. I learned how to structure my broadcasts and engage fans to reach 4.9M+ earned rewards."
                </p>
                <div className="pt-2 border-t border-espresso/[0.04] grid grid-cols-2 gap-2">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-espresso/40 block">Earned</span>
                    <span className="text-xs font-bold text-espresso">4.93M Coins</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-espresso/40 block">Followers</span>
                    <span className="text-xs font-bold text-espresso">14.88K Fans</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQS OR MINI-BENEFIT ROW */}
      <section className="section bg-cream border-t border-espresso/[0.04]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="eyebrow">Clear Answers</span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-espresso mt-3">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            <div className="border-b border-espresso/[0.06] pb-6">
              <h4 className="text-base sm:text-lg font-semibold text-espresso flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-burgundy shrink-0" />
                Is there any initial investment required?
              </h4>
              <p className="text-sm sm:text-base text-espresso/85 mt-2 leading-relaxed pl-8">
                Absolutely none. IM Models Agency never charges setup fees, onboarding fees, or training costs. Our agency earns on commission from platform bonus tiers once you succeed, aligning our success directly with yours.
              </p>
            </div>
            <div className="border-b border-espresso/[0.06] pb-6">
              <h4 className="text-base sm:text-lg font-semibold text-espresso flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-burgundy shrink-0" />
                What kind of platforms do we stream on?
              </h4>
              <p className="text-sm sm:text-base text-espresso/85 mt-2 leading-relaxed pl-8">
                We primarily focus on major global social streaming apps like Tango Live and other verified talent platforms that support secure, monetized broadcasts. All platform work complies with our strict privacy settings.
              </p>
            </div>
            <div className="border-b border-espresso/[0.06] pb-6">
              <h4 className="text-base sm:text-lg font-semibold text-espresso flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-burgundy shrink-0" />
                Is this adult or escort work?
              </h4>
              <p className="text-sm sm:text-base text-espresso/85 mt-2 leading-relaxed pl-8">
                No. We maintain a strictly professional, mainstream digital ecosystem. The streams are focused on entertainment, singing, makeup tutorials, conversational talent, and lifestyle hosting. We enforce rigid safety guidelines for all talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA CARD */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-espresso text-cream px-8 py-16 sm:px-12 sm:py-20 shadow-depth-lg text-center">
          <div className="absolute inset-0 -z-10 bg-dot-gold opacity-10" />
          <div className="max-w-2xl mx-auto flex flex-col items-center space-y-6">
            <span className="font-mono text-[9px] uppercase tracking-widest text-gold">Start Your Journey</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
              Ready To Establish Your Creator Brand?
            </h2>
            <p className="text-sm text-cream/70 font-light max-w-lg leading-relaxed">
              Complete a secure, private application or connect directly with our onboarding specialists on WhatsApp for a confidential consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center pt-2">
              <Button
                as="a"
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="gap-2 px-8 min-h-12 w-full sm:w-auto"
              >
                <MessageCircle className="h-4.5 w-4.5 fill-white" />
                Chat on WhatsApp
              </Button>
              <Button
                to="/apply"
                variant="secondary"
                className="border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-espresso gap-2 px-8 min-h-12 w-full sm:w-auto"
              >
                Apply as Creator
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <span className="text-[10px] text-cream/40 font-mono">
              Strictly 18+ • Creative Freedom • Live Mentorship
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

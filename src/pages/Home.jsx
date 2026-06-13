import React, { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle, Shield, Award, Sparkles, CheckCircle2, TrendingUp, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { site } from '../content/site';
import ColorTransition from '../components/ui/ColorTransition';

// Model Data for Marquee Slideshow (20 premium creators)
const modelsData = [
  {
    name: "August Rush",
    roleBadge: "Just Chatting",
    bio: "Alone still stronger. A confident live host with steady fan connection and consistent high-value audience engagement.",
    earned: "$378,050",
    followers: "76.02K",
    rank: "1x Crown",
    growth: "+340% Rank",
    style: "Solo Style",
    image: "/images/creator-august-rush.jpg"
  },
  {
    name: "Siya",
    roleBadge: "Just Chatting",
    bio: "Soft energy, real vibes only. A calm conversational host with gentle audience presence and steady fan connection.",
    earned: "$10,950",
    followers: "10.57K",
    rank: "4 Fans",
    growth: "+80% Rank",
    style: "Soft Vibes",
    image: "/images/creator-siya.jpg"
  },
  {
    name: "Shiya",
    roleBadge: "Just Chatting",
    bio: "I'm not perfect, but I'm always original. A bold live creator with distinctive energy and a loyal audience base.",
    earned: "$77,200",
    followers: "69.12K",
    rank: "7 Fans",
    growth: "+260% Rank",
    style: "Original Live",
    image: "/images/creator-shiya.jpg"
  },
  {
    name: "Evilenna",
    roleBadge: "Belly Dancer",
    bio: "Belly dancer with confident stage presence and expressive fan interaction. Built strong live engagement through consistent performance energy.",
    earned: "$70,000",
    followers: "50.74K",
    rank: "9 Fans",
    growth: "+240% Rank",
    style: "Dance Live",
    image: "/images/creator-evilenna.jpg"
  },
  {
    name: "Darbie",
    roleBadge: "Just Chatting",
    bio: "Dreaming with soft charm and personal style. A relaxed host with growing audience connection and steady live appeal.",
    earned: "$30,250",
    followers: "8.78K",
    rank: "2 Fans",
    growth: "+120% Rank",
    style: "Dream Live",
    image: "/images/creator-darbie.jpg"
  },
  {
    name: "Pia",
    roleBadge: "Just Chatting",
    bio: "Bright, floral live energy with friendly audience rhythm. Known for approachable conversations and a cheerful creator presence.",
    earned: "$12,300",
    followers: "10.33K",
    rank: "6 Fans",
    growth: "+90% Rank",
    style: "Flower Live",
    image: "/images/creator-pia.jpg"
  },
  {
    name: "Salome",
    roleBadge: "Just Chatting",
    bio: "Colombia, 19 y.o. A bright social host with playful energy, relaxed charm, and a fast-growing audience connection.",
    earned: "$20,600",
    followers: "50.65K",
    rank: "69 Fans",
    growth: "+150% Rank",
    style: "Cherry Live",
    image: "/images/creator-salome.jpg"
  },
  {
    name: "Neeti rockss",
    roleBadge: "Just Chatting",
    bio: "Mahadev. Reality is too heavy for people, so they rent illusions and call it happiness.",
    earned: "$8,500",
    followers: "2.7K",
    rank: "5 Fans",
    growth: "+65% Rank",
    style: "Reality Live",
    image: "/images/creator-neeti-rockss.jpg"
  },
  {
    name: "Mahira",
    roleBadge: "Just Chatting",
    bio: "Jai Mahakal, Jai Shree Shyam. A devotional live host with strong personal identity and steady fan presence.",
    earned: "$41,400",
    followers: "13.23K",
    rank: "2 Fans",
    growth: "+135% Rank",
    style: "Devotional Live",
    image: "/images/creator-mahira.jpg"
  },
  {
    name: "giggles",
    roleBadge: "Just Chatting",
    bio: "Chandigarh to Lucknow energy with a playful voice and bold chat presence. Tum ky age yaha!",
    earned: "$40,500",
    followers: "46.2K",
    rank: "11 Fans",
    growth: "+180% Rank",
    style: "City Live",
    image: "/images/creator-giggles.jpg"
  },
  {
    name: "Cherry",
    roleBadge: "Just Chatting",
    bio: "Lemme b ur bbygirl. A glam live creator with soft confidence and a loyal conversational audience.",
    earned: "$60,850",
    followers: "27.94K",
    rank: "Cherry Fans",
    growth: "+210% Rank",
    style: "Glam Chat",
    image: "/images/creator-cherry.jpg"
  },
  {
    name: "Arya",
    roleBadge: "Just Chatting",
    bio: "Wanna be yours. A warm India-based live host with soft glam presence and an easy audience connection.",
    earned: "$47,600",
    followers: "27.59K",
    rank: "Live Fans",
    growth: "+190% Rank",
    style: "Soft Glam",
    image: "/images/creator-arya.jpg"
  },
  {
    name: "Sukoon",
    roleBadge: "Just Chatting",
    bio: "Thanks to everyone. A 22-year-old creator with expressive live energy and a grateful community-first vibe.",
    earned: "$7,900",
    followers: "10.07K",
    rank: "Live Fans",
    growth: "+75% Rank",
    style: "Purple Glow",
    image: "/images/creator-sukoon.jpg"
  },
  {
    name: "Lovi",
    roleBadge: "Just Chatting",
    bio: "Love Ma. A stylish chat host with polished camera presence and a strong follower base.",
    earned: "$34,250",
    followers: "55.18K",
    rank: "Live Fans",
    growth: "+160% Rank",
    style: "Love Live",
    image: "/images/creator-lovi.jpg"
  },
  {
    name: "Ahana Sharma",
    roleBadge: "Just Chatting",
    bio: "A focused creator with calm profile energy, growing fan support, and a clean community presence.",
    earned: "$3,646",
    followers: "4.45K",
    rank: "1 Fans",
    growth: "+45% Rank",
    style: "Clean Live",
    image: "/images/creator-ahana-sharma.jpg"
  },
  {
    name: "SANYA",
    roleBadge: "Just Chatting",
    bio: "You can call me Puchu. A bright, expressive creator with gentle charm and early fan traction.",
    earned: "$3,525",
    followers: "1.18K",
    rank: "1 Fans",
    growth: "+40% Rank",
    style: "Soft Spark",
    image: "/images/creator-sanya.jpg"
  },
  {
    name: "Andrea",
    roleBadge: "Just Chatting",
    bio: "Invite to my Family. A warm community host with loyal fan interaction and steady high-value live engagement.",
    earned: "$64,300",
    followers: "27.72K",
    rank: "2x Crown",
    growth: "+220% Rank",
    style: "Family Live",
    image: "/images/creator-andrea.jpg"
  },
  {
    name: "Coco singh",
    roleBadge: "Just Chatting",
    bio: "Freedom is ultimate luxury. A confident creator with personal style, calm audience energy, and consistent fan connection.",
    earned: "$24,650",
    followers: "14.88K",
    rank: "2 Fans",
    growth: "+95% Rank",
    style: "Freedom Live",
    image: "/images/creator-coco.jpg"
  },
  {
    name: "Grace",
    roleBadge: "Just Chatting",
    bio: "Confident broadcaster with a magnetic on-screen presence. Built a loyal global audience through consistent daily streaming and engaging conversations.",
    earned: "$268,020",
    followers: "67.14K",
    rank: "1x Crown",
    growth: "+295% Rank",
    style: "Glam Live",
    image: "/images/creator-grace.jpg"
  },
  {
    name: "Mahiii",
    roleBadge: "Just Chatting",
    bio: "Rising star with a warm personality and natural on-camera charm. Known for genuine fan interactions and consistent audience growth.",
    earned: "$117,600",
    followers: "24.99K",
    rank: "1x Crown",
    growth: "+175% Rank",
    style: "Casual Vibe",
    image: "/images/creator-mahiii.jpg"
  }
];

// Lightweight 3D Card with interactive tilt and glare
const Model3DCard = ({ model }) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;

    const angleX = (yc - y) / 10;
    const angleY = (x - xc) / 10;

    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;

    const pctX = (x / rect.width) * 100;
    const pctY = (y / rect.height) * 100;
    card.style.setProperty('--x', `${pctX}%`);
    card.style.setProperty('--y', `${pctY}%`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.setProperty('--x', '50%');
    card.style.setProperty('--y', '50%');
  };

  return (
    <div
      className="premium-3d-card relative bg-white border border-espresso/5 rounded-2xl p-4 flex flex-col w-[280px] sm:w-[300px] shrink-0 overflow-visible transition-all duration-350 ease-smooth shadow-depth"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top-left floating growth badge */}
      <div className="absolute -top-3 -left-3 z-30 bg-white shadow-depth border border-espresso/5 rounded-pill px-3 py-1 flex items-center gap-1.5 pointer-events-none">
        <div className="h-4 w-4 bg-burgundy/10 rounded-full flex items-center justify-center text-[8px] text-burgundy font-bold">â†—</div>
        <div className="flex flex-col text-left">
          <span className="font-mono text-[6px] uppercase tracking-wider text-espresso/40 block leading-none">Weekly Growth</span>
          <span className="text-[8px] font-bold text-espresso leading-none mt-0.5">{model.growth}</span>
        </div>
      </div>

      {/* Main image container */}
      <div className="w-full aspect-[4/5] bg-zinc-950 rounded-xl overflow-hidden relative">
        <img
          src={model.image}
          alt={model.name}
          loading="lazy"
          draggable="false"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/20 to-transparent z-10" />

        {/* Top absolute pills */}
        <div className="absolute top-3 left-3 right-3 z-20 flex justify-between items-center gap-2">
          <span className="text-[7px] font-mono font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/10 rounded-pill px-2 py-0.5 shadow-sm">
            {model.roleBadge}
          </span>
          <span className="text-[7px] font-mono font-bold uppercase tracking-wider bg-burgundy text-white rounded-pill px-2 py-0.5 flex items-center gap-1 shadow-sm">
            <span className="h-1.5 w-1.5 bg-red-500 rounded-full animate-pulse inline-block" />
            Live Talent
          </span>
        </div>

        {/* Bottom absolute info */}
        <div className="absolute bottom-3 left-3 right-3 z-20 text-white text-left">
          <span className="font-mono text-[7px] uppercase tracking-widest text-gold-light [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]">Managed Creator</span>
          <h4 className="text-sm font-bold text-white [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)] mt-0.5 flex items-center gap-1">
            {model.name}
            <span className="h-3.5 w-3.5 bg-[#870056] rounded-full inline-flex items-center justify-center p-0.5 text-[6px] text-white font-bold shadow-md">âœ“</span>
          </h4>
          <p className="text-[10px] text-white/80 leading-snug mt-1 font-normal [text-shadow:_0_1px_4px_rgba(0,0,0,0.6)] line-clamp-2">
            {model.bio}
          </p>
        </div>
      </div>

      {/* 3-column stats section */}
      <div className="pt-3.5 mt-1 border-t border-espresso/[0.04] grid grid-cols-3 gap-1 text-center">
        <div>
          <span className="font-mono text-[7px] uppercase tracking-wider text-espresso block leading-none">Total Earned</span>
          <span className="text-[10px] font-extrabold text-[#870056] block mt-1">{model.earned}</span>
        </div>
        <div className="border-x border-espresso/[0.04]">
          <span className="font-mono text-[7px] uppercase tracking-wider text-espresso block leading-none">Followers</span>
          <span className="text-[10px] font-bold text-espresso block mt-1">{model.followers}</span>
        </div>
        <div>
          <span className="font-mono text-[7px] uppercase tracking-wider text-espresso block leading-none">Fans</span>
          <span className="text-[10px] font-bold text-espresso block mt-1">{model.rank}</span>
        </div>
      </div>

      {/* Bottom-right floating style badge */}
      <div className="absolute -bottom-3 -right-3 z-30 bg-white shadow-depth border border-espresso/5 rounded-pill px-3 py-1 flex items-center gap-1.5 pointer-events-none">
        <div className="h-4 w-4 bg-gold/15 rounded-full flex items-center justify-center text-[8px] text-gold font-bold">âœ¨</div>
        <div className="flex flex-col text-left">
          <span className="font-mono text-[6px] uppercase tracking-wider text-espresso/40 block leading-none">Creative</span>
          <span className="text-[8px] font-bold text-espresso leading-none mt-0.5">{model.style}</span>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const videoRef = useRef(null);
  const showcaseVideoRef = useRef(null);
  const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

  // Refs for interactive drag-and-push marquee slideshow
  const marqueeContainerRef = useRef(null);
  const marqueeTrackRef = useRef(null);
  const xRef = useRef(0);
  const speedRef = useRef(-0.8); // Initial velocity moving left
  const isDraggingRef = useRef(false);
  const isHoveringRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollXRef = useRef(0);
  const mouseXPercentRef = useRef(0);

  useEffect(() => {
    let rafId;
    const baseSpeed = -0.8; // Idle velocity moving left

    const tick = () => {
      const track = marqueeTrackRef.current;
      const container = marqueeContainerRef.current;
      if (!track || !container) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      const trackWidth = track.scrollWidth;
      const limit = trackWidth / 2;

      if (isDraggingRef.current) {
        // Drag scrolling overrides calculation
      } else if (isHoveringRef.current) {
        // Push-to-scroll steering behavior
        // mouseXPercentRef goes from -1 (left edge) to 1 (right edge)
        // Moving cursor to right half scrolls left (speed negative)
        // Moving cursor to left half scrolls right (speed positive)
        const maxPushSpeed = 6;
        const targetSpeed = -mouseXPercentRef.current * maxPushSpeed;

        // Interpolate velocity for high-end inertia feel
        speedRef.current += (targetSpeed - speedRef.current) * 0.1;
        xRef.current += speedRef.current;
      } else {
        // Return to standard idle scroll speed
        speedRef.current += (baseSpeed - speedRef.current) * 0.05;
        xRef.current += speedRef.current;
      }

      // Wrapping check for seamless marquee
      if (xRef.current <= -limit) {
        xRef.current += limit;
        if (isDraggingRef.current) {
          startScrollXRef.current += limit;
        }
      } else if (xRef.current > 0) {
        xRef.current -= limit;
        if (isDraggingRef.current) {
          startScrollXRef.current -= limit;
        }
      }

      track.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Pointer gesture handlers for drag-to-scroll (Unified Mouse/Touch)
  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startScrollXRef.current = xRef.current;

    const container = marqueeContainerRef.current;
    if (container) {
      container.classList.add('is-dragging');
      container.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    const container = marqueeContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const clientX = e.clientX;

    // Track cursor location relative to center for steering
    const mouseX = clientX - rect.left;
    const centerX = rect.width / 2;
    mouseXPercentRef.current = Math.max(-1, Math.min(1, (mouseX - centerX) / (rect.width / 2)));

    if (isDraggingRef.current) {
      const deltaX = clientX - startXRef.current;
      xRef.current = startScrollXRef.current + deltaX;
    }
  };

  const handlePointerUp = (e) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      const container = marqueeContainerRef.current;
      if (container) {
        container.classList.remove('is-dragging');
        container.releasePointerCapture(e.pointerId);
      }
    }
  };

  const handlePointerCancel = (e) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      const container = marqueeContainerRef.current;
      if (container) {
        container.classList.remove('is-dragging');
        container.releasePointerCapture(e.pointerId);
      }
    }
  };

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
    isDraggingRef.current = false;
    const container = marqueeContainerRef.current;
    if (container) {
      container.classList.remove('is-dragging');
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isMobile = window.innerWidth < 768;

    const handleVideo = (ref) => {
      if (ref.current) {
        if (mediaQuery.matches || isMobile) {
          ref.current.pause();
        } else {
          ref.current.play().catch(err => {
            console.log("Autoplay prevented or video play failed", err);
          });
        }
      }
    };

    handleVideo(videoRef);
    handleVideo(showcaseVideoRef);
  }, []);

  // Stagger variants for text/badge/CTA loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        ease: 'easeOut',
      },
    },
  };

  const cardParentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        ease: 'easeOut',
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
            preload="auto"
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
                  18+ Creators Only â€¢ 100% Safe & Professional Support
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
                  whileHover={{ scale: 1.025, y: -2, boxShadow: "0 10px 25px -5px rgba(135, 0, 86, 0.16)" }}
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
              <div
                className="absolute inset-0 bg-gradient-to-tr from-burgundy/15 to-gold/15 blur-3xl rounded-3xl -z-10"
              />

              {/* Subtle floating background shapes */}
              <div
                className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gold/10 blur-md -z-10"
              />
              <div
                className="absolute -bottom-12 -left-12 w-28 h-28 rounded-full bg-burgundy/5 blur-lg -z-10"
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
                      src={assetPath('/images/august rush.jpg')}
                      alt="August Rush"
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
                        August Rush
                        <span className="h-4 w-4 bg-[#ff4b72] rounded-full inline-flex items-center justify-center p-0.5 text-[8px] text-white font-bold shadow-md">âœ“</span>
                      </h3>
                      <p className="text-xs text-white/85 font-light mt-1.5 max-w-[260px] leading-relaxed">
                        Alone still stronger. A confident live host with steady fan connection and consistent high-value audience engagement.
                      </p>
                    </div>
                  </div>

                  {/* Card Meta Row (Simulated stats to look premium) */}
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center border-t border-espresso/[0.04] pt-4 font-sans">
                    <div>
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-espresso/40">Total Earned</span>
                      <span className="block text-sm font-bold text-espresso mt-0.5">$378,050</span>
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-espresso/40">Followers</span>
                      <span className="block text-sm font-bold text-burgundy mt-0.5">76.02K</span>
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

      {/* CREATOR GALLERY â€” Real Creator Earning Potential */}
      <section className="section relative overflow-hidden z-10">
        {/* Background Wrapper */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Background Video */}
          <video
            ref={showcaseVideoRef}
            src={assetPath('/videos/Animated%20background.webm')}
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Soft white overlay above the video */}
          <div className="absolute inset-0 bg-white/70" />

          {/* Glassmorphism Blur Overlays */}
          <div className="hero-video-top-fade" />
          <div className="hero-video-bottom-fade" />
          <div className="blur-overlay blur-overlay-top" />
          <div className="blur-overlay blur-overlay-bottom" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span variants={itemVariants} className="eyebrow inline-block">Real Creator Earning Potential</motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-extrabold tracking-tight text-espresso mt-3">
              Creators Are Turning Live Time Into Real Income.
            </motion.h2>
            <motion.p variants={itemVariants} className="text-base text-espresso/85 mt-4 leading-relaxed font-normal">
              Live streaming rewards confidence, consistency, and audience connection. With the right profile, training, and support, creators can start receiving virtual gifts and grow their monthly earning potential over time.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full overflow-visible py-4 text-espresso"
          >
            <div
              ref={marqueeContainerRef}
              className="marquee-container select-none touch-none"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerCancel}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                ref={marqueeTrackRef}
                className="marquee-track"
              >
                {modelsData.map((model, idx) => (
                  <Model3DCard key={`orig-${idx}`} model={model} />
                ))}
                {modelsData.map((model, idx) => (
                  <Model3DCard key={`dup-${idx}`} model={model} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BADGES ROW */}
      <section className="border-y border-espresso/[0.04] bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 items-center text-center"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center p-3 border-r border-espresso/[0.03] last:border-none">
              <Shield className="h-6 w-6 text-burgundy mb-2" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-espresso/80">18+ Age Restriction</span>
              <p className="text-[10px] text-espresso/50 mt-0.5">Verified digital safety compliance</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center p-3 md:border-r border-espresso/[0.03] last:border-none">
              <Award className="h-6 w-6 text-gold mb-2" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-espresso/80">Zero Upfront Cost</span>
              <p className="text-[10px] text-espresso/50 mt-0.5">No platform fees or start contracts</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center p-3 border-r border-espresso/[0.03] last:border-none">
              <Sparkles className="h-6 w-6 text-burgundy mb-2" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-espresso/80">Live Mentoring</span>
              <p className="text-[10px] text-espresso/50 mt-0.5">Dedicated profile manager guidance</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center p-3 last:border-none">
              <CheckCircle2 className="h-6 w-6 text-gold mb-2" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-espresso/80">Creative Style</span>
              <p className="text-[10px] text-espresso/50 mt-0.5">Flexible setup & custom branding controls</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. KEY FEATURES / MANAGEMENT SECTION */}
      <section className="section bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span variants={itemVariants} className="eyebrow inline-block">Professional Ecosystem</motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-extrabold tracking-tight text-espresso mt-3">
              How We Help You Grow Successfully.
            </motion.h2>
            <motion.p variants={itemVariants} className="text-base text-espresso/85 mt-4 leading-relaxed font-normal">
              We specialize in supporting creators to establish a <strong>professional streaming brand</strong>. Our talent managers handle the details so you can focus on building relationships and engaging your audience <strong>safely</strong>.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* Feature 1 */}
            <motion.div variants={itemVariants} className="premium-card card-hover-gradient-1 p-8 flex flex-col space-y-4">
              <div className="h-10 w-10 rounded-xl bg-burgundy/5 flex items-center justify-center text-burgundy">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-extrabold text-espresso">Creative Branding</h3>
              <p className="text-xs text-espresso/80 leading-relaxed font-normal">
                We help you design <strong>custom profiles, backgrounds, and themes</strong> so your stream matches your unique <strong>creative identity and style</strong>.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={itemVariants} className="premium-card card-hover-gradient-2 p-8 flex flex-col space-y-4">
              <div className="h-10 w-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-extrabold text-espresso">Personal Guidance</h3>
              <p className="text-xs text-espresso/80 leading-relaxed font-normal">
                Receive direct <strong>1-on-1 mentoring</strong> covering professional ring-light settings, audio output, camera angles, and camera-confidence habits.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={itemVariants} className="premium-card card-hover-gradient-3 p-8 flex flex-col space-y-4">
              <div className="h-10 w-10 rounded-xl bg-burgundy/5 flex items-center justify-center text-burgundy">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-extrabold text-espresso">Audience Strategy</h3>
              <p className="text-xs text-espresso/80 leading-relaxed font-normal">
                Learn to design interactive <strong>PK Battle formats</strong>, manage conversation boundaries gracefully, and establish <strong>loyal fan return patterns</strong>.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={itemVariants} className="premium-card card-hover-gradient-4 p-8 flex flex-col space-y-4">
              <div className="h-10 w-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-extrabold text-espresso">Weekly Payouts</h3>
              <p className="text-xs text-espresso/80 leading-relaxed font-normal">
                Enjoy complete transparency with detailed <strong>weekly analytics receipts</strong> and secure bank wire transfers paid <strong>on-time, every week</strong>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. STATISTICS / PROOF SECTION */}
      <section className="relative overflow-hidden bg-ivory py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            src={assetPath('/videos/Animated%20background.webm')}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70" />
          <div className="absolute inset-0 bg-dot-gold opacity-25" />
          <div className="hero-video-top-fade" />
          <div className="hero-video-bottom-fade" />
          <div className="blur-overlay blur-overlay-top" />
          <div className="blur-overlay blur-overlay-bottom" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-3xl mx-auto mb-14"
          >
            <motion.span variants={itemVariants} className="premium-badge bg-burgundy/5 text-burgundy border border-burgundy/10 inline-block">
              Verified Operations
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-bold tracking-tight text-espresso mt-4">
              Credibility In Numbers
            </motion.h2>
            <motion.p variants={itemVariants} className="text-base text-espresso/75 mt-4 font-normal leading-relaxed">
              We offer practical account mentoring, clear onboarding, and steady creator support that converts directly to stability.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 items-stretch"
          >
            <motion.div variants={itemVariants} className="stats-gradient-card p-6 flex flex-col items-center justify-center min-h-32">
              <span className="font-sans text-4xl sm:text-5xl font-bold text-espresso">400+</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-espresso/55 mt-2">Active Creators</span>
            </motion.div>
            <motion.div variants={itemVariants} className="stats-gradient-card p-6 flex flex-col items-center justify-center min-h-32">
              <span className="font-sans text-4xl sm:text-5xl font-bold text-espresso">24/7</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-espresso/55 mt-2">Mentoring Desk</span>
            </motion.div>
            <motion.div variants={itemVariants} className="stats-gradient-card p-6 flex flex-col items-center justify-center min-h-32">
              <span className="font-sans text-4xl sm:text-5xl font-bold text-espresso">Zero</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-espresso/55 mt-2">Upfront Costs</span>
            </motion.div>
            <motion.div variants={itemVariants} className="stats-gradient-card p-6 flex flex-col items-center justify-center min-h-32">
              <span className="font-sans text-4xl sm:text-5xl font-bold text-espresso">100%</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-espresso/55 mt-2">Privacy Protected</span>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* 6. FAQS OR MINI-BENEFIT ROW */}
      <section className="section bg-cream border-t border-espresso/[0.04]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-12"
          >
            <motion.span variants={itemVariants} className="eyebrow inline-block">Clear Answers</motion.span>
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-4xl font-bold tracking-tight text-espresso mt-3">Frequently Asked Questions</motion.h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="border-b border-espresso/[0.06] pb-6">
              <h4 className="text-base sm:text-lg font-semibold text-espresso flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-burgundy shrink-0" />
                Is there any initial investment required?
              </h4>
              <p className="text-sm sm:text-base text-espresso/85 mt-2 leading-relaxed pl-8">
                Absolutely none. IM Models Agency never charges setup fees, onboarding fees, or training costs. Our agency earns on commission from platform bonus tiers once you succeed, aligning our success directly with yours.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="border-b border-espresso/[0.06] pb-6">
              <h4 className="text-base sm:text-lg font-semibold text-espresso flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-burgundy shrink-0" />
                What kind of platforms do we stream on?
              </h4>
              <p className="text-sm sm:text-base text-espresso/85 mt-2 leading-relaxed pl-8">
                We primarily focus on major global social streaming apps like Tango Live and other verified talent platforms that support secure, monetized broadcasts. All platform work complies with our strict privacy settings.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="border-b border-espresso/[0.06] pb-6">
              <h4 className="text-base sm:text-lg font-semibold text-espresso flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-burgundy shrink-0" />
                Is this adult or escort work?
              </h4>
              <p className="text-sm sm:text-base text-espresso/85 mt-2 leading-relaxed pl-8">
                No. We maintain a strictly professional, mainstream digital ecosystem. The streams are focused on entertainment, singing, makeup tutorials, conversational talent, and lifestyle hosting. We enforce rigid safety guidelines for all talent.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. FINAL CTA CARD */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-espresso text-cream px-8 py-16 sm:px-12 sm:py-20 shadow-depth-lg text-center"
        >
          <div className="absolute inset-0 -z-10 bg-dot-gold opacity-10" />
          <div className="max-w-2xl mx-auto flex flex-col items-center space-y-6">
            <span className="font-mono text-[9px] uppercase tracking-widest text-gold inline-block">Your Creator Journey Starts Here</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
              Go Live With Support. Start Building Your Income.
            </h2>
            <p className="text-sm text-cream/70 font-light max-w-lg leading-relaxed">
              Message IM Models Agency to learn how creators earn through virtual gifts, live interaction, and consistent streaming on platforms like Tango and similar live apps.
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
                CHAT ON WHATSAPP
              </Button>
              <Button
                to="/apply"
                variant="secondary"
                className="border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-espresso gap-2 px-8 min-h-12 w-full sm:w-auto"
              >
                APPLY AS CREATOR
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <span className="text-[10px] text-cream/40 font-mono">
              18+ Only • Safe Creator Opportunity • No Investment • Growth Support
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

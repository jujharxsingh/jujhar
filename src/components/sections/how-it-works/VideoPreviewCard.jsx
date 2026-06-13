import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Video, Eye, Sparkles } from 'lucide-react';

const publicAsset = (path) => {
  if (!path || /^https?:\/\//i.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
};

export default function VideoPreviewCard({ src = '/videos/how-it-works/live-intro.mp4', poster = '/images/how-it-works/poster-live-intro.jpg' }) {
  const cardRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);
  const normalizedSrc = publicAsset(src);
  const normalizedPoster = publicAsset(poster);

  // Mouse tilt tracking relative to card center
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const xVal = (e.clientX - rect.left) / width - 0.5;
    const yVal = (e.clientY - rect.top) / height - 0.5;
    
    // Subtle 4 degrees rotation
    const rX = -yVal * 4;
    const rY = xVal * 4;
    
    setTilt({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  useEffect(() => {
    setVideoError(false);
  }, [normalizedSrc]);

  useEffect(() => {
    if (videoRef.current && !videoError) {
      videoRef.current.load();
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, [videoError, normalizedSrc]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      whileHover={{ y: -6, boxShadow: '0 30px 60px -15px rgba(135, 0, 86, 0.3)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="relative w-full aspect-[4/3] sm:aspect-video rounded-3xl border border-white/20 overflow-hidden bg-espresso shadow-premium-lg group cursor-pointer"
    >
      {/* Background Soft Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/55 z-10 pointer-events-none" />

      {/* Top Left Label */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10" style={{ transform: 'translateZ(20px)' }}>
        <Video className="h-3.5 w-3.5 text-gold-light" />
        <span className="text-[10px] uppercase tracking-wider font-extrabold text-white">LIVE PREVIEW</span>
      </div>

      {/* Top Right Label */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white/95" style={{ transform: 'translateZ(20px)' }}>
        <Eye className="h-3 w-3 text-gold-light" />
        <span className="text-[9px] font-mono font-bold tracking-wider uppercase">Interactive View</span>
      </div>

      {/* Main Video / Fallback Body */}
      {!videoError ? (
        <video
          ref={videoRef}
          src={normalizedSrc}
          poster={normalizedPoster}
          onError={handleVideoError}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      ) : (
        /* Fallback Graphic Placeholder */
        <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-burgundy/90 via-espresso to-gold/45 flex flex-col items-center justify-center p-6 text-center select-none z-0">
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
          
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="h-16 w-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-premium-lg backdrop-blur-md relative mb-5 z-10"
          >
            <Sparkles className="h-7 w-7 text-gold-light" />
            <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-red-600 border-2 border-espresso flex items-center justify-center text-[7px] font-bold text-white">●</span>
          </motion.div>
          
          <h4 className="text-base sm:text-lg font-extrabold text-white tracking-tight z-10">Live Broadcasting Stream</h4>
          <p className="text-[11px] text-white/70 max-w-xs mt-2 font-light leading-relaxed z-10">
            Interactive streaming view fallback. Connect via WhatsApp or upload `live-intro.mp4` to activate video.
          </p>
        </div>
      )}

      {/* Center Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <motion.div
          whileHover={{ scale: 1.15 }}
          className="h-14 w-14 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-premium-lg opacity-85 group-hover:opacity-100 group-hover:bg-gold/80 group-hover:border-gold/30 transition-all duration-350"
          style={{ transform: 'translateZ(25px)' }}
        >
          <Play className="h-5 w-5 fill-white text-white translate-x-0.5" />
        </motion.div>
      </div>

      {/* Bottom text overlays */}
      <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col text-left space-y-1" style={{ transform: 'translateZ(15px)' }}>
        <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight drop-shadow-md">
          What a Live Session Looks Like
        </h3>
        <p className="text-xs text-white/75 font-light max-w-md leading-relaxed drop-shadow-sm">
          See how viewers, chat, gifts, and creator interaction appear during a live session.
        </p>
      </div>

      {/* Subtle Scanlines */}
      <div className="absolute inset-0 opacity-[0.03] bg-scanlines pointer-events-none z-10" />
    </motion.div>
  );
}

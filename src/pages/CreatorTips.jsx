import React from 'react';
import { Sparkles, Shield, Clock, Camera, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { site } from '../content/site';

export default function CreatorTips() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.15, ease: 'easeOut' }
    }
  };
  const tips = [
    {
      icon: <Camera className="h-6 w-6 text-burgundy" />,
      tag: 'Studio Setup',
      title: 'Optimal Camera & Lighting on a Budget',
      description: 'You do not need expensive gear to start. Place your primary ring light directly behind your camera at eye-level to diffuse shadows. Set light temperature to warm-white and keep your background clean and uncluttered.',
      bullets: ['Eye-level camera placement', 'Warm-white light diffusion', 'Clean background contrast']
    },
    {
      icon: <Sparkles className="h-6 w-6 text-gold" />,
      tag: 'Broadcasting Strategy',
      title: 'How to Manage PK Battles Dynamically',
      description: 'Treat PK battles as lighthearted conversational games. Prepare 3 simple conversation topics or mini-challenges beforehand. Coordinate with your opponent to keep the chat active and avoid boring silences.',
      bullets: ['Pre-planned conversation topics', 'Fun mini-challenges', 'Interactive viewer loops']
    },
    {
      icon: <Shield className="h-6 w-6 text-burgundy" />,
      tag: 'Safety & Privacy',
      title: 'Setting Firm Personal Boundaries',
      description: 'Your private life is private. Never share your exact location, school, or last name. If a viewer asks invasive questions, redirect the topic politely or let your assigned platform moderators handle the filter.',
      bullets: ['Never share precise locations', 'Use a custom stream name', 'Active moderator filter lists']
    },
    {
      icon: <Clock className="h-6 w-6 text-gold" />,
      tag: 'Schedule Routine',
      title: 'Selecting Consistent Daily Slots',
      description: 'Consistency beats raw streaming hours. Broadcasting for 2 hours at the exact same time every day allows your international audience to build a secure daily routine around your channel schedule.',
      bullets: ['Consistent daily time blocks', 'Target global timezone slots', 'Quality over raw length']
    }
  ];

  return (
    <div className="relative overflow-hidden bg-ivory">
      {/* Background Ornament */}
      <div className="absolute inset-0 -z-10 bg-dot-gold opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-12 text-center lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.span variants={itemVariants} className="eyebrow inline-block">Creator Hub</motion.span>
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-bold tracking-tight text-espresso mt-3">
            Knowledge Base & Growth Tips
          </motion.h1>
          <motion.p variants={itemVariants} className="mx-auto mt-4 max-w-2xl text-base text-espresso/70 sm:text-lg font-light leading-relaxed">
            Unlock practical strategies on lighting setups, safety protocols, audience engagement, and timing parameters curated by our senior onboarding coaches.
          </motion.p>
        </motion.div>
      </section>

      {/* Grid of Tips */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {tips.map((t, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="premium-card p-8 bg-white flex flex-col justify-between space-y-6 masterclasses-hover-gradient"
            >
              <div className="space-y-4">
                {/* Header tag */}
                <div className="flex items-center justify-between">
                  <span className="premium-badge bg-espresso/5 text-espresso/60">{t.tag}</span>
                  <div className="h-10 w-10 rounded-xl bg-espresso/5 flex items-center justify-center">
                    {t.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-espresso">{t.title}</h3>
                <p className="text-xs sm:text-sm text-espresso/60 leading-relaxed font-light">
                  {t.description}
                </p>
              </div>

              {/* Bullets */}
              <div className="pt-4 border-t border-espresso/[0.04] grid grid-cols-1 sm:grid-cols-3 gap-2">
                {t.bullets.map((b, i) => (
                  <span key={i} className="inline-flex items-center gap-1 text-[10px] text-espresso/80 font-light">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Interactive Support Notice */}
      <section className="section bg-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="premium-card bg-gradient-ivory border-gold/20 p-8 sm:p-10 flex flex-col items-center space-y-4 masterclasses-hover-gradient"
          >
            <span className="eyebrow inline-block">Interactive Training</span>
            <h3 className="text-xl font-bold text-espresso">Need Custom Studio Advice?</h3>
            <p className="text-xs text-espresso/60 leading-relaxed font-light max-w-xl">
              As a managed creator, you do not have to guess. Our operations staff offers personalized video room checkups. We review your audio levels, help design your background theme, analyze your lighting temperature, and map out your schedule together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final Action */}
      <section className="section">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="premium-card p-8 sm:p-12 bg-white masterclasses-hover-gradient"
          >
            <span className="eyebrow inline-block">Join the Team</span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-espresso mt-3">
              Get Access to Masterclasses
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm text-espresso/60 font-light leading-relaxed">
              Become a creator with IM Models and get complete daily coaching resources, private moderator scripts, and payout verifications.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                as="a"
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="gap-2 px-8"
              >
                <MessageCircle className="h-4.5 w-4.5 fill-white" />
                Chat on WhatsApp
              </Button>
              <Button
                to="/apply"
                variant="secondary"
                className="masterclasses-secondary-button gap-2 px-8"
              >
                Apply as Creator
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Shield, MessageCircle, ArrowRight, Award, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { site } from '../content/site';

export default function Proof() {
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
  const assetPath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

  const caseStudies = [
    {
      initials: 'EV',
      role: 'Evilenna 💃 (Belly Dancer)',
      experience: 'India • 21 y.o. • 713 Followers',
      challenge: 'A skilled belly dancer and host who struggled with video resolution, audio sync, and setting up a structured daily schedule to capture international engagement.',
      strategy: 'Optimized her studio lighting, configured high-definition external cameras, set up audio interfaces, and mapped out consistent high-traffic daily time blocks.',
      result: 'Earned $1,860+ USD in net payouts and built a highly engaged fan base within 90 days.',
      anonymityNotice: 'Verified Payouts: $1,863 USD Net Payout'
    },
    {
      initials: 'MH',
      role: 'Mahiii 👑 (Verified 1x Crown)',
      experience: 'India • 24.97K Followers',
      challenge: 'Streaming consistently but unable to break past mid-tier rankings, experiencing low viewer retention and lack of interactive game loops.',
      strategy: 'Structured a tight schedule around peak slots, coached on active game loops, designed custom overlay themes, and optimized platform bonus levels.',
      result: 'Achieved 1x Crown tier with over $78,080 USD in net payouts and 24.97K dedicated followers.',
      anonymityNotice: 'Verified Payouts: $78,080 USD Net Payout'
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
          <motion.span variants={itemVariants} className="eyebrow inline-block">Proof & Performance</motion.span>
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-bold tracking-tight text-espresso mt-3">
            Verifiable Trust, Dynamic Growth.
          </motion.h1>
          <motion.p variants={itemVariants} className="mx-auto mt-4 max-w-2xl text-base text-espresso/70 sm:text-lg font-light leading-relaxed">
            We focus on supporting our creators to reach their goals. Below are real results and operational parameters that demonstrate our commitment.
          </motion.p>
        </motion.div>
      </section>

      {/* Case Studies Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="premium-card p-8 bg-white flex flex-col justify-between space-y-6 proof-hover-gradient"
            >
              <div className="flex flex-col space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-espresso/[0.04] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-burgundy/5 flex items-center justify-center font-bold text-burgundy font-sans">
                      {cs.initials}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-espresso">{cs.role}</h3>
                      <p className="text-[10px] text-espresso/40 font-mono uppercase">{cs.experience}</p>
                    </div>
                  </div>
                  <span className="premium-badge bg-gold/15 text-gold-dark border border-gold/10">Partner Verified</span>
                </div>

                {/* Challenges & Details */}
                <div className="space-y-3 font-sans text-xs">
                  <div>
                    <h4 className="font-bold text-espresso uppercase tracking-wider text-[10px]">The Challenge</h4>
                    <p className="text-espresso/60 mt-1 font-light leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-espresso uppercase tracking-wider text-[10px]">Our Custom Strategy</h4>
                    <p className="text-espresso/60 mt-1 font-light leading-relaxed">{cs.strategy}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-espresso uppercase tracking-wider text-[10px]">Operational Results</h4>
                    <p className="text-espresso font-semibold mt-1 leading-relaxed text-burgundy">{cs.result}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="pt-4 border-t border-espresso/[0.04] flex items-center gap-2 text-[10px] text-espresso/40 font-mono">
                <Sparkles className="h-3.5 w-3.5 text-gold shrink-0" />
                <span>{cs.anonymityNotice}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Verified Indicators Row */}
      <section className="section bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span variants={itemVariants} className="eyebrow inline-block">Verified Parameters</motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold tracking-tight text-espresso mt-3">
              Standard Operating Measures
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xs sm:text-sm text-espresso/60 mt-3 font-light leading-relaxed">
              We focus on premium support models to keep our workflows secure.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={itemVariants} className="premium-card proof-hover-gradient p-8 text-center bg-white flex flex-col items-center space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-burgundy/5 flex items-center justify-center text-burgundy">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-espresso">Expedited Host Verifications</h3>
              <p className="text-xs text-espresso/60 leading-relaxed font-light">
                Our certified partner status gets your streaming profile verified and prioritized inside major hosting systems without long application delays.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="premium-card proof-hover-gradient p-8 text-center bg-white flex flex-col items-center space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-espresso">Flexible Hours & Scheduling</h3>
              <p className="text-xs text-espresso/60 leading-relaxed font-light">
                We coordinate streaming schedules around your lifestyle, ensuring you can stream during peak engagement times while maintaining total personal life balance.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="premium-card proof-hover-gradient p-8 text-center bg-white flex flex-col items-center space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-burgundy/5 flex items-center justify-center text-burgundy">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-espresso">Weekly Audits & Analytics</h3>
              <p className="text-xs text-espresso/60 leading-relaxed font-light">
                Receive visual breakdown scorecards detailing stream parameters, viewer retention patterns, and key opportunities to grow bonus levels.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Realistic Earning & safety Disclaimer */}
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
          <div className="absolute inset-0 bg-white/72" />
          <div className="absolute inset-0 bg-dot-gold opacity-25" />
          <div className="hero-video-top-fade" />
          <div className="hero-video-bottom-fade" />
          <div className="blur-overlay blur-overlay-top" />
          <div className="blur-overlay blur-overlay-bottom" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-400/38 via-cyan-300/16 to-transparent blur-lg" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cyan-400/38 via-cyan-300/16 to-transparent blur-lg" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cyan-300/55" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-cyan-300/55" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="max-w-2xl mx-auto flex flex-col items-center space-y-4"
          >
            <div className="h-14 w-14 rounded-2xl bg-white/65 border border-cyan-200/70 shadow-glass flex items-center justify-center text-gold backdrop-blur-md">
              <Shield className="h-7 w-7" />
            </div>
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-espresso uppercase">Responsible Creator Mentoring</h3>
            <p className="text-xs sm:text-sm text-espresso/70 font-light leading-relaxed max-w-lg">
              Live social hosting is a professional digital career. Successful payouts depend entirely on individual consistency, schedule discipline, community engagement, and mentoring compliance. We do not guarantee fixed income numbers or make unrealistic "overnight success" claims.
            </p>
            <span className="text-[10px] text-espresso/45 font-mono mt-2">
              Strictly Compliance Certified • Certified Tango Live Agency Partner
            </span>
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
            className="premium-card p-8 sm:p-12 bg-white benefit-hover-gradient-4"
          >
            <span className="eyebrow inline-block">Apply Securely</span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-espresso mt-3">
              Build Your Unique Creator Brand
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm text-espresso/60 font-light leading-relaxed">
              We look forward to guiding you through a professional, rewarding social streaming routine. Zero investment needed, full support provided.
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
                className="gap-2 px-8"
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

import { Shield, Palette, Sparkles, TrendingUp, CheckCircle2, XCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { site } from '../content/site';

export default function Benefits() {
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

  const benefitCards = [
    {
      icon: <Palette className="h-6 w-6 text-burgundy" />,
      title: 'Creative Brand & Style Setup',
      description: 'We help you design custom layouts, premium stream overlays, and custom background sets to match your personal aesthetic and make your streams stand out visually.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-gold" />,
      title: '1-on-1 Dedicated Talent Mentoring',
      description: 'You get a personal, accessible talent manager to review your weekly streams. Get immediate feedback on lighting, camera positioning, styling, confidence, and platform compliance.'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-burgundy" />,
      title: 'Strategic PK Battle Planning',
      description: 'Learn how to plan and run PK Battles that excite viewers. We teach you structured audience engagement loops, conversational timing, and authentic game formats.'
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-gold" />,
      title: 'Platform verifications & Security',
      description: 'Skip the standard wait times. We expedite official host verification badges, account approvals, and priority support tickets through our certified platform partnerships.'
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
          <motion.span variants={itemVariants} className="eyebrow inline-block">Creator Benefits</motion.span>
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-bold tracking-tight text-espresso mt-3">
            Practical Support For Every Step
          </motion.h1>
          <motion.p variants={itemVariants} className="mx-auto mt-4 max-w-2xl text-base text-espresso/70 sm:text-lg font-light leading-relaxed">
            We believe in professional, clear, and safe support. Explore the exact advantages of launching your digital hosting career under a structured agency framework.
          </motion.p>
        </motion.div>
      </section>

      {/* Grid of Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {benefitCards.map((b, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`premium-card p-8 flex gap-6 items-start bg-white ${['benefit-hover-gradient-1', 'benefit-hover-gradient-2', 'benefit-hover-gradient-3', 'benefit-hover-gradient-4', 'benefit-hover-gradient-5'][i % 5]
                }`}
            >
              <div className="h-12 w-12 rounded-2xl bg-espresso/5 flex items-center justify-center shrink-0">
                {b.icon}
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-bold text-espresso">{b.title}</h3>
                <p className="text-xs sm:text-sm text-espresso/60 leading-relaxed font-light">
                  {b.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Persuasive Comparison Grid: Streaming Alone vs With Agency */}
      <section className="section bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span variants={itemVariants} className="eyebrow inline-block">Creator Growth Comparison</motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold tracking-tight text-espresso mt-3">
              Why Join IM Models Agency?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xs sm:text-sm text-espresso/60 mt-3 font-light leading-relaxed">
              Streaming alone can feel confusing. With agency support, you get a clearer path, better setup, bonus guidance, and support to grow faster.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-espresso/[0.04] bg-white shadow-depth"
          >
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-espresso text-cream p-5 text-center font-sans">
              <div className="text-left font-bold text-xs uppercase tracking-wider py-2 pl-4">Growth Area</div>
              <div className="font-bold text-xs uppercase tracking-wider py-2 text-white/50 hidden md:block">Streaming Alone</div>
              <div className="font-bold text-xs uppercase tracking-wider py-2 text-gold hidden md:block">With IM Models Agency</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-espresso/[0.04] font-sans">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 p-5 items-center">
                <div className="font-bold text-xs text-espresso md:pl-4 uppercase tracking-wide">Profile Setup</div>
                <div className="mt-2 md:mt-0 text-xs text-espresso/60 md:text-center flex items-center gap-2 md:justify-center">
                  <XCircle className="h-4.5 w-4.5 text-red-500 shrink-0" />
                  <span>Generic profile with no clear direction</span>
                </div>
                <div className="mt-2 md:mt-0 text-xs text-espresso font-semibold md:text-center flex items-center gap-2 md:justify-center text-burgundy">
                  <CheckCircle2 className="h-4.5 w-4.5 text-burgundy shrink-0" />
                  <span>Creator profile setup, bio guidance, live-ready presentation, and first-live support</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 p-5 items-center">
                <div className="font-bold text-xs text-espresso md:pl-4 uppercase tracking-wide">Live Confidence</div>
                <div className="mt-2 md:mt-0 text-xs text-espresso/60 md:text-center flex items-center gap-2 md:justify-center">
                  <XCircle className="h-4.5 w-4.5 text-red-500 shrink-0" />
                  <span>Unsure what to say or how to keep viewers engaged</span>
                </div>
                <div className="mt-2 md:mt-0 text-xs text-espresso font-semibold md:text-center flex items-center gap-2 md:justify-center text-burgundy">
                  <CheckCircle2 className="h-4.5 w-4.5 text-burgundy shrink-0" />
                  <span>Live training, interaction tips, content ideas, and confidence-building support</span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 p-5 items-center">
                <div className="font-bold text-xs text-espresso md:pl-4 uppercase tracking-wide">Gifting, PK & Bonus Strategy</div>
                <div className="mt-2 md:mt-0 text-xs text-espresso/60 md:text-center flex items-center gap-2 md:justify-center">
                  <XCircle className="h-4.5 w-4.5 text-red-500 shrink-0" />
                  <span>Random live sessions with no clear plan for gifts, PK battles, or bonus targets</span>
                </div>
                <div className="mt-2 md:mt-0 text-xs text-espresso font-semibold md:text-center flex items-center gap-2 md:justify-center text-burgundy">
                  <CheckCircle2 className="h-4.5 w-4.5 text-burgundy shrink-0" />
                  <span>Virtual gift guidance, PK planning, consistency support, agency bonus guidance, and performance-based growth strategy</span>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-3 p-5 items-center">
                <div className="font-bold text-xs text-espresso md:pl-4 uppercase tracking-wide">Ongoing Support</div>
                <div className="mt-2 md:mt-0 text-xs text-espresso/60 md:text-center flex items-center gap-2 md:justify-center">
                  <XCircle className="h-4.5 w-4.5 text-red-500 shrink-0" />
                  <span>Trial and error with slow progress</span>
                </div>
                <div className="mt-2 md:mt-0 text-xs text-espresso font-semibold md:text-center flex items-center gap-2 md:justify-center text-burgundy">
                  <CheckCircle2 className="h-4.5 w-4.5 text-burgundy shrink-0" />
                  <span>WhatsApp support, onboarding help, weekly review, bonus tracking guidance, and creator growth support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Wording compliance block */}
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
          <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#760080]/24 via-[#b341bd]/14 to-transparent blur-xl" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#760080]/24 via-[#b341bd]/14 to-transparent blur-xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="max-w-2xl mx-auto flex flex-col items-center space-y-4"
          >
            <div className="h-14 w-14 rounded-2xl bg-white/65 border border-white/80 shadow-glass flex items-center justify-center text-gold backdrop-blur-md">
              <Shield className="h-7 w-7" />
            </div>
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-espresso uppercase">Our Professional Code of Conduct</h3>
            <p className="text-xs sm:text-sm text-espresso/70 font-light leading-relaxed max-w-lg">
              IM Models Agency operates strictly within safe, social streaming spaces. We manage digital hosts and creative live broadcasters. We do not engage in adult webcam models, escort operations, or vulgar content creation. All onboarding requires strict 18+ verification.
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
            className="premium-card p-8 sm:p-12 bg-white premium-perks-hover-gradient"
          >
            <span className="eyebrow inline-block">Apply Confidently</span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-espresso mt-3">
              Unlock Your Premium Perks Today.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm text-espresso/60 font-light leading-relaxed">
              We look forward to reviewing your application and mapping out your custom streaming strategy. Zero setup fees, secure growth path.
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
                className="premium-perks-secondary-button gap-2 px-8"
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

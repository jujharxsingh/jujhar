import React from 'react';
import { Shield, CheckCircle2, MessageCircle, ArrowRight, Award, Clock, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import { site } from '../content/site';
import ColorTransition from '../components/ui/ColorTransition';

export default function Proof() {
  const caseStudies = [
    {
      initials: 'EV',
      role: 'Evilenna 💃 (Belly Dancer)',
      experience: 'India • 21 y.o. • 713 Followers',
      challenge: 'A skilled belly dancer and host who struggled with video resolution, audio sync, and setting up a structured daily schedule to capture international engagement.',
      strategy: 'Optimized her studio lighting, configured high-definition external cameras, set up audio interfaces, and mapped out consistent high-traffic daily time blocks.',
      result: 'Earned 465.96K rewards and built a highly engaged fan base within 90 days.',
      anonymityNotice: 'Verified Payouts: 465.96K Coins Earned'
    },
    {
      initials: 'MH',
      role: 'Mahiii 👑 (Verified 1x Crown)',
      experience: 'India • 24.97K Followers',
      challenge: 'Streaming consistently but unable to break past mid-tier rankings, experiencing low viewer retention and lack of interactive game layouts.',
      strategy: 'Structured a tight schedule around peak slots, coached on active game loops, designed custom overlay themes, and optimized platform bonus levels.',
      result: 'Achieved 1x Crown tier with over 19.52M earned rewards and 24.97K dedicated followers.',
      anonymityNotice: 'Verified Payouts: 19.52M Coins Earned'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-ivory">
      {/* Background Ornament */}
      <div className="absolute inset-0 -z-10 bg-dot-gold opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-12 text-center lg:px-8">
        <span className="eyebrow">Proof & Performance</span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-espresso mt-3">
          Verifiable Trust, Dynamic Growth.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-espresso/70 sm:text-lg font-light leading-relaxed">
          We focus on supporting our creators to reach their goals. Below are real results and operational parameters that demonstrate our commitment.
        </p>
      </section>

      {/* Case Studies Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs, i) => (
            <div 
              key={i} 
              className={`premium-card p-8 bg-white flex flex-col justify-between space-y-6 ${
                i % 3 === 0 ? 'card-hover-gradient-1' : i % 3 === 1 ? 'card-hover-gradient-2' : 'card-hover-gradient-3'
              }`}
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
            </div>
          ))}
        </div>
      </section>

      {/* Verified Indicators Row */}
      <section className="section bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Verified Parameters</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-espresso mt-3">
              Standard Operating Measures
            </h2>
            <p className="text-xs sm:text-sm text-espresso/60 mt-3 font-light leading-relaxed">
              We focus on premium support models to keep our workflows secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="premium-card card-hover-gradient-1 p-8 text-center bg-white flex flex-col items-center space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-burgundy/5 flex items-center justify-center text-burgundy">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-espresso">Expedited Host Verifications</h3>
              <p className="text-xs text-espresso/60 leading-relaxed font-light">
                Our certified partner status gets your streaming profile verified and prioritized inside major hosting systems without long application delays.
              </p>
            </div>

            <div className="premium-card card-hover-gradient-2 p-8 text-center bg-white flex flex-col items-center space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-espresso">Flexible Hours & Scheduling</h3>
              <p className="text-xs text-espresso/60 leading-relaxed font-light">
                We coordinate streaming schedules around your lifestyle, ensuring you can stream during peak engagement times while maintaining total personal life balance.
              </p>
            </div>

            <div className="premium-card card-hover-gradient-3 p-8 text-center bg-white flex flex-col items-center space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-burgundy/5 flex items-center justify-center text-burgundy">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-espresso">Weekly Audits & Analytics</h3>
              <p className="text-xs text-espresso/60 leading-relaxed font-light">
                Receive visual breakdown scorecards detailing stream parameters, viewer retention patterns, and key opportunities to grow bonus levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ColorTransition direction="light-to-dark" variant="cool" />

      {/* Realistic Earning & safety Disclaimer */}
      <section className="section bg-espresso text-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center space-y-4">
            <Shield className="h-10 w-10 text-gold" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">Responsible Creator Mentoring</h3>
            <p className="text-xs text-cream/70 font-light leading-relaxed max-w-lg">
              Live social hosting is a professional digital career. Successful payouts depend entirely on individual consistency, schedule discipline, community engagement, and mentoring compliance. We do not guarantee fixed income numbers or make unrealistic "overnight success" claims.
            </p>
            <span className="text-[10px] text-cream/40 font-mono mt-2">
              Strictly Compliance Certified • Certified Tango Live Agency Partner
            </span>
          </div>
        </div>
      </section>

      <ColorTransition direction="dark-to-light" variant="cool" />

      {/* Final Action */}
      <section className="section">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="premium-card p-8 sm:p-12 bg-white card-hover-gradient-1">
            <span className="eyebrow">Apply Securely</span>
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
          </div>
        </div>
      </section>
    </div>
  );
}

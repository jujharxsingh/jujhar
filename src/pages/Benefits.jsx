import { Shield, Palette, Sparkles, TrendingUp, CheckCircle2, XCircle, ArrowRight, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import { site } from '../content/site';
import ColorTransition from '../components/ui/ColorTransition';

export default function Benefits() {
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
        <span className="eyebrow">Creator Benefits</span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-espresso mt-3">
          Practical Support For Every Step
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-espresso/70 sm:text-lg font-light leading-relaxed">
          We believe in professional, clear, and safe support. Explore the exact advantages of launching your digital hosting career under a structured agency framework.
        </p>
      </section>

      {/* Grid of Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefitCards.map((b, i) => (
            <div 
              key={i} 
              className={`premium-card p-8 flex gap-6 items-start bg-white ${
                i % 3 === 0 ? 'card-hover-gradient-1' : i % 3 === 1 ? 'card-hover-gradient-2' : 'card-hover-gradient-3'
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
            </div>
          ))}
        </div>
      </section>

      {/* Persuasive Comparison Grid: Streaming Alone vs With Agency */}
      <section className="section bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Perspective Comparison</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-espresso mt-3">
              Why Work With An Agency?
            </h2>
            <p className="text-xs sm:text-sm text-espresso/60 mt-3 font-light leading-relaxed">
              Compare the standard independent path against our managed ecosystem.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-espresso/[0.04] bg-white shadow-depth">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-espresso text-cream p-5 text-center font-sans">
              <div className="text-left font-bold text-xs uppercase tracking-wider py-2 pl-4">Operational Area</div>
              <div className="font-bold text-xs uppercase tracking-wider py-2 text-white/50 hidden md:block">Streaming Alone</div>
              <div className="font-bold text-xs uppercase tracking-wider py-2 text-gold hidden md:block">IM Models Agency</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-espresso/[0.04] font-sans">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 p-5 items-center">
                <div className="font-bold text-xs text-espresso md:pl-4 uppercase tracking-wide">Branding & Style</div>
                <div className="mt-2 md:mt-0 text-xs text-espresso/60 md:text-center flex items-center gap-2 md:justify-center">
                  <XCircle className="h-4.5 w-4.5 text-red-500 shrink-0" />
                  <span>Basic default layouts and generic themes</span>
                </div>
                <div className="mt-2 md:mt-0 text-xs text-espresso font-semibold md:text-center flex items-center gap-2 md:justify-center text-burgundy">
                  <CheckCircle2 className="h-4.5 w-4.5 text-burgundy shrink-0" />
                  <span>Custom premium branding & styled backdrops</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 p-5 items-center">
                <div className="font-bold text-xs text-espresso md:pl-4 uppercase tracking-wide">Technical Setup</div>
                <div className="mt-2 md:mt-0 text-xs text-espresso/60 md:text-center flex items-center gap-2 md:justify-center">
                  <XCircle className="h-4.5 w-4.5 text-red-500 shrink-0" />
                  <span>Confusing settings & default designs</span>
                </div>
                <div className="mt-2 md:mt-0 text-xs text-espresso font-semibold md:text-center flex items-center gap-2 md:justify-center text-burgundy">
                  <CheckCircle2 className="h-4.5 w-4.5 text-burgundy shrink-0" />
                  <span>Custom background, lighting, & audio coaching</span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 p-5 items-center">
                <div className="font-bold text-xs text-espresso md:pl-4 uppercase tracking-wide">Interactive Strategy</div>
                <div className="mt-2 md:mt-0 text-xs text-espresso/60 md:text-center flex items-center gap-2 md:justify-center">
                  <XCircle className="h-4.5 w-4.5 text-red-500 shrink-0" />
                  <span>Trial and error, slow audience growth</span>
                </div>
                <div className="mt-2 md:mt-0 text-xs text-espresso font-semibold md:text-center flex items-center gap-2 md:justify-center text-burgundy">
                  <CheckCircle2 className="h-4.5 w-4.5 text-burgundy shrink-0" />
                  <span>PK layout plans & bonus optimization loops</span>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-3 p-5 items-center">
                <div className="font-bold text-xs text-espresso md:pl-4 uppercase tracking-wide">Support Availability</div>
                <div className="mt-2 md:mt-0 text-xs text-espresso/60 md:text-center flex items-center gap-2 md:justify-center">
                  <XCircle className="h-4.5 w-4.5 text-red-500 shrink-0" />
                  <span>Unanswered system tickets and delays</span>
                </div>
                <div className="mt-2 md:mt-0 text-xs text-espresso font-semibold md:text-center flex items-center gap-2 md:justify-center text-burgundy">
                  <CheckCircle2 className="h-4.5 w-4.5 text-burgundy shrink-0" />
                  <span>24/7 dedicated Whatsapp onboarding manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ColorTransition direction="light-to-dark" variant="vibrant" />

      {/* Core Wording compliance block */}
      <section className="section bg-espresso text-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center space-y-4">
            <Shield className="h-10 w-10 text-gold" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase">Our Professional Code of Conduct</h3>
            <p className="text-xs text-cream/70 font-light leading-relaxed max-w-lg">
              IM Models Agency operates strictly within safe, social streaming spaces. We manage digital hosts and creative live broadcasters. We do not engage in adult webcam models, escort operations, or vulgar content creation. All onboarding requires strict 18+ verification.
            </p>
          </div>
        </div>
      </section>

      <ColorTransition direction="dark-to-light" variant="vibrant" />

      {/* Final Action */}
      <section className="section">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="premium-card p-8 sm:p-12 bg-white card-hover-gradient-2">
            <span className="eyebrow">Apply Confidently</span>
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

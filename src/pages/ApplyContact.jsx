import React, { useState } from 'react';
import { Shield, MessageCircle, ArrowRight, CheckCircle2, AlertCircle, Sparkles, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { site } from '../content/site';

export default function ApplyContact() {
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

  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    socialLink: '',
    experience: 'beginner',
    is18OrOlder: false,
    agreeNDA: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    setSubmitError('');

    if (!formData.name.trim()) newErrors.name = 'First name or preferred name is required.';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp number is required.';
    if (!formData.email.trim()) newErrors.email = 'Email address is required.';
    if (!formData.is18OrOlder) newErrors.is18OrOlder = 'You must confirm you are 18+ to apply.';
    if (!formData.agreeNDA) newErrors.agreeNDA = 'Privacy Policy and Terms agreement is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      if (!site.googleSheetsWebAppUrl) {
        setSubmitError('Google Sheets is not connected yet. Add VITE_GOOGLE_SHEETS_WEB_APP_URL to your environment settings.');
        return;
      }

      setIsSubmitting(true);

      try {
        await fetch(site.googleSheetsWebAppUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
            source: window.location.href,
          }),
        });

        setIsSubmitted(true);
      } catch (error) {
        setSubmitError('Something went wrong while sending your application. Please try again or contact us on WhatsApp.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-ivory min-h-screen">
      {/* Background Ornament */}
      <div className="absolute inset-0 -z-10 bg-dot-gold opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Hero Intro */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-8 text-center lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.span variants={itemVariants} className="eyebrow inline-block">Onboarding Application</motion.span>
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-bold tracking-tight text-espresso mt-3">
            Start Your Creative Journey
          </motion.h1>
          <motion.p variants={itemVariants} className="mx-auto mt-4 max-w-2xl text-base text-espresso/70 sm:text-lg font-light leading-relaxed">
            Submit your registration details below. Our talent managers will contact you within 24 hours to schedule an onboarding consultation.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Split Layout */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Contact Info & Safe Wording parameters */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <motion.div variants={itemVariants} className="premium-card p-8 bg-white flex flex-col space-y-6 card-hover-gradient-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-gold font-bold">Creative Support</span>
              <h2 className="text-xl sm:text-2xl font-bold text-espresso leading-tight">
                Immediate Onboarding Assistance
              </h2>
              <p className="text-xs text-espresso/60 leading-relaxed font-light">
                If you prefer not to fill out the form, you can chat with our onboarding supervisors directly on WhatsApp.
              </p>

              {/* Instant WhatsApp CTA */}
              <div className="pt-2">
                <Button
                  as="a"
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="gap-2.5 px-6 py-4 w-full"
                >
                  <MessageCircle className="h-4.5 w-4.5 fill-white" />
                  Instant WhatsApp Chat
                </Button>
              </div>

              {/* Operations specifications */}
              <div className="pt-4 border-t border-espresso/[0.04] space-y-3 font-sans text-xs">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-burgundy shrink-0" />
                  <div>
                    <span className="block font-bold text-espresso">Secure Data Protection</span>
                    <span className="block text-espresso/50 text-[10px] mt-0.5">Your personal records are kept completely secure.</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  <div>
                    <span className="block font-bold text-espresso">Zero Upfront Investment</span>
                    <span className="block text-espresso/50 text-[10px] mt-0.5">No application fees, contract costs, or setup cuts.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Safety Disclaimer Card */}
            <motion.div variants={itemVariants} className="premium-card p-6 bg-espresso text-cream space-y-3">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Shield className="h-4 w-4 text-gold" />
                Talent Age Restriction Compliance
              </h3>
              <p className="text-[11px] text-cream/70 font-light leading-relaxed">
                We strictly enforce 18+ verifications. Every applying host must present a valid passport or government ID during the final consultation session. We do not support underage applicants under any circumstances.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Interactive Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            {isSubmitted ? (
              /* Success screen */
              <div className="premium-card p-10 bg-white text-center flex flex-col items-center space-y-6 animate-fade-in">
                <div className="h-16 w-16 rounded-3xl bg-burgundy/5 flex items-center justify-center text-burgundy border border-burgundy/10 shadow-depth">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-espresso">Application Received!</h3>
                  <p className="text-xs sm:text-sm text-espresso/60 leading-relaxed font-light max-w-md mx-auto">
                    Thank you for applying to IM Models Agency. A talent onboarding director will review your details and reach out on WhatsApp in the next 24 hours.
                  </p>
                </div>
                <div className="pt-4 border-t border-espresso/[0.04] w-full max-w-sm">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gold block">Onboarding Status</span>
                  <span className="text-xs text-espresso/50 mt-1 block">Your data is stored securely and is never shared with third parties.</span>
                </div>
                <div className="pt-2">
                  <Button to="/" variant="secondary" className="gap-2">
                    Return to Home
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="premium-card p-8 sm:p-10 bg-white flex flex-col space-y-5 font-sans">
                <span className="font-mono text-[9px] uppercase tracking-widest text-gold font-bold">Secure Form Fields</span>
                <h2 className="text-xl sm:text-2xl font-bold text-espresso leading-tight">Apply Confidently</h2>
                
                {/* Name */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-espresso uppercase tracking-wider">
                    First Name / Preferred Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-espresso/10 bg-ivory/30 text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                    placeholder="Enter your name or preferred stream name"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-burgundy flex items-center gap-1 mt-0.5">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="whatsapp" className="text-xs font-bold text-espresso uppercase tracking-wider">
                    WhatsApp Number (Include Country Code)
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-espresso/10 bg-ivory/30 text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                    placeholder="e.g. +1 234 567 8900"
                  />
                  {errors.whatsapp && (
                    <span className="text-[11px] text-burgundy flex items-center gap-1 mt-0.5">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.whatsapp}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-espresso uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-espresso/10 bg-ivory/30 text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                    placeholder="e.g. contact@creator.com"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-burgundy flex items-center gap-1 mt-0.5">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Optional Social Link */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="socialLink" className="text-xs font-bold text-espresso uppercase tracking-wider">
                    Social Profile or Instagram Link <span className="text-espresso/40 font-light lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="socialLink"
                    name="socialLink"
                    value={formData.socialLink}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-espresso/10 bg-ivory/30 text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                    placeholder="e.g. instagram.com/username"
                  />
                </div>

                {/* Experience Level */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="experience" className="text-xs font-bold text-espresso uppercase tracking-wider">
                    Experience Level
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-espresso/10 bg-ivory/30 text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="beginner">Beginner (No streaming experience)</option>
                    <option value="intermediate">Intermediate (Some social streams)</option>
                    <option value="professional">Professional (Frequent streaming/verified host)</option>
                  </select>
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 pt-2">
                  {/* 18+ verification */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="is18OrOlder"
                      checked={formData.is18OrOlder}
                      onChange={handleChange}
                      className="mt-1 h-4.5 w-4.5 rounded border-espresso/10 text-burgundy focus:ring-burgundy cursor-pointer"
                    />
                    <span className="text-xs text-espresso/70 leading-relaxed font-light group-hover:text-espresso">
                      I confirm that I am 18 years of age or older. <span className="text-burgundy font-semibold">(Mandatory)</span>
                    </span>
                  </label>
                  {errors.is18OrOlder && (
                    <span className="text-[11px] text-burgundy flex items-center gap-1 pl-7">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.is18OrOlder}
                    </span>
                  )}

                  {/* Privacy Policy Agreement */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="agreeNDA"
                      checked={formData.agreeNDA}
                      onChange={handleChange}
                      className="mt-1 h-4.5 w-4.5 rounded border-espresso/10 text-burgundy focus:ring-burgundy cursor-pointer"
                    />
                    <span className="text-xs text-espresso/70 leading-relaxed font-light group-hover:text-espresso">
                      I agree to the Privacy Policy & Terms. My personal records will remain 100% private. <span className="text-burgundy font-semibold">(Mandatory)</span>
                    </span>
                  </label>
                  {errors.agreeNDA && (
                    <span className="text-[11px] text-burgundy flex items-center gap-1 pl-7">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.agreeNDA}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  {submitError && (
                    <div className="mb-3 rounded-xl border border-burgundy/15 bg-burgundy/5 px-4 py-3 text-[11px] text-burgundy">
                      {submitError}
                    </div>
                  )}
                  <button
                     type="submit"
                     disabled={isSubmitting}
                     className="w-full inline-flex min-h-12 items-center justify-center rounded-pill bg-gradient-burgundy text-white shadow-depth text-xs font-bold uppercase tracking-wider transition-all duration-250 ease-smooth hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Creator Application'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <div className="text-center">
                  <span className="text-[10px] text-espresso/40 font-mono">
                    Secured by SSL encryption. Zero-investment application.
                  </span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

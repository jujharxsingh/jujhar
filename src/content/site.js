const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890').replace(/\D/g, '');
const whatsappMessage =
  import.meta.env.VITE_WHATSAPP_MESSAGE ||
  'Hello IM Models Agency, I would like to apply as a creator.';

export const site = {
  name: 'IM Models Agency',
  shortName: 'IM Models',
  description: 'Premium creator and live streaming management for 18+ creators.',
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  googleSheetsWebAppUrl: import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL || '',
  applicationPath: '/apply',
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Benefits', path: '/benefits' },
  { label: 'Proof', path: '/proof' },
  { label: 'Creator Tips', path: '/tips' },
];

export const pageIntros = {
  home: {
    eyebrow: 'Creator Management',
    title: 'Premium support for creators building safely and seriously.',
    description:
      'A calm, professional foundation for the IM Models Agency home page. The final build should lead with trust, privacy, operations, and direct WhatsApp conversion.',
  },
  howItWorks: {
    eyebrow: 'The Process',
    title: 'A clear path from application to managed growth.',
    description:
      'This page should explain onboarding, profile review, content planning, live schedule strategy, reporting, and communication expectations.',
  },
  benefits: {
    eyebrow: 'Creator Support',
    title: 'Benefits that feel practical, private, and credible.',
    description:
      'This page should focus on positioning, safety, workflow support, performance review, creator education, and professional account management.',
  },
  proof: {
    eyebrow: 'Proof And Trust',
    title: 'Credibility without inflated promises.',
    description:
      'This page should use anonymous case studies, verified process indicators, testimonials, and careful disclaimers instead of fake-looking money claims.',
  },
  creatorTips: {
    eyebrow: 'Creator Tips',
    title: 'Useful guidance for creators who want to improve.',
    description:
      'This page should become a practical content hub for streaming setup, routine, boundaries, camera confidence, audience retention, and platform-safe growth.',
  },
  applyContact: {
    eyebrow: 'Contact And Apply',
    title: 'Start with a private application or WhatsApp chat.',
    description:
      'This page should prioritize WhatsApp first, then a structured application form with consent, age confirmation, experience level, and portfolio links.',
  },
};

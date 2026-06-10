import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const revealSelectors = [
  'main section',
  'main .premium-card',
  'main .eyebrow',
  'main h1',
  'main h2',
  'main h3',
  'main p',
  'main form',
].join(',');

export default function ScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = Array.from(document.querySelectorAll(revealSelectors)).filter(
      (element) =>
        !element.closest('[data-no-scroll-reveal]') &&
        !element.hasAttribute('data-framer-motion-appear-id'),
    );

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      items.forEach((element) => element.classList.add('scroll-reveal-visible'));
      return undefined;
    }

    items.forEach((element, index) => {
      element.classList.remove('scroll-reveal-visible');
      element.classList.add('scroll-reveal');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 45}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('scroll-reveal-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12,
      },
    );

    items.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}

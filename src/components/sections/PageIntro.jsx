import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Reveal from '../motion/Reveal';
import Button from '../ui/Button';
import { site } from '../../content/site';

export default function PageIntro({ eyebrow, title, description, showActions = false }) {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-gold/15 to-transparent" />
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 text-4xl text-espresso sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-espresso/75 sm:text-lg">{description}</p>
          {showActions && (
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button as="a" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
              <Button to="/apply" variant="secondary">
                Apply Form
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Import reference components
import RefFadeIn from '../components/reference/RefFadeIn';
import Magnet from '../components/reference/Magnet';
import AnimatedText from '../components/reference/AnimatedText';
import ContactButton from '../components/reference/ContactButton';
import LiveProjectButton from '../components/reference/LiveProjectButton';

export default function StyleReference() {
  const [scrollY, setScrollY] = useState(0);
  const marqueeRef = useRef(null);
  const projectsContainerRef = useRef(null);

  // Dynamic Google font loader & document title updater
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const prevTitle = document.title;
    document.title = 'Jack -- 3D Creator';

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.head.removeChild(link);
      document.title = prevTitle;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate horizontal translation offset for Marquee based on scroll
  const getMarqueeOffset = () => {
    if (!marqueeRef.current) return 0;
    const rect = marqueeRef.current.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    return (window.scrollY - sectionTop + window.innerHeight) * 0.3;
  };

  const marqueeOffset = getMarqueeOffset();

  // Marquee Images URLs
  const marqueeImages = [
    "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
    "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
    "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
    "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
    "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
    "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
    "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
    "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
    "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
    "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
    "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
    "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
    "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
    "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
    "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
    "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
    "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
    "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
    "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
    "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
    "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
  ];

  // Tripled images for Row 1 & 2 for seamless scrolling loop
  const row1Images = [...marqueeImages.slice(0, 11), ...marqueeImages.slice(0, 11), ...marqueeImages.slice(0, 11)];
  const row2Images = [...marqueeImages.slice(11), ...marqueeImages.slice(11), ...marqueeImages.slice(11)];

  // Service Items Data
  const services = [
    {
      num: "01",
      name: "3D Modeling",
      desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
    },
    {
      num: "02",
      name: "Rendering",
      desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
    },
    {
      num: "03",
      name: "Motion Design",
      desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
    },
    {
      num: "04",
      name: "Branding",
      desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
    },
    {
      num: "05",
      name: "Web Design",
      desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
    }
  ];

  // Projects Data
  const projects = [
    {
      num: "01",
      client: "Client",
      name: "Nextlevel Studio",
      col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1Img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    },
    {
      num: "02",
      client: "Personal",
      name: "Aura Brand Identity",
      col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1Img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    },
    {
      num: "03",
      client: "Client",
      name: "Solaris Digital",
      col1Img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1Img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2Img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    }
  ];

  // Sticky stacking cards scroll tracking
  const { scrollYProgress: cardsScrollYProgress } = useScroll({
    target: projectsContainerRef,
    offset: ['start start', 'end end']
  });

  return (
    <div 
      className="select-none text-white overflow-x-clip pb-20 relative"
      style={{ backgroundColor: '#0C0C0C', fontFamily: "'Kanit', sans-serif" }}
    >
      {/* Dynamic Style Block for .hero-heading text gradient */}
      <style>{`
        .hero-heading {
          background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="h-screen flex flex-col justify-between relative overflow-hidden select-none px-6 md:px-10 py-6 md:py-8">
        
        {/* Navbar */}
        <RefFadeIn as="nav" delay={0} y={-20} className="flex justify-between items-center w-full z-20">
          <div className="text-xs sm:text-sm md:text-base font-bold tracking-widest text-[#D7E2EA]">
            JACK / 3D
          </div>
          <div className="flex gap-6 sm:gap-10 items-center justify-end text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA]">
            <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
            <a href="#services" className="hover:opacity-70 transition-opacity duration-200">Price</a>
            <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
          </div>
        </RefFadeIn>

        {/* Hero Portrait Centered Absolutely with Magnet pointer-following hover */}
        <div className="absolute top-1/2 sm:top-auto sm:bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:translate-y-0 z-10 pointer-events-none">
          <RefFadeIn delay={0.6} y={30}>
            <div className="pointer-events-auto">
              <Magnet padding={150} strength={3}>
                <img 
                  src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
                  alt="Jack Portrait" 
                  className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-auto object-cover select-none pointer-events-none"
                />
              </Magnet>
            </div>
          </RefFadeIn>
        </div>

        {/* Hero Heading (Massive text in middle) */}
        <div className="w-full flex items-center justify-center flex-grow z-0 overflow-hidden relative">
          <RefFadeIn delay={0.15} y={40} className="w-full">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m jack
            </h1>
          </RefFadeIn>
        </div>

        {/* Bottom Bar info */}
        <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 z-20">
          <RefFadeIn delay={0.35} y={20}>
            <p 
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-left"
            >
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </RefFadeIn>
          
          <RefFadeIn delay={0.5} y={20}>
            <ContactButton label="Contact Me" />
          </RefFadeIn>
        </div>

      </section>

      {/* 2. MARQUEE SECTION */}
      <section 
        ref={marqueeRef}
        className="w-full pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col space-y-3 relative z-20"
        style={{ backgroundColor: '#0C0C0C' }}
      >
        {/* Row 1 (Moves Right on scroll) */}
        <div 
          className="flex gap-3 transition-transform duration-100 ease-out"
          style={{ 
            transform: `translateX(${marqueeOffset - 200}px)`,
            willChange: 'transform'
          }}
        >
          {row1Images.map((src, i) => (
            <img 
              key={`row1-${i}`}
              src={src} 
              alt="Scroll Graphic 1" 
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 select-none shadow-premium-sm"
            />
          ))}
        </div>

        {/* Row 2 (Moves Left on scroll) */}
        <div 
          className="flex gap-3 transition-transform duration-100 ease-out"
          style={{ 
            transform: `translateX(${-(marqueeOffset - 200)}px)`,
            willChange: 'transform'
          }}
        >
          {row2Images.map((src, i) => (
            <img 
              key={`row2-${i}`}
              src={src} 
              alt="Scroll Graphic 2" 
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 select-none shadow-premium-sm"
            />
          ))}
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section 
        id="about"
        className="min-h-screen flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 relative select-none"
        style={{ backgroundColor: '#0C0C0C' }}
      >
        {/* 4 Decorative corner elements */}
        {/* Top-Left Moon */}
        <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none">
          <RefFadeIn delay={0.1} x={-80} y={0} duration={0.9}>
            <img 
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
              alt="Moon Decoration" 
              className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none pointer-events-none"
            />
          </RefFadeIn>
        </div>

        {/* Top-Right Lego */}
        <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none">
          <RefFadeIn delay={0.15} x={80} y={0} duration={0.9}>
            <img 
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
              alt="Lego Decoration" 
              className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain select-none pointer-events-none"
            />
          </RefFadeIn>
        </div>

        {/* Bottom-Left 3D Object */}
        <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none">
          <RefFadeIn delay={0.25} x={-80} y={0} duration={0.9}>
            <img 
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
              alt="Object Decoration" 
              className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain select-none pointer-events-none"
            />
          </RefFadeIn>
        </div>

        {/* Bottom-Right 3D Group */}
        <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none">
          <RefFadeIn delay={0.3} x={80} y={0} duration={0.9}>
            <img 
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
              alt="Group Decoration" 
              className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain select-none pointer-events-none"
            />
          </RefFadeIn>
        </div>

        {/* Center Text Container layout */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center z-10 gap-10 sm:gap-14 md:gap-16">
          <RefFadeIn delay={0} y={40}>
            <h2 
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            >
              About me
            </h2>
          </RefFadeIn>

          {/* Animated reveal paragraph */}
          <AnimatedText 
            text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!" 
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] text-center"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          <RefFadeIn delay={0.2} y={20} className="pt-6">
            <ContactButton label="Contact Me" />
          </RefFadeIn>
        </div>

      </section>

      {/* 4. SERVICES SECTION */}
      <section 
        id="services"
        className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="font-black uppercase text-[#0C0C0C] tracking-tight leading-none text-center mb-16 sm:mb-20 md:mb-28"
          >
            Services
          </h2>

          {/* Vertical list of service blocks */}
          <div className="w-full flex flex-col border-t border-[#0C0C0C]/15">
            {services.map((service, idx) => (
              <RefFadeIn 
                key={service.num}
                delay={idx * 0.1}
                y={30}
                className="w-full py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 flex items-start gap-8 select-none"
              >
                {/* Left side massive index */}
                <div 
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  className="font-black text-[#0C0C0C] leading-none select-none tracking-tight w-1/4 max-w-[150px] shrink-0 text-left"
                >
                  {service.num}
                </div>

                {/* Right side info text */}
                <div className="flex flex-col text-left space-y-2 flex-grow">
                  <h4 
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    className="font-semibold uppercase text-espresso tracking-tight"
                  >
                    {service.name}
                  </h4>
                  <p 
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                    className="font-light leading-relaxed text-[#0C0C0C]/65 max-w-2xl"
                  >
                    {service.desc}
                  </p>
                </div>
              </RefFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section 
        id="projects"
        className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-24 px-5 sm:px-8 md:px-10 relative z-30 shadow-premium-lg"
      >
        <div ref={projectsContainerRef} className="max-w-5xl mx-auto flex flex-col items-center space-y-12">
          
          <h2 
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase text-center tracking-tight leading-none mb-10"
          >
            Project
          </h2>

          {/* Stacking Sticky Cards Container */}
          <div className="w-full flex flex-col space-y-28 relative">
            {projects.map((project, idx) => {
              // Target scale for card stacking effect (scales down as you scroll past)
              const targetScale = 1 - (projects.length - 1 - idx) * 0.03;
              
              // Define scroll range mapping for this specific card
              const startScroll = idx / projects.length;
              const endScroll = (idx + 1) / projects.length;
              
              // Scale animation linked to overall projects section scroll
              const scale = useTransform(
                cardsScrollYProgress, 
                [startScroll, endScroll], 
                [1, targetScale]
              );

              return (
                <div 
                  key={project.num}
                  className="sticky top-24 md:top-32 w-full h-[85vh] flex justify-center"
                >
                  <motion.div
                    style={{
                      scale,
                      top: `${idx * 28}px`,
                    }}
                    className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-premium-lg overflow-hidden select-none"
                  >
                    
                    {/* Top Row: Info panel & live button */}
                    <div className="flex flex-wrap justify-between items-center w-full border-b border-[#D7E2EA]/10 pb-4 shrink-0 gap-3">
                      <div className="flex items-center gap-4 text-left">
                        {/* Huge Index */}
                        <span 
                          style={{ fontSize: 'clamp(2rem, 6vw, 75px)' }}
                          className="font-black text-[#D7E2EA] leading-none"
                        >
                          {project.num}
                        </span>
                        
                        <div className="flex flex-col text-left">
                          <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-gold-light">
                            {project.client}
                          </span>
                          <h4 
                            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.8rem)' }}
                            className="font-extrabold uppercase text-[#D7E2EA] tracking-tight mt-0.5 leading-none"
                          >
                            {project.name}
                          </h4>
                        </div>
                      </div>

                      {/* Ghost live button */}
                      <LiveProjectButton label="Live Project" />
                    </div>

                    {/* Bottom Row: Two-Column Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-10 gap-4 w-full flex-grow pt-4 overflow-hidden">
                      {/* Left stack (40% width on md) */}
                      <div className="md:col-span-4 flex flex-col gap-4 justify-between h-full overflow-hidden">
                        <img 
                          src={project.col1Img1} 
                          alt="Layout item left top" 
                          className="w-full h-[120px] sm:h-[160px] md:h-[180px] object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-[#D7E2EA]/10 shrink-0 select-none pointer-events-none"
                        />
                        <img 
                          src={project.col1Img2} 
                          alt="Layout item left bottom" 
                          className="w-full flex-grow object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-[#D7E2EA]/10 select-none pointer-events-none min-h-[140px]"
                        />
                      </div>

                      {/* Right large element (60% width on md) */}
                      <div className="md:col-span-6 h-full overflow-hidden flex">
                        <img 
                          src={project.col2Img} 
                          alt="Layout item right main" 
                          className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-[#D7E2EA]/10 select-none pointer-events-none"
                        />
                      </div>
                    </div>

                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}

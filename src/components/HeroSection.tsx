import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import PretzelLogo from './PretzelLogo';
import pretzelHero from '@/assets/pretzel-hero.png';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Lightweight parallax handler for background layers
  useEffect(() => {
    if (!heroRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const node = heroRef.current;
    const handleMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const l1 = node.querySelector('.layer-1') as HTMLElement | null;
      const l2 = node.querySelector('.layer-2') as HTMLElement | null;
      if (l1) l1.style.transform = `translate3d(${x * 12}px, ${y * 8}px, 0)`;
      if (l2) l2.style.transform = `translate3d(${x * 6}px, ${y * 4}px, 0)`;
    };

    node.addEventListener('mousemove', handleMove);
    return () => node.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated pretzel background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="parallax-layer layer-1" style={{ backgroundImage: `url(${pretzelHero})` }} />
        <div className="parallax-layer layer-2" style={{ backgroundImage: `url(${pretzelHero})`, backgroundSize: '120px' }} />
      </div>

      {/* Main hero content */}
      <div ref={heroRef} className={`glass-strong hero-card rounded-3xl p-12 md:p-16 max-w-4xl mx-4 text-center relative z-10 transition-all duration-1000 ${
        isVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}>
        <div className="hero-stripes" aria-hidden="true" />
        {/* Logo */}
        <div className={`mb-8 flex justify-center transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-10'
        }`}>
          <PretzelLogo size="lg" logoSrc="/favicon.png" />
        </div>

        {/* Main headline */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
        }`}>
          <span className="animate-gradient-x bg-clip-text text-transparent">Welcome to Pretzel &amp; Co.</span>
          <br />
          <span className="block text-foreground text-2xl md:text-3xl lg:text-4xl font-semibold mt-2">— Pretzels Perfected.</span>
        </h1>

        {/* Subheadline */}
        <p className={`text-lg md:text-xl text-muted-foreground mb-8 font-medium transition-all duration-1000 delay-700 ${
          isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-10'
        }`}>
          Soft. Salty. Delightful.
        </p>

        {/* CTA buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <Button asChild>
            <a href="#order" className="cta-primary inline-block px-8 py-4 rounded-full text-lg font-semibold">Order Now</a>
          </Button>
          <Button variant="glass" size="lg" className="text-lg px-8 py-4 h-auto">
            See Our Menu
          </Button>
          <Button variant="ghost" size="lg" className="text-lg px-6 py-3 h-auto">
            <a href="#map" aria-label="Open full map" onClick={(e) => { e.preventDefault(); window.open('https://www.google.com/maps?q=No.277,+Stanley+Thilakaratne+Road,+Nugegoda+10250', '_blank'); }}>View on Map</a>
          </Button>
        </div>

        {/* Floating pretzel decoration removed as requested */}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-neon"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
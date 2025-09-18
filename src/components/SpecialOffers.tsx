import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const offers = [
  {
    id: 1,
    title: "Tea Time",
    description: "Buy any pretzel, get tea 50% off",
    time: "2PM - 5PM Daily",
    accent: "primary"
  },
  {
    id: 2,
    title: "Sweet Bundle",
    description: "3 sweet pretzels for Rs 1499/=",
    time: "Weekend Special",
    accent: "secondary"
  },
  {
    id: 3,
    title: "Student Treats",
    description: "15% off with valid student ID",
    time: "All Day Every Day", 
    accent: "primary"
  }
];

const SpecialOffers: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const swipeRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number | null>(null);
  const deltaX = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrentOffer((prev) => (prev + 1) % offers.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  // Swipe handlers (touch + mouse)
  useEffect(() => {
    const el = swipeRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      startX.current = e.touches[0].clientX;
      deltaX.current = 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (startX.current === null) return;
      deltaX.current = e.touches[0].clientX - startX.current;
    };

    const onTouchEnd = () => {
      if (Math.abs(deltaX.current) > 50) {
        if (deltaX.current < 0) setCurrentOffer((prev) => (prev + 1) % offers.length);
        else setCurrentOffer((prev) => (prev - 1 + offers.length) % offers.length);
      }
      startX.current = null;
      deltaX.current = 0;
    };

    // mouse drag
    let isDown = false;
    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX.current = e.clientX;
      deltaX.current = 0;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown || startX.current === null) return;
      deltaX.current = e.clientX - startX.current;
    };
    const onMouseUp = () => {
      if (!isDown) return;
      isDown = false;
      if (Math.abs(deltaX.current) > 50) {
        if (deltaX.current < 0) setCurrentOffer((prev) => (prev + 1) % offers.length);
        else setCurrentOffer((prev) => (prev - 1 + offers.length) % offers.length);
      }
      startX.current = null;
      deltaX.current = 0;
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: true });
    el.addEventListener('touchend', onTouchEnd);

    el.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);

      el.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isInView ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Special Offers
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Sweet deals you don't want to miss!
          </p>
        </div>

        {/* Main featured offer */}
        <div ref={swipeRef} className={`glass-strong rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden transition-all duration-1000 delay-300 ${
          isInView ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          {/* Animated border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-20 animate-pulse-neon rounded-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="text-6xl md:text-8xl font-bold mb-4">
              <span className={`bg-gradient-to-r ${
                offers[currentOffer].accent === 'primary' ? 'from-primary to-primary' :
                offers[currentOffer].accent === 'secondary' ? 'from-secondary to-secondary' :
                'from-primary to-secondary'
              } bg-clip-text text-transparent transition-all duration-500`}>
                {offers[currentOffer].title}
              </span>
            </div>
            
            <p className="text-2xl md:text-3xl text-foreground mb-4 font-semibold">
              {offers[currentOffer].description}
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              {offers[currentOffer].time}
            </p>
            
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
              Claim Offer
            </Button>
          </div>

          {/* Offer indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentOffer(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentOffer 
                    ? 'bg-primary scale-125 neon-glow' 
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick offers grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className={`glass rounded-xl p-6 text-center group hover:scale-105 transition-all duration-500 cursor-pointer ${
                isInView ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              onClick={() => setCurrentOffer(index)}
            >
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {offer.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {offer.description}
              </p>
              <p className="text-xs text-muted-foreground">
                {offer.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
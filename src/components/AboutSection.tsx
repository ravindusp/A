import React, { useState, useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isInView ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                About Pretzel & Co.
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Since 2000, Aneesha has been on a mission to bring you the perfect pretzel experience. 
                Every pretzel is handcrafted with traditional techniques and the finest ingredients, 
                baked fresh throughout the day.
              </p>
              <p>
                Our baker combines time-honored Aboriginal methods with modern flavors, creating 
                pretzels that aren't just snacks—they're little moments of joy. From our classic 
                salted twists to innovative sweet varieties, each bite tells a story.
              </p>
              <p>
                Welcome to the coziest corner of comfort food. Welcome to Pretzel & Co.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">300K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Unique Flavors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Glass panel with decorative elements */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isInView ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-10'
          }`}>
            <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-primary via-accent to-secondary"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center space-y-6">
                <div className="text-6xl animate-float">🥨</div>
                <h3 className="text-2xl font-bold text-foreground">
                  Artisanal Quality
                </h3>
                <p className="text-muted-foreground">
                  Every pretzel is hand-twisted and baked to golden perfection, 
                  delivering authentic taste and texture in every bite.
                </p>
                
                {/* Feature icons */}
                <div className="flex justify-center space-x-8 pt-6">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🌾</div>
                    <div className="text-xs text-muted-foreground">Fresh Flour</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🧂</div>
                    <div className="text-xs text-muted-foreground">Sea Salt</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">👩‍🍳</div>
                    <div className="text-xs text-muted-foreground">Expert Bakers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
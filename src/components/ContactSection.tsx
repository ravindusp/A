import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
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
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isInView ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Find Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Visit us today for the ultimate pretzel experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isInView ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="glass-strong rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">
                      <a href="https://www.google.com/search?client=firefox-b-d&q=machan+nawala" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        No.277, Stanley Thilakaratne Road, Nugegoda 10250
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">(+94) 76 577 4837</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:Ravindusp@gmail.com" className="underline hover:text-foreground">Ravindusp@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Mon - Thu: 7:00 AM - 7:00 PM</p>
                      <p>Fri - Sat: 7:00 AM - 8:00 PM</p>
                      <p>Sunday: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <Button variant="hero" className="w-full" asChild>
                  <a href="https://www.google.com/search?client=firefox-b-d&q=machan+nawala" target="_blank" rel="noopener noreferrer">Get Directions</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className={`transition-all duration-1000 delay-500 ${
            isInView ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-10'
          }`}>
            <div className="glass-strong rounded-3xl p-8 h-full min-h-[500px] relative overflow-hidden">
              {/* Map placeholder content */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10"></div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <div className="text-6xl mb-6 animate-float">📍</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  We're Located in the Heart of the Bakery District
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md">
                  Easy to find and even easier to fall in love with. 
                  Street parking available, perfect for a quick pretzel run.
                </p>
                
                {/* Embedded Google Map */}
                <div className="w-full h-48 sm:h-64 md:h-80 lg:h-full glass rounded-xl overflow-hidden border-2 border-white/10">
                  <iframe
                    title="Pretzel & Co — Location"
                    src="https://www.google.com/maps?q=No.277,+Stanley+Thilakaratne+Road,+Nugegoda+10250&output=embed"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 w-full">
                  <Button variant="glass" size="sm">
                    🚗 Parking Info
                  </Button>
                  <Button variant="glass" size="sm">
                    🚇 Transit Info
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isInView ? 'animate-fade-in opacity-100' : 'opacity-0'
        }`}>
          <div className="glass-strong rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Taste the Perfect Pretzel?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of happy customers who've made us their favorite pretzel destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Order for Pickup
              </Button>
              <Button variant="glass" size="lg">
                Visit Our Bakery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
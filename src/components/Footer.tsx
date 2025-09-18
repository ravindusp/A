import React from 'react';
import PretzelLogo from './PretzelLogo';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="glass-strong border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-2">
            <PretzelLogo size="md" className="mb-6" logoSrc="/favicon.png" />
            <p className="text-muted-foreground mb-6 max-w-md">
              Artisanal pretzels baked with love and served with joy. 
              Experience the cozy charm of traditional baking at Pretzel & Co.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:neon-glow transition-all">
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a href="https://www.instagram.com/ravindusp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:neon-glow transition-all">
                <Instagram className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:neon-glow transition-all">
                <Twitter className="w-5 h-5 text-secondary" />
              </a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:neon-glow transition-all">
                <Youtube className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#offers" className="text-muted-foreground hover:text-primary transition-colors">Special Offers</a></li>
              <li><a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="https://www.google.com/search?client=firefox-b-d&q=machan+nawala" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  No.277, Stanley Thilakaratne Road, Nugegoda 10250
                </a>
              </li>
              <li>(+94) 76 577 4837</li>
              <li>
                <a href="mailto:Ravindusp@gmail.com" className="underline hover:text-foreground">Ravindusp@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Pretzel & Co. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
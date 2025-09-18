import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const menuItems = [
  {
    id: 1,
    name: "Classic Soft Pretzel",
    description: "Traditional twisted pretzel with coarse sea salt, served warm",
  price: "Rs. 599/=",
    image: "🥨"
  },
  {
    id: 2,
    name: "Cinnamon Sugar Twist",
    description: "Sweet pretzel dusted with cinnamon sugar and vanilla glaze",
    price: "Rs. 649/=",
    image: "🍯"
  },
  {
    id: 3,
    name: "Cheese-Stuffed Delight",
    description: "Soft pretzel stuffed with creamy cheddar and herbs",
    price: "Rs. 829/=",
    image: "🧀"
  },
  {
    id: 4,
    name: "Everything Bagel Style",
    description: "Topped with sesame seeds, poppy seeds, garlic, and onion",
    price: "Rs. 649/=",
    image: "🌰"
  },
  {
    id: 5,
    name: "Chocolate Chip Sweet",
    description: "Sweet dough pretzel with mini chocolate chips and powdered sugar",
    price: "Rs. 849/=",
    image: "🍫"
  },
  {
    id: 6,
    name: "Pretzel Bites Bucket",
    description: "12 bite-sized pretzels with honey mustard and cheese sauce",
    price: "Rs. 999/=",
    image: "🪣"
  }
];

const MenuPreview: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      menuItems.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index]);
        }, index * 200);
      });
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isInView ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Featured Pretzels
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with traditional techniques and a touch of modern sweetness
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className={`glass rounded-2xl p-6 group hover:scale-105 transition-all duration-500 ${
                visibleItems.includes(index) 
                  ? 'animate-slide-in-up opacity-100' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Item image/emoji */}
              <div className="text-6xl mb-4 text-center group-hover:animate-bounce">
                {item.image}
              </div>

              {/* Item details */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#db2777]">
                    {item.price}
                  </span>
                  <Button 
                    variant="neon" 
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#db2777] border border-[#db2777] hover:bg-[#db2777] hover:text-white hover:border-transparent"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View full menu button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
          isInView ? 'animate-fade-in opacity-100' : 'opacity-0'
        }`}>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
import React, { useState, useEffect, useRef } from 'react';

const reviews = [
  {
    id: 1,
    name: "Emma Thompson",
    rating: 5,
    comment: "The cinnamon sugar pretzel is absolutely divine! Soft, warm, and perfectly sweet. This place is my new happy spot.",
    avatar: "👩‍🦰"
  },
  {
    id: 2,
    name: "Lucas Martinez",
    rating: 5,
    comment: "Best pretzel shop in town! The cheese-stuffed pretzel is incredible and the atmosphere is so cozy and welcoming.",
    avatar: "👨‍💼"
  },
  {
    id: 3,
    name: "Sophie Chen",
    rating: 5,
    comment: "I'm obsessed with the chocolate chip pretzel! Even my kids who are picky eaters love coming here for treats.",
    avatar: "👩‍🎨"
  },
  {
    id: 4,
    name: "Noah Williams",
    rating: 5,
    comment: "Five stars! The traditional salted pretzel reminds me of my trips to Germany. Authentic and delicious!",
    avatar: "👨‍🔧"
  },
  {
    id: 5,
    name: "Zoe Park",
    rating: 5,
    comment: "The pretzel bites bucket is perfect for sharing! Great quality and the honey mustard dip is heavenly.",
    avatar: "👩‍💻"
  },
  {
    id: 6,
    name: "Ethan Davis",
    rating: 5,
    comment: "Everything bagel pretzel is my go-to! The staff is super friendly and the pretzels are always fresh and warm.",
    avatar: "👨‍🎓"
  }
];

const ReviewsSection: React.FC = () => {
  const [visibleReviews, setVisibleReviews] = useState<number[]>([]);
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
      reviews.forEach((_, index) => {
        setTimeout(() => {
          setVisibleReviews(prev => [...prev, index]);
        }, index * 150);
      });
    }
  }, [isInView]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-secondary' : 'text-muted'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isInView ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              What Our Customers Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it
          </p>
          
          {/* Overall rating */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground">based on 800+ reviews</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`glass rounded-2xl p-6 transition-all duration-700 hover:scale-105 hover:neon-glow ${
                visibleReviews.includes(index) 
                  ? 'animate-slide-in-up opacity-100' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Review header */}
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{review.avatar}</div>
                <div>
                  <h3 className="font-semibold text-foreground">{review.name}</h3>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>

              {/* Review content */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{review.comment}"
              </p>

              {/* Decorative quote mark */}
              <div className="text-4xl text-primary/20 mt-4 text-right">"</div>
            </div>
          ))}
        </div>

        {/* Review summary stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-1000 ${
          isInView ? 'animate-fade-in opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">800+</div>
            <div className="text-sm text-muted-foreground">Total Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">97%</div>
            <div className="text-sm text-muted-foreground">5-Star Ratings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3.5min</div>
            <div className="text-sm text-muted-foreground">Avg Wait Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">92%</div>
            <div className="text-sm text-muted-foreground">Return Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
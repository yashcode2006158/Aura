import React from 'react';
import { Star } from 'lucide-react';

const reviewsData = [
  { name: "Sarah Jenkins", role: "CMO", company: "Aura Fintech", quote: "The team completely transformed our brand identity. The new platform is not only beautiful but has increased our conversion rate by 40%." },
  { name: "David Chen", role: "Founder", company: "Orbit Ventures", quote: "Incredible attention to detail and a seamless process from start to finish. They truly understand what modern tech brands need." },
  { name: "Emily Ross", role: "VP Marketing", company: "Nova Wellness", quote: "Aesthetically unmatched. The dynamic animations and clean layout provided the premium feel we were desperately looking for." },
  { name: "Michael Chang", role: "CEO", company: "Synergy AI", quote: "Working with them was a game-changer. They didn't just build a website; they built a digital experience that wows our clients." },
  { name: "Jessica Alba", role: "Director", company: "Lumina", quote: "The best branding agency we've ever partnered with. Their strategic approach and design excellence speak for themselves." },
];

const Reviews = () => {
  const allReviews = [...reviewsData, ...reviewsData]; // Duplicate for infinite scroll

  return (
    <section id="reviews" className="py-32 bg-bg-alt border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-serif mb-4">Client Testimonials</h2>
        <p className="text-text-muted text-lg">Don't just take our word for it. Hear from the brands we've elevated.</p>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex space-x-6 w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] px-6">
          {allReviews.map((review, idx) => (
            <div 
              key={idx} 
              className="w-[400px] flex-shrink-0 bg-white p-8 rounded-2xl border border-border shadow-sm"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-8 leading-relaxed italic text-text/90">"{review.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-bg-alt flex items-center justify-center font-serif text-lg font-medium text-accent">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-text-muted">{review.role}, {review.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

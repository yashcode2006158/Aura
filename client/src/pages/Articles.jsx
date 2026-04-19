import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const allArticles = [
  {
    title: "The Evolution of Minimalist Web Design in 2024",
    excerpt: "Explore how minimalism is shifting from flat interfaces to deep, texturally rich experiences that drive higher engagement.",
    category: "Design Trends",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROC9nfRat6Q9YVAvU5ZNndVZi1dFo-i69iAw&s"
  },
  {
    title: "Why Your Brand Needs a Bespoke Motion System",
    excerpt: "Static websites are dying. Discover how micro-interactions and scroll-linked animations can increase your conversion rate.",
    category: "Development",
    date: "Sep 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Building Trust Through Authentic Content Strategy",
    excerpt: "Stop using corporate jargon. We break down the strategies top brands use to communicate authentically with their audience.",
    category: "Marketing",
    date: "Sep 15, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Headless CMS vs Traditional CMS: Which is Right for You?",
    excerpt: "A deep dive into content management systems and how decoupling your backend can future-proof your digital presence.",
    category: "Engineering",
    date: "Aug 22, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "The Psychology of Color in Fintech Branding",
    excerpt: "Why is every fintech blue or green? We explore the psychological impact of color palettes and how to break the mold.",
    category: "Brand Identity",
    date: "Aug 05, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Maximizing ROI with Programmatic SEO",
    excerpt: "How generating thousands of highly targeted pages programmatically can 10x your organic search traffic.",
    category: "Marketing",
    date: "Jul 19, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

const Articles = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 bg-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Our Insights</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Deep dives, industry trends, and strategic perspectives from our team of designers, engineers, and marketers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allArticles.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
              onClick={() => navigate('/articles/1')}
              className="group cursor-pointer flex flex-col bg-bg-alt p-4 rounded-3xl border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-accent">
                  {post.category}
                </div>
              </div>
              
              <div className="px-2 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-text-muted mb-3 font-medium">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border"></span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-serif mb-3 group-hover:text-text-muted transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed line-clamp-2 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-accent font-medium mt-auto pb-2 group/btn">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Articles;

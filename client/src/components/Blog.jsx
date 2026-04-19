import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const blogData = [
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
  }
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-32 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-serif mb-4">Insights & Perspectives</h2>
            <p className="text-text-muted text-lg max-w-xl">Our latest thoughts on design, technology, and building enduring brands.</p>
          </div>
          <button onClick={() => navigate('/articles')} className="px-6 py-3 border border-border rounded-full hover:bg-bg-alt transition-colors whitespace-nowrap">
            Read All Articles
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group cursor-pointer flex flex-col"
              onClick={() => navigate('/articles/1')}
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
              
              <div className="flex items-center text-accent font-medium mt-auto group/btn">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

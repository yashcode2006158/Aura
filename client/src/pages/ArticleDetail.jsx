import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const articles = {
  // We can use a single dummy layout for all articles for now.
  default: {
    title: "The Evolution of Minimalist Web Design in 2024",
    category: "Design Trends",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    author: "Elena Rodriguez",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROC9nfRat6Q9YVAvU5ZNndVZi1dFo-i69iAw&s",
    content: `
      <p class="text-xl leading-relaxed text-text-muted mb-8">
        Minimalism in web design is no longer just about white space and sans-serif fonts. In 2024, it has evolved into a sophisticated discipline focused on reducing cognitive load while maximizing emotional impact. Let's explore how modern brands are achieving this balance.
      </p>

      <h2 class="text-3xl font-serif mt-12 mb-6">Beyond the Flat Design Era</h2>
      <p class="mb-6 leading-relaxed">
        For years, flat design dominated the web. It was clean, efficient, and easy to build. However, as digital experiences became our primary mode of interaction with brands, users began craving depth and tactility.
      </p>
      <p class="mb-8 leading-relaxed">
        Today's minimalist websites incorporate subtle textures, soft gradients, and precise micro-interactions. They aren't devoid of personality; instead, they use restraint to amplify the elements that truly matter.
      </p>

      <blockquote class="border-l-4 border-accent pl-6 py-2 my-10 italic text-2xl font-serif text-text-muted">
        "Good design is as little design as possible. But 'little' doesn't mean boring. It means deliberate."
      </blockquote>

      <h2 class="text-3xl font-serif mt-12 mb-6">The Role of Motion in Minimalism</h2>
      <p class="mb-6 leading-relaxed">
        Motion is the new color. When you strip away heavy graphics and complex layouts, the way elements enter, exit, and react to user input becomes the primary conveyor of brand personality.
      </p>
      
      <ul class="list-disc list-inside space-y-3 mb-10 text-text-muted ml-4">
        <li><strong>Staggered Entrances:</strong> Guide the user's eye naturally down the page.</li>
        <li><strong>Scroll-Linked Animations:</strong> Create a sense of physical space and depth.</li>
        <li><strong>Hover States:</strong> Provide immediate, satisfying feedback without cluttering the UI.</li>
      </ul>

      <h2 class="text-3xl font-serif mt-12 mb-6">Conclusion</h2>
      <p class="mb-6 leading-relaxed">
        As we move forward, the most successful digital platforms will be those that master the art of deliberate reduction. It's not about removing content, but about removing friction.
      </p>
    `
  }
};

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles[id] || articles.default;

  return (
    <div className="pt-24 pb-32 bg-bg min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/articles')}
          className="flex items-center space-x-2 text-text-muted hover:text-accent transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Insights</span>
        </button>

        {/* Article Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-xs font-semibold uppercase tracking-wider text-accent mb-8">
            {article.category}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif mb-8 text-balance leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted font-medium border-y border-border py-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </motion.header>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-lg"
        >
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Body */}
        <motion.article 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-p:text-text-muted prose-a:text-accent hover:prose-a:text-accent-light max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Share / CTA Footer */}
        <div className="mt-24 pt-8 border-t border-border flex items-center justify-between">
          <span className="font-serif text-xl">Enjoyed this article?</span>
          <button 
            onClick={() => navigate('/articles')}
            className="px-6 py-3 bg-text text-white dark:bg-white dark:text-text rounded-full text-sm font-medium hover:bg-accent dark:hover:bg-accent transition-colors"
          >
            Read More Articles
          </button>
        </div>

      </div>
    </div>
  );
};

export default ArticleDetail;

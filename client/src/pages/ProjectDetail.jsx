import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Target } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const projects = {
  1: {
    title: "Aura Fintech Rebrand",
    client: "Aura Fintech",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    overview: "Aura Fintech needed a visual identity that balanced security with modern innovation. We developed a comprehensive brand system that scaled across their mobile and web platforms.",
    objectives: [
      "Establish trust through a professional yet modern color palette.",
      "Create a scalable icon system for complex financial data.",
      "Improve user onboarding conversion by 40%."
    ],
    stats: [
      { label: "Onboarding Completion", value: "92", suffix: "%", icon: <TrendingUp className="w-5 h-5 text-accent" /> },
      { label: "Active Users", value: "250", suffix: "K", icon: <Users className="w-5 h-5 text-accent" /> },
      { label: "Transaction Speed", value: "0.4", suffix: "s", icon: <Target className="w-5 h-5 text-accent" /> }
    ]
  },
  2: {
    title: "Nova Wellness App",
    client: "Nova Wellness",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1540206276207-3af25c08abc4?auto=format&fit=crop&q=80&w=1600",
    overview: "Nova Wellness wanted to revolutionize the way people track their holistic health. We built a high-performance web application focused on clarity and ease of use.",
    objectives: [
      "Develop a calming, minimalist UI for health tracking.",
      "Integrate complex health data into simple, actionable insights.",
      "Ensure cross-device synchronization for mobile and desktop."
    ],
    stats: [
      { label: "Daily Active Engagement", value: "65", suffix: "%", icon: <TrendingUp className="w-5 h-5 text-accent" /> },
      { label: "User Satisfaction Score", value: "4.9", suffix: "/5", icon: <Users className="w-5 h-5 text-accent" /> },
      { label: "Data Processing Time", value: "95", suffix: "ms", icon: <Target className="w-5 h-5 text-accent" /> }
    ]
  },
  3: {
    title: "Orbit Ventures Platform",
    client: "Orbit Ventures",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1600",
    overview: "We partnered with Orbit Ventures to create a data-driven marketing platform that empowers startups to reach their target audience with precision.",
    objectives: [
      "Automate lead generation tracking for venture portfolios.",
      "Design a dashboard for real-time campaign performance.",
      "Reduce cost-per-acquisition by 25%."
    ],
    stats: [
      { label: "Lead Growth", value: "180", suffix: "%", icon: <TrendingUp className="w-5 h-5 text-accent" /> },
      { label: "Campaign ROI", value: "12", suffix: "x", icon: <Users className="w-5 h-5 text-accent" /> },
      { label: "Market Reach", value: "2.4", suffix: "M", icon: <Target className="w-5 h-5 text-accent" /> }
    ]
  },
  4: {
    title: "Vanguard Content Strategy",
    client: "Vanguard",
    category: "Content Strategy",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600",
    overview: "Vanguard required a sophisticated content strategy to establish themselves as thought leaders in the renewable energy sector.",
    objectives: [
      "Define a consistent, authoritative brand voice.",
      "Develop a multi-channel content distribution plan.",
      "Increase organic search traffic by 150%."
    ],
    stats: [
      { label: "Organic Traffic", value: "210", suffix: "%", icon: <TrendingUp className="w-5 h-5 text-accent" /> },
      { label: "Social Shares", value: "50", suffix: "K", icon: <Users className="w-5 h-5 text-accent" /> },
      { label: "Domain Authority", value: "75", suffix: "+", icon: <Target className="w-5 h-5 text-accent" /> }
    ]
  },
  5: {
    title: "Synergy AI Interface",
    client: "Synergy AI",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
    overview: "Creating an intuitive interface for an AI-powered collaboration tool that simplifies complex workflows for remote teams.",
    objectives: [
      "Simplify AI model interactions for non-technical users.",
      "Design a flexible layout for varying data visualizations.",
      "Enhance real-time collaboration features."
    ],
    stats: [
      { label: "Workflow Efficiency", value: "45", suffix: "%", icon: <TrendingUp className="w-5 h-5 text-accent" /> },
      { label: "User Adoption Rate", value: "88", suffix: "%", icon: <Users className="w-5 h-5 text-accent" /> },
      { label: "Error Reduction", value: "30", suffix: "%", icon: <Target className="w-5 h-5 text-accent" /> }
    ]
  },
  6: {
    title: "Lumina E-Commerce",
    client: "Lumina",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
    overview: "A premium e-commerce experience for Lumina, focusing on luxury storytelling and a seamless checkout process.",
    objectives: [
      "Merge high-end editorial content with product sales.",
      "Optimize checkout for mobile-first shoppers.",
      "Implement an AI-driven personalization engine."
    ],
    stats: [
      { label: "Sales Growth", value: "320", suffix: "%", icon: <TrendingUp className="w-5 h-5 text-accent" /> },
      { label: "Avg Order Value", value: "150", suffix: "$", icon: <Users className="w-5 h-5 text-accent" /> },
      { label: "Cart Abandonment", value: "18", suffix: "%", icon: <Target className="w-5 h-5 text-accent" /> }
    ]
  },
  default: {
    title: "Project Overview",
    client: "Global Corp",
    category: "Digital Transformation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    overview: "A comprehensive digital transformation project focusing on user experience, scalable design systems, and robust technical architecture to drive future growth.",
    objectives: [
      "Improve user conversion rates.",
      "Develop a cohesive brand strategy.",
      "Launch a scalable e-commerce platform."
    ],
    stats: [
      { label: "Conversion Rate", value: "120", suffix: "%", icon: <TrendingUp className="w-5 h-5 text-accent" /> },
      { label: "Engagement", value: "60", suffix: "%", icon: <Users className="w-5 h-5 text-accent" /> },
      { label: "ROI", value: "300", suffix: "%", icon: <Target className="w-5 h-5 text-accent" /> }
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id] || projects.default;

  return (
    <div className="pt-24 pb-24 bg-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-text-muted hover:text-accent transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Work</span>
        </button>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-wider text-accent mb-6">
            <span>{project.client}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
            <span>{project.category}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">{project.title}</h1>
        </motion.div>

        {/* Cover Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden mb-24 shadow-2xl"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Column (Overview & Objectives) */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-serif mb-6">Project Overview</h2>
              <p className="text-text-muted text-lg leading-relaxed">
                {project.overview}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif mb-8">Core Objectives</h2>
              <div className="space-y-4">
                {project.objectives.map((obj, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-bg-alt border border-border"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <p className="text-lg text-text leading-relaxed">{obj}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column (Outcomes & Infographics) */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-2xl font-serif mb-8">The Outcomes</h3>
              <div className="space-y-8">
                {project.stats.map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="p-6 rounded-2xl bg-bg-alt border border-border"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {stat.icon}
                      <span className="font-semibold text-text-muted">{stat.label}</span>
                    </div>
                    
                    {/* Animated Progress Bar / Number Chart */}
                    <div className="relative">
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-4xl font-serif text-accent">{stat.value}</span>
                        <span className="text-xl font-bold text-accent">{stat.suffix}</span>
                      </div>
                      
                      {/* Simple CSS Progress Bar */}
                      <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min(parseInt(stat.value), 100)}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-accent rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

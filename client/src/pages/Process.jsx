import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, ArrowRight } from 'lucide-react';
import { ModalContext } from '../context/ModalContext';

const processPhases = [
  {
    phase: "Phase 1",
    title: "Discovery & Strategy",
    timeline: "Weeks 1-2",
    icon: <Search className="w-8 h-8 text-white dark:text-black" />,
    desc: "We start by diving deep into your brand, market, and audience. We conduct stakeholder interviews, competitor analysis, and establish the core positioning that will drive the entire project.",
    deliverables: ["Brand Audit", "Competitor Analysis", "Positioning Strategy", "User Personas"]
  },
  {
    phase: "Phase 2",
    title: "Concept & Design",
    timeline: "Weeks 3-5",
    icon: <PenTool className="w-8 h-8 text-white dark:text-black" />,
    desc: "With a solid strategy in place, we move into visual exploration. We create mood boards, establish the visual identity (typography, colors, logo), and design high-fidelity UI/UX wireframes.",
    deliverables: ["Visual Identity System", "UI/UX Wireframes", "High-Fidelity Prototypes", "Design System"]
  },
  {
    phase: "Phase 3",
    title: "Development & Implementation",
    timeline: "Weeks 6-9",
    icon: <Code className="w-8 h-8 text-white dark:text-black" />,
    desc: "Our engineering team brings the designs to life. We build scalable, performant frontend and backend systems, ensuring smooth animations and a flawless user experience across all devices.",
    deliverables: ["Frontend Architecture", "Backend Integration", "CMS Setup", "Quality Assurance"]
  },
  {
    phase: "Phase 4",
    title: "Launch & Optimization",
    timeline: "Week 10+",
    icon: <Rocket className="w-8 h-8 text-white dark:text-black" />,
    desc: "We don't just launch and leave. We monitor analytics, optimize performance for SEO and speed, and provide ongoing marketing strategies to ensure continuous growth.",
    deliverables: ["Deployment", "SEO Optimization", "Analytics Dashboard", "Growth Strategy"]
  }
];

const Process = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="pt-32 pb-24 bg-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-border text-xs font-semibold uppercase tracking-wider text-accent mb-6">
            How We Work
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-balance">Our Proven Process</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A structured, transparent, and collaborative approach to transforming your brand and digital presence. From initial discovery to post-launch optimization.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-border ml-4 md:ml-12 space-y-20 pb-16">
          {processPhases.map((phase, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative pl-10 md:pl-16"
            >
              {/* Timeline Dot/Icon */}
              <div className="absolute -left-[25px] top-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg border-4 border-bg">
                {phase.icon}
              </div>

              <div className="bg-bg-alt p-8 md:p-10 rounded-2xl border border-border group hover:border-accent/20 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">{phase.phase}</span>
                    <h2 className="text-3xl font-serif">{phase.title}</h2>
                  </div>
                  <div className="px-4 py-2 bg-white dark:bg-bg rounded-full text-sm font-medium text-text border border-border w-fit shadow-sm">
                    {phase.timeline}
                  </div>
                </div>

                <p className="text-text-muted leading-relaxed mb-8 text-lg">
                  {phase.desc}
                </p>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-text mb-4">Key Deliverables</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-text-muted">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-[#111111] text-white p-12 rounded-3xl border border-white/5 shadow-2xl"
        >
          <h3 className="text-4xl font-serif mb-6">Ready to start the process?</h3>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Partner with us to build something extraordinary. We're currently accepting new projects for Q3.
          </p>
          <button 
            onClick={openModal}
            className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:brightness-110 transition-all inline-flex items-center gap-2 group shadow-lg shadow-accent/20"
          >
            Apply Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default Process;

import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Briefcase, Handshake, ArrowUpRight } from 'lucide-react';
import { ModalContext } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';

const Types = () => {
  const { openModal } = useContext(ModalContext);
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const typesData = [
    {
      title: "Showcase Your Brand",
      desc: "Join our exclusive directory of top-tier brands. Gain visibility, attract talent, and establish industry authority.",
      icon: <Sparkles className="w-8 h-8" strokeWidth={1.5} />,
      cta: "Join Directory",
      action: openModal
    },
    {
      title: "Apply for Services",
      desc: "Ready to elevate your digital presence? Partner with our agency to build scalable, premium experiences.",
      icon: <Briefcase className="w-8 h-8" strokeWidth={1.5} />,
      cta: "Our Process",
      action: () => navigate('/process')
    },
    {
      title: "Become a Partner",
      desc: "Collaborate on groundbreaking projects. We're always looking for synergistic partnerships with innovative tech companies.",
      icon: <Handshake className="w-8 h-8" strokeWidth={1.5} />,
      cta: "Partner Up",
      action: openModal
    }
  ];

  return (
    <section id="types" className="py-32 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-serif mb-4 text-balance">Platform Capabilities</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">Discover how you can leverage our platform to amplify your reach and accelerate growth.</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {typesData.map((type, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              className="bg-bg-alt p-10 rounded-2xl border border-border group hover:border-accent/20 transition-colors"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {type.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{type.title}</h3>
              <p className="text-text-muted mb-8 leading-relaxed h-20">
                {type.desc}
              </p>
              
              <button onClick={type.action} className="flex items-center space-x-2 text-sm font-semibold uppercase tracking-wider group-hover:text-accent transition-colors">
                <span>{type.cta}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Types;

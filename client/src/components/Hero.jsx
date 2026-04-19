import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { ModalContext } from '../context/ModalContext';

const Hero = () => {
  const { openModal } = useContext(ModalContext);

  const headlineText = "Elevate Your Brand's Digital Presence.";
  const words = headlineText.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-noise bg-bg">
      {/* Decorative Parallax Shapes */}
      <Parallax speed={-15} className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-accent opacity-[0.03] rounded-full blur-3xl mix-blend-multiply pointer-events-none" />
      <Parallax speed={10} className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-accent opacity-[0.02] rounded-full blur-3xl mix-blend-multiply pointer-events-none" />
      <Parallax speed={-5} className="absolute top-[40%] right-[30%] w-[250px] h-[250px] bg-black opacity-[0.02] rounded-full blur-2xl mix-blend-multiply pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[1.1] tracking-tight text-text mb-6 text-balance flex flex-wrap justify-center gap-x-3"
        >
          {words.map((word, index) => (
            <motion.span variants={child} key={index} className="inline-block">
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base text-text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          We are a premium branding agency dedicated to building aesthetic, dynamic, and high-converting platforms for ambitious companies.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button 
            onClick={openModal}
            className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:brightness-110 hover:scale-105 transition-all w-full sm:w-auto shadow-lg shadow-accent/20"
          >
            Get Started
          </button>
          <button 
            onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-border text-text rounded-full font-medium hover:bg-accent-light dark:hover:bg-white/10 transition-all w-full sm:w-auto"
          >
            See Our Work
          </button>
        </motion.div>

        {/* Cinematic Video Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto px-4"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 aspect-video group cursor-pointer">
            <video 
              src="/composed_1776509734077_5981c0ea.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            
            {/* Visual indicator */}
            <div className="absolute bottom-8 left-8 flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Aura Showreel 2024</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

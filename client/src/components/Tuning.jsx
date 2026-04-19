import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Headphones, Smartphone, Watch, Zap, Network } from 'lucide-react';
import { ModalContext } from '../context/ModalContext';

const Tuning = () => {
  const { openModal } = useContext(ModalContext);
  const gadgetImage = "/tuning.png";

  return (
    <section id="tuning" className="py-32 px-6 bg-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -mr-64 -mt-32"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img 
                src={gadgetImage} 
                alt="Custom Earbuds Tuning" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white text-sm font-medium tracking-wider uppercase">Signature Aura Tuning Series</p>
              </div>
            </div>
            
            {/* Float Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white dark:bg-bg-alt p-6 rounded-2xl shadow-xl border border-border z-20 hidden md:block"
            >
              <Zap className="w-8 h-8 text-accent mb-2" />
              <p className="text-xs font-bold uppercase tracking-widest">Performance</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-xs font-semibold uppercase tracking-wider text-accent mb-6">
              Tech Customization
            </div>
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-serif mb-6 leading-[1.1] md:mb-8">
              Aura <span className="italic text-accent">Tuning</span>: Elevating Your Tech.
            </h2>
            <p className="text-text-muted text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-xl">
              Beyond branding, we specialize in high-end tech gadget customization. From custom-painted earbuds and skins to bespoke laptop enclosures featuring our signature company logo. We transform standard devices into exclusive performance statements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-bg-alt/50 border border-transparent hover:border-accent/20 transition-all">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-bg rounded-xl flex items-center justify-center flex-shrink-0 border border-border">
                  <Headphones className="w-5 h-5 md:w-6 md:h-6 text-text" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base mb-1">Premium Audio</h4>
                  <p className="text-xs md:text-sm text-text-muted">Custom skins & logo engraving for earbuds.</p>
                </div>
              </div>
              {/* ... other items updated similarly ... */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-bg-alt/50 border border-transparent hover:border-accent/20 transition-all">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-bg rounded-xl flex items-center justify-center flex-shrink-0 border border-border">
                  <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-text" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base mb-1">Device Modding</h4>
                  <p className="text-xs md:text-sm text-text-muted">Unique color palettes & texture finishes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-bg-alt/50 border border-transparent hover:border-accent/20 transition-all">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-bg rounded-xl flex items-center justify-center flex-shrink-0 border border-border">
                  <Network className="w-5 h-5 md:w-6 md:h-6 text-text" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base mb-1">Networking</h4>
                  <p className="text-xs md:text-sm text-text-muted">Building connected ecosystems for brands.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-bg-alt/50 border border-transparent hover:border-accent/20 transition-all">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-bg rounded-xl flex items-center justify-center flex-shrink-0 border border-border">
                  <Watch className="w-5 h-5 md:w-6 md:h-6 text-text" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base mb-1">Wearable Tech</h4>
                  <p className="text-xs md:text-sm text-text-muted">Bespoke accessories for modern wearables.</p>
                </div>
              </div>
            </div>

            <p className="text-xs md:text-sm font-medium text-text-muted italic border-l-2 border-accent pl-4 mb-8">
              "We don't just brand; we build networking and bespoke tech ecosystems that resonate with the future."
            </p>

            <button 
              onClick={openModal}
              className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-full font-medium hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-3"
            >
              Explore Tuning <Zap className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Tuning;

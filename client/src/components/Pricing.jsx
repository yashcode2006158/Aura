import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ModalContext } from '../context/ModalContext';

const pricingData = [
  {
    tier: "Starter",
    monthly: 2900,
    annual: 2610,
    desc: "Perfect for emerging brands needing a strong foundation.",
    features: ["Brand Identity Audit", "Logo & Visual System", "Landing Page Design", "Basic SEO Setup", "1 Month Support"],
    popular: false
  },
  {
    tier: "Growth",
    monthly: 5900,
    annual: 5310,
    desc: "Comprehensive solution for scaling businesses.",
    features: ["Everything in Starter", "Full UI/UX Redesign", "Custom Web Application", "Content Strategy Plan", "3 Months Support", "Analytics Dashboard"],
    popular: true
  },
  {
    tier: "Enterprise",
    monthly: 12000,
    annual: 10800,
    desc: "Dedicated partnership for market leaders.",
    features: ["Everything in Growth", "Dedicated Design Team", "Complex System Architecture", "Performance Marketing", "12 Months Retainer", "Priority SLA"],
    popular: false
  }
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { openModal } = useContext(ModalContext);

  return (
    <section id="pricing" className="py-32 px-6 bg-bg-alt border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-serif mb-6">Transparent Pricing</h2>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-text' : 'text-text-muted'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-border rounded-full p-1 transition-colors hover:bg-black/10"
            >
              <div 
                className={`w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ${isAnnual ? 'translate-x-6 bg-accent text-white' : 'translate-x-0'}`} 
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${isAnnual ? 'text-text' : 'text-text-muted'}`}>
              Annual
              <span className="bg-accent/10 text-accent text-xs px-2 py-0.5 rounded-full font-bold">Save 10%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingData.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative bg-white rounded-3xl p-8 shadow-sm ${plan.popular ? 'border-2 border-accent scale-100 md:scale-105 z-10 py-12' : 'border border-border'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-serif mb-2">{plan.tier}</h3>
              <p className="text-text-muted text-sm mb-6 h-10">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-serif">${isAnnual ? plan.annual.toLocaleString() : plan.monthly.toLocaleString()}</span>
                <span className="text-text-muted">/mo</span>
                {isAnnual && <div className="text-xs text-text-muted mt-1">Billed annually</div>}
              </div>

              <button 
                onClick={openModal}
                className={`w-full py-4 rounded-xl font-medium mb-8 transition-colors ${plan.popular ? 'bg-accent text-white dark:text-black hover:bg-black dark:hover:bg-white/90' : 'bg-bg-alt text-text hover:bg-border'}`}
              >
                Get Started
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-text-muted text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

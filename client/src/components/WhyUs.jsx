import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

const StatCounter = ({ end, suffix, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(isInView ? end : 0, 2000, 0);

  return (
    <div ref={ref} className="text-center py-8">
      <div className="text-5xl md:text-6xl font-serif text-accent mb-2">
        {count}{suffix}
      </div>
      <div className="text-text-muted font-medium tracking-wide uppercase text-sm">
        {label}
      </div>
    </div>
  );
};

const WhyUs = () => {
  const usps = [
    { title: "Design Excellence", desc: "We don't do templates. Every pixel is crafted to reflect your unique brand identity and resonate with your audience." },
    { title: "Strategic Approach", desc: "Aesthetics backed by data. Our decisions are rooted in market research and proven user experience principles." },
    { title: "Seamless Execution", desc: "From concept to deployment, we ensure a friction-less process with transparent communication at every step." },
  ];

  return (
    <section id="whyus" className="py-32 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border mb-32 border-y border-border">
          <StatCounter end={200} suffix="+" label="Brands" />
          <StatCounter end={98} suffix="%" label="Satisfaction" />
          <StatCounter end={48} suffix="hr" label="Response" />
          <StatCounter end={12} suffix="" label="Industries" />
        </div>

        {/* USPs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {usps.map((usp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="pl-6 border-l-2 border-accent relative"
            >
              <div className="absolute top-0 -left-[2px] w-[2px] h-0 bg-accent/20 group-hover:h-full transition-all duration-500"></div>
              <h3 className="text-2xl font-serif mb-4">{usp.title}</h3>
              <p className="text-text-muted leading-relaxed">{usp.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Parallax } from 'react-scroll-parallax';
import { useNavigate } from 'react-router-dom';

const servicesData = [
  {
    title: "Brand Identity",
    description: "We craft iconic, enduring brand identities that resonate deeply with your target audience. From logo design to comprehensive visual systems, we ensure your brand stands out in a crowded market.",
    tags: ["Logo Design", "Typography", "Visual System"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing campaigns that convert. We leverage SEO, paid media, and social strategies to accelerate your growth and maximize ROI across all digital touchpoints.",
    tags: ["SEO", "PPC", "Social Media"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Web Presence",
    description: "Immersive, high-performance web applications tailored to your business needs. We build scalable platforms that deliver seamless user experiences and drive meaningful engagement.",
    tags: ["UI/UX Design", "Frontend", "Backend"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Content Strategy",
    description: "Compelling narratives that captivate and convert. We develop cohesive content strategies that align with your brand voice and distribute high-value content across the right channels.",
    tags: ["Copywriting", "Video", "Strategy"],
    image: "https://mlyxll6bckgq.i.optimole.com/w:1024/h:1024/q:90/f:best/https://i0.wp.com/doyoudaretodream.com/wp-content/uploads/2024/01/10-Innovative-Content-Creation-Ideas-to-Elevate-Your-Marketing-Strategy.png?fit=1024%2C1024&ssl=1",
  }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-32 px-6 bg-bg-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20 text-center"
        >
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] mb-4 text-balance">Comprehensive Solutions for Modern Brands</h2>
          <p className="text-text-muted max-w-2xl mx-auto">We provide an end-to-end suite of services designed to elevate your brand and drive sustainable growth.</p>
        </motion.div>

        <div className="space-y-32">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col gap-12 lg:gap-24 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Image Side with Parallax */}
                <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl relative aspect-[4/3] group">
                  <Parallax speed={-5} className="w-full h-[120%] -top-[10%] absolute">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Parallax>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Text Side with FadeUp */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  <h3 className="text-3xl lg:text-4xl font-serif mb-6">{service.title}</h3>
                  <p className="text-text-muted text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {service.tags.map((tag, idx) => (
                      <span key={idx} className="px-4 py-2 border border-border rounded-full text-sm text-text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button onClick={() => navigate('/process')} className="inline-flex items-center space-x-2 text-accent font-medium group cursor-pointer w-fit">
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Learn More</span>
                      <span className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">Learn More</span>
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

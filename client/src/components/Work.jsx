import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const workData = [
  { id: 1, name: "Aura Fintech", category: "Brand Identity", span: "col-span-1 md:col-span-2 row-span-2", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" },
  { id: 2, name: "Nova Wellness", category: "Web App", span: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1540206276207-3af25c08abc4?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Orbit Ventures", category: "Digital Marketing", span: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Vanguard", category: "Content Strategy", span: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Synergy AI", category: "UI/UX Design", span: "col-span-1 md:col-span-2 row-span-1", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" },
  { id: 6, name: "Lumina", category: "E-Commerce", span: "col-span-1 md:col-span-3 row-span-2", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600" }
];

const Work = () => {
  const navigate = useNavigate();

  return (
    <section id="work" className="py-32 px-6 bg-bg-alt border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-serif mb-4">Selected Work</h2>
            <p className="text-text-muted text-lg max-w-xl">A curated selection of our most impactful projects. We blend aesthetics with functionality to deliver remarkable results.</p>
          </div>
          <button className="px-6 py-3 border border-border rounded-full hover:bg-white dark:hover:bg-text dark:hover:text-bg transition-colors whitespace-nowrap cursor-pointer">
            View All Work
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[300px]">
          {workData.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => navigate(`/work/${project.id}`)}
              className={`relative overflow-hidden rounded-2xl group ${project.span} min-h-[250px] cursor-pointer`}
            >
              <img 
                src={project.img} 
                alt={project.name} 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/80 text-sm font-medium mb-1 tracking-wider uppercase">{project.category}</p>
                  <h3 className="text-white text-3xl font-serif">{project.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const faqData = [
  { q: "What services do you provide?", a: "We provide end-to-end digital branding, including brand identity design, UI/UX, full-stack web development, digital marketing, and content strategy." },
  { q: "How long does a typical project take?", a: "Most branding and web projects take between 4 to 8 weeks, depending on the scope and complexity. We'll provide a detailed timeline during our discovery phase." },
  { q: "What is your pricing structure?", a: "Our pricing is tailored to your specific needs. We offer fixed-price project rates as well as retainer models for ongoing marketing and support." },
  { q: "Do you work with startups?", a: "Absolutely. We love helping ambitious startups build their foundational brand identity and scalable digital platforms." },
  { q: "What tech stack do you use for web apps?", a: "We primarily use modern, scalable technologies like React, Vite, Next.js, Node.js, Express, and MongoDB, tailored to the project requirements." },
  { q: "Can you help rebrand an existing company?", a: "Yes, rebranding is one of our core specialties. We help modernize and reposition established brands for new market opportunities." },
  { q: "Do you provide post-launch support?", a: "Yes. We offer continuous maintenance, SEO optimization, and marketing retainers to ensure your brand's ongoing success." },
  { q: "How do we get started?", a: "Click the 'Try Now' or 'Get Started' button to fill out an application. Our team will review your requirements and reach out within 48 hours." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-32 px-6 bg-bg">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-serif mb-4">Frequently Asked Questions</h2>
          <p className="text-text-muted text-lg">Everything you need to know about our services and process.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border rounded-xl overflow-hidden bg-bg-alt transition-colors"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-semibold text-lg pr-8">{faq.q}</span>
                <div className="flex-shrink-0 text-accent">
                  {openIndex === index ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 pt-0 text-text-muted leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

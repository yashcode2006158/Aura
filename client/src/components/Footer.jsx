import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] text-white pt-24 pb-8 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Brand */}
          <div className="lg:pr-8">
            <div className="font-serif text-3xl tracking-tight mb-6 text-white">Aura.</div>
            <p className="text-white/60 leading-relaxed mb-8">
              A premium branding agency building aesthetic, dynamic, and high-converting platforms for ambitious companies worldwide.
            </p>
            <div className="flex items-center gap-4 text-white/60 text-sm font-medium">
              <a href="#" className="hover:text-white transition-colors">X/Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="/#work" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="/#whyus" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="/articles" className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="/process" className="hover:text-white transition-colors">Brand Identity</a></li>
              <li><a href="/process" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="/process" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="/process" className="hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="/process" className="hover:text-white transition-colors">Content Strategy</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-white/60">
              <li>hello@aurabranding.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="pt-4 text-white/60">
                123 Innovation Drive<br />
                Suite 400<br />
                San Francisco, CA 94103
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Aura Branding Agency. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="ml-4 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors group text-white"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

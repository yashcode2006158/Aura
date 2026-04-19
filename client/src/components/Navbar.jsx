import React, { useContext, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { ModalContext } from '../context/ModalContext';
import { ThemeContext } from '../context/ThemeContext';
import { Moon, Sun, User, Menu, X } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { scrollY } = useScroll();
  const { openModal } = useContext(ModalContext);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const background = useTransform(
    scrollY,
    [0, 50],
    ['rgba(var(--bg-rgb, 250, 250, 248), 0)', 'rgba(var(--bg-rgb, 250, 250, 248), 0.85)']
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );

  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ['1px solid rgba(0, 0, 0, 0)', '1px solid var(--border)']
  );

  const links = ['Services', 'Work', 'Pricing', 'Blog', 'FAQ', 'Tuning'];

  const handleNavClick = (link) => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(link.toLowerCase());
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${link.toLowerCase()}`);
    }
  };

  return (
    <>
      <motion.nav 
        style={{ background: isDark ? (scrollY.get() > 50 ? 'rgba(17, 17, 17, 0.85)' : 'rgba(17,17,17,0)') : background, backdropFilter: backdropBlur, borderBottom }}
        className="fixed top-0 left-0 right-0 z-[60] transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl tracking-tight cursor-pointer z-[70]" onClick={() => navigate('/')}>
            Aura.
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {links.map((link) => (
              <button 
                key={link} 
                onClick={() => handleNavClick(link)}
                className="text-text hover:text-text-muted transition-colors"
              >
                {link}
              </button>
            ))}
            {user ? (
              <button onClick={() => navigate('/profile')} className="flex items-center gap-2 text-accent">
                <User className="w-4 h-4" /> Profile
              </button>
            ) : (
              <button onClick={() => navigate('/login')} className="text-text hover:text-text-muted">
                Sign In
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-border transition-colors text-text"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button 
              onClick={openModal}
              className="hidden sm:block bg-accent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:brightness-110 transition-all shadow-md shadow-accent/10"
            >
              Try Now
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-text z-[70]"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-bg flex flex-col pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col space-y-8">
              {links.map((link, idx) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleNavClick(link)}
                  className="text-4xl font-serif text-left hover:text-accent transition-colors"
                >
                  {link}
                </motion.button>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-10 border-t border-border flex flex-col space-y-6"
              >
                {user ? (
                  <button onClick={() => { setIsMenuOpen(false); navigate('/profile'); }} className="text-2xl font-medium text-accent flex items-center gap-3">
                    <User className="w-6 h-6" /> Profile
                  </button>
                ) : (
                  <button onClick={() => { setIsMenuOpen(false); navigate('/login'); }} className="text-2xl font-medium text-text">
                    Sign In
                  </button>
                )}
                <button 
                  onClick={() => { setIsMenuOpen(false); openModal(); }}
                  className="w-full py-4 bg-accent text-white rounded-2xl text-lg font-medium"
                >
                  Try Now
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

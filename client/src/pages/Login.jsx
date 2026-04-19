import React, { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, AlertCircle } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/profile');
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    const result = await login(email, password);
    if (result.success) {
      navigate('/profile');
    } else {
      setError(result.message);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-32 pb-16 flex items-center justify-center px-6 bg-bg">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white dark:bg-bg-alt p-8 rounded-3xl border border-border shadow-2xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif mb-2">Welcome Back</h1>
          <p className="text-text-muted">Sign in to your Aura account</p>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 rounded-xl flex items-center gap-3 text-sm font-medium"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-bg dark:bg-bg-alt border border-border focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/5 transition-all"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-bg dark:bg-bg-alt border border-border focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/5 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-4 bg-accent text-white rounded-xl font-medium hover:brightness-110 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:scale-100 flex items-center justify-center"
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-border text-center space-y-4">
          <p className="text-sm text-text-muted">
            Don't have an account? <Link to="/register" className="text-accent font-medium hover:underline">Create Account</Link>
          </p>
          <div className="pt-2">
            <p className="text-[10px] text-text-muted/50 uppercase tracking-widest font-bold">Test Credentials</p>
            <p className="text-xs text-text-muted mt-2">
              Admin: admin@gmail.com / admin <br/>
              User: user@gmail.com / user
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

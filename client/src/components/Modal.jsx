import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { ModalContext } from '../context/ModalContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
  name: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  company: yup.string().required('Company Name is required'),
  website: yup.string().url('Must be a valid URL').nullable().transform(v => v === '' ? null : v),
  phone: yup.string(),
  service: yup.string().required('Please select a service of interest'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
  links: yup.string()
});

const Modal = () => {
  const { closeModal } = useContext(ModalContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrorMsg('');
    
    try {
      // Convert links string to array
      const payload = { ...data };
      if (payload.links) {
        payload.links = payload.links.split(',').map(l => l.trim()).filter(l => l);
      } else {
        payload.links = [];
      }

      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await axios.post(`${apiUrl}/api/applications`, payload);
      setIsSuccess(true);
      reset();
      
      // Auto close after 3 seconds
      setTimeout(() => {
        closeModal();
      }, 3000);
      
    } catch (err) {
      console.error(err);
      setErrorMsg(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeModal}></div>
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 sm:p-10"
        >
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-bg-alt text-text-muted hover:text-text transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {isSuccess ? (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
                className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-500/20"
              >
                <CheckCircle className="w-12 h-12" />
              </motion.div>
              <h3 className="text-4xl font-serif mb-4 text-green-600">Application Successful!</h3>
              <p className="text-text-muted text-lg max-w-sm mx-auto">
                Your details have been recorded in our system. Our strategy team will reach out to you within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8 pr-12">
                <h2 className="text-3xl font-serif mb-3">Start Your Journey</h2>
                <p className="text-text-muted">Tell us about your project and we'll get back to you with next steps.</p>
              </div>

              {errorMsg && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input {...register('name')} className={`w-full px-4 py-3 rounded-xl bg-bg-alt border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-transparent focus:border-border focus:bg-white'} focus:outline-none focus:ring-2 focus:ring-accent/10 transition-all`} placeholder="Jane Doe" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input {...register('email')} type="email" className={`w-full px-4 py-3 rounded-xl bg-bg-alt border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-transparent focus:border-border focus:bg-white'} focus:outline-none focus:ring-2 focus:ring-accent/10 transition-all`} placeholder="jane@company.com" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name *</label>
                    <input {...register('company')} className={`w-full px-4 py-3 rounded-xl bg-bg-alt border ${errors.company ? 'border-red-500 focus:ring-red-200' : 'border-transparent focus:border-border focus:bg-white'} focus:outline-none focus:ring-2 focus:ring-accent/10 transition-all`} placeholder="Acme Corp" />
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Website URL</label>
                    <input {...register('website')} className="w-full px-4 py-3 rounded-xl bg-bg-alt border border-transparent focus:border-border focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/10 transition-all" placeholder="https://example.com" />
                    {errors.website && <p className="text-red-500 text-xs mt-1">{errors.website.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                    <input {...register('phone')} className="w-full px-4 py-3 rounded-xl bg-bg-alt border border-transparent focus:border-border focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/10 transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest *</label>
                    <select {...register('service')} className={`w-full px-4 py-3 rounded-xl bg-bg-alt border ${errors.service ? 'border-red-500 focus:ring-red-200' : 'border-transparent focus:border-border focus:bg-white'} focus:outline-none focus:ring-2 focus:ring-accent/10 transition-all appearance-none`}>
                      <option value="">Select a service...</option>
                      <option value="Brand Identity">Brand Identity</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Content Strategy">Content Strategy</option>
                      <option value="Full Partnership">Full Partnership</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Details *</label>
                  <textarea {...register('message')} rows="4" className={`w-full px-4 py-3 rounded-xl bg-bg-alt border ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-transparent focus:border-border focus:bg-white'} focus:outline-none focus:ring-2 focus:ring-accent/10 transition-all resize-none`} placeholder="Tell us about your goals, timeline, and budget..."></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Portfolio/Drive Links (Optional)</label>
                  <input {...register('links')} className="w-full px-4 py-3 rounded-xl bg-bg-alt border border-transparent focus:border-border focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/10 transition-all" placeholder="Comma separated URLs" />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent text-white dark:text-black rounded-xl font-medium hover:bg-black dark:hover:bg-white/90 transition-colors disabled:opacity-70 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : 'Submit Application'}
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;

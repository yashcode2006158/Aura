import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User, Shield, LogOut, FileText, Calendar, Mail, ExternalLink } from 'lucide-react';

const Profile = () => {
  const { user, logout, loading } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [fetching, setFetching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate('/login');
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user?.role === 'admin') {
      fetchApplications();
    }
  }, [user]);

  const fetchApplications = async () => {
    setFetching(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await axios.get(`${apiUrl}/api/applications`);
      setApplications(res.data);
    } catch (err) {
      console.error('Error fetching applications:', err);
    } finally {
      setFetching(false);
    }
  };

  if (loading || !user) return <div className="min-h-screen pt-32 flex justify-center">Loading...</div>;

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
              {user.role === 'admin' ? <Shield className="w-8 h-8 text-accent" /> : <User className="w-8 h-8 text-accent" />}
            </div>
            <div>
              <h1 className="text-3xl font-serif">{user.name}</h1>
              <p className="text-text-muted flex items-center gap-2">
                {user.email} • <span className="capitalize">{user.role}</span>
              </p>
            </div>
          </div>
          <button 
            onClick={logout}
            className="flex items-center gap-2 px-6 py-3 border border-border rounded-xl hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all text-sm font-medium"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>

        {/* Content */}
        {user.role === 'admin' ? (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif flex items-center gap-3">
                <FileText className="w-6 h-6 text-accent" />
                Recent Applications
              </h2>
              <button 
                onClick={fetchApplications}
                className="text-sm text-accent font-medium hover:underline"
                disabled={fetching}
              >
                {fetching ? 'Refreshing...' : 'Refresh List'}
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {applications.length === 0 ? (
                <div className="p-12 text-center border border-dashed border-border rounded-3xl bg-white dark:bg-bg-alt">
                  <p className="text-text-muted italic">No applications received yet.</p>
                </div>
              ) : (
                applications.map((app, idx) => (
                  <motion.div 
                    key={app._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white dark:bg-bg-alt p-8 rounded-3xl border border-border hover:border-accent/30 transition-all group"
                  >
                    <div className="flex flex-col lg:flex-row justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold">{app.name}</h3>
                          <span className="px-3 py-1 bg-accent/5 text-accent text-[10px] uppercase font-bold tracking-widest rounded-full border border-accent/10">
                            {app.service}
                          </span>
                        </div>
                        <p className="text-text-muted mb-4 font-serif text-lg">{app.company}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-text-muted mb-6">
                          <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> {app.email}</span>
                          <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {new Date(app.createdAt).toLocaleDateString()}</span>
                        </div>

                        <div className="p-5 bg-bg dark:bg-bg-alt rounded-2xl border border-border">
                          <p className="text-sm leading-relaxed text-text italic">"{app.message}"</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 min-w-[120px]">
                        {app.website && (
                          <a 
                            href={app.website} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 py-2 px-4 bg-bg rounded-lg text-xs font-medium border border-border hover:bg-border transition-all"
                          >
                            Website <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        <button className="py-3 px-6 bg-accent text-white rounded-xl text-sm font-medium hover:brightness-110 transition-all">
                          Contact
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-bg-alt p-12 rounded-3xl border border-border text-center shadow-xl">
            <h2 className="text-2xl font-serif mb-4">Welcome to Aura Platform</h2>
            <p className="text-text-muted max-w-lg mx-auto leading-relaxed">
              You are signed in as a standard user. Admin features like viewing platform applications are restricted to administrative accounts.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-bg rounded-2xl border border-border">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <User className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold mb-2">My Profile</h3>
                <p className="text-xs text-text-muted">Manage your personal information</p>
              </div>
              <div className="p-6 bg-bg rounded-2xl border border-border">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Security</h3>
                <p className="text-xs text-text-muted">Update password and 2FA</p>
              </div>
              <div className="p-6 bg-bg rounded-2xl border border-border">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Activities</h3>
                <p className="text-xs text-text-muted">Track your recent actions</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

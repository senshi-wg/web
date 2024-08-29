"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { supabase } from '@/utils/supabase/client';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password: Math.random().toString(36).slice(-8),
      });

      if (error) throw error;

      await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="content-area max-w-2xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-8 text-senshi-accent">Join the Waitlist</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="senshi-input"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="senshi-button w-full"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
            </motion.button>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-green-400">You&apos;ve been added to the waitlist! Check your email for confirmation.</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-400">An error occurred. Please try again.</p>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Waitlist;
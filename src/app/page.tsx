"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Waitlist from '@/components/Waitlist';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer';

export default function Home() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition > windowHeight * 1.5 && videoRef.current) {
        videoRef.current.play();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <motion.div
        className="fixed inset-0 bg-senshi-bg bg-cover bg-center"
        style={{ y: backgroundY }}
      />
      <Header isMusicPlaying={isMusicPlaying} setIsMusicPlaying={setIsMusicPlaying} />
      <AudioPlayer isPlaying={isMusicPlaying} setIsPlaying={setIsMusicPlaying} />
      <Hero />
      <Waitlist />
      <motion.div
        className="relative z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <video
          ref={videoRef}
          className="w-full h-screen object-cover"
          loop
          muted
          playsInline
        >
          <source src="/senshi-video.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <Features />
      <Footer />
    </main>
  );
}
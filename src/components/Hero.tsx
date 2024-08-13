import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section min-h-screen flex items-center justify-end">
      <div className="container mx-auto px-4">
        <motion.div 
          className="content-area max-w-2xl ml-auto"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-display font-bold mb-4 text-senshi-accent">
            SENSHI
          </h1>
          <p className="text-xl mb-8 text-senshi-light">Empowering the future of gaming on Solana</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="senshi-button"
          >
            Explore Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const featureData = [
  { title: "Immersive Gameplay", description: "Experience cutting-edge graphics and storytelling." },
  { title: "Blockchain Integration", description: "Securely own and trade in-game assets on Solana." },
  { title: "Community-Driven", description: "Shape the future of Senshi with your fellow players." },
];

const FeatureCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="content-area p-6"
    >
      <h3 className="text-2xl font-display font-bold mb-2 text-senshi-accent">{title}</h3>
      <p className="text-senshi-light">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-12 text-senshi-accent">
          Senshi Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
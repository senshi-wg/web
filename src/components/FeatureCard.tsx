import { motion } from 'framer-motion';
import Image from 'next/image';

export type FeatureCardVariant = 'default' | 'accent' | 'glow';

export interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  variant?: FeatureCardVariant;
}

const variants: Record<FeatureCardVariant, string> = {
  default: 'bg-senshi-dark text-senshi-light',
  accent: 'bg-senshi-accent text-senshi-dark',
  glow: 'bg-senshi-dark text-senshi-light shadow-neon',
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  variant = 'default',
}) => {
  return (
    <motion.div
      className={`rounded-lg overflow-hidden ${variants[variant]} transition-all duration-300 hover:scale-105`}
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-video">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-display font-bold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
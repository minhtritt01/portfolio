import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  y = 24,
  once = true,
  margin = '-80px',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

import { useInView, motion } from 'framer-motion';
import React from 'react';

const ScrollFadeIn = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef(null);
  // Restore to only animate once when entering viewport (scrolling down)
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } } : { opacity: 0, y: 40 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;

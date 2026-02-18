import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const directionOffset = {
  up: { y: 60 },
  down: { y: -60 },
  left: { x: 60 },
  right: { x: -60 },
  none: {},
};

const ScrollReveal = ({ children, className, delay = 0, direction = "up" }: ScrollRevealProps) => (
  <motion.div
    initial={{ opacity: 0, ...directionOffset[direction] }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default ScrollReveal;

import { Variants } from "framer-motion";

/**
 * Premium custom easing curves inspired by Apple and Linear
 */
export const easings = {
  smooth: [0.22, 1, 0.36, 1] as [number, number, number, number], // very smooth, slow ending
  snappy: [0.175, 0.885, 0.32, 1.1] as [number, number, number, number], // slight overshoot, not exaggerated
  calm: [0.33, 1, 0.68, 1] as [number, number, number, number], // CSS ease-out equivalent but tailored
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easings.smooth,
    },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easings.smooth,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easings.smooth,
    },
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easings.smooth,
    },
  },
};

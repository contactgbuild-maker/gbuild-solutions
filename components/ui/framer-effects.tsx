"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  className?: string;
};

type FadeInProps = BaseProps & {
  delay?: number;
  distance?: number;
};

export function FadeIn({ children, className, delay = 0, distance = 32 }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type StaggerGroupProps = BaseProps & {
  delayChildren?: number;
  staggerChildren?: number;
};

export function StaggerGroup({
  children,
  className,
  delayChildren = 0.08,
  staggerChildren = 0.12,
}: StaggerGroupProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = BaseProps & {
  distance?: number;
};

export function StaggerItem({ children, className, distance = 26 }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: distance },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.72,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type HoverLiftProps = BaseProps & {
  rotate?: number;
};

export function HoverLift({ children, className, rotate = 0 }: HoverLiftProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -8, rotate, scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      {children}
    </motion.div>
  );
}

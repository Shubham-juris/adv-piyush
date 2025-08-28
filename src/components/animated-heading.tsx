
"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedHeadingProps = {
  text: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

const AnimatedHeading = ({
  text,
  tag = "h2",
  className,
}: AnimatedHeadingProps) => {
  const words = text.split(" ");
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
    const interval = setInterval(() => {
      controls.start("hidden").then(() => controls.start("visible"));
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.08 * i },
    }),
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const MotionTag = motion[tag];

  return (
    <MotionTag
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={cn("flex flex-wrap", className)}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="mr-[0.25em]" // space between words
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export default AnimatedHeading;

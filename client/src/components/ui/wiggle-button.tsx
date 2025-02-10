import { motion } from "framer-motion";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface WiggleButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
  initialDelay?: number;
}

export function WiggleButton({ children, className, initialDelay = 0, ...props }: WiggleButtonProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, initialDelay + 2000); // Animation duration + delay

    return () => clearTimeout(timer);
  }, [initialDelay]);

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={!hasAnimated ? {
        rotate: [0, -3, 3, -2, 2, 0],
        scale: [1, 1.02, 1],
      } : {}}
      transition={!hasAnimated ? {
        duration: 1,
        delay: initialDelay,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        ease: "easeInOut",
      } : {}}
      className="relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={!hasAnimated ? {
          opacity: [0, 0.5, 0],
          scale: [1, 1.05, 1],
        } : {}}
        transition={!hasAnimated ? {
          duration: 1,
          delay: initialDelay,
          ease: "easeInOut",
        } : {}}
        className="absolute inset-0 rounded-full bg-primary/50 blur-lg"
      />
      <Button className={cn("relative", className)} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}

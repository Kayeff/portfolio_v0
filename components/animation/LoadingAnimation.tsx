"use client";
import { motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";

export default function LoadingAnimation({
  children,
}: {
  children: ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

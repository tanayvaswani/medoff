"use client";

import { motion } from "framer-motion";

const Heading = () => {
  return (
    <motion.h1
      className="text-6xl md:text-8xl"
      initial={{ scale: 0.9, opacity: 0, x: 0 }}
      animate={{ scale: 1, opacity: 100, x: 0 }}
      transition={{
        ease: "easeOut",
        duration: 1,
        x: { duration: 1 },
        delay: 0.5,
      }}
    >
      medoff
    </motion.h1>
  );
};

export default Heading;

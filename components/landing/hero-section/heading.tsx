"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const Heading = () => {
  return (
    <motion.h1
      className={cn("w-full my-1 flex items-center justify-center text-5xl text-blue-600 md:text-6xl", poppins.className)}
      initial={{ scale: 0.9, opacity: 0, x: 0 }}
      animate={{ scale: 1, opacity: 100, x: 0 }}
      transition={{
        ease: "easeOut",
        duration: 1,
        x: { duration: 1 },
        delay: 0.5,
      }}
    >
      some heading...
    </motion.h1>
  );
};

export default Heading;

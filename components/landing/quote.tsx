"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Quote = () => {
  return (
    <motion.p
      className={cn(
        "md:text-2xl text-center pt-2 text-blue-800",
        notoSans.className
      )}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 100 }}
      transition={{
        ease: "easeOut",
        duration: 1,
        x: { duration: 1 },
        delay: 0.5,
      }}
    >
      Helping those in need is not charity, it&apos;s humanity.
    </motion.p>
  );
};

export default Quote;

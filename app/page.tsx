"use client";

import { AnimatePresence } from "framer-motion";
import { gradient } from "medoff/components/gradient";
import { useEffect } from "react";
import HomePage from "medoff/components/home-page";

export default function Home() {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <AnimatePresence>
      <HomePage />
    </AnimatePresence>
  );
}

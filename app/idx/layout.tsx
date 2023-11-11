import BgNoise from "medoff/components/bg-noise";
import React from "react";

export default function IdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <BgNoise />
      {children}
    </section>
  );
}

import Navbar from "@/components/landing/navbar/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      <Navbar />
      <div className="pt-20 h-full">{children}</div>
    </div>
  );
}

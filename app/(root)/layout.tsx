import Navbar from "@/components/landing/navbar/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <section className="pt-20 h-full">{children}</section>
    </main>
  );
}

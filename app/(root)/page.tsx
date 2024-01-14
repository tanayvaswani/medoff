import Heading from "@/components/landing/hero-section/heading";
import Quote from "@/components/landing/hero-section/quote";

const HomePage = () => {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center">
      <div className="-mt-40">
        <Heading />
        <Quote />
      </div>
    </main>
  );
};

export default HomePage;

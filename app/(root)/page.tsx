import { Background } from "@/components/ui/background";
import Heading from "@/components/landing/heading";
import Quote from "@/components/landing/quote";

const HomePage = () => {
  return (
    <section>
      <Background />
      <div className="flex flex-col w-full items-center justify-center mt-40">
        <Heading />
        <Quote />
      </div>
    </section>
  );
};

export default HomePage;

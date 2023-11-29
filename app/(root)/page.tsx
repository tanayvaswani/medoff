import { Background } from "@/components/background";
import Heading from "@/components/heading";
import Quote from "@/components/quote";

const HomePage = () => {
  return (
    <div>
      <Background />
      <div className="flex flex-col w-full items-center justify-center mt-40">
        <Heading />
        <Quote />
      </div>
    </div>
  );
};

export default HomePage;

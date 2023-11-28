import { Background } from "@/components/background";
import Heading from "@/components/heading";

const HomePage = () => {
  return (
    <div>
      <Background />
      <div className="flex w-full items-center justify-center mt-40">
        <Heading />
      </div>
    </div>
  );
};

export default HomePage;

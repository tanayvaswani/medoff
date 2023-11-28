import { LogIn, User } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full py-4 px-4 shadow-sm shadow-blue-600 backdrop-blur-sm">
      <div className="text-lg font-bold">Navbar</div>
      <div className="flex gap-x-2">
        <Button
          variant={"ghost"}
          className="shadow-sm shadow-blue-500 hover:text-blue-500"
        >
          <LogIn className="h-4 w-4 mr-2" /> Login
        </Button>
        <Button
          variant={"ghost"}
          className="shadow-sm shadow-blue-500 hover:text-blue-500"
        >
          <User className="h-4 w-4 mr-2" /> SignUp
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

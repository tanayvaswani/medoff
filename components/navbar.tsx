import { LogIn, User } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full py-4 px-4 shadow-sm shadow-blue-600 backdrop-blur-sm fixed">
      <Link href="/" className="text-2xl font-bold hover:text-blue-600">
        medoff
      </Link>
      <div className="flex gap-x-2">
        <Button
          variant={"ghost"}
          className="shadow-sm shadow-blue-500 hover:text-blue-600"
        >
          <LogIn className="h-4 w-4 mr-2 hidden md:block" /> Login
        </Button>
        <Button
          variant={"ghost"}
          className="shadow-sm shadow-blue-500 hover:text-blue-600"
        >
          <User className="h-4 w-4 mr-2 hidden md:block" /> SignUp
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

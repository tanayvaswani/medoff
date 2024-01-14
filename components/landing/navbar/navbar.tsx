import { LogIn, User } from "lucide-react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { navItems } from "./nav-items";

const Navbar = () => {
  return (
    <section className="flex items-center justify-between w-full py-4 px-6 lg:px-20 shadow-sm shadow-blue-600 backdrop-blur-sm fixed">
      <Link href="/" className="text-3xl font-bold text-blue-600">
        medoff.
      </Link>

      <ul className="hidden lg:flex gap-x-6 font-medium text-lg">
        {navItems.map((item) => {
          return (
            <li key={item.id}>
              <Link href={item.source}>{item.name}</Link>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-x-2">
        <Button variant={"medoffnative"} asChild>
          <Link href="/login">
            <LogIn className="h-4 w-4 mr-2 hidden md:block" />
            Login
          </Link>
        </Button>

        <Button variant={"medoffnative"} asChild>
          <Link href="/signup">
            <User className="h-4 w-4 mr-2 hidden md:block" />
            Signup
          </Link>
        </Button>
      </div>

      {/* menu dropdown */}
      {/* <ul className="hidden lg:flex gap-x-6 font-medium text-lg">
        {navItems.map((item) => {
          return (
            <li key={item.id}>
              <Link href={item.source}>{item.name}</Link>
            </li>
          );
        })}
      </ul> */}
    </section>
  );
};

export default Navbar;

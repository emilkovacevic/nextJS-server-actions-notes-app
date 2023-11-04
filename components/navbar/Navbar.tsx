import Link from "../ui/link";
import { ThemeToggle } from "../ThemeToggle";

const Navbar = () => {
  return (
    <nav className="shadow bg-secondary">
      <div className="container flex gap-2 justify-between items-center">
        <Link href="/">Notes</Link>
        <ul className="flex gap-2 justify-between items-center">
          <li>
            <ThemeToggle />
          </li>
          <li>
            <Link href="/signin">SignIn</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

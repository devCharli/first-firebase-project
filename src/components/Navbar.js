import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import ToggleBtn from "./Toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-2 pr-4 md:pr-10">
      {/* title */}
      <div className="flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold p-4">
          <h1>My Wallet</h1>
        </Link>
        <div className="md:hidden flex items-center">
          <ToggleBtn />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="hidden md:flex md:items-center">
          <ToggleBtn />
          <Menu />
        </div>
      </div>
      {/* mobile */}
      <div className="flex justify-center">
        {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </nav>
  );
};

export default Navbar;

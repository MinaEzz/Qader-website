import { useState } from "react";
import Searchbar from "../Searchbar";
import MobileNavbar from "./MobileNavbar";
import NavigationLink from "./NavigationLink";
import { NAVLINKS } from "../../constants";
import { FiAlignJustify } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/images/logo/logoBlue.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-white min-h-[70px] py-3 flex items-center justify-center max-lg:flex-col transition-all ease-in-out duration-500 sticky top-0 z-40 shadow-md"
      aria-label="Main Navigation"
    >
      <div className="container flex justify-between items-center gap-4">
        <Link to="/" className="w-[80px] h-[75px]">
          <img src={logo} alt="Qader Website" draggable={false} />
        </Link>
        <button
          className="max-lg:block hidden transition-all ease-in-out"
          onClick={toggleNavbar}
          aria-label={`${isOpen ? "Close" : "Open"}`}
        >
          {isOpen ? (
            <IoClose
              title="Close Navigation Menu Icon"
              fontSize={36}
              className="text-primary-600"
            />
          ) : (
            <FiAlignJustify
              title="Navigation Menu Icon"
              fontSize={36}
              className="text-primary-600"
            />
          )}
        </button>
        <div className="flex flex-1 items-center gap-2 max-lg:hidden">
          <Searchbar />
          <ul className="flex items-center gap-4">
            {NAVLINKS.map((link) => {
              return (
                <li key={link.title}>
                  <NavigationLink path={link.path} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <MobileNavbar isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;

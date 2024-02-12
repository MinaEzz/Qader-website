import { useState } from "react";
import Searchbar from "../Searchbar";
import MobileNavbar from "./MobileNavbar";
import NavigationLink from "./NavigationLink";
import { NAVLINKS } from "../../constants";
import { FiAlignJustify } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white min-h-[70px] py-2 flex items-center justify-center max-lg:flex-col transition-all ease-in-out duration-500 sticky top-0 z-40">
      <div className="container flex justify-between items-center gap-2">
        <div className=" flex-initial">
          <img src="" alt="Qader Website" />
        </div>
        <button
          className="max-lg:block hidden transition-all ease-in-out"
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <IoClose
              title="Close Navigation Menu Icon"
              fontSize={32}
              className="text-primary"
            />
          ) : (
            <FiAlignJustify
              title="Navigation Menu Icon"
              fontSize={32}
              className="text-primary"
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

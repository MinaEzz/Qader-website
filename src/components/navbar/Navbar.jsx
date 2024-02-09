import { FiAlignJustify } from "react-icons/fi";
import { IoSunnyOutline, IoMoonOutline, IoClose } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Searchbar from "../Searchbar";
import MobileNavbar from "./MobileNavbar";
import NavigationLink from "./NavigationLink";
import { Link } from "react-router-dom";
import { NavbarLinks } from "../../constants/NavbarLinks";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  // dark mode w an2l el navbar bta3 el aghza elso8yra fe component lw7do
  return (
    <header className="fixed w-[100dvw] min-h-[72px] py-4 flex justify-center items-center bg-primary shadow-xl max-lg:px-8 max-lg:flex-col">
      <div className="container flex justify-between items-center flex-wrap">
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
              color="white"
            />
          ) : (
            <FiAlignJustify
              title="Navigation Menu Icon"
              fontSize={32}
              color="white"
            />
          )}
        </button>
        <div className="flex flex-1 items-center max-lg:hidden">
          <Searchbar />
          <nav className="flex-1 px-3">
            <ul className="flex items-center gap-4">
              {NavbarLinks.map((link) => {
                return (
                  <li key={link.title}>
                    <NavigationLink path={link.path} title={link.title} />
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="bg-neutral-00 flex flex-initial gap-3">
            <div className="rounded-full text-center h-fit">
              <Link to="/profile">
                {/* <img
                  className="rounded-full "
                  src=""
                  alt="Avatar"
                  sizes={32}
                  width={34}
                  height={34}
                /> */}
                <FaUserCircle fontSize={30} className="text-white" />
              </Link>
            </div>
            <div className="relative rounded-full text-center h-fit">
              <Link to="/checkout">
                <MdOutlineShoppingCart
                  fontSize={30}
                  title="Checkout"
                  color="white"
                />
                <div className="absolute top-1/2 -translate-y-full -right-2 text-center bg-redColor rounded-full w-6 h-6">
                  <span className="text-sm font-thick text-white">0</span>
                </div>
              </Link>
            </div>
            <button>
              <IoMoonOutline fontSize={18} color="white" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && <MobileNavbar isOpen={isOpen} />}
    </header>
  );
};

export default Navbar;

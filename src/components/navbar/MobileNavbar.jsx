import Searchbar from "../Searchbar";
import NavigationLink from "./NavigationLink";
import { NavbarLinks } from "../../constants/NavbarLinks";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

const MobileNavbar = () => {
  return (
    <div className="max-lg:block lg:hidden container p-2 rounded-2xl">
      <div className="flex flex-1 flex-col gap-4">
        <Searchbar />
        <nav className="flex-1">
          <ul className="flex flex-col items-center gap-4">
            {NavbarLinks.map((link) => {
              return (
                <li key={link.title}>
                  <NavigationLink path={link.path} title={link.title} />
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center justify-center gap-3">
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
  );
};

export default MobileNavbar;

import { FiAlignJustify } from "react-icons/fi";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <header className="fixed w-[100dvw] py-6  bg-red-400 ">
      <div className="container flex justify-between items-center">
        <div className="bg-green-400 flex-initial">logo</div>
        <button>
          <FiAlignJustify
            className="lg:hidden"
            title="Navigation Menu Icon"
            fontSize={32}
          />
        </button>

        <div className="flex flex-1 ">
          <Searchbar />
          <nav className="bg-green-500 flex-1">nav</nav>

          <div className="bg-neutral-200 flex-initial">
            <div>profile cart</div>
            <div>darkmode</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

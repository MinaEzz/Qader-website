import Searchbar from "../Searchbar";
import NavigationLink from "./NavigationLink";
import { NAVLINKS } from "../../constants";

const MobileNavbar = (probs) => {
  return (
    <div
      className={`container lg:hidden p-2 rounded-2xl transition-all ease-in-out duration-500 ${
        probs.isOpen ? " block opacity-100 w-full" : "hidden opacity-0 w-0 h-0"
      }`}
    >
      <div className="flex flex-1 flex-col gap-4 ">
        <Searchbar />
        <nav className="flex-1" aria-label="Main Navigation">
          <ul className="flex flex-col items-center gap-4">
            {NAVLINKS.map((link) => {
              return (
                <li key={link.title}>
                  <NavigationLink path={link.path} title={link.title} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;

import { NavLink } from "react-router-dom";

const NavigationLink = (probs) => {
  return (
    <NavLink
      to={probs.path}
      className="capitalize text-white text-md font-medium after:w-0 after:h-[2px] after:block after:mt-[1px] after:bg-white hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out"
    >
      {probs.title}
    </NavLink>
  );
};

export default NavigationLink;

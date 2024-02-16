import { CATEGORIES } from "../../constants";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <aside className="bg-white w-1/5 max-lg:w-full h-fit lg:rounded-xl py-4 shadow-md">
      <h3 className="text-center text-primary capitalize text-3xl font-medium">
        categories
      </h3>
      <div className="relative w-[40%] max-lg:w-[20%] h-[2px] bg-slate-700 mx-auto mt-4 flex justify-center items-center">
        <div className="absolute w-3 h-3 border border-slate-700 bg-white rounded-full"></div>
      </div>
      <ul className="flex flex-1 flex-col max-lg:flex-row gap-4 max-lg:gap-8 mt-4 overflow-auto">
        {CATEGORIES.map((category) => {
          return (
            <li
              className="flex items-center flex-1 text-xl font-medium capitalize text-slate-700 py-2 max-lg:text-center hover:text-primary transition-all ease-in-out duration-500 last:rounded-br-3xl"
              key={category.title}
            >
              <Link
                className="w-full px-4"
                to={`/products${category.url}/${category.title}`}
              >
                {category.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Categories;

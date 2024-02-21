import { Button } from "..";
import { FaPlus } from "react-icons/fa6";

const ProductCard = ({ ...product }) => {
  return (
    <li className="bg-white shadow-lg hover:shadow-2xl transition-all p-4 text-sm w-[250px] rounded-xl">
      <div className="flex justify-between items-center">
        <b className="bg-slate-600 rounded-xl py-1 px-2 text-white">
          ${product.price}
        </b>
        <b
          className={` ${
            product.available ? "bg-emerald-400" : "bg-red-400"
          }  rounded-xl py-1 px-2 text-white`}
        >
          {product.available ? "Available" : "Out of stock"}
        </b>
      </div>

      <div className="w-full h-[180px] mt-2">
        <img className="" src={product.image} alt="product image" />
      </div>

      <div className="flex flex-col gap-2 justify-center items-center">
        <h4 className="text-center text-2xl capitalize font-medium text-primary-600">
          {`${product.name.slice(0, 26)}`}
        </h4>
        <p className="text-center text-base text-slate-700">
          {`${product.description.slice(0, 120)}...`}
        </p>
        <div className="flex items-center justify-between w-full gap-8">
          <Button
            label={<FaPlus fontSize={20} />}
            backgroundColor="bg-slate-700"
            hoverBgColor="hover:bg-slate-800"
            activeBgColor="active:bg-slate-900"
            fontSize="text-base"
            height="h-10"
          />
          <Button
            label={"details"}
            fontSize="text-base"
            height="h-10"
            url={`/product/${product.id}`}
          />
        </div>
      </div>
    </li>
  );
};

export default ProductCard;

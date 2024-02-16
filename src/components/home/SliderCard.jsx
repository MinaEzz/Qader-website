import { Link } from "react-router-dom";

const SliderCard = ({ productImg, productName, productPrice, productURL }) => {
  return (
    <div className="w-full min-h-[305px] flex flex-col justify-between rounded-lg p-2">
      <div className="w-full h-40">
        <img
          className="rounded-lg"
          src={productImg}
          alt="product image"
          loading="lazy"
        />
      </div>
      <div className="flex justify-between items-end ">
        <div className="flex flex-1 flex-col">
          <h3 className="text-sm capitalize font-bold text-slate-700">
            {productName.slice(0, 28)}
          </h3>
          <p className=" text-xs font-bold text-primary">${productPrice}</p>
        </div>
        <Link
          to={productURL}
          className="text-sm bg-primary text-white capitalize py-1 px-2 rounded-lg"
        >
          view details
        </Link>
      </div>
    </div>
  );
};

export default SliderCard;

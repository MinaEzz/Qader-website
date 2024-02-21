// import { Link } from "react-router-dom";
import { Button } from "..";

const SliderCard = ({ productImg, productName, productPrice, productURL }) => {
  return (
    <div className="w-full min-h-[305px] flex flex-col justify-between rounded-lg p-2">
      <div className="w-full h-[160px]">
        <img
          className="rounded-lg"
          src={productImg}
          alt="product image"
          loading="lazy"
        />
      </div>
      <div className="flex justify-between items-end ">
        <div className="flex flex-1 w-full flex-col">
          <h3 className="text-base capitalize font-bold text-slate-700">
            {productName.slice(0, 28)}
          </h3>
          <p className=" text-sm font-bold text-primary-600">${productPrice}</p>
        </div>
        <Button
          label="shop now"
          url={`product/${productURL}`}
          fontSize="text-sm"
          height="h-8"
          width="w-fit"
        />
      </div>
    </div>
  );
};

export default SliderCard;

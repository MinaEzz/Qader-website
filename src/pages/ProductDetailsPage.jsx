import { useEffect, useContext, useState } from "react";
import { ProductsContext } from "../context/getProducts";
import { useParams } from "react-router-dom";
import { QuantitySelector, ProductFeedback, ProductRates } from "../components";
import { FaCartArrowDown } from "react-icons/fa6";

const ProductDetailsPage = () => {
  // ht3ml fetch ll api ely bygeb product wa7d w tb3tlo mn el params el product id
  const products = useContext(ProductsContext);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const matchedProduct = products.find(
    (p) => p.id === parseInt(params.productID)
  );
  useEffect(() => {
    document.title = matchedProduct.name;
    window.scrollTo(0, 0);
  }, [matchedProduct]);

  return (
    <section className="min-h-[100dvh] pd-y">
      <div className="container flex flex-col gap-4">
        <div className="w-full flex justify-between max-lg:flex-col gap-4">
          <div className="flex-1 w-full h-[400px]">
            <img src={matchedProduct.image} alt={matchedProduct.name} />
          </div>
          <div className="w-full flex flex-1 flex-col gap-4">
            <h3 className="text-primary-600 text-3xl font-bold capitalize">
              {matchedProduct.name}
            </h3>
            <ProductRates stars={2.3} />
            <p className="text-stone-600 text-base">
              {matchedProduct.description}
            </p>
            <p className="text-primary-600 font-bold text-xl">
              ${matchedProduct.price}
            </p>
            <div className="w-full flex items-center gap-2">
              <p className="text-lg capitalize text-slate-700 dark:text-slate-600">
                select the quantity
              </p>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </div>
            <button className="w-full h-14 flex items-center justify-center gap-1 rounded-xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all text-xl capitalize font-medium text-white">
              add to cart
              <FaCartArrowDown fontSize={24} />
            </button>
          </div>
        </div>
        <ProductFeedback />
      </div>
    </section>
  );
};

export default ProductDetailsPage;

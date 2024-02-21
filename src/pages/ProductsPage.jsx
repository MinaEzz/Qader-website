import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { OurTitle, ProductCard } from "../components";
import { ProductsContext } from "../context/getProducts";

const ProductsPage = () => {
  const products = useContext(ProductsContext);
  console.log(products);
  const params = useParams();
  useEffect(() => {
    document.title = `${
      params.categoryTITLE === "all"
        ? "Our Products"
        : `Products Of ${params.categoryTITLE}`
    }`;
  }, [params.categoryTITLE]);

  return (
    <section className="min-h-[100dvh] pd-y">
      <OurTitle
        title={`${
          params.categoryTITLE !== "all"
            ? `${params.categoryTITLE} products`
            : "products"
        }`}
      />
      <div className="container ">
        <ul className=" pd-y-s flex gap-8 flex-wrap items-center justify-around">
          {products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProductsPage;

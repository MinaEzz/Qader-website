import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { OurTitle, ProductCard } from "../components";
import { useContext } from "react";
import { ProductsContext } from "../context/getProducts";

const ProductsPage = () => {
  const productData = useContext(ProductsContext);
  console.log(productData);
  const params = useParams();
  useEffect(() => {
    document.title = `products of ${params.categoryTITLE}`;
  }, [params.categoryTITLE]);

  return (
    <section className="min-h-[100dvh] pd-y">
      <OurTitle title={`${params.categoryTITLE} products`} />
      <div className="container mt-8">
        <ul className="flex gap-5 flex-wrap items-center justify-between">
          {productData.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProductsPage;

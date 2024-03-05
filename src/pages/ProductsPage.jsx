import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { OurTitle, Pagination, ProductCard } from "../components";
import { ProductsContext } from "../context/getProducts";
// import useProductAPI from "../custom hooks/useProductAPI";

const ProductsPage = () => {
  const products = useContext(ProductsContext);
  const { categoryID, categoryTITLE } = useParams();
  useEffect(() => {
    document.title = `${
      categoryTITLE ? `Products Of ${categoryTITLE}` : "Our Products"
    }`;
    window.scrollTo(0, 0);

    // if (categoryID) {
    //   fetchProductsByCategory(categoryID);
    // } else {
    //   // Fetch all products when no category is specified
    //   fetchAllProducts();
    // }
  }, [categoryID, categoryTITLE]);
  return (
    <section className="min-h-[100dvh] pd-y">
      <OurTitle
        title={`${categoryTITLE ? `${categoryTITLE} products` : "products"}`}
      />
      <div className="container ">
        <ul className="pd-y-s flex gap-8 flex-wrap items-center justify-around">
          {products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </ul>
        <Pagination />
      </div>
    </section>
  );
};

export default ProductsPage;

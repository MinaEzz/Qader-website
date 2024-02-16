import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { OurTitle } from "../components";

const ProductsPage = () => {
  const params = useParams();
  console.log(params);
  useEffect(() => {
    document.title = `products of ${params.categoryTITLE}`;
  }, [params.categoryTITLE]);

  return (
    <section className="min-h-[100dvh] pd-y">
      <OurTitle title={"products"} />
      <div className="container">
        <section>products of {params.categoryTITLE}</section>
      </div>
    </section>
  );
};

export default ProductsPage;

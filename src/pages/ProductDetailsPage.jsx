import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();
  console.log(params.productID);

  return <div>Product with ID {params.productID} details</div>;
};

export default ProductDetailsPage;

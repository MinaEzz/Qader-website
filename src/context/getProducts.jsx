import { createContext, useState, useEffect } from "react";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const BASE_URL = "http://localhost:5000";
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      if (response.ok) {
        console.log("Promise resolved and HTTP status is successful");
        const data = await response.json();
        setProducts(data);
        console.log(products);
      } else {
        // Custom message for failed HTTP codes
        if (response.status === 404) throw new Error("404, Not found");
        if (response.status === 500)
          throw new Error("500, internal server error");
        // For any other server error
        throw new Error(response.status);
      }
    } catch (error) {
      console.error("Fetch", error);
      // Output e.g.: "Fetch Error: 404, Not found"
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}
export { ProductsContext, ProductsProvider };

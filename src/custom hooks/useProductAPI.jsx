// useProductAPI.js
import { useState, useEffect } from "react";

const useProductAPI = () => {
  const BASE_URL = "http://localhost:5000";
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [productDetails, setProductDetails] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all categories
    fetch("/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error))
      .finally(() => setLoading(false));

    // Fetch products by category
    fetchProductsByCategory();

    // Fetch product details
    fetchProductDetails();

    // Fetch all products
    fetchAllProducts();
  }, []); // Dependency array ensures these fetches run only once on component mount

  const fetchProductsByCategory = async (categoryId) => {
    try {
      const response = await fetch(`/api/products/${categoryId}`);
      const data = await response.json();
      setProductsByCategory((prevProducts) => ({
        ...prevProducts,
        [categoryId]: data,
      }));
    } catch (error) {
      console.error(
        `Error fetching products for category ${categoryId}:`,
        error
      );
    }
  };

  const fetchProductDetails = async (productId) => {
    try {
      const response = await fetch(`/api/products/${productId}`);
      const data = await response.json();
      setProductDetails((prevDetails) => ({
        ...prevDetails,
        [productId]: data,
      }));
    } catch (error) {
      console.error(
        `Error fetching product details for product ${productId}:`,
        error
      );
    }
  };

  const fetchAllProducts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching all products:", error);
    }
  };

  return {
    categories,
    productsByCategory,
    productDetails,
    allProducts,
    loading,
    fetchProductsByCategory,
    fetchProductDetails,
    fetchAllProducts,
  };
};

export default useProductAPI;

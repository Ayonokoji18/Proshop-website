import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/productcard.js";

function HomeScreen() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setproducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;

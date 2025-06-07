import products from "../data/products.js";
import ProductCard from "../components/productcard.js";

function HomeScreen() {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;

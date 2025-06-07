import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="col-md-4 mb-5 ">
      <div className="card h-100">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name} </h5>
          <p className="card-text text-primary fw-bold">
            {product.price}{" "}
            <span className="ms-auto">rating : {product.rating} </span>
          </p>

          <Link
            to={`/product/${product._id}`}
            className="btn btn-outline-primary mt-auto card-btn"
          >
            {" "}
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

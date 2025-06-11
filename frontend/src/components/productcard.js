import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/rating.js";

function ProductCard({ product }) {
  return (
    <div className="col-md-4 mb-5">
      <div className="card h-100">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{ height: "300px", objectFit: "cover", width: "auto" }}
        />
        <div className="card-body d-flex flex-column">
          <h5> {product.name}</h5>
          <p>
            {product.price} |{" "}
            <span>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              ></Rating>
            </span>
          </p>
          <Link
            to={`product/${product._id}`}
            className="btn btn-outline-success"
          >
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;

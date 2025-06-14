import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/rating.js";

function ProductCard({ product }) {
  return (
    <div className="col-md-4 mb-5">
      <Link
        to={`product/${product._id}`}
        className="text-decoration-none text-dark"
      >
        <div className="card h-100">
          <img
            src={product.image}
            alt={product.name}
            className="card-img-top"
            style={{ height: "300", objectFit: "cover", width: "100%" }}
          />
          <div className="card-body d-flex flex-column">
            <h5>{product.name}</h5>
            <p>
              {" "}
              ${product.price} |
              <span>
                <Rating
                  value={product.rating}
                  text={`${product.numReview} reviews`}
                />
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;

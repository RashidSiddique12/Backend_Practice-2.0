import React from "react";
import "./Product.css";

const Product = ({
  title,
  _id,
  thumbnail,
  price,
  discountPercentage,
  rating,
  handleDelete,
  category,
  brand,
}) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="image-container">
                <div className="first">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="discount">-{discountPercentage}%</span>
                    <span className="wishlist">
                      <i
                        className="fa fa-heart-o"
                        onClick={() => {
                          handleDelete(_id);
                        }}
                      ></i>
                    </span>
                  </div>
                </div>

                <img
                  src={thumbnail}
                  className="img-fluid rounded thumbnail-image"
                  alt={title}
                />
              </div>

              <div className="product-detail-container p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="dress-name">{title}</h5>

                  <div className="d-flex flex-column mb-2">
                    <span className="new-price" style={{ color: "red" }}>
                      &#8377;
                      {Math.floor(price - (price * discountPercentage) / 100)}
                    </span>
                    <small className="old-price text-right">
                      &#8377;{price}
                    </small>
                  </div>
                </div>
                <div>
                  <h6>{brand}</h6>
                  <h6>{category}</h6>
                </div>

                <div className="d-flex justify-content-between align-items-center pt-1">
                  <div>
                    <i className="fa fa-star-o rating-star"></i>
                    <span className="rating-number">{rating}</span>
                  </div>

                  <span className="buy">BUY +</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

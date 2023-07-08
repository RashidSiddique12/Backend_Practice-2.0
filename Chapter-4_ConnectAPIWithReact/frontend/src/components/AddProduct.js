import React, { useState } from "react";
import axios from "axios";
const AddProduct = () => {
  const [product, setProduct] = useState({});
  const [alertTitle, setAlertTitle] = useState("");

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "title") {
      setAlertTitle(e.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(product);
    addProduct(product);
    alert(`${alertTitle} Product Added`);
  };

  const addProduct = async (product) => {
    const res = await axios.post("/products", product);
    console.log(res.data);
  };

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
        <form onSubmit={handleSubmit}>
          <h2>Add Product</h2>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              // value={title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              // value={price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="thumbnail">Thumbnail URL:</label>
            <input
              type="text"
              className="form-control"
              id="thumbnail"
              name="thumbnail"
              // value={thumbnail}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="discountPercentage">Discount Percentage:</label>
            <input
              type="number"
              className="form-control"
              id="discountPercentage"
              name="discountPercentage"
              // value={discountPercentage}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              className="form-control"
              id="rating"
              name="rating"
              // value={rating}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="brand">Brand:</label>
            <input
              type="text"
              className="form-control"
              id="brand"
              name="brand"
              // value={brand}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              className="form-control"
              id="category"
              name="category"
              // value={category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Phone">Phone</option>
              <option value="Laptop">Laptop</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Add to Database
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

function ProductsList() {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const res = await axios.get("/products");
    console.log(res.data);
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(`/products/${id}`);
    console.log(res.data);

    if (res.data) {
      setProducts(products.filter((p) => p._id !== res.data._id));
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {products.map((product, index) => (
        <Product {...product} key={index} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ProductsList;

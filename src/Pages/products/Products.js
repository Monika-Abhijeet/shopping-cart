import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      console.log(res.data);
      const productList = res.data.slice(0, 10);
      setProducts(productList);
      console.log(productList);
    });
  }, []);
  return (
    <div>
      {products.map((product) => {
        return (
          <div className="card">
            <img src={product.url} width="180px" height="180px" />
            <p className="product-desc">{product.title}</p>
            <button class="btn btn-success btn-cart">Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

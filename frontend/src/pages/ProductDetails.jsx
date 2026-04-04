import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams(); // ✅ get ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("Product ID:", id);

    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => {
        console.log("Product Data:", res.data);
        setProduct(res.data);
      })
      .catch(err => console.log(err));

  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>

      <img
        src={product.image}
        alt=""
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <p style={{ fontSize: "20px", color: "green" }}>
        ₹{product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "10px 15px",
          background: "#4FBBC3",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
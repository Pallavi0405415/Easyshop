import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = ({ addToCart }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // ✅ Fetch from backend
  useEffect(() => {
      axios.get("https://mini-project-waf-2.onrender.com/api/products")
        .then(res => {
          setProducts(res.data);
        })
        .catch(err => console.log(err));
    }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Latest Products</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
      }}>
       
        {products.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #eee",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onClick={() => navigate(`/product/${item._id}`)}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={item.image}
              alt=""
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />

            <h4 style={{ margin: "10px 0" }}>{item.name}</h4>

            <p style={{ color: "green", fontWeight: "bold" }}>
              ₹{item.price}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(item);
              }}
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                background: "#4FBBC3",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Home;
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = ({ addToCart }) => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

useEffect(() => {
  axios.get("https://mini-project-waf-2.onrender.com/api/products")
    .then(res => {
      setProducts(res.data);
      setFilteredProducts(res.data); // ✅ IMPORTANT
    })
    .catch(err => console.log(err));
}, []);
  
const handleSearch = (e) => {
  const value = e.target.value;
  setSearch(value);

  const filtered = products.filter(item =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  setFilteredProducts(filtered);
};
  // ✅ Search Function
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filtered = products.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2 style={{ marginBottom: "20px" }}>Latest Products</h2>

      {/* 🔍 SEARCH BAR */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={handleSearch}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      {/* 💡 RECOMMENDATION SECTION */}
      <h3 style={{ margin: "20px 0" }}>Recommended for You</h3>

      <div style={{
        display: "flex",
        gap: "15px",
        overflowX: "auto",
        marginBottom: "30px"
      }}>
        {products.slice(0, 5).map((item) => (
          <div
            key={item._id}
            style={{
              minWidth: "150px",
              border: "1px solid #eee",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center"
            }}
          >
            <img
              src={item.image}
              alt=""
              style={{ width: "100%", height: "100px", objectFit: "cover" }}
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      {/* 🛍 PRODUCT GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
      }}>
       
        {filteredProducts.map((item) => (
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
                background: "#ff6b6b",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => e.target.style.background = "#ff4d4d"}
              onMouseLeave={(e) => e.target.style.background = "#ff6b6b"}
            >
              Add to Cart 🛒
            </button>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Home;

import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <div style={{
      padding: "15px 30px",
      background: "#4FBBC3",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white"
    }}>

      {/* LOGO */}
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h2>🛒 ShopEasy</h2>
      </Link>

      {/* NAVIGATION */}
      <div style={{display:"flex", gap:"20px", alignItems:"center"}}>

        <Link 
          to="/login" 
          style={{ textDecoration: "none", color: "white", fontSize: "16px" }}
        >
          Login
        </Link>

        <Link 
          to="/register" 
          style={{ textDecoration: "none", color: "white", fontSize: "16px" }}
        >
          Register
        </Link>

        <Link 
          to="/cart" 
          style={{ textDecoration: "none", color: "white", fontSize: "18px" }}
        >
          🛍️ Cart ({cartCount})
        </Link>

      </div>

    </div>
  )
}

export default Navbar
import React from "react";

const Cart = ({ cart, removeFromCart, increaseQty, decreaseQty }) => {

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #eee",
                padding: "10px",
                margin: "10px 0",
                borderRadius: "10px"
              }}
            >
              <img
                src={item.image}
                alt=""
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />

              <h4>{item.name}</h4>

              <p>₹{item.price}</p>

              {/* ➕➖ Quantity Controls */}
              <div>
                <button onClick={() => decreaseQty(item._id)}>-</button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => increaseQty(item._id)}>+</button>
              </div>

              <p>₹{item.price * item.quantity}</p>

              {/* ❌ Remove */}
              <button
                onClick={() => removeFromCart(item._id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px"
                }}
              >
                Remove
              </button>
            </div>
          ))}

          {/* 💰 TOTAL */}
          <h3 style={{ marginTop: "20px" }}>
            Total: ₹{totalPrice}
          </h3>

          {/* 🧾 CHECKOUT BUTTON */}
          <button
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "5px"
            }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

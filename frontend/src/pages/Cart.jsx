import React from 'react'

const Cart = ({ cart, removeFromCart, increaseQty, decreaseQty }) => {

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item._id} style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginTop: "10px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>

            {/* LEFT SIDE */}
            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>

              <p>
                ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
              </p>

              <div>
                {/* ✅ FIXED HERE */}
                <button onClick={() => decreaseQty(item._id)}>-</button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => increaseQty(item._id)}>+</button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <button
              onClick={() => removeFromCart(item._id)}
              style={{
                padding: "5px 10px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Remove
            </button>

          </div>
        ))
      )}

      <h3 style={{ marginTop: "20px" }}>
        Total: ₹{totalPrice}
      </h3>
    </div>
  )
}

export default Cart
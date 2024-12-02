// src/components/Cart.js
import React from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalCost } = useCart();

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Total: ${item.price * item.quantity}</p>
                  <div>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total Cost: ${totalCost}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;

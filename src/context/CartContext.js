// src/context/CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to the cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Update product quantity
  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate total cost
  const totalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, totalCost }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

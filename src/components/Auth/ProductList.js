import React, { useState } from "react";
import products from "../../data/Products"; // Assuming products data is stored in data folder
import { useCart } from "../../context/CartContext"; // Context for cart functionality
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./ProductList.css";

const ProductList = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [clickedButtons, setClickedButtons] = useState({}); // Track clicked button states

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart

    // Toggle button state for the clicked product
    setClickedButtons((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));

    // Redirect to the Cart page
    setTimeout(() => {
      navigate("/cart");
    }, 500); // Add slight delay for UX
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button
            className={clickedButtons[product.id] ? "clicked" : ""}
            onClick={() => handleAddToCart(product)}
            disabled={clickedButtons[product.id]} // Disable button after click
          >
            {clickedButtons[product.id] ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

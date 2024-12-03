import React, { useState } from "react";
import products from "../../data/Products"; 
import { useCart } from "../../context/CartContext"; 
import { useNavigate } from "react-router-dom"; 
import "./ProductList.css";

const ProductList = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate(); 
  const [clickedButtons, setClickedButtons] = useState({}); 

  const handleAddToCart = (product) => {
    addToCart(product); 

    
    setClickedButtons((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));

    
    setTimeout(() => {
      navigate("/cart");
    }, 500); 
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
            disabled={clickedButtons[product.id]} 
          >
            {clickedButtons[product.id] ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

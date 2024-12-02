// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Auth/Login"; // Corrected path
import Register from "./components/Auth/Register"; // Corrected path
import Home from "./components/Home"; // Corrected path
import ProductList from "./components/Auth/ProductList"; // Corrected path
import Cart from "./components/Cart";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />        {/* Home Page Route */}
          <Route path="/login" element={<Login />} />  {/* Login Page Route */}
          <Route path="/register" element={<Register />} />  {/* Register Page Route */}
          <Route path="/ProductList" element={<ProductList />} />  {/* Product List Page Route */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

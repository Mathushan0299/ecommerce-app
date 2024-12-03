import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Auth/Login"; 
import Register from "./components/Auth/Register"; 
import Home from "./components/Home"; 
import ProductList from "./components/Auth/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />        
          <Route path="/login" element={<Login />} />  
          <Route path="/register" element={<Register />} />  
          <Route path="/ProductList" element={<ProductList />} />  
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

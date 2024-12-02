// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";  // Correct import

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();  // Check if the user is logged in
  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

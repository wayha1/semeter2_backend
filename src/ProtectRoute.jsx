import React, { useCallback, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useAuthContext from "./Components/context/AuthContext";

const ProtectRoute = ({ children }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const navigateUser = useCallback(() => {
    if (user && user.role === "admin") {
      return "/dashboard";
    } else if (user && user.role !== "admin") {
      return "/";
    } else {
      navigate("/login");
      return null; // Ensure to return null after navigating
    }
  }, [user, navigate]);

  useEffect(() => {
    navigateUser();
  }, [navigateUser]);

  return user && user.role === "admin" ? children : <Navigate to="/login" />;
};

export default ProtectRoute;

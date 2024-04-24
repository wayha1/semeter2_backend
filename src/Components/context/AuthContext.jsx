import { createContext, useContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token available");
      }

      const { data } = await axios.get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(data);
    } catch (error) {
      handleAuthError(error);
    }
  };

  const signin = async (data) => {
    try {
      const response = await axios.post("/login", data);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        await getUser();
        navigate("/");
      } else {
        setError("Unexpected error occurred during login.");
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  const signup = async (data) => {
    try {
      const response = await axios.post("/register", data);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        await getUser();
        navigate("/");
      } else {
        setError("Unexpected error occurred during signup.");
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        // No token available, assume the user is already logged out
        setUser(null);
        navigate("/login");
        return;
      }
      
      // Remove token from localStorage before making the logout request
      localStorage.removeItem("token");
  
      await axios.post(
        "/logout",
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Logout successful, remove token from localStorage and reset user state
      localStorage.removeItem("token");
      setUser(null);
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Unauthorized, assume the user is already logged out
        setUser(null);
        navigate("/login");
      } else {
        // Other errors, handle as necessary
        setError("Error logging out. Please try again.");
        console.error("Error logging out:", error);
      }
    }
  };
   
  const handleAuthError = (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        setError("Unauthorized access. Please log in again.");
      } else if (error.response.status === 422) {
        setError(error.response.data.error);
      } else {
        setError("Error occurred. Please try again later.");
      }
    } else {
      setError("Network error occurred. Please try again later.");
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, error, getUser, signin, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}

// AuthProvider.js

import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = Cookies.get("token");
        if (token) {
          // Token exists, fetch user data
          const { data } = await axios.get("/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
        } else {
          // No token available
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setUser(null);
      }
    };

    checkAuth();
  }, []);


  const getUser = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("No token available");
      }

      const { data } = await axios.get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Fetched user:", data); // Log the fetched user object
      setUser(data);
    } catch (error) {
      handleAuthError(error);
    }
  };

  const signin = async (data) => {
    try {
      const response = await axios.post("/login", data);
      if (response.status === 200) {
        // Set token cookie
        Cookies.set("token", response.data.token, { expires: 7 });
        
        // Set user name cookie
        Cookies.set("username", response.data.user.name, { expires: 7 });
  
        // Fetch user data
        await getUser();
  
        // Redirect to home page
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
        Cookies.set("token", response.data.token, { expires: 7 }); 
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
      const token = Cookies.get("token");
      if (!token) {
        setUser(null);
        navigate("/login");
        return;
      }

      Cookies.remove("token");
      Cookies.remove("username");
      await axios.post("/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(null);
      navigate("/login");
    } catch (error) {
      handleAuthError(error);
    }
  };
   
  const handleAuthError = (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // setError("Unauthorized access. Please log in again.");
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

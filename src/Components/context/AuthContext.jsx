import { createContext, useContext, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // const csrf = () => axios.get("sanctum/csrf-cookie");

  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const { data } = await axios.get("/user");
      setUser(data);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setError(error.response.data.error);
      } else {
        setError("Email or password incorrect! Please try again.");
      }
      setUser(null);
    }
  };

  const signin = async (data) => {
    // await csrf();
    try {
      await axios.post("/login", data);
      getUser();
      navigate("/");
    } catch (error) {
      if (error.response.status === 422) {
        setError(error.response.data.error);
      } else {
        setError("Email or password incorrect! Please try again.");
      }
    }
  };

  const signup = async (data) => {
    try {
      await axios.post("/register", data);
      getUser();
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setError(error.response.data.error);
      } else {
        setError("Error signing up! Please try again.");
      }
    }
  };

  const logout = async () => {
    try {
      await axios.post("/logout");
      setUser(null);
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // User is not authenticated, so we treat it as a successful logout
        setUser(null);
        navigate("/login");
      } else if (error.response && error.response.status === 422) {
        setError(error.response.data.error);
      } else {
        console.error("Error logging out:", error);
      }
    }
  };
  

  return (
    <AuthContext.Provider value={{ user, error, getUser, signin, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}

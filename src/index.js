import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./Components/context/AuthContext";
// import store from './Routes/store';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
    <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
  // </Provider>
  
);

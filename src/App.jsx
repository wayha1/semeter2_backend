import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "./Components/SignIn/SignIn";
import SIgnUp from "./Components/SignUp/SIgnUp";
import HomePage from "./Components/Home/HomePage";
import Navbar from "./Navbar/Navbar";
import Shop from "./Components/Cart/Shop";
import AboutUs from "./Components/About/AboutUs";
import ContactUs from "./Components/Contact/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <HomePage />
            </div>
          }
        />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SIgnUp />} />
        <Route
          path="/shop"
          element={
            <div>
              <Navbar />
              <Shop />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <Navbar />
              <AboutUs />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Navbar />
              <ContactUs />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

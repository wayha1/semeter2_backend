import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./Components/About/AboutUs";
import Shop from "./Components/Cart/Shop";
import ContactUs from "./Components/Contact/ContactUs";
import HomePage from "./Components/Home/HomePage";
import Navbar from "./Components/Share/Navibar";
import { SignIn } from "./Components/SignIn/SignIn";
import SIgnUp from "./Components/SignUp/SIgnUp";
import Footer from "./Footer/Footer";

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
              <Footer/>
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
              <Footer/>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <Navbar />
              <AboutUs />
              <Footer/>
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Navbar />
              <ContactUs />
              <Footer/>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

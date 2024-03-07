import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./Components/About/AboutUs";
import { Cart } from "./Components/Cart/Cart";
import ContactUs from "./Components/Contact/ContactUs";
import Setting from "./Components/Profile/Setting";
import Shop from "./Components/Shop/Shop";
import { SignIn } from "./Components/Auth/SignIn/SignIn";
import SIgnUp from "./Components/Auth/SignUp/SIgnUp";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Billing from "./Pages/Account/Billing";
import Order from "./Pages/Account/Order";
import Profile from "./Pages/Account/Profile";
import HomePage from "./Pages/Homepage";

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
              <Footer />
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
              <Footer />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <Navbar />
              <AboutUs />
              <Footer />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Navbar />
              <ContactUs />
              <Footer />
            </div>
          }
        />
        <Route
          path="/setting"
          element={
            <div>
              <Navbar />
              <Setting />
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div>
              <Navbar />
              <Profile />
            </div>
          }
        />
        <Route
          path="/billing"
          element={
            <div>
              <Navbar />
              <Billing />
            </div>
          }
        />
        <Route
          path="/order"
          element={
            <div>
              <Navbar />
              <Order />
            </div>
          }
        />
        <Route
          path="/cart"
          element={
            <div>
              <Navbar />
              <Cart />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

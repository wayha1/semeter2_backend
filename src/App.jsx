import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./Components/About/AboutUs";
import { SignIn } from "./Components/Auth/SignIn/SignIn";
import SIgnUp from "./Components/Auth/SignUp/SIgnUp";
import { Cart } from "./Components/Cart/Cart";
import ContactUs from "./Components/Contact/ContactUs";
import Favorite from "./Components/Favorite/Favorite";
import Setting from "./Components/Profile/Setting";
import Contact from "./Dashboard/Contact";
import Dashboard from "./Dashboard/DashboardLayout";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Billing from "./Pages/Account/Billing";
import Order from "./Pages/Account/Order";
import Profile from "./Pages/Account/Profile";
import HomePage from "./Pages/Homepage";
import Shop from "./Pages/Shoppage";

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
          path="/dashboard/contacts"
          element={
            <div>
              <Contact />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div>
              <Dashboard />
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
        <Route
          path="/favorite"
          element={
            <div>
              <Navbar />
              <Favorite />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

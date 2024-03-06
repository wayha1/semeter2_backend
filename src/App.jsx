import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./Components/About/AboutUs";
import Shop from "./Components/Shop/Shop";
import ContactUs from "./Components/Contact/ContactUs";
import HomePage from "./Components/Home/HomePage";
import Setting from "./Components/Profile/Setting";
import Navbar from "./Components/Shared/Navibar";
import { SignIn } from "./Components/SignIn/SignIn";
import SIgnUp from "./Components/SignUp/SIgnUp";
import Billing from "./Pages/Account/Billing";
import Order from "./Pages/Account/Order";
import Profile from "./Pages/Account/Profile";
import Footer from "./Components/Shared/Footer";

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
        path="/shop"
        element={
          <div>
            <Navbar />
            <Shop />
          </div>
        }
        />
      </Routes>
    </Router>
  );
}

export default App;

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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginPage" element={<SignIn />} />
        <Route path="/signUpPage" element={<SIgnUp />} />
        <Route path="/shop" element={<Shop />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/contact" element={<ContactUs />}/>
      </Routes>
    </Router>
  );
}

export default App;

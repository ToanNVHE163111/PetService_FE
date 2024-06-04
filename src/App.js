import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home_Page from "./layout/Home_Page";
import Online_Booking from "./screens/Online_Booking";
import ContactForm from "./screens/Contact";
import Blog from "./screens/Blog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Change_Password from "./screens/Change_Password";
import { useState } from "react";
import LoginForm from "./screens/LoginForm";
import RegisterForm from "./screens/RegisterForm";
import Forgot_Password from "./screens/Forgot_Password";
import Product_Detail from "./screens/Product_Detail";
import Home from "./layout/Home";
import ResetPass from "./screens/ResetPass";
import EditProfile from "./screens/EditProfile";
import Payment from "./screens/Payment";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/home" element={<Home />} />
          <Route path="/online-booking" element={<Online_Booking />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/payment" element={<Payment />} />

          <Route
            path="/login"
            element={
              <LoginForm
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/contact-form"
            element={
              <>
                <Header />
                <ContactForm />
                <Footer />
              </>
            }
          />
          <Route path="/detail" element={<Product_Detail />} />

          <Route
            path="/blog"
            element={
              <>
                <Header />
                <Blog />
                <Footer />
              </>
            }
          />

          <Route
            path="/changepass"
            element={
              <>
                <Header />
                <Change_Password />
                <Footer />
              </>
            }
          />
          <Route
            path="/forgot"
            element={
              <>
                <Header />
                <Forgot_Password />
                <Footer />
              </>
            }
          />

          <Route
            path="/reset-password/:id/:token"
            element={
              <>
                <Header />
                <ResetPass />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

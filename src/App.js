import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home_Page from "./layout/Home_Page";
import Online_Booking from "./screens/Online_Booking";
import ContactForm from "./screens/Contact";
import Blog from "./screens/Blog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Change_Password from "./screens/Change_Password";
import { useEffect, useState } from "react";
import LoginForm from "./screens/LoginForm";
import RegisterForm from "./screens/RegisterForm";
import Forgot_Password from "./screens/Forgot_Password";
import Product_Detail from "./screens/Product_Detail";
import Home from "./layout/Home";
import ResetPass from "./screens/ResetPass";
import { ToastContainer } from "react-toastify";
import DashBoard from "./DashBoard/Admin/DashBoard";
import EditBlog from "./screens/EditBlog";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditProfile";
import Payment from "./screens/Payment";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/listproduct" element={<Home />} />
          <Route path="/online-booking" element={<Online_Booking />} />
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
                <ContactForm />
              </>
            }
          />
          <Route path="/detail/:id" element={<Product_Detail />} />
          <Route
            path="/blog"
            element={
              <>
                <Blog />
                <Footer />
              </>
            }
          />
          <Route
            path="/changepass"
            element={
              <>
                <Change_Password />
                <Footer />
              </>
            }
          />
          <Route
            path="/forgot"
            element={
              <>
                <Forgot_Password />
                <Footer />
              </>
            }
          />
          <Route
            path="/reset-password/:id/:token"
            element={
              <>
                <ResetPass />
                <Footer />
              </>
            }
          />
          <Route
            path="/editblog"
            element={
              <>
                <EditBlog />
                <Footer />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <DashBoard />
                <Footer />
              </>
            }
          />

          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import { Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home_Page from "./layout/Home_Page";
import Online_Booking from "./screens/Online_Booking";
import ContactForm from "./screens/Contact";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/online-booking" element={<Online_Booking />} />
          <Route path="/contact-form" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

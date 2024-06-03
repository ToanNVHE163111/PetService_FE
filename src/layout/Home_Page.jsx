import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Service_Item from "../components/Service_Item.jsx";
import Hot_Product from "../components/Hot_Product.jsx";
import Footer from "../components/Footer.jsx"; // Import Footer component

const Home_Page = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Service_Item></Service_Item>
      <Hot_Product></Hot_Product>
      <Footer></Footer> 
    </div>
  );
};

export default Home_Page;

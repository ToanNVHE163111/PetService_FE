import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import ManaFood from "../Food/ManaFood";
import ManaPet from "../Pet/ManaPet";
import ManaToy from "../Toy/ManaToy";
import ManaMedice from "../Medicine/ManaMedice";
import AllProducts from "./AllProducts";

const ManaAllCateProduct = () => {
  return (
    <Container fluid>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="allproducts" title="All Products">
          <AllProducts/>
        </Tab>
        <Tab eventKey="Food" title="Food">
          <ManaFood />
        </Tab>
        <Tab eventKey="Pet" title="Pet">
          <ManaPet />
        </Tab>
        <Tab eventKey="Toy" title="Toy">
          <ManaToy />
        </Tab>
        <Tab eventKey="Medicine" title="Medicine">
          <ManaMedice />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default ManaAllCateProduct;

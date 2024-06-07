import React, { useEffect, useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import ManaFood from "../Food/ManaFood";
import ManaPet from "../Pet/ManaPet";
import ManaToy from "../Toy/ManaToy";
import ManaMedice from "../Medicine/ManaMedice";
import axios from "axios";

const ManaAllCateProduct = () => {
  const [category,setCategory]=useState([])

  useEffect(() => {
    axios.get('http://localhost:9999/category')
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => {
        console.error('Error fetching toys:', error);
      });
  }, []);

  const toyId = category.find(category => category.name === 'Toy')?._id;
  const foodId = category.find(category => category.name === 'Food')?._id;
  const petId = category.find(category => category.name === 'Pet')?._id;
  const medicineId = category.find(category => category.name === 'Medicine')?._id;

  return (
    <Container fluid>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="Food" title="Food">
          <ManaFood categoryId={foodId} />
        </Tab>
        <Tab eventKey="Pet" title="Pet">
          <ManaPet categoryId={petId}/>
        </Tab>
        <Tab eventKey="Toy" title="Toy">
          <ManaToy categoryId={toyId}/>
        </Tab>
        <Tab eventKey="Medicine" title="Medicine">
          <ManaMedice categoryId={medicineId}/>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default ManaAllCateProduct;

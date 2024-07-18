import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import TimeSlots from "./TimeSlots";
const ServiceManagement = () => {
  return (
    <Container fluid>
      <Tabs defaultActiveKey="allorder" id="uncontrolled-tab-example">
        <Tab eventKey="time_slot" title="Quản lí ca chăm sóc ">
          <TimeSlots />
        </Tab>
        <Tab eventKey="dich_vu" title="Quản lí dịch vụ "></Tab>
      </Tabs>
    </Container>
  );
};

export default ServiceManagement;

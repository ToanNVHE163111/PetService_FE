import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import AllOrder from "./AllOrder";
import Processing from "./Processing";
import Complete from "./Complete";
import Pending from "./Pending";
const OrderManagement = () => {
    return (
        <Container fluid>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="allorder" title="All Order">
            <AllOrder/>
          </Tab>
          <Tab eventKey="Pending" title="Pending">
            <Pending />
          </Tab>
          <Tab eventKey="Processing" title="Processing">
            <Processing />
          </Tab>
          <Tab eventKey="Complete" title="Completed">
            <Complete />
          </Tab>
          
        </Tabs>
      </Container>
    );
};

export default OrderManagement;
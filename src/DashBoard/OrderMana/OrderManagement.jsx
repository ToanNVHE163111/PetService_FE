import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import AllOrder from "./AllOrder";
import Processing from "./Processing";
import Complete from "./Complete";
import Pending from "./Pending";
import Cancel from "./Cancel";
const OrderManagement = () => {
    return (
        <Container fluid>
        <Tabs defaultActiveKey="allorder" id="uncontrolled-tab-example">
          <Tab eventKey="allorder" title="All Order">
            <AllOrder />
          </Tab>
          <Tab eventKey="Pending" title="Pending">
          <Pending status="Pending" />
          </Tab>
          <Tab eventKey="Processing" title="Processing">
          <Processing status="Processing" />
          </Tab>
          <Tab eventKey="Complete" title="Completed">
          <Complete status="Completed" />
          </Tab>
          <Tab eventKey="Cancel" title="Cancel">
          <Cancel status="Cancel" />
          </Tab>
          
        </Tabs>
      </Container>
    );
};

export default OrderManagement;
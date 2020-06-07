import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import NavBar from "./components/NavBar";
import EventDashBoard from "./components/EventDashBoard";
import { Container } from "semantic-ui-react";

const Index = (props) => {
  return (
    <div>
      <NavBar />
      <Container className="main">
        <EventDashBoard />
      </Container>
    </div>
  );
};

export default Index;

import React from "react";
import { Button } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";

import EventList from "./EventList";

const EventDashBoard = (props) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>right coluom</h2>
        <Button icon="smile" content="React Btn"></Button>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashBoard;

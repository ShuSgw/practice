import React, { Fragment } from "react";
import EventListItem from "./EventListItem";

const EventList = (props) => {
  return (
    <Fragment>
      {props.events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </Fragment>
  );
};

export default EventList;

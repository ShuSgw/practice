import React, { Fragment } from "react";
import EventListItem from "./EventListItem";

const EventList = (props) => {
  const { events, handleSelectEvent } = props;
  return (
    <Fragment>
      {events.map((event) => (
        <EventListItem
          key={event.id}
          event={event}
          handleSelectEvent={handleSelectEvent}
        />
      ))}
    </Fragment>
  );
};

export default EventList;

import React, { Fragment } from "react";
import EventListItem from "./EventListItem";

const EventList = (props) => {
  const { events, handleSelectEvent, handleDeleteEvent } = props;
  return (
    <Fragment>
      {events.map((event) => (
        <EventListItem
          key={event.id}
          event={event}
          handleSelectEvent={handleSelectEvent}
          handleDeleteEvent={handleDeleteEvent}
        />
      ))}
    </Fragment>
  );
};

export default EventList;

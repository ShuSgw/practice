import React from "react";
import { Button } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";

import EventList from "./EventList";
import EventForm from "./EventForm";
import cuid from "cuid";

const eventsFromDashboaed = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
    ],
  },
];

class EventDashBoard extends React.Component {
  state = {
    events: eventsFromDashboaed,
    isOpen: false,
    selectEvent: false,
  };
  handleSelectEvent = (event) => {
    this.setState(() => ({
      selectEvent: event,
      isOpen: true,
    }));
  };
  handleCreateFormOpen = () => {
    this.setState(() => ({
      selectEvent: null,
      isOpen: true,
    }));
  };
  handleFormCancel = () => {
    this.setState(() => ({
      isOpen: false,
    }));
  };
  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "./firebase_tutorial/assets/images/user.png";
    this.setState((prevState) => ({
      events: [...prevState.events, newEvent],
      isOpen: true,
    }));
  };
  handleUpdateEvent = (selectEvent) => {
    this.setState((prevState) => ({
      events: prevState.events.map((event) => {
        if (event.id === selectEvent.id) {
          return { ...selectEvent };
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectEvent: null,
    }));
  };
  handleDeleteEvent = (id) => {
    this.setState((prevState) => ({
      events: prevState.events.filter((event) => event.id !== id),
    }));
  };

  render() {
    const { events, isOpen, selectEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            handleSelectEvent={this.handleSelectEvent}
            handleDeleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleCreateFormOpen}
            positive
            content="Create Event"
          />
          {isOpen && (
            <EventForm
              key={selectEvent ? selectEvent.id : 0}
              selectEvent={selectEvent}
              handleCreateEvent={this.handleCreateEvent}
              cancelFormOpen={this.handleFormCancel}
              handleUpdateEvent={this.handleUpdateEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashBoard;

// handleIsOpenToggle = () => {
//   this.setState((prevState) => ({
//     isOpen: !prevState.isOpen,
//   }));
// };

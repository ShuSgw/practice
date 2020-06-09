import React from "react";
import { List, Image } from "semantic-ui-react";

const EventListAtendee = (props) => {
  const { attendee } = props;
  return (
    <React.Fragment>
      <List.Item>
        <Image as="a" size="mini" circular src={attendee.photoURL}></Image>
      </List.Item>
    </React.Fragment>
  );
};

export default EventListAtendee;

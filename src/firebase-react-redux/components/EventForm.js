import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      city: "",
      venue: "",
      hostedBy: "",
    };
  }

  componentDidMount() {
    if (this.props.selectEvent !== null) {
      this.setState(() => ({ ...this.props.selectEvent }));
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    // this.props.handleCreateEvent(this.state);
    this.props.handleUpdateEvent();
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { cancelFormOpen } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete="off">
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              onChange={this.handleInput}
              value={title}
              placeholder="First Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              onChange={this.handleInput}
              value={date}
              placeholder="Event Date"
              type="date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.handleInput}
              value={city}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.handleInput}
              value={venue}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.handleInput}
              value={hostedBy}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={cancelFormOpen} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;

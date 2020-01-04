import React from "react";
import { fetchEvents } from "../store/events/actions";
import { connect } from "react-redux";
import EventsList from "./EventsList";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/event/edit/0"
        >
          Add new Event
        </Button>
        {this.props.events.map((event, i) => (
          <EventsList key={i} data={event} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  console.log("something ", reduxState.events);
  return {
    events: reduxState.events.events
  };
};
export default connect(mapStateToProps)(Homepage);

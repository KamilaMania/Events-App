import React from "react";
import { fetchEvents } from "../store/events/actions";
import { connect } from "react-redux";
import EventsList from "./EventsList";
import EventForm from "./EventForm";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }
  render() {
    return (
      <div>
        {this.props.events.map((event, i) => (
          <EventsList key={i} data={event} />
        ))}
        <EventForm />
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  console.log("something ", reduxState);
  return {
    events: reduxState.events.events
  };
};
export default connect(mapStateToProps)(Homepage);

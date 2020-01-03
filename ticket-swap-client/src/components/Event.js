// import "./Login.css";
import React from "react";
//import { fetchEvent } from "../store/event/actions";
//import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvent } from "../store/events/actions";
import { fetchTickets } from "../store/tickets/actions";

class Event extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchEvent(this.props.path.split("/").pop()));
    this.props.dispatch(fetchTickets(this.props.path.split("/").pop()));
  }

  render() {
    return (
      <>
        <div>{this.props.event && <h1>{this.props.event}</h1>}</div>
        <div>
          {this.props.tickets.length && <h1>{this.props.tickets[0].id}</h1>}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  path: state.router.location.pathname,
  event: state.event.event,
  tickets: state.tickets.tickets
});

export default connect(mapStateToProps)(Event);

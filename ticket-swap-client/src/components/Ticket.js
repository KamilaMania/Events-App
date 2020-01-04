import React from "react";
import { connect } from "react-redux";
import { fetchTicket, fetchTicketsPerUser } from "../store/tickets/actions";
import { fetchComments } from "../store/comment/actions";
import factorCalculator from "./Factor";

class Ticket extends React.Component {
  state = {
    riskFactor: null
  };
  componentDidMount() {
    const id = this.props.path.split("/").pop();
    this.props.dispatch(fetchTicket(id));
    this.props.dispatch(fetchTicketsPerUser(1));
    this.props.dispatch(fetchComments(id));
  }

  componentWillReceiveProps(nextProps) {
    if (
      (nextProps.comments !== this.props.comments ||
        nextProps.userTickets !== this.props.userTickets ||
        nextProps.ticket !== this.props.ticket) &&
      nextProps.tickets.length &&
        nextProps.userTickets &&
        nextProps.comments &&
        nextProps.ticket
    ) {
      const prices = nextProps.tickets.map(ticket => parseFloat(ticket.price));
      const factor = factorCalculator(
        nextProps.userTickets,
        prices,
        nextProps.comments.length,
        nextProps.ticket.price,
        nextProps.ticket.createdAt
      );
      this.setState({ riskFactor: factor.toFixed(2) });
    }
  }

  render() {
    return (
      <div>
        {this.state.riskFactor && (
          <h1>Risk factor is: {this.state.riskFactor}</h1>
        )}
        {this.props.ticket && (
          <div>
            <p>{this.props.ticket.description}</p>
            <b>{this.props.ticket.price}</b>
            <br />
            <img src={this.props.ticket.urlLogo} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  path: state.router.location.pathname,
  ticket: state.ticket.ticket,
  tickets: state.tickets.tickets,
  userTickets: state.tickets.userTickets,
  comments: state.comments.comments
});

export default connect(mapStateToProps)(Ticket);

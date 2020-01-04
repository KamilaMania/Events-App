import React from "react";
import { connect } from "react-redux";
import { fetchTicket } from "../store/tickets/actions";

class Ticket extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTicket(this.props.path.split("/").pop()));
    // this.props.dispatch(fetchTickets(this.props.path.split("/").pop()));
  }

  render() {
    return (
      <div>
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
  ticket: state.ticket.ticket
});

export default connect(mapStateToProps)(Ticket);

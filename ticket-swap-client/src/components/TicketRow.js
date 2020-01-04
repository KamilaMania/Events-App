import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { deleteTicket } from "../store/tickets/actions";
import { connect } from "react-redux";

class TicketRow extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.ticket.price}</TableCell>
        <TableCell>{this.props.ticket.description}</TableCell>
        <TableCell>
          <img src={this.props.ticket.urlLogo} />
        </TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={"/ticket/" + this.props.ticket.id}
          >
            Ticket Details
          </Button>

          <Button
            variant="contained"
            component={Link}
            to={"/ticket/edit/" + this.props.ticket.id}
          >
            Edit Ticket
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => this.props.delete(this.props.ticket.id)}
          >
            Delete Ticket
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch(deleteTicket(id))
  };
};
export default connect(null, mapDispatchToProps)(TicketRow);

import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default class TicketRow extends React.Component {
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
        </TableCell>
      </TableRow>
    );
  }
}

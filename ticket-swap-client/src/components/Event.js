import React from "react";
//import { fetchEvent } from "../store/event/actions";
//import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEvent } from "../store/events/actions";
import { fetchTickets } from "../store/tickets/actions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TicketRow from "./TicketRow";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Event extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchEvent(this.props.path.split("/").pop()));
    this.props.dispatch(fetchTickets(this.props.path.split("/").pop()));
  }

  render() {
    return (
      <>
        <div>{this.props.event && <h1>{this.props.event.title}</h1>}</div>
        <p>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/ticket/edit/0"
          >
            Add Your Ticket
          </Button>
        </p>
        <div>
          {this.props.tickets.length && (
            <TableContainer component={Paper}>
              <Table aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell>Price</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Picture</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.tickets.map(row => (
                    <TicketRow ticket={row} key={row.id}></TicketRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
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

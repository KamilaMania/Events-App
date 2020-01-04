import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default class TicketList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTickets(this.props.match.params.id));
    //this.props.fetchTicket();
  }

  render() {
    //return <span>test</span>;

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>A barbone structure table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>Price)</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Picture</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.picture}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>;
  }
}

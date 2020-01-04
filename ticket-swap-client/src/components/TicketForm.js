import { connect } from "react-redux";
import React from "react";
import {
  createTicket,
  updateTicket,
  fetchTicket
} from "../store/tickets/actions";
import "./EventForm.css";

class TicketForm extends React.Component {
  state = {
    price: "",
    description: "",
    urlLogo: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = parseInt(this.props.path.split("/").pop());
    console.log(id);
    console.log(this.state);
    if (id) {
      console.log("edit");
      const ticket = Object.assign({}, this.state, {
        id: id,
        userId: 1,
        eventId: this.props.event.id
      });
      this.props.put(ticket);
    } else {
      const ticket = Object.assign({}, this.state, {
        eventId: this.props.event.id,
        userId: 1
      });
      this.props.post(ticket);
    }
  };

  handleChange = ticket => {
    const { name, value } = ticket.target;

    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    const id = parseInt(this.props.path.split("/").pop());
    if (id) {
      this.props.fetch(id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.ticket !== this.props.ticket) {
      this.setState({
        price: nextProps.ticket.price,
        urlLogo: nextProps.ticket.urlLogo,
        description: nextProps.ticket.description
      });
    }
  }

  render() {
    const initialValues = this.props.initialValues || {};
    return (
      <form onSubmit={this.handleSubmit} className="ticketForm">
        <div>
          <label htmlFor="picture">Picture</label>
          <br />
          <input
            name="urlLogo"
            type="text"
            id="urlLogo"
            value={
              this.state.urlLogo !== undefined
                ? this.state.urlLogo
                : initialValues.urlLogo || ""
            }
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <br />
          <input
            name="price"
            type="number"
            id="price"
            value={
              this.state.price !== undefined
                ? this.state.price
                : initialValues.price || ""
            }
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            name="description"
            type="text"
            id="description"
            value={
              this.state.description !== undefined
                ? this.state.description
                : initialValues.description || ""
            }
            onChange={this.handleChange}
          ></textarea>
        </div>

        <button type="submit" className="button">
          Post
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    post: ticket => dispatch(createTicket(ticket)),
    put: ticket => dispatch(updateTicket(ticket)),
    fetch: id => dispatch(fetchTicket(id))
  };
};
const mapStateToProps = state => ({
  path: state.router.location.pathname,
  ticket: state.ticket.ticket,
  event: state.event.event
});
export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);

import React from "react";
import "./EventForm.css";
import { createEvent, editEvent } from "../store/events/actions";
import { connect } from "react-redux";
import { fetchEvent } from "../store/events/actions";

class EventForm extends React.Component {
  state = {
    title: "",
    urlLogo: "",
    description: "",
    startDate: "",
    endDate: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    const id = parseInt(this.props.path.split("/").pop());
    console.log(id);
    if (id) {
      const event = Object.assign({}, this.state, {
        startDate: new Date(this.state.startDate),
        endDate: new Date(this.state.endDate),
        id: id
      });
      this.props.put(event);
    } else {
      const event = Object.assign({}, this.state, {
        startDate: new Date(this.state.startDate),
        endDate: new Date(this.state.endDate)
      });
      this.props.post(event);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

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
    if (nextProps.event !== this.props.event) {
      this.setState({
        title: nextProps.event.title,
        urlLogo: nextProps.event.urlLogo,
        description: nextProps.event.description,
        startDate: new Date(nextProps.event.startDate)
          .toISOString()
          .split("T")[0],
        endDate: new Date(nextProps.event.endDate).toISOString().split("T")[0]
      });
    }
  }

  render() {
    const initialValues = this.props.initialValues || {};
    return (
      <form onSubmit={this.handleSubmit} className="createEventForm">
        <div>
          <label htmlFor="title">Event name</label>
          <br />
          <input
            name="title"
            type="text"
            id="title"
            value={
              this.state.title !== undefined
                ? this.state.title
                : initialValues.title || ""
            }
            onChange={this.handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="urlLogo">Event picture</label>
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
            required
          />
        </div>

        <div>
          <label htmlFor="description">Event description</label>
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
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="startDate">Start date</label>
          <br />
          <input
            name="startDate"
            type="date"
            id="startDate"
            value={
              this.state.startDate !== undefined
                ? this.state.startDate
                : initialValues.startDate || ""
            }
            onChange={this.handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="end">End date</label>
          <br />
          <input
            name="endDate"
            type="date"
            id="endDate"
            value={
              this.state.endDate !== undefined
                ? this.state.endDate
                : initialValues.endDate || ""
            }
            onChange={this.handleChange}
            required
          />
        </div>

        <button type="submit" className="button">
          Create Event
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    post: event => dispatch(createEvent(event)),
    put: event => dispatch(editEvent(event)),
    fetch: id => dispatch(fetchEvent(id))
  };
};
const mapStateToProps = state => ({
  path: state.router.location.pathname,
  event: state.event.event
});
export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

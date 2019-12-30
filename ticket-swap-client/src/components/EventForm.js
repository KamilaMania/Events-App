import React, { Component } from "react";
import "./EventForm.css";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import { connect } from "react-redux";

export default class EventForm extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const initialValues = this.props.initialValues || {};
    return (
      <form onSubmit={this.handleSubmit} className="createEventForm">
        <div>
          <label htmlFor="title">Event name</label>
          <br />
          <input
            name="title"
            id="title"
            value={
              this.state.title !== undefined
                ? this.state.title
                : initialValues.title || ""
            }
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="urlLogo">Event picture</label>
          <br />
          <input
            name="urlLogo"
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
          <label htmlFor="description">Event description</label>
          <br />
          <input
            name="description"
            id="description"
            value={
              this.state.description !== undefined
                ? this.state.description
                : initialValues.description || ""
            }
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="startDate">Start date</label>
          <br />
          <input
            name="startDate"
            id="startDate"
            value={
              this.state.startDate !== undefined
                ? this.state.startDate
                : initialValues.startDate || ""
            }
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="end">End date</label>
          <br />
          <input
            name="endDate"
            id="endDate"
            value={
              this.state.endDate !== undefined
                ? this.state.endDate
                : initialValues.endDate || ""
            }
            onChange={this.handleChange}
          />
        </div>

        <button type="submit" className="button">
          Create Event
        </button>
      </form>
    );
  }
}

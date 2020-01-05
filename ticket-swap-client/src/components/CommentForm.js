import React from "react";
import "./CommentForm.css";

export default class CommentForm extends React.Component {
  state = {
    content: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.content) {
      this.props.onSubmit(this.state.content);
    }
  };

  handleChange = comment => {
    const { name, value } = comment.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const initialValues = this.props.initialValues || {};
    return (
      <form onSubmit={this.handleSubmit} className="commentForm">
        <div>
          <label>Tell us what you think</label>
          <br />
          <input
            name="content"
            id="content"
            value={
              this.state.content !== undefined
                ? this.state.content
                : initialValues.content || ""
            }
            onChange={this.handleChange}
          />
        </div>

        <button className="button" type="submit">
          Comment
        </button>
      </form>
    );
  }
}

import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../store/signup/actions";

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    alert("Your account has been created!", this.state.value);
    const { email, password } = this.state;
    const action = signUp(email, password);
    this.props.dispatch(action);
    this.props.history.push(`/login`);
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            E-mail adress:
            <input
              name="email"
              type="text"
              placeholder="E-mail"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />
            Password:
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  console.log("something ", reduxState);
  return {
    jwt: reduxState.signUp.jwt
  };
};

export default connect(mapStateToProps)(SignUp);

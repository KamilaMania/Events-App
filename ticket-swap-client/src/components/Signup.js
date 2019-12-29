import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../store/signup/actions";
import "./Signup.css";
import { toastr } from "react-redux-toastr";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      const { email, password } = this.state;
      const action = signUp(email, password);
      this.props.dispatch(action);
      this.props.history.push(`/login`);
    } else {
      toastr.error("Signup error", "The password do not match");
    }
  };
  render() {
    return (
      <div className="signup-form">
        <h1>Register</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              name="email"
              type="email"
              placeholder="E-mail adress"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />

            <input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />

            <input
              name="confirmPassword"
              type="password"
              placeholder="Password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
            <br />
            <button className="button" type="submit">
              Register
            </button>
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

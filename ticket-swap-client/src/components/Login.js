import React from "react";
import { connect } from "react-redux";
import { login } from "../store/login/actions";
import { Link } from "react-router-dom";
import "./Login.css";

class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    const action = login(this.state.email, this.state.password);
    this.props.dispatch(action);
    this.setState({ email: "", password: "" });
    this.props.history.push("/");
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="email"
              name="email"
              placeholder="Email adress"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button className="button" type="submit">
              Login
            </button>
          </p>
        </form>
        <div>
          If you dont have an account please create one{" "}
          <Link to="/signup">here</Link>
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
export default connect(mapStateToProps)(LoginPage);

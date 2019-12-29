import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="Posts">
        <Link to="/">CHECK OUT COMING EVENTS</Link>
        <br />
        <Link to="/signup">Register</Link>
        <br />
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOutSuccess } from "../store/logout/actions";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./Login.css";

class Navbar extends Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.dispatch(logOutSuccess(null));
    this.props.history.push("/login");
  };

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit" component={Link} to={"/login"}>
            Login
          </Button>
          <Button
            color="inherit"
            className="m-auto"
            component={Link}
            to={"/signup"}
          >
            Register
          </Button>
          <Button onClick={this.handleLogout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = reduxState => {
  console.log("something ", reduxState);
  return {
    jwt: reduxState.signUp.jwt
  };
};
export default connect(mapStateToProps)(withRouter(Navbar));

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOutSuccess } from "../store/logout/actions";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import "./Login.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

class Navbar extends Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.dispatch(logOutSuccess());
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

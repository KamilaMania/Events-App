import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import LogInPage from "./components/Login";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <header>TICKETSWOOOOOP</header>
        </div>
        <Navbar />
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

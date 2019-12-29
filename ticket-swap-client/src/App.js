import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import LogInPage from "./components/Login";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Event from "./components/Event";
import ReduxToastr from "react-redux-toastr";
import EventsList from "./components/EventsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="header">
          <header>
            <h1>TICKETSWOOOOOP</h1>
          </header>
        </div>

        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogInPage} />
          <Route path="/events" component={EventsList} />
          <Route path="/event/:id" component={Event} />

          {/* <Route path="/logout" component={LogoutPage} /> */}
          <Route component={Homepage} />
        </Switch>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          position="bottom-center"
        />
      </div>
    );
  }
}

export default App;

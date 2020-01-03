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
import EventForm from "./components/EventForm";

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
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={LogInPage} />
          <Route path="/events" exact component={EventsList} />
          <Route path="/event/:id" exact component={Event} />
          <Route path="/event/edit/:id" exact component={EventForm} />

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

import { combineReducers } from "redux";

import authReducer from "./signup/reducer";
import logoutReducer from "./logout/reducer";
import { reducer as toastrReducer } from "react-redux-toastr";
import eventsReducer from "./events/reducer";
import eventReducer from "./event/reducer";
import ticketsReducer from "./tickets/reducer";
import { connectRouter } from "connected-react-router";

// import tickets from "./tickets/reducer";
// import ticket from "./ticket/reducer";
// import comment from "./comment/reducer";

const createRootReducer = history =>
  combineReducers({
    signUp: authReducer,
    lougOut: logoutReducer,
    toastr: toastrReducer,
    events: eventsReducer,
    event: eventReducer,
    tickets: ticketsReducer,
    router: connectRouter(history)
  });
export default createRootReducer;

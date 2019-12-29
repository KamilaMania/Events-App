import { combineReducers } from "redux";

import authReducer from "./signup/reducer";
import logoutReducer from "./logout/reducer";
import { reducer as toastrReducer } from "react-redux-toastr";
import eventsReducer from "./events/reducer";

export default combineReducers({
  signUp: authReducer,
  lougOut: logoutReducer,
  toastr: toastrReducer,
  events: eventsReducer
});

import { combineReducers } from "redux";

import authReducer from "./signup/reducer";

export default combineReducers({
  signUp: authReducer

  // we can add "slice" subreducers here later on...
});

import superagent from "superagent";
import { toastr } from "react-redux-toastr";

export function signUpSuccess(token) {
  return {
    type: "SIGN_UP_SUCCESS",
    payload: token
  };
}
export function signUp(email, password) {
  return function thunk(dispatch, getState) {
    superagent
      .post("http://localhost:4000/user")
      .send({ email, password })
      .then(response => {
        console.log("signup response test:", response);
        toastr.success("Signup Success", "Your account has been created");
      })
      .catch(err => console.log("err", err));
  };
}

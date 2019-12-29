import superagent from "superagent";

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
      })
      .catch(err => console.log("err", err));
  };
}

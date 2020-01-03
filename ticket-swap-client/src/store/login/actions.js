import superagent from "superagent";

export function logInSuccess(jwt) {
  return {
    type: "LOGIN_SUCCESS",
    payload: jwt
  };
}

export function login(email, password) {
  return function thunk(dispatch, getState) {
    superagent
      .post("http://localhost:4000/login")
      .send({ email, password })
      .then(response => {
        console.log("login data test", response);
        const action = logInSuccess(response.body.jwt);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}

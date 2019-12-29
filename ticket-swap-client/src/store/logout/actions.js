import superagent from "superagent";

export function logOutSuccess(jwt) {
  return {
    type: "LOGOUT_SUCCESS",
    payload: null
  };
}

// export function logOut(jwt) {
//   return {
//     type: "auth/LOG_OUT",
//     payload: jwt
//   };
// }

// export function logout() {
//   return function thunk(dispatch, getState) {
//     superagent
//       .post("http://localhost:4000/secret-endpoint")
//       .then(response => {
//         console.log("logout data test", response);
//         const action = logOutSuccess(response.body.jwt);
//         dispatch(action);
//       })
//       .catch(err => console.log("err", err));
//   };
// }

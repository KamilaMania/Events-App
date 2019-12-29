import superagent from "superagent";

export function eventSuccess(events) {
  return {
    type: "FETCH_EVENT_SUCCESS",
    payload: events
  };
}

// export function logOut(jwt) {
//   return {
//     type: "auth/LOG_OUT",
//     payload: jwt
//   };
// }

export function fetchEvents() {
  return function thunk(dispatch, getState) {
    superagent
      .get("http://localhost:4000/events")
      .then(response => {
        console.log("fetch event data test", response);
        const action = eventSuccess(response.body.data);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}

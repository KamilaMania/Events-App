import { toastr } from "react-redux-toastr";
import { push } from "connected-react-router";
import superagent from "superagent";

const baseUrl = "http://localhost:4000";

export function eventsSuccess(events) {
  return {
    type: "FETCH_EVENTS_SUCCESS",
    payload: events
  };
}

export function fetchEvents() {
  return function thunk(dispatch, getState) {
    superagent
      .get(`${baseUrl}/events`)
      .then(response => {
        const action = eventsSuccess(response.body.data);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}

export function specificEventSuccess(event) {
  return {
    type: "FETCH_SPECIFIC_SUCCESS",
    payload: event
  };
}

export function fetchEvent(eventId) {
  return function thunk(dispatch, getState) {
    superagent
      .get(`${baseUrl}/event/${eventId}`)
      .then(response => {
        console.log("fetch event data test", response);
        const action = specificEventSuccess(response.body);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}

export function createEventSuccess(event) {
  return {
    type: "ADD_EVENT_SUCCESS",
    payload: event
  };
}

export function createEvent(event) {
  return function thunk(dispatch, getState) {
    superagent
      .post(`${baseUrl}/event`)
      .send(event)
      .then(response => {
        const action = createEventSuccess({ ...event, id: response.body.id });
        dispatch(action);
        dispatch(push("/"));
        toastr.success("Event Added", "Your event successfully added");
      })
      .catch(err => console.log("err", err));
  };
}
export function editEvent(event) {
  console.log(event);
  return function thunk(dispatch, getState) {
    superagent
      .put(`${baseUrl}/event/${event.id}`)
      .send(event)
      .then(response => {
        console.log("edit " + response);
        const action = fetchEvents();
        dispatch(action);
        dispatch(push("/"));
        toastr.success("Event edited", "Your event successfully updated");
      })
      .catch(err => console.log("err", err));
  };
}

// export function deleteEvent(event) {
//   console.log(event);
//   return function thunk(dispatch, getState) {
//     superagent
//       .put(`${baseUrl}/event/${event.id}`)
//       .then(response => {
//         console.log("delete " + response);
//         const action = fetchEvents();
//         dispatch(action);
//         dispatch(push("/"));
//         toastr.success("Event deleted", "Your event has been deleted");
//       })
//       .catch(err => console.log("err", err));
//   };
// }

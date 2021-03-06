const initialState = {
  events: []
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "FETCH_EVENTS_SUCCESS":
      return { events: action.payload };

    case "ADD_EVENT_SUCCESS":
      return { events: [...state.events, action.payload] };

    default:
      return state;
  }
}

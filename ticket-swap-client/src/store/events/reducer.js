const initialState = {
  events: []
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "FETCH_EVENT_SUCCESS":
      return { events: action.payload };
    default:
      return state;
  }
}

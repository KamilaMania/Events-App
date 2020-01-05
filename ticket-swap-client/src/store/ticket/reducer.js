const initialState = {
  ticket: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "FETCH_SELECTED_TICKET_SUCCESS":
      return { ticket: action.payload };
    default:
      return state;
  }
}

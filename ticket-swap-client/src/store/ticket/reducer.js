const initialState = {
  ticket: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "FETCH_SELECTED_TICKET_SUCCESS":
      return { ticket: action.payload };

    // case "UPDATE_TICKET_SUCCESS":
    //   if (state.id === action.payload.id) {
    //     return { ticket: action.payload };
    //   } else return state;

    default:
      return state;
  }
}

const initialState = {
  tickets: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "FETCH_SPECIFIC_TICKETS_SUCCESS":
      return { tickets: action.payload };
    case "ADD_TICKET_SUCCESS":
      return [...state, action.payload];
    case "UPDATE_TICKET_SUCCESS":
      return state.map(ticket => {
        if (ticket.id === action.payload.id) {
          return action.payload;
        } else return ticket;
      });
    case "FETCH_TICKETS_SUCCESS":
      return { tickets: action.payload };
    default:
      return state;
  }
}

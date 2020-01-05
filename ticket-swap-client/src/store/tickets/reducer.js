const initialState = {
  tickets: [],
  userTickets: 0
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "FETCH_SPECIFIC_TICKETS_SUCCESS":
      return { tickets: action.payload, userTickets: state.userTickets };
    case "ADD_TICKET_SUCCESS":
      return {
        tickets: [...state.tickets, action.payload],
        userTickets: state.userTickets
      };
    case "UPDATE_TICKET_SUCCESS":
      const updatedIndex = state.tickets.findIndex(
        ticket => ticket.id === action.payload.id
      );
      const updatedArr = [...state.tickets].splice(updatedIndex, 1);
      console.log(updatedArr);
      return {
        tickets: [...updatedArr, action.payload],
        userTickets: state.userTickets
      };

    case "FETCH_TICKETS_SUCCESS":
      return { tickets: action.payload, userTickets: state.userTickets };
    case "FETCH_USER_TICKETS_SUCCESS":
      return { tickets: state.tickets, userTickets: action.payload };
    case "TICKET_DELETED":
      const deletedIndex = state.tickets.findIndex(
        ticket => ticket.id === action.payload
      );
      const newArr = [...state.tickets].splice(deletedIndex, 1);
      return { tickets: newArr, userTickets: state.userTickets };
    default:
      return state;
  }
}

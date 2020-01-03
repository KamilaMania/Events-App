import superagent from "superagent";
const baseUrl = "http://localhost:4000";

export function ticketsSuccess(tickets) {
  return {
    type: "FETCH_TICKETS_SUCCESS",
    payload: tickets
  };
}

export function fetchTickets(eventId) {
  return function thunk(dispatch, getState) {
    superagent
      .get(`${baseUrl}/tickets/${eventId}`)
      .then(response => {
        console.log("fetch tickets data test", response);
        const action = ticketsSuccess(response.body.data);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}

export function selectedTicketSuccess(ticket) {
  return {
    type: "FETCH_SELECTED_TICKET_SUCCESS",
    payload: ticket
  };
}

export function fetchTicket(ticketId) {
  return function thunk(dispatch, getState) {
    superagent
      .get(`${baseUrl}/tickets/${ticketId}`)
      .then(response => {
        console.log("fetch ticket data test", response);
        const action = selectedTicketSuccess(response.body);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}

export function createTicketSuccess(ticket) {
  return {
    type: "ADD_TICKET_SUCCESS",
    payload: ticket
  };
}

export function createTicket(ticket) {
  return function thunk(dispatch, getState) {
    superagent
      .post(`${baseUrl}/tickets`)
      .send(ticket)
      .then(response => {
        console.log("add ticket data test", response);
        const action = createTicketSuccess(response.body.ticket);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}

export function updateTicketSuccess(ticket) {
  return {
    type: "UPDATE_TICKET_SUCCESS",
    payload: ticket
  };
}

export function updateTicket(ticket) {
  return function thunk(dispatch, getState) {
    superagent
      .put(`${baseUrl}/tickets`)
      .send(ticket)
      .then(response => {
        console.log("add ticket data test", response);
        const action = updateTicketSuccess(response.body.ticket);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}
export function specificTicketsSuccess(tickets) {
  return {
    type: "FETCH_SPECIFIC_TICKETS_SUCCESS",
    payload: tickets
  };
}

export function fetchSpecificTickets(ticketId) {
  return function thunk(dispatch, getState) {
    superagent
      .get(`${baseUrl}/events/tickets/${ticketId}`)
      .then(response => {
        console.log("fetch ticket data test", response);
        const action = specificTicketsSuccess(response.body.tickets);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}

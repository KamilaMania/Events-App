import { toastr } from "react-redux-toastr";
import { push } from "connected-react-router";
import superagent from "superagent";
const baseUrl = "http://localhost:4000";

export function ticketsSuccess(tickets) {
  return {
    type: "FETCH_TICKETS_SUCCESS",
    payload: tickets
  };
}
export function userTicketsSuccess(tickets) {
  return {
    type: "FETCH_USER_TICKETS_SUCCESS",
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
      .get(`${baseUrl}/ticket/${ticketId}`)
      .then(response => {
        console.log("fetch ticket data test", response);
        const action = selectedTicketSuccess(response.body);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}
export function fetchTicketsPerUser(userId) {
  return function thunk(dispatch, getState) {
    superagent
      .get(`${baseUrl}/userTickets/${userId}`)
      .then(response => {
        console.log("fetch tickets per user", response);
        const action = userTicketsSuccess(response.body.total);
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
      .post(`${baseUrl}/ticket`)
      .send(ticket)
      .then(response => {
        console.log("add ticket data test", response);
        const action = createTicketSuccess(response.body);
        dispatch(action);
        dispatch(push("/event/" + response.body.eventId));
        toastr.success("Ticket added", "Your Ticket successfully added");
      })
      .catch(err => console.log("err", err));
  };
}

export function updateTicket(ticket) {
  console.log(ticket);
  return function thunk(dispatch, getState) {
    superagent
      .put(`${baseUrl}/ticket/${ticket.id}`)
      .send(ticket)
      .then(response => {
        console.log("add ticket data test", response);
        dispatch(push("/event/" + ticket.eventId));
        toastr.success("Ticket edited", "Your Ticket successfully updated");
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

export function ticketDeleted(id) {
  return {
    type: "TICKET_DELETED",
    payload: id
  };
}
export function deleteTicket(id) {
  return function thunk(dispatch, getState) {
    superagent
      .delete(`${baseUrl}/ticket/${id}`)
      .then(response => {
        console.log("delete ticket " + response);
        const action = ticketDeleted(id);
        dispatch(action);
        toastr.error("Ticket Deleted", "Your ticket has been deleted");
      })
      .catch(err => console.log("err", err));
  };
}

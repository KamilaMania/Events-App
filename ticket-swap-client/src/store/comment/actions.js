import superagent from "superagent";
const baseUrl = "http://localhost:4000";

export function selectedCommentsSuccess(comments) {
  return {
    type: "FETCH_COMMENTS_SUCCESS",
    payload: comments
  };
}

export function commentsSuccess(ticketId) {
  return function thunk(dispatch, getState) {
    superagent
      .get(`${baseUrl}/tickets/comments/${ticketId}`)
      .then(response => {
        console.log("fetch comments data test", response);
        const action = selectedCommentsSuccess(response.body.comments);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}

export function createCommentSuccess(comment) {
  return {
    type: "CREATE_COMMENTS_SUCCESS",
    payload: comment
  };
}

export function createCommentSuccess(comment) {
  return function thunk(dispatch, getState) {
    superagent
      .get(`${baseUrl}/tickets/comments}`)
      .send(comment)
      .then(response => {
        console.log("fetch comment data test", response);
        const action = createCommentSuccess(response.body.comment);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}

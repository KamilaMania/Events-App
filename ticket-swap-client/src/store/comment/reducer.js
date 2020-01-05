const initialState = {
  comments: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "FETCH_COMMENTS_SUCCESS":
      return { comments: action.payload };
    case "CREATE_COMMENTS_SUCCESS":
      return { comments: [...state.comments, action.payload] };
    default:
      return state;
  }
}

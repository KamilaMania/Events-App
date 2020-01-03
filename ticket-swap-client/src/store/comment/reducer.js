const initialState = {
  events: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return { comments: action.payload };
    case CREATE_COMMENTS_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
}

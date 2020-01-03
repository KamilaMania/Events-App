const initialState = {
  event: null
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "FETCH_SPECIFIC_SUCCESS":
      return { event: action.payload };
    default:
      return state;
  }
}

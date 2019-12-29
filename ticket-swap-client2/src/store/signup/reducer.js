const initialState = {
  jwt: null
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { jwt: action.payload };
    default:
      return state;
  }
}

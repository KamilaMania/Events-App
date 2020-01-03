export function logOutSuccess(jwt) {
  return {
    type: "LOGOUT_SUCCESS",
    payload: jwt
  };
}

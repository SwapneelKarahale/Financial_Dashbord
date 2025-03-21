export const loginUser = (username, password) => (dispatch) => {
  if (username === "user" && password === "password") {
    const userData = { name: "Swapneel Karahale", token: "fake-jwt-token" };
    localStorage.setItem("user", JSON.stringify(userData));

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: userData,
    });
  } else {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: "Invalid credentials!",
    });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: "LOGOUT" });
};

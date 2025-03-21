const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isLoggedIn: true, user: action.payload, error: null };
    case "LOGIN_FAILURE":
      return { ...state, isLoggedIn: false, error: action.payload };
    case "LOGOUT":
      return { ...state, isLoggedIn: false, user: null };
    case "UPDATE_PROFILE":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

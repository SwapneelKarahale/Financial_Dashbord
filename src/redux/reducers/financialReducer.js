const initialState = {
  balance: 0,
  transactions: [],
  notifications: [],
};

export const financialReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FINANCIAL_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

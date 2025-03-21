export const fetchFinancialData = () => (dispatch) => {
  setTimeout(() => {
    const mockData = {
      balance: 5000,
      transactions: [
        { id: 1, date: "2024-03-20", amount: -200, type: "Withdrawal" },
        { id: 2, date: "2024-03-19", amount: 1500, type: "Deposit" },
      ],
      notifications: ["Your bill is due tomorrow", "You received $500"],
    };

    dispatch({
      type: "SET_FINANCIAL_DATA",
      payload: mockData,
    });
  }, 1000);
};

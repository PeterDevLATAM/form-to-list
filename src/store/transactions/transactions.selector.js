export const selectTransactionsReducer = (state) => {
  console.log(state.transaction.transactions)
  return state.transaction.transactions;
};

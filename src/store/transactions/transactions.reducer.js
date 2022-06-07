import TRANSACTIONS_ACTION_TYPES from "./transactions.types";

export const TRANSACTIONS_INITIAL_STATE = {
  transactions: [],
};

export const transactionsReducer = (
  state = TRANSACTIONS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case TRANSACTIONS_ACTION_TYPES.SET_CURRENT_TRANSACTIONS:
      return { ...state, transactions: payload };
    default:
      return state;
  }
};

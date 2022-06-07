import { combineReducers } from "redux";
import { transactionsReducer } from "./transactions/transactions.reducer";

export const rootReducer = combineReducers({
  transaction: transactionsReducer,
});

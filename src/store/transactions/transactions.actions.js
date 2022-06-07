import TRANSACTIONS_ACTION_TYPES from "./transactions.types";
import { createAction } from "../../utils/reducer.utils";

export const setTransactions= (transactions)=>{
  return createAction(TRANSACTIONS_ACTION_TYPES.SET_CURRENT_TRANSACTIONS, transactions)
}
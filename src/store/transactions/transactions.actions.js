import TRANSACTIONS_ACTION_TYPES from "./transactions.types";
import { createAction } from "../../utils/reducer.utils";


export const setTransactions = (transactions) => {
  return createAction(
    TRANSACTIONS_ACTION_TYPES.SET_CURRENT_TRANSACTIONS,
    transactions
  );
};

export const toggleOpen = (id, data) => {
  const newData = toggleOpenItem(id, data);
  return createAction(
    TRANSACTIONS_ACTION_TYPES.SET_CURRENT_TRANSACTIONS,
    newData
  );
};

const toggleOpenItem = (id, data) => {
  const index = data.findIndex((element) => element.id === id);
  data[index].open = !data[index].open;
  return [...data];
};


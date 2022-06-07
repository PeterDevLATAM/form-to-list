import "./list.styles.scss";

import ListItem from "../List-item/list-item.component";
import { useSelector } from "react-redux";
import { selectTransactionsReducer } from "../../store/transactions/transactions.selector";

function List() {
  const data = useSelector(selectTransactionsReducer)
  return (
    <ul className="list">
      {data.map((transaction) => {
        return <ListItem key={transaction.id} transaction={transaction} />;
      })}
    </ul>
  );
}

export default List;

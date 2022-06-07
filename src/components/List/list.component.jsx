import "./list.styles.scss";

import ListItem from "../List-item/list-item.component";
import { useDispatch, useSelector } from "react-redux";
import { selectTransactionsReducer } from "../../store/transactions/transactions.selector";
import {toggleOpen} from "../../store/transactions/transactions.actions"

function List() {
  console.log("rendered")
  const dispatch= useDispatch()
  let data = useSelector(selectTransactionsReducer)

  const clickHandler=(id)=>{
    dispatch(toggleOpen(id, data))
  }

  return (
    <ul className="list">
      {data.map((transaction) => {
        return <ListItem key={transaction.id} transaction={transaction} clickHandler={clickHandler} />;
      })}
    </ul>
  );
}

export default List;

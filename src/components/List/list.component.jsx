import "./list.styles.scss";
import { data } from "../utils/data";

import React from "react";
import ListItem from "../List-item/list-item.component";

function List() {
  return (
    <ul className="list">
      {data.map((transaction) => {
        return <ListItem key={transaction.id} transaction={transaction} />;
      })}
    </ul>
  );
}

export default List;

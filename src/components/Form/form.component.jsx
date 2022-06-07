import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { selectTransactionsReducer } from "../../store/transactions/transactions.selector";
import { setTransactions } from "../../store/transactions/transactions.actions";
import "./form.styles.scss";

export default function Form() {
  const [name, setName] = useState("");
  const [ammount, setAmmount] = useState(0);
  const dispatch = useDispatch();
  const transferData = useSelector(selectTransactionsReducer);

  const addTransferToList = (e) => {
    e.preventDefault();
    const date = new Date();
    const [day, month, year] = [
      date.getDay(),
      date.getMonth(),
      date.getFullYear(),
    ];
    const generateId = Math.ceil(performance.now() * date);
    const newRecord = {
      name,
      ammount,
      date: `${day}/${month}/${year}`,
      status: "pending",
      open: false,
      id: generateId,
    };
   
    transferData.push(newRecord);
    console.log(transferData)
    dispatch(setTransactions([...transferData]))
  };

  return (
    <div className="home">
      <form action="" className="form" onSubmit={addTransferToList}>
        <label htmlFor="name" className="form__label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form__input"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="ammount" className="form__label">
          Ammount
        </label>
        <input
          type="number"
          id="ammount"
          className="form__input form__input--ammount"
          onChange={(e) => setAmmount(e.target.value)}
        />
        <button className="form__button">Enviar</button>
      </form>
    </div>
  );
}

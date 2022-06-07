
import "./list-item.styles.scss";

export default function ListItem({ transaction, clickHandler }) {
  const { name, ammount, date, status, open, id } = transaction;
  console.log("abierto",id,open)

 
  return (
    <li className={open ? "list-item" : "list-item list-item--closed"} onClick={()=>clickHandler(id)}>
      <p className="list-item__name">{name}</p>
      <p className="list-item__ammount">{ammount} usd</p>
      <p className="list-item__date">{date}</p>
      <div className="list-item__status">{status}</div>

      {open && (
        <div className="list-item__status-bar">
          {status==='pending'&& <div className="list-item__status--pending">Pending</div>}
          {status==="processing"&& <div className="list-item__status--aproved">Aproved</div>}
          {status==='received'&& <div className="list-item__status--received">Received</div>}
        </div>
      )}
    </li>
  );
}

import "./list-item.styles.scss";

export default function ListItem({ transaction }) {
  const { name, ammount, date, status, open } = transaction;
  console.log(open);
  
  return (
    <li className={open ? "list-item" : "list-item list-item--closed"}>
      <p className="list-item__name">{name}</p>
      <p className="list-item__ammount">{ammount} usd</p>
      <p className="list-item__date">{date}</p>
      <div className="list-item__status">{status}</div>

      {open && (
        <div className="list-item__status-bar">
          <div className="list-item__status--pending">Pending</div>
          <div className="list-item__status--aproved">Pending</div>
          <div className="list-item__status--received">Pending</div>
        </div>
      )}
    </li>
  );
}

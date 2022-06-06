import "./form.styles.scss"

export default function Form() {
  return (
    <div className="home">
      <form action="" className="form">
        <label htmlFor="name" className="form__label">
          Name
        </label>
        <input type="text" id="name" className="form__input" />
        <label htmlFor="ammount" className="form__label">
          Ammount
        </label>
        <input type="number" id="ammount" className="form__input form__input--ammount" />
        <button className="form__button">Enviar</button>
      </form>
    </div>
  )
}

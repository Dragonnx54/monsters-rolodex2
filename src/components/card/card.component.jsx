import './card.styles.css'

const Card = ({element, onClickHandler}) => {
  let {id, name, email } = element;
  return(
    <div className="card-container">
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=100x100`}></img>
      <h2>{name}</h2>
      <p>{email}</p>
      <button onClick={() => onClickHandler(id)}>Add Dot</button>
    </div>
  )
}

export default Card;
import { Monster } from '../../App';
import './card.styles.css'

type CardProps = {
  monster: Monster,
  onClickHandler: (id: number) => void
}

const Card = ({monster, onClickHandler}: CardProps) => {
  let {id, name, email } = monster;
  return(
    <div className="card-container">
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=100x100`}></img>
      <h2>{name}</h2>
      <p>{email}</p>
      <button onClick={_ => onClickHandler(id)}>Add Dot</button>
    </div>
  )
}

export default Card;
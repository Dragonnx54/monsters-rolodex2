import Card from "../card/card.component";
import './card-list.styles.css'

const CardList = ({list, onClickHandler}) => (
  <div className="card-list">
    {list.map(listElement =>{
      let {id} = listElement;
      return(
        <Card
          key={id} 
          className='card-container' 
          element={listElement} 
          onClickHandler={onClickHandler}
        />
      )
  })}
  </div>
);


export default CardList;
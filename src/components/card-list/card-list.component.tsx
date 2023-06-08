import { MouseEventHandler } from "react";
import { Monster } from "../../App";
import Card from "../card/card.component";
import './card-list.styles.css'

type cardListProps = {
  list: Monster[],
  onClickHandler: (id: number) => void
}

const CardList = ({list, onClickHandler}: cardListProps) => (
  <div className="card-list">
    {list.map(listElement =>{
      let {id} = listElement;
      return(
        <Card
          key={id} 
          monster={listElement} 
          onClickHandler={onClickHandler}
        />
      )
  })}
  </div>
);


export default CardList;
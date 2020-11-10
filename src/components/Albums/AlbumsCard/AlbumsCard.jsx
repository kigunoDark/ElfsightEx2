import React from 'react';
import './AlbumsCard.css'
import { Link } from "react-router-dom";

function AlbumsCard(props) {
  return  (
      <Link key= { props.card.id } 
            to={ `/albums/${props.card.id}/photos/?title=${ props.card.title }`} 
            className="albums_card col"
            onMouseEnter= {() => {props.onCardEnter(props.card.id)}}>
                
        <div >
            <div className="albums_card__overlay">
                <h3 className="albums_card__number"> {props.albumLength}</h3>
            </div>
            <div className="albums_card__title">  { props.card.title }</div>
        </div>
      </Link>
  )
}

export default AlbumsCard;
  

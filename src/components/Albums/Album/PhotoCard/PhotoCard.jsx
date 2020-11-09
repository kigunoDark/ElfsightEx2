import React from 'react';
import './PhotoCard.css';

function PhotoCard(props) {
  return  (
    <div onClick={props.handleCardClick} onMouseEnter={props.onMouseEnterPlay} key={props.id}  className="col photo_card">  
      <img width="100%" src={props.url}  alt={props.title}/> 
    </div>  
  )
}
export default PhotoCard;
import React from 'react';
import './AlbumsBoard.css';
import AlbumsCard from './AlbumsCard/AlbumsCard';
import Loder from '../Loader/Loader';
function AlbumsBoard(props) {
  return  (
      <div>
        {props.isLoading ? 
          <Loder /> :  
          <div className="albums container">
            <div className="albums_title">
              <h1> Welcome to the TopPhotoGallery</h1>
              <p> Please choose the album and enjoy. Have a good time :)</p>
            </div>
            <div className="row">
              { props.albums.map((card) => 
                      <AlbumsCard  key = { card.id } 
                                   card = { card }
                                   albumLength = { props.albumLength} 
                                   onCardEnter = { props.onCardEnter}  /> ) }
            </div>
        </div> 
        }
      </div>
   
  )
}

export default AlbumsBoard;
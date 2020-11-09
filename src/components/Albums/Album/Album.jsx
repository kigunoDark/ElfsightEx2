import React from 'react';
import PhotoModalContainer from './PhotoCard/PhotoModal/PhotoModalContainer';
import PhotoCard from './PhotoCard/PhotoCard';
import Loader from '../../Loader/Loader';
import { Link } from 'react-router-dom';
import './Album.css';

function Album(props) {

  return  (

   <div>
      { props.isLoading  ?  <
        Loader />  :
        <div className="album">
        
        <PhotoModalContainer  imgUrl = { props.imgUrl } 
                              isOpened = { props.isOpened } 
                              album = { props.album } 
                              modalStatus = { props.modalStatus }
                              handleCardClick = { props.handleCardClick } />
        <div className="container">
            <div className="row">
                <div className="col album_title"> { props.query.get('title')}</div>
                <div className="col"></div>
                <Link className="col" to='/'>
                    <div className="modal_customn_btn"> Back </div>
                </Link>
            </div>
            <div className="row">
              {props.album.map(photo => 
                <PhotoCard handleCardClick={props.handleCardClick} 
                           key = { photo.id }  
                           url = { photo.url } 
                           title = { photo.title } /> 
              )}
            </div>
        </div>
    </div> }
   </div>

   
  )
}
export default Album;
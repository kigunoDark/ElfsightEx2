import React, {useRef, useState, useEffect} from 'react';
import PhotoModal from './PhotoModal';

function PhotoModalContainer(props) {

  const [album, setAlbum] = useState(''),
         modalRef = useRef();

  let  modalStatus = props.modalStatus;

  useEffect(() => {
    if(modalStatus) {
      let album = [...props.album],
          main = '';
      album.map(el => {(el.url  === props.imgUrl) && (main = el)})
      album = album.filter(el => el.url !== main.url);
      album.unshift(main);
      setAlbum(album)
      
    }
  },[modalStatus]);
  

  return  <PhotoModal modalAlbum = { album }  
                      album = { props.album } 
                      modalRef = { modalRef }  
                      modalStatus = { modalStatus }
                      handleCardClick = { props.handleCardClick } />
}

export default PhotoModalContainer;
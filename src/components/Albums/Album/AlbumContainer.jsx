import React, { useEffect, useState } from 'react';
import { mainApi } from '../../../api/mainApi';
import { useParams, useLocation } from 'react-router-dom';
import Album from './Album';


function AlbumContainer() {
  let  { albomId }= useParams();
  let query = useQuery();
  const [album, setAlbum] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const [isLoading,  setIsLoading] = useState(false);

  function useQuery() { return new URLSearchParams(useLocation().search); }
  
  let handleCardClick = (e) => {
    if(!modalStatus) {
      /* Взял просто из dom обычным js, возможно не самый лучший способ, но так-как
      это можно приименить я решил, что можно попробовать и так*/
      document.body.style.overflow = 'hidden';
      setIsOpened(true);


    } else {
      setIsOpened(false);
      document.body.style.overflow = "unset";
    }

    setModalStatus(!modalStatus)
    setImgUrl(e.target.src);
  }
  
  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        let album = await mainApi.getPhotos(albomId);
        setAlbum(album);
        setTimeout(() => setIsLoading(false), 1000);
      } catch (err) {
        console.log(err);
      }
    })();
  },[]);

  return  <Album album={ album } 
                 imgUrl={ imgUrl } 
                 isOpened={ isOpened } 
                 modalStatus={ modalStatus }  
                 handleCardClick={ handleCardClick }
                 query = { query }
                 isLoading = { isLoading } />
};

export default AlbumContainer;
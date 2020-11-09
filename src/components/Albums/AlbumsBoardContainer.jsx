import React, { useEffect, useState } from 'react';
import { mainApi } from '../../api/mainApi';
import AlbumsBoard from './AlbumsBoard';

function AlbumsBoardContainer() {
  const  [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        let cards = await mainApi.getAlboms();

        // Так-как альбомов всего 100  в принципе можно и так, загружает пару секунд на главную
        for(let card of cards) {
          let photos = await mainApi.getPhotos(1)
          card.newVal = photos;
        }
        setAlbums(cards);
        
        setIsLoading(false)
    
      } catch (err) {
        console.log(err);
      }
    })();
  },[]);
  return  <AlbumsBoard isLoading={isLoading} albums={ albums }  />
};

export default AlbumsBoardContainer;
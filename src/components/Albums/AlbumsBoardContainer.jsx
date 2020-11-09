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
        setAlbums(cards);
        /* Загрузка слишком быстрая, поэтому для демонстрации загрузочного меню,
        на данной странице сделал загрузку через таймаут*/
        setTimeout(() => setIsLoading(false), 1000);
      } catch (err) {
        console.log(err);
      }
    })();
  },[]);
  return  <AlbumsBoard isLoading={isLoading} albums={ albums }  />
};

export default AlbumsBoardContainer;
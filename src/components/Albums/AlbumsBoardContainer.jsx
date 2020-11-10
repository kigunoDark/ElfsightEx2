import React, { useEffect, useState } from 'react';
import { mainApi } from '../../api/mainApi';
import AlbumsBoard from './AlbumsBoard';

function AlbumsBoardContainer() {
  const  [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [albumLength, setAlbumLength] = useState(null)


  /* Данную проблему можжно было бы решить 
    1.внедрением разбиение по страницам (пегинация) - На что могло бы уйти 
    чуть больше времени.
    2. Я решил сделать таким способом. В целом можно было 
      добавить еще возможность прогрузки карточки, при наведени, 
      что даст гарант в случае длительного получения данных не оставлять экран пустым.
    3. Вариант, допустим получать сразу длину каждого альбома в переменную, и добавить загруку на самих карточках,
      Это не лучший способ, но также может отображать пользователю поочередную загрузку каждлго элемента */
  async function onCardEnter(id) {
       let albumLength  = await mainApi.getPhotos(id);
       setAlbumLength(albumLength.length)    
  };

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        let cards = await mainApi.getAlboms();
        setAlbums(cards);
        setIsLoading(false)
    
      } catch (err) {
        console.log(err);
      }
    })();
  },[]);
  return  <AlbumsBoard isLoading = { isLoading } 
                       albums = { albums } 
                       albumLength = { albumLength } 
                       onCardEnter = { onCardEnter } />
};

export default AlbumsBoardContainer;
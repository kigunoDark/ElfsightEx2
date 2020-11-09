import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const mainApi = {
  getAlboms: () => {
    return instance
      .get("/albums")
      .then((alboms) => alboms.data)
      .catch((err) => err);
  },
  getPhotos: (albomId) => {
    return instance
      .get(`/albums/${albomId}/photos`)
      .then((photos) => photos.data)
      .catch((err) => err);
  },
};

import { basedUrl } from "../Network/Network";

export const createPhotogelaryUrl = basedUrl + "photogelary/create";

export const getPhotogelaryUrl = basedUrl + "photogelary/";

export const deletePhotogelaryUrl = (id) => basedUrl + `photogelary/delete/${id}`;

export const updatePhotogelaryUrl = (id) => basedUrl + `photogelary/update/${id}`;



export const deleteAlbumUrl = (id) => basedUrl + `photogelary/album/${id}`;

export const getAlbumUrl = basedUrl + "photogelary/album/";

export const createAlbumUrl = basedUrl + "photogelary/album/create";

export const getPhotogelaryByAlbumUrl = (album) =>
  basedUrl + `photogelary/album/${album}`;

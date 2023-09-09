import { basedUrl } from "../Network/Network";

export const createPhotogelaryUrl = basedUrl + "photogelary/create";

export const getPhotogelaryUrl = basedUrl + "photogelary/";

export const deletePhotogelaryUrl = (id) => basedUrl + `photogelary/${id}`;

export const updatePhotogelaryUrl = (id) => basedUrl + `photogelary/${id}`;
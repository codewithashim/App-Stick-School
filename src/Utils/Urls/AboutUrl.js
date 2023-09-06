import { basedUrl } from "../Network/Network";

export const createAboutUrl = basedUrl + "about/create";

export const getAboutUrl = basedUrl + "about/";

export const deleteAboutUrl = (id) => basedUrl + `about/${id}`;

export const updateAboutUrl = (id) => basedUrl + `about/${id}`;
import { basedUrl } from "../Network/Network";

export const createHeaderUrl = basedUrl + "header/create";

export const getHeaderUrl = basedUrl + "header/";

export const deleteHeaderUrl = (id) => basedUrl + `header/${id}`;

export const updateHeaderUrl = (id) => basedUrl + `header/${id}`;
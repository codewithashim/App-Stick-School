import { basedUrl } from "../Network/Network";

export const createSylebusUrl = basedUrl + "sylebus/create";

export const getSylebusUrl = basedUrl + "sylebus/";

export const deleteSylebusUrl = (id) => basedUrl + `sylebus/delete/${id}`;

export const getSylebusByIdUrl = (id)  => basedUrl + `sylebus/get-singel/${id}`;

export const updateSylebusUrl = (id) => basedUrl + `sylebus/update/${id}`;
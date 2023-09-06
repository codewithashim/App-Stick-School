import { basedUrl } from "../Network/Network";

export const createResultUrl = basedUrl + "result/create";

export const getResultUrl = basedUrl + "result/";

export const deleteResultUrl = (id) => basedUrl + `result/${id}`;

export const updateResultUrl = (id) => basedUrl + `result/${id}`;
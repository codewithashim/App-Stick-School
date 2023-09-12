import { basedUrl } from "../Network/Network";

export const createResultUrl = basedUrl + "result/create";

export const getResultUrl = basedUrl + "result/";

export const deleteResultUrl = (id) => basedUrl + `result/delete/${id}`;

export const getResultByIdUrl = (id)  => basedUrl + `result/get-singel/${id}`;

export const updateResultUrl = (id) => basedUrl + `result/update/${id}`;
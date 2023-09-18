import { basedUrl } from "../Network/Network";

export const createRutineUrl = basedUrl + "rutine/create";

export const getRutineUrl = basedUrl + "rutine/";

export const deleteRutineUrl = (id) => basedUrl + `rutine/delete/${id}`;

export const getRutineByIdUrl = (id)  => basedUrl + `rutine/get-singel/${id}`;

export const updateRutineUrl = (id) => basedUrl + `rutine/update/${id}`;
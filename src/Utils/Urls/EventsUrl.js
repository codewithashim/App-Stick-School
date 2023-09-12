import { basedUrl } from "../Network/Network";

export const createEventUrl = basedUrl + "event/create";

export const getEventUrl = basedUrl + "event/";

export const deleteEventUrl = (id) => basedUrl + `event/delete/${id}`;

export const getSingelEventUrl = (id) => basedUrl + `event/get-singel/${id}`;

export const updateEventUrl = (id) => basedUrl + `event/update/${id}`;
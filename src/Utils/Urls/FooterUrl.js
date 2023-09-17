import { basedUrl } from "../Network/Network";

export const createFooterrUrl = basedUrl + "footer/create";

export const getFooterUrl = basedUrl + "footer/";

export const deleteFooterUrl = (id) => basedUrl + `footer/delete/${id}`;

export const updateFooterUrl = (id) => basedUrl + `footer/update/${id}`;


export const createFooterLink = basedUrl + "footer/create-link";

export const getFooterLink = basedUrl + "footer/get-link";

export const deleteFooterLink = (id) => basedUrl + `footer/delete-link/${id}`;

export const updateFooterLink = (id) => basedUrl + `footer/update-link/${id}`;



import { basedUrl } from "../Network/Network";

export const createStaffUrl = basedUrl + "staff/create";

export const getStaffUrl = basedUrl + "staff/";

export const getSingelStaffUrl = (id) => basedUrl + `staff/get-singel/${id}`;

export const deleteStaffUrl = (id) => basedUrl + `staff/delete/${id}`;

export const updateStaffUrl = (id) => basedUrl + `staff/update/${id}`;
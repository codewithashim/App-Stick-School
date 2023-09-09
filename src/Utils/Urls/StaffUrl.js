import { basedUrl } from "../Network/Network";

export const createStaffUrl = basedUrl + "staff/create";

export const getStaffUrl = basedUrl + "staff/";

export const deleteStaffUrl = (id) => basedUrl + `staff/${id}`;

export const updateStaffUrl = (id) => basedUrl + `staff/${id}`;
import { basedUrl } from "../Network/Network";

export const createHomesliderUrl = basedUrl + "homeslider/create";

export const getHomesliderUrl = basedUrl + "homeslider/";

export const deleteHomesliderUrl = (id) => basedUrl + `homeslider/delete/${id}`;

export const updateHomesliderUrl = (id) => basedUrl + `homeslider/update/${id}`;
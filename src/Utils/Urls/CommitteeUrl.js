import { basedUrl } from "../Network/Network";

export const createCommitteeUrl = basedUrl + "committee/create";

export const getCommitteeUrl = basedUrl + "committee/";

export const deleteCommitteeUrl = (id) => basedUrl + `committee/delete/${id}`;

export const updateCommitteeUrl = (id) => basedUrl + `committee/update/${id}`;
import { basedUrl } from "../Network/Network";

export const createNoticeUrl = basedUrl + "notice/create";

export const getNoticeUrl = basedUrl + "notice/";

export const getSingelNoticeUrl = (id)=> basedUrl + `notice/get-singel/${id}`;

export const deleteNoticeUrl = (id) => basedUrl + `notice/delete/${id}`;

export const updateNoticeUrl = (id) => basedUrl + `notice/update/${id}`;
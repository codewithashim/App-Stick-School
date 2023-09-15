import { basedUrl } from "../Network/Network";

export const createTeacherUrl = basedUrl + "teacher/create";

export const getTeacherUrl = basedUrl + "teacher/";

export const getSingelTeacherUrl = (id) => basedUrl + `teacher/get-singel/${id}`;

export const deleteTeacherUrl = (id) => basedUrl + `teacher/delete/${id}`;

export const updateTeacherUrl = (id) => basedUrl + `teacher/update/${id}`;



export const createMessageUrl = basedUrl + "teacher/create-message";

export const getMessagesUrl = basedUrl + "teacher/get-message";

export const deleteMessageUrl = (id) => basedUrl + `teacher/delete-message/${id}`;

export const updateMessageUrl = (id) => basedUrl + `teacher/update-message/${id}`;

export const getSingelMessageUrl = (id) => basedUrl + `teacher/get-singel-message/${id}`;
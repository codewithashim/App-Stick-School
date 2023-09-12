import { basedUrl } from "../Network/Network";

export const createTeacherUrl = basedUrl + "teacher/create";

export const getTeacherUrl = basedUrl + "teacher/";

export const getSingelTeacherUrl = (id) => basedUrl + `teacher/get-singel/${id}`;

export const deleteTeacherUrl = (id) => basedUrl + `teacher/delete/${id}`;

export const updateTeacherUrl = (id) => basedUrl + `teacher/update/${id}`;
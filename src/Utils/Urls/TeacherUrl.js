import { basedUrl } from "../Network/Network";

export const createTeacherUrl = basedUrl + "teacher/create";

export const getTeacherUrl = basedUrl + "teacher/";

export const deleteTeacherUrl = (id) => basedUrl + `teacher/${id}`;

export const updateTeacherUrl = (id) => basedUrl + `teacher/${id}`;
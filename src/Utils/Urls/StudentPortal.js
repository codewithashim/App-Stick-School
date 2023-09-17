import { basedUrl } from "../Network/Network";

export const createStudentPortalUrl = basedUrl + "student-portal/create";

export const getStudentPortalUrl = basedUrl + "student-portal/";

export const deleteStudentPortalUrl = (id) => basedUrl + `student-portal/delete/${id}`;

export const updateStudentPortalUrl = (id) => basedUrl + `student-portal/update/${id}`;
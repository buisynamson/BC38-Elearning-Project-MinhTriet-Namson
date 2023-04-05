import requester from "app/api";
import { apiPath } from "app/apiPath";

export const getCourseList = async (page, tenKhoaHoc) => {
  return await requester({
    method: "GET",
    url: apiPath.GET_COURSE_LIST,
    params: { tenKhoaHoc, page, pageSize: 10, maNhom: "GP01" },
  });
};

export const getInfoAccountUser = async () => {
  return await requester({
    method: "POST",
    url: apiPath.ACCOUNT_INFO,
  });
};

export const getCategoryCourse = async () => {
  return await requester({ method: "GET", url: apiPath.CATEGORY_COURSE });
};

export const addCourse = async (formData) => {
  return await requester({
    method: "POST",
    url: apiPath.ADD_COURSE,
    data: formData,
  });
};

export const addCourseUploadImage = async (form) => {
  return await requester({
    method: "POST",
    url: apiPath.UPLOAD_IMAGE_COURSE,
    data: form,
  });
};

export const deleteCourse = async (maKhoaHoc) => {
  return await requester({
    method: "DELETE",
    url: apiPath.DELETE_COURSE,
    params: { maKhoaHoc },
  });
};

export const getDetailCourse = async (maKhoaHoc) => {
  return await requester({
    method: "GET",
    url: apiPath.DETAIL_COURSE,
    params: { maKhoaHoc },
  });
};

export const updateCourse = async (formData) => {
  return await requester({
    method: "PUT",
    url: apiPath.UPDATE_COURSE,
    data: formData,
  });
};

export const updateCourseUploadImage = async (formData) => {
  return await requester({
    method: "POST",
    url: apiPath.UPDATE_COURSE_UPLOAD_IMAGE,
    data: formData,
  });
};

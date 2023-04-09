import requester from "app/api";
import { apiPath } from "app/apiPath";

export const getCourseListCategory = async (maDanhMuc) => {
  return await requester({
    method: "GET",
    url: apiPath.GET_COURSE_CATEGORY,
    params: { maDanhMuc },
  });
};

export const getCourseListPage = async (tenKhoaHoc, page) => {
  return await requester({
    method: "GET",
    url: apiPath.GET_COURSE_LIST_PAGE,
    params: { tenKhoaHoc, page, pageSize: 16, maNhom: "GP01" },
  });
};

export const registerCourse = async (formData) => {
  return await requester({
    method: "POST",
    url: apiPath.REGISTER_COURSE,
    data: formData,
  });
};

export const cancelRegisterCourse = async (form) => {
  return await requester({
    method: "POST",
    url: apiPath.CANCEL_REGISTER,
    data: form,
  });
};

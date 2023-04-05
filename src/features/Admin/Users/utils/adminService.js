import requester from "app/api";
import { apiPath } from "app/apiPath";

export const getUser = async (page, tuKhoa) => {
  return await requester({
    method: "GET",
    url: apiPath.GET_USER_LIST,
    params: { maNhom: "GP01", page: page, pageSize: 10, tuKhoa },
  });
};

export const getTypeUser = async () => {
  return await requester({ method: "GET", url: apiPath.GET_LIST_TYPE_USER });
};

export const addUser = async (formData) => {
  return await requester({
    method: "POST",
    url: apiPath.ADD_USER,
    data: formData,
  });
};

export const deleteUser = async (taiKhoan) => {
  return await requester({
    method: "DELETE",
    url: apiPath.DELETE_USER,
    params: { taiKhoan },
  });
};

export const searchUser = async (tuKhoa) => {
  return await requester({
    method: "GET",
    url: apiPath.SEARCH_USER,
    params: {
      tuKhoa,
    },
  });
};

export const updateUser = async (formData) => {
  return await requester({
    method: "PUT",
    url: apiPath.UPDATE_USER,
    data: formData,
  });
};

import { useNavigate } from "react-router-dom";
import {
  addUser,
  deleteUser,
  getUser,
  searchUser,
  updateUser,
} from "../utils/adminService";
import actions from "./type";

export const fetchUserAction =
  (page = 1, tuKhoa = null) =>
  async (next) => {
    try {
      const res = await getUser(page, tuKhoa);
      next({ type: actions.SET_USER_LIST, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteUserAction = (taiKhoan) => async (next) => {
  try {
    await deleteUser(taiKhoan);
    alert("Xóa người dùng thành công");
    next(fetchUserAction());
  } catch (error) {
    console.log(error);
  }
};

export const searchUserAction = (tuKhoa) => async (next) => {
  try {
    const res = await searchUser(tuKhoa);
    next({ type: actions.SEARCH_USER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const updateUserAction = (formData) => async (next) => {
  try {
    await updateUser(formData);
    alert("Cập nhật thành công");
    next(fetchUserAction());
  } catch (error) {
    console.log(error);
  }
};

export const addUserAction = (formData) => async (next) => {
  try {
    await addUser(formData);
    alert("Thêm người dùng thành công");
    next(fetchUserAction());
  } catch (error) {
    console.log(error);
  }
};

export const logoutAction = () => {
  localStorage.removeItem("TOKEN");
  localStorage.removeItem("USER_LOGIN");
};

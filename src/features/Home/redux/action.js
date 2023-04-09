import { getCourseListCategory, getCourseListPage } from "../utils/homeService";
import actions from "./type";

export const fetchCourseListCategory = (maDanhMuc) => async (next) => {
  try {
    const res = await getCourseListCategory(maDanhMuc);
    next({ type: actions.SET_COURSE_CATEGORY, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCourseListPage =
  (tenKhoaHoc = null, page = 1) =>
  async (next) => {
    try {
      const res = await getCourseListPage(tenKhoaHoc, page);
      next({ type: actions.SET_COURSE_LIST_PAGE, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

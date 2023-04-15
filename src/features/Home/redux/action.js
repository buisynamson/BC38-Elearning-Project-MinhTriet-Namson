import { getCourseListCategory, getCourseListPage, getDetailCourse } from "../utils/homeService";
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
  (tenKhoaHoc, page) =>
  async (next) => {
    try {
      const res = await getCourseListPage(tenKhoaHoc, page);
      next({ type: actions.SET_COURSE_LIST_PAGE, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };


  export const fetchDetailCourse = (maKhoaHoc) => async (next) => {
    try {
      const res = await getDetailCourse(maKhoaHoc);
      next({ type: actions.SET_DETAIL_COURSE, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
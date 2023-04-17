import Swal from "sweetalert2";
import { cancelRegisterCourse, registerCourse } from "../utils/homeService";
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

  export const enrollCourse =  (infoEnroll) => async (next) =>{
    try{
       const res =  await registerCourse(infoEnroll);
       Swal.fire({
        position: "center",
        icon: "success",
        title: res.data,
        showConfirmButton: false,
        timer: 1500,
      });
      }catch (err){
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.response.data,
          showConfirmButton: false,
          timer: 1500,
        });
      
    }
  }

  export const cancelEnroll =  (infoEnroll) => async (next) =>{
    try{
       const res =  await cancelRegisterCourse(infoEnroll);
       Swal.fire({
        position: "center",
        icon: "success",
        title: res.data,
        showConfirmButton: false,
        timer: 1500,
      });
      }catch (err){
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.response.data,
          showConfirmButton: false,
          timer: 1500,
        });
      
    }
  }
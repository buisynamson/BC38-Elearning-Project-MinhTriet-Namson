import Swal from "sweetalert2";
import { signin, signup, fetchProfile } from "../utils/userService";
import actions from "./type";

export const signinAction = (signInInfo) => async (next) => {
  try {
    const res = await signin(signInInfo);

    if (res.status === 200) {

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Đăng nhập thành công",
        showConfirmButton: false,
        timer: 1500,
      });


      next({ type: actions.USER_SIGNIN, payload: res.data });
      return true;
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.response.data,
    });

    return false;
  }
};

export const signupAction = (signupInfo) => async (next) => {
  try {
    const res = await signup(signupInfo);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Đăng ký tài khoản thành công",
      showConfirmButton: false,
      timer: 1500,
    });
    // next({ type: actions.USER_SIGNUP, payload: res.data });
    return true;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.response.data,
    });

    return false;
  }
};

export const fetchUserProfile = (token) => async (next) =>{
  try{
    const res = await fetchProfile(token);
    next({ type: actions.USER_LOGGED, payload: res.data })
  }
  catch (err){
    console.log(err);
  }
}
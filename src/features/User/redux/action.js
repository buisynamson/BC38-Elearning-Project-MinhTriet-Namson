import { signin } from "../utils/userService";
import actions from "./type";

export const signinAction = (signInInfo) => async (next) => {
  try {
    const res = await signin(signInInfo);

    if (res.status === 200) {
      alert("Đăng nhập thành công");
      next({ type: actions.USER_SIGNIN, payload: res.data });
    }
  } catch (error) {
    console.log(error);
  }
};

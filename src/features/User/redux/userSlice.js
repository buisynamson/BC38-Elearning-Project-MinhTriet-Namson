import actions from "./type";
import produce from "immer";

let user = {};
if (localStorage.getItem("USER_LOGIN")) {
  user = JSON.parse(localStorage.getItem("USER_LOGIN"));
}

const initialState = {
  userSignin: user,
  userInfo: {}
};

const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case actions.USER_SIGNIN:
        localStorage.setItem("USER_LOGIN", JSON.stringify(payload));
        localStorage.setItem("TOKEN", payload.accessToken);
        draft.userSignin = payload;
        break;
      case actions.USER_LOGGED : 
      draft.userInfo = payload;
      break;
      default:
        break;
    }
  });
};

export default reducer;

import actions from "./type";
import produce from "immer";

const initialState = {
  userList: {},
  userSearchList: [],
};

const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case actions.SET_USER_LIST:
        draft.userList = payload;
        break;

      case actions.SEARCH_USER:
        draft.userSearchList = payload;
        break;

      default:
        break;
    }
  });
};

export default reducer;

import actions from "./type";
import produce from "immer";

const initialState = { courseList: [], coursePage: {} };

const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case actions.SET_COURSE_CATEGORY:
        draft.courseList = payload;
        break;

      case actions.SET_COURSE_LIST_PAGE:
        draft.coursePage = payload;
        break;

      default:
        break;
    }
  });
};

export default reducer;

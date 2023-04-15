import actions from "./type";
import produce from "immer";

const initialState = { courseList: [],
   coursePage: {},
  detailCourse: {}};

const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case actions.SET_COURSE_CATEGORY:
        draft.courseList = payload;
        break;

      case actions.SET_COURSE_LIST_PAGE:
        draft.coursePage = payload;
        break;
      case actions.SET_DETAIL_COURSE:
          draft.detailCourse = payload;
          break;
      default:
        break;
    }
  });
};

export default reducer;

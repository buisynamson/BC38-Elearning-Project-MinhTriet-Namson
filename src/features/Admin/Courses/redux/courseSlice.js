import actions from "./type";
import produce from "immer";

const initialState = {
  courseList: {},
  accountUser: null,
  categoryCourse: [],
  detailCourse: {},
};

const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case actions.SET_COURSE_LIST:
        draft.courseList = payload;
        break;

      case actions.SET_USER_ACCOUNT:
        draft.accountUser = payload;
        break;

      case actions.SET_CATEGORY_COURSE:
        draft.categoryCourse = payload;
        break;

      case actions.SET_COURSE_DETAIL:
        draft.detailCourse = payload;
        break;

      default:
        break;
    }
  });
};

export default reducer;

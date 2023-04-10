import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userListReducer from "features/Admin/Users/redux/adminSlice";
import courseListReducer from "features/Admin/Courses/redux/courseSlice";
import registerReducer from "features/Admin/Register/redux/registerSlice";
import userReducer from "features/User/redux/userSlice";


const reducer = combineReducers({
  userListReducer: userListReducer,
  userReducer: userReducer,
  courseListReducer: courseListReducer,
  registerReducer: registerReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

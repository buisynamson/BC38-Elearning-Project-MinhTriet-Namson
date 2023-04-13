import AddCourse from "features/Admin/Courses/AddCourse";
import CoursesList from "features/Admin/Courses/CourseList";
import EditCourse from "features/Admin/Courses/EditCourse";
import AddUser from "features/Admin/Users/AddUser";
import EditUser from "features/Admin/Users/EditUser";
import UserList from "features/Admin/Users/UserList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminTemplate from "templates/AdminTemplate/AdminTemplate";
import "./App.css";
import UserListRegister from "features/Admin/Register/UserListRegister";
import CourseListRegister from "features/Admin/Register/CourseListRegister";

import Category from "features/Home/Category";
import Home from "features/Home/Home";
import HomeTemplate from "templates/HomeTemplate/HomeTemplate";
import Login from "features/Home/Authentication/Login/Login";
import Signup from "features/Home/Authentication/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeTemplate />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/danh-muc-khoa-hoc" exact element={<Category />} />
        </Route>
          
          {/* Authorize User */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>

        {/* admin */}
        <Route path="/admin" exact element={<AdminTemplate />}>
          <Route path="/admin/users" exact element={<UserList />} />
          <Route path="/admin/users/add-user" exact element={<AddUser />} />
          <Route
            path="/admin/users/edit-user/:id"
            exact
            element={<EditUser />}
          />

          <Route path="/admin/courses" exact element={<CoursesList />} />
          <Route
            path="/admin/courses/add-course"
            exact
            element={<AddCourse />}
          />
          <Route
            path="/admin/courses/edit-course/:id"
            exact
            element={<EditCourse />}
          />
          <Route
            path="/admin/register/user-list/:id"
            exact
            element={<UserListRegister />}
          />
          <Route
            path="/admin/register/course-list/:id"
            exact
            element={<CourseListRegister />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Button } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import {  NavLink, useNavigate } from "react-router-dom";
import actions from "../../User/redux/type";

export default function Header() {
  const dispatch = useDispatch()
  const [showNav, setShowNav] = useState("hidden");
  const handleLogOut = async () => {
    await localStorage.removeItem("TOKEN");
    dispatch({
      type: actions.USER_LOGOUT,
    });
  };

  const userSignin = useSelector(state=> state.userReducer.userSignin);
  const userLogged = useSelector(state=> state.userReducer.userInfo);
  const navigate = useNavigate();
  const renderUserAction = () => {
    if (localStorage.getItem("TOKEN") === null) {
      return (
        <div className="flex w-40 items-center">
        <NavLink className="font-semibold text-yellow-400 text-lg no-underline" to="/login">Log in</NavLink>
        <span className="font-semibold mx-4 text-white">/</span>
        <NavLink className="font-semibold text-white text-lg no-underline" to="/signup">Sign up</NavLink>
      </div>
      );
    } else {
      return (
        <div className="flex items-center mr-10 ">
          <Button onClickCapture={()=> { return navigate("/thong-tin-ca-nhan")}} type="ghost" className="mr-2 text-white text-lg py-0">
            Hello,{" "}
            <b className="text-yellow-400">
             {userSignin?.hoTen || userLogged?.hoTen}
            </b>
          </Button>
          <button
            className="border-amber-300 bg-transparent cursor-pointer rounded-xl text-white p-2 hover:bg-yellow-400 hover:text-white font-bold uppercase transition-all"
            onClick={handleLogOut}
          >
            Log out
          </button>
        </div>
      );
    }
  };


  return (



   
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <NavLink to="/" className="logo w-30 h-20 flex p-2">
      <img src="/img/600e8df5132cb60024b04964.jpg" className="w-full" alt="Flowbite Logo" />
    </NavLink>
    <button onClick={()=>{ return showNav === "hidden" ? setShowNav("block") : setShowNav("hidden")}} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
    </button>
    <div className={`${showNav} w-full md:block md:w-auto`} id="navbar-default">
      <ul className="list-none  font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink to="/" className="block no-underline py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Trang chủ</NavLink>
        </li>
        <li>
          <NavLink to="/danh-muc-khoa-hoc" className="block no-underline py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Khoá học</NavLink>
        </li>
        <li>
          <NavLink className="block no-underline py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Về chúng tôi</NavLink>
        </li>
        <li>
          <NavLink className="block no-underline py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Liên hệ</NavLink>
        </li>
        <li>
        {
      renderUserAction()
    }
        </li>
      </ul>

       
    </div>
    
  </div>
</nav>






  );
}

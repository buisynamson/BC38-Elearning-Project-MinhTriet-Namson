import Footer from "features/Home/components/Footer";
import Header from "features/Home/components/Header";
import { fetchUserProfile } from "features/User/redux/action";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const HomeTemplate = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.userReducer.userSignin)
  useEffect(()=>{
    dispatch(
      fetchUserProfile(localStorage.getItem("TOKEN") || userToken?.accessToken)
    )
  },[])

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeTemplate;

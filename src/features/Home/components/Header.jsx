import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link, NavLink } from "react-router-dom";

const items = [
  {
    label: (
      <Link to="/">
        Trang chủ
      </Link>
    ),
    key: 'Signin',

  }
  ,
  {
    label: (
      <Link to="/danh-muc-khoa-hoc" >
        Khoá học
      </Link>
    ),
    key: 'Signup',
  }
  ,
  {
    label: (
      <Link to="" >
        Về chúng tôi
      </Link>
    ),
    key: 'Signup1',
  }
  ,
  {
    label: (
      <Link to="" >
        Liên hệ
      </Link>
    ),
    key: 'Signup2',
  }

];
export default function Header() {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="flex justify-between" >
    <div className="logo w-30 h-20 flex p-2 ">
      <img className="w-full rounded-3xl" src="/img/600e8df5132cb60024b04964.jpg" alt="" />
    </div>
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className=" items-center text-lg font-semibold"
  
    />

    <div className="flex w-40 items-center">
        <NavLink className="font-semibold text-lg no-underline" to="/login">Log in</NavLink>
        <span className="font-semibold mx-4">/</span>
        <NavLink className="font-semibold text-lg no-underline" to="/signup">Sign up</NavLink>
    </div>

    </div>
   
  );
}

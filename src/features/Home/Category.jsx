import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Pagination } from "antd";
import Meta from "antd/es/card/Meta";
import Search from "antd/es/transfer/search";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseListPage } from "./redux/action";

import InfiniteScroll from "react-infinite-scroll-component";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "antd/es/radio";

export default function Category() {
  const dispatch = useDispatch();
  const courseList = useSelector((state) => state.homeReducer.coursePage);
  const [searchParam, setUseSearchParam] = useSearchParams();
  const [searchCourse, setSearchCourse] = useState(null);
  const navigate = useNavigate();

  const handleChange = async (evt) => {
    let value = await evt.target.value;
    if (value === "") {
      return setSearchCourse(null);
    }

    setUseSearchParam({ page: "1" });

    setSearchCourse(value);
    console.log(searchCourse);
  };

  const renderCourses = () => {
    return courseList.items?.map((course) => {
      return (
        <div className="flex justify-center" key={course.maKhoaHoc}>
          <Card
            style={{
              width: 300,
            }}
           className="hover:shadow-lg transition-all"
          
          >
            <div style={{backgroundImage: `url(${course.hinhAnh})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'contain'}} className="w-full h-32">

            </div>
            <div className="w-full mt-3">
              <p className="truncate">
                {course.moTa}
              </p>
              <NavLink className='inline-block' to={`/khoa-hoc/${course.maKhoaHoc}`}>Xem thêm</NavLink>
            </div>

            <div className="teacher mt-3">
              <h3>{course.nguoiTao.hoTen === null ? "No name" : course.nguoiTao.hoTen }</h3>
            </div>

            <button className="mt-5 bg-amber-400 font-semibold border-none px-5 py-3 rounded-lg transition-all focus:shadow-md cursor-pointer" onClick={()=>{return navigate(`/khoa-hoc/${course.maKhoaHoc}`)}}>Xem chi tiết</button>
          </Card>
        </div>
      );
    });
  };

  useEffect(() => {
    dispatch(fetchCourseListPage(searchCourse, searchParam.get("page")));
  }, [searchParam.get("page"), searchCourse]);

  return (
    <div className="px-2 bg-slate-50">
      <div className="w-1/2 py-4 ml-6 mb-3">
        <Search
          placeholder="input search text"
          allowClear
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-4 gap-7 ">{renderCourses()}</div>

      <Pagination
        className="text-center mt-6"
        current={Number(searchParam.get("page"))}
        pageSize={16}
        total={courseList.totalCount}
        onChange={(page, pageSize) => {
          // dispatch(fetchMovies(page));
          setUseSearchParam({ page });
        }}
      />
    </div>
  );
}

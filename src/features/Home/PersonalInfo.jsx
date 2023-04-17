import { Button, Col, Row } from "antd";
import { fetchPersonalInfo } from "features/User/redux/action";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Collapse } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { cancelEnroll } from "./redux/action";
const { Panel } = Collapse;
const PersonalInfo = () => {
  const dispatch = useDispatch();

  const { userSignin, personalInfo } = useSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(
      fetchPersonalInfo(
        localStorage.getItem("TOKEN") || userSignin?.accessToken
      )
    );
  }, [personalInfo?.chiTietKhoaHocGhiDanh]);

  return (
    <div className="container mx-auto px-60 py-10">
      <Row>
        <Col span={2}>
          <div className="container ">
            <img src="./img/user.png" className="w-full" alt="" />
          </div>
        </Col>
        <Col span={22}>
          <div className="container pl-10">
            <p className="text-sm">
              <span className="font-bold text-lg">Tên:</span>{" "}
              {personalInfo?.hoTen}
            </p>
            <p className="text-sm">
              <span className="font-bold text-lg">Email:</span>{" "}
              {personalInfo?.email}
            </p>
            <p className="text-sm">
              <span className="font-bold text-lg">Số điện thoại:</span>{" "}
              {personalInfo?.soDT}
            </p>
          </div>
        </Col>
      </Row>

      <div className="container pt-10">
          <h1>Các khoá học đang tham gia:</h1>
          <Collapse defaultActiveKey={["1"]} className="mt-5">
        {personalInfo?.chiTietKhoaHocGhiDanh?.map((course) => {
          return (
            <Panel
              className="font-bold"
              header={course.tenKhoaHoc}
              key={course.maKhoaHoc}
            >
              <div className="grid grid-cols-4">
                <div className="">
                  <img className="w-full" src={course.hinhAnh} alt="" />
                </div>
                <div className="col-span-3 pl-10">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2 px-10">
                      <p className="text-sm font-normal">
                        <span className="font-bold text-lg">Mô tả:</span>{" "}
                        {course.moTa}
                      </p>
                      <NavLink
                        className="inline-block "
                        to={`/khoa-hoc/${course.maKhoaHoc}`}
                      >
                        Xem chi tiết khoá học
                      </NavLink>
                    </div>
                    <div>
                      <Button
                        type="ghost"
                        className="bg-rose-600 text-white font-semibold hover:bg-red-900"
                        onClickCapture={() => {
                          return dispatch(
                            cancelEnroll({
                              maKhoaHoc: course.maKhoaHoc,
                              taiKhoan: personalInfo.taiKhoan,
                            })
                          );
                        }}
                      >
                        Huỷ tham gia
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Panel>
          );
        })}
      </Collapse>
      </div>
      
    </div>
  );
};

export default PersonalInfo;

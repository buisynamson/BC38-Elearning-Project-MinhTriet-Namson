import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { enrollCourse, fetchDetailCourse } from "./redux/action";
import { Button, Col, Row } from "antd";

const Course = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const courseInfo = useSelector((state) => state.homeReducer.detailCourse);
  const userInfo = useSelector(state => state.userReducer.userInfo);

  useEffect(() => {
    dispatch(fetchDetailCourse(params.id));
  }, []);

  return (
    <div className="container mx-auto py-14 xl:px-40 lg:px-32 md:px-10 sm:px-4">
      <Row>
        <Col lg={8} md={6} sm={24}>
          <div className="container">
            <img className="w-full" src={courseInfo?.hinhAnh} alt="" />
          </div>
        </Col>
        <Col lg={16} md={18} sm={24}>
          <div className="container lg:pl-20 md:pl-10 sm:pl-0">
            <div className="title flex items-center justify-center">
              <h1>{courseInfo?.tenKhoaHoc}</h1> 
              <span className="text-lg ml-8">-{courseInfo?.nguoiTao?.hoTen}-</span>
            </div>
            <div className="body py-5">
              <div className="subInfo justify-around mb-5 lg:flex md:flex sm:block">
                <p>
                  <span className="font-semibold text-gray-500">Ngày tạo:</span>{" "}
                  {courseInfo?.ngayTao}
                </p>
                <p>
                  <span className="font-semibold text-gray-500">Lượt xem:</span>{" "}
                  {courseInfo?.luotXem}
                </p>
                <p>
                  <span className="font-semibold text-gray-500">
                    Số lượng học viên:
                  </span>{" "}
                  {courseInfo?.soLuongHocVien}
                </p>
              </div>
              <p className="mb-4 text-sm">
                <span className="font-bold text-lg">Mô tả:</span> {courseInfo?.moTa}
              </p>
              <p className="text-sm">
                <span className="font-bold text-lg">Danh mục:</span>{" "}
                {courseInfo?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
              </p>

              <Button type="default" onClickCapture={()=>{return dispatch(enrollCourse({maKhoaHoc: params.id, taiKhoan: userInfo?.taiKhoan}))}} className="text-2xl h-max  font-semibold bg-black text-white mt-5">Đăng ký</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Course;

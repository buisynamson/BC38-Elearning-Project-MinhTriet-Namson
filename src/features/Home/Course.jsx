import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchDetailCourse } from "./redux/action";
import { Button, Col, Row } from "antd";

const Course = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const courseInfo = useSelector((state) => state.homeReducer.detailCourse);
  useEffect(() => {
    dispatch(fetchDetailCourse(params.id));
  }, []);
  console.log(courseInfo);
  return (
    <div className="container mx-auto py-14">
      <Row>
        <Col span={8}>
          <div className="container">
            <img className="w-full" src={courseInfo?.hinhAnh} alt="" />
          </div>
        </Col>
        <Col span={16}>
          <div className="container pl-20">
            <div className="title flex items-center justify-center">
              <h1>{courseInfo?.tenKhoaHoc}</h1> 
              <span className="text-lg ml-8">-{courseInfo?.nguoiTao?.hoTen}-</span>
            </div>
            <div className="body py-5">
              <div className="subInfo flex justify-around mb-5">
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

              <Button type="default" className="text-2xl h-max  font-semibold bg-black text-white mt-5">Đăng ký</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Course;

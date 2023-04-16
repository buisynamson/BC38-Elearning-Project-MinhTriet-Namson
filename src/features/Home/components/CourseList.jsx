import { Button, Card, Col, Row, Tabs } from "antd";
import { fetchCategoryCourseAction } from "features/Admin/Courses/redux/actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { truncateString } from "utils/truncateString";
import { fetchCourseListCategory } from "../redux/action";

const CourseList = () => {
  const dispatch = useDispatch();
  const { categoryCourse } = useSelector((state) => state.courseListReducer);
  const { courseList } = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(fetchCategoryCourseAction);
    dispatch(fetchCourseListCategory(categoryCourse[0]?.maDanhMuc));
  }, []);

  const onChange = (maDanhMuc) => {
    dispatch(fetchCourseListCategory(maDanhMuc));
  };

  const items = categoryCourse.map((category) => {
    return {
      key: category.maDanhMuc,
      label: <span className="text-base">{category.tenDanhMuc}</span>,
      children: (
        <Row gutter={30}>
          {courseList.length > 0 &&
            courseList.map((course) => {
              return (
                <Col className="my-4" key={course.maKhoaHoc} span={6}>
                  <NavLink to={`/khoa-hoc/${course.maKhoaHoc}`}>
                    <Card className="mx-3"
                      hoverable
                      style={{
                        width: "300px",
                        height: "100%",
                      }}
                      cover={
                        <img
                          className="w-full h-70 object-cover object-left-top"
                          alt="example"
                          src={course.hinhAnh}
                        />
                      }
                    >
                      <h3 className="text-yellow-500 font-normal">
                        {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                      </h3>
                      <h1 className="text-lg h-16 mt-2">{course.tenKhoaHoc}</h1>
                      <p className="h-16 text-gray-500">
                        {truncateString(course.moTa, 70)}
                      </p>
                      <h4 className="text-base">GV: Trương Tấn Khải</h4>
                      <p>
                        <span className="text-xl font-bold text-red-600 mr-4">
                          499.000 đ
                        </span>
                        <span className="line-through text-base text-gray-400">
                          999.000 đ
                        </span>
                      </p>

                      <NavLink to={`/khoa-hoc/${course.maKhoaHoc}`}>
                        <Button
                          className="mt-4"
                          size="large"
                          type="primary"
                          block
                        >
                          Xem chi tiết
                        </Button>
                      </NavLink>
                    </Card>
                  </NavLink>
                </Col>
              );
            })}
        </Row>
      ),
    };
  });

  return (
    <div className="container mx-auto px-6">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default CourseList;

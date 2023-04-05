import {
  DeleteOutlined,
  EditOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Button, Pagination, Table, Input } from "antd";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteCourseAction, fetchCourseListAction } from "./redux/actions";
import { truncateString } from "utils/truncateString";

const { Search } = Input;

const CoursesList = () => {
  const { courseList } = useSelector((state) => state.courseListReducer);
  const dispatch = useDispatch();

  const data = courseList.items;

  useEffect(() => {
    dispatch(fetchCourseListAction());
  }, []);

  const columns = [
    {
      title: "Mã khóa học",
      dataIndex: "maKhoaHoc",
      width: 160,
      sorter: (a, b) => {
        let maKhoaHocA = a.maKhoaHoc.toLowerCase().trim();
        let maKhoaHocB = b.maKhoaHoc.toLowerCase().trim();
        if (maKhoaHocA > maKhoaHocB) {
          return 1;
        }
        return -1;
      },
    },
    {
      title: "Tên khóa học",
      dataIndex: "tenKhoaHoc",
      width: 160,
      sorter: (a, b) => {
        let tenKhoaHocA = a.tenKhoaHoc.toLowerCase().trim();
        let tenKhoaHocB = b.tenKhoaHoc.toLowerCase().trim();
        if (tenKhoaHocA > tenKhoaHocB) {
          return 1;
        }
        return -1;
      },
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, course) => {
        return <img src={course.hinhAnh} width={100} />;
      },
    },
    {
      title: "Số lượng học viên",
      dataIndex: "soLuongHocVien",
      sorter: (a, b) => {
        let soLuongA = a.soLuongHocVien;
        let soLuongB = b.soLuongHocVien;
        if (soLuongA > soLuongB) {
          return 1;
        }
        return -1;
      },
    },
    {
      title: "Lượt xem",
      dataIndex: "luotXem",
      sorter: (a, b) => {
        let soLuongA = a.soLuongHocVien;
        let soLuongB = b.soLuongHocVien;
        if (soLuongA > soLuongB) {
          return 1;
        }
        return -1;
      },
    },
    {
      title: "Danh mục khóa học",
      dataIndex: "danhMucKhoaHoc",
      sorter: (a, b) => {
        let danhMucA = a.danhMucKhoaHoc.tenDanhMucKhoaHoc.toLowerCase().trim();
        let danhMucB = b.danhMucKhoaHoc.tenDanhMucKhoaHoc.toLowerCase().trim();
        if (danhMucA > danhMucB) {
          return 1;
        }
        return -1;
      },
      render: (text, course) => {
        return <p>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>;
      },
    },
    {
      title: "Người tạo",
      dataIndex: "nguoiTao",
      render: (text, course) => {
        return <p>{course?.nguoiTao.hoTen}</p>;
      },
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngayTao",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      render: (text, course) => {
        return <p>{truncateString(course?.moTa, 20)}</p>;
      },
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      width: 140,
      render: (text, course) => {
        return (
          <Fragment>
            <NavLink
              to={`/admin/courses/edit-course/${course.maKhoaHoc}`}
              className="bg-black text-white mr-2 p-2 rounded"
            >
              <EditOutlined />
            </NavLink>
            <NavLink
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có chắc muốn xóa khóa học " + course.tenKhoaHoc
                  )
                ) {
                  dispatch(deleteCourseAction(course.maKhoaHoc));
                }
              }}
              className="bg-red-700 text-white p-2 rounded"
            >
              <DeleteOutlined />
            </NavLink>
            <NavLink
              to={`/admin/register/user-list/${course.maKhoaHoc}`}
              className="bg-black text-white ml-2 p-2 rounded"
            >
              <FilterOutlined />
            </NavLink>
          </Fragment>
        );
      },
    },
  ];

  const onSearchCourse = (value, e) => {
    dispatch(fetchCourseListAction(1, value));
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-3xl py-8">Quản lý khóa học</h3>
        <NavLink to="/admin/courses/add-course">
          <Button type="primary">Thêm khóa học</Button>
        </NavLink>
      </div>
      <Search
        placeholder="Tìm kiếm"
        enterButton="Tìm kiếm"
        size="large"
        onSearch={onSearchCourse}
      />
      <Table
        className="mt-4 mb-8"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Pagination
        className="text-center py-8"
        defaultCurrent={courseList.currentPage}
        total={courseList.totalCount}
        pageSize={10}
        onChange={(page) => {
          dispatch(fetchCourseListAction(page));
        }}
      />
    </div>
  );
};

export default CoursesList;

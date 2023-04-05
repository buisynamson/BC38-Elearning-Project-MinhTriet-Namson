import {
  FileAddOutlined,
  FileTextOutlined,
  PlayCircleOutlined,
  TeamOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { logoutAction } from "features/Admin/Users/redux/action";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const AdminTemplate = () => {
  const { userSignin } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    if (userSignin.maLoaiNguoiDung !== "GV") {
      return navigate("/");
    }
  }, [userSignin]);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <img
          src="/img/600e8df5132cb60024b04964.jpg"
          alt=""
          className="w-full"
        />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
            <Menu.Item key="1" icon={<TeamOutlined />}>
              <NavLink to="/admin/users">Users List</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserAddOutlined />}>
              <NavLink to="/admin/users/add-user">Add User</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<PlayCircleOutlined />} title="Courses">
            <Menu.Item key="3" icon={<FileTextOutlined />}>
              <NavLink to="/admin/courses">Course List</NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<FileAddOutlined />}>
              <NavLink to="/admin/courses/add-course">Add Course</NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className="flex items-center justify-end"
        >
          <div className="flex items-center">
            <Button
              onClick={() => {
                logoutAction();
                navigate("/");
                window.location.reload();
              }}
              type="primary"
            >
              Đăng xuất
            </Button>
            <img
              src="/img/50d429ea5c9afe0ef9cb3c96f784bea4.jpg"
              className="w-14 rounded-full mx-4"
              alt=""
            />
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              margin: "16px 0",
              padding: "0px 30px",
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminTemplate;

import React, { useEffect, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import Search from "antd/es/transfer/search";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseListPage } from "./redux/action";

import InfiniteScroll from "react-infinite-scroll-component";

const onSearch = (value) => console.log(value);

export default function Category() {
  const dispatch = useDispatch();
  const courseList = useSelector((state) => state.homeReducer.coursePage);
  const [tempCourses, setTempCourses] = useState([]);
  const [page, setPage]= useState(1);
  const [pageSize, setPageSize]= useState(10);
  const [hasMore, setHasMore] = useState(true);
  const fetchCourseList = async ()=>{

    await dispatch(fetchCourseListPage(null,page));
    setTempCourses(arr=> [...courseList]);
    console.log(tempCourses);
    if(tempCourses?.items.length < 10){
      
      setPage(prev=> prev + 1);
    }else{
      setHasMore(false)
    }
    
  }

  useEffect(() => {
   dispatch(fetchCourseListPage(null,page));
  }, []);

  return (
    <div className="px-2">
      <div className="w-1/2 py-4 mb-3">
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
        />
      </div>

      <InfiniteScroll
        dataLength={tempCourses.length}
        next={fetchCourseList}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      ></InfiniteScroll>
      {tempCourses.map((course)=>{
        return <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
      })}
    
    </div>
  );
}

import React from "react";
import CourseList from "./components/CourseList";
import HomeCarousel from "./components/HomeCarousel";
import HomeIntro from "./components/HomeIntro";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <HomeIntro />
      <h3 className="text-center text-4xl mb-4">Khóa học</h3>
      <CourseList />
    </div>
  );
};

export default Home;

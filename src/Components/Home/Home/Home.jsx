import React from "react";
import Hero from "../Hero/Hero";
import HomeNoticePortal from "../NoticePortal/HomeNoticePortal/HomeNoticePortal";
import About from "@/src/Shared/About/About";
import FacultyMember from "../FacultyMember/FacultyMember/FacultyMember";
import StatisticsOrganization from "../StatisticsOrganization/StatisticsOrganization";

const Home = () => {
  return (
    <section>
      {/* ==== Hero Section */}
      <Hero />
      {/* ==== NoticePortal */}
      <HomeNoticePortal />
      {/* ==== About Us */}
      <div className="about-section">
      <h2 className="title-content ">About Us</h2>
      <About />
      </div>
      {/* ======== Faculty */}

      <FacultyMember />

      {/* ==== Statistice */}
      <StatisticsOrganization />
    </section>
  );
};

export default Home;

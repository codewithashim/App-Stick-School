import React from "react";
import Hero from "../Hero/Hero";
import About from "@/src/Shared/About/About";
import FacultyMember from "../FacultyMember/FacultyMember/FacultyMember";
import StatisticsOrganization from "../StatisticsOrganization/StatisticsOrganization";
import HomeNotice from "../HomeNotice/HomeNotice";
import Options from "../Options/Options";
import StatisticsStudent from "../StatisticsStudent/StatisticsStudent";
import Message from "../Message/Message";

const Home = () => {
  return (
    <section>
      {/* ==== Hero Section */}
      <Hero />
      {/* ==== NoticePortal */}
      <div className="container section-gap">
        <h2 className="title-content">Notice</h2>
        <HomeNotice />
      </div>

      {/* === Options */}
      <div className="p-10 section-gap bg-slate-50">
        <Options />
      </div>

      {/* ==== About Us */}
      <div className="section-gap">
        <h2 className="title-content ">About Us</h2>
        <About />
      </div>

      {/* ==== Statistice Organization  */}
      <div className="p-10 section-gap bg-slate-50">
        <div className="mb-5">
          <h2 className="title-content ">Statistics</h2>
          <p className="text-center text-[1.5rem]">
            At a Glance Our Organization
          </p>
        </div>
        <StatisticsOrganization />
      </div>

      {/* ======== Message */}
      <div className="section-gap">
        <Message />
      </div>

      {/* ======== Faculty */}
      <FacultyMember />

      {/* ==== Statistice */}
      <div className="p-4 section-gap ">
        <div className="mb-5">
          <h2 className="title-content ">Student Statistics</h2>
          <p className="text-center text-[1.5rem]">Class Wise Student</p>
        </div>
        <StatisticsStudent />
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import HomeNotice from "../HomeNotice/HomeNotice";
import Options from "../Options/Options";

const HomeNoticePortal = () => {
  return (
    <section className="home-notice-portal">
      <div className="container">
        <div className="grid md:grid-cols-2">
          <Options />
          <HomeNotice />
        </div>
      </div>
    </section>
  );
};

export default HomeNoticePortal;

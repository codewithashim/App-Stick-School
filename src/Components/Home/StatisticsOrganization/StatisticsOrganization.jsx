import useStatistic from "@/src/Hooks/useStatistic";
import React from "react";

const StatisticsOrganization = () => {
  const {statisticData}= useStatistic()
  return (
    <section>
      <div className="container">
      <h2 className="my-4 title-content">Statistics</h2>
      <p className="text-center">At a Glance Our Organization</p>


        <div className="flex flex-col items-center justify-center gap-4 md:flex-row organigection-statice-content">
          {
            statisticData &&
            statisticData?.slice(0,6)?.map((item) => {
            return (
              <div className="organigection-statice-content-item pointer" key={item?._id}>
                <h2 className="font-bold mb-1 text-[1.6rem]">{item?.counte}</h2>
                <h4>{item.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsOrganization;

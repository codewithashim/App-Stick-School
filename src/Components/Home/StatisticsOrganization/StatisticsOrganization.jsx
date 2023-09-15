import useStatistic from "@/src/Hooks/useStatistic";
import React from "react";

const StatisticsOrganization = () => {
  const { organizationStatistic}= useStatistic()

  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row organigection-statice-content">
          {
            organizationStatistic &&
            organizationStatistic?.slice(0,4)?.map((item) => {
            return (
              <div className="organigection-statice-content-item pointer" key={item?._id}>
                <h2 className="font-bold mb-1 text-[1.6rem]">{item?.counte}</h2>
                <h4>{item?.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsOrganization;

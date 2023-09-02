import { OrganigectionStatistic } from "@/src/Utils/MockData/StatisticMockData";
import React from "react";

const StatisticsOrganization = () => {
  return (
    <section>
      <div className="container">
      <h2 className="my-4 title-content">Statistics</h2>
      <p className="text-center">At a Glance Our Organization</p>


        <div className="flex flex-col items-center justify-center gap-4 md:flex-row organigection-statice-content">
          {OrganigectionStatistic.map((item) => {
            return (
              <div className="p-6 m-4 text-center border rounded-s-full organigection-statice-content-item pointer" key={item.id}>
                <h2 className="font-bold text-[1rem]">{item.count}</h2>
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

import React from "react";
import ManegStatisticCard from "./ManegStatisticCard";
import useStatistic from "@/src/Hooks/useStatistic";

const ManegStatistic = () => {
    const { statisticData } = useStatistic() 

    return (
      <section>
        <h2 className="py-4 text-2xl font-bold ">Manage Statistic</h2>
  
        <div className="grid items-center justify-center gap-4 md:grid-cols-3">
          {statisticData &&
            statisticData?.length &&
            statisticData?.map((statistic) => {
              return <ManegStatisticCard key={statistic?._id} statistic={statistic} />;
            })}
        </div>
      </section>
    );
};

export default ManegStatistic;
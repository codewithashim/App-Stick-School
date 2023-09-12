import useResult from "@/src/Hooks/useResult";
import React from "react";
import ManegResultCard from "./ManegResultCard";

const ManegResultComponent = () => {
  const { resultData } = useResult();

  return (
    <section>
      <h2 className="py-4 text-2xl font-bold ">Manage Result</h2>

      <div className="grid items-center justify-center gap-4 md:grid-cols-3">
        {resultData &&
          resultData?.length &&
          resultData?.map((result) => {
            return <ManegResultCard key={result?._id} result={result} />;
          })}
      </div>
    </section>
  );
};

export default ManegResultComponent;

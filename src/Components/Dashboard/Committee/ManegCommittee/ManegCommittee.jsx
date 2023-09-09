import React from "react";
import ManegCommitteeCard from "./ManegCommitteeCard";
import useCommittee from "@/src/Hooks/useCommittee";

const ManegCommittee = () => {
  const { committeeData } = useCommittee();

  return (
    <section>
      <h2 className="py-4 text-2xl font-bold ">Manage Committee</h2>

      <div className="grid items-center justify-center gap-4 md:grid-cols-3">
        {committeeData &&
          committeeData?.length &&
          committeeData?.map((committee) => {
            return <ManegCommitteeCard key={committee?._id} committee={committee} />;
          })}
      </div>
    </section>
  );
};

export default ManegCommittee;
